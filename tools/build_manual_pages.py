#!/usr/bin/env python3
"""
SQEMS manual page index → js/manual-pages.js

Finds the PDF page of every numbered section heading in the company manuals
so a reference such as "B2 §2.2.3.1" in the app opens the PDF at that page.

Reads the `pdftotext -layout` copies (pages are split by form feeds):
  tools/source/manuals/full/B1.txt … B7.txt
  tools/source/manuals/MSMP_LMP_ADA.pdf.txt

Every cited section is also cut out as its own small PDF in
tools/source/manuals/pages/ (B1_5.5.1.pdf …), from its heading to the start of
the next section, so it opens on the procedure in any PDF viewer — many
viewers ignore "#page=N". Needs Ghostscript (gs) and poppler-utils
(pdfinfo, pdftotext, pdfseparate, pdfunite).

Table-of-contents pages are skipped; for each section the first heading on a
body page wins. Sections with no heading of their own fall back to the parent
section in the app (e.g. §9.13.1.2.2 → §9.13.1.2 → §9.13).

Usage:  python3 tools/build_manual_pages.py
Rebuild the .txt files first if a manual changes:
        pdftotext -layout B1.pdf B1.txt
"""
import bisect
import datetime
import json
import pathlib
import re
import shutil
import subprocess
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
MAN = ROOT / "tools/source/manuals"

BOOKS = {f"B{n}": (f"full/B{n}.pdf", f"full/B{n}.txt") for n in range(1, 8)}
BOOKS["MSMP"] = ("MSMP_LMP_ADA.pdf", "MSMP_LMP_ADA.pdf.txt")

HEAD = re.compile(r"^\s{0,15}(\d+(?:\.\d+)+|\d+)\.?\s+([A-Z][^\n]{2,})$")
NUM = re.compile(r"^\s{0,15}\d+(?:\.\d+)+\.?(?:\s|$)")
APP = re.compile(r"^\s{0,15}(?:APPENDIX|Appendix|App)\s*[-–.]?\s*0?(\d+)\b(?!-)")

# A reference: book, "§2.2.3.1", "App-02", or a further section after "/" ("§2.3.6 / 2.3.26").
# Keep in step with refHtml() in js/app.js.
REF = re.compile(r"\b(B[1-7]|MSMP)\b|§\s*(\d+(?:\.\d+)*)|\b(App-\d+)\b|/\s*(\d+(?:\.\d+)+)")

# Pages whose heading is only in the PDF image, checked by hand.
PAGES = MAN / "pages"
MAX_PAGES = 15  # an extract never runs longer than this

FIXED = {"B7": {"App-02": 49}}  # Officers' Shore Based Training Matrix


def is_toc(page):
    """Contents pages pack many section numbers (headings, or numbers wrapped onto their own line)."""
    numbered = {m.group(0).strip(" .") for m in map(NUM.match, page.splitlines()) if m}
    return len(numbered) >= 10 or re.search(r"(?i)table of contents|içindekiler", page) is not None


def index(txt):
    pages = (MAN / txt).read_text(encoding="utf-8", errors="replace").split("\f")
    cand, sec = {}, {}
    for n, page in enumerate(pages, 1):
        if is_toc(page):
            continue
        for line in page.splitlines():
            m = HEAD.match(line)
            if m:
                cand.setdefault(m.group(1), []).append(n)
            a = APP.match(line)
            if a:
                sec.setdefault(f"App-{int(a.group(1)):02d}", n)
    sec.update(monotone(cand))
    return sec, len(pages)


def monotone(cand):
    """Sections run in page order, so keep the longest chain of (section, page) picks
    whose pages never go back. Stray matches (cross-references, numbered lists,
    appendix forms) fall out of the chain; those sections use their parent instead."""
    keys = sorted(cand, key=lambda k: [int(x) for x in k.split(".")])
    pairs = [(i, p) for i, k in enumerate(keys) for p in sorted(set(cand[k]), reverse=True)]
    tails, tail_at, prev = [], [], {}
    for j, (i, p) in enumerate(pairs):
        pos = bisect.bisect_right(tails, p)
        if pos == len(tails):
            tails.append(p); tail_at.append(j)
        else:
            tails[pos] = p; tail_at[pos] = j
        prev[j] = tail_at[pos - 1] if pos else None
    out, j = {}, tail_at[-1] if tail_at else None
    while j is not None:
        i, p = pairs[j]
        out[keys[i]] = p
        j = prev[j]
    return out


def used_refs():
    """Every (book, section) the app cites, to report which ones need a fallback."""
    text = "".join(p.read_text(encoding="utf-8") for p in (ROOT / "js").rglob("*.js")
                   if p.name != "manual-pages.js")
    refs = set()
    found = re.findall(r'(?:C|QC)\("([^"]*)"|"loc": *"([^"]*)"', text)
    found += [("B6 §" + s,) for s in re.findall(r'\bB6\("([^"]*)"', text)]  # ch05.js drill helper
    for s in found:
        book = None
        for tok in re.finditer(REF, "".join(s)):
            if tok.group(1):
                book = tok.group(1)
            elif book:
                refs.add((book, tok.group(2) or tok.group(3) or tok.group(4)))
    return refs


def numkey(k):
    return [int(x) for x in k.split(".")] if not k.startswith("App") else [10 ** 6, int(k[4:])]


def extract_range(sec, k, last):
    """Pages from the heading of k up to and including the page where the next
    section that is not part of k begins."""
    start, end = sec[k], last
    for other in sorted(sec, key=numkey):
        if numkey(other) > numkey(k) and not other.startswith(k + ".") and sec[other] >= start:
            end = sec[other]
            break
    return start, min(end, start + MAX_PAGES - 1)


def pdf_pages(pdf):
    info = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True, check=True).stdout
    return int(re.search(r"^Pages:\s+(\d+)", info, re.M).group(1))


def cut(pdf, a, b, dest, sec):
    """Ghostscript rewrites the pages with shared fonts: ~40 KB a page instead of the
    ~250 KB a page that a plain page split gives (every page carries all fonts).
    Some fonts lose their text layer in Ghostscript (B1: search and copy give
    gibberish); then the plain split is used."""
    subprocess.run([shutil.which("gs") or "/usr/bin/gs", "-q", "-dNOPAUSE", "-dBATCH", "-dSAFER",
                    "-sDEVICE=pdfwrite", f"-dFirstPage={a}", f"-dLastPage={b}",
                    f"-sOutputFile={dest}", str(pdf)], check=True)
    if has_text(dest, sec):
        return "gs"
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(["pdfseparate", "-f", str(a), "-l", str(b), str(pdf), f"{tmp}/p%d.pdf"], check=True)
        parts = [f"{tmp}/p{n}.pdf" for n in range(a, b + 1)]
        subprocess.run(["pdfunite", *parts, str(dest)] if len(parts) > 1 else ["cp", parts[0], str(dest)], check=True)
    return "split"


def has_text(pdf, sec):
    """Is the section heading readable as text on the first page?"""
    if sec.startswith("App"):
        return True
    text = subprocess.run(["pdftotext", "-f", "1", "-l", "1", "-layout", str(pdf), "-"],
                          capture_output=True, text=True).stdout
    return re.search(r"(?m)^\s*" + re.escape(sec), text) is not None


def main():
    out, total = {}, 0
    for book, (pdf, txt) in BOOKS.items():
        sec, _ = index(txt)
        n = pdf_pages(MAN / pdf)
        sec.update(FIXED.get(book, {}))
        out[book] = {"pdf": "tools/source/manuals/" + pdf, "pages": n, "s": sec}
        total += len(sec)

    exact = fallback = missing = 0
    cuts = set()
    for book, s in sorted(used_refs()):
        k = s
        while k not in out[book]["s"] and "." in k:
            k = k.rsplit(".", 1)[0]
        if k in out[book]["s"]:
            cuts.add((book, k))
        if k == s:
            exact += 1
        elif k in out[book]["s"]:
            fallback += 1
            print(f"  fallback {book} §{s} → §{k} (p. {out[book]['s'][k]})")
        else:
            missing += 1
            print(f"  MISSING  {book} §{s}")

    if PAGES.exists():
        shutil.rmtree(PAGES)
    PAGES.mkdir()
    how = {"gs": 0, "split": 0}
    for book, k in sorted(cuts):
        b = out[book]
        a, z = extract_range(b["s"], k, b["pages"])
        how[cut(MAN / BOOKS[book][0], a, z, PAGES / f"{book}_{k}.pdf", k)] += 1
        b.setdefault("x", {})[k] = [a, z]
    size = sum(f.stat().st_size for f in PAGES.iterdir()) / 1e6
    print(f"{len(cuts)} section extracts in {PAGES.relative_to(ROOT)} ({size:.1f} MB; {how['split']} by plain split)")

    js = ("/* Generated by tools/build_manual_pages.py — do not edit by hand.\n"
          "   Section → PDF page in the SQEMS manuals, for clickable references.\n"
          "   x: cited sections cut out to tools/source/manuals/pages/<book>_<section>.pdf, [from, to] page. */\n"
          f"const MANUAL_PAGES = {json.dumps(out, ensure_ascii=False, separators=(',', ':'))};\n")
    (ROOT / "js/manual-pages.js").write_text(js, encoding="utf-8")
    print(f"{total} headings indexed · cited sections: {exact} exact, {fallback} via parent, {missing} missing"
          f" · {datetime.date.today()}")


if __name__ == "__main__":
    main()
