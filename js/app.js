/* ═══════════════════════════════════════════════════════════════════════
   Vetting Inspector — app
   Per rank, three ways to prepare:
     Checklist  · every SIRE 2.0 question for the rank, with the company
                  SQEMS procedure that answers it; mark Open / Needs work /
                  Ready and keep notes
     Interview  · the inspector's question, answer aloud, then compare
     Exam       · short multiple-choice test, company questions included
   State lives in localStorage; no network needed.
   ═══════════════════════════════════════════════════════════════════════ */

const T = {
    tr: {
        brandSub: "SIRE 2.0 hazırlık · şirket SQEMS",
        pickRank: "Rütbe seçin",
        pickHint: "Denetçinin size soracağı SIRE 2.0 soruları, her birinin şirket prosedüründeki cevabı, mülakat pratiği ve kısa bir sınav.",
        deck: "Güverte", engine: "Makine",
        questions: "soru", ready: "hazır",
        tabChecklist: "Kontrol listesi", tabInterview: "Mülakat", tabExam: "Sınav",
        sOpen: "Açık", sWork: "Eksik var", sReady: "Hazır",
        ofReady: "hazır", needWork: "eksik", open: "açık",
        fAll: "Tümü", fPrio: "Öncelikli", fHr: "Yüksek risk",
        search: "Soru, numara veya not ara",
        company: "Şirket prosedürü", show: "Ne göstermeli", evidence: "Kanıt", pitfall: "Sık bulgu",
        noCompany: "Şirket manuellerinde (B1–B7) bu soruya özel bir prosedür yok; sektör rehberine göre hazırlanın.",
        sireQ: "SIRE 2.0 sorusu",
        rating: "Tayfa cep rehberi", know: "Bilmen gerekenler", mayAsk: "Denetçi sorabilir",
        inspNotes: "Denetçi ne arar", regs: "İlgili kurallar", trOnly: "",
        notes: "Not veya düzeltici faaliyet",
        hr: "Yüksek risk", prio: "Öncelikli",
        noMatch: "Bu filtreye uyan soru yok.",
        expandAll: "Tümünü aç", collapseAll: "Tümünü kapat",
        ivIntro: "Denetçi sizinle çalıştığınız yerde, genelde İngilizce konuşur. Soruyu okuyun, cevabı yüksek sesle verin, sonra şirket prosedürüyle karşılaştırın.",
        ivAll: "Tüm sorular", ivOpen: "Hazır olmayanlar", ivPrio: "Öncelikliler",
        start: "Başla", ivAsks: "Denetçi soruyor",
        reveal: "Cevabı göster", again: "Tekrar sor", knew: "Biliyorum",
        ivDone: "Mülakat bitti", ivKnew: "bilinen", ivAgainN: "tekrar edilecek",
        ivRepeat: "Tekrar edilecekleri çalış", restart: "Baştan başla",
        exIntro: "Çoktan seçmeli. Her cevaptan sonra kısa açıklama gelir.",
        exLen: "Soru sayısı", exAll: "Tümü", exScope: "Kapsam", exMixed: "Karışık", exCompany: "Yalnız şirket prosedürleri",
        exLast: "Son", exBest: "En iyi",
        next: "Sonraki", finish: "Bitir", correct: "Doğru", wrong: "Yanlış",
        result: "Sonuç", passed: "Geçti", failed: "Tekrar çalışın",
        review: "Yanlış cevaplar", yourAns: "Sizin cevabınız", rightAns: "Doğru cevap",
        retry: "Yeni sınav",
        keysIv: "Boşluk göster · 1 tekrar · 2 biliyorum",
        keysEx: "1–4 seç · Enter sonraki",
        backup: "Yedekle", restore: "Geri yükle", reset: "İlerlemeyi sil",
        resetQ: "Tüm rütbelerin ilerlemesi ve notları silinsin mi?",
        saved: "Yedek indirildi", restored: "Yedek yüklendi", badFile: "Geçersiz yedek dosyası", cleared: "İlerleme silindi",
        themes: { auto: "Tema: otomatik", chart: "Tema: açık", bridge: "Tema: koyu", night: "Tema: gece (kırmızı)" },
        print: "Raporu yazdır",
        reportTitle: "Vetting hazırlık raporu", reportDate: "Tarih", status: "Durum",
        sources: "Şirket içeriği, şirketin SQEMS manuellerinin tam setinden (B1 SMM, B2 HSSEQ, B3 Bridge & Deck, B4 Cargo, B5 Engine, B6 Emergency, B7 Training), M/T ADA Palamar Sistemi ve Halat Yönetim Planı'ndan (MSMP) ve tayfa cep rehberinden alınmıştır.",
        disclaimer: "Hazırlık aracıdır; geçerli olan gemideki kontrollü SMS kopyasıdır.",
        offline: "İnternet gerekmez · veriler bu cihazda kalır",
        chapter: "Bölüm",
        qTitle: "SIRE 2.0 Questionnaire",
        qHomeSub: "Petrol ve kimyasal tanker soru listesinin tamamı; bölüm ve departmana göre. Her maddede şirket prosedürü, sonuç ve remark. Rapor alınabilir.",
        qOpen: "Aç",
        dAll: "Tümü", dDeck: "Güverte", dEngine: "Makine",
        rOk: "Uygun", rNc: "N/C", rNa: "N/A", rBlank: "Boş",
        rOkLong: "Uygun", rNcLong: "Uygunsuzluk (N/C)", rNaLong: "Uygulanmaz (N/A)",
        onlyNc: "Yalnız N/C", withRemark: "Remark olanlar",
        remark: "Remark — ör. N/C: açıklama, düzeltici faaliyet",
        report: "Rapor", repAll: "Tüm sorular", repNc: "Yalnız N/C ve remark olanlar",
        repPrint: "Yazdır / PDF", repCsv: "Excel (CSV)",
        mShip: "Gemi", mPort: "Liman", mDate: "Tarih", mBy: "Hazırlayan",
        clearForm: "Formu temizle", clearFormQ: "Questionnaire'deki tüm sonuç ve remarklar silinsin mi?",
        qReportTitle: "SIRE 2.0 Questionnaire — Ön denetim raporu",
        openPdf: "Manuelde aç · sayfa",
        colNo: "No", colQ: "Soru", colRef: "Şirket prosedürü", colRes: "Sonuç", colRem: "Remark", colDept: "Departman"
    },
    en: {
        brandSub: "SIRE 2.0 preparation · company SQEMS",
        pickRank: "Choose your rank",
        pickHint: "The SIRE 2.0 questions the inspector will ask you, the company procedure that answers each one, interview practice and a short exam.",
        deck: "Deck", engine: "Engine",
        questions: "questions", ready: "ready",
        tabChecklist: "Checklist", tabInterview: "Interview", tabExam: "Exam",
        sOpen: "Open", sWork: "Needs work", sReady: "Ready",
        ofReady: "ready", needWork: "need work", open: "open",
        fAll: "All", fPrio: "Priority", fHr: "High risk",
        search: "Search question, number or note",
        company: "Company procedure", show: "What to show", evidence: "Evidence", pitfall: "Common finding",
        noCompany: "The company manuals (B1–B7) have no specific procedure for this question; prepare from industry guidance.",
        sireQ: "SIRE 2.0 question",
        rating: "Rating pocket guide", know: "You must know", mayAsk: "The inspector may ask",
        inspNotes: "What the inspector looks for", regs: "Regulations", trOnly: " (Turkish)",
        notes: "Note or corrective action",
        hr: "High risk", prio: "Priority",
        noMatch: "No questions match this filter.",
        expandAll: "Expand all", collapseAll: "Collapse all",
        ivIntro: "The inspector talks to you at your workplace, usually in English. Read the question, answer aloud, then compare with the company procedure.",
        ivAll: "All questions", ivOpen: "Not ready yet", ivPrio: "Priority",
        start: "Start", ivAsks: "The inspector asks",
        reveal: "Show answer", again: "Ask again", knew: "I knew it",
        ivDone: "Interview complete", ivKnew: "known", ivAgainN: "to review",
        ivRepeat: "Practise the ones to review", restart: "Start over",
        exIntro: "Multiple choice. A short explanation follows each answer.",
        exLen: "Questions", exAll: "All", exScope: "Scope", exMixed: "Mixed", exCompany: "Company procedures only",
        exLast: "Last", exBest: "Best",
        next: "Next", finish: "Finish", correct: "Correct", wrong: "Wrong",
        result: "Result", passed: "Passed", failed: "Keep practising",
        review: "Answered wrong", yourAns: "Your answer", rightAns: "Correct answer",
        retry: "New exam",
        keysIv: "Space show · 1 again · 2 knew it",
        keysEx: "1–4 choose · Enter next",
        backup: "Back up", restore: "Restore", reset: "Clear progress",
        resetQ: "Clear progress and notes for every rank?",
        saved: "Backup downloaded", restored: "Backup restored", badFile: "Invalid backup file", cleared: "Progress cleared",
        themes: { auto: "Theme: auto", chart: "Theme: light", bridge: "Theme: dark", night: "Theme: night (red)" },
        print: "Print report",
        reportTitle: "Vetting readiness report", reportDate: "Date", status: "Status",
        sources: "Company content is taken from the full set of the company's SQEMS manuals (B1 SMM, B2 HSSEQ, B3 Bridge & Deck, B4 Cargo, B5 Engine, B6 Emergency, B7 Training), the M/T ADA Mooring System & Line Management Plan (MSMP) and the rating pocket agenda.",
        disclaimer: "A preparation aid; the controlled SMS copy on board prevails.",
        offline: "No internet needed · data stays on this device",
        chapter: "Chapter",
        qTitle: "SIRE 2.0 Questionnaire",
        qHomeSub: "The full oil and chemical tanker question set, by chapter and department. Company procedure, result and remark on every item. Printable report.",
        qOpen: "Open",
        dAll: "All", dDeck: "Deck", dEngine: "Engine",
        rOk: "OK", rNc: "N/C", rNa: "N/A", rBlank: "Blank",
        rOkLong: "Satisfactory", rNcLong: "Non-conformity (N/C)", rNaLong: "Not applicable (N/A)",
        onlyNc: "N/C only", withRemark: "With remark",
        remark: "Remark — e.g. N/C: finding, corrective action",
        report: "Report", repAll: "All questions", repNc: "N/C and remarks only",
        repPrint: "Print / PDF", repCsv: "Excel (CSV)",
        mShip: "Vessel", mPort: "Port", mDate: "Date", mBy: "Prepared by",
        clearForm: "Clear form", clearFormQ: "Clear every result and remark in the questionnaire?",
        qReportTitle: "SIRE 2.0 Questionnaire — Pre-inspection report",
        openPdf: "Open in manual · page",
        colNo: "No", colQ: "Question", colRef: "Company procedure", colRes: "Result", colRem: "Remark", colDept: "Department"
    }
};

const THEMES = ["auto", "chart", "bridge", "night"];
const PASS_MARK = 80;
const STORE_KEY = "vettingInspector.v2";
const PREF_KEY = "vettingInspector.prefs.v2";

/* ── State ───────────────────────────────────────────────────────────── */
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } };

let data = load(STORE_KEY, { ranks: {} });
let prefs = Object.assign({
    lang: (navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en",
    theme: "auto", rank: null, tab: "checklist", status: "all", prio: false, hr: false,
    examLen: 10, examScope: "mixed", page: null, qDept: "all", qNc: false, qRem: false, qRep: "all"
}, load(PREF_KEY, {}));

const ui = { search: "", open: new Set(), chOpen: new Set(), qOpen: new Set(), qCh: new Set(), iv: null, ex: null, ivScope: "open" };

const persist = () => save(STORE_KEY, data);
const persistPrefs = () => save(PREF_KEY, prefs);
const t = k => T[prefs.lang][k];
const L = o => o[prefs.lang];
const rankData = r => (data.ranks[r] ||= { items: {}, exam: {} });
const itemState = (r, id) => data.ranks[r]?.items[id] || { s: 0, n: "" };
const itemsFor = r => ITEMS.filter(i => i.ranks.includes(r));
const examFor = r => EXAM.filter(q => !q.ranks || q.ranks.includes(r));
const rankById = id => RANKS.find(r => r.id === id);
const official = i => COMPANY[i.id] || {};
const isRating = r => r === "DR" || r === "ER";

function title(i) {
    if (prefs.lang === "tr") return i.tr;
    const s = official(i).short || i.tr;
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function readiness(r) {
    const list = itemsFor(r);
    let ready = 0, work = 0;
    for (const i of list) {
        const s = itemState(r, i.id).s;
        if (s === 2) ready++; else if (s === 1) work++;
    }
    return { total: list.length, ready, work, open: list.length - ready - work, pct: list.length ? Math.round(ready / list.length * 100) : 0 };
}

/* ── Helpers ─────────────────────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
/* Manual references ("B2 §2.2.3.1 · §2.2.1"): shown without "§"; each section opens its own
   cut-out PDF (tools/source/manuals/pages/, starts on the heading in any viewer), else the
   manual at its page. Parent section if it has no heading (js/manual-pages.js). */
const refTxt = r => String(r ?? "").replace(/§\s*/g, "");
const manualPage = (book, sec) => {
    const b = typeof MANUAL_PAGES !== "undefined" && MANUAL_PAGES[book];
    if (!b) return null;
    while (!(sec in b.s) && sec.includes(".")) sec = sec.slice(0, sec.lastIndexOf("."));
    if (!b.s[sec]) return null;
    const x = b.x?.[sec];
    return x ? { url: `tools/source/manuals/pages/${book}_${sec}.pdf`, page: x[0] === x[1] ? x[0] : `${x[0]}–${x[1]}` }
             : { url: `${b.pdf}#page=${b.s[sec]}`, page: b.s[sec] };
};
const refHtml = r => {
    const s = String(r ?? ""), re = /\b(B[1-7]|MSMP)\b|§\s*(\d+(?:\.\d+)*)|\b(App-\d+)\b|(\/\s*)(\d+(?:\.\d+)+)/g;
    let out = "", last = 0, book = null, m;
    while ((m = re.exec(s))) {
        out += esc(s.slice(last, m.index)); last = re.lastIndex;
        if (m[1]) { book = m[1]; out += m[1]; continue; }
        if (m[4]) out += m[4];
        const sec = m[2] || m[3] || m[5], pg = manualPage(book, sec);
        out += pg ? `<a class="mref" href="${esc(pg.url)}" target="_blank" rel="noopener" title="${book} ${sec} — ${t("openPdf")} ${pg.page}">${sec}</a>` : esc(sec);
    }
    return out + esc(s.slice(last));
};
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
/* Long source text: keep paragraphs, mark fill-in placeholders such as [Tarih giriniz] */
const para = s => esc(s).split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, "<br>").replace(/\[([^\]]{2,40})\]/g, "<mark>[$1]</mark>")}</p>`).join("");
/* Procedure text: one point per sentence so it can be scanned on the job */
const points = s => {
    const parts = String(s).split(/(?<=[.;])\s+(?=[A-ZÇĞİÖŞÜ0-9])/).filter(Boolean);
    return parts.length < 3 ? `<p>${esc(s)}</p>` : `<ul class="pts">${parts.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
};

const ICON = {
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg>',
    print: '<svg viewBox="0 0 24 24"><path d="M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z"/></svg>',
    tick: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    dash: '<svg viewBox="0 0 24 24"><path d="M6 12h12"/></svg>',
    themes: {
        auto: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
        chart: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>',
        bridge: '<svg viewBox="0 0 24 24"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg>',
        night: '<svg viewBox="0 0 24 24"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z" fill="currentColor"/></svg>'
    }
};

function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ── Chrome ──────────────────────────────────────────────────────────── */
function applyChrome() {
    document.documentElement.lang = prefs.lang;
    document.documentElement.dataset.theme = prefs.theme;
    document.querySelectorAll("[data-t]").forEach(el => el.textContent = t(el.dataset.t));
    document.querySelectorAll("#langSeg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === prefs.lang));
    const tb = $("#themeBtn");
    tb.innerHTML = ICON.themes[prefs.theme];
    tb.title = tb.ariaLabel = t("themes")[prefs.theme];
    const pb = $("#printBtn");
    pb.hidden = !prefs.rank && prefs.page !== "q" && !(prefs.page === "cap" && ui.cap?.view === "report");
    pb.innerHTML = ICON.print;
    pb.title = pb.ariaLabel = t("print");
}

/* ── Router ──────────────────────────────────────────────────────────── */
function render() {
    applyChrome();
    const v = $("#view");
    if (prefs.page === "cap") { document.title = `${ct("capTitle")} — Vetting Inspector`; v.innerHTML = capHtml(); afterPanel(); return; }
    if (prefs.page === "q") { document.title = "SIRE 2.0 Questionnaire — Vetting Inspector"; v.innerHTML = qHtml(); afterPanel(); return; }
    if (!prefs.rank || !rankById(prefs.rank)) { prefs.rank = null; v.innerHTML = homeHtml(); document.title = "Vetting Inspector"; return; }
    const r = rankById(prefs.rank);
    document.title = `${r.short} — Vetting Inspector`;
    v.innerHTML = rankHeadHtml(r) + `<section id="panel">${panelHtml()}</section>`;
    afterPanel();
}

function renderPanel() {
    $("#panel").innerHTML = panelHtml();
    $("#summary").outerHTML = summaryHtml(prefs.rank);
    afterPanel();
}

function panelHtml() {
    if (prefs.tab === "interview") return interviewHtml();
    if (prefs.tab === "exam") return examHtml();
    return checklistHtml();
}

function afterPanel() {
    document.querySelectorAll("textarea.note").forEach(ta => { if (ta.value) { ta.style.height = "auto"; ta.style.height = ta.scrollHeight + "px"; } });
    const s = $("#search");
    if (s && ui.focusSearch) { s.focus(); s.setSelectionRange(s.value.length, s.value.length); ui.focusSearch = false; }
}

function go(rank) {
    prefs.rank = rank; prefs.page = null;
    ui.search = ""; ui.open.clear(); ui.chOpen.clear(); ui.iv = null; ui.ex = null;
    persistPrefs();
    render();
    window.scrollTo(0, 0);
}

/* ── Home ────────────────────────────────────────────────────────────── */
function homeHtml() {
    const row = r => {
        const rd = readiness(r.id), ex = data.ranks[r.id]?.exam || {};
        return `
        <button class="rank-row" type="button" data-go="${r.id}">
            <span class="rr-code">${esc(r.short)}</span>
            <span class="rr-name">${esc(L(r))}${r.sub ? `<small>${esc(L(r.sub))}</small>` : ""}</span>
            <span class="rr-count">${rd.total} ${t("questions")}</span>
            <span class="rr-pct"><span class="rr-bar"><span style="width:${rd.pct}%"></span></span>${rd.pct}%</span>
            ${ex.best != null ? `<span class="rr-best">${t("exBest")} ${ex.best}%</span>` : `<span class="rr-best"></span>`}
        </button>`;
    };
    const group = dept => RANKS.filter(r => r.dept === dept).map(row).join("");
    return `
    <section class="home">
        <button class="q-entry" type="button" data-act="openQ">
            <span class="qe-title">${t("qTitle")}</span>
            <span class="qe-sub">${t("qHomeSub")}</span>
            <span class="qe-meta">${ITEMS.length} ${t("questions")}${qStats().nc ? ` · <b>${qStats().nc} N/C</b>` : ""} · ${qStats().done}/${ITEMS.length}</span>
        </button>
        <button class="q-entry cap-entry" type="button" data-act="openCap">
            <span class="qe-title">${ct("capTitle")}</span>
            <span class="qe-sub">${ct("capHomeSub")}</span>
            <span class="qe-meta">${capData().cur ? ct("capInProgress") + " · " : ""}${capData().past.length} ${ct("capPast").toLocaleLowerCase(prefs.lang)}</span>
        </button>
        <h1 class="display">${t("pickRank")}</h1>
        <p class="lede">${t("pickHint")}</p>
        <div class="rank-cols">
            <div><h2 class="kicker">${t("deck")}</h2>${group("deck")}</div>
            <div><h2 class="kicker">${t("engine")}</h2>${group("engine")}</div>
        </div>
        <footer class="colophon">
            <p>${t("sources")}</p>
            <p class="muted">${t("disclaimer")} ${t("offline")}.</p>
            <p class="foot-actions">
                <button class="link" type="button" data-act="backup">${t("backup")}</button>
                <button class="link" type="button" data-act="restore">${t("restore")}</button>
                <button class="link danger" type="button" data-act="reset">${t("reset")}</button>
            </p>
        </footer>
    </section>`;
}

/* ── Rank header ─────────────────────────────────────────────────────── */
function summaryHtml(rid) {
    const rd = readiness(rid);
    const w = n => rd.total ? (n / rd.total * 100).toFixed(2) : 0;
    return `
    <div class="summary" id="summary">
        <div class="sum-line">
            <span class="sum-big">${rd.ready}<span class="muted"> / ${rd.total}</span></span>
            <span class="sum-text">${t("ofReady")} · <b>${rd.work}</b> ${t("needWork")} · <b>${rd.open}</b> ${t("open")}</span>
        </div>
        <div class="bar" aria-hidden="true"><span class="b2" style="width:${w(rd.ready)}%"></span><span class="b1" style="width:${w(rd.work)}%"></span></div>
    </div>`;
}

function rankHeadHtml(r) {
    const tab = (id, label) => `<button type="button" data-tab="${id}" aria-current="${prefs.tab === id}">${label}</button>`;
    return `
    <header class="rank-head">
        <button class="back" type="button" data-go="" aria-label="${t("pickRank")}">${ICON.back}<span>${t("pickRank")}</span></button>
        <h1 class="display">${esc(L(r))} <span class="code">${esc(r.short)}</span></h1>
        ${r.sub ? `<p class="muted">${esc(L(r.sub))}</p>` : ""}
        ${summaryHtml(r.id)}
        <nav class="tabs">${tab("checklist", t("tabChecklist"))}${tab("interview", t("tabInterview"))}${tab("exam", t("tabExam"))}</nav>
    </header>`;
}

/* ── Checklist ───────────────────────────────────────────────────────── */
function filtered(r) {
    const q = ui.search.trim().toLocaleLowerCase(prefs.lang);
    return itemsFor(r).filter(i => {
        const st = itemState(r, i.id);
        if (prefs.status === "open" && st.s !== 0) return false;
        if (prefs.status === "work" && st.s !== 1) return false;
        if (prefs.status === "ready" && st.s !== 2) return false;
        if (prefs.prio && !official(i).prio) return false;
        if (prefs.hr && !i.hr) return false;
        if (!q) return true;
        const o = official(i), g = L(i.g) || {};
        return [i.id, i.tr, o.short, o.q, i.co?.ref, i.co?.en, i.co?.tr, g.exp, st.n].join(" ").toLocaleLowerCase(prefs.lang).includes(q);
    });
}

function checklistHtml() {
    const r = prefs.rank, list = filtered(r), all = itemsFor(r);
    const hasPrio = all.some(i => official(i).prio);
    const seg = (id, label) => `<button type="button" data-status="${id}" aria-pressed="${prefs.status === id}">${label}</button>`;
    const tog = (key, label) => `<button type="button" class="toggle" data-toggle-f="${key}" aria-pressed="${prefs[key]}">${label}</button>`;
    const searching = ui.search.trim() || prefs.status !== "all" || prefs.prio || prefs.hr;

    let out = `
    <div class="toolbar">
        <label class="search">${ICON.search}<input id="search" type="search" placeholder="${t("search")}" value="${esc(ui.search)}" autocomplete="off"></label>
        <div class="filters">
            <div class="seg">${seg("all", t("fAll"))}${seg("open", t("sOpen"))}${seg("work", t("sWork"))}${seg("ready", t("sReady"))}</div>
            ${hasPrio ? tog("prio", t("fPrio")) : ""}${tog("hr", t("fHr"))}
        </div>
    </div>`;

    if (!list.length) return out + `<p class="empty">${t("noMatch")}</p>`;

    const chapters = [...new Set(list.map(i => i.ch))].sort((a, b) => a - b);
    const allOpen = chapters.every(c => ui.chOpen.has(c));
    out += `<div class="list-head"><span class="muted">${list.length} ${t("questions")}</span>
        <button type="button" class="link" data-act="${allOpen ? "collapseAll" : "expandAll"}">${allOpen ? t("collapseAll") : t("expandAll")}</button></div>`;

    return out + chapters.map(ch => {
        const items = list.filter(i => i.ch === ch);
        const total = all.filter(i => i.ch === ch);
        const done = total.filter(i => itemState(r, i.id).s === 2).length;
        const open = searching || ui.chOpen.has(ch);
        return `
        <section class="chapter${open ? " open" : ""}">
            <button type="button" class="ch-head" data-ch="${ch}" aria-expanded="${open}">
                <span class="ch-no">${ch}</span>
                <span class="ch-name">${esc(L(CHAPTERS[ch]))}</span>
                <span class="ch-count">${done}/${total.length}</span>
            </button>
            ${open ? `<ol class="items">${items.map(itemHtml).join("")}</ol>` : ""}
        </section>`;
    }).join("");
}

function itemHtml(i) {
    const r = prefs.rank, st = itemState(r, i.id), open = ui.open.has(i.id), o = official(i);
    const marks = [i.hr ? `<span class="mark-hr">${t("hr")}</span>` : "", o.prio ? `<span class="mark">${t("prio")}</span>` : ""].join("");
    return `
    <li class="item s${st.s}${open ? " open" : ""}" data-item="${i.id}">
        <div class="row">
            <button type="button" class="box" data-tick="${i.id}" aria-label="${t("sReady")}" aria-pressed="${st.s === 2}">${st.s === 2 ? ICON.tick : st.s === 1 ? ICON.dash : ""}</button>
            <button type="button" class="q" data-open="${i.id}" aria-expanded="${open}">
                <span class="no">${i.id}</span>
                <span class="qt">${esc(title(i))}${marks}${st.n ? '<span class="has-note" title="note">✎</span>' : ""}</span>
            </button>
        </div>
        ${open ? itemBody(i, st) : ""}
    </li>`;
}

function companyBlock(i) {
    const o = official(i), rt = o.rating;
    if (i.co && (L(i.co) || i.co.ref)) {
        return `<div class="co"><div class="label">${t("company")}<span class="ref">${refHtml(i.co.ref)}</span></div>${L(i.co) ? points(L(i.co)) : ""}</div>`;
    }
    if (rt && (rt.ans || rt.loc)) {
        return `<div class="co"><div class="label">${t("company")}<span class="ref">${refHtml(rt.loc)}</span></div>${points(rt.ans || "")}</div>`;
    }
    return `<div class="co none"><div class="label">${t("company")}</div><p>${t("noCompany")}</p></div>`;
}

function ratingBlock(i) {
    const rt = official(i).rating;
    if (!rt) return "";
    const tr = prefs.lang === "tr";
    return `
    <div class="rating">
        <div class="label">${t("rating")}${rt.slogan ? `<span class="slogan">${esc(rt.slogan)}</span>` : ""}</div>
        ${rt.know?.length ? `<ul>${rt.know.map(k => `<li>${esc(tr ? k[1] || k[0] : k[0])}</li>`).join("")}</ul>` : ""}
        ${rt.qEn ? `<dl><dt>${esc(tr ? rt.qTr || rt.qEn : rt.qEn)}</dt><dd>${esc(tr ? rt.aTr || rt.aEn : rt.aEn)}</dd></dl>` : ""}
    </div>`;
}

function guideBlock(i) {
    const g = L(i.g);
    if (!g) return "";
    return `
    <dl class="guide">
        ${g.exp ? `<dt>${t("show")}</dt><dd>${esc(g.exp)}</dd>` : ""}
        ${g.ev ? `<dt>${t("evidence")}</dt><dd>${esc(g.ev)}</dd>` : ""}
        ${g.pit ? `<dt>${t("pitfall")}</dt><dd>${esc(g.pit)}</dd>` : ""}
    </dl>`;
}

function itemBody(i, st) {
    const o = official(i), r = prefs.rank;
    const seg = (s, label) => `<button type="button" data-set="${s}" data-id="${i.id}" aria-pressed="${st.s === s}">${label}</button>`;
    const more = (o.insp || o.reg) ? `
        <details class="more">
            <summary>${t("inspNotes")}${t("trOnly")}</summary>
            ${o.insp ? para(o.insp) : ""}
            ${o.reg ? `<div class="label">${t("regs")}</div>${para(o.reg)}` : ""}
        </details>` : "";
    return `
    <div class="body">
        ${o.q ? `<blockquote class="sire" lang="en"><span class="label">${t("sireQ")} ${i.id}</span>${esc(o.q)}</blockquote>` : ""}
        ${isRating(r) ? ratingBlock(i) + companyBlock(i) : companyBlock(i) + ratingBlock(i)}
        ${guideBlock(i)}
        ${more}
        <div class="actions">
            <div class="seg status">${seg(0, t("sOpen"))}${seg(1, t("sWork"))}${seg(2, t("sReady"))}</div>
            <textarea class="note" data-note="${i.id}" rows="1" placeholder="${t("notes")}">${esc(st.n)}</textarea>
        </div>
    </div>`;
}

function setStatus(id, s) {
    const items = rankData(prefs.rank).items;
    items[id] = Object.assign({ s: 0, n: "" }, items[id], { s });
    persist();
    renderPanel();
}

/* ── Interview ───────────────────────────────────────────────────────── */
function startInterview(onlyIds) {
    const r = prefs.rank;
    let pool = itemsFor(r);
    if (onlyIds) pool = pool.filter(i => onlyIds.includes(i.id));
    else if (ui.ivScope === "open") pool = pool.filter(i => itemState(r, i.id).s !== 2);
    else if (ui.ivScope === "prio") pool = pool.filter(i => official(i).prio || i.hr);
    if (!pool.length) pool = itemsFor(r);
    ui.iv = { deck: shuffle(pool.map(i => i.id)), pos: 0, shown: false, knew: [], again: [] };
    renderPanel();
}

function ivQuestion(i) {
    const rt = official(i).rating, r = prefs.rank;
    if (isRating(r) && rt?.qEn) return { q: prefs.lang === "tr" ? rt.qTr || rt.qEn : rt.qEn, sub: title(i) };
    return { q: official(i).q || title(i), sub: title(i), en: true };
}

function interviewHtml() {
    const iv = ui.iv, r = prefs.rank;
    if (!iv) {
        const all = itemsFor(r);
        const counts = { all: all.length, open: all.filter(i => itemState(r, i.id).s !== 2).length, prio: all.filter(i => official(i).prio || i.hr).length };
        const opt = (id, label) => `<button type="button" data-ivscope="${id}" aria-pressed="${ui.ivScope === id}">${label} <span class="n">${counts[id]}</span></button>`;
        return `
        <div class="intro">
            <p class="lede">${t("ivIntro")}</p>
            <div class="seg wide">${opt("all", t("ivAll"))}${opt("open", t("ivOpen"))}${opt("prio", t("ivPrio") + " / " + t("hr").toLocaleLowerCase(prefs.lang))}</div>
            <button type="button" class="btn primary" data-act="ivStart">${t("start")}</button>
        </div>`;
    }
    if (iv.pos >= iv.deck.length) {
        return `
        <div class="done">
            <p class="kicker">${t("ivDone")}</p>
            <p class="score">${iv.knew.length}<span class="muted"> / ${iv.deck.length}</span></p>
            <p class="muted">${iv.knew.length} ${t("ivKnew")} · ${iv.again.length} ${t("ivAgainN")}</p>
            <div class="btns">
                ${iv.again.length ? `<button type="button" class="btn primary" data-act="ivRepeat">${t("ivRepeat")}</button>` : ""}
                <button type="button" class="btn" data-act="ivRestart">${t("restart")}</button>
            </div>
        </div>`;
    }
    const i = ITEMS.find(x => x.id === iv.deck[iv.pos]), q = ivQuestion(i), st = itemState(r, i.id);
    return `
    <article class="card">
        <div class="card-top"><span>${i.id} · ${esc(L(CHAPTERS[i.ch]))}</span><span>${iv.pos + 1} / ${iv.deck.length}</span></div>
        <div class="progress"><span style="width:${iv.pos / iv.deck.length * 100}%"></span></div>
        <p class="kicker">${t("ivAsks")}${i.hr ? ` · <span class="mark-hr">${t("hr")}</span>` : ""}</p>
        <p class="ask"${q.en ? ' lang="en"' : ""}>${esc(q.q)}</p>
        ${q.sub !== q.q ? `<p class="muted">${esc(q.sub)}</p>` : ""}
        ${iv.shown ? `
            <div class="reveal">${isRating(r) ? ratingBlock(i) + companyBlock(i) : companyBlock(i)}${guideBlock(i)}</div>
            <div class="btns split">
                <button type="button" class="btn" data-act="ivAgain">${t("again")}</button>
                <button type="button" class="btn primary" data-act="ivKnew">${t("knew")}</button>
            </div>`
        : `<div class="btns"><button type="button" class="btn primary" data-act="ivReveal">${t("reveal")}</button></div>`}
        <p class="keys">${t("keysIv")}</p>
    </article>`;
}

function ivAnswer(knew) {
    const iv = ui.iv;
    (knew ? iv.knew : iv.again).push(iv.deck[iv.pos]);
    iv.pos++; iv.shown = false;
    renderPanel();
}

/* ── Exam ────────────────────────────────────────────────────────────── */
function examPool() {
    const pool = examFor(prefs.rank);
    return prefs.examScope === "company" ? pool.filter(q => q.ref) : pool;
}

function startExam() {
    const pool = shuffle(examPool());
    const n = prefs.examLen === 0 ? pool.length : Math.min(prefs.examLen, pool.length);
    ui.ex = { qs: pool.slice(0, n).map(q => ({ q, order: shuffle([0, 1, 2, 3]) })), pos: 0, picked: null, answers: [] };
    renderPanel();
}

function examHtml() {
    const ex = ui.ex, r = prefs.rank;
    if (!ex) {
        const total = examPool().length, rec = data.ranks[r]?.exam || {};
        const len = (n, label) => `<button type="button" data-len="${n}" aria-pressed="${prefs.examLen === n}">${label}</button>`;
        const scope = (id, label, n) => `<button type="button" data-scope="${id}" aria-pressed="${prefs.examScope === id}">${label} <span class="n">${n}</span></button>`;
        const all = examFor(r);
        return `
        <div class="intro">
            <p class="lede">${t("exIntro")}</p>
            <div class="field"><span class="kicker">${t("exScope")}</span>
                <div class="seg wide">${scope("mixed", t("exMixed"), all.length)}${scope("company", t("exCompany"), all.filter(q => q.ref).length)}</div></div>
            <div class="field"><span class="kicker">${t("exLen")}</span>
                <div class="seg">${len(10, "10")}${total > 20 ? len(20, "20") : ""}${len(0, `${t("exAll")} (${total})`)}</div></div>
            ${rec.last != null ? `<p class="muted">${t("exLast")} ${rec.last}% · ${t("exBest")} ${rec.best}%</p>` : ""}
            <button type="button" class="btn primary" data-act="exStart">${t("start")}</button>
        </div>`;
    }
    if (ex.pos >= ex.qs.length) {
        const right = ex.answers.filter(a => a.ok).length, pct = Math.round(right / ex.qs.length * 100);
        const wrong = ex.answers.filter(a => !a.ok);
        return `
        <div class="done">
            <p class="kicker">${t("result")}</p>
            <p class="score ${pct >= PASS_MARK ? "ok" : "warn"}">${right}<span class="muted"> / ${ex.qs.length}</span></p>
            <p class="muted">${pct}% · ${pct >= PASS_MARK ? t("passed") : t("failed")}</p>
            <div class="btns"><button type="button" class="btn primary" data-act="exRetry">${t("retry")}</button></div>
        </div>
        ${wrong.length ? `
        <section class="review">
            <h2 class="kicker">${t("review")} · ${wrong.length}</h2>
            <ol>${wrong.map(a => { const x = L(a.q); return `
                <li>
                    <p class="rq">${esc(x.q)}${a.q.ref ? ` <span class="ref">${refHtml(a.q.ref)}</span>` : ""}</p>
                    <p class="bad">${t("yourAns")}: ${esc(x.o[a.pick])}</p>
                    <p class="good">${t("rightAns")}: ${esc(x.o[a.q.a])}</p>
                    <p class="muted">${esc(x.why)}</p>
                </li>`; }).join("")}</ol>
        </section>` : ""}`;
    }
    const cur = ex.qs[ex.pos], x = L(cur.q), answered = ex.picked != null, last = ex.pos === ex.qs.length - 1;
    return `
    <article class="card">
        <div class="card-top"><span>${cur.q.ref ? `${t("company")} · ${esc(refTxt(cur.q.ref))}` : t("tabExam")}</span><span>${ex.pos + 1} / ${ex.qs.length}</span></div>
        <div class="progress"><span style="width:${ex.pos / ex.qs.length * 100}%"></span></div>
        <p class="ask">${esc(x.q)}</p>
        <ol class="options">
            ${cur.order.map((oi, n) => {
                const cls = answered ? (oi === cur.q.a ? "right" : oi === ex.picked ? "wrong" : "dim") : "";
                return `<li><button type="button" class="opt ${cls}" data-pick="${oi}" ${answered ? "disabled" : ""}><span class="k">${"ABCD"[n]}</span><span>${esc(x.o[oi])}</span></button></li>`;
            }).join("")}
        </ol>
        ${answered ? `
        <p class="explain ${ex.picked === cur.q.a ? "is-ok" : "is-bad"}"><b>${ex.picked === cur.q.a ? t("correct") : t("wrong")}.</b> ${esc(x.why)}</p>
        <div class="btns"><button type="button" class="btn primary" data-act="exNext">${last ? t("finish") : t("next")}</button></div>` : ""}
        <p class="keys">${t("keysEx")}</p>
    </article>`;
}

function exPick(oi) {
    const ex = ui.ex;
    if (ex.picked != null) return;
    const cur = ex.qs[ex.pos];
    ex.picked = oi;
    ex.answers.push({ q: cur.q, pick: oi, ok: oi === cur.q.a });
    renderPanel();
}

function exNext() {
    const ex = ui.ex;
    ex.pos++; ex.picked = null;
    if (ex.pos >= ex.qs.length) {
        const pct = Math.round(ex.answers.filter(a => a.ok).length / ex.qs.length * 100);
        const rec = rankData(prefs.rank).exam;
        rec.last = pct;
        rec.best = Math.max(rec.best ?? 0, pct);
        persist();
    }
    renderPanel();
    $("#panel").scrollIntoView({ block: "nearest" });
}


/* ── SIRE 2.0 Questionnaire ──────────────────────────────────────────── */
const DECK_R = ["MS", "CO", "2O", "3O", "DR"], ENG_R = ["CE", "2E", "ETO", "ER"];
const deptOf = i => ({ deck: i.ranks.some(r => DECK_R.includes(r)), engine: i.ranks.some(r => ENG_R.includes(r)) });
const qData = () => (data.q ||= { items: {}, meta: {} });
const qState = id => data.q?.items[id] || { r: "", n: "" };
const qRefRaw = i => i.co?.ref || official(i).rating?.loc || "";
const qRef = i => refTxt(qRefRaw(i));
const RES = { ok: "rOk", nc: "rNc", na: "rNa" };

function qStats(list = ITEMS) {
    const c = { ok: 0, nc: 0, na: 0, blank: 0, rem: 0, done: 0 };
    for (const i of list) {
        const st = qState(i.id);
        c[st.r || "blank"]++;
        if (st.r) c.done++;
        if (st.n.trim()) c.rem++;
    }
    return c;
}

function qFiltered() {
    const q = ui.search.trim().toLocaleLowerCase(prefs.lang);
    return ITEMS.filter(i => {
        const d = deptOf(i), st = qState(i.id);
        if (prefs.qDept === "deck" && !d.deck) return false;
        if (prefs.qDept === "engine" && !d.engine) return false;
        if (prefs.qNc && st.r !== "nc") return false;
        if (prefs.qRem && !st.n.trim()) return false;
        if (!q) return true;
        const o = official(i);
        return [i.id, i.tr, o.short, o.q, i.co?.ref, i.co?.en, i.co?.tr, st.n].join(" ").toLocaleLowerCase(prefs.lang).includes(q);
    });
}

function deptTags(i) {
    const d = deptOf(i);
    return `<span class="dept">${[d.deck ? t("dDeck") : "", d.engine ? t("dEngine") : ""].filter(Boolean).join(" · ")}</span>`;
}

function qHtml() {
    const list = qFiltered(), c = qStats(), m = qData().meta;
    const seg = (key, val, label) => `<button type="button" data-qset="${key}:${val}" aria-pressed="${prefs[key] === val}">${label}</button>`;
    const tog = (key, label) => `<button type="button" class="toggle" data-toggle-f="${key}" aria-pressed="${prefs[key]}">${label}</button>`;
    const field = (k, label, type = "text") => `<label class="mf"><span class="kicker">${label}</span><input data-meta="${k}" type="${type}" value="${esc(m[k] || "")}"></label>`;
    const searching = ui.search.trim() || prefs.qDept !== "all" || prefs.qNc || prefs.qRem;
    const chapters = [...new Set(list.map(i => i.ch))].sort((a, b) => a - b);
    const allOpen = chapters.length && chapters.every(ch => ui.qCh.has(ch));
    const w = n => (n / ITEMS.length * 100).toFixed(2);

    return `
    <header class="rank-head">
        <button class="back" type="button" data-go="">${ICON.back}<span>${t("pickRank")}</span></button>
        <h1 class="display">${t("qTitle")}</h1>
        <p class="muted">${t("qHomeSub")}</p>
        <div class="summary" id="summary">
            <div class="sum-line">
                <span class="sum-big">${c.done}<span class="muted"> / ${ITEMS.length}</span></span>
                <span class="sum-text"><b class="nc">${c.nc}</b> ${t("rNc")} · <b>${c.ok}</b> ${t("rOk")} · <b>${c.na}</b> ${t("rNa")} · <b>${c.blank}</b> ${t("rBlank").toLocaleLowerCase(prefs.lang)}</span>
            </div>
            <div class="bar" aria-hidden="true"><span class="b2" style="width:${w(c.ok + c.na)}%"></span><span class="bnc" style="width:${w(c.nc)}%"></span></div>
        </div>
    </header>

    <details class="report"${ui.repOpen ? " open" : ""}>
        <summary>${t("report")}</summary>
        <div class="meta-grid">${field("ship", t("mShip"))}${field("port", t("mPort"))}${field("date", t("mDate"), "date")}${field("by", t("mBy"))}</div>
        <div class="rep-row">
            <div class="seg">${seg("qRep", "all", t("repAll"))}${seg("qRep", "nc", t("repNc"))}</div>
            <div class="btns">
                <button type="button" class="btn primary" data-act="qPrint">${t("repPrint")}</button>
                <button type="button" class="btn" data-act="qCsv">${t("repCsv")}</button>
            </div>
        </div>
        <button type="button" class="link danger" data-act="qClear">${t("clearForm")}</button>
    </details>

    <div class="toolbar">
        <label class="search">${ICON.search}<input id="search" type="search" placeholder="${t("search")}" value="${esc(ui.search)}" autocomplete="off"></label>
        <div class="filters">
            <div class="seg">${seg("qDept", "all", t("dAll"))}${seg("qDept", "deck", t("dDeck"))}${seg("qDept", "engine", t("dEngine"))}</div>
            ${tog("qNc", t("onlyNc"))}${tog("qRem", t("withRemark"))}
        </div>
    </div>
    <section id="panel">
    ${!list.length ? `<p class="empty">${t("noMatch")}</p>` : `
    <div class="list-head"><span class="muted">${list.length} ${t("questions")}</span>
        <button type="button" class="link" data-act="${allOpen ? "qCollapse" : "qExpand"}">${allOpen ? t("collapseAll") : t("expandAll")}</button></div>
    ${chapters.map(ch => {
        const items = list.filter(i => i.ch === ch), cs = qStats(items), open = searching || ui.qCh.has(ch);
        return `
        <section class="chapter${open ? " open" : ""}">
            <button type="button" class="ch-head" data-qch="${ch}" aria-expanded="${open}">
                <span class="ch-no">${ch}</span>
                <span class="ch-name">${esc(L(CHAPTERS[ch]))}</span>
                <span class="ch-count">${cs.nc ? `<b class="nc">${cs.nc} N/C</b> · ` : ""}${cs.done}/${items.length}</span>
            </button>
            ${open ? `<ol class="items">${items.map(qItemHtml).join("")}</ol>` : ""}
        </section>`;
    }).join("")}`}
    </section>`;
}

function qItemHtml(i) {
    const st = qState(i.id), open = ui.qOpen.has(i.id), ref = qRefRaw(i);
    const res = k => `<button type="button" class="r-${k}" data-qres="${i.id}:${k}" aria-pressed="${st.r === k}" title="${t(RES[k] + "Long")}">${t(RES[k])}</button>`;
    return `
    <li class="qa${st.r ? " r-" + st.r : ""}${open ? " open" : ""}" data-item="${i.id}">
        <div class="qa-row">
            <button type="button" class="q" data-qopen="${i.id}" aria-expanded="${open}">
                <span class="no">${i.id}</span>
                <span class="qt">${esc(title(i))}${i.hr ? `<span class="mark-hr">${t("hr")}</span>` : ""}
                    <span class="qa-meta">${deptTags(i)}</span></span>
            </button>
            <div class="seg res">${res("ok")}${res("nc")}${res("na")}</div>
        </div>
        ${ref ? `<div class="qa-ref"><span class="hl">${refHtml(ref)}</span></div>` : ""}
        <textarea class="note remark" data-qnote="${i.id}" rows="1" placeholder="${t("remark")}">${esc(st.n)}</textarea>
        ${open ? `
        <div class="body">
            ${official(i).q ? `<blockquote class="sire" lang="en"><span class="label">${t("sireQ")} ${i.id}</span>${esc(official(i).q)}</blockquote>` : ""}
            ${companyBlock(i).replace('class="co"', 'class="co hl-block"')}
            ${guideBlock(i)}
        </div>` : ""}
    </li>`;
}

function setQ(id, patch) {
    const items = qData().items;
    items[id] = Object.assign({ r: "", n: "" }, items[id], patch);
    if (!items[id].r && !items[id].n) delete items[id];
    persist();
}

function qRows() {
    const list = qFiltered();
    return prefs.qRep === "nc" ? list.filter(i => { const s = qState(i.id); return s.r === "nc" || s.n.trim(); }) : list;
}

function qPrint() {
    const m = qData().meta, rows = qRows(), c = qStats(qFiltered());
    const resTxt = r => r ? t(RES[r]) : "";
    let el = $("#print");
    if (!el) { el = document.createElement("section"); el.id = "print"; document.body.appendChild(el); }
    el.innerHTML = `
        <h1>${t("qReportTitle")}</h1>
        <table class="meta"><tr>
            <td><b>${t("mShip")}</b> ${esc(m.ship || "")}</td><td><b>${t("mPort")}</b> ${esc(m.port || "")}</td>
            <td><b>${t("mDate")}</b> ${esc(m.date || new Date().toISOString().slice(0, 10))}</td><td><b>${t("mBy")}</b> ${esc(m.by || "")}</td>
        </tr></table>
        <p>${prefs.qDept === "all" ? t("dAll") : prefs.qDept === "deck" ? t("dDeck") : t("dEngine")} · ${c.nc} ${t("rNc")} · ${c.ok} ${t("rOk")} · ${c.na} ${t("rNa")} · ${c.blank} ${t("rBlank").toLocaleLowerCase(prefs.lang)}</p>
        <table class="qtab"><thead><tr><th>${t("colNo")}</th><th>${t("colQ")}</th><th>${t("colRes")}</th><th>${t("colRem")}</th></tr></thead><tbody>
        ${rows.map(i => { const s = qState(i.id), ref = qRef(i); return `<tr class="${s.r ? "q-" + s.r : ""}">
            <td>${i.id}</td><td>${esc(title(i))}${ref ? `<div class="pref">${esc(ref)}</div>` : ""}</td><td>${resTxt(s.r)}</td><td>${esc(s.n)}</td></tr>`; }).join("")}
        </tbody></table>`;
    window.print();
}

function qCsv() {
    const cell = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const head = [t("colNo"), t("chapter"), t("colDept"), t("colQ"), "SIRE 2.0", t("colRef"), t("colRes"), t("colRem")];
    const lines = [head.map(cell).join(";")];
    for (const i of qRows()) {
        const s = qState(i.id), d = deptOf(i);
        lines.push([i.id, L(CHAPTERS[i.ch]), [d.deck ? t("dDeck") : "", d.engine ? t("dEngine") : ""].filter(Boolean).join("/"),
            title(i), official(i).q || "", qRef(i), s.r ? t(RES[s.r]) : "", s.n].map(cell).join(";"));
    }
    const m = qData().meta;
    const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `SIRE2-questionnaire${m.ship ? "-" + m.ship.replace(/[^\w-]+/g, "_") : ""}-${(m.date || new Date().toISOString().slice(0, 10))}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function renderQ() {
    const y = window.scrollY;
    $("#view").innerHTML = qHtml();
    window.scrollTo(0, y);
    afterPanel();
}

/* ── Print ───────────────────────────────────────────────────────────── */
function printReport() {
    const r = rankById(prefs.rank), rd = readiness(r.id);
    const label = s => [t("sOpen"), t("sWork"), t("sReady")][s];
    const rows = itemsFor(r.id).map(i => {
        const st = itemState(r.id, i.id);
        return `<tr class="p${st.s}"><td>${i.id}</td><td>${esc(title(i))}${i.co?.ref ? `<div class="pref">${esc(refTxt(i.co.ref))}</div>` : ""}${st.n ? `<div class="pnote">${esc(st.n)}</div>` : ""}</td><td>${label(st.s)}</td></tr>`;
    }).join("");
    let el = $("#print");
    if (!el) { el = document.createElement("section"); el.id = "print"; document.body.appendChild(el); }
    el.innerHTML = `
        <h1>${t("reportTitle")} — ${esc(L(r))}</h1>
        <p>${t("reportDate")}: ${new Date().toLocaleDateString(prefs.lang)} · ${rd.ready}/${rd.total} ${t("ofReady")} · ${rd.work} ${t("needWork")} · ${rd.open} ${t("open")}</p>
        <table><thead><tr><th>SIRE</th><th>${t("tabChecklist")}</th><th>${t("status")}</th></tr></thead><tbody>${rows}</tbody></table>`;
    window.print();
}

/* ── Backup ──────────────────────────────────────────────────────────── */
function backup() {
    const blob = new Blob([JSON.stringify({ app: "vetting-inspector", v: 2, data }, null, 1)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `vetting-inspector-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast(t("saved"));
}

$("#fileImport").addEventListener("change", e => {
    const f = e.target.files[0];
    if (!f) return;
    f.text().then(txt => {
        const j = JSON.parse(txt);
        if (j.app !== "vetting-inspector" || !j.data || typeof j.data.ranks !== "object") throw 0;
        data = j.data; persist(); render(); toast(t("restored"));
    }).catch(() => toast(t("badFile"))).finally(() => { e.target.value = ""; });
});

/* ── Events ──────────────────────────────────────────────────────────── */
document.addEventListener("click", e => {
    const el = e.target.closest("button");
    if (!el) return;
    const d = el.dataset;

    if (el.id === "homeBtn") return go(null);
    if (el.id === "themeBtn") { prefs.theme = THEMES[(THEMES.indexOf(prefs.theme) + 1) % THEMES.length]; persistPrefs(); return applyChrome(); }
    if (el.id === "printBtn") return prefs.page === "cap" ? capPrint() : prefs.page === "q" ? qPrint() : printReport();
    if (d.qset) { const [k, v] = d.qset.split(":"); prefs[k] = v; persistPrefs(); return prefs.page === "q" ? renderQ() : null; }
    if (d.qres) { const [id, k] = d.qres.split(":"); setQ(id, { r: qState(id).r === k ? "" : k }); return renderQ(); }
    if (d.qopen) { ui.qOpen.has(d.qopen) ? ui.qOpen.delete(d.qopen) : ui.qOpen.add(d.qopen); return renderQ(); }
    if (d.qch) { const c = +d.qch; ui.qCh.has(c) ? ui.qCh.delete(c) : ui.qCh.add(c); return renderQ(); }
    if (d.lang) { prefs.lang = d.lang; persistPrefs(); return render(); }
    if ("go" in d) return go(d.go || null);
    if (d.tab) { prefs.tab = d.tab; persistPrefs(); document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-current", b.dataset.tab === d.tab)); return renderPanel(); }
    if (d.status) { prefs.status = d.status; persistPrefs(); return renderPanel(); }
    if (d.toggleF) { prefs[d.toggleF] = !prefs[d.toggleF]; persistPrefs(); return prefs.page === "q" ? renderQ() : renderPanel(); }
    if (d.ch) { const c = +d.ch; ui.chOpen.has(c) ? ui.chOpen.delete(c) : ui.chOpen.add(c); return renderPanel(); }
    if (d.open) { ui.open.has(d.open) ? ui.open.delete(d.open) : ui.open.add(d.open); return renderPanel(); }
    if (d.tick) return setStatus(d.tick, itemState(prefs.rank, d.tick).s === 2 ? 0 : 2);
    if (d.set) return setStatus(d.id, +d.set);
    if (d.ivscope) { ui.ivScope = d.ivscope; return renderPanel(); }
    if (d.len) { prefs.examLen = +d.len; persistPrefs(); return renderPanel(); }
    if (d.scope) { prefs.examScope = d.scope; persistPrefs(); return renderPanel(); }
    if (d.pick) return exPick(+d.pick);

    switch (d.act) {
        case "openCap": prefs.page = "cap"; prefs.rank = null; capUi().view = "start"; persistPrefs(); render(); return window.scrollTo(0, 0);
        case "openQ": prefs.page = "q"; prefs.rank = null; ui.search = ""; persistPrefs(); render(); return window.scrollTo(0, 0);
        case "qExpand": ITEMS.forEach(i => ui.qCh.add(i.ch)); return renderQ();
        case "qCollapse": ui.qCh.clear(); return renderQ();
        case "qPrint": return qPrint();
        case "qCsv": return qCsv();
        case "qClear":
            if (confirm(t("clearFormQ"))) { qData().items = {}; persist(); renderQ(); toast(t("cleared")); }
            return;
        case "expandAll": itemsFor(prefs.rank).forEach(i => ui.chOpen.add(i.ch)); return renderPanel();
        case "collapseAll": ui.chOpen.clear(); return renderPanel();
        case "ivStart": case "ivRestart": return startInterview();
        case "ivRepeat": return startInterview(ui.iv.again.slice());
        case "ivReveal": ui.iv.shown = true; return renderPanel();
        case "ivAgain": return ivAnswer(false);
        case "ivKnew": return ivAnswer(true);
        case "exStart": case "exRetry": return startExam();
        case "exNext": return exNext();
        case "backup": return backup();
        case "restore": return $("#fileImport").click();
        case "reset":
            if (confirm(t("resetQ"))) { data = { ranks: {} }; persist(); render(); toast(t("cleared")); }
            return;
    }
});

document.addEventListener("input", e => {
    if (e.target.id === "search") { ui.search = e.target.value; ui.focusSearch = true; return prefs.page === "q" ? renderQ() : renderPanel(); }
    if (e.target.dataset.meta) { qData().meta[e.target.dataset.meta] = e.target.value; return persist(); }
    if (e.target.dataset.qnote) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
        return setQ(e.target.dataset.qnote, { n: e.target.value });
    }
    const id = e.target.dataset.note;
    if (id) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
        const items = rankData(prefs.rank).items;
        items[id] = Object.assign({ s: 0, n: "" }, items[id], { n: e.target.value });
        persist();
    }
});

document.addEventListener("toggle", e => { if (e.target.classList?.contains("report")) ui.repOpen = e.target.open; }, true);

document.addEventListener("keydown", e => {
    if (e.target.matches("input, textarea") || e.ctrlKey || e.metaKey || e.altKey || !prefs.rank) return;
    if (prefs.tab === "interview" && ui.iv && ui.iv.pos < ui.iv.deck.length) {
        if (!ui.iv.shown && (e.key === " " || e.key === "Enter")) { e.preventDefault(); ui.iv.shown = true; renderPanel(); }
        else if (ui.iv.shown && e.key === "1") ivAnswer(false);
        else if (ui.iv.shown && e.key === "2") ivAnswer(true);
    } else if (prefs.tab === "exam" && ui.ex && ui.ex.pos < ui.ex.qs.length) {
        const cur = ui.ex.qs[ui.ex.pos];
        const n = e.key.length === 1 ? "1234".indexOf(e.key) >= 0 ? "1234".indexOf(e.key) : "abcd".indexOf(e.key.toLowerCase()) : -1;
        if (ui.ex.picked == null && n >= 0) exPick(cur.order[n]);
        else if (ui.ex.picked != null && e.key === "Enter") { e.preventDefault(); exNext(); }
    }
});

render();
