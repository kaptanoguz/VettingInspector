/* ═══════════════════════════════════════════════════════════════════════
   Vetting Inspector — core data

   The checklist uses the official SIRE 2.0 question numbers (oil and
   chemical tankers). Each question is defined in js/sire/*.js with:

     S(no, ranks, highRisk, trTitle, company, [en guide], [tr guide])

     company  C(ref, en, tr) — the company SQEMS procedure that answers the
              question, written from the manuals in tools/source/manuals.
              ref names the book and section, e.g. "B2 §2.2.3.1".
     guide    [expect, evidence, common finding] — industry guidance that
              helps the crew member explain and show it.

   js/company.js (generated from the company's SIRE work files) adds the
   official question text, the inspector focus notes and the rating Q&A.

   Rank groups: DECK = MS CO 2O 3O · ENG = CE 2E ETO · OFF = both · ALL
   Not included: gas carrier, LNG fuel, DP / shuttle, OBO, polar and
   photograph questions.
   ═══════════════════════════════════════════════════════════════════════ */

const RANKS = [
    { id: "MS",  dept: "deck",   en: "Master",            tr: "Kaptan",              short: "MSTR" },
    { id: "CO",  dept: "deck",   en: "Chief Officer",     tr: "Birinci Zabit",       short: "C/O" },
    { id: "2O",  dept: "deck",   en: "Second Officer",    tr: "İkinci Zabit",        short: "2/O" },
    { id: "3O",  dept: "deck",   en: "Third Officer",     tr: "Üçüncü Zabit",        short: "3/O" },
    { id: "DR",  dept: "deck",   en: "Deck Ratings",      tr: "Güverte Tayfaları",   short: "BSN/AB", sub: { en: "Bosun · Pumpman · AB · OS", tr: "Lostromo · Pompacı · AB · OS" } },
    { id: "CE",  dept: "engine", en: "Chief Engineer",    tr: "Başmühendis",         short: "C/E" },
    { id: "2E",  dept: "engine", en: "Second Engineer",   tr: "İkinci Mühendis",     short: "2/E" },
    { id: "ETO", dept: "engine", en: "Electro-Technical Officer", tr: "Elektrik Zabiti", short: "ETO" },
    { id: "ER",  dept: "engine", en: "Engine Ratings",    tr: "Makine Tayfaları",    short: "FTR/OLR", sub: { en: "Fitter · Oiler · Wiper", tr: "Fitter · Yağcı · Silici" } }
];

const CHAPTERS = {
    2:  { en: "Certification & Documentation", tr: "Sertifikasyon ve Dokümantasyon" },
    3:  { en: "Crew Management",               tr: "Personel Yönetimi" },
    4:  { en: "Navigation & Communications",   tr: "Seyir ve Haberleşme" },
    5:  { en: "Safety Management",             tr: "Emniyet Yönetimi" },
    6:  { en: "Pollution Prevention",          tr: "Kirliliğin Önlenmesi" },
    7:  { en: "Maritime Security",             tr: "Deniz Güvenliği" },
    8:  { en: "Cargo & Ballast Systems",       tr: "Yük ve Balast Sistemleri" },
    9:  { en: "Mooring & Anchoring",           tr: "Palamar ve Demirleme" },
    10: { en: "Machinery Spaces",              tr: "Makine Daireleri" }
};

/* Company SQEMS books */
const MANUALS = {
    B1: "SMM – Safety Management Manual",
    B2: "HSSEQ Procedures",
    B3: "Operational Manual – Bridge & Deck",
    B4: "Operational Manual – Cargo",
    B5: "Operational Manual – Engine",
    B6: "Emergency Contingency Manual",
    B7: "Training Manual",
    MSMP: "Mooring System & Line Management Plan (M/T ADA)"
};

const GROUPS = { DECK: "MS CO 2O 3O", ENG: "CE 2E ETO", OFF: "MS CO 2O 3O CE 2E ETO", ALL: "MS CO 2O 3O DR CE 2E ETO ER" };
const ITEMS = [];

function C(ref, en, tr) { return { ref, en: en || "", tr: tr || "" }; }

function S(no, ranks, hr, tr, co, gEn, gTr) {
    const ids = ranks.split(" ").flatMap(r => (GROUPS[r] || r).split(" "));
    const pack = a => a ? { exp: a[0] || "", ev: a[1] || "", pit: a[2] || "" } : null;
    ITEMS.push({
        id: no, ch: +no.split(".")[0], ranks: [...new Set(ids)], hr: !!hr, tr,
        co: co || null, g: { en: pack(gEn), tr: pack(gTr) }
    });
}
