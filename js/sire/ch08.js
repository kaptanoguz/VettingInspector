/* SIRE 2.0 · Chapter 8 — Cargo & Ballast Systems (oil and chemical tankers) */

const IG_OPS = C("B4 §8.2.4 Inert Gas Valves and Tank Pressure · §8.2.13 Oxygen Content · §8.2.16 Records",
  "Inerted tanks are kept above 200 mm wg at all times, topping up with gas of no more than 5% O₂. Oxygen in any inerted space must not exceed 8% by volume, and in the inert gas supply 5%. Tank IG pressure is monitored hourly during cargo operations and recorded on Form 3105. On ballast passages the O₂ of each inerted space is tested weekly and in good time before the load port. Form 2905 'Nitrogen (inert gas) Operation Control List' is completed by the Chief Officer before every IG/N₂ and venting operation.",
  "İnert tanklar her zaman 200 mm wg'nin üzerinde tutulur; ilave en fazla %5 O₂ içeren gazla yapılır. İnert herhangi bir mahalde oksijen hacimce %8'i, inert gaz beslemesinde %5'i aşamaz. Yük operasyonunda tank IG basıncı saatlik izlenir ve Form 3105'e kaydedilir. Balast seferlerinde her inert mahallin O₂'si haftalık ve yükleme limanından yeterince önce ölçülür. Her IG/N₂ ve tahliye (venting) operasyonundan önce Birinci Zabit Form 2905 'Azot (inert gaz) Operasyon Kontrol Listesi'ni doldurur.");
const IG_MAINT = C("B4 §8.2.15 Maintenance and Testing · §8.2.5 System Operations",
  "All IG functions, alarms and cut-outs are tested per the PMS. Before N₂/IG operations the C/O and C/E calibrate the fixed oxygen analysers (calibration gas with valid certificate) and test all alarms, recorders and gauges. The generator efficiency test is done monthly with Form 3511 (N₂ generator) or Form 3513 (IG generator). O₂ sensors are span-calibrated monthly or before any IG/N₂ operation (Form 3503). The deck seal is checked monthly for clogging; non-return valves are checked for free movement before each operation (Form 2905) and inspected and cleaned every six months.",
  "Tüm IG fonksiyonları, alarmlar ve kesiciler PMS'e göre test edilir. N₂/IG operasyonundan önce Birinci Zabit ve Başmühendis sabit oksijen analizörlerini kalibre eder (sertifikası geçerli kalibrasyon gazıyla) ve tüm alarm, kaydedici ve göstergeleri test eder. Jeneratör verim testi her ay Form 3511 (N₂ jeneratörü) veya Form 3513 (IG jeneratörü) ile yapılır. O₂ sensörleri her ay veya her IG/N₂ operasyonundan önce span gazla kalibre edilir (Form 3503). Deck seal tıkanmaya karşı her ay kontrol edilir; geri dönüşsüz valfler her operasyondan önce serbestlik için kontrol edilir (Form 2905) ve altı ayda bir açılıp temizlenir.");
const TC_PLAN = C("B4 §6.3.3.1 Tank Cleaning Plan · §6.3.11 Gas Freeing",
  "Before any tank cleaning the Chief Officer writes a plan in consultation with the Chief Engineer, approved by the Master, covering PPE and emergency actions. The C/O holds a toolbox meeting and everyone involved signs the plan; any significant deviation goes back to the Master for approval. During gas freeing, vapour is vented only through the approved outlets and must not escape at deck level until the tank concentration is below 30% LFL.",
  "Her tank yıkamadan önce Birinci Zabit, Başmühendisle görüşerek KKD ve acil durum eylemlerini içeren yazılı bir plan hazırlar; plan Kaptan tarafından onaylanır. Birinci Zabit toolbox toplantısı yapar ve ilgili herkes planı imzalar; önemli her sapma tekrar Kaptan onayına gider. Gazdan arındırmada buhar yalnızca onaylı çıkışlardan verilir ve tank içi konsantrasyon %30 LFL'nin altına inene kadar güverte seviyesine çıkmamalıdır.");

/* ── 8.1 Oil tankers ── */
S("8.1.1", "MS CO 2O 3O", 1, "Petrol tankerinde inert gaz sisteminin kullanımı", IG_OPS,
  ["Explain how you keep tanks inert and what happens on a high-O₂ or low-pressure alarm.", "Form 3105, Form 2905, IG recorder", "Tank O₂ not measured before discharge."],
  ["Tankları nasıl inert tuttuğunuzu ve yüksek O₂ veya düşük basınç alarmında ne olduğunu anlatın.", "Form 3105, Form 2905, IG kaydedici", "Tahliye öncesi tank O₂'sinin ölçülmemesi."]);
S("8.1.2", "MS CO", 1, "Ham petrolle yıkama (COW)", TC_PLAN,
  ["Explain the COW plan, the O₂ checks and the crew assigned.", "COW manual, COW plan", "Tank O₂ above 8% during COW."],
  ["COW planını, O₂ kontrollerini ve görevli personeli anlatın.", "COW manual, COW planı", "COW sırasında tank O₂'sinin %8'in üstünde olması."]);
S("8.1.3", "CO 2O", 1, "Yük tankının havalandırma sisteminden izolasyonu",
  C("B4 §8.2.7 Tank Entry · §6.3.12 Pressure and Venting Valve Control", "A tank to be gas-freed for entry is first purged below 2% hydrocarbon by volume, then securely isolated from the IG and vent lines; its hatch stays open while it is gas-free, and it is reconnected before re-inerting. No tank is entered without an enclosed space entry permit (Form 3602). After gas freeing, P/V valves, flame screens and vent risers are checked for blockage (Form SM 2902).", "Giriş için gazdan arındırılacak tank önce hacimce %2 hidrokarbonun altına purge edilir, sonra IG ve havalandırma hatlarından emniyetle izole edilir; gazdan arınmış olduğu sürece kapağı açık kalır ve yeniden inertlemeden önce tekrar bağlanır. Kapalı alan giriş izni (Form 3602) olmadan hiçbir tanka girilmez. Gazdan arındırma sonrası P/V valfleri, alev telleri ve havalandırma boruları tıkanmaya karşı kontrol edilir (Form SM 2902)."),
  ["Explain how a tank is isolated before entry and how that is recorded.", "Isolation record, entry permit", "Tank isolated by a single valve only."],
  ["Girişten önce tankın nasıl izole edildiğini ve nasıl kaydedildiğini anlatın.", "İzolasyon kaydı, giriş izni", "Tankın tek valfle izole edilmesi."]);
S("8.1.4", "CO 2O 3O DR", 1, "Petrol yük tankı yıkama prosedürleri", TC_PLAN,
  ["Explain the tank cleaning plan and static precautions with portable machines.", "Form 3101 Tank cleaning checklist, plan", "Plan not signed by those involved."],
  ["Tank yıkama planını ve portatif makinelerde statik önlemlerini anlatın.", "Form 3101 Tank yıkama kontrol listesi, plan", "Planın ilgililerce imzalanmaması."]);

/* ── 8.2 Chemical tankers ── */
S("8.2.1", "CO 2O", 1, "Kimyasal tankerde inert gaz/azot kullanımı", IG_OPS,
  ["Explain padding with nitrogen and how pressure is monitored.", "Form 2905, Form 3105", "No record of N₂ quality."],
  ["Azotla padding'i ve basıncın nasıl izlendiğini anlatın.", "Form 2905, Form 3105", "N₂ kalitesinin kaydedilmemesi."]);
S("8.2.2", "CO", 1, "İnhibitörlü kimyasal yükler",
  C("B4 §3.3.1 Self Reaction (Polymerisation) · §8.3.9",
    "The charterer must ensure the correct amount of inhibitor is added; the ship does not load the cargo until a certificate of inhibition is provided showing the inhibitor name and amount, date added and duration of effectiveness, and any temperature limits. More inhibitor cannot be added during the voyage.",
    "Doğru miktarda inhibitör eklenmesinden kiracı sorumludur; inhibitör adı ve miktarı, eklenme tarihi ve etki süresi ile sıcaklık sınırlarını gösteren inhibisyon sertifikası verilmeden yük alınmaz. Seferde ilave inhibitör eklenemez."),
  ["Show the inhibitor certificate and compare its duration with the voyage.", "Certificate of inhibition", "Inhibitor duration shorter than the voyage."],
  ["İnhibitör sertifikasını gösterin ve süresini sefer süresiyle karşılaştırın.", "İnhibisyon sertifikası", "İnhibitör süresinin seferden kısa olması."]);
S("8.2.3", "CO", 0, "Prosedürler ve Düzenlemeler El Kitabı (P&A Manual)",
  C("B2 §4.1.6.2 General Requirements Related to Cargo Operations", "Annex II compliance is based on the NLS Certificate or International Certificate of Fitness and the approved P&A Manual.", "Ek II uygunluğu NLS Sertifikası veya Uluslararası Uygunluk Sertifikası (CoF) ve onaylı P&A Manual'e dayanır."),
  ["Show the stripping test, prewash requirements and cargo categories.", "P&A Manual, CoF", "Officer unaware of the stripping quantities."],
  ["Sıyırma testini, ön yıkama şartlarını ve yük kategorilerini gösterin.", "P&A Manual, CoF", "Zabitin sıyırma miktarlarını bilmemesi."]);
S("8.2.4", "CO 2O DR", 1, "Kimyasal tank yıkama prosedürleri", TC_PLAN,
  ["Explain the cleaning method for the last cargo and the wall-wash test.", "Form 3101, Form 3103 Wall wash test", "Cleaning method not suited to the last cargo."],
  ["Son yük için yıkama yöntemini ve duvar yıkama testini anlatın.", "Form 3101, Form 3103 Duvar yıkama testi", "Yıkama yönteminin son yüke uygun olmaması."]);
S("8.2.5", "CO 2O", 1, "Kimyasal yük uyumluluk tabloları",
  C("B4 §3.3 Reactivity · §5.3.3.6", "Cargo reactivity and compatibility are checked against the compatibility chart (reactive groups); the chart is also kept at the sample locker.", "Yük reaktivitesi ve uyumluluğu uyumluluk tablosuna (reaktif gruplar) göre kontrol edilir; tablo numune dolabında da bulunur."),
  ["Check two adjacent cargoes on the chart, including heated cargo next to heat-sensitive cargo.", "Compatibility chart, stowage plan", "Incompatible cargoes in adjacent tanks."],
  ["Komşu iki yükü tabloda kontrol edin; ısıya duyarlı yük yanında ısıtılan yük dahil.", "Uyumluluk tablosu, istif planı", "Uyumsuz yüklerin komşu tanklarda olması."]);
S("8.2.6", "ALL", 1, "IBC Kodu gerektirdiği kaçış setleri",
  C("B4 §3.2.1.6 Abandoning Ship with Toxic/Corrosive Liquids", "Escape breathing sets of 15 minutes' duration are provided; once in use, action must be swift so the escape is completed well within that time.", "15 dakikalık kaçış solunum setleri bulunur; kullanılmaya başlanınca kaçışın bu süre içinde rahatça tamamlanması için hızlı hareket edilmelidir."));
S("8.2.7", "CO 2O 3O", 0, "IBC Kodu gerektirdiği emniyet ekipmanı",
  C("B2 §2.2.2.5 PPE for Different Tasks and Areas · B4 §2.3.4.2",
    "At least three complete safety equipment sets are carried in addition to SOLAS fireman's outfits, each allowing 20 minutes' work in a gas-filled space: SCBA (not stored oxygen) with spare cylinder, protective clothing, boots, gloves and tight goggles, a fireproof cargo-resistant lifeline and belt, and an explosion-proof lamp. One set is kept in a marked locker near the manifold, two in the safety store; the Safety Officer inspects them monthly (Form 3712). Each person also has an escape respiratory device, checked weekly by the Chief Officer (Form 3703). PPE follows matrix P-11.",
    "SOLAS itfaiyeci donanımına ek olarak, gazlı bir mahalde 20 dakika çalışmaya izin veren en az üç tam emniyet ekipman seti bulunur: yedek tüplü SCBA (depolanmış oksijen değil), koruyucu elbise, çizme, eldiven ve sıkı gözlük, yüke dayanıklı yanmaz can halatı ve kemer, exproof lamba. Bir set manifold yakınında işaretli dolapta, ikisi emniyet deposunda tutulur; Emniyet Zabiti aylık kontrol eder (Form 3712). Her personelin ayrıca kaçış solunum cihazı vardır, Birinci Zabit haftalık kontrol eder (Form 3703). KKD için P-11 matrisi uygulanır."),
  ["Show rescue, decontamination and gas detection equipment required by the CoF.", "CoF equipment list", "Equipment missing from the list."],
  ["CoF'nin istediği kurtarma, dekontaminasyon ve gaz ölçüm ekipmanını gösterin.", "CoF ekipman listesi", "Listedeki ekipmanın eksik olması."]);
S("8.2.8", "CO 2O 3O DR", 0, "IBC Kodu gerektirdiği koruyucu ekipman",
  C("B4 §5.3.1 Closed Sampling", "Approved closed sampling equipment and the protective clothing required by IBC 14.1.1/14.2.2 are kept in good order on all vessels.", "Tüm gemilerde onaylı kapalı numune ekipmanı ve IBC 14.1.1/14.2.2'nin istediği koruyucu kıyafet iyi durumda tutulur."),
  ["Choose PPE for the cargo from its SDS.", "PPE inventory", "Chemical suit damaged."],
  ["Yükün SDS'ine göre KKD seçin.", "KKD envanteri", "Kimyasal elbisenin hasarlı olması."]);

/* ── 8.3 Oil and chemical tankers ── */
S("8.3.1", "CO 2E", 0, "Inert gaz jeneratörü", IG_MAINT);
S("8.3.2", "CO 2E", 0, "Azot jeneratörü inert gaz sistemi", IG_MAINT);
S("8.3.3", "CO 2E", 0, "Baca gazı inert gaz sistemi", IG_MAINT);
S("8.3.4", "CO 2O 3O DR", 1, "Yük tankı yüksek seviye ve taşma alarmları",
  C("B4 §9.3.9 High Level (HL) & High High Level (HHL)",
    "High-level (95%) and overfill (98%) alarms are fully independent electrically, with alarms on the panel and lights and sirens on deck. The sensor test is done on deck for each cargo and slop tank before each cargo operation or monthly, with results recorded in the PMS. Junior officers are briefed on the alarms and the briefing is recorded. In-tank components are inspected at least every 12 months.",
    "Yüksek seviye (%95) ve taşma (%98) alarmları elektriksel olarak tamamen bağımsızdır; alarm panoda, ışık ve siren güvertededir. Sensör testi her yük ve slop tankı için her yük operasyonundan önce veya ayda bir güvertede yapılır ve sonuçlar PMS'e kaydedilir. Kıdemsiz zabitler alarmlar hakkında bilgilendirilir ve bu kayıt altına alınır. Tank içi bileşenler en az 12 ayda bir muayene edilir."),
  ["Explain how the test was done and what you do on a high-level alarm.", "PMS alarm test records", "Test recorded but nobody can describe it."],
  ["Testin nasıl yapıldığını ve yüksek seviye alarmında ne yaptığınızı anlatın.", "PMS alarm test kayıtları", "Test kayıtlı ama kimse anlatamıyor."]);
S("8.3.5", "CO 2O 3O DR", 1, "İnert olmayan tanklarda statik biriktiren yükün ölçümü ve numunesi",
  C("B4 §5.2.1 Ullage Measurement · §3.5 Static Accumulators · §5.3.1 Closed Sampling",
    "Gauging is done with the fixed system or portable equipment through a vapour lock, whose bonding is checked per the maker. Conductive (metal) ullaging, sampling or dipping equipment is prohibited during loading of a static accumulator and for 30 minutes after completion. The Company does not permit open sampling for any cargo unless explicitly approved by Head Office.",
    "Ölçüm sabit sistemle veya buhar kilidinden geçirilen portatif ekipmanla yapılır; topraklaması üreticiye göre kontrol edilir. Statik biriktiren yük yüklenirken ve bitiminden sonra 30 dakika boyunca iletken (metal) ulaj, numune veya iskandil ekipmanı kullanılması yasaktır. Merkez Ofis açıkça onaylamadıkça Şirket hiçbir yük için açık numune almaya izin vermez."),
  ["Explain what a static accumulator is (<50 pS/m) and give examples.", "UTI bonding check", "Metal tape used right after loading."],
  ["Statik biriktirenin ne olduğunu (<50 pS/m) açıklayın ve örnek verin.", "UTI topraklama kontrolü", "Yükleme biter bitmez metal şerit kullanılması."]);
S("8.3.6", "CO 2O 3O", 1, "İnert olmayan tanka statik biriktiren yük yükleme",
  C("B4 §3.5 Static Electricity Accumulators",
    "Liquids with conductivity below 50 pS/m are static accumulators (e.g. kerosene, cumene, octane, styrene, xylene and other highly refined products) and can carry an ignition hazard during loading and for up to 30 minutes after completion; extra precautions are taken during loading.",
    "İletkenliği 50 pS/m'nin altındaki sıvılar statik biriktiricidir (örn. kerosen, kümen, oktan, stiren, ksilen ve diğer yüksek rafine ürünler); yükleme sırasında ve bitiminden sonra 30 dakikaya kadar tutuşma tehlikesi taşıyabilir; yüklemede ek önlem alınır."),
  ["Initial rate limited until the inlet is covered (≈1 m/s).", "Cargo plan", "Full rate from the start."],
  ["Giriş sıvıyla kapanana kadar başlangıç debisi sınırlı (≈1 m/s).", "Yük planı", "Başlangıçtan tam debi."]);
S("8.3.7", "CO 2E ETO", 0, "IGS oksijen analizörü", IG_MAINT);
S("8.3.8", "CO 2O 3O DR", 1, "Yük pompası acil stop kontrolleri (ESD)",
  C("B4 §9.3.21 Emergency Stop Devices", "All cargo pump emergency shutdown devices are tested just before any discharge or whenever a cargo pump is to be used. The Chief Officer is responsible for the test and records it on Form 3501; any maintenance needed is done without delay.", "Tüm yük pompası acil durdurma cihazları her tahliyeden hemen önce veya bir yük pompası kullanılacağı her seferde test edilir. Testten ve Form 3501 kaydından Birinci Zabit sorumludur; gereken bakım gecikmeden yapılır."),
  ["Point to the emergency stops from your watch position.", "Form 3501", "Watchman cannot find the stop."],
  ["Vardiya yerinizden acil stopları gösterin.", "Form 3501", "Vardiyacının stopu bulamaması."]);
S("8.3.9", "CO 2O DR", 0, "Yük, IG ve buhar hatlarının basınç testi ve muayenesi",
  C("B4 §9.3.1 Pressure Testing of Cargo Piping, Reducers and Spool Pieces",
    "Cargo pipelines, reducers, spool pieces and other portable pipework are tested at least annually to 100% of rated working pressure (MAWP) and to 1.5 × MAWP at least twice in any five years, each test lasting at least 10 minutes. Each item is marked with the test date and pressure.",
    "Yük boru hatları, redüksiyonlar, ara parçalar ve diğer portatif borular en az yılda bir nominal çalışma basıncının (MAWP) %100'ünde ve beş yılda en az iki kez 1,5 × MAWP'de, her test en az 10 dakika olmak üzere test edilir. Her parça test tarihi ve basıncıyla işaretlenir."),
  ["Show the marking on a reducer and the test record.", "Pressure test records", "Reducer without test marking."],
  ["Bir redüksiyon üzerindeki işareti ve test kaydını gösterin.", "Basınç test kayıtları", "Test işareti olmayan redüksiyon."]);
S("8.3.10", "CO 2O", 1, "Buhar toplama (vapour return) sistemi",
  C("B4 §3.7.2 · §3.2.2.7", "Where toxic or benzene-containing cargoes are loaded, displaced vapour is returned to shore (vapour return) and all measurements and sampling are done in closed mode.", "Toksik veya benzen içeren yükler yüklenirken yer değiştiren buhar karaya geri verilir (vapour return) ve tüm ölçüm ve numuneler kapalı modda yapılır."),
  ["Explain overpressure protection and the agreed rates with vapour return.", "Ship/shore agreement", "Pressure alarms not set."],
  ["Buhar dönüşünde aşırı basınç korumasını ve kararlaştırılan debileri anlatın.", "Gemi/terminal mutabakatı", "Basınç alarmlarının ayarlı olmaması."]);
S("8.3.11", "CO 2O DR", 1, "İnert olmayan tanklarda yıkama", TC_PLAN);
S("8.3.12", "CO 2O 3O DR", 0, "Portatif UTI ölçüm ve numune ekipmanı",
  C("B4 §5.2.1 Ullage Measurement · §9.3.17 Measuring Equipment", "Portable UTIs/MMCs are used through a vapour lock and their internal bonding is checked to the maker's requirements. All fixed and portable measuring equipment is checked and calibrated as per company requirements; cargo, ballast and tank-washing pressure, temperature and tachometer gauges are checked every six months with the on-board test equipment and recorded on Form 3506.", "Portatif UTI/MMC'ler buhar kilidinden kullanılır ve dahili topraklamaları üretici şartlarına göre kontrol edilir. Tüm sabit ve portatif ölçüm ekipmanı şirket şartlarına göre kontrol ve kalibre edilir; yük, balast ve tank yıkama basınç, sıcaklık ve takometre göstergeleri altı ayda bir gemideki test ekipmanıyla kontrol edilip Form 3506'ya kaydedilir."),
  ["Show the bonding check and calibration of the UTI.", "Calibration certificate", "Bonding cable damaged."],
  ["UTI'nin topraklama kontrolünü ve kalibrasyonunu gösterin.", "Kalibrasyon sertifikası", "Topraklama kablosunun hasarlı olması."]);
S("8.3.13", "CO 2O", 0, "İkincil havalandırma sistemleri",
  C("B4 §2.4.6.4 Setting of Venting System · §2.4.6.5 Tank Venting",
    "Before any loading, discharging or transfer of cargo or ballast, the Chief Officer sets and checks the venting system for the tanks concerned; it is independently checked for each operation and an entry is made in the port log. Operations are closed, venting only through the vent system or vapour return. A vent mimic board in the CCR shows the position of each vent valve, and liquid P/V breakers must be operative.",
    "Her yükleme, tahliye veya yük/balast transferinden önce Birinci Zabit ilgili tankların havalandırma sistemini ayarlar ve kontrol eder; her operasyon için bağımsız olarak tekrar kontrol edilir ve liman jurnaline kaydedilir. Operasyonlar kapalı yapılır, havalandırma yalnız vent sistemi veya buhar dönüş hattından olur. CCR'deki vent mimik panosu her valfin konumunu gösterir; sıvı P/V kırıcıları çalışır olmalıdır."),
  ["Explain the secondary means of venting and how it is checked.", "PMS", "Secondary vent not checked."],
  ["İkincil havalandırma düzenini ve nasıl kontrol edildiğini anlatın.", "PMS", "İkincil tahliyenin kontrol edilmemesi."]);
S("8.3.14", "CO 2O", 1, "Yük tankı havalandırma sistemleri (P/V valfleri)",
  C("B4 §9.3.12 Pressure Vacuum and Constant Velocity Valves · §6.3.12",
    "P/V valves are tested for correct operation with the check-lift before every load or discharge, inspected monthly and overhauled at least every 12 months; the annual check is done on the P/V valve test kit carried on board. After gas freeing, flame screens, vent risers and drains are checked for blockage (Form SM 2902).",
    "P/V valfleri her yükleme veya tahliyeden önce kaldırma kolu ile test edilir, her ay muayene edilir ve en az 12 ayda bir revizyon yapılır; yıllık kontrol gemideki P/V test kitiyle yapılır. Gazdan arındırma sonrası alev telleri, havalandırma boruları ve drenler tıkanmaya karşı kontrol edilir (Form SM 2902)."),
  ["Show the check-lift operation and the last overhaul record.", "PMS records, test kit", "P/V valve seized."],
  ["Kaldırma kolu kullanımını ve son revizyon kaydını gösterin.", "PMS kayıtları, test kiti", "P/V valfinin sıkışmış olması."]);
S("8.3.15", "CO DR", 0, "Derin kuyu pompası koferdam tahliyesi (purging)",
  C("B4 §9.3.19 Framo Deep-well Pumps", "Company vessels are fitted with Framo pumps. The pump cofferdams are purged regularly per the Framo purging instruction in the ship's service manual; purging and logging are the Chief Officer's responsibility and results are recorded on Form 3205 for each voyage. If results show maintenance is needed, it is done without delay.", "Şirket gemilerinde Framo pompaları bulunur. Pompa koferdamları geminin servis el kitabındaki Framo purge talimatına göre düzenli purge edilir; purge ve kayıt Birinci Zabitin sorumluluğundadır ve sonuçlar her sefer için Form 3205'e kaydedilir. Sonuçlar bakım gerektiriyorsa gecikmeden yapılır."),
  ["Show how you purge the cofferdam and what the result tells you.", "Purging log", "Leakage trend not recorded."],
  ["Koferdamı nasıl purge ettiğinizi ve sonucun ne anlattığını gösterin.", "Purge kaydı", "Kaçak eğiliminin kaydedilmemesi."]);
S("8.3.16", "CO 2E", 1, "IG sistemi geri dönüşsüz cihazları (deck seal, NRV)", IG_MAINT);
S("8.3.17", "CO DR", 0, "Manifold redüksiyonları ve ara parçalar",
  C("B4 §9.3.1 · §4.3.1", "Reducers and spool pieces are pressure-tested annually and marked with test date and pressure. When cargo and ballast are handled at the same time, the spool piece separating the systems must be confirmed removed first.", "Redüksiyon ve ara parçalar yılda bir basınç testine tabi tutulur ve test tarihi ile basıncıyla işaretlenir. Yük ve balast aynı anda elleçlenecekse sistemleri ayıran ara parçanın sökülmüş olduğu önce teyit edilir."),
  ["Show a reducer: material, rating, test marking.", "Test records", "Reducer of lower rating than the manifold."],
  ["Bir redüksiyonu gösterin: malzeme, sınıf, test işareti.", "Test kayıtları", "Manifolddan düşük sınıflı redüksiyon."]);
S("8.3.18", "CO 2E", 0, "IG sistemi basınç/vakum kırıcı (P/V breaker)", IG_MAINT);
S("8.3.19", "CO 2E ETO", 0, "IG sistemi göstergeleri ve alarmları", IG_MAINT);
S("8.3.20", "CO 2E", 0, "IG hattına bağlantılar", IG_MAINT);
S("8.3.21", "CO 2E", 0, "Yük ısıtma sistemi",
  C("B4 §10.3 Cargo Heating Procedures · §10.7 Record of Cargo Heating",
    "The Master ensures heating requirements are met; the Chief Officer implements them in consultation with the Chief Engineer. Before heating, the exhaust cock on each coil is opened until water runs clean to prove there is no in-tank leakage. Accurate heating records are kept, including times of supplying and adjusting heat, to protect against cargo claims.",
    "Isıtma gerekliliklerinin karşılanmasını Kaptan sağlar; Birinci Zabit bunu Başmühendisle görüşerek uygular. Isıtmadan önce her serpantinin tahliye musluğu su temiz akana kadar açılarak tank içi kaçak olmadığı kanıtlanır. Yük taleplerine karşı ısı verme ve ayarlama saatleri dahil doğru ısıtma kayıtları tutulur."),
  ["Explain how you check heating coils for leakage.", "Heating records", "Coil leakage not checked before heating."],
  ["Serpantinleri kaçağa karşı nasıl kontrol ettiğinizi anlatın.", "Isıtma kayıtları", "Isıtma öncesi kaçak kontrolü yapılmaması."]);
S("8.3.22", "CO", 0, "Yük katkı maddeleri (doping)",
  C("B4 §3.7.12 Doping and Carriage of Cargoes with Additives", "Injection of additives is preferably done ashore or through an in-line system such as a spool piece at the manifold; the injection system's pressure test record is verified first.", "Katkı enjeksiyonu tercihen karada veya manifolddaki ara parça gibi hat içi bir sistemle yapılır; enjeksiyon sisteminin basınç test kaydı önce doğrulanır."),
  ["Explain how doping is controlled and risk-assessed.", "Risk assessment", "Additive added through an open hatch."],
  ["Katkının nasıl kontrol edildiğini ve değerlendirildiğini anlatın.", "Risk değerlendirmesi", "Katkının açık kapaktan eklenmesi."]);
S("8.3.23", "CO 2O ETO", 0, "Yük tankı sıcaklık izleme sistemi",
  C("B4 §9.3.17 Measuring Equipment",
    "All local and remote pressure, temperature and tachometer gauges used for cargo, ballast and tank washing are checked and, if needed, recalibrated every six months with the on-board test equipment, and the result is recorded on Form 3506.",
    "Yük, balast ve tank yıkamada kullanılan tüm yerel ve uzak basınç, sıcaklık ve takometre göstergeleri altı ayda bir gemideki test ekipmanıyla kontrol edilir, gerekirse kalibre edilir ve sonuç Form 3506'ya kaydedilir."),
  ["Fixed temperature readings checked against portable readings.", "Comparison records", "Sensor reading wrong but not reported."],
  ["Sabit sıcaklık değerleri portatif ölçümle karşılaştırılıyor.", "Karşılaştırma kayıtları", "Hatalı sensörün bildirilmemesi."]);
S("8.3.24", "CO 2O 3O DR", 0, "Yük manifoldu düzeni",
  C("B4 §2.3.4.1 Setting of Lines",
    "Manifold blanks with gaskets are always fully bolted except when removed for operations. Manifold valves are closed before hoses are disconnected, not opened until needed, and not altered during transfer without the terminal's agreement; locking devices are used where fitted. Manifold drains are lined up for immediate use, and segregation between cargoes uses blank flanges or spectacle blanks.",
    "Contalı manifold körleri, operasyon için sökülmedikçe tüm cıvatalarıyla bağlı tutulur. Manifold valfleri hortum sökülmeden önce kapatılır, gerekene kadar açılmaz ve transfer sırasında terminalin onayı olmadan değiştirilmez; varsa kilitleme düzenekleri kullanılır. Manifold drenajları hemen kullanıma hazır tutulur; yükler arası ayrım kör flanş veya gözlüklü körle sağlanır."),
  ["Unused connections blanked and fully bolted; drip trays clean; pressure gauges fitted.", "Manifold checklist", "Blank flange with missing bolts."],
  ["Kullanılmayan bağlantılar kör flanşlı ve tam cıvatalı; damlama tavaları temiz; manometreler takılı.", "Manifold kontrol listesi", "Cıvataları eksik kör flanş."]);
S("8.3.25", "CO 2O", 1, "Karadan azot alma",
  C("B4 §8.3.7 Receiving Nitrogen from Shore",
    "Shore nitrogen may come at high pressure (about 10 bar) and high flow. The handling procedure is agreed with the terminal as part of the pre-loading checklist. Introducing gas through a liquid line can over-pressurise a tank if inlet and outlet sizes differ, so venting capacity is checked.",
    "Kara azotu yüksek basınçta (yaklaşık 10 bar) ve yüksek debide gelebilir. Elleçleme prosedürü yükleme öncesi kontrol listesi kapsamında terminalle kararlaştırılır. Gazın sıvı hattından verilmesi, giriş ve çıkış çapları farklıysa tankta aşırı basınç yaratabilir; bu nedenle tahliye kapasitesi kontrol edilir."),
  ["Explain the agreed pressure and how you monitor the tank.", "Pre-loading agreement", "No agreed maximum pressure."],
  ["Kararlaştırılan basıncı ve tankı nasıl izlediğinizi anlatın.", "Yükleme öncesi mutabakat", "Kararlaştırılmış azami basınç olmaması."]);

/* ── 8.99 All tankers ── */
S("8.99.1", "MS CO 2O 3O", 1, "Yük ve balast transfer planlaması ve uygulanması",
  C("B4 §3.6 · §3.8 Unfamiliar/New Chemicals", "The loading plan must follow the approved loading manual/loading computer, with stresses checked. If neither the Master nor the C/O has experience of a cargo, it is treated as unfamiliar and a risk assessment is made before the cargo and tank cleaning plans.", "Yükleme planı onaylı yükleme el kitabı/yükleme bilgisayarına uygun olmalı ve gerilmeler kontrol edilmelidir. Kaptan veya Birinci Zabitin bir yük hakkında tecrübesi yoksa yük alışılmadık kabul edilir ve yük ve tank yıkama planlarından önce risk değerlendirmesi yapılır."),
  ["Talk through the plan: sequence, rates, stability at each stage, topping-off, emergency stops.", "Cargo plan, loading computer printouts, pre-transfer meeting", "Plan not updated after a change."],
  ["Planı anlatın: sıra, debiler, her aşamada stabilite, tamamlama, acil stoplar.", "Yük planı, yükleme bilgisayarı çıktıları, transfer öncesi toplantı", "Değişiklikten sonra planın güncellenmemesi."]);
S("8.99.2", "MS CO 2O 3O", 1, "Gemi/Terminal Emniyet Kontrol Listesi (SSSCL)",
  C("B4 §2.3.8 Ship/Shore Interface Meeting",
    "Before any cargo operation, and as soon as possible after berthing, the Chief Officer meets the terminal representative and agrees cargoes and quantities, sequence and rates, who stops loading on completion, the emergency shutdown procedure and location, safety regulations, emergency signals and communications. The Ship/Shore Safety Checklist is completed and signed by both sides.",
    "Her yük operasyonundan önce ve yanaştıktan sonra en kısa sürede Birinci Zabit terminal temsilcisiyle toplanır; yükler ve miktarlar, sıra ve hızlar, bitişte yüklemeyi kimin durduracağı, acil durdurma prosedürü ve yeri, emniyet kuralları, acil durum işaretleri ve haberleşme üzerinde anlaşılır. Gemi/Sahil Emniyet Kontrol Listesi iki tarafça doldurulup imzalanır."),
  ["The ISGOTT checklist is completed jointly with the terminal and repetitive checks are done at the agreed intervals.", "ISGOTT SSSCL", "Checklist ticked in advance."],
  ["ISGOTT listesi terminalle birlikte doldurulur ve tekrarlı kontroller kararlaştırılan aralıklarla yapılır.", "ISGOTT SSSCL", "Listenin önceden işaretlenmesi."]);
S("8.99.3", "CO 2O 3O DR", 0, "Yük operasyonu ekip yapısı",
  C("B4 §2.2.5 Officer of the Watch · §2.2.6 Deck Watch",
    "The OOW follows the cargo plan approved by the Master, checks and logs hourly rates (Form 2910), checks the line-up before starting, supervises third parties and the crew at hose connection, and stops the operation if anything is unsafe. The deck watch makes frequent rounds — moorings, gangway, firefighting equipment, scuppers, leaks — keeps the manifold tended at all times and maintains radio contact with the OOW, CCR and Chief Officer.",
    "Vardiya zabiti Kaptanın onayladığı yük planını izler, saatlik hızları kontrol edip kaydeder (Form 2910), başlamadan önce hat dizilimini kontrol eder, üçüncü tarafları ve hortum bağlantısında tayfayı denetler, emniyetsiz bir durumda operasyonu durdurur. Güverte vardiyası sık tur atar — palamarlar, iskele, yangın ekipmanı, frengiler, sızıntılar — manifoldu sürekli gözetir ve vardiya zabiti, CCR ve Birinci Zabitle telsiz irtibatını korur."),
  ["Deck watch: rounds at manifold and tanks, check moorings and gangway; on a leak stop the operation and raise the alarm.", "Cargo watch checklist", "Watchman stays in the shelter."],
  ["Güverte vardiyası: manifold ve tank turları, palamar ve iskele kontrolü; sızıntıda operasyonu durdur, alarm ver.", "Yük vardiyası kontrol listesi", "Vardiyacının barınakta kalması."]);
S("8.99.4", "CO 2O DR", 0, "Yük ve balast valflerinin testi",
  C("B4 §9.3.14 Valves and Blanking Devices · §9.3.4", "Valves not in regular use are operated monthly; all valves are tested annually and recorded on Form 3403; blanking devices are swung or operated every six months. Hydraulic valve actuating systems are inspected under operating conditions every three months.", "Düzenli kullanılmayan valfler her ay çalıştırılır; tüm valfler yılda bir test edilip Form 3403'e kaydedilir; kör flanş/blanking cihazları altı ayda bir çevrilir veya çalıştırılır. Hidrolik valf tahrik sistemleri üç ayda bir çalışma koşullarında muayene edilir."),
  ["Show the valve test record and an indicator check.", "Form 3403", "Remote indicator does not match valve position."],
  ["Valf test kaydını ve gösterge kontrolünü gösterin.", "Form 3403", "Uzaktan göstergenin valf konumuyla uyuşmaması."]);
S("8.99.5", "CO ETO", 0, "Sabit yük tankı seviye ölçüm sistemi",
  C("B4 §9.3.8 Tank Level Gauges",
    "Fixed gauges are verified against independent UTI/MMC readings before, during and after cargo operations (Form 3508), compared with the empty-tank reference height at least every 6 months (Form 3514), and calibrated by a shore technician at least every 12 months. In-tank components are inspected at least every 12 months.",
    "Sabit göstergeler yük operasyonu öncesi, sırası ve sonrasında bağımsız UTI/MMC ölçümleriyle doğrulanır (Form 3508), en az 6 ayda bir boş tank referans yüksekliğiyle karşılaştırılır (Form 3514) ve en az 12 ayda bir kara teknisyenince kalibre edilir. Tank içi bileşenler en az 12 ayda bir muayene edilir."),
  ["Show the last comparison and what tolerance you accept.", "Forms 3508 / 3514", "Difference not recorded."],
  ["Son karşılaştırmayı ve kabul ettiğiniz toleransı gösterin.", "Form 3508 / 3514", "Farkın kaydedilmemesi."]);
S("8.99.6", "MS CO 2O 3O", 1, "Stabilite ve yükleme bilgisayarı",
  C("B4 §3.6 Cargoes with High Specific Gravity · §3.2.1.7 Stability", "High-density cargoes are stowed strictly per the loading manual; the plan is verified by entering the calculated weights in the loading computer and checking SF/BM. Damage stability is calculated before loading high-density cargoes if the voyage is not covered by the stability booklet.", "Yüksek yoğunluklu yükler kesinlikle yükleme el kitabına göre istiflenir; plan, hesaplanan ağırlıklar yükleme bilgisayarına girilerek ve SF/BM kontrol edilerek doğrulanır. Sefer stabilite kitapçığında yoksa yüksek yoğunluklu yük öncesi hasarlı stabilite hesaplanır."),
  ["Show intermediate stages and free-surface effect.", "Loading computer printouts, class approval", "Only the final condition calculated."],
  ["Ara aşamaları ve serbest yüzey etkisini gösterin.", "Yükleme bilgisayarı çıktıları, klas onayı", "Yalnızca son kondisyonun hesaplanması."]);
S("8.99.7", "MS CO", 0, "Yükleme sınırlamaları",
  C("B4 §3.6", "The appendix to the Classification Certificate is checked for limits on filling heights in cargo tanks.", "Klas Sertifikası ekindeki yük tankı doluluk yüksekliği sınırları kontrol edilir."),
  ["Know any sloshing or partial-filling restrictions.", "Class certificate appendix", "Restriction unknown to officers."],
  ["Çalkalanma veya kısmi doluluk kısıtlarını bilin.", "Klas sertifikası eki", "Kısıtın zabitlerce bilinmemesi."]);
S("8.99.8", "CO DR", 0, "Yük transfer hortumları",
  C("B4 §9.3.18 Flexible Cargo Hoses · §3.13",
    "Ship's cargo hoses are pressure-tested hydrostatically to 1.5 × working pressure when supplied and annually after, recorded on Form 3401 with the certificate kept. Each hose is individually numbered and stamped with its maximum working pressure and test date, is visually checked before each use, and defective hoses are marked and never used.",
    "Gemi yük hortumları teslimde ve sonra yılda bir çalışma basıncının 1,5 katında hidrostatik test edilir, Form 3401'e kaydedilir ve sertifikası saklanır. Her hortum ayrı numaralıdır, azami çalışma basıncı ve test tarihi damgalıdır, her kullanımdan önce gözle kontrol edilir; hasarlı hortumlar işaretlenir ve asla kullanılmaz."),
  ["Show a hose's number, MWP and test date.", "Form 3401", "Hose without marking."],
  ["Bir hortumun numarasını, MWP'sini ve test tarihini gösterin.", "Form 3401", "İşaretsiz hortum."]);
S("8.99.9", "CO 2O 3O", 0, "Yük/balast kontrol, gösterge ve mimik panoları",
  C("B4 §9.3.17 Measuring Equipment · §2.4.6.4",
    "Cargo system pressure gauges must work and their accuracy is checked at least once during cargo operations. All portable and fixed gauges are checked against a reference gauge every six months (Form 3506); each gauge has a unique ID, any correction is marked above it, and a gauge with a correction over 6% of its range is taken out of service. A vent-system mimic board in the CCR shows the position of each valve.",
    "Yük sistemi basınç göstergeleri çalışır olmalı ve doğruluğu her yük operasyonunda en az bir kez kontrol edilmelidir. Tüm portatif ve sabit göstergeler altı ayda bir referans göstergeyle karşılaştırılır (Form 3506); her göstergenin kimlik numarası vardır, düzeltme değeri üzerine yazılır, düzeltmesi ölçek aralığının %6'sını aşan gösterge servisten alınır. CCR'deki vent mimik panosu her valfin konumunu gösterir."),
  ["Mimic and indicators match valve positions; alarms understood.", "CCR checks", "Mimic shows a valve open that is closed."],
  ["Mimik ve göstergeler valf konumlarıyla uyumlu; alarmlar biliniyor.", "CCR kontrolleri", "Mimiğin kapalı valfi açık göstermesi."]);
S("8.99.10", "CO DR", 0, "Yük sistemi topraklama (bonding) düzeni",
  C("B4 §9.3.20 Electrical Bonding Arrangements", "Electrical bonding of cargo lines and associated pipework (P/V valves, vapour return line etc.) is checked under the PMS.", "Yük hatları ve ilgili boruların (P/V valfleri, buhar dönüş hattı vb.) elektriksel topraklaması PMS kapsamında kontrol edilir."),
  ["Show bonding straps and the PMS record.", "PMS", "Bonding strap missing."],
  ["Topraklama şeritlerini ve PMS kaydını gösterin.", "PMS", "Topraklama şeridinin eksik olması."]);
S("8.99.11", "CO 2O 3O DR", 1, "Yük hattı diziliminin bağımsız doğrulanması",
  C("B4 §2.3.4.1 Setting of Lines",
    "Line setting is directly supervised by the Chief Officer. Before, during and on completion of the operation a physical cross-check of valves, vents and overboard connections is done with Form 2902 (Pre-Arrival & Departure Loading/Discharging Port), and the whole piping system is checked to confirm the correct line-up. Remotely operated valves that cannot be lashed are labelled 'TO REMAIN CLOSED' on the console.",
    "Hat dizilimi doğrudan Birinci Zabit tarafından denetlenir. Operasyondan önce, sırasında ve bitiminde valfler, ventler ve borda bağlantıları Form 2902 (Pre-Arrival & Departure Loading/Discharging Port) ile fiziksel olarak çapraz kontrol edilir ve tüm boru sisteminin doğru dizildiği teyit edilir. Bağlanamayan uzaktan kumandalı valfler konsolda 'KAPALI KALACAK' diye etiketlenir."),
  ["A second person checks the line-up before starting and records it.", "Line-up checklist", "Line-up checked by the same person who set it."],
  ["Başlamadan önce dizilimi ikinci bir kişi kontrol eder ve kaydeder.", "Dizilim kontrol listesi", "Dizilimi kuran kişinin kendisinin kontrol etmesi."]);
