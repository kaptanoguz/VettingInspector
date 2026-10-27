#!/usr/bin/env python3
"""
Company SMS → Vetting Inspector importer.

Reads the company's SIRE 2.0 working files in tools/source/ and writes
js/company.js, which the app merges into the checklist:

  Torlak_SIRE_2_0_Tum_Sorular.xlsx              all SIRE 2.0 questions + manual refs + answers
  Torlak_SIRE_2_0_Secilmis_Sorular_Zabitler.xlsx questions selected for officers (marked priority)
  Torlak_SIRE_2_0_Rating_Mulakat_Sorulari.docx    rating pocket agenda (manual § refs, Q&A)

Only the official question text, the question type, the officer priority flag,
the inspector-focus notes and the rating pocket agenda are imported.

The spreadsheet's "expected answers" and manual references are NOT imported:
304 of 344 are boiler-plate ("Evet, X ile ilgili prosedürlerimiz tam olarak
uygulanmaktadır"), and the remaining ones cite form numbers (SMS-Bx-Fyy) and
section numbers that do not exist in the SQEMS manuals. Company answers are
written from the manuals themselves in js/sire/*.js.

Usage:  python3 tools/import_company.py
Needs:  openpyxl, python-docx   (pip install openpyxl python-docx)
"""
import datetime
import json
import pathlib
import re

import docx
import openpyxl

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "source"
OUT = ROOT.parent / "js" / "company.js"

ALL_XLSX = SRC / "Torlak_SIRE_2_0_Tum_Sorular.xlsx"
SEL_XLSX = SRC / "Torlak_SIRE_2_0_Secilmis_Sorular_Zabitler.xlsx"
RATING_DOCX = SRC / "Torlak_SIRE_2_0_Rating_Mulakat_Sorulari.docx"

TEMPLATE = [
    "ile ilgili şirket prosedürlerimiz (SMS) ve uluslararası kurallar",
    "all procedures regarding",
    "Kanıt Kontrolü: İlgili logbook kayıtları, ERP/PMS",
    "(SIRE 2.0 gerekliliklerine tam uyum)",
    "zabitlerimizin talimatlarına ve gemi emniyet kurallarına her zaman uyarız",
]
QUESTION_TYPES = {"Core", "Rotational 1", "Rotational 2"}


def is_template(text):
    return any(t in text for t in TEMPLATE)


def clean(text):
    text = (text or "").strip()
    text = re.sub(r"\n{3,}", "\n\n", text)
    if len(text) > 1 and text[0] in "\"“" and text[-1] in "\"”":
        text = text[1:-1].strip()
    return text


def read_sheet(path):
    ws = openpyxl.load_workbook(path, data_only=True).worksheets[0]
    rows = list(ws.iter_rows(values_only=True))
    keys = ["no", "q", "ref", "tr", "en", "insp", "reg", "rating"]
    out = []
    for r in rows[1:]:
        if r and r[0]:
            out.append({k: ("" if v is None else str(v)) for k, v in zip(keys, r)})
    return out


def import_xlsx():
    company = {}
    for row in read_sheet(ALL_XLSX):
        no = row["no"].strip()
        q = row["q"].strip()
        m = re.search(r"\[Short Text:\s*(.*?)\]", q, re.S)
        short = m.group(1).strip().rstrip(".") if m else ""
        question = re.sub(r"\s*\[Short Text:.*?\]\s*$", "", q, flags=re.S).strip()
        item = {"q": question, "short": short}

        ref = clean(row["ref"])
        if ref in QUESTION_TYPES:
            item["type"] = ref

        if row["insp"] and not is_template(row["insp"]):
            item["insp"] = clean(row["insp"])
        if row["reg"] and not is_template(row["reg"]) and clean(row["reg"]) not in QUESTION_TYPES:
            item["reg"] = clean(row["reg"])
        company[no] = item

    for row in read_sheet(SEL_XLSX):
        no = row["no"].strip()
        if no in company:
            company[no]["prio"] = 1
    return company


def import_docx(company):
    d = docx.Document(RATING_DOCX)

    # Topic sentences: after the agenda, each item is "EN sentence\nTR sentence" then "SLOGAN".
    paras = [p.text.strip() for p in d.paragraphs if p.text.strip()]
    start = next(i for i, p in enumerate(paras) if p.startswith("AGENDA")) + 1
    topics = []
    for i in range(start, len(paras) - 1, 2):
        en, _, tr = paras[i].partition("\n")
        topics.append([en.strip(), tr.strip(), paras[i + 1].strip()])

    tables = d.tables[1:]
    for n in range(0, len(tables) - 1, 2):
        head, body = tables[n], tables[n + 1]
        head_txt = head.rows[0].cells[0].text + " | " + " | ".join(c.text for c in head.rows[0].cells[1:])
        m = re.search(r"SIRE 2\.0\s*\|\s*([\d.]+)", head_txt)
        title = head.rows[0].cells[0].text.strip()
        no = m.group(1) if m else None
        if not no:
            continue
        info = head.rows[1].cells[0].text if len(head.rows) > 1 else head.rows[0].cells[-1].text
        loc = re.search(r"LOCATION / YER:\s*(.*)", info)
        ans = re.search(r"COMPANY ANSWER / ŞİRKET CEVABI:\s*(.*)", info, re.S)

        body_txt = "\n".join(c.text for row in body.rows for c in row.cells)
        body_txt = "\n".join(dict.fromkeys(body_txt.split("\n")))  # merged cells repeat text
        know = []
        for line in body_txt.split("\n"):
            line = line.strip()
            if line.startswith("•"):
                en, _, tr = line[1:].partition(" / ")
                know.append([en.strip(), tr.strip()])
        qa = re.findall(r"Q:\s*(.*?)\s*\nA:\s*(.*?)(?=\nQ:|\Z)", body_txt, re.S)

        rating = {"title": title, "know": know}
        if loc:
            rating["loc"] = loc.group(1).strip()
        if ans:
            rating["ans"] = clean(ans.group(1))
        if len(qa) >= 1:
            rating["qEn"], rating["aEn"] = clean(qa[0][0]), clean(qa[0][1])
        if len(qa) >= 2:
            rating["qTr"], rating["aTr"] = clean(qa[1][0]), clean(qa[1][1])

        idx = n // 2
        if idx < len(topics):
            rating["topicEn"], rating["topicTr"], rating["slogan"] = topics[idx]

        item = company.setdefault(no, {"q": rating.get("topicEn", ""), "short": title.split(" / ")[0].capitalize()})
        item["rating"] = rating
    return company


def main():
    company = import_docx(import_xlsx())
    meta = {
        "generated": datetime.date.today().isoformat(),
        "sources": [ALL_XLSX.name, SEL_XLSX.name, RATING_DOCX.name],
        "questions": len(company),
        "withInspectorNotes": sum(1 for v in company.values() if "insp" in v),
        "withRating": sum(1 for v in company.values() if "rating" in v),
    }
    js = (
        "/* Generated by tools/import_company.py — do not edit by hand.\n"
        "   Company SMS references and answers keyed by SIRE 2.0 question number. */\n"
        f"const COMPANY_META = {json.dumps(meta, ensure_ascii=False)};\n"
        f"const COMPANY = {json.dumps(company, ensure_ascii=False, indent=0)};\n"
    )
    OUT.write_text(js, encoding="utf-8")
    print(json.dumps(meta, ensure_ascii=False))


if __name__ == "__main__":
    main()
