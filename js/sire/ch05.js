/* SIRE 2.0 · Chapter 5 — Safety Management */

const DRILLS = C("B6 §2.1 Drills",
  "Drills are carried out for the identified emergencies as per the Company's 'SF 05 – Annual Drill Programme and Records'. Every drill is entered in the deck log book and a Drill Report form is completed detailing the personnel involved and any problems encountered. If a planned drill cannot be done in time, the Company is told the reason, the crew are briefed on the scenario and their duties, and a training session is held in lieu.",
  "Talimler, Şirketin 'SF 05 – Yıllık Talim Programı ve Kayıtları'na göre tanımlı acil durumlar için yapılır. Her talim güverte jurnaline işlenir ve katılan personeli ve karşılaşılan sorunları içeren Talim Rapor formu doldurulur. Planlı bir talim zamanında yapılamazsa Şirkete nedeni bildirilir, personele senaryo ve görevleri anlatılır ve yerine bir eğitim yapılır.");
const B6 = (sec, en, tr, extraEn, extraTr) => C("B6 §" + sec + " · §2.1 Drills",
  "The emergency is handled with the B6 action checklist '" + en + "', which assigns each step to the Master, C/E, C/O, 2/E, OOW and others. " + (extraEn || "Drills follow the SF 05 Annual Drill Programme and are recorded in the deck log and on the Drill Report form."),
  "Acil durum, her adımı Kaptan, Başmühendis, Birinci Zabit, İkinci Mühendis, vardiya zabiti ve diğerlerine atayan B6 eylem kontrol listesi '" + tr + "' ile yönetilir. " + (extraTr || "Talimler SF 05 Yıllık Talim Programı'na göre yapılır ve güverte jurnaline ve Talim Rapor formuna kaydedilir."));

const FIRE = C("B2 §2.5.3 Fire Precautions, Firefighting Equipment · §2.7",
  "All fire appliances, including those in machinery spaces, are examined and maintained by the Safety Officer to the safety equipment maintenance schedule (Forms 3701 / 3801). Fire hoses are rolled out and pressure-tested at regular intervals and nozzles tested for spray, jet and shut-off. The emergency fire pump and other emergency machinery are tested as per SMS routines. Mandatory checks of fixed systems are done by an authorised shore service.",
  "Makine daireleri dahil tüm yangın ekipmanı, Emniyet Zabiti tarafından emniyet ekipmanı bakım programına (Form 3701 / 3801) göre muayene edilir ve bakımı yapılır. Yangın hortumları düzenli aralıklarla açılıp basınç testi yapılır; lanslar püskürtme, tazyik ve kapama için test edilir. Acil yangın pompası ve diğer acil makineler SMS rutinlerine göre test edilir. Sabit sistemlerin zorunlu kontrolleri yetkili kara servisi tarafından yapılır.");

/* ── 5.1 Emergency drills ── */
S("5.1.1", "MS CO CE", 0, "Zorunlu ve şirket tanımlı talimlerin kayıtları", DRILLS,
  ["Drills are realistic and varied, debriefed with genuine lessons learned.", "SF 05 drill programme, Drill Reports, deck log", "Identical drill reports every month with 'no deficiency'."],
  ["Talimler gerçekçi ve çeşitli; gerçek derslerle değerlendiriliyor.", "SF 05 talim programı, Talim Raporları, güverte jurnali", "Her ay 'eksiklik yok' yazan aynı talim raporları."]);
S("5.1.2", "MS CO CE 2E", 1, "Başlıca yangın senaryoları için plan ve talimler",
  B6("2.3.6 / 2.3.26 / 2.3.27 / 2.3.29 / 2.3.45", "Fire on Accommodation, Pumproom, Deck/Cargo Area, at Berth, Engine Room", "Yaşam mahalli, pompa dairesi, güverte/yük alanı, rıhtımda ve makine dairesinde yangın"),
  ["Explain your role in an engine-room fire and in a cargo-deck fire.", "Fire plans, Drill Reports", "Same scenario used every time."],
  ["Makine dairesi yangınında ve yük güvertesi yangınında görevinizi anlatın.", "Yangın planları, Talim Raporları", "Her seferinde aynı senaryonun kullanılması."]);
S("5.1.3", "MS CO", 0, "SOPEP/SMPEP kirlilik talimleri",
  B6("2.3.36", "Oil/Bunker or Chemical Pollution – Spill & Tank Overflow", "Yağ/Bunker veya Kimyasal Kirlilik – Dökülme ve Tank Taşması"),
  ["SOPEP drill recorded; crew know the locker contents.", "SOPEP/SMPEP, Drill Reports", "SOPEP locker incomplete."],
  ["SOPEP talimi kayıtlı; personel dolap içeriğini biliyor.", "SOPEP/SMPEP, Talim Raporları", "SOPEP dolabının eksik olması."]);
S("5.1.4", "MS CO 2E DR ER", 1, "Kapalı alan kurtarma talimi",
  B6("2.3.37", "Rescue of Person from Enclosed Spaces", "Kapalı Mahalden Personel Kurtarma", "Steps: sound the general alarm, inform the Master, announce on PA, establish location and number of casualties, muster rescue and medical teams, restrict the area and check rescue equipment before anyone goes in. Drills at least every two months (SOLAS III/19).", "Adımlar: genel alarmı çal, Kaptana bildir, anons yap, yeri ve kazazede sayısını belirle, kurtarma ve sağlık ekiplerini topla, alanı kısıtla ve kimse girmeden önce kurtarma ekipmanını kontrol et. Talimler en az iki ayda bir (SOLAS III/19)."),
  ["Show the rescue equipment (tripod, stretcher, SCBA) and explain the attendant's actions.", "Drill Reports, rescue equipment check", "Rescue equipment not ready at the entry point."],
  ["Kurtarma ekipmanını (tripod, sedye, SCBA) gösterin ve bekçinin yapacaklarını anlatın.", "Talim Raporları, kurtarma ekipmanı kontrolü", "Kurtarma ekipmanının giriş noktasında hazır olmaması."]);
S("5.1.5", "MS CO", 0, "Gemi Güvenlik Planı talimleri",
  B6("2.3.20 / 2.3.21 / 2.3.24", "Piracy/Armed Robbery, Unauthorized Visitor/Stowaway, Suspicious Items & Bomb Search", "Korsanlık/Silahlı Soygun, Yetkisiz Ziyaretçi/Kaçak Yolcu, Şüpheli Paket ve Bomba Araması"),
  ["Security drills at least every three months; the SSO can explain the last scenario.", "SSP drill records", "Security drills not recorded."],
  ["Güvenlik talimleri en az üç ayda bir; SSO son senaryoyu anlatabiliyor.", "SSP talim kayıtları", "Güvenlik talimlerinin kaydedilmemesi."]);
S("5.1.6", "ALL", 0, "Filika indirme ve gemiyi terk talimleri",
  C("B6 §2.3.9 Abandon Vessel · B2 §2.6.2.2 Three-Monthly Tests",
    "Abandon-ship actions follow the B6 'Abandon Vessel' checklist (including taking GMDSS radios, SARTs and EPIRB). At intervals not exceeding three months every lifeboat is lowered into the water and taken away from the ship's side by its assigned crew.",
    "Gemiyi terk, B6 'Abandon Vessel' kontrol listesine göre yapılır (GMDSS telsizleri, SART ve EPIRB'in alınması dahil). Her filika en fazla üç ayda bir indirilir ve görevli ekibiyle bordadan uzaklaştırılır."),
  ["State your muster station and duties without looking; know the general alarm (7 short + 1 long).", "Muster list, cabin cards", "New crew member does not know their duty."],
  ["Toplanma yerinizi ve görevinizi bakmadan söyleyin; genel alarmı (7 kısa + 1 uzun) bilin.", "Toplanma listesi, kamara kartları", "Yeni personelin görevini bilmemesi."]);
S("5.1.7", "MS CO 2O 3O DR", 1, "Yük buharı/sıvısı salınımı (toksik dahil)",
  B6("2.3.31 / 2.3.38", "Toxic Liquid/Vapour Release at Sea or at Anchor / at Terminal", "Denizde veya Demirde / Terminalde Toksik Sıvı/Buhar Salınımı", "Escape breathing sets of 15 minutes' duration are provided; an emergency squad in full BA and chemical suits guides the escape route (B4 §3.2.1.6).", "15 dakikalık kaçış solunum setleri bulunur; tam solunum cihazı ve kimyasal elbiseli acil ekip kaçış yolunu gösterir (B4 §3.2.1.6)."),
  ["Explain alarms, shutting accommodation air intakes and where the escape sets are.", "Emergency plan, Drill Reports", "Crew unaware of escape set locations."],
  ["Alarmları, yaşam mahalli hava girişlerinin kapatılmasını ve kaçış setlerinin yerini anlatın.", "Acil durum planı, Talim Raporları", "Personelin kaçış seti yerlerini bilmemesi."]);
S("5.1.8", "MS 2O 3O CE", 1, "Çatışma planı ve talimi", B6("2.3.5", "Collision / Allision", "Çatışma / Çarpma"),
  ["Explain your first actions after a collision.", "Drill Reports", "Damage control duties unclear."],
  ["Çatışma sonrası ilk yapacaklarınızı anlatın.", "Talim Raporları", "Hasar kontrol görevlerinin belirsiz olması."]);
S("5.1.9", "MS 2O 3O CE", 1, "Karaya oturma planı ve talimi", B6("2.3.7", "Grounding – Stranding", "Karaya Oturma – Oturtma"),
  ["Explain soundings, stability check and reporting after grounding.", "Drill Reports", "No sounding plan for tanks after grounding."],
  ["Karaya oturma sonrası iskandil, stabilite kontrolü ve raporlamayı anlatın.", "Talim Raporları", "Oturma sonrası tank iskandil planı olmaması."]);
S("5.1.10", "MS 3O CE 2E", 1, "Sevk kaybı planı ve talimi", B6("2.3.1", "Main Engine Failure & Emergency Stop", "Ana Makine Arızası ve Acil Stop"),
  ["Bridge and engine room know their actions and communication on loss of propulsion.", "Drill Reports", "No drill in restricted waters scenario."],
  ["Sevk kaybında köprüüstü ve makine dairesi eylemlerini ve iletişimi biliyor.", "Talim Raporları", "Kısıtlı sularda senaryo hiç çalışılmamış."]);
S("5.1.11", "MS 3O CE 2E ETO", 1, "Elektrik kesintisi (blackout) planı ve talimi", B6("2.3.41 / 2.3.42", "Dead Ship – Electrical Power Failure / Re-starting Plant from Zero Level", "Ölü Gemi – Elektrik Kesintisi / Tesisi Sıfırdan Başlatma"),
  ["Explain how power is restored and which equipment the emergency generator supplies.", "Drill Reports, blackout test", "Engineers unsure of the restart sequence."],
  ["Gücün nasıl geri verildiğini ve acil jeneratörün neleri beslediğini anlatın.", "Talim Raporları, karartma testi", "Mühendislerin yeniden başlatma sırasını bilmemesi."]);
S("5.1.12", "MS 2O 3O CE 2E ETO", 1, "Dümen arızası talimi", B6("2.3.2", "Steering System Failure", "Dümen Arızası", "Emergency steering drills at least every three months (SOLAS V/26).", "Acil dümen talimleri en az üç ayda bir (SOLAS V/26)."),
  ["Show emergency steering from the steering gear room and the communication with the bridge.", "Emergency steering drill records", "No working communication in the steering gear room."],
  ["Dümen dairesinden acil dümeni ve köprüüstüyle iletişimi gösterin.", "Acil dümen talim kayıtları", "Dümen dairesinde çalışan iletişim olmaması."]);
S("5.1.13", "MS CO DR", 0, "Acil yedekleme (emergency towing) planı ve talimi",
  C("B6 §2.3.15 Salvage & Line Throwing & ETA · B3 §8.3.6 Emergency Towing Team Duties", "Emergency towing follows the B6 checklist and the duties of the emergency towing team set out in B3.", "Acil yedekleme, B6 kontrol listesine ve B3'te tanımlı acil yedekleme ekibi görevlerine göre yapılır."),
  ["Explain the ship-specific emergency towing booklet and equipment.", "ETB, Drill Reports", "Crew unaware of the towing arrangement."],
  ["Gemiye özel acil yedekleme kitapçığını ve ekipmanını anlatın.", "ETB, Talim Raporları", "Personelin yedekleme düzeninden habersiz olması."]);
S("5.1.14", "ALL", 1, "Denize adam düşmesi talimi",
  C("B6 §2.3.10 Man Overboard",
    "Checklist actions: post a look-out to keep the person in sight, switch to manual steering and start a Williamson turn to the side of the casualty, record position and time, sound the general alarm and announce on PA, and call the engine room for manoeuvring.",
    "Kontrol listesi: kişiyi gözden kaybetmemek için gözcü görevlendir, elle dümene geç ve düşülen tarafa Williamson dönüşü başlat, mevki ve saati kaydet, genel alarmı çal ve anons yap, makine dairesini manevraya hazırla."),
  ["Shout 'man overboard' and the side, throw the nearest lifebuoy, keep pointing, report to the bridge.", "MOB drill records, lifebuoy plan", "Crew unaware of the nearest lifebuoy."],
  ["'Denize adam düştü' ve tarafı bağır, en yakın can simidini at, göstermeye devam et, köprüüstüne bildir.", "MOB talim kayıtları, can simidi planı", "Personelin en yakın can simidini bilmemesi."]);
S("5.1.15", "ALL", 0, "Denizden insan kurtarma planı ve talimi", C("B6 §2.3.10 Man Overboard", "Recovery of persons from the water follows the ship-specific recovery plan and the muster-list duties.", "Denizden insan kurtarma, gemiye özel kurtarma planına ve toplanma listesi görevlerine göre yapılır."));
S("5.1.16", "MS CO CE 2E", 1, "Su basması planı ve talimi", B6("2.3.8 / 2.3.44", "Flooding / Engine Room Flooding", "Su Basması / Makine Dairesine Su Basması"),
  ["Explain damage control and bilge pumping arrangements.", "Drill Reports", "Emergency bilge suction unknown."],
  ["Hasar kontrolünü ve sintine basma düzenini anlatın.", "Talim Raporları", "Acil sintine emişinin bilinmemesi."]);
S("5.1.18", "MS CO 2O 3O", 1, "Çift cidar mahallerine yük sızıntısı",
  C("B4 §7.4.5 Cargo Tank Leakage into Double Hull Spaces · B6 §2.3.32",
    "If cargo is suspected in a double-hull space: measure the atmosphere at different levels and as many points as possible, inform the Company, and keep the space safe by continuous ventilation or inerting; the B6 checklist 'Oil/Cargo Leakage in D/B, Side Spaces, Cofferdam' applies.",
    "Çift cidar mahaline yük sızdığından şüphelenilirse: atmosferi farklı seviyelerde ve çok noktada ölç, Şirkete bildir ve mahali sürekli havalandırma veya inertleme ile emniyette tut; B6 'Çift dip, yan mahal, koferdamda yağ/yük sızıntısı' kontrol listesi uygulanır."),
  ["Explain how you would detect and handle leakage into a ballast tank.", "Gas readings of double-hull spaces", "No routine gas checks."],
  ["Balast tankına sızıntıyı nasıl tespit edip yöneteceğinizi anlatın.", "Çift cidar gaz ölçümleri", "Rutin gaz ölçümü yapılmaması."]);

/* ── 5.2 Fixed fire systems ── */
S("5.2.1", "ALL", 1, "Acil yangın pompası", FIRE,
  ["Start the pump locally and remotely, show suction/priming and the isolating valve.", "Weekly test records, PMS", "Pump runs but cannot take suction."],
  ["Pompayı yerinden ve uzaktan çalıştırın, emiş/hava almayı ve izolasyon valfini gösterin.", "Haftalık test kayıtları, PMS", "Pompanın çalışıp emiş yapamaması."]);
S("5.2.2", "MS CO 3O CE 2E ETO DR ER", 0, "Yangın damperleri ve havalandırma stopları", FIRE,
  ["Show where the dampers and ventilation stops are and that they are marked and work.", "PMS tests", "Seized damper; unmarked stop."],
  ["Damperlerin ve havalandırma stoplarının yerini, işaretli ve çalışır olduğunu gösterin.", "PMS testleri", "Sıkışmış damper; işaretsiz stop."]);
S("5.2.3", "3O ETO CE 2E", 0, "Sabit yangın algılama ve alarm sistemi",
  C("B2 §2.5.3 · §2.7 Maintenance of Fire Fighting and Life Saving Equipment",
    "The fire detection system is tested every week, and every detector is tested at least once within 90 days. If any part of the system is isolated, a notice giving the reason is posted on the control unit and the Master, Chief Engineer and duty deck officer are informed.",
    "Yangın algılama sistemi her hafta test edilir ve her dedektör en az 90 günde bir test edilir. Sistemin herhangi bir bölümü devre dışı bırakılırsa kontrol panosuna nedeni yazılı bir uyarı asılır ve Kaptan, Başmühendis ve nöbetçi güverte zabiti bilgilendirilir."),
  ["Show the detector test rotation and any isolated zone with its notice.", "Detector test records", "Zone left isolated after hot work."],
  ["Dedektör test rotasyonunu ve varsa devre dışı bölgeyi uyarısıyla gösterin.", "Dedektör test kayıtları", "Sıcak çalışma sonrası bölgenin devre dışı unutulması."]);
S("5.2.4", "CE 2E MS", 1, "Makine dairesi sabit CO₂ sistemi", FIRE,
  ["Talk through the release: muster and count, stop ventilation and fuel pumps, close openings, Master's order, pre-discharge alarm.", "CO₂ release instructions, service report", "Engineer unsure of the valve sequence."],
  ["Boşaltmayı anlatın: toplanma ve sayım, havalandırma ve yakıt pompalarını durdur, açıklıkları kapat, Kaptan emri, ön alarm.", "CO₂ boşaltma talimatı, servis raporu", "Mühendisin valf sırasını bilmemesi."]);
S("5.2.5", "CE 2E", 0, "Makine dairesi yüksek genleşmeli köpük sistemi", FIRE);
S("5.2.6", "CE 2E", 0, "Makine dairesi basınçlı su püskürtme sistemi", FIRE);
S("5.2.7", "ALL", 0, "Yangın pompaları, devre, izolasyon valfleri ve hidrantlar", FIRE,
  ["Show the isolating valve and a hydrant with hose and nozzle ready.", "Fire main tests, hose test records", "Hydrant spindle seized; nozzle missing."],
  ["İzolasyon valfini ve hortum-lansı hazır bir hidrantı gösterin.", "Yangın devresi testleri, hortum test kayıtları", "Hidrant milinin sıkışması; lansın eksik olması."]);
S("5.2.8", "MS CO 2E", 0, "Mutfak yangın önleme ve söndürme",
  C("B2 §2.3.6.8 Galley Stoves and Mechanical Equipment · §2.5.3", "Galley stoves, ovens and other equipment are kept clean and in sanitary condition and are operated safely at all times; fire appliances are maintained to the safety equipment schedule.", "Ocak, fırın ve diğer mutfak ekipmanı temiz ve hijyenik tutulur ve her zaman emniyetli kullanılır; yangın ekipmanı bakım programına göre bakılır."),
  ["Galley hood and duct cleaned, fryer protected, fire blanket and extinguisher in place.", "Duct cleaning records", "Greasy extraction duct."],
  ["Davlumbaz ve kanal temiz, fritöz korumalı, yangın battaniyesi ve söndürücü yerinde.", "Kanal temizlik kayıtları", "Yağlı davlumbaz kanalı."]);
S("5.2.9", "CO 2O 3O", 0, "Güverte su püskürtme sistemi", FIRE);
S("5.2.10", "CO 2E", 0, "Yük pompa dairesi sabit söndürme sistemi", FIRE);
S("5.2.11", "CO 3O", 0, "Sabit kuru kimyevi toz sistemi", FIRE);
S("5.2.12", "3O CO DR", 0, "Boya dolabı sabit söndürme sistemi", FIRE);
S("5.2.13", "CE 2E ETO", 0, "Makine dairesi lokal uygulamalı söndürme sistemi", FIRE);
S("5.2.14", "CO 2E ETO DR", 1, "Yük/balast pompası sıcaklık sensörleri",
  C("B4 §9.3 Periodic Tests", "Cargo pump monitoring and alarms are tested as part of the cargo system periodic tests recorded in the PMS.", "Yük pompası izleme ve alarmları PMS'te kayıtlı yük sistemi periyodik testleri kapsamında test edilir."),
  ["Explain the alarms and trips on the cargo pumps and when they were tested.", "PMS test records", "Temperature sensor test never recorded."],
  ["Yük pompalarındaki alarm ve tripleri ve ne zaman test edildiklerini anlatın.", "PMS test kayıtları", "Sıcaklık sensörü testinin hiç kaydedilmemesi."]);
S("5.2.15", "CO 2O 3O DR", 0, "Güverte köpük sistemi ve portatif aplikatörler", FIRE,
  ["Show the foam monitor and portable applicators; foam concentrate tested.", "Foam analysis certificate", "Foam test overdue."],
  ["Köpük monitörünü ve portatif aplikatörleri gösterin; köpük konsantresi test edilmiş.", "Köpük analiz sertifikası", "Köpük testinin gecikmesi."]);
S("5.2.16", "ALL", 0, "Yangın kapıları", FIRE,
  ["Fire doors self-close and are never held open with wedges.", "PMS checks", "Fire door wedged open."],
  ["Yangın kapıları kendiliğinden kapanıyor ve asla takozla açık tutulmuyor.", "PMS kontrolleri", "Yangın kapısının takozla açık tutulması."]);

/* ── 5.3 Fire-fighting equipment ── */
S("5.3.1", "3O 2O DR ER", 0, "İtfaiyeci donanımı ve SCBA", FIRE,
  ["SCBA cylinders full; you know the low-pressure whistle means leave now.", "SCBA pressure log, service certificates", "Spare cylinders not full."],
  ["SCBA tüpleri dolu; düşük basınç düdüğünün 'hemen çık' demek olduğunu biliyorsunuz.", "SCBA basınç kaydı, servis sertifikaları", "Yedek tüplerin dolu olmaması."]);
S("5.3.2", "ALL", 0, "Yangın hortumları, lanslar ve uluslararası sahil bağlantısı", FIRE);
S("5.3.3", "ALL", 0, "Portatif yangın söndürücüler", FIRE,
  ["Right type for the area, in place, serviced.", "Extinguisher service records", "Extinguisher missing from its bracket."],
  ["Alana uygun tip, yerinde ve servisli.", "Söndürücü servis kayıtları", "Söndürücünün yerinde olmaması."]);
S("5.3.4", "ALL", 0, "Acil Kaçış Solunum Cihazları (EEBD)",
  C("B2 §2.2.2.5 PPE for Different Tasks and Areas",
    "All officers and ratings must be trained in the use of breathing apparatus, EEBDs and resuscitation apparatus and know where they are stowed. Each crew member is provided with an emergency escape respiratory device, marked for escape only and never used for firefighting or cargo work. The Chief Officer ensures there are enough on board and that they are inspected weekly on Form 3703.",
    "Tüm zabit ve tayfalar solunum cihazı, EEBD ve resüsitasyon cihazı kullanımında eğitilmeli ve yerlerini bilmelidir. Her personele yalnız kaçış amaçlı olduğu işaretlenmiş bir acil kaçış solunum cihazı verilir; yangınla mücadele veya yük işlerinde kullanılmaz. Birinci Zabit yeterli sayıda bulunmasını ve Form 3703 ile haftalık kontrol edilmesini sağlar."));
S("5.3.5", "3O CE 2E ER", 0, "Tekerlekli söndürücüler", FIRE);

/* ── 5.4 Life-saving appliances ── */
S("5.4.1", "MS 3O CO 2E DR", 1, "Davitli filikalar, bırakma ve indirme donanımı",
  C("B2 §2.6.1 Lifeboats, Rescue Boats and Life Rafts · §2.6.2 Engines",
    "Lifeboats and their equipment are inspected weekly on Form 3703 and monthly on Forms 3704 and 3705 per the PMS. The Chief Engineer appoints one engineer to check and run the lifeboat and rescue boat engines weekly (Form 3703). Every three months each lifeboat is lowered into the water and manoeuvred by its crew. Nobody is on board a lifeboat or rescue boat while it is being tested or lowered for testing.",
    "Filikalar ve ekipmanı PMS'e göre her hafta Form 3703 ile ve her ay Form 3704 ve 3705 ile muayene edilir. Başmühendis, filika ve kurtarma botu motorlarını her hafta kontrol edip çalıştırmak üzere bir mühendis görevlendirir (Form 3703). Her filika üç ayda bir suya indirilir ve ekibince manevra yaptırılır. Test veya test amaçlı indirme sırasında filika ya da botta kimse bulunmaz."),
  ["Show how the on-load release hook is reset and the indicator checked.", "Forms 3703/3704/3705, annual & 5-yearly service certificates", "Hook not fully reset after a drill."],
  ["Yük altında açılan kancanın nasıl kurulduğunu ve göstergenin kontrolünü gösterin.", "Form 3703/3704/3705, yıllık ve 5 yıllık servis sertifikaları", "Talimden sonra kancanın tam kurulmaması."]);
S("5.4.2", "MS 3O DR", 1, "Serbest düşüşlü filika ve bırakma sistemi",
  C("B2 §2.6.3 Freefall Lifeboats",
    "At least every six months the freefall lifeboat is launched by gravity with its assigned crew and manoeuvred in the water; if this cannot be done, the Company asks the flag state for an extension of up to 12 months.",
    "Serbest düşüşlü filika en az altı ayda bir görevli ekibiyle yerçekimiyle indirilir ve suda manevra yaptırılır; yapılamıyorsa Şirket bayraktan 12 aya kadar uzatma ister."),
  ["Explain seating, belts and the secondary launching arrangement.", "Weekly/monthly LSA checklists", "Crew unsure of the secondary launching method."],
  ["Oturma düzenini, kemerleri ve ikincil indirme düzenini anlatın.", "Haftalık/aylık LSA listeleri", "Personelin ikincil indirme yöntemini bilmemesi."]);
S("5.4.3", "MS 3O CO DR", 0, "Kurtarma botu ve indirme donanımı",
  C("B2 §2.6.1 · §2.6.2", "The rescue boat is inspected weekly on Form 3703 and monthly on Form 3706; its engine is run weekly by the appointed engineer.", "Kurtarma botu her hafta Form 3703 ve her ay Form 3706 ile muayene edilir; motoru görevli mühendis tarafından her hafta çalıştırılır."),
  ["Explain launching, release and recovery of the rescue boat.", "Forms 3703/3706", "Engine not started within the last week."],
  ["Kurtarma botunun indirilmesini, bırakılmasını ve geri alınmasını anlatın.", "Form 3703/3706", "Motorun son bir haftada çalıştırılmaması."]);
S("5.4.4", "3O 2O", 0, "Paraşütlü roket ve halat atma aleti",
  C("B2 §2.6.5 Pyrotechnics", "All rockets, cartridges, smoke floats and hand flares are renewed on or before expiry; expired pyrotechnics are landed to a shore facility. The Safety Officer is responsible for their inspection and maintenance.", "Tüm roketler, kartuşlar, duman şamandıraları ve el fişekleri son kullanma tarihinde veya öncesinde yenilenir; süresi geçenler kara tesisine verilir. Muayene ve bakımlarından Emniyet Zabiti sorumludur."),
  ["Show expiry dates and storage.", "Pyrotechnic inventory", "Expired flares still on the bridge."],
  ["Son kullanma tarihlerini ve muhafazayı gösterin.", "Piroteknik envanteri", "Süresi geçmiş fişeklerin köprüüstünde durması."]);
S("5.4.5", "3O DR", 0, "Can salları, hidrostatik serbest bırakma ve indirme donanımı",
  C("B2 §2.6.1", "Liferafts and hydrostatic releases are inspected weekly on Form 3703 and monthly on Form 3707. Where on-board test equipment is used, liferafts are tested annually by a trained officer and the equipment is sent ashore every 30 months.", "Can salları ve hidrostatik serbest bırakma üniteleri her hafta Form 3703 ve her ay Form 3707 ile muayene edilir. Gemide test ekipmanı kullanılıyorsa sallar eğitimli bir zabit tarafından yıllık test edilir ve ekipman 30 ayda bir karaya gönderilir."),
  ["Show the HRU, weak link and painter arrangement.", "Form 3707, service certificates", "Painter not attached to the weak link."],
  ["HRU, zayıf halka ve palamar bağlantısını gösterin.", "Form 3707, servis sertifikaları", "Palamarın zayıf halkaya bağlı olmaması."]);
S("5.4.6", "3O DR ER", 0, "Can simitleri, ışıkları, duman şamandıraları ve halatları",
  C("B2 §2.6.7 Life Buoys", "Lifebuoys, their lights and smoke floats are IMO and flag approved; lifebuoy lights must be explosion-proof.", "Can simitleri, ışıkları ve duman şamandıraları IMO ve bayrak onaylıdır; can simidi ışıkları patlama korumalı (ex-proof) olmalıdır."),
  ["Know the nearest lifebuoy to your work area.", "LSA plan", "Light not ex-proof on the cargo deck."],
  ["Çalıştığınız alana en yakın can simidini bilin.", "LSA planı", "Yük güvertesinde ex-proof olmayan ışık."]);
S("5.4.7", "ALL", 0, "Daldırma elbiseleri",
  C("B2 §2.6.4 Lifejackets, T.P.A.s and Immersion Suits",
    "One IMO/flag-approved immersion suit is provided for each crew member, with extra suits on the bridge, in the engine control room and at remote survival craft stations for watchkeepers. The Safety Officer inspects immersion suits and TPAs monthly on Form 3714; drills include instruction in donning them.",
    "Her kişi için bir adet IMO/bayrak onaylı daldırma elbisesi bulunur; vardiyadakiler için köprüüstünde, makine kontrol odasında ve uzak can kurtarma istasyonlarında ilave elbise vardır. Emniyet Zabiti daldırma elbiselerini ve TPA'ları Form 3714 ile aylık kontrol eder; talimlerde giyme eğitimi verilir."),
  ["Know where your suit is and don it within two minutes.", "LSA inventory", "Suit wrong size or zip seized."],
  ["Elbisenizin yerini bilin ve iki dakikada giyin.", "LSA envanteri", "Yanlış beden veya sıkışmış fermuar."]);
S("5.4.8", "ALL", 0, "Can yelekleri ve kişisel yüzdürme araçları (PFD)",
  C("B2 §2.6.4 Lifejackets, T.P.A.s and Immersion Suits",
    "One approved lifejacket is provided for each person, with extra lifejackets on the bridge, in the engine control room and at remote survival craft stations, plus one approved children's lifejacket on every fleet vessel. The Safety Officer is responsible for their inspection and maintenance and inspects them monthly on Form 3709.",
    "Her kişi için bir onaylı can yeleği bulunur; köprüüstü, makine kontrol odası ve uzak can kurtarma istasyonlarında ilave can yelekleri ve her filo gemisinde bir onaylı çocuk can yeleği vardır. Muayene ve bakımından Emniyet Zabiti sorumludur, Form 3709 ile aylık kontrol eder."));
S("5.4.9", "3O ETO", 0, "Acil aydınlatma", null,
  ["Emergency lighting tested and working on escape routes and muster stations.", "Test records", "Lamps failed on the escape route."],
  ["Acil aydınlatma test edilmiş; kaçış yollarında ve toplanma yerlerinde çalışıyor.", "Test kayıtları", "Kaçış yolunda yanmayan lambalar."]);

/* ── 5.5 Permit to work ── */
S("5.5.1", "ALL", 1, "Kapalı alana giriş prosedürü",
  C("B2 §2.2.3.1 Entry into Enclosed Spaces · §2.2.1 Basic Safety Rules",
    "Entry is made only when there is no practicable alternative. A work plan meeting and risk assessment are held first, and the entry permit (Form 3602-A, or 3602-B for multiple cargo tanks) is authorised by the Master — every entry needs the Master's approval. Roles: Responsible Person (an officer, who must not enter), Competent Person, and an Attendant who keeps communication and has no other duty. Single-person entry is prohibited. Before entry, steady readings must show: O₂ exactly 20.9%, flammable vapour below 1% LFL, toxics not above 50% of OEL, and CO₂ < 0.5%, CO < 25 ppm, H₂S < 5 ppm. Ventilation is stopped at least 10 minutes before testing, and samples are taken at top, middle and bottom. Personal multi-gas monitors are not used for pre-entry testing.",
    "Giriş yalnızca başka uygulanabilir yol yoksa yapılır. Önce iş planlama toplantısı ve risk değerlendirmesi yapılır; giriş izni (Form 3602-A, çoklu yük tankı için 3602-B) Kaptan tarafından onaylanır — her giriş Kaptan onayı gerektirir. Roller: Sorumlu Kişi (zabit; içeri girmez), Yetkin Kişi ve iletişimi sürdüren, başka görevi olmayan Bekçi. Tek kişiyle giriş yasaktır. Girişten önce sabit ölçümler şunları göstermelidir: O₂ tam %20,9, yanıcı buhar %1 LFL'nin altında, toksikler OEL'in %50'sini aşmayacak; ayrıca CO₂ < %0,5, CO < 25 ppm, H₂S < 5 ppm. Ölçümden en az 10 dakika önce havalandırma durdurulur, numune üst, orta ve alt seviyeden alınır. Kişisel multi-gaz cihazları giriş öncesi ölçümde kullanılmaz."),
  ["Explain the attendant's action if the entrant collapses: never enter, raise the alarm.", "Form 3602-A/B, gas readings, enclosed space register", "Atmosphere tested only at the top; attendant leaves the entrance."],
  ["İçerideki kişi bayılırsa bekçinin yapacağını anlatın: asla girme, alarm ver.", "Form 3602-A/B, gaz ölçümleri, kapalı alan kaydı", "Atmosferin yalnızca üstten ölçülmesi; bekçinin girişten ayrılması."]);
S("5.5.2", "MS CO CE 2E ER", 1, "Sıcak çalışma prosedürü",
  C("B2 §2.2.3.2 Hot Work",
    "The Master first decides whether hot work is justified. Outside the engine-room workshop, hot work needs a risk assessment, safety committee meeting, Company approval and a hot work permit; in the workshop, a risk assessment, safety meeting, Master's approval and a permit. The area must test below 1% LFL and a fire watch is kept. A Gas Free Certificate (Form 3601) is issued before work each day and is valid for a maximum of 8 hours; a hot work permit never exceeds one working day, so work on two days needs two permits. In port, local rules and terminal requirements apply.",
    "Sıcak çalışmanın gerekli olup olmadığına önce Kaptan karar verir. Makine atölyesi dışında sıcak çalışma için risk değerlendirmesi, emniyet komitesi toplantısı, Şirket onayı ve sıcak çalışma izni gerekir; atölyede risk değerlendirmesi, emniyet toplantısı, Kaptan onayı ve izin gerekir. Alan %1 LFL'nin altında ölçülmeli ve yangın gözcüsü bulunmalıdır. Her gün işe başlamadan Gazdan Arındırılmış Sertifikası (Form 3601) düzenlenir ve en fazla 8 saat geçerlidir; sıcak çalışma izni bir iş gününü aşamaz, iki günlük iş için iki izin gerekir. Limanda yerel kurallar ve terminal şartları uygulanır."),
  ["Show the last permit and explain checks of adjacent spaces.", "Hot work permit, Form 3601, risk assessment", "Hot work in the workshop without a permit."],
  ["Son izni gösterin ve bitişik mahallerin kontrolünü anlatın.", "Sıcak çalışma izni, Form 3601, risk değerlendirmesi", "Atölyede izinsiz sıcak çalışma."]);
S("5.5.3", "ALL", 0, "Yüksekte çalışma",
  C("B2 §2.2.1.2 Protection from Falls · §2.2.3.4 Working Overside or Aloft",
    "Anyone working where they could fall more than two metres wears an approved harness attached to a lifeline. The Master gives final approval of the 'Working aloft or over the side' permit. Before work near radio aerials or the radar scanner the OOW is told so that transmissions stop and the radar is isolated; before work on the funnel the duty engineer is told to reduce steam and exhaust.",
    "İki metreden fazla düşme riski olan yerde çalışan herkes can halatına bağlı onaylı emniyet kemeri takar. 'Yüksekte veya borda dışında çalışma' iznine son onayı Kaptan verir. Telsiz antenleri veya radar tarayıcı yakınında çalışmadan önce vardiya zabitine haber verilir, yayın durdurulur ve radar izole edilir; baca üzerinde çalışmadan önce nöbetçi mühendise buhar ve egzozu azaltması için haber verilir."),
  ["Show the permit and harness check.", "Work aloft permit, harness inspection", "Harness worn but not attached."],
  ["İzni ve kemer kontrolünü gösterin.", "Yüksekte çalışma izni, kemer kontrolü", "Kemerin takılı olup bağlanmamış olması."]);
S("5.5.4", "CO DR ER", 1, "Borda dışında çalışma",
  C("B2 §2.2.3.4 Working Overside or Aloft", "When working overside, a life jacket is worn in addition to the safety harness, and a lifebuoy with line is kept ready on deck.", "Borda dışında çalışırken emniyet kemerine ek olarak can yeleği giyilir ve güvertede halatlı can simidi hazır tutulur."),
  ["Explain the permit and why overside work is not done under way.", "Permit", "No lifebuoy at the work site."],
  ["İzni ve seyir halinde borda dışı çalışılmamasının nedenini anlatın.", "İzin", "Çalışma yerinde can simidi olmaması."]);
S("5.5.5", "CE 2E ETO ER", 1, "Elektrikli ekipman üzerinde çalışma",
  C("B2 §2.2.3.6 Electrical Work",
    "Work giving access to exposed terminals, contacts or cable ends needs an Electrical Work Permit authorised by the Master. All work in hazardous areas, including on explosion-proof lighting, needs a permit; bulb changing in the accommodation, bridge and engine room does not. No alarm system is isolated without the Master's and Chief Engineer's permission, and no work affecting the fire main or sprinklers starts without the Master's permission.",
    "Açık terminal, kontak veya kablo uçlarına erişim gerektiren işler Kaptan onaylı Elektrik İş İzni gerektirir. Ex-proof aydınlatma dahil tehlikeli alanlardaki tüm işler izin gerektirir; yaşam mahalli, köprüüstü ve makine dairesinde ampul değişimi gerektirmez. Kaptan ve Başmühendis izni olmadan hiçbir alarm sistemi devre dışı bırakılmaz; yangın devresini veya sprinkleri etkileyen iş Kaptan izni olmadan başlamaz."),
  ["Explain isolation, test for dead and PPE before opening a panel.", "Electrical work permits", "Panel opened live without a permit."],
  ["Pano açmadan önce izolasyon, enerjisizlik testi ve KKD'yi anlatın.", "Elektrik iş izinleri", "İzinsiz canlı pano açılması."]);
S("5.5.6", "CE 2E ETO ER", 1, "Tehlikeli enerjinin kontrolü (LOTO)",
  C("B2 §2.2.3.10 Lock out / Tag out · §2.2.6 Hazardous Energy",
    "All energy is isolated, locked and tagged before servicing. Tags are held and issued by the Chief Engineer or delegated officer; the officer supervising the work signs each tag and only that person may remove it. Unless delegated to the 2nd Engineer, only the Chief Engineer authorises and releases the LOTO permit. Contractors also sign the LOTO permit.",
    "Bakımdan önce tüm enerji izole edilir, kilitlenir ve etiketlenir. Etiketler Başmühendis veya yetki verdiği zabit tarafından tutulur ve verilir; işi denetleyen zabit her etiketi imzalar ve yalnızca o kişi kaldırabilir. İkinci Mühendise devredilmedikçe LOTO iznini yalnızca Başmühendis verir ve kapatır. Yükleniciler de LOTO iznini imzalar."),
  ["Show a lock and tag and explain who may remove them.", "LOTO permits and register", "Breaker off but not locked; tag unsigned."],
  ["Bir kilit ve etiketi gösterin; kimin kaldırabileceğini anlatın.", "LOTO izinleri ve kaydı", "Şalter kapalı ama kilitsiz; etiket imzasız."]);

/* ── 5.6 Gas detection ── */
S("5.6.1", "CO 2O 3O DR", 1, "Portatif ve kişisel gaz ölçüm cihazları",
  C("B2 §2.2.4 Oxygen and Gas Testing Equipment",
    "Before each day's use every portable gas detector gets a mandatory bump test with known calibration gas; bump test records are kept with the entry permit. Multi-gas detectors measure O₂, H₂S, combustible gas (0–100% LFL) and CO. Instruments go ashore for calibration as per the maker. Personal monitors worn inside a space are not suitable for pre-entry testing.",
    "Her taşınabilir gaz dedektörü günlük kullanımdan önce bilinen kalibrasyon gazıyla zorunlu bump testine tabi tutulur; kayıtlar giriş izniyle birlikte saklanır. Multi-gaz dedektörleri O₂, H₂S, yanıcı gaz (%0–100 LFL) ve CO ölçer. Cihazlar üreticiye göre karada kalibre edilir. Mahal içinde taşınan kişisel monitörler giriş öncesi ölçüm için uygun değildir."),
  ["Bump test the meter and read O₂, LEL, H₂S, CO.", "Bump test log, calibration certificates, span gas", "Span gas expired."],
  ["Cihaza bump testi yapın ve O₂, LEL, H₂S, CO okuyun.", "Bump test kaydı, kalibrasyon sertifikaları, span gaz", "Span gazının süresinin dolması."]);
S("5.6.2", "CO 2O DR", 1, "Çift cidar ve çift dip mahallerinde atmosfer ölçümü",
  C("B4 §7.4.5", "Double-hull spaces are tested at different levels and as many points as possible, using suitable instruments, to build a profile of the atmosphere.", "Çift cidar mahalleri atmosfer profilini çıkarmak için uygun cihazlarla farklı seviyelerde ve olabildiğince çok noktada ölçülür."),
  ["Show the fixed sampling lines or portable method and the records.", "Double-hull gas records", "Only one point sampled."],
  ["Sabit numune hatlarını veya portatif yöntemi ve kayıtları gösterin.", "Çift cidar gaz kayıtları", "Tek noktadan ölçüm yapılması."]);
S("5.6.5", "CO 2E ETO DR", 1, "Pompa dairesi sabit gaz algılama sistemi",
  C("B2 §2.2.3.8 Pump Room Entry", "Each pump-room entry is made under Form 3612 'Pump Room Entry Permit'; repeated entries are subject to the same checks and recorded on Form 3612.", "Her pompa dairesi girişi Form 3612 'Pompa Dairesi Giriş İzni' ile yapılır; tekrarlanan girişler aynı kontrollere tabidir ve Form 3612'ye kaydedilir."),
  ["Read the fixed gas detection panel before entry.", "Form 3612, calibration records", "Entry without checking the fixed system."],
  ["Girişten önce sabit gaz algılama panosunu okuyun.", "Form 3612, kalibrasyon kayıtları", "Sabit sistem kontrol edilmeden giriş."]);
S("5.6.6", "CO 2E ETO", 0, "IG mahallerindeki oksijen sensörleri",
  C("B4 §8.2.15 Maintenance and Testing", "IG/N₂ generator oxygen sensors are span-calibrated monthly or before any IG/N₂ operation and the results recorded on Form 3503 for each instrument; all sensors are calibrated where several are fitted.", "IG/N₂ jeneratörü oksijen sensörleri her ay veya her IG/N₂ operasyonundan önce span gazla kalibre edilir ve sonuçlar her cihaz için Form 3503'e kaydedilir; birden fazla sensör varsa hepsi kalibre edilir."),
  ["Show the last calibration.", "Form 3503", "Sensor not calibrated before use."],
  ["Son kalibrasyonu gösterin.", "Form 3503", "Sensörün kullanım öncesi kalibre edilmemesi."]);

/* ── 5.7 Safety management system ── */
S("5.7.1", "MS CE", 0, "Olay inceleme raporları",
  C("B1 §9.5.1 Reporting of Incidents",
    "Accidents, incidents and significant near misses are reported to the Company as soon as possible, preferably by phone. The DPA sets up the investigation team according to actual and potential severity. The Company notifies the oil majors' vetting departments within 48 hours of any significant incident. Reports and lessons learned are sent to the fleet through Fleet Manager ERP and reviewed at shipboard safety meetings.",
    "Kazalar, olaylar ve önemli ramak kalalar Şirkete mümkün olan en kısa sürede, tercihen telefonla bildirilir. DPA, gerçek ve potansiyel ciddiyete göre inceleme ekibini kurar. Şirket önemli olayları 48 saat içinde petrol şirketlerinin vetting bölümlerine bildirir. Raporlar ve alınan dersler Fleet Manager ERP ile filoya gönderilir ve gemi emniyet toplantılarında gözden geçirilir."),
  ["Explain a recent investigation and the corrective actions.", "Incident reports, lessons learned", "Investigation without root cause."],
  ["Yakın tarihli bir incelemeyi ve düzeltici faaliyetleri anlatın.", "Olay raporları, alınan dersler", "Kök neden olmadan inceleme."]);
S("5.7.2", "ALL", 0, "Olay ve ramak kala bildirim prosedürü",
  C("B1 §9.5.1 · §9.12.2 Open Reporting · §9.13.1.2.2",
    "Crew report near misses verbally to a responsible officer or on the near-miss forms kept in the mess rooms, using the locked near-miss boxes (at least one per vessel). The Master opens the boxes at the end of each week and enters every report into Fleet Manager. Every Stop Work intervention is also recorded as a near miss.",
    "Personel ramak kalaları sorumlu zabite sözlü olarak veya yemekhanelerdeki formlarla, kilitli ramak kala kutularını (gemide en az bir adet) kullanarak bildirir. Kaptan kutuları her hafta sonunda açar ve tüm raporları Fleet Manager'a girer. Her İşi Durdurma müdahalesi de ramak kala olarak kaydedilir."),
  ["Give an example of a near miss you reported and what changed.", "Near-miss reports in Fleet Manager", "Very few reports, all by the same officer."],
  ["Bildirdiğiniz bir ramak kalayı ve sonrasında neyin değiştiğini anlatın.", "Fleet Manager'daki ramak kala raporları", "Çok az rapor ve hepsinin aynı zabitten gelmesi."]);
S("5.7.3", "ALL", 0, "Gemi emniyet toplantıları",
  C("B2 §2.5.3 · B1 §9.13 · §9.5.1", "The Ship's Safety Committee, made up of officers and ratings, meets monthly. Incident and near-miss reports from the fleet and good Stop Work examples are reviewed at the safety meetings.", "Zabit ve tayfalardan oluşan Gemi Emniyet Komitesi her ay toplanır. Filodan gelen olay ve ramak kala raporları ile iyi İşi Durdurma örnekleri emniyet toplantılarında ele alınır."),
  ["Explain how you raise a safety concern at the meeting.", "Safety committee minutes", "Minutes copied month to month."],
  ["Toplantıda bir emniyet konusunu nasıl gündeme getirdiğinizi anlatın.", "Emniyet komitesi tutanakları", "Tutanakların aydan aya kopyalanması."]);
S("5.7.4", "ALL", 0, "İş planlama prosedürü",
  C("B3 §2.12 Risk Assessments and Permit to Work · B2 §2.2.3.1.7.1", "Work is planned through risk assessment and, where required, a permit to work; hazardous jobs such as enclosed space entry start with a work plan meeting.", "İşler risk değerlendirmesi ve gerektiğinde iş izni ile planlanır; kapalı alan girişi gibi tehlikeli işler bir iş planlama toplantısıyla başlar."),
  ["Explain where today's planned work and its controls are recorded.", "Work plan, toolbox talk records", "Crew unaware of the day's plan."],
  ["Bugünkü planlı işin ve önlemlerinin nerede kayıtlı olduğunu anlatın.", "İş planı, toolbox kayıtları", "Personelin günün planından habersiz olması."]);
S("5.7.5", "ALL", 1, "İşi Durdurma Yetkisi",
  C("B1 §9.13 Stop Work",
    "Anyone who sees an unsafe condition, act, error or omission starts a 'Stop Work' intervention immediately, directly with those at risk if the supervisor is not available, starting with 'I am using my Stop Work authority because…'. The area is made safe before work continues. No retribution is ever directed at anyone who uses it in good faith; every intervention is recorded as a near miss and good examples are recognised at safety meetings.",
    "Emniyetsiz bir durum, davranış, hata veya ihmal gören herkes derhal 'İşi Durdur' müdahalesi başlatır; amir yoksa doğrudan risk altındakilerle, 'İşi Durdurma yetkimi kullanıyorum çünkü…' diyerek. İşe devam edilmeden önce alan emniyete alınır. İyi niyetle kullanan kimseye asla yaptırım uygulanmaz; her müdahale ramak kala olarak kaydedilir ve iyi örnekler emniyet toplantılarında takdir edilir."),
  ["Give an example of when you stopped a job.", "Near-miss records of SWA", "Crew unaware they have the authority."],
  ["Bir işi durdurduğunuz bir örnek verin.", "SWA ramak kala kayıtları", "Personelin bu yetkiden habersiz olması."]);
S("5.7.6", "ALL", 1, "Yeni, rutin dışı veya plansız işler için risk değerlendirmesi",
  C("B1 §14.2.6 Risk Management · §9.3 Risk Assessment Matrix",
    "New, non-routine and unplanned tasks are risk-assessed on the Risk Assessment Form using the Fleet Manager risk matrix; mitigation measures are put in place before work starts and final approval depends on them. Approved risk assessments are available in the Fleet Manager ERP library, reviewed annually, and familiarisation with them is recorded.",
    "Yeni, rutin dışı ve plansız işler Fleet Manager risk matrisi kullanılarak Risk Değerlendirme Formu ile değerlendirilir; önlemler iş başlamadan uygulanır ve son onay bunlara bağlıdır. Onaylı risk değerlendirmeleri Fleet Manager ERP kütüphanesinde bulunur, yılda bir gözden geçirilir ve personelin bunlara aşinalığı kaydedilir."),
  ["If conditions change during the job: stop and reassess.", "Risk assessments, toolbox talks", "Generic assessment reused unchanged."],
  ["İş sırasında koşullar değişirse: dur ve yeniden değerlendir.", "Risk değerlendirmeleri, toolbox kayıtları", "Genel değerlendirmenin değiştirilmeden kullanılması."]);
S("5.7.7", "ALL", 0, "Güvenlik Bilgi Formları (SDS)",
  C("B4 §5.3.3.6 · §3.2 Hazards Associated with Chemical Cargoes", "Cargo hazards and first aid are taken from the SDS; the cargo compatibility chart is kept at the sample locker.", "Yük tehlikeleri ve ilk yardım SDS'ten alınır; yük uyumluluk tablosu numune dolabında bulundurulur."),
  ["Show the SDS for the cargo on board and its main hazard.", "SDS file", "SDS not available in the CCR."],
  ["Gemideki yükün SDS'ini ve ana tehlikesini gösterin.", "SDS dosyası", "CCR'de SDS olmaması."]);
S("5.7.8", "ALL", 1, "Eş zamanlı operasyonlar (SIMOPS)",
  C("B1 §9.14 Simultaneous Operations",
    "SIMOPS are avoided whenever practicable; if unavoidable they are controlled by a SIMOPS risk assessment, a SIMOPS plan, toolbox meetings and the SIMOPS matrix, which shows combinations that are not permitted. Crew involved in SIMOPS are separated for each activity and have no dual tasks. Examples include inspections (PSC, flag, SIRE) or STS during cargo operations.",
    "SIMOPS mümkün olduğunca yapılmaz; kaçınılamıyorsa SIMOPS risk değerlendirmesi, SIMOPS planı, toolbox toplantıları ve izin verilmeyen kombinasyonları gösteren SIMOPS matrisi ile yönetilir. SIMOPS'taki personel her faaliyet için ayrılır ve çift görev almaz. Örnekler: yük operasyonu sırasında denetimler (PSC, bayrak, SIRE) veya STS."),
  ["Explain how bunkering during cargo operations would be controlled.", "SIMOPS risk assessment and plan", "Same person on cargo watch and bunker watch."],
  ["Yük operasyonu sırasında bunker alımının nasıl yönetileceğini anlatın.", "SIMOPS risk değerlendirmesi ve planı", "Aynı kişinin hem yük hem bunker vardiyasında olması."]);

/* ── 5.8 Safety inspections ── */
const INSP = C("B1 §9.8 Ship Safety Inspection",
  "The Ship Safety Officer (Chief Officer) inspects every accessible part of the ship at least once every three months using ISM Form 0805, divided into seven chapters completed in rotation; defects and non-conformities found are reported.",
  "Gemi Emniyet Zabiti (Birinci Zabit), yedi bölüme ayrılmış ve dönüşümlü doldurulan ISM Form 0805 ile geminin her erişilebilir bölümünü en az üç ayda bir denetler; bulunan arıza ve uygunsuzluklar raporlanır.");
S("5.8.1", "MS CO DR", 0, "Ana güverte ve palamar alanlarının emniyet denetimi", INSP,
  ["Show the last inspection and open items.", "Form 0805", "Corrosion on deck not on the defect list."],
  ["Son denetimi ve açık maddeleri gösterin.", "Form 0805", "Güvertedeki korozyonun arıza listesinde olmaması."]);
S("5.8.2", "CE 2E ER", 0, "Makine dairesinin emniyet denetimi", INSP,
  ["Oily rags in closed metal bins; no oil on tank tops; walkways clear.", "Form 0805", "Oily rags near hot surfaces."],
  ["Yağlı üstüpüler kapaklı metal kutuda; tank üstlerinde yağ yok; geçitler açık.", "Form 0805", "Sıcak yüzey yakınında yağlı üstüpü."]);
S("5.8.3", "CO DR", 1, "Kargo pompa dairesinin emniyet denetimi",
  C("B1 §9.8 · B2 §2.2.3.8 Pump Room Entry", "The pump room is included in the three-monthly safety inspection (ISM Form 0805); every entry is made under Form 3612.", "Pompa dairesi üç aylık emniyet denetimine (ISM Form 0805) dahildir; her giriş Form 3612 ile yapılır."),
  ["Explain ventilation, gas checks and communication before entry.", "Form 3612, Form 0805", "Bilge alarm not tested."],
  ["Girişten önce havalandırma, gaz kontrolü ve iletişimi anlatın.", "Form 3612, Form 0805", "Sintine alarmının test edilmemesi."]);
S("5.8.4", "CO 2E", 0, "Güverte makine dairelerinin emniyet denetimi", INSP);
S("5.8.5", "CO DR", 0, "Baş kasara mahallerinin emniyet denetimi", INSP);
S("5.8.6", "MS CO", 0, "Yaşam mahallerinin emniyet denetimi",
  C("B1 §9.8 · B2 §2.3.6.2 On-board Inspection", "Accommodation is covered by the safety inspection and by the regular hygiene inspections described in B2.", "Yaşam mahalleri emniyet denetimine ve B2'de tanımlanan düzenli hijyen denetimlerine dahildir."));
S("5.8.7", "CO 2E DR ER", 0, "Balast/bunker pompa dairesi emniyet denetimi", INSP);

/* ── 5.9 – 5.12 ── */
S("5.9.1", "ALL", 0, "Kaldırma ve sapanlama ekipmanı",
  C("B2 §2.2.1.5 Precautions on Use of Power Tools · B3 §2.12", "Lifting gear is used only within its SWL and when marked and certified; lifts are risk-assessed.", "Kaldırma ekipmanı yalnızca SWL içinde, işaretli ve sertifikalı ise kullanılır; kaldırmalar için risk değerlendirmesi yapılır."),
  ["No tag / no SWL = do not use.", "Lifting gear register, certificates", "Unmarked sling in use."],
  ["Etiket / SWL yoksa kullanma.", "Kaldırma ekipmanı kaydı, sertifikalar", "İşaretsiz sapan kullanılması."]);
S("5.9.2", "CO 2E", 0, "Tek hortum vincinin yedek parçaları", null,
  ["Critical spares for the only hose-handling crane are on board.", "Spares inventory", "No spare for a critical part."],
  ["Tek hortum vincinin kritik yedekleri gemide.", "Yedek parça envanteri", "Kritik parçanın yedeğinin olmaması."]);
S("5.10.1", "CO 3O DR", 1, "Pilot alma düzeni",
  C("B3 §7.3 Safe Pilot Boarding", "The ship is ready to embark the pilot at the agreed time; the boarding arrangement is properly rigged and manned.", "Gemi, pilotu kararlaştırılan saatte almaya hazırdır; çıkış düzeni usulüne uygun kurulur ve başında personel bulunur."),
  ["Rig the ladder to SOLAS V/23; responsible officer present.", "Pilot ladder records", "Ladder rigged without officer supervision."],
  ["Merdiveni SOLAS V/23'e göre kurun; sorumlu zabit başında.", "Pilot merdiveni kayıtları", "Merdivenin zabit gözetimi olmadan kurulması."]);
S("5.10.2", "CO DR", 0, "Borda iskeleleri (accommodation ladder)",
  C("B2 §2.2.1.4 Safe Means of Access", "A deck officer supervises the initial rigging of the gangway or accommodation ladder and safety net in each port; the full length is lit and a lifebuoy is kept next to it. The 'Gangways and Accommodation Ladders Safe Access Checklist' (Form 3411) is completed whenever one is rigged.", "Her limanda iskele veya borda iskelesi ile emniyet ağının ilk kurulumunu bir güverte zabiti denetler; tüm uzunluk aydınlatılır ve yanında can simidi bulunur. Her kurulumda 'İskele ve Borda İskelesi Emniyetli Erişim Kontrol Listesi' (Form 3411) doldurulur."),
  ["Show the ladder certificate and the last load test.", "Form 3411, test records", "No safety net."],
  ["İskele sertifikasını ve son yük testini gösterin.", "Form 3411, test kayıtları", "Emniyet ağı olmaması."]);
S("5.10.3", "CO DR", 0, "Rıhtımda gemiye emniyetli erişim",
  C("B2 §2.2.1.4 Safe Means of Access", "Same as 5.10.2: lighting along the full length, lifebuoy next to it, officer supervision of rigging and Form 3411.", "5.10.2 ile aynı: tam boy aydınlatma, yanında can simidi, kurulumun zabit denetimi ve Form 3411."),
  ["Gangway adjusted for tide and draft during the watch.", "Form 3411", "Gangway lifted off the quay at low tide."],
  ["Vardiyada iskele gelgit ve drafta göre ayarlanıyor.", "Form 3411", "Alçak suda iskelenin rıhtımdan kalkması."]);
S("5.10.4", "MS CO DR", 1, "Vinçle personel transferi", null,
  ["Transfer only with an approved basket, risk assessment and Master's approval.", "Risk assessment", "Basket not certified."],
  ["Transfer yalnızca onaylı sepet, risk değerlendirmesi ve Kaptan onayıyla.", "Risk değerlendirmesi", "Sepetin sertifikasız olması."]);
S("5.10.5", "MS CO 2O DR", 1, "Helikopter operasyonları",
  C("B2 §2.2.7 Helicopter Operations · B3 §2.26", "Helicopter operations follow the ICS Guide to Helicopter/Ship Operations, with a risk assessment to company procedure and the Company informed beforehand.", "Helikopter operasyonları ICS Helikopter/Gemi Operasyonları Rehberi'ne göre, şirket prosedürüne uygun risk değerlendirmesiyle ve Şirkete önceden bildirilerek yapılır."),
  ["Explain the deck preparation and fire party.", "ICS checklist", "No risk assessment."],
  ["Güverte hazırlığını ve yangın ekibini anlatın.", "ICS kontrol listesi", "Risk değerlendirmesi olmaması."]);
S("5.10.6", "MS CO", 0, "Helikopter alanı donanımı", C("B2 §2.2.7 · B3 §2.26", "See 5.10.5.", "Bkz. 5.10.5."));
S("5.10.7", "ALL", 0, "Kaçış yolları",
  C("B2 §2.5.3 Fire Precautions, Firefighting Equipment",
    "Safe escape routes are provided from machinery spaces, pump rooms, accommodation and, in port, from the vessel; they are kept clear of obstacles and clearly marked. In addition to emergency lighting, stairways and exits are marked with photoluminescent strips not more than 300 mm above the deck at all points of the route, including corners and intersections.",
    "Makine daireleri, pompa daireleri, yaşam mahalleri ve limanda gemiden emniyetli kaçış yolları sağlanır; yollar engelsiz ve açıkça işaretli tutulur. Acil aydınlatmaya ek olarak merdiven ve çıkışlar, köşe ve kesişimler dahil yolun her noktasında güverteden en fazla 300 mm yükseklikte fotolüminesan şeritlerle işaretlenir."));
S("5.11.1", "CO CE 2E DR", 0, "Yük ve bunker numune yönetimi",
  C("B4 §5.3.3.6 Storing Cargo Samples · §5.3.3.4 Open Gauging and Sampling",
    "Samples are labelled with voyage, cargo, origin, date and tank and kept in the designated, ventilated sample locker in the cargo deck area — never in the accommodation. Reactive samples are kept apart and the compatibility chart is at the locker. Form 3210 'Sample Locker Inventory' is kept up to date and displayed. Non-self-reactive samples are kept for three months after discharge, then landed or disposed of properly. Open sampling needs explicit permission from Head Office.",
    "Numuneler sefer, yük, menşe, tarih ve tank bilgisiyle etiketlenir ve yük güvertesindeki havalandırmalı numune dolabında tutulur — asla yaşam mahallinde değil. Reaktif numuneler ayrı tutulur ve uyumluluk tablosu dolapta bulunur. Form 3210 'Numune Dolabı Envanteri' güncel tutulur ve asılır. Kendiliğinden reaksiyona girmeyen numuneler tahliyeden sonra üç ay saklanır, sonra karaya verilir veya usulüne uygun bertaraf edilir. Açık numune alma için Merkez Ofisin açık izni gerekir."),
  ["Show the sample locker and Form 3210.", "Form 3210, MARPOL bunker samples", "Samples in the accommodation."],
  ["Numune dolabını ve Form 3210'u gösterin.", "Form 3210, MARPOL bunker numuneleri", "Numunelerin yaşam mahallinde tutulması."]);
S("5.12.1", "ALL", 0, "Solunum koruyucu ekipman",
  C("B2 §2.2.2 Protective Clothing and Equipment (PPE) · B4 §3.2.1.6", "Anyone required to use protective equipment is trained in its use and limitations; instructions are kept with the equipment. Escape breathing sets of 15 minutes are provided for toxic cargo emergencies.", "Koruyucu ekipman kullanması gereken herkes kullanımı ve sınırları konusunda eğitilir; talimatlar ekipmanın yanında tutulur. Toksik yük acil durumları için 15 dakikalık kaçış solunum setleri bulunur."),
  ["Choose the right respiratory protection for the cargo.", "PPE matrix", "Wrong filter type for the cargo."],
  ["Yüke uygun solunum korumasını seçin.", "KKD matrisi", "Yüke uygun olmayan filtre tipi."]);
S("5.12.2", "CO DR ER", 0, "Dekontaminasyon duşları ve göz yıkama",
  C("B2 §2.2.2.5 PPE for Different Tasks and Areas",
    "Decontamination showers and eye washes are provided on deck and must be operable in all ambient conditions. The Chief Officer ensures they work and that they are inspected and maintained monthly on Form 3712.",
    "Güvertede dekontaminasyon duşları ve göz yıkama istasyonları bulunur ve her hava koşulunda çalışır olmalıdır. Birinci Zabit bunların çalışır durumda olmasını ve Form 3712 ile aylık muayene ve bakımının yapılmasını sağlar."),
  ["Showers and eyewash work, are frost-protected and tested.", "Test records", "Eyewash bottle expired or shower frozen."],
  ["Duş ve göz yıkama çalışıyor, dona karşı korunmuş ve test edilmiş.", "Test kayıtları", "Göz yıkama şişesinin süresinin dolması veya duşun donması."]);
