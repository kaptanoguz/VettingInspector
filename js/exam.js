/* ═══════════════════════════════════════════════════════════════════════
   Vetting Inspector — exam bank
   Q(ranks, correctIndex, [en: question, 4 options, explanation], [tr: …])
   The first option is not always correct; options are shuffled at runtime.
   ═══════════════════════════════════════════════════════════════════════ */

const EXAM = [];
function Q(ranks, a, en, tr, ref) {
    const pack = x => ({ q: x[0], o: x.slice(1, 5), why: x[5] });
    EXAM.push({ ranks: ranks === "ALL" ? null : [...new Set(ranks.split(" ").flatMap(r => (GROUPS[r] || r).split(" ")))], a, en: pack(en), tr: pack(tr), ref: ref || null });
}
/* Company (Torlak SQEMS) question — ref names the manual section */
const QC = (ref, ranks, a, en, tr) => Q(ranks, a, en, tr, ref);

/* ── Everyone ────────────────────────────────────────────────────────── */
Q("ALL", 1,
  ["Negative observations in SIRE 2.0 are linked to which three categories?",
   "Deck, Engine, Cargo", "Human, Process, Hardware", "Minor, Major, Critical", "Office, Ship, Terminal",
   "Every SIRE 2.0 observation is classified as Human, Process or Hardware so the operator can find the root cause."],
  ["SIRE 2.0'da olumsuz gözlemler hangi üç kategoriye bağlanır?",
   "Güverte, Makine, Yük", "İnsan, Süreç, Donanım", "Küçük, Büyük, Kritik", "Ofis, Gemi, Terminal",
   "SIRE 2.0'da her gözlem İnsan, Süreç veya Donanım olarak sınıflanır; böylece işletmeci kök nedeni bulabilir."]);

Q("ALL", 2,
  ["What is a Performance Influencing Factor (PIF)?",
   "A score given to the ship", "A class notation", "A condition that makes human error more or less likely, e.g. fatigue or poor procedures", "An engine performance test",
   "When a Human observation is raised, the inspector records PIFs such as fatigue, workload, training or procedures."],
  ["Performansı Etkileyen Faktör (PIF) nedir?",
   "Gemiye verilen bir puan", "Bir klas notasyonu", "İnsan hatasını olası kılan veya azaltan koşul; örn. yorgunluk, yetersiz prosedür", "Bir makine performans testi",
   "İnsan kaynaklı gözlem yazıldığında denetçi yorgunluk, iş yükü, eğitim veya prosedür gibi PIF'leri kaydeder."]);

Q("ALL", 0,
  ["Minimum hours of rest required under STCW / MLC:",
   "10 h in any 24 h and 77 h in any 7 days", "8 h in any 24 h and 56 h in any 7 days", "12 h in any 24 h and 84 h in any 7 days", "6 h in any 24 h and 70 h in any 7 days",
   "Rest may be split into no more than two periods, one of at least 6 hours, with no more than 14 hours between them."],
  ["STCW / MLC'ye göre asgari dinlenme süresi:",
   "Herhangi 24 saatte 10 saat ve herhangi 7 günde 77 saat", "24 saatte 8 saat ve 7 günde 56 saat", "24 saatte 12 saat ve 7 günde 84 saat", "24 saatte 6 saat ve 7 günde 70 saat",
   "Dinlenme en fazla iki parçaya bölünebilir, biri en az 6 saat olmalı ve aralarında 14 saatten fazla olmamalıdır."]);

Q("ALL", 1,
  ["Hours of rest may be divided into how many periods?",
   "Any number", "No more than two, one at least 6 hours long", "Exactly three", "No more than four",
   "STCW A-VIII/1: no more than two periods, one of which at least 6 hours."],
  ["Dinlenme süresi en fazla kaç parçaya bölünebilir?",
   "Sınırsız", "En fazla iki; biri en az 6 saat", "Tam üç", "En fazla dört",
   "STCW A-VIII/1: en fazla iki parça, biri en az 6 saat."]);

Q("ALL", 3,
  ["Who can stop a job they believe is unsafe?",
   "Only the Master", "Only officers", "Only the person in charge of the job", "Any crew member",
   "Stop Work Authority belongs to everyone on board, with no blame for using it in good faith."],
  ["Emniyetsiz olduğunu düşündüğü bir işi kim durdurabilir?",
   "Yalnızca kaptan", "Yalnızca zabitler", "Yalnızca işin sorumlusu", "Herhangi bir personel",
   "İşi Durdurma Yetkisi gemideki herkese aittir; iyi niyetle kullanana suçlama yapılmaz."]);

Q("ALL", 1,
  ["The general emergency alarm signal is:",
   "Three long blasts", "Seven or more short blasts followed by one long blast", "One prolonged blast", "Continuous ringing of the bell",
   "SOLAS / LSA Code: 7 short + 1 long on the ship's whistle and alarm bells."],
  ["Genel acil durum alarm işareti nedir?",
   "Üç uzun düdük", "Yedi veya daha fazla kısa, ardından bir uzun düdük", "Bir uzun düdük", "Kampananın sürekli çalınması",
   "SOLAS / LSA Kodu: geminin düdüğü ve alarm zilleriyle 7 kısa + 1 uzun."]);

QC("B2 §2.2.3.1", "ALL", 2,
  ["Company criteria for entering an enclosed space: oxygen must read",
   "At least 19.5%", "Between 18% and 23%", "Exactly 20.9% by volume — any other reading is investigated first", "At least 21% by volume",
   "Any reading other than 20.9% (depleted or enriched) means the space is not entered until the cause is found and resolved by ventilation."],
  ["Şirket kriterine göre kapalı alana girişte oksijen değeri:",
   "En az %19,5", "%18 ile %23 arası", "Hacimce tam %20,9 — farklı her değer önce araştırılır", "Hacimce en az %21",
   "%20,9 dışındaki her değerde (düşük veya yüksek) neden bulunup havalandırmayla giderilene kadar girilmez."]);

Q("ALL", 0,
  ["The attendant at the entrance of an enclosed space should:",
   "Stay at the entrance, keep communication and raise the alarm — never enter to rescue alone", "Enter to help if the entrant stops answering", "Leave to fetch equipment when needed", "Also carry out the gas testing inside",
   "Most enclosed space fatalities are would-be rescuers. The attendant raises the alarm and waits for the rescue team."],
  ["Kapalı alan girişindeki bekçi (attendant):",
   "Girişte kalır, iletişimi sürdürür, alarm verir — tek başına kurtarmak için asla girmez", "İçerideki cevap vermezse yardım için girer", "Gerektiğinde ekipman almak için ayrılır", "İçerideki gaz ölçümünü de yapar",
   "Kapalı alan ölümlerinin çoğu kurtarmaya çalışanlardır. Bekçi alarm verir ve kurtarma ekibini bekler."]);

Q("ALL", 1,
  ["How often must an enclosed space entry and rescue drill be held?",
   "Every month", "At least every two months", "Every six months", "Once a year",
   "SOLAS III/19.3.6: at least every two months."],
  ["Kapalı alana giriş ve kurtarma tatbikatı ne sıklıkla yapılmalıdır?",
   "Her ay", "En az iki ayda bir", "Altı ayda bir", "Yılda bir",
   "SOLAS III/19.3.6: en az iki ayda bir."]);

Q("ALL", 2,
  ["Abandon ship and fire drills must be held:",
   "Every week", "Every three months", "Every month, and within 24 h of leaving port if more than 25% of crew missed the last one", "Only when a new crew member joins",
   "SOLAS III/19.3.2."],
  ["Gemiyi terk ve yangın tatbikatları ne zaman yapılmalıdır?",
   "Her hafta", "Üç ayda bir", "Her ay; personelin %25'inden fazlası son tatbikata katılmadıysa limandan ayrıldıktan sonra 24 saat içinde", "Sadece yeni personel katılınca",
   "SOLAS III/19.3.2."]);

Q("ALL", 1,
  ["Typical blood alcohol limit for seafarers on duty (STCW / OCIMF):",
   "0.08% BAC", "0.05% BAC", "0.10% BAC", "No limit when off duty in port",
   "STCW sets a maximum of 0.05% BAC or 0.25 mg/l in breath; many companies apply zero tolerance."],
  ["Görevdeki denizciler için tipik kandaki alkol limiti (STCW / OCIMF):",
   "%0,08 BAC", "%0,05 BAC", "%0,10 BAC", "Limanda izinliyken limit yok",
   "STCW azami %0,05 BAC veya nefeste 0,25 mg/l belirler; birçok şirket sıfır tolerans uygular."]);

Q("ALL", 3,
  ["In SIRE 2.0, how should you answer an inspector's question about your job?",
   "Read the procedure aloud", "Refer the inspector to the Master", "Give a memorised standard answer", "Explain and show how you actually do it, in your own words",
   "SIRE 2.0 tests understanding and actual practice. Scripted answers the crew member cannot explain lead to Human observations."],
  ["SIRE 2.0'da denetçinin işinizle ilgili sorusuna nasıl cevap vermelisiniz?",
   "Prosedürü yüksek sesle okuyarak", "Denetçiyi kaptana yönlendirerek", "Ezberlenmiş standart bir cevapla", "Gerçekte nasıl yaptığınızı kendi cümlelerinizle anlatıp göstererek",
   "SIRE 2.0 anlamayı ve gerçek uygulamayı test eder. Açıklanamayan ezber cevaplar İnsan kaynaklı gözleme yol açar."]);

Q("ALL", 0,
  ["What is the main purpose of near miss reporting?",
   "Learning and preventing future accidents", "Identifying who to blame", "Meeting a monthly quota", "Satisfying the charterer",
   "A healthy reporting culture shows the SMS is alive. Inspectors ask for examples and what changed."],
  ["Ramak kala raporlamanın temel amacı nedir?",
   "Ders çıkarmak ve gelecekteki kazaları önlemek", "Suçluyu bulmak", "Aylık kotayı doldurmak", "Kiracıyı memnun etmek",
   "Sağlıklı bir raporlama kültürü SMS'in yaşadığını gösterir. Denetçiler örnek ve sonrasında neyin değiştiğini sorar."]);

Q("ALL", 2,
  ["Plastics may be discharged into the sea:",
   "More than 12 nm from land", "More than 3 nm from land if shredded", "Never", "Only outside special areas",
   "MARPOL Annex V prohibits the discharge of all plastics everywhere."],
  ["Plastik denize ne zaman atılabilir?",
   "Karadan 12 milden uzakta", "Parçalanmışsa karadan 3 milden uzakta", "Asla", "Yalnızca özel alanlar dışında",
   "MARPOL Ek V her yerde tüm plastiklerin denize atılmasını yasaklar."]);

/* ── Deck officers & Master ──────────────────────────────────────────── */
Q("MS 2O 3O CO", 1,
  ["Approximate maximum squat in open water (Barrass):",
   "Cb × V / 10", "Cb × V² / 100 metres (V in knots)", "V² / 50 metres", "Draft × 10%",
   "Squat ≈ Cb × V²/100 in open water and about twice that in a confined channel."],
  ["Açık suda yaklaşık azami squat (Barrass):",
   "Cb × V / 10", "Cb × V² / 100 metre (V knot)", "V² / 50 metre", "Draftın %10'u",
   "Squat açık suda ≈ Cb × V²/100, dar kanalda yaklaşık iki katıdır."]);

Q("MS 2O 3O", 1,
  ["In a confined channel, squat compared with open water is roughly:",
   "The same", "Doubled", "Halved", "Negligible",
   "Barrass: confined channel squat ≈ 2 × open-water squat."],
  ["Dar kanalda squat, açık suya göre yaklaşık:",
   "Aynı", "İki katı", "Yarısı", "İhmal edilebilir",
   "Barrass: dar kanal squat'ı ≈ 2 × açık su squat'ı."]);

Q("MS 2O 3O", 3,
  ["Which CATZOC category indicates the lowest assessed survey quality?",
   "A1", "B", "C", "D",
   "A1 is the best; D is the worst assessed category. U means unassessed — treat with great caution."],
  ["Hangi CATZOC kategorisi en düşük değerlendirilmiş ölçüm kalitesini gösterir?",
   "A1", "B", "C", "D",
   "A1 en iyisi, D en kötü değerlendirilmiş kategoridir. U değerlendirilmemiş demektir — çok dikkatli olunmalı."]);

Q("MS 2O 3O", 0,
  ["If the safety contour value you enter is not available in the ENC, the ECDIS will:",
   "Use the next deeper available contour", "Use the next shallower contour", "Display no safety contour", "Use the safety depth value instead",
   "This is why the officer must know which contour is actually displayed."],
  ["Girdiğiniz emniyet konturu değeri ENC'de yoksa ECDIS:",
   "Bir sonraki daha derin mevcut konturu kullanır", "Bir sonraki daha sığ konturu kullanır", "Emniyet konturu göstermez", "Bunun yerine emniyet derinliği değerini kullanır",
   "Bu nedenle zabit gerçekte hangi konturun gösterildiğini bilmelidir."]);

Q("MS 2O 3O", 1,
  ["The BNWAS dormant period is adjustable between:",
   "1 and 3 minutes", "3 and 12 minutes", "15 and 30 minutes", "30 and 60 minutes",
   "IMO performance standard MSC.128(79)."],
  ["BNWAS uyku (dormant) süresi hangi aralıkta ayarlanabilir?",
   "1–3 dakika", "3–12 dakika", "15–30 dakika", "30–60 dakika",
   "IMO performans standardı MSC.128(79)."]);

Q("MS 2O 3O", 2,
  ["With a pilot on board, responsibility for the safe navigation of the ship:",
   "Passes to the pilot", "Is shared equally with the pilot", "Remains with the Master; the OOW keeps monitoring", "Passes to the port authority",
   "The pilot advises; the Master and OOW remain responsible and must challenge if in doubt."],
  ["Gemide pilot varken geminin emniyetli seyri sorumluluğu:",
   "Pilota geçer", "Pilotla eşit paylaşılır", "Kaptanda kalır; vardiya zabiti izlemeye devam eder", "Liman otoritesine geçer",
   "Pilot tavsiye eder; kaptan ve vardiya zabiti sorumludur ve şüphede itiraz etmelidir."]);

Q("MS 2O 3O", 0,
  ["When should compass error be checked?",
   "Each watch where possible and after any major course alteration", "Once a week", "Only before arrival", "Only when the gyro alarms",
   "Records with long gaps are a common observation."],
  ["Pusula hatası ne zaman kontrol edilmelidir?",
   "Mümkünse her vardiyada ve büyük rota değişikliklerinden sonra", "Haftada bir", "Sadece varıştan önce", "Sadece cayro alarm verince",
   "Uzun boşluklu kayıtlar sık rastlanan bir gözlemdir."]);

Q("MS 2O 3O", 1,
  ["How often must an emergency steering drill be carried out?",
   "Every month", "At least every three months", "Every six months", "Once a year",
   "SOLAS V/26: emergency steering drills at least every three months."],
  ["Acil dümen tatbikatı ne sıklıkla yapılmalıdır?",
   "Her ay", "En az üç ayda bir", "Altı ayda bir", "Yılda bir",
   "SOLAS V/26: acil dümen tatbikatı en az üç ayda bir."]);

Q("MS 2O 3O 2E ETO", 2,
  ["Steering gear must be checked and tested before departure within:",
   "48 hours", "24 hours", "12 hours", "1 hour",
   "SOLAS V/26: within 12 hours before departure."],
  ["Dümen sistemi kalkıştan önce ne kadar süre içinde kontrol ve test edilmelidir?",
   "48 saat", "24 saat", "12 saat", "1 saat",
   "SOLAS V/26: kalkıştan önceki 12 saat içinde."]);

Q("2O 3O", 0,
  ["GMDSS DSC equipment should be tested without radiating a signal:",
   "Daily", "Weekly", "Monthly", "Annually",
   "Daily internal test, plus daily battery checks; results recorded in the radio log."],
  ["GMDSS DSC cihazı sinyal yaymadan ne sıklıkla test edilmelidir?",
   "Günlük", "Haftalık", "Aylık", "Yıllık",
   "Günlük iç test ve günlük akü kontrolü; sonuçlar telsiz jurnaline kaydedilir."]);

Q("MS 2O", 1,
  ["After a serious incident, the first priority with the VDR is to:",
   "Switch it off to save power", "Save (preserve) the recorded data before it is overwritten", "Download it to a USB stick for the crew", "Reset it",
   "Data is overwritten after the recording period; the Master must know the save procedure."],
  ["Ciddi bir olaydan sonra VDR ile ilgili ilk öncelik:",
   "Güç tasarrufu için kapatmak", "Kayıtlı veriyi üzerine yazılmadan kaydetmek (korumak)", "Personel için USB'ye indirmek", "Sıfırlamak",
   "Veriler kayıt süresinden sonra üzerine yazılır; kaptan kaydetme prosedürünü bilmelidir."]);

Q("MS 2O 3O DR", 3,
  ["Under COLREG Rule 5, a proper lookout is kept by:",
   "Radar only", "AIS and ECDIS", "The OOW only during daylight", "Sight and hearing as well as all available means",
   "Rule 5: sight and hearing as well as by all available means appropriate to the circumstances."],
  ["COLREG Kural 5'e göre uygun gözcülük nasıl yapılır?",
   "Sadece radarla", "AIS ve ECDIS ile", "Gündüz sadece vardiya zabitiyle", "Görme ve işitmenin yanı sıra tüm uygun araçlarla",
   "Kural 5: görme ve işitme ile birlikte koşullara uygun tüm araçlarla."]);

Q("MS 2O 3O", 2,
  ["A passage plan should cover:",
   "Pilot station to pilot station", "Open sea only", "Berth to berth", "Only the restricted waters",
   "IMO Res. A.893(21): berth-to-berth, including areas where a pilot is on board."],
  ["Sefer planı neyi kapsamalıdır?",
   "Pilot istasyonundan pilot istasyonuna", "Sadece açık deniz", "Rıhtımdan rıhtıma", "Sadece kısıtlı sular",
   "IMO Res. A.893(21): pilotlu bölgeler dahil rıhtımdan rıhtıma."]);

/* ── Cargo (Master / C/O / deck officers) ────────────────────────────── */
Q("MS CO 2O 3O", 1,
  ["Maximum oxygen content in an inerted cargo tank:",
   "5% by volume", "8% by volume", "11% by volume", "21% by volume",
   "SOLAS II-2: tank atmosphere O₂ not more than 8% with positive pressure; IG supply itself ≤ 5%."],
  ["İnert edilmiş bir yük tankında azami oksijen:",
   "Hacimce %5", "Hacimce %8", "Hacimce %11", "Hacimce %21",
   "SOLAS II-2: tank atmosferi pozitif basınçla en fazla %8 O₂; IG beslemesinin kendisi ≤ %5."]);

Q("CO 2E", 0,
  ["The inert gas supplied to the cargo tanks should contain O₂ not more than:",
   "5% by volume", "8% by volume", "1% by volume", "12% by volume",
   "IG system must be capable of delivering gas with ≤5% O₂."],
  ["Yük tanklarına verilen inert gazdaki O₂ en fazla:",
   "Hacimce %5", "Hacimce %8", "Hacimce %1", "Hacimce %12",
   "IG sistemi ≤ %5 O₂ içeren gaz verebilmelidir."]);

Q("MS CO 2O 3O", 2,
  ["After loading a static accumulator cargo into a non-inerted tank, conductive ullaging/sampling should wait:",
   "5 minutes", "10 minutes", "30 minutes", "No wait is needed",
   "ISGOTT: allow 30 minutes for the static charge to relax."],
  ["Statik biriktiren yük inert olmayan tanka yüklendikten sonra iletken ekipmanla iskandil/numune için beklenmesi gereken süre:",
   "5 dakika", "10 dakika", "30 dakika", "Beklemeye gerek yok",
   "ISGOTT: statik yükün boşalması için 30 dakika beklenir."]);

Q("MS CO 2O 3O", 0,
  ["Why is the initial loading rate restricted at the start of loading a tank?",
   "To limit static generation until the tank inlet is covered", "To protect the shore pump", "To save fuel", "To allow the IG plant to start",
   "Splashing and high velocity generate static; ≈1 m/s in the inlet until it is submerged."],
  ["Bir tanka yükleme başında başlangıç debisi neden sınırlandırılır?",
   "Tank girişi sıvıyla kapanana kadar statik oluşumunu sınırlamak için", "Terminal pompasını korumak için", "Yakıt tasarrufu için", "IG tesisinin çalışması için",
   "Sıçrama ve yüksek hız statik üretir; giriş kapanana kadar ≈1 m/s."]);

Q("MS CO", 1,
  ["ODME discharge from an oil tanker is permitted when the instantaneous rate does not exceed:",
   "15 ppm", "30 litres per nautical mile", "60 litres per nautical mile", "100 ppm",
   "MARPOL Annex I Reg. 34: en route, >50 nm from land, ≤30 l/nm, total ≤1/30 000 of the last cargo."],
  ["Petrol tankerinden ODME ile tahliyeye, anlık debi şu değeri aşmadıkça izin verilir:",
   "15 ppm", "Deniz mili başına 30 litre", "Deniz mili başına 60 litre", "100 ppm",
   "MARPOL Ek I Kural 34: seyir halinde, karadan >50 mil, ≤30 l/nm, toplam ≤ son yükün 1/30 000'i."]);

Q("MS CO", 2,
  ["Stability and hull stress must be checked:",
   "Only for the departure condition", "Only for arrival", "For every critical stage of the cargo/ballast operation", "Only when requested by the terminal",
   "Intermediate stages often produce the worst free surface and stress conditions."],
  ["Stabilite ve gövde gerilmeleri ne zaman kontrol edilmelidir?",
   "Sadece kalkış kondisyonu için", "Sadece varış için", "Yük/balast operasyonunun her kritik aşaması için", "Sadece terminal isterse",
   "Ara aşamalar genellikle en kötü serbest yüzey ve gerilme koşullarını oluşturur."]);

Q("CO", 3,
  ["For a chemical tanker, a Category X cargo tank must be:",
   "Washed at sea only", "Ventilated only", "Left unwashed for the next cargo", "Prewashed before leaving the unloading port, with residues to reception facilities",
   "MARPOL Annex II: mandatory prewash for Category X; recorded in the Cargo Record Book and endorsed by the surveyor."],
  ["Kimyasal tankerde X Kategorisi yük tankı:",
   "Sadece denizde yıkanır", "Sadece havalandırılır", "Sonraki yük için yıkanmadan bırakılır", "Tahliye limanından ayrılmadan ön yıkama yapılır, kalıntılar kabul tesisine verilir",
   "MARPOL Ek II: X Kategorisi için zorunlu ön yıkama; Yük Kayıt Defterine işlenir ve sörveyör onaylar."]);

Q("CO 2O 3O DR", 1,
  ["Typical cargo tank alarm settings are:",
   "High 80%, overfill 90%", "High-level ≈95%, overfill ≈98%", "High 98%, overfill 100%", "Only one alarm at 99%",
   "High-level and independent overfill alarms are tested before every cargo operation."],
  ["Tipik yük tankı alarm ayarları:",
   "Yüksek %80, taşma %90", "Yüksek seviye ≈%95, taşma ≈%98", "Yüksek %98, taşma %100", "%99'da tek alarm",
   "Yüksek seviye ve bağımsız taşma alarmları her yük operasyonundan önce test edilir."]);

Q("CO", 0,
  ["The Ship/Shore Safety Checklist should be:",
   "Completed jointly with the terminal and its repetitive checks carried out at the agreed intervals", "Signed by the ship only", "Filled in after the operation", "Optional at oil terminals",
   "ISGOTT 6: a joint process — inspectors check that repetitive checks were really done."],
  ["Gemi/Terminal Emniyet Kontrol Listesi:",
   "Terminalle birlikte doldurulmalı ve tekrarlı kontroller kararlaştırılan aralıklarla yapılmalı", "Sadece gemi tarafından imzalanır", "Operasyondan sonra doldurulur", "Petrol terminallerinde isteğe bağlıdır",
   "ISGOTT 6: ortak bir süreç — denetçiler tekrarlı kontrollerin gerçekten yapıldığına bakar."]);

Q("CO 2O", 1,
  ["Ballast Water Record Book entries must be kept on board for at least:",
   "1 year", "2 years", "5 years", "Until the next dry dock",
   "BWM Convention Reg. B-2: at least two years on board, then three years under company control."],
  ["Balast Suyu Kayıt Defteri kayıtları gemide en az ne kadar saklanmalıdır?",
   "1 yıl", "2 yıl", "5 yıl", "Bir sonraki havuza kadar",
   "BWM Sözleşmesi Kural B-2: gemide en az iki yıl, ardından üç yıl şirket kontrolünde."]);

/* ── Mooring ─────────────────────────────────────────────────────────── */
Q("CO 2O 3O DR", 2,
  ["According to MEG4, painted snap-back zones on the deck:",
   "Show the only dangerous areas", "Are mandatory on all ships", "May give a false sense of safety — the whole mooring area should be treated as hazardous", "Are only needed for wire ropes",
   "MEG4 moved away from painted zones because snap-back paths are hard to predict."],
  ["MEG4'e göre güverteye boyanmış geri tepme (snap-back) bölgeleri:",
   "Tek tehlikeli alanları gösterir", "Tüm gemilerde zorunludur", "Yanlış bir emniyet hissi verebilir — tüm palamar alanı tehlikeli kabul edilmeli", "Sadece tel halatlar için gerekir",
   "MEG4, geri tepme yolları tahmin edilemediği için boyalı bölgelerden uzaklaştı."]);

Q("CO 2E DR", 1,
  ["Under MEG4, winch brakes are normally set to render at about:",
   "30% of ship design MBL", "60% of ship design MBL", "100% of ship design MBL", "120% of ship design MBL",
   "So the brake slips before the line breaks."],
  ["MEG4'e göre ırgat frenleri normalde yaklaşık ne değerde kaymaya ayarlanır?",
   "Gemi tasarım MBL'sinin %30'u", "Gemi tasarım MBL'sinin %60'ı", "Gemi tasarım MBL'sinin %100'ü", "Gemi tasarım MBL'sinin %120'si",
   "Böylece halat kopmadan önce fren kayar."]);

Q("DR 2O 3O", 0,
  ["While alongside, mooring winches should normally be left:",
   "With brakes on and out of gear", "In gear on auto-tension", "With brakes released", "Running slowly",
   "Brakes hold the line; winches in gear or on auto-tension can let the ship move along the berth."],
  ["Rıhtımdayken palamar ırgatları normalde nasıl bırakılmalıdır?",
   "Frenler bağlı ve vites boşta", "Viteste otomatik germe modunda", "Frenler açık", "Yavaşça çalışır halde",
   "Halatı fren tutar; viteste veya otomatik germede ırgatlar geminin rıhtım boyunca kaymasına neden olabilir."]);

/* ── Safety / LSA (deck & engine) ────────────────────────────────────── */
Q("2E 3O 2O DR", 2,
  ["Lifeboat engines should be run:",
   "Only during drills", "Monthly for 30 seconds", "Weekly, for a total of not less than 3 minutes", "Yearly by the service company",
   "SOLAS III/20: weekly inspection including running the engine ahead and astern."],
  ["Filika motorları nasıl çalıştırılmalıdır?",
   "Sadece tatbikatlarda", "Ayda bir 30 saniye", "Haftalık, toplam en az 3 dakika", "Yılda bir servis firmasınca",
   "SOLAS III/20: motorun ileri-geri çalıştırılmasını da içeren haftalık muayene."]);

Q("3O 2O DR", 1,
  ["Each lifeboat should be launched with its crew and manoeuvred in the water at least:",
   "Every month", "Every three months", "Every year", "Every five years",
   "SOLAS III/19.3.3."],
  ["Her filika ekibiyle birlikte indirilip suda manevra yaptırılmalıdır, en az:",
   "Her ay", "Üç ayda bir", "Yılda bir", "Beş yılda bir",
   "SOLAS III/19.3.3."]);

Q("3O 2O DR ER", 3,
  ["The low-pressure whistle on an SCBA warns the wearer to:",
   "Check the face mask seal", "Adjust the flow", "Change the filter", "Leave the hazardous area immediately",
   "It sounds with the reserve air remaining — enough only to escape."],
  ["SCBA'daki düşük basınç düdüğü kullanıcıyı neye karşı uyarır?",
   "Maske sızdırmazlığını kontrol etmeye", "Akışı ayarlamaya", "Filtreyi değiştirmeye", "Tehlikeli alanı hemen terk etmeye",
   "Yedek hava kaldığında öter — yalnızca kaçmaya yeterlidir."]);

Q("DR ER", 0,
  ["First action when you see someone fall overboard:",
   "Shout 'man overboard' with the side, throw a lifebuoy and keep pointing at the person", "Run to the bridge", "Jump in to help", "Look for a camera",
   "Keeping visual contact is vital; the bridge then starts the MOB manoeuvre."],
  ["Birinin denize düştüğünü görünce ilk hareket:",
   "Hangi taraftan olduğunu belirterek 'denize adam düştü' diye bağır, can simidi at ve kişiyi göstermeye devam et", "Köprüüstüne koş", "Yardım için atla", "Kamera ara",
   "Görsel teması korumak hayatidir; köprüüstü ardından MOB manevrasını başlatır."]);

Q("DR ER 3O", 1,
  ["On gangway watch, a visitor without identification should:",
   "Be allowed on if escorted", "Be refused boarding and the OOW informed", "Be allowed on in daylight", "Leave their phone as security",
   "ISPS / SSP: identity must be verified before access."],
  ["İskele vardiyasında kimliği olmayan bir ziyaretçi:",
   "Refakatle içeri alınabilir", "Gemiye alınmaz ve vardiya zabitine bildirilir", "Gündüz alınabilir", "Telefonunu teminat bırakır",
   "ISPS / SSP: erişimden önce kimlik doğrulanmalıdır."]);

Q("MS CO DR", 2,
  ["Security drills must be conducted at least:",
   "Every month", "Every two months", "Every three months", "Every year",
   "ISPS Code Part B: at least once every three months; exercises at least once each calendar year."],
  ["Güvenlik tatbikatları en az ne sıklıkla yapılmalıdır?",
   "Her ay", "İki ayda bir", "Üç ayda bir", "Yılda bir",
   "ISPS Kod Bölüm B: en az üç ayda bir; egzersizler her takvim yılında en az bir kez."]);

/* ── Engine ──────────────────────────────────────────────────────────── */
Q("CE 2E ER", 1,
  ["The oil content limit for discharge of machinery space bilge water through the OWS is:",
   "5 ppm", "15 ppm", "50 ppm", "100 ppm",
   "MARPOL Annex I Reg. 15: ≤15 ppm, en route, with the 15 ppm alarm and automatic stop working."],
  ["Makine sintinesi suyunun OWS üzerinden tahliyesinde yağ içeriği limiti:",
   "5 ppm", "15 ppm", "50 ppm", "100 ppm",
   "MARPOL Ek I Kural 15: ≤15 ppm, seyir halinde, 15 ppm alarmı ve otomatik durdurma çalışır durumda."]);

Q("CE 2E", 2,
  ["The Oil Record Book must be retained on board for:",
   "1 year after the last entry", "2 years after the last entry", "3 years after the last entry", "Until the next IOPP renewal",
   "MARPOL Annex I Reg. 17/36: three years from the date of the last entry."],
  ["Petrol Kayıt Defteri gemide ne kadar saklanmalıdır?",
   "Son kayıttan sonra 1 yıl", "Son kayıttan sonra 2 yıl", "Son kayıttan sonra 3 yıl", "Bir sonraki IOPP yenilemesine kadar",
   "MARPOL Ek I Kural 17/36: son kayıt tarihinden itibaren üç yıl."]);

Q("CE 2E", 0,
  ["Maximum fuel sulphur content inside an Emission Control Area:",
   "0.10% m/m", "0.50% m/m", "1.00% m/m", "3.50% m/m",
   "MARPOL Annex VI Reg. 14: 0.10% in ECAs, 0.50% globally since 2020."],
  ["Emisyon Kontrol Alanı içinde yakıtta azami kükürt:",
   "%0,10 m/m", "%0,50 m/m", "%1,00 m/m", "%3,50 m/m",
   "MARPOL Ek VI Kural 14: ECA'da %0,10, 2020'den beri genelde %0,50."]);

Q("CE 2E", 1,
  ["The MARPOL fuel sample from bunkering must be retained under the ship's control:",
   "Until the next bunkering", "Until the fuel is substantially consumed, and not less than 12 months", "For 3 months", "For 3 years",
   "MARPOL Annex VI Reg. 18; the Bunker Delivery Note is kept for 3 years."],
  ["Bunkerdeki MARPOL yakıt numunesi geminin kontrolünde ne kadar saklanmalıdır?",
   "Bir sonraki bunkere kadar", "Yakıt büyük ölçüde tüketilene kadar, en az 12 ay", "3 ay", "3 yıl",
   "MARPOL Ek VI Kural 18; Bunker Teslim Belgesi 3 yıl saklanır."]);

Q("CE 2E ER", 2,
  ["Under SOLAS, hot surfaces likely to be exposed to oil must be insulated when their temperature exceeds:",
   "100 °C", "150 °C", "220 °C", "300 °C",
   "SOLAS II-2/4.2.2.6.1 — a frequent SIRE finding where lagging was not refitted."],
  ["SOLAS'a göre yağa maruz kalabilecek sıcak yüzeyler hangi sıcaklığın üzerinde izole edilmelidir?",
   "100 °C", "150 °C", "220 °C", "300 °C",
   "SOLAS II-2/4.2.2.6.1 — izolasyonun geri takılmaması sık rastlanan bir SIRE gözlemidir."]);

Q("CE 2E ETO", 1,
  ["On blackout, the emergency generator must start automatically and supply the emergency switchboard within:",
   "10 seconds", "45 seconds", "2 minutes", "5 minutes",
   "SOLAS II-1/43."],
  ["Karartmada acil jeneratör otomatik çalışıp acil panoyu en geç ne kadar sürede beslemelidir?",
   "10 saniye", "45 saniye", "2 dakika", "5 dakika",
   "SOLAS II-1/43."]);

Q("CE 2E ETO", 3,
  ["The main steering gear must be able to move the rudder from 35° on one side to 30° on the other within:",
   "10 seconds", "15 seconds", "60 seconds", "28 seconds",
   "SOLAS II-1/29 at deepest draft and maximum ahead service speed."],
  ["Ana dümen sistemi dümeni bir taraftaki 35°'den diğer taraftaki 30°'ye kaç saniyede getirebilmelidir?",
   "10 saniye", "15 saniye", "60 saniye", "28 saniye",
   "SOLAS II-1/29, en derin draft ve azami ileri servis hızında."]);

Q("CE 2E", 0,
  ["Before releasing CO₂ into the engine room, which must be done?",
   "Evacuate and count personnel, stop ventilation and fuel pumps, close openings", "Open the skylight for smoke venting", "Start the emergency fire pump only", "Wait for the fire to burn out",
   "The pre-discharge alarm (at least 20 s) warns anyone still inside; release is on the Master's order."],
  ["Makine dairesine CO₂ vermeden önce ne yapılmalıdır?",
   "Personel tahliye edilip sayılır, havalandırma ve yakıt pompaları durdurulur, açıklıklar kapatılır", "Duman çıksın diye kaporta açılır", "Sadece acil yangın pompası çalıştırılır", "Yangının sönmesi beklenir",
   "Ön boşaltma alarmı (en az 20 sn) içerde kalanları uyarır; boşaltma kaptanın emriyle yapılır."]);

Q("CE 2E ER", 3,
  ["Why must quick-closing valves never be wedged or tied open?",
   "It voids the class certificate only", "It damages the valve seat", "It increases fuel consumption", "They must shut remotely to cut fuel to a fire",
   "A wedged valve is a classic Hardware/Human observation and a real fire risk."],
  ["Çabuk kapama valfleri neden asla takozlanmamalı veya bağlanmamalıdır?",
   "Sadece klas sertifikasını geçersiz kılar", "Valf yuvasına zarar verir", "Yakıt tüketimini artırır", "Yangında yakıtı kesmek için uzaktan kapanmaları gerekir",
   "Takozlanmış valf klasik bir Donanım/İnsan gözlemidir ve gerçek yangın riskidir."]);

Q("CE 2E ER", 2,
  ["Minimum flash point of fuel oil used on board (general rule, SOLAS):",
   "43 °C", "52 °C", "60 °C", "75 °C",
   "SOLAS II-2/4.2.1: generally not lower than 60 °C (emergency generator fuel 43 °C)."],
  ["Gemide kullanılan yakıtın asgari parlama noktası (genel kural, SOLAS):",
   "43 °C", "52 °C", "60 °C", "75 °C",
   "SOLAS II-2/4.2.1: genelde 60 °C'den düşük olmamalı (acil jeneratör yakıtı 43 °C)."]);

Q("2E ETO ER", 1,
  ["Correct order for isolating equipment before maintenance:",
   "Tag, start work, then lock", "Identify energy sources, isolate, lock and tag, then verify zero energy", "Switch off at the local panel only", "Ask the duty engineer to watch the breaker",
   "Never start work until the isolation has been proven dead."],
  ["Bakım öncesi ekipman izolasyonunun doğru sırası:",
   "Etiketle, işe başla, sonra kilitle", "Enerji kaynaklarını belirle, izole et, kilitle ve etiketle, sonra enerjisizliği doğrula", "Sadece yerel panelden kapat", "Nöbetçi mühendisten şalteri izlemesini iste",
   "İzolasyonun enerjisiz olduğu kanıtlanmadan işe asla başlanmaz."]);

Q("ETO 2E", 0,
  ["Why is battery room ventilation essential?",
   "Charging batteries release hydrogen, which is explosive", "To cool the switchboard", "To remove CO₂", "It is only needed in port",
   "No naked lights, sparks or non-certified equipment in the battery room."],
  ["Akü odası havalandırması neden zorunludur?",
   "Şarj olan aküler patlayıcı hidrojen açığa çıkarır", "Panoyu soğutmak için", "CO₂'yi uzaklaştırmak için", "Sadece limanda gerekir",
   "Akü odasında açık ateş, kıvılcım veya sertifikasız ekipman olmaz."]);

Q("2E ETO", 2,
  ["The engineers' 'dead-man' alarm on a UMS ship is intended to:",
   "Test the fire detection system", "Call all engineers to the ECR", "Raise the alarm if the engineer on duty does not reset it within a set time", "Stop the main engine",
   "It protects the duty engineer working alone in the engine room."],
  ["UMS gemide mühendis 'dead-man' alarmının amacı nedir?",
   "Yangın algılama sistemini test etmek", "Tüm mühendisleri ECR'a çağırmak", "Nöbetçi mühendis belirli sürede sıfırlamazsa alarm vermek", "Ana makineyi durdurmak",
   "Makine dairesinde tek başına çalışan nöbetçi mühendisi korur."]);

Q("ETO 2E", 1,
  ["A persistent earth fault on a 440 V insulated system should be:",
   "Accepted if the ship is running normally", "Traced and cleared promptly — a second fault can cause a short circuit or blackout", "Reset every watch", "Reported at the next dry dock",
   "Inspectors look at the insulation monitor during the engine room round."],
  ["440 V yalıtılmış sistemde süregelen bir toprak kaçağı:",
   "Gemi normal çalışıyorsa kabul edilir", "Hemen bulunup giderilmelidir — ikinci bir kaçak kısa devre veya karartmaya yol açabilir", "Her vardiya sıfırlanır", "Bir sonraki havuzda bildirilir",
   "Denetçiler makine turunda izolasyon monitörüne bakar."]);

Q("2E ER", 3,
  ["Where should oily rags be kept in the engine room?",
   "On the tank top", "In an open bucket near the boiler", "In the workshop drawer", "In a closed metal container, emptied regularly",
   "Oily rags can self-heat and ignite; open storage is a common observation."],
  ["Makine dairesinde yağlı üstüpüler nerede tutulmalıdır?",
   "Tank üstünde", "Kazanın yanında açık kovada", "Atölye çekmecesinde", "Kapaklı metal kapta, düzenli boşaltılarak",
   "Yağlı üstüpü kendiliğinden ısınıp tutuşabilir; açıkta tutulması sık rastlanan gözlemdir."]);

Q("2E ER", 1,
  ["Before using a grinding machine you must check:",
   "Only the power cable", "The guard and tool rest are in place, the wheel is undamaged and eye protection is worn", "That the wheel spins fast", "That nobody is watching",
   "Missing guards and no eye protection are frequent workshop findings."],
  ["Taşlama makinesini kullanmadan önce neyi kontrol etmelisiniz?",
   "Sadece güç kablosunu", "Siper ve dayama parçasının yerinde, taşın hasarsız olduğunu ve göz koruması takıldığını", "Taşın hızlı döndüğünü", "Kimsenin izlemediğini",
   "Eksik siper ve göz koruması olmaması sık rastlanan atölye gözlemleridir."]);

Q("2E ER", 0,
  ["Oxygen and acetylene hoses for gas welding must be fitted with:",
   "Flashback arrestors at the regulators (and torch, if required)", "Quick-release couplings only", "No fittings", "Water traps",
   "Cylinders must also be stored upright and secured, separated from each other."],
  ["Gaz kaynağı için oksijen ve asetilen hortumlarında ne bulunmalıdır?",
   "Regülatörlerde (ve gerekirse torçta) geri tepme önleyici", "Sadece hızlı bağlantı", "Hiçbir donanım", "Su tutucu",
   "Tüpler ayrıca dik, sabitlenmiş ve birbirinden ayrı depolanmalıdır."]);

Q("DR ER", 2,
  ["When working aloft or overside you must:",
   "Work alone to save time", "Wear a harness but leave it unattached for mobility", "Have a permit, wear a harness attached to a strong point, with a standby person", "Only work at night",
   "A lifebuoy with line is also kept ready when working overside."],
  ["Yüksekte veya borda dışında çalışırken:",
   "Zaman kazanmak için tek çalışırsınız", "Kemer takarsınız ama hareket için bağlamazsınız", "İzin alır, sağlam bir noktaya bağlı emniyet kemeri takar, yedek kişiyle çalışırsınız", "Sadece gece çalışırsınız",
   "Borda dışı çalışırken halatlı can simidi de hazır tutulur."]);

Q("DR CO", 1,
  ["Before entering the cargo pump room you should:",
   "Enter quickly before gas builds up", "Confirm ventilation has run, check the gas readings and log the entry with communication to deck", "Switch off the ventilation to save power", "Enter only with a lifejacket",
   "Pump room entry procedures are a core SIRE topic for pumpmen and deck crew."],
  ["Kargo pompa dairesine girmeden önce:",
   "Gaz birikmeden hızlıca girersiniz", "Havalandırmanın çalıştığını teyit eder, gaz değerlerini kontrol eder ve güverteyle iletişim kurarak girişi kaydedersiniz", "Enerji tasarrufu için havalandırmayı kapatırsınız", "Sadece can yeleğiyle girersiniz",
   "Pompa dairesi giriş prosedürü pompacı ve güverte personeli için temel bir SIRE konusudur."]);

Q("DR", 3,
  ["During cargo operations, if you see oil leaking from the manifold, you:",
   "Finish your round first", "Try to tighten the flange alone", "Wait for the officer's next round", "Raise the alarm, get the operation stopped and start containment",
   "Fast stopping limits the spill; every watchman must know where the emergency stop is."],
  ["Yük operasyonu sırasında manifolddan yağ sızdığını görürseniz:",
   "Önce turunuzu tamamlarsınız", "Flanşı tek başınıza sıkmaya çalışırsınız", "Zabitin bir sonraki turunu beklersiniz", "Alarm verir, operasyonu durdurtur ve sınırlamaya başlarsınız",
   "Hızlı durdurma dökülmeyi sınırlar; her vardiyacı acil stopun yerini bilmelidir."]);

Q("2O 3O DR ER", 2,
  ["Food waste not comminuted may be discharged outside special areas when the ship is en route and more than:",
   "3 nm from land", "Any distance", "12 nm from land", "25 nm from land",
   "MARPOL Annex V: 12 nm; comminuted food waste (≤25 mm) may go at more than 3 nm."],
  ["Öğütülmemiş yemek atığı, özel alanlar dışında seyir halinde, karadan en az ne kadar uzakta atılabilir?",
   "3 mil", "Herhangi bir mesafede", "12 mil", "25 mil",
   "MARPOL Ek V: 12 mil; öğütülmüş (≤25 mm) yemek atığı 3 milden uzakta atılabilir."]);

Q("2O 3O CO", 1,
  ["The Garbage Record Book must be kept on board for at least:",
   "1 year", "2 years", "3 years", "5 years",
   "MARPOL Annex V Reg. 10: two years from the last entry."],
  ["Çöp Kayıt Defteri gemide en az ne kadar saklanmalıdır?",
   "1 yıl", "2 yıl", "3 yıl", "5 yıl",
   "MARPOL Ek V Kural 10: son kayıttan itibaren iki yıl."]);

Q("MS CE", 0,
  ["Before a change to equipment or a procedure is implemented on board, it should go through:",
   "Management of Change — risk assessment, approval and communication", "A verbal agreement between Master and C/E", "The next internal audit", "No process if it improves safety",
   "Unapproved modifications are a typical Process observation."],
  ["Gemide ekipman veya prosedür değişikliği uygulanmadan önce hangi süreçten geçmelidir?",
   "Değişiklik Yönetimi — risk değerlendirmesi, onay ve duyuru", "Kaptan ile başmühendis arasında sözlü anlaşma", "Bir sonraki iç denetim", "Emniyeti artırıyorsa hiçbir süreç gerekmez",
   "Onaysız değişiklikler tipik bir Süreç gözlemidir."]);

Q("MS CE CO", 2,
  ["Overdue critical maintenance should be:",
   "Ignored until the next port", "Closed in the PMS as done", "Risk-assessed and postponed only with office approval, with mitigations", "Reported only to class",
   "Inspectors check the PMS overdue list against the critical equipment list."],
  ["Geciken kritik bakım:",
   "Bir sonraki limana kadar göz ardı edilir", "PMS'te yapılmış gibi kapatılır", "Risk değerlendirmesi yapılıp yalnızca ofis onayıyla, önlemlerle ertelenir", "Sadece klasa bildirilir",
   "Denetçiler PMS gecikme listesini kritik ekipman listesiyle karşılaştırır."]);

Q("MS", 1,
  ["Who should normally escort the SIRE 2.0 inspector during the inspection?",
   "Any available rating", "A competent officer who knows the ship, without answering on behalf of the crew being interviewed", "The agent", "Nobody — the inspector walks alone",
   "The escort facilitates; each crew member answers for their own work."],
  ["SIRE 2.0 denetçisine denetim sırasında normalde kim eşlik etmelidir?",
   "Müsait herhangi bir tayfa", "Gemiyi bilen yetkin bir zabit — mülakat yapılan personel adına cevap vermeden", "Acente", "Kimse — denetçi tek gezer",
   "Refakatçi kolaylaştırır; her personel kendi işi için kendisi cevap verir."]);

/* ── Torlak SQEMS — company procedures ───────────────────────────────── */
QC("B2 §2.2.3.1", "ALL", 1,
  ["Company limits for H₂S and CO before enclosed space entry:",
   "H₂S < 10 ppm, CO < 50 ppm", "H₂S < 5 ppm, CO < 25 ppm", "H₂S < 1 ppm, CO < 5 ppm", "No specific limit, only 50% OEL",
   "B2 also sets CO₂ below 0.5% (5000 ppm). If any value deviates, the permit is void and the space is evacuated."],
  ["Kapalı alana girişte şirketin H₂S ve CO limitleri:",
   "H₂S < 10 ppm, CO < 50 ppm", "H₂S < 5 ppm, CO < 25 ppm", "H₂S < 1 ppm, CO < 5 ppm", "Özel limit yok, yalnızca %50 OEL",
   "B2 ayrıca CO₂'yi %0,5'in (5000 ppm) altında tutar. Herhangi bir değer saparsa izin geçersiz olur ve mahal boşaltılır."]);
QC("B2 §2.2.3.1", "CO 2O 3O DR 2E ER", 3,
  ["Before testing an enclosed space atmosphere, ventilation should be stopped for at least:",
   "1 minute", "2 minutes", "5 minutes", "10 minutes",
   "Longer may be needed depending on the space. Samples are taken at top, middle and bottom."],
  ["Kapalı alan atmosferi ölçülmeden önce havalandırma en az ne kadar durdurulmalı?",
   "1 dakika", "2 dakika", "5 dakika", "10 dakika",
   "Mahale göre daha uzun süre gerekebilir. Numune üst, orta ve alttan alınır."]);
QC("B2 §2.2.3.1", "ALL", 0,
  ["Under company procedure, who must never enter the enclosed space during the entry?",
   "The Responsible Person (the officer who authorises entry)", "The Competent Person", "The person doing the work", "The rescue team leader",
   "The Responsible Person must not enter; the Attendant stays at the entrance with no other duty."],
  ["Şirket prosedürüne göre giriş sırasında kapalı alana asla girmemesi gereken kişi kimdir?",
   "Sorumlu Kişi (girişe izin veren zabit)", "Yetkin Kişi", "İşi yapan kişi", "Kurtarma ekibi lideri",
   "Sorumlu Kişi içeri girmez; Bekçi başka görevi olmadan girişte kalır."]);
QC("B2 §2.2.3.1", "OFF DR ER", 2,
  ["The company enclosed space entry permit is:",
   "Form 3601", "Form 3612", "Form 3602-A (3602-B for multiple cargo tanks)", "Form 3703",
   "3601 is the gas-free certificate for hot work, 3612 the pump-room entry permit, 3703 the weekly LSA inspection."],
  ["Şirketin kapalı alan giriş izni hangisidir?",
   "Form 3601", "Form 3612", "Form 3602-A (çoklu yük tankı için 3602-B)", "Form 3703",
   "3601 sıcak çalışma için gazdan arındırma sertifikası, 3612 pompa dairesi giriş izni, 3703 haftalık LSA muayenesidir."]);
QC("B2 §2.2.3.2", "MS CO CE 2E ER", 1,
  ["A hot work permit and the gas-free certificate (Form 3601) are valid for a maximum of:",
   "4 hours", "8 hours (one working day)", "24 hours", "Until the job is finished",
   "Work on two days needs two permits. Outside the E/R workshop, hot work also needs Company approval."],
  ["Sıcak çalışma izni ve gazdan arındırma sertifikası (Form 3601) en fazla ne kadar geçerlidir?",
   "4 saat", "8 saat (bir iş günü)", "24 saat", "İş bitene kadar",
   "İki günlük iş için iki izin gerekir. Makine atölyesi dışında sıcak çalışma ayrıca Şirket onayı ister."]);
QC("B2 §2.2.3.10", "CE 2E ETO ER", 0,
  ["Who authorises and releases a lock-out/tag-out permit?",
   "The Chief Engineer, unless delegated to the Second Engineer", "Any engineer on watch", "The Master only", "The ETO",
   "Only the officer who signed a tag may remove it."],
  ["Kilitleme/etiketleme (LOTO) iznini kim verir ve kapatır?",
   "İkinci Mühendise devretmedikçe Başmühendis", "Vardiyadaki herhangi bir mühendis", "Yalnızca Kaptan", "ETO",
   "Bir etiketi yalnızca onu imzalayan zabit kaldırabilir."]);
QC("B2 §2.2.1.2", "ALL", 1,
  ["A safety harness attached to a lifeline is required wherever there is a risk of falling more than:",
   "1 metre", "2 metres", "3 metres", "5 metres",
   "Overside work also needs a life jacket and a lifebuoy with line ready on deck."],
  ["Hangi yükseklikten fazla düşme riski olan yerde can halatına bağlı emniyet kemeri zorunludur?",
   "1 metre", "2 metre", "3 metre", "5 metre",
   "Borda dışı çalışmada ayrıca can yeleği ve güvertede halatlı can simidi hazır olmalıdır."]);
QC("B2 §2.2.4", "CO 2O 3O DR", 2,
  ["Portable gas detectors must be bump-tested:",
   "Monthly", "Weekly", "Before each day's use, with known calibration gas", "Only after a shore calibration",
   "Bump test records are kept with the entry permit."],
  ["Portatif gaz dedektörlerine bump testi ne zaman yapılır?",
   "Ayda bir", "Haftada bir", "Her günlük kullanımdan önce, bilinen kalibrasyon gazıyla", "Sadece kara kalibrasyonundan sonra",
   "Bump test kayıtları giriş izniyle birlikte saklanır."]);
QC("B1 §9.5.1", "ALL", 3,
  ["The locked near-miss reporting boxes are opened:",
   "Daily by the OOW", "Monthly at the safety meeting", "Only during audits", "At the end of each week by the Master",
   "The Master enters every report into Fleet Manager."],
  ["Kilitli ramak kala kutuları ne zaman açılır?",
   "Her gün vardiya zabitince", "Her ay emniyet toplantısında", "Sadece denetimlerde", "Her hafta sonunda Kaptan tarafından",
   "Kaptan her raporu Fleet Manager'a girer."]);
QC("B1 §9.13", "ALL", 1,
  ["A Stop Work intervention is recorded as:",
   "A non-conformity", "A near miss", "An accident", "It is not recorded",
   "Nobody who uses Stop Work in good faith faces retribution; good examples are recognised at safety meetings."],
  ["İşi Durdurma müdahalesi nasıl kaydedilir?",
   "Uygunsuzluk olarak", "Ramak kala olarak", "Kaza olarak", "Kaydedilmez",
   "İyi niyetle İşi Durduran kimseye yaptırım uygulanmaz; iyi örnekler emniyet toplantısında takdir edilir."]);
QC("B1 §9.8", "MS CO DR", 2,
  ["Every accessible part of the ship must be safety-inspected (ISM Form 0805) at least:",
   "Monthly", "Every two months", "Every three months", "Every six months",
   "Form 0805 has seven chapters completed in rotation by the Ship Safety Officer (C/O)."],
  ["Geminin her erişilebilir bölümü (ISM Form 0805) en az ne sıklıkla emniyet denetiminden geçmelidir?",
   "Ayda bir", "İki ayda bir", "Üç ayda bir", "Altı ayda bir",
   "Form 0805'in yedi bölümü Gemi Emniyet Zabiti (Birinci Zabit) tarafından dönüşümlü doldurulur."]);
QC("B1 §5.4", "MS", 1,
  ["The Master's Management Review is carried out:",
   "Once a year", "At the end of each four-month period or before signing off", "Only after an audit", "Every month",
   "Senior officers are invited to take part; internal audit results can be used."],
  ["Kaptanın Yönetim Gözden Geçirmesi ne zaman yapılır?",
   "Yılda bir", "Her dört aylık dönemin sonunda veya gemiden ayrılmadan önce", "Sadece denetimden sonra", "Her ay",
   "Kıdemli zabitler katılmaya davet edilir; iç denetim sonuçları kullanılabilir."]);
QC("B1 §5.5.1", "MS", 2,
  ["The Master informs the Company of a certificate renewal:",
   "On the expiry date", "One week before", "Eight weeks before the renewal date", "Six months before",
   "The vessel must always hold valid certificates for the intended voyage."],
  ["Kaptan bir sertifika yenilemesini Şirkete ne zaman bildirir?",
   "Bitiş gününde", "Bir hafta önce", "Yenileme tarihinden sekiz hafta önce", "Altı ay önce",
   "Gemi planlanan sefer için her zaman geçerli sertifikalara sahip olmalıdır."]);
QC("B3 §4.4.16", "MS 2O 3O", 2,
  ["Company minimum UKC on ocean passages and open seas:",
   "10% of maximum static draft", "0.6 m", "50% of maximum static draft", "1.5% of breadth",
   "At all other times at sea the minimum is 10% (reducible to 0.6 m only with risk assessment and Company approval)."],
  ["Okyanus ve açık deniz seyrinde şirket asgari UKC'si:",
   "Azami statik draftın %10'u", "0,6 m", "Azami statik draftın %50'si", "Genişliğin %1,5'i",
   "Denizde diğer tüm durumlarda asgari %10'dur (yalnızca risk değerlendirmesi ve Şirket onayıyla 0,6 m'ye düşürülebilir)."]);
QC("B3 §4.4.16", "MS 2O 3O CO", 0,
  ["At sea other than ocean passages (incl. at anchor, SPM, open-sea terminals) the company minimum UKC is:",
   "10% of maximum static draft — never below 0.6 m even with approval", "5% of draft", "0.3 m", "20% of draft",
   "Moored: beam < 20 m keeps 0.3 m at low tide; beam ≥ 20 m keeps 1.5% of extreme breadth."],
  ["Okyanus dışında denizde (demir, SPM, açık deniz terminali dahil) şirket asgari UKC'si:",
   "Azami statik draftın %10'u — onayla bile asla 0,6 m'nin altında değil", "Draftın %5'i", "0,3 m", "Draftın %20'si",
   "Bağlıyken: genişliği < 20 m olan gemi alçak suda 0,3 m, ≥ 20 m olan azami genişliğin %1,5'ini korur."]);
QC("B3 §5.3", "MS 2O 3O", 1,
  ["When the required safety contour is not in the ENC, the company method (OCIMF Method 2) is to:",
   "Lower the safety contour to the next shallower contour", "Keep the default deeper contour and draw a manual alarmable no-go line at the required depth", "Switch off the anti-grounding alarm", "Use paper charts instead",
   "The Master cross-checks the manual no-go line in addition to normal passage plan checks."],
  ["Gerekli emniyet konturu ENC'de yoksa şirket yöntemi (OCIMF Yöntem 2):",
   "Konturu bir sonraki daha sığ kontura düşürmek", "Varsayılan derin konturu bırakıp gerekli derinlikte elle alarmlı no-go çizgisi çizmek", "Karaya oturma alarmını kapatmak", "Bunun yerine kâğıt harita kullanmak",
   "Kaptan elle çizilen no-go çizgisini normal plan kontrollerine ek olarak kontrol eder."]);
QC("B3 §4.4.20", "MS 2O 3O CO", 3,
  ["When circumstances permit, company minimum CPA / TCPA settings are:",
   "0.5 nm / 6 min", "2 nm / 20 min", "1 nm / 6 min", "1.0 nm / 15 min",
   "Otherwise never less than the turning-circle diameter and the time to turn to a contrary heading."],
  ["Koşullar elverdiğinde şirket asgari CPA / TCPA ayarları:",
   "0,5 mil / 6 dk", "2 mil / 20 dk", "1 mil / 6 dk", "1,0 mil / 15 dk",
   "Aksi halde asla dönüş dairesi çapından ve ters rotaya dönme süresinden az değil."]);
QC("B3 §2.22.2", "2O 3O DR", 0,
  ["Manual steering and compass errors are checked:",
   "At least once per watch", "Once a day", "Before arrival only", "Weekly",
   "Repeater synchronisation, including at the emergency steering position, is also checked regularly."],
  ["Elle dümen ve pusula hataları ne sıklıkla kontrol edilir?",
   "Her vardiyada en az bir kez", "Günde bir", "Sadece varıştan önce", "Haftada bir",
   "Acil dümen mevkii dahil repetitör senkronizasyonu da düzenli kontrol edilir."]);
QC("B3 §2.5", "MS 2O 3O", 2,
  ["Under company procedure the BNWAS is in operation:",
   "Only when on autopilot", "Only at night", "Whenever at sea — including at anchor, drifting and during STS", "Only in open sea",
   "It is set as per the SMS and the Master's Standing Orders."],
  ["Şirket prosedürüne göre BNWAS ne zaman çalışır?",
   "Sadece otomatik pilotta", "Sadece gece", "Denizde her zaman — demir, drift ve STS dahil", "Sadece açık denizde",
   "SMS ve Kaptanın Daimi Emirlerine göre ayarlanır."]);
QC("B3 §2.19.5", "2O 3O", 3,
  ["GMDSS radio logs are kept on board for:",
   "1 year", "2 years", "3 years", "5 years",
   "The log records all radio events, including the ship's position at least daily."],
  ["GMDSS telsiz jurnalleri gemide ne kadar saklanır?",
   "1 yıl", "2 yıl", "3 yıl", "5 yıl",
   "Jurnal, en az günlük gemi mevkii dahil tüm telsiz olaylarını kaydeder."]);
QC("B2 §2.4.2.1", "ALL", 1,
  ["In US waters (OPA 90) tanker crew may work no more than:",
   "12 h in 24 h and 48 h in 72 h", "15 h in 24 h and 36 h in 72 h", "14 h in 24 h and 72 h in 7 days", "10 h in 24 h",
   "Elsewhere the ILO MLC rest-hour rules apply."],
  ["ABD sularında (OPA 90) tanker personeli en fazla ne kadar çalışabilir?",
   "24 saatte 12, 72 saatte 48 saat", "24 saatte 15, 72 saatte 36 saat", "24 saatte 14, 7 günde 72 saat", "24 saatte 10 saat",
   "Diğer yerlerde ILO MLC dinlenme kuralları uygulanır."]);
QC("B4 §9.3.9", "CO 2O 3O DR ETO", 1,
  ["Company high-level and overfill alarm settings are:",
   "90% / 95%, on one circuit", "95% / 98%, electrically independent", "98% / 100%", "85% / 95%",
   "Sensors are tested on deck for each cargo and slop tank before each cargo operation or monthly."],
  ["Şirketin yüksek seviye ve taşma alarm ayarları:",
   "%90 / %95, tek devrede", "%95 / %98, elektriksel olarak bağımsız", "%98 / %100", "%85 / %95",
   "Sensörler her yük ve slop tankı için her yük operasyonundan önce veya ayda bir güvertede test edilir."]);
QC("B4 §9.3.21", "CO 2O 3O DR", 2,
  ["Cargo pump emergency stops are tested:",
   "Monthly", "At dry dock", "Just before every discharge or whenever a cargo pump will be used (Form 3501)", "Only after a failure",
   "The Chief Officer is responsible for the test and the record."],
  ["Yük pompası acil stopları ne zaman test edilir?",
   "Ayda bir", "Havuzda", "Her tahliyeden hemen önce veya bir yük pompası kullanılacağı her seferde (Form 3501)", "Sadece arızadan sonra",
   "Test ve kayıttan Birinci Zabit sorumludur."]);
QC("B4 §9.3.12", "CO 2O", 0,
  ["P/V valves are checked with the check-lift:",
   "Before every load or discharge; inspected monthly and overhauled at least every 12 months", "Only at dry dock", "Every five years", "Only when a pressure alarm sounds",
   "The annual check is done on the P/V test kit carried on board."],
  ["P/V valfleri kaldırma koluyla ne zaman kontrol edilir?",
   "Her yükleme/tahliyeden önce; her ay muayene, en az 12 ayda bir revizyon", "Sadece havuzda", "Beş yılda bir", "Sadece basınç alarmında",
   "Yıllık kontrol gemideki P/V test kitiyle yapılır."]);
QC("B4 §8.2.4", "CO 2O 3O 2E", 3,
  ["Inerted cargo tanks are kept at a pressure of at least:",
   "50 mm wg", "100 mm wg", "Atmospheric", "200 mm wg, monitored hourly during cargo operations (Form 3105)",
   "Topping up is done with gas of no more than 5% O₂."],
  ["İnert yük tankları en az hangi basınçta tutulur?",
   "50 mm wg", "100 mm wg", "Atmosferik", "200 mm wg; yük operasyonunda saatlik izlenir (Form 3105)",
   "İlave en fazla %5 O₂ içeren gazla yapılır."]);
QC("B4 §5.3.1", "CO 2O 3O DR", 1,
  ["Open sampling of cargo on company vessels is:",
   "Allowed for non-toxic cargoes", "Not permitted, unless explicitly approved by Head Office with a risk assessment", "Allowed if the terminal agrees", "Allowed 30 minutes after loading",
   "Closed sampling equipment is used; tank integrity is never breached for sampling. Even if approved, the tank dome is not opened."],
  ["Şirket gemilerinde açık numune alma:",
   "Toksik olmayan yüklerde serbest", "Yasak; yalnızca Merkez Ofisin risk değerlendirmesiyle açık onayı ile", "Terminal kabul ederse serbest", "Yüklemeden 30 dk sonra serbest",
   "Kapalı numune ekipmanı kullanılır; numune için tank bütünlüğü asla bozulmaz. Onay verilse bile tank domu açılmaz."]);
QC("B4 §5.3.3.6", "CO DR", 2,
  ["Non-self-reactive cargo samples are kept after discharge for:",
   "One voyage", "One month", "Three months", "One year",
   "Samples are stored in the cargo-deck sample locker with Form 3210, never in the accommodation."],
  ["Kendiliğinden reaksiyona girmeyen yük numuneleri tahliyeden sonra ne kadar saklanır?",
   "Bir sefer", "Bir ay", "Üç ay", "Bir yıl",
   "Numuneler Form 3210 ile yük güvertesindeki numune dolabında tutulur, asla yaşam mahallinde değil."]);
QC("B4 §4.3.4", "MS CO", 0,
  ["The Chief Officer checks the ODME:",
   "At least monthly and 24 hours before use (Form 3209)", "Only at the annual survey", "Weekly", "Before each port",
   "Failures go in the ORB and to the Company on Form 4701."],
  ["Birinci Zabit ODME'yi ne zaman kontrol eder?",
   "En az ayda bir ve kullanımdan 24 saat önce (Form 3209)", "Sadece yıllık sörveyde", "Haftada bir", "Her limandan önce",
   "Arızalar ORB'ye işlenir ve Form 4701 ile Şirkete bildirilir."]);
QC("B2 §4.1.4.4", "CE 2E ER", 1,
  ["The OWS and oil content meter are tested outside port:",
   "Monthly", "Weekly, without dilution, with C/E and EOOW present", "Only at survey", "Daily",
   "In port the overboard valve stays closed and the OWS discharges back into the engine room."],
  ["OWS ve yağ içerik ölçer liman dışında ne zaman test edilir?",
   "Ayda bir", "Her hafta, seyreltmeden, Başmühendis ve nöbetçi mühendis huzurunda", "Sadece sörveyde", "Her gün",
   "Limanda borda valfi kapalı kalır ve OWS makine dairesine basar."]);
QC("B4 §9.3.18", "CO DR", 2,
  ["Ship's cargo hoses are pressure tested:",
   "Every five years to working pressure", "Only when new", "When supplied and annually, hydrostatically to 1.5 × working pressure (Form 3401)", "Before each use",
   "Each hose is numbered and stamped with its MWP and test date; it is also checked visually before each use."],
  ["Gemi yük hortumları ne zaman basınç testine tabi tutulur?",
   "Beş yılda bir çalışma basıncında", "Sadece yeniyken", "Teslimde ve yılda bir, çalışma basıncının 1,5 katında hidrostatik (Form 3401)", "Her kullanımdan önce",
   "Her hortum numaralı, MWP ve test tarihi damgalıdır; her kullanımdan önce gözle de kontrol edilir."]);
QC("B2 §2.6.1", "3O 2E DR", 1,
  ["Weekly inspection of lifeboats, rescue boat and liferafts is recorded on:",
   "Form 3602", "Form 3703", "Form 0805", "Form 3401",
   "Monthly: Forms 3704/3705 (lifeboats), 3706 (rescue boat), 3707 (liferafts)."],
  ["Filika, kurtarma botu ve salların haftalık muayenesi hangi forma kaydedilir?",
   "Form 3602", "Form 3703", "Form 0805", "Form 3401",
   "Aylık: Form 3704/3705 (filikalar), 3706 (kurtarma botu), 3707 (sallar)."]);
QC("B2 §2.6.3", "MS 3O DR", 2,
  ["A freefall lifeboat is launched by gravity with its crew at least every:",
   "Month", "Three months", "Six months", "Five years",
   "If not possible, the Company may ask the flag for an extension of up to 12 months."],
  ["Serbest düşüşlü filika ekibiyle en az ne sıklıkla yerçekimiyle indirilir?",
   "Ayda bir", "Üç ayda bir", "Altı ayda bir", "Beş yılda bir",
   "Yapılamazsa Şirket bayraktan 12 aya kadar uzatma isteyebilir."]);
QC("B2 §2.5.3", "3O ETO CE 2E", 3,
  ["Fire detection: the system is tested weekly and every detector is tested at least once within:",
   "7 days", "30 days", "1 year", "90 days",
   "An isolated zone gets a notice on the panel and the Master, C/E and duty deck officer are informed."],
  ["Yangın algılama: sistem haftalık test edilir; her dedektör en az ne kadar sürede bir test edilir?",
   "7 gün", "30 gün", "1 yıl", "90 gün",
   "Devre dışı bölge için panoya uyarı asılır; Kaptan, Başmühendis ve nöbetçi güverte zabiti bilgilendirilir."]);
QC("B4 §3.5", "CO 2O 3O DR", 0,
  ["A liquid is a static accumulator if its conductivity is below:",
   "50 pS/m — metal sampling/ullaging is prohibited during loading and for 30 min after", "500 pS/m", "10 000 pS/m", "1 pS/m",
   "Examples: kerosene, cumene, octane, styrene, xylene."],
  ["Bir sıvının statik biriktirici sayıldığı iletkenlik sınırı:",
   "50 pS/m — yükleme sırasında ve sonrasında 30 dk metal numune/ulaj yasak", "500 pS/m", "10 000 pS/m", "1 pS/m",
   "Örnekler: kerosen, kümen, oktan, stiren, ksilen."]);
QC("Rating Pocket Agenda · B1 §3.1.7", "ALL", 1,
  ["In Torlak Shipping, the DPA (Designated Person Ashore) is:",
   "The Technical Superintendent", "The HSSEQ Manager", "The Fleet Manager", "The Crewing Manager",
   "The DPA is the direct link between the ship and top management for safety and pollution prevention."],
  ["Torlak Shipping'de DPA (Karadaki Belirlenmiş Kişi) kimdir?",
   "Teknik Enspektör", "HSSEQ Müdürü", "Filo Müdürü", "Personel Müdürü",
   "DPA, emniyet ve kirlilik önleme konularında gemi ile üst yönetim arasındaki doğrudan bağlantıdır."]);
QC("MSMP §5.2.2.3", "CO 2O 3O DR CE 2E", 2,
  ["The mooring winch brake test is recorded on, and the brake set to render at about:",
   "Form 3703 · 40% of line MBL", "Form 3602 · 100% of line MBL", "Form 15.15 'Brake Holding Capacity Test' · 60% of line MBL", "No form · 80% of line MBL",
   "The test date and rendering point are stencilled on the winch; results are kept in the ship's files."],
  ["Irgat freni testi hangi forma kaydedilir ve fren yaklaşık ne değerde kaymaya ayarlanır?",
   "Form 3703 · halat MBL'sinin %40'ı", "Form 3602 · halat MBL'sinin %100'ü", "Form 15.15 'Fren Tutma Kapasitesi Testi' · halat MBL'sinin %60'ı", "Form yok · halat MBL'sinin %80'i",
   "Test tarihi ve kayma noktası ırgatın üzerine yazılır; sonuçlar gemi dosyasında saklanır."]);
QC("MSMP §5.1 · §5.2.5", "CO 2O 3O DR", 1,
  ["Under the ship's MSMP, routine inspection of mooring lines is due, and lines are turned end-for-end:",
   "Every voyage · yearly", "Every 400 mooring hours or 3 months · about every six months", "Every 6,000 hours · every five years", "Only at dry dock · never",
   "Detailed inspection: 6,000 mooring hours or special survey (about five years), whichever first."],
  ["Gemi MSMP'sine göre halatların rutin muayenesi ne zaman yapılır ve halatlar ne sıklıkla uç değiştirilir?",
   "Her sefer · yılda bir", "Her 400 palamar saati veya 3 ay · yaklaşık altı ayda bir", "Her 6.000 saat · beş yılda bir", "Sadece havuzda · hiç",
   "Detaylı muayene: 6.000 palamar saati veya özel sörvey (yaklaşık beş yıl), hangisi önce gelirse."]);

/* ── Company · full manual set (B1–B7), added 2026-10-05 ──────────────── */

/* Engine — B5 */
QC("B5 §4.4", "CE 2E ETO ER", 2,
  ["Under company procedure, the on-load test of the emergency generator is done:",
   "Weekly, for 5 minutes", "Only at dry dock", "Every 3 months where possible, for at least 15 minutes", "Yearly, for 1 hour",
   "Start by simulation weekly; monthly if a harbour mode allows connection to the main switchboard, at least yearly if a blackout is needed. Record on Form 4503 Q-17 and in the engine log."],
  ["Şirket prosedürüne göre acil jeneratörün yüklü testi:",
   "Haftada bir, 5 dakika", "Sadece havuzda", "Mümkünse 3 ayda bir, en az 15 dakika", "Yılda bir, 1 saat",
   "Haftalık simülasyonla çalıştırma; liman modu ana panoya bağlanmaya izin veriyorsa aylık, karartma gerekiyorsa en az yılda bir. Form 4503 Q-17'ye ve makine jurnaline kaydedilir."]);
QC("B5 §4.4", "CE 2E ETO", 0,
  ["The emergency generator fuel stock must allow full-load running for at least:",
   "18 hours", "3 hours", "36 hours", "6 hours",
   "SOLAS II-1/43.2; the minimum quantity giving 18 hours should be established on board."],
  ["Acil jeneratör yakıt stoku en az ne kadar tam yükte çalışmaya yetmelidir?",
   "18 saat", "3 saat", "36 saat", "6 saat",
   "SOLAS II-1/43.2; 18 saati sağlayan asgari miktar gemide belirlenmiş olmalıdır."]);
QC("B5 §1.2.1", "CE 2E ETO ER", 1,
  ["On a UMS ship, the company requires the machinery space to be manned:",
   "Only during manoeuvring", "At least 8 hours in every 24, and never unmanned for more than 12 hours in a row", "At least 12 hours in every 24", "Only when an alarm sounds",
   "The ECR is also fully manned for port entry/departure, pilotage, TSS, STS, mooring and when any alarm, safety or control system is inoperative."],
  ["UMS gemide şirket makine dairesinin ne kadar insanlı olmasını ister?",
   "Sadece manevrada", "Her 24 saatte en az 8 saat; aralıksız 12 saatten fazla insansız bırakılmaz", "Her 24 saatte en az 12 saat", "Sadece alarm çaldığında",
   "Limana giriş/çıkış, kılavuzluk, TSS, STS, palamar ve herhangi bir alarm, emniyet veya kontrol sistemi arızalıyken ECR tam insanlıdır."]);
QC("B5 §1.2.1.2", "CE 2E ETO ER MS CO 2O 3O", 3,
  ["The duty engineer entering the engine room alone during UMS must confirm his safety to the bridge every:",
   "Hour", "30 minutes", "5 minutes", "15 minutes",
   "If no confirmation comes, the bridge calls him, then the Chief Engineer or another engineer, and informs the Master. Without a dead man alarm the OOW logs entries on Form 4506 WN-5."],
  ["UMS sırasında makine dairesine yalnız giren nöbetçi mühendis emniyetini köprüüstüne ne sıklıkla teyit eder?",
   "Her saat", "30 dakikada bir", "5 dakikada bir", "15 dakikada bir",
   "Teyit gelmezse köprüüstü önce onu, sonra Başmühendisi veya başka bir mühendisi arar ve Kaptanı bilgilendirir. Dead man alarmı yoksa vardiya zabiti girişleri Form 4506 WN-5'e kaydeder."]);
QC("B5 §15.2.1", "CE 2E ETO ER", 1,
  ["On a UMS ship, the engineers' alarm must sound if a machinery alarm is not acknowledged within:",
   "15 minutes", "Not more than 5 minutes", "30 seconds", "1 hour",
   "On hearing the engineers' alarm, engine room personnel assemble in the ECR as per the muster list. Checks are recorded on Form 4503 Q-13."],
  ["UMS gemide bir makine alarmı ne kadar sürede kabul edilmezse mühendis alarmı çalmalıdır?",
   "15 dakika", "En fazla 5 dakika", "30 saniye", "1 saat",
   "Mühendis alarmı duyulunca makine personeli talim çizelgesine göre ECR'da toplanır. Kontroller Form 4503 Q-13'e kaydedilir."]);
QC("B5 §4.2", "ETO 2E CE", 2,
  ["Company procedure for switchboard insulation monitors:",
   "Tested yearly by class only", "No test; read once a voyage", "Tested weekly with the test button; aim for not less than 5 MΩ on a 440 V system", "Tested monthly; 0.5 MΩ is acceptable",
   "Class minimum is 1 MΩ; 2 MΩ is acceptable on 220 V. Earth fault checks go on Form 4503 Q19; a faulty monitor is reported to the Company."],
  ["Pano izolasyon monitörleri için şirket prosedürü:",
   "Sadece klas tarafından yılda bir test edilir", "Test yok; seferde bir okunur", "Her hafta test butonuyla denenir; 440 V sistemde en az 5 MΩ hedeflenir", "Ayda bir test edilir; 0,5 MΩ kabul edilir",
   "Klas asgarisi 1 MΩ; 220 V'ta 2 MΩ kabul edilir. Toprak kaçağı kontrolleri Form 4503 Q19'a yazılır; arızalı monitör şirkete bildirilir."]);
QC("B2 §2.2.3.6.2", "ETO 2E ER", 0,
  ["Insulating mats around the main and emergency switchboards must be tested to:",
   "15 000 V AC", "440 V AC", "1 000 V DC", "No test is required",
   "Mats are kept around both switchboards during normal operation and maintenance."],
  ["Ana ve acil pano çevresindeki yalıtım paspasları hangi değerde test edilmiş olmalıdır?",
   "15.000 V AC", "440 V AC", "1.000 V DC", "Test gerekmez",
   "Paspaslar normal çalışma ve bakım sırasında her iki panonun çevresinde bulunur."]);
QC("B5 §3.5", "CE 2E ETO ER", 3,
  ["An oil mist detector alarm that looks false must be treated as:",
   "A sensor fault — reset and continue", "A reason to reduce speed only", "Information for the next PMS job", "An emergency — stop the engine; report a proven false alarm to the office",
   "Crankcase doors are not opened until the engine has cooled. The crankcase is examined monthly and the detector tested via PMS."],
  ["Yanlış gibi görünen bir yağ buharı dedektörü alarmı nasıl ele alınır?",
   "Sensör arızası — sıfırla ve devam et", "Sadece yol düşürme nedeni", "Bir sonraki PMS işi için bilgi", "Acil durum — makine durdurulur; yanlış olduğu kanıtlanırsa ofise bildirilir",
   "Makine soğumadan karter kapakları açılmaz. Karter aylık muayene edilir, dedektör PMS ile test edilir."]);
QC("B5 §16.1", "CE 2E", 1,
  ["When a lube oil analysis shows a problem and corrective action is taken, a new sample is sent after:",
   "The next quarterly sampling", "3 days or 50 running hours, whichever comes first", "1 month", "1 000 running hours",
   "Sampling points and intervals are on Form 5505; the superintendent reviews every result."],
  ["Yağ analizinde sorun çıkıp düzeltici işlem yapıldıktan sonra yeni numune ne zaman gönderilir?",
   "Bir sonraki üç aylık numunede", "3 gün veya 50 çalışma saati, hangisi önce gelirse", "1 ay sonra", "1.000 çalışma saati sonra",
   "Numune noktaları ve aralıkları Form 5505'tedir; enspektör her sonucu inceler."]);
QC("B5 §17.2.1", "CE 2E ER MS", 2,
  ["Bunker tanks are normally filled to at most, and must never exceed:",
   "95% · 98%", "90% · 95%", "85% · 90%", "80% · 85%",
   "The bunkering plan shows the safe maximum, overfill alarm, reduced-rate and final levels for each tank."],
  ["Bunker tankları normalde en fazla yüzde kaça doldurulur ve hangi değer asla aşılmaz?",
   "%95 · %98", "%90 · %95", "%85 · %90", "%80 · %85",
   "Bunker planı her tank için emniyetli azami, taşma alarmı, hız düşürme ve son seviyeleri gösterir."]);
QC("B5 §17.4.11.2", "CE 2E ER", 0,
  ["How many bunker samples are taken per grade, and how are they shared?",
   "Four (one MARPOL) — three stay on board, one goes to the supplier", "One MARPOL sample only", "Two — one each", "Six — three each",
   "Taken from the ship's manifold drip sampler, sealed, labelled and signed; seal numbers written on the BDN. One on-board sample goes to FOBAS/Viswa if instructed."],
  ["Her yakıt kalitesi için kaç bunker numunesi alınır ve nasıl paylaşılır?",
   "Dört (biri MARPOL) — üçü gemide kalır, biri tedarikçiye", "Sadece bir MARPOL numunesi", "İki — birer tane", "Altı — üçer tane",
   "Geminin manifold damla numune alıcısından alınır, mühürlenir, etiketlenir ve imzalanır; mühür numaraları BDN'ye yazılır. Gemideki biri talimat gelirse FOBAS/Viswa'ya gönderilir."]);
QC("B5 §17.4.5 · §17.4.1", "CE 2E", 3,
  ["The bunkering checklist (Form 4506 WN-1) and the bunkering plan are kept on board for at least:",
   "Until the next bunkering", "6 months", "12 months", "3 years",
   "The plan is kept with the BDN in the MARPOL Annex VI file; initial soundings are entered in the ORB."],
  ["Bunker kontrol listesi (Form 4506 WN-1) ve bunker planı gemide en az ne kadar saklanır?",
   "Bir sonraki bunkere kadar", "6 ay", "12 ay", "3 yıl",
   "Plan BDN ile birlikte MARPOL Ek VI dosyasında tutulur; ilk iskandiller ORB'ye yazılır."]);
QC("B5 §17.6.1.2", "CE 2E", 1,
  ["During fuel changeover for an ECA, the company requires:",
   "Full load and one generator", "Low load with at least two generators in parallel; valves sealed after changeover", "Changeover only after entering the ECA", "No log entry if done at sea",
   "Start/finish times, positions, fuels, sulphur content and tank quantities are recorded in the engine log; the Master picks a safe place before the ECA boundary."],
  ["ECA için yakıt geçişinde şirket ne ister?",
   "Tam yük ve tek jeneratör", "Düşük yük ve en az iki jeneratör paralel; geçişten sonra valfler mühürlenir", "Geçiş ECA'ya girdikten sonra", "Denizde yapılırsa jurnal kaydı gerekmez",
   "Başlama/bitiş saati, mevki, yakıt, kükürt oranı ve tank miktarları makine jurnaline yazılır; Kaptan ECA sınırından önce emniyetli yer seçer."]);
QC("B5 §9.3.1", "CE 2E ER", 2,
  ["The engine room emergency bilge suction valve is kept:",
   "Padlocked closed", "Open at all times", "Closed with a numbered plastic seal recorded in the engine log, marked 'do not open without C/E permission'", "Blanked off with a flange",
   "It must be ready for immediate use; it is tested on Form 4503 3M-16 and resealed."],
  ["Makine dairesi acil sintine emiş valfi nasıl tutulur?",
   "Asma kilitle kapalı", "Her zaman açık", "Numarası makine jurnaline yazılan plastik mühürle kapalı, 'Başmühendis izni olmadan açmayın' işaretli", "Kör flanşla kapatılmış",
   "Hemen kullanıma hazır olmalıdır; Form 4503 3M-16 ile test edilip yeniden mühürlenir."]);
QC("B5 §9.3.1", "CE 2E ER", 0,
  ["A temporary repair on main sea water piping requires:",
   "The Technical Superintendent's approval before the repair", "Only a log book entry", "The Master's approval after the repair", "No approval if a Straub coupling is used",
   "Straub couplings are not accepted as a permanent repair unless part of the original design; isolation is supervised by the C/E or 2/E."],
  ["Ana deniz suyu devresinde geçici tamir için ne gerekir?",
   "Tamirden önce Teknik Enspektörün onayı", "Sadece jurnal kaydı", "Tamirden sonra Kaptan onayı", "Straub kaplin kullanılırsa onay gerekmez",
   "Straub kaplin, orijinal tasarımda yoksa kalıcı tamir sayılmaz; izolasyonu Başmühendis veya İkinci Mühendis denetler."]);
QC("B5 §1.10", "CE 2E ETO", 3,
  ["Company rule on main engine local control:",
   "Use it for every port departure", "Only the Chief Engineer may know how to use it", "It replaces bridge control at sea", "Bridge control is normal; all engineers must be practised in local/emergency control and every use is logged",
   "Local control is used only when the Chief Engineer considers it prudent."],
  ["Ana makine lokal kontrolüyle ilgili şirket kuralı:",
   "Her limandan kalkışta kullanılır", "Sadece Başmühendis kullanmayı bilir", "Denizde köprüüstü kontrolünün yerine geçer", "Normal kontrol köprüüstündendir; tüm mühendisler lokal/acil kontrolü bilmeli ve her kullanım jurnale yazılır",
   "Lokal kontrol yalnız Başmühendis uygun gördüğünde kullanılır."]);
QC("B5 §4.6.1", "ETO 2E ER", 1,
  ["For non-sealed batteries, the cell temperature must not exceed:",
   "60 °C", "45 °C", "30 °C", "80 °C",
   "Top up with distilled water only, keep specific gravity in limits, never mix acid and alkaline types or their tools. Tests on Form 4805; GMDSS batteries on 4504 A-2."],
  ["Açık tip bataryalarda hücre sıcaklığı hangi değeri aşmamalıdır?",
   "60 °C", "45 °C", "30 °C", "80 °C",
   "Sadece saf su eklenir, özgül ağırlık limitlerde tutulur, asit ve alkali tipler veya aletleri karıştırılmaz. Testler Form 4805'e; GMDSS bataryaları 4504 A-2'ye."]);
QC("B5 §8.1", "CO DR CE 2E ER", 2,
  ["Company replacement interval for deck equipment hydraulic hoses:",
   "Every year", "Only when leaking", "Every 5 years", "Every 10 years",
   "Hydraulic systems are kept leak-free; any loss of oil is investigated immediately."],
  ["Güverte ekipmanı hidrolik hortumları şirkete göre ne sıklıkla değiştirilir?",
   "Her yıl", "Sadece sızdırınca", "5 yılda bir", "10 yılda bir",
   "Hidrolik sistemler sızdırmaz tutulur; her yağ kaybı derhal araştırılır."]);
QC("B5 §18.3.1.1", "2E ER", 0,
  ["In the annual creep test of an oxy-acetylene regulator, the regulator is defective if:",
   "Working pressure rises during about 15 minutes with the outlet closed", "The content gauge shows a full cylinder", "The knob turns freely", "The hose is longer than 10 m",
   "Leak tightness is also checked with soapy water; a defective regulator is removed and replaced."],
  ["Oksi-asetilen regülatörünün yıllık creep testinde regülatör ne zaman arızalı sayılır?",
   "Çıkış kapalıyken yaklaşık 15 dakikada çalışma basıncı yükselirse", "İçerik göstergesi dolu tüp gösterirse", "Ayar topuzu serbest dönerse", "Hortum 10 m'den uzunsa",
   "Sızdırmazlık sabunlu suyla da kontrol edilir; arızalı regülatör sökülür ve değiştirilir."]);

/* Navigation & deck — B3, B4, B2 */
QC("B3 §6.17", "2O 3O MS", 1,
  ["The daylight signalling lamp is tested and recorded:",
   "Weekly by the Master on Form 4204", "Daily by the Second Officer on Form 4125", "Monthly by the ETO", "Only before port entry",
   "It must not depend solely on the main power supply, and three spare bulbs are carried at all times."],
  ["Gündüz işaret lambası nasıl test edilip kaydedilir?",
   "Kaptan tarafından haftalık, Form 4204", "İkinci Zabit tarafından her gün, Form 4125", "ETO tarafından aylık", "Sadece limana girişten önce",
   "Yalnız ana güç kaynağına bağlı olmamalıdır; her zaman üç yedek ampul bulundurulur."]);
QC("B3 §6.20", "MS 2O 3O", 2,
  ["At sea, the company requires the whistle to be tested:",
   "Once a week", "Only in fog", "At noon each day and before entering restricted waters", "Every watch",
   "Also before getting underway — never when a nearby vessel could mistake the test for a signal."],
  ["Denizde düdük şirkete göre ne zaman test edilir?",
   "Haftada bir", "Sadece siste", "Her gün öğlen ve kısıtlı sulara girmeden önce", "Her vardiyada",
   "Kalkıştan önce de test edilir — yakındaki bir geminin sinyal sanabileceği durumda asla."]);
QC("B3 §6.5", "MS 2O 3O", 0,
  ["Company setting for the echo sounder shallow water alarm when the charted depth is 50 m or more:",
   "At least 25 m", "At least 2 m", "Equal to the draught", "Alarm off in open sea",
   "Below 50 m charted depth set at least 2 m, or the company minimum UKC if that is less than 2 m."],
  ["Haritadaki derinlik 50 m veya fazlayken iskandil sığ su alarmının şirket ayarı:",
   "En az 25 m", "En az 2 m", "Su çekimine eşit", "Açık denizde alarm kapalı",
   "Harita derinliği 50 m'nin altındaysa en az 2 m, veya şirket asgari UKC'si 2 m'den azsa o değer."]);
QC("B3 §4.3.4", "MS 2O", 3,
  ["The Master's monthly random check of chart and publication corrections is recorded on:",
   "Form 0708", "Form 2902", "Form 3506", "Form 2706",
   "The monthly outfit inspection uses Form 4204; the Second Officer keeps charts and publications corrected, including T&P notices on paper charts."],
  ["Kaptanın aylık rastgele harita ve yayın düzeltme kontrolü hangi forma kaydedilir?",
   "Form 0708", "Form 2902", "Form 3506", "Form 2706",
   "Aylık envanter kontrolü Form 4204 ile yapılır; harita ve yayınları T&P dahil İkinci Zabit düzeltir."]);
QC("B3 §6.15.9", "2O 3O DR", 1,
  ["Survival craft two-way VHF radios on a cargo ship of 500 GT and above:",
   "At least 2, usable for cargo work", "At least 3, sealed primary battery with expiry date, not used for routine communication", "1 per lifeboat, any colour", "Only on the bridge",
   "They work on channel 16 plus one other channel and are inspected per PMS."],
  ["500 GT ve üstü yük gemisinde can kurtarma aracı iki yönlü VHF telsizleri:",
   "En az 2, yük işinde kullanılabilir", "En az 3, son kullanma tarihli mühürlü primer pil, rutin haberleşmede kullanılmaz", "Her filikaya 1, renk fark etmez", "Sadece köprüüstünde",
   "Kanal 16 ve bir başka kanalda çalışır; PMS'e göre muayene edilir."]);
QC("B4 §9.3.17", "CO 2O 3O DR", 2,
  ["Cargo, ballast and tank washing pressure and temperature gauges are checked against a reference:",
   "Only at dry dock", "Every voyage", "Every six months (Form 3506); a gauge needing more than 6% of range correction is taken out of service", "Yearly by the terminal",
   "Each gauge has an ID; any correction is marked above it. Cargo pressure gauges are also checked at least once during each cargo operation."],
  ["Yük, balast ve tank yıkama basınç ve sıcaklık göstergeleri referansla ne zaman kontrol edilir?",
   "Sadece havuzda", "Her seferde", "Altı ayda bir (Form 3506); düzeltmesi ölçeğin %6'sını aşan gösterge servisten alınır", "Terminal tarafından yılda bir",
   "Her göstergenin kimlik numarası vardır; düzeltme değeri üzerine yazılır. Yük basınç göstergeleri her operasyonda en az bir kez de kontrol edilir."]);
QC("B4 §9.3.17 · §3.2.1.2", "CO 2O 3O DR", 0,
  ["Portable gas detectors must be calibrated with certified span gas at intervals not exceeding:",
   "Two months", "Six months", "One year", "One week",
   "Or shorter if the maker requires; records are kept in PMS and an instrument out of calibration is not used."],
  ["Portatif gaz ölçerler sertifikalı span gazla en fazla hangi aralıkla kalibre edilir?",
   "İki ay", "Altı ay", "Bir yıl", "Bir hafta",
   "Üretici daha kısa istiyorsa o; kayıtlar PMS'te tutulur, kalibrasyonu geçmiş cihaz kullanılmaz."]);
QC("B4 §2.3.4.1", "CO 2O 3O DR", 3,
  ["Before, during and after cargo operations, the physical cross-check of valves, vents and overboard connections is done with:",
   "The SSSCL only", "Form 3506", "A verbal report to the Chief Officer", "Form 2902 'Pre-Arrival & Departure Loading/Discharging Port'",
   "Line setting is directly supervised by the Chief Officer; remote valves that cannot be lashed are labelled 'TO REMAIN CLOSED'."],
  ["Yük operasyonundan önce, sırasında ve sonra valf, vent ve borda bağlantılarının fiziksel çapraz kontrolü neyle yapılır?",
   "Sadece SSSCL", "Form 3506", "Birinci Zabite sözlü rapor", "Form 2902 'Pre-Arrival & Departure Loading/Discharging Port'",
   "Hat dizilimi doğrudan Birinci Zabit tarafından denetlenir; bağlanamayan uzaktan kumandalı valfler 'KAPALI KALACAK' diye etiketlenir."]);
QC("B4 §2.4.6.4 · §2.4.6.5", "CO 2O 3O", 1,
  ["Who sets and checks the cargo tank venting system before each operation, and where is it recorded?",
   "The pumpman · cargo log only", "The Chief Officer, independently checked · entry in the port log", "The terminal · SSSCL", "The OOW · not recorded",
   "Operations are closed; a vent mimic board in the CCR shows each valve position."],
  ["Her operasyondan önce yük tankı havalandırma sistemini kim ayarlar ve nereye kaydedilir?",
   "Pompacı · sadece yük jurnali", "Birinci Zabit, bağımsız olarak tekrar kontrol edilir · liman jurnaline kayıt", "Terminal · SSSCL", "Vardiya zabiti · kaydedilmez",
   "Operasyonlar kapalı yapılır; CCR'deki vent mimik panosu her valfin konumunu gösterir."]);
QC("B2 §2.2.2.5", "CO 2O 3O DR", 2,
  ["Company minimum of IBC safety equipment sets (SCBA, protective suit, lifeline, ex-proof lamp):",
   "One, in the CCR", "Two, in the accommodation", "Three — one in a marked locker near the manifold, two in the safety store", "Four, all at the gangway",
   "Each set allows 20 minutes' work in a gas-filled space and is in addition to SOLAS fireman's outfits; inspected monthly on Form 3712."],
  ["IBC emniyet ekipman setlerinin (SCBA, koruyucu elbise, can halatı, exproof lamba) şirket asgari sayısı:",
   "Bir, CCR'da", "İki, yaşam mahallinde", "Üç — biri manifold yakınında işaretli dolapta, ikisi emniyet deposunda", "Dört, hepsi iskelede",
   "Her set gazlı mahalde 20 dakika çalışmaya izin verir ve SOLAS itfaiyeci donanımına ektir; Form 3712 ile aylık kontrol edilir."]);
QC("B2 §2.2.2.5", "ALL", 0,
  ["Emergency escape breathing devices (EEBDs) for each crew member are checked:",
   "Weekly, on Form 3703, under the Chief Officer", "Yearly by a shore company only", "Monthly on Form 3709", "Never — they are sealed",
   "They are marked for escape only and must never be used for firefighting or cargo work."],
  ["Her personele verilen acil kaçış solunum cihazları (EEBD) nasıl kontrol edilir?",
   "Haftalık, Form 3703 ile, Birinci Zabitin sorumluluğunda", "Sadece yılda bir kara firması", "Aylık, Form 3709 ile", "Hiç — mühürlüdür",
   "Yalnız kaçış amaçlı olduğu işaretlidir; yangınla mücadele veya yük işinde asla kullanılmaz."]);
QC("B2 §2.2.2.5", "CO DR", 3,
  ["Deck decontamination showers and eye washes are inspected:",
   "Weekly by the Bosun, no form", "Only before chemical cargo", "Yearly by class", "Monthly on Form 3712, under the Chief Officer",
   "They must be operable in all ambient conditions."],
  ["Güverte dekontaminasyon duşları ve göz yıkama istasyonları nasıl kontrol edilir?",
   "Lostromo tarafından haftalık, formsuz", "Sadece kimyasal yükten önce", "Klas tarafından yılda bir", "Aylık, Form 3712 ile, Birinci Zabitin sorumluluğunda",
   "Her hava koşulunda çalışır olmalıdır."]);
QC("B2 §2.6.4", "ALL", 1,
  ["Lifejackets and immersion suits are inspected by the Safety Officer:",
   "Yearly · Form 3703", "Monthly · Forms 3709 (lifejackets) and 3714 (immersion suits/TPAs)", "Weekly · Form 3712", "Only at annual survey",
   "One of each per person, extras on the bridge, in the ECR and at remote stations, and one children's lifejacket on every fleet vessel."],
  ["Can yelekleri ve daldırma elbiseleri Emniyet Zabiti tarafından nasıl kontrol edilir?",
   "Yılda bir · Form 3703", "Aylık · Form 3709 (can yeleği) ve 3714 (daldırma elbisesi/TPA)", "Haftalık · Form 3712", "Sadece yıllık sörveyde",
   "Kişi başı birer adet; köprüüstü, ECR ve uzak istasyonlarda ilave, her filo gemisinde bir çocuk can yeleği."]);
QC("B2 §2.5.3", "ALL", 2,
  ["Photoluminescent escape route markings must be placed:",
   "At eye level", "Only on doors", "Not more than 300 mm above the deck, including corners and intersections", "On the deckhead",
   "Escape routes from machinery spaces, pump rooms, accommodation and, in port, from the vessel are kept clear and marked."],
  ["Fotolüminesan kaçış yolu işaretleri nereye konur?",
   "Göz hizasına", "Sadece kapılara", "Güverteden en fazla 300 mm yükseğe, köşe ve kesişimler dahil", "Tavana",
   "Makine dairesi, pompa dairesi, yaşam mahalli ve limanda gemiden kaçış yolları açık ve işaretli tutulur."]);
QC("B1 §10.7.6", "MS CO CE 2E", 0,
  ["Watertight doors are tested:",
   "Monthly — pressurised water (≥3 kg/cm²), chalk test or light/visual — and checked before leaving port", "Only at special survey", "Weekly by closing them", "Yearly by class",
   "PMS records are completed after each test."],
  ["Su geçmez kapılar nasıl test edilir?",
   "Aylık — basınçlı su (≥3 kg/cm²), tebeşir testi veya ışık/gözle — ve limandan ayrılmadan önce kontrol", "Sadece özel sörveyde", "Haftalık kapatılarak", "Klas tarafından yılda bir",
   "Her testten sonra PMS kaydı doldurulur."]);
QC("B1 §10.7.6", "MS CO", 2,
  ["Ship staff inspection interval for ballast tanks and for dirty-product cargo tanks:",
   "6 months · 12 months", "30 months · 12 months", "12 months · 30 months", "24 months · 60 months",
   "Clean-product cargo tanks: 12 months. Forms 5202-A (ballast) and 5202-B (cargo); planned on the Yearly Plan 5208."],
  ["Gemi personelinin balast tankı ve kirli ürün yük tankı muayene aralığı:",
   "6 ay · 12 ay", "30 ay · 12 ay", "12 ay · 30 ay", "24 ay · 60 ay",
   "Temiz ürün yük tankları: 12 ay. Formlar 5202-A (balast) ve 5202-B (yük); Yıllık Plan 5208'de planlanır."]);

/* Audits, training, security — B1, B3, B7, B2 */
QC("B1 §12.4.3", "MS CE", 1,
  ["Company shore-staff inspections of each vessel (HSSEQ inspection and technical sailing audit) are planned:",
   "Once every two years", "At least twice a year at six-monthly intervals, maximum one month extension", "Only after an incident", "Monthly",
   "Planned on the annual visit plan Form 0700; the Superintendent Check List is Form 0614."],
  ["Her gemiye ofis denetimleri (HSSEQ denetimi ve teknik seyir denetimi) nasıl planlanır?",
   "İki yılda bir", "Yılda en az iki kez, altı ayda bir; en fazla bir ay uzatma", "Sadece bir olaydan sonra", "Her ay",
   "Yıllık ziyaret planı Form 0700'de planlanır; Superintendent Check List Form 0614'tür."]);
QC("B3 §1.5", "MS 2O 3O", 3,
  ["The Master's navigational audit (Form 0708) must first be done:",
   "Before the first port call", "Only if the office asks", "At the end of the contract", "During passage, within 2 weeks of taking command",
   "The superintendent's navigational audit is done on passage once every 12 months on each vessel."],
  ["Kaptanın seyir denetimi (Form 0708) ilk olarak ne zaman yapılmalıdır?",
   "İlk liman ziyaretinden önce", "Sadece ofis isterse", "Kontrat sonunda", "Seyirde, komutayı aldıktan sonra 2 hafta içinde",
   "Enspektör seyir denetimi her gemide 12 ayda bir seyirde yapılır."]);
QC("B3 §1.5", "MS 2O", 0,
  ["A remote navigational assessment using VDR data is used when:",
   "A physical audit cannot be done within 12 months; report issued within 7 days of receiving the data", "Every voyage", "Only after a collision", "Instead of the Master's audit",
   "It covers a critical passage (strait, port approach, pilotage) and uses Form 0708; it supplements, not replaces, traditional audits."],
  ["VDR verisiyle uzaktan seyir değerlendirmesi ne zaman yapılır?",
   "Fiziksel denetim 12 ay içinde yapılamazsa; veri alındıktan sonra 7 gün içinde rapor", "Her seferde", "Sadece çatışmadan sonra", "Kaptan denetimi yerine",
   "Kritik bir geçişi (boğaz, liman yaklaşması, kılavuzluk) kapsar ve Form 0708 kullanılır; geleneksel denetimin yerine değil, ek olarak yapılır."]);
QC("B1 §12.4.6", "MS CO", 2,
  ["The Master's own cargo and operational audit (Form 0709) is done:",
   "Only when a superintendent is on board", "Yearly", "Within 1 month of signing on and not more than every 6 months", "Every cargo operation",
   "The superintendent's 0709 audit is done once a year on each tanker."],
  ["Kaptanın kendi yük ve operasyon denetimi (Form 0709) ne zaman yapılır?",
   "Sadece enspektör gemideyken", "Yılda bir", "Göreve başladıktan sonra 1 ay içinde ve en fazla 6 ayda bir", "Her yük operasyonunda",
   "Enspektörün 0709 denetimi her tankerde yılda bir yapılır."]);
QC("B7 App-02", "MS CO 2O 3O CE 2E ETO", 1,
  ["Company certificated shore trainings (BRM, ERM, CCH/OCH, ship handling) are valid for:",
   "Life", "5 years, then must be refreshed", "1 year", "Until promotion",
   "BRM and CCH/OCH are compulsory for the Master and deck officers; ERM for the Chief Engineer and engineers."],
  ["Şirketin sertifikalı kara eğitimleri (BRM, ERM, CCH/OCH, ship handling) ne kadar geçerlidir?",
   "Ömür boyu", "5 yıl, sonra yenilenmeli", "1 yıl", "Terfiye kadar",
   "BRM ve CCH/OCH Kaptan ve güverte zabitleri için, ERM Başmühendis ve mühendisler için zorunludur."]);
QC("B1 §6.4.4 · B7 App-02", "MS CO", 0,
  ["Before taking command, a newly promoted Master must:",
   "Attend a Ship Handling Course arranged by the Company", "Sail one voyage as supernumerary", "Pass a class exam", "Nothing extra",
   "Ship handling is also a compulsory course for Chief Officers in the training matrix."],
  ["Yeni terfi eden Kaptan komutayı almadan önce ne yapmalıdır?",
   "Şirketin düzenlediği Ship Handling kursuna katılmalı", "Bir sefer fazla personel olarak çıkmalı", "Klas sınavına girmeli", "Ek bir şey gerekmez",
   "Eğitim matrisinde Ship Handling Birinci Zabitler için de zorunludur."]);
QC("B2 §5.9", "ALL", 3,
  ["Security familiarisation training for a joining crew member is given:",
   "Within one week", "At the next drill", "Only to officers", "Before sailing or within 24 hours of joining, whichever is first (TRO-09)",
   "Security drills and training follow the SSP and the ship's drill programme."],
  ["Gemiye katılan personele güvenlik tanıtım eğitimi ne zaman verilir?",
   "Bir hafta içinde", "Bir sonraki talimde", "Sadece zabitlere", "Sefere çıkmadan veya katıldıktan sonra 24 saat içinde, hangisi önce gelirse (TRO-09)",
   "Güvenlik talim ve eğitimleri SSP'ye ve gemi talim programına göre yapılır."]);
QC("B3 §6.15.5", "MS CO 2O", 1,
  ["Who checks the SSAS, and how often?",
   "The ETO, monthly", "The Ship Security Officer — daily visual check that it is on and operational", "The CSO, yearly", "The Master, at each port",
   "Routine tests and maintenance follow the SSAS maker's manual."],
  ["SSAS'ı kim ve ne sıklıkla kontrol eder?",
   "ETO, aylık", "Gemi Güvenlik Zabiti — her gün açık ve çalışır olduğunu gözle kontrol eder", "CSO, yılda bir", "Kaptan, her limanda",
   "Rutin test ve bakım SSAS üretici kitabına göre yapılır."]);
QC("B1 §6.5.7", "ALL", 2,
  ["The company's common working language on board and between ship and office is:",
   "English", "The flag state's language", "Turkish — SMS documents are kept in English and Turkish", "Any language the Master chooses",
   "Further translation is allowed whenever needed for clear understanding."],
  ["Şirketin gemide ve gemi-ofis arasındaki ortak çalışma dili:",
   "İngilizce", "Bayrak devletinin dili", "Türkçe — SMS dokümanları İngilizce ve Türkçe tutulur", "Kaptanın seçtiği dil",
   "Anlaşılırlık için gerektiğinde başka dillere çeviri yapılabilir."]);
