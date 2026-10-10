/* SIRE 2.0 · Chapter 4 — Navigation & Communications */

S("4.1.1", "MS 2O 3O CO", 1, "ECDIS kurulumu ve kullanımı",
  C("B3 §5.3 Safety Settings in ECDIS Display · §5.2.2 Familiarisation Trainings · §4.4.20",
    "ECDIS visual and audible alarms are kept ON at all times. After planning, the route is safety-checked in ENC mode and every alarm is read and the plan corrected. The safety contour is calculated from draught, required UKC and ENC data quality. Where that contour is not in the ENC the Company uses OCIMF Method 2: the safety contour is left to default to the next deeper contour and a manual alarmable no-go line is drawn at the required depth, cross-checked by the Master. Every deck watchkeeper holds generic and type-specific ECDIS training; the auto-fixing log interval is set below 5 minutes.",
    "ECDIS görsel ve sesli alarmları her zaman AÇIK tutulur. Planlamadan sonra rota ENC modunda emniyet kontrolünden geçirilir, her alarm okunur ve plan düzeltilir. Emniyet konturu draft, gerekli UKC ve ENC veri kalitesinden hesaplanır. Bu kontur ENC'de yoksa Şirket OCIMF Yöntem 2'yi uygular: emniyet konturu bir sonraki daha derin kontura kendiliğinden geçer ve gerekli derinlikte elle alarmlı bir 'no-go' çizgisi çizilir; Kaptan bu çizgiyi kontrol eder. Tüm güverte vardiya zabitlerinin genel ve tipe özel ECDIS eğitimi vardır; otomatik mevki kayıt aralığı 5 dakikanın altında ayarlanır."),
  ["Show your safety settings, explain how the contour was derived and show the manual no-go line where the ENC contour was deeper.", "ECDIS settings, route check report, UKC calculation, ECDIS certificates", "Safety contour left at a default value; route check alarms accepted in bulk."],
  ["Emniyet ayarlarınızı gösterin, konturun nasıl belirlendiğini anlatın ve ENC konturunun derin kaldığı yerde çizilen elle no-go çizgisini gösterin.", "ECDIS ayarları, rota kontrol raporu, UKC hesabı, ECDIS sertifikaları", "Emniyet konturunun varsayılan değerde bırakılması; rota kontrol alarmlarının toplu kabul edilmesi."]);

S("4.1.2", "MS 2O 3O CO", 0, "Radar/ARPA kullanımı ve testi",
  C("B3 §6.11.1 Characteristics of Radar · §4.4.20 Minimum CPA / TCPA",
    "Radar performance is checked every watch using the set's built-in performance monitor. When circumstances permit the minimum CPA is 1.0 nm and TCPA 15 minutes; otherwise CPA is never set below the ship's turning-circle diameter and TCPA never below the time to turn to a contrary heading with maximum rudder.",
    "Radar performansı her vardiyada cihazın dahili performans monitörüyle kontrol edilir. Koşullar elverdiğinde asgari CPA 1,0 mil ve TCPA 15 dakikadır; aksi halde CPA asla geminin dönüş dairesi çapından, TCPA ise azami dümenle ters rotaya dönme süresinden az ayarlanmaz."),
  ["Show the performance monitor reading and your CPA/TCPA settings; demonstrate a trial manoeuvre and parallel indexing.", "Logbook radar checks, departure checklist", "Officer cannot read the performance monitor; CPA set at 0.5 nm in open sea."],
  ["Performans monitörü değerini ve CPA/TCPA ayarlarınızı gösterin; deneme manevrası ve paralel indeksi uygulayın.", "Jurnal radar kontrolleri, kalkış kontrol listesi", "Zabitin performans monitörünü okuyamaması; açık denizde CPA'nın 0,5 mil ayarlı olması."]);

S("4.1.3", "MS 2O 3O DR", 1, "Dümen kontrol sistemlerinin kullanımı ve testi",
  C("B3 §2.14 Navigation and Control · §2.22.2 Routine Tests and Checks",
    "Manual steering is tested at least once per watch, and every change between manual and automatic steering is verified to confirm the steering response. The OOW must be familiar with the steering control system.",
    "Elle dümen her vardiyada en az bir kez test edilir ve elle ile otomatik dümen arasındaki her geçişte dümen tepkisi doğrulanır. Vardiya zabiti dümen kontrol sistemini iyi bilmelidir."),
  ["Change from autopilot to hand steering and to the emergency mode without hesitation; the changeover diagram is posted.", "Logbook steering tests, posted changeover procedure, emergency steering drill record", "Helmsman unsure how to change to hand steering."],
  ["Otomatik pilottan elle dümene ve acil moda tereddütsüz geçin; geçiş şeması asılı olmalı.", "Jurnal dümen testleri, asılı geçiş prosedürü, acil dümen tatbikatı kaydı", "Dümencinin elle dümene geçmeyi bilmemesi."]);

S("4.1.4", "2O 3O", 0, "AIS (Otomatik Tanımlama Sistemi)",
  C("B3 §6.10 Automatic Identification System · §2.17 Navigation under Pilotage",
    "AIS is used as an aid alongside radar and visual look-out, with its limitations understood; the correct navigational status is selected, including under pilotage.",
    "AIS, sınırlamaları bilinerek radar ve görsel gözcülüğe yardımcı olarak kullanılır; kılavuzluk dahil doğru seyir durumu seçilir."),
  ["Static and voyage data (draft, destination, status) correct; AIS never the sole collision-avoidance tool.", "AIS data check in voyage checklist", "Status still 'at anchor' while under way."],
  ["Statik ve sefer verileri (draft, varış, durum) doğru; AIS asla tek çatışmadan kaçınma aracı değil.", "Sefer kontrol listesinde AIS veri kontrolü", "Seyir halindeyken durumun hâlâ 'demirde' olması."]);

S("4.1.5", "MS 2O 3O", 0, "BNWAS",
  C("B3 §2.5 Bridge Navigational Watch Alarm System",
    "BNWAS is in operation whenever the ship is at sea — including when heading or track control is in use, at anchor, drifting and during STS — and is set in accordance with the SMS and the Master's Standing Orders.",
    "BNWAS, gemi denizdeyken her zaman çalışır — rota/iz kontrolü kullanılırken, demirde, sürüklenirken ve STS sırasında dahil — ve SMS ile Kaptanın Daimi Emirlerine göre ayarlanır."),
  ["Show the mode and dormant period (3–12 min) and the last test.", "BNWAS test record, Master's Standing Orders", "BNWAS switched off at anchor or key held by the OOW."],
  ["Modu, bekleme süresini (3–12 dk) ve son testi gösterin.", "BNWAS test kaydı, Kaptanın Daimi Emirleri", "BNWAS'ın demirde kapatılması veya anahtarın vardiya zabitinde durması."]);

S("4.1.6", "2O 3O CO", 0, "GNSS ve mevki teyidi",
  C("B3 §2.22.2 Routine Tests and Checks · §4.4.20 (position fixing intervals)",
    "All positioning sources (GNSS, DGNSS, satcom GNSS and terrestrial aids) are cross-checked, and information from electronic equipment is always verified against independent sources. Position-fixing intervals for each area type are tabulated in B3 §4.4.20.",
    "Tüm mevki kaynakları (GNSS, DGNSS, uydu haberleşme GNSS'i ve karasal yardımcılar) çapraz kontrol edilir; elektronik cihaz bilgileri her zaman bağımsız kaynaklarla doğrulanır. Bölge tipine göre mevki tayin aralıkları B3 §4.4.20'deki tabloda verilmiştir."),
  ["Show an independent cross-check (radar ranges/bearings, visual) and the fix interval used in this area.", "Logbook positions, GPS log, ECDIS track", "Sole reliance on GNSS with no independent check."],
  ["Bağımsız bir teyidi (radar mesafe/kerteriz, görsel) ve bu bölgede kullanılan mevki aralığını gösterin.", "Jurnal mevkileri, GPS defteri, ECDIS izi", "Yalnızca GNSS'e güvenip bağımsız teyit yapmamak."]);

S("4.1.7", "2O 3O", 0, "İskandil (echo sounder)",
  C("B3 §2.15 Monitoring the Passage · §2.23 Recording Bridge Activities",
    "The echo sounder is used to monitor charted depths and contours as part of cross-checking the ship's position; echo sounder records are retained, dated and time-marked.",
    "İskandil, mevki teyidinin bir parçası olarak harita derinliklerini ve konturlarını izlemek için kullanılır; iskandil kayıtları tarihli ve saatli olarak saklanır."),
  ["Echo sounder on in coastal waters with an alarm set; you know whether it reads below keel or transducer.", "Echo sounder settings and records", "Echo sounder off in pilotage waters."],
  ["Kıyı sularında iskandil açık ve alarmı kurulu; omurga mı transdüser mi altından okuduğunu biliyorsunuz.", "İskandil ayarları ve kayıtları", "Kılavuzluk sularında iskandilin kapalı olması."]);

S("4.1.8", "2O 3O", 0, "Hız ve mesafe ölçüm cihazları",
  C("B3 §6.4 Speed and Distance Log",
    "The speed log is installed, maintained and calibrated to the manufacturer's instructions so that recorded speed and distance stay accurate. Distance run is compared with GNSS data to detect anomalies. Officers know the difference between speed through the water (used for radar collision avoidance) and speed over the ground (used for navigation).",
    "Speed log, kaydedilen hız ve mesafenin doğru olması için üretici talimatına göre kurulur, bakılır ve kalibre edilir. Alınan mesafe GNSS verisiyle karşılaştırılarak sapmalar tespit edilir. Zabitler sudaki hız (radar ile çatışmadan kaçınmada) ile yere göre hız (seyirde) arasındaki farkı bilir."),
  ["You know whether the log gives speed through water or over ground and which equipment it feeds.", "Speed log records", "ARPA fed with ground speed without the officer knowing."],
  ["Paraketenin su içi mi yer üstü hızı mı verdiğini ve hangi cihazları beslediğini biliyorsunuz.", "Parakete kayıtları", "ARPA'nın zabitin haberi olmadan yer üstü hızla beslenmesi."]);

S("4.1.9", "3O 2O DR", 0, "Seyir fenerleri ve işaretler",
  C("B3 §6.7 Navigation Lights and Signalling Equipment",
    "The OOW is responsible for keeping the navigation lights, emergency navigation lights and signalling equipment in working order and ready for immediate use at all times; lights, flags and shapes are checked regularly.",
    "Seyir fenerlerinin, acil seyir fenerlerinin ve işaret ekipmanının her zaman çalışır ve hemen kullanıma hazır olmasından vardiya zabiti sorumludur; fenerler, bayraklar ve işaretler düzenli kontrol edilir."),
  ["Navigation lights tested before sailing, failure alarm works, spare lamps carried; NUC lights and shapes ready.", "Departure checklist", "Spare lamps missing; anchor ball not available."],
  ["Seyir fenerleri kalkıştan önce test edilmiş, arıza alarmı çalışıyor, yedek lambalar var; NUC fenerleri ve işaretler hazır.", "Kalkış kontrol listesi", "Yedek lambaların olmaması; demir topunun bulunmaması."]);

S("4.1.10", "2O 3O", 0, "NAVTEX ve SafetyNET",
  C("B3 §2.19.3 Maritime Safety Information · §2.23 · §4.4.4.1.5",
    "A continuous MSI watch is kept at sea at all times. NAVTEX records are retained, dated and time-marked, and navigational warnings (EGC and NAVTEX) are implemented on the ECDIS.",
    "Denizde her zaman kesintisiz MSI (Denizcilik Emniyet Bilgisi) dinlemesi yapılır. NAVTEX kayıtları tarihli ve saatli saklanır; seyir uyarıları (EGC ve NAVTEX) ECDIS'e işlenir."),
  ["Correct stations and message types selected; relevant warnings plotted on ECDIS.", "NAVTEX messages, plotted warnings", "Warnings on the route not plotted."],
  ["Doğru istasyon ve mesaj tipleri seçilmiş; ilgili uyarılar ECDIS'e işlenmiş.", "NAVTEX mesajları, işlenmiş uyarılar", "Rota üzerindeki uyarıların işlenmemesi."]);

S("4.1.11", "MS 2O 3O", 0, "VDR verisinin korunması",
  C("B3 §2.23 Recording Bridge Activities · B6 emergency checklists",
    "VDR and ECDIS voyage records are maintained in case of an accident and the download procedure is understood and followed. The emergency checklists require a back-up of VDR/S-VDR and ECDIS records after confirmation with the Company.",
    "Bir kazaya karşı VDR ve ECDIS sefer kayıtları tutulur, indirme prosedürü bilinir ve uygulanır. Acil durum kontrol listeleri, Şirket ile teyit sonrası VDR/S-VDR ve ECDIS kayıtlarının yedeklenmesini ister."),
  ["Show how to save VDR data after an incident; annual performance test certificate available.", "VDR APT certificate, save procedure", "Nobody on the bridge knows the save procedure."],
  ["Bir olaydan sonra VDR verisinin nasıl kaydedileceğini gösterin; yıllık performans testi sertifikası mevcut.", "VDR APT sertifikası, kaydetme prosedürü", "Köprüüstünde kimsenin kaydetme prosedürünü bilmemesi."]);

S("4.1.12", "3O 2O", 0, "Manyetik pusula ve cayro",
  C("B3 §2.22.2 Routine Tests and Checks · §2.23",
    "Gyro and magnetic compass errors are checked and recorded at least once a watch when possible, in the Compass Error Log Book. The synchronisation of all repeaters, including the one at the emergency steering position, is checked regularly.",
    "Cayro ve manyetik pusula hataları mümkün olduğunda her vardiyada en az bir kez kontrol edilip Pusula Hata Defterine kaydedilir. Acil dümen mevkiindeki dahil tüm repetitörlerin senkronizasyonu düzenli kontrol edilir."),
  ["Show today's compass error and how you found it (azimuth, amplitude or transit).", "Compass Error Log Book, deviation card", "Days without a compass error recorded."],
  ["Bugünkü pusula hatasını ve nasıl bulduğunuzu (azimut, amplitüd veya transit) gösterin.", "Pusula Hata Defteri, deviasyon kartı", "Günlerce pusula hatası kaydı olmaması."]);

S("4.1.13", "3O 2O", 0, "VHF/DSC cihazları",
  C("B3 §2.19 GMDSS Watchkeeping",
    "The OOW holds a GOC/ROC and knows GMDSS watchkeeping. VHF units not connected to the VDR, and any limits on their use for critical communications, are known by the OOWs. Every precaution is taken to avoid false distress alerts.",
    "Vardiya zabitinin GOC/ROC belgesi vardır ve GMDSS vardiya kurallarını bilir. VDR'a bağlı olmayan VHF'ler ve bunların kritik haberleşmedeki kısıtları zabitlerce bilinir. Yanlış tehlike alarmı gönderilmemesi için her önlem alınır."),
  ["MMSI and position correct; show how to send and cancel a DSC distress alert.", "GMDSS log, DSC tests", "Position not updating on the DSC VHF."],
  ["MMSI ve mevki doğru; DSC tehlike alarmının nasıl gönderilip iptal edildiğini gösterin.", "GMDSS jurnali, DSC testleri", "DSC VHF'te mevkiin güncellenmemesi."]);

S("4.1.14", "3O", 0, "Gündüz işaret lambası",
  C("B3 §6.17 Daylight Signalling Lamp",
    "The daylight signalling lamp must not depend solely on the main power supply, and three spare bulbs are carried at all times. The Second Officer tests it daily and records the test on Form 4125.",
    "Gündüz işaret lambası yalnızca ana güç kaynağına bağlı olmamalıdır; her zaman üç yedek ampul bulundurulur. İkinci Zabit lambayı her gün test eder ve Form 4125'e kaydeder."),
  ["Daylight signalling lamp works, battery charged, tested.", "Test record", "Battery flat."],
  ["Gündüz işaret lambası çalışıyor, aküsü dolu, test edilmiş.", "Test kaydı", "Akünün boş olması."]);
S("4.1.15", "3O 2O", 0, "Ses işaret cihazları",
  C("B3 §6.20 Whistle, Bell and Gong",
    "The Deck Watch Officer tests the whistles before getting underway, at noon each day at sea and before entering restricted waters. The whistle is never tested when a nearby vessel could mistake the test for a signal.",
    "Vardiya zabiti düdükleri kalkıştan önce, denizde her gün öğlen ve kısıtlı sulara girmeden önce test eder. Yakındaki bir geminin sinyal sanabileceği durumda düdük asla test edilmez."),
  ["Whistle and bell tested; you know the fog signals and the automatic whistle programme.", "Departure checklist", "Automatic fog signal not working."],
  ["Düdük ve kampana test edilmiş; sis işaretlerini ve otomatik düdük programını biliyorsunuz.", "Kalkış kontrol listesi", "Otomatik sis işaretinin çalışmaması."]);

S("4.2.1", "MS 2O 3O", 1, "Sefer planlaması",
  C("B3 §4.2.1 Company Involvement · §4.4.4 Passage Planning using ECDIS",
    "Passage plans are berth to berth and include abort positions, transit points, wheel-over positions and turn radius, distances and fixing methods. The pilot card is prepared before the pilot embarks and is presented by the Master. Charterer's navigation instructions are reviewed against company procedures. After any change (ENC updates, warnings, equipment) the Master re-checks and re-authorises the plan, and a post-voyage review is carried out.",
    "Sefer planları rıhtımdan rıhtımadır ve vazgeçme noktaları, transit noktaları, dümen basma (wheel-over) noktaları ve dönüş yarıçapı, mesafeler ve mevki yöntemlerini içerir. Pilot kartı pilot gelmeden hazırlanır ve Kaptan tarafından sunulur. Kiracının seyir talimatları şirket prosedürlerine göre gözden geçirilir. Her değişiklikten sonra (ENC güncellemesi, uyarılar, ekipman) Kaptan planı yeniden kontrol edip onaylar ve sefer sonrası değerlendirme yapılır."),
  ["Talk through the plan: appraisal sources, no-go areas, UKC, abort points, contingency anchorages, reporting points.", "Approved passage plan, UKC calculation, ECDIS route", "Plan stops at the pilot station."],
  ["Planı anlatın: değerlendirme kaynakları, girilmez alanlar, UKC, vazgeçme noktaları, acil demir yerleri, rapor noktaları.", "Onaylı sefer planı, UKC hesabı, ECDIS rotası", "Planın pilot istasyonunda bitmesi."]);

S("4.2.2", "MS 2O 3O", 1, "UKC politikası",
  C("B3 §4.4.16 Under Keel Clearance · §4.4.18 Squat · §5.1.5.7.6 Zones of Confidence",
    "Company minimum UKC: ocean passages and open seas 50% of the maximum static draft; at all other times at sea — including alongside open-sea terminals, at anchor and on SPM/CBM — 10% of the maximum static draft (may be reduced to 0.6 m only after a detailed risk assessment and Company approval, never less). Moored: beam under 20 m keeps 0.3 m at low tide; beam 20 m or more keeps 1.5% of extreme breadth. Squat = Cb × V²/100 in open water and 2 × Cb × V²/100 in restricted water. Masters avoid CATZOC D, U and unassessed zones at open sea where depth is less than twice the maximum static draft. If the minimum UKC would be breached, reduce speed or cargo and inform the Company immediately for a full appraisal and risk assessment.",
    "Şirket asgari UKC'si: okyanus ve açık deniz seyrinde azami statik draftın %50'si; denizde diğer tüm durumlarda — açık deniz terminali, demir ve SPM/CBM dahil — azami statik draftın %10'u (yalnızca detaylı risk değerlendirmesi ve Şirket onayıyla 0,6 m'ye kadar düşürülebilir, asla daha az değil). Bağlıyken: genişliği 20 m'den az gemiler alçak suda 0,3 m, 20 m ve üzeri gemiler azami genişliğin %1,5'ini korur. Squat = açık suda Cb × V²/100, kısıtlı suda 2 × Cb × V²/100. Kaptanlar, derinliğin azami statik draftın iki katından az olduğu açık deniz bölgelerinde CATZOC D, U ve değerlendirilmemiş alanlardan kaçınır. Asgari UKC sağlanamayacaksa hız veya yük azaltılır ve tam değerlendirme ve risk analizi için derhal Şirkete bildirilir."),
  ["Show the UKC calculation for the shallowest point and explain each component.", "UKC worksheet, tide tables", "Squat calculated with a speed different from the planned speed."],
  ["En sığ nokta için UKC hesabını gösterin ve her bileşeni açıklayın.", "UKC hesap formu, gelgit cetvelleri", "Squat'ın planlanan hızdan farklı bir hızla hesaplanması."]);

S("4.2.3", "MS 2O 3O CO", 0, "Kaptanın daimi ve günlük emirleri",
  C("B3 §2.3 Managing the Bridge Watch · §2.6 Calling the Master · B1 §5.5.2 Standing Orders",
    "The OOW is in charge of the bridge team in compliance with the SMS and the Master's Standing Orders. If there is any doubt about the safety of the ship, or any uncertainty, the OOW calls the Master immediately; standard call situations are listed in B3 Appendix 10.3. The Master's presence does not relieve the OOW unless the Master has explicitly taken control.",
    "Vardiya zabiti SMS ve Kaptanın Daimi Emirlerine uygun olarak köprüüstü ekibinden sorumludur. Geminin emniyetiyle ilgili en ufak şüphede veya belirsizlikte Kaptanı derhal çağırır; standart çağırma durumları B3 Ek 10.3'te listelenmiştir. Kaptan açıkça kontrolü almadıkça köprüüstünde bulunması vardiya zabitinin sorumluluğunu kaldırmaz."),
  ["Without reading, state when you must call the Master.", "Standing Orders, Night Order Book", "Officers signed the orders but cannot recall the call criteria."],
  ["Okumadan, Kaptanı ne zaman çağırmanız gerektiğini söyleyin.", "Daimi Emirler, Gece Emirleri Defteri", "Zabitlerin emirleri imzalamış olup çağırma kriterlerini hatırlayamaması."]);

S("4.2.4", "2O 3O MS", 0, "Elektronik harita yönetimi",
  C("B3 §5.5 ENC Installation, Update and Requisition · §4.4.4.2 · §6.13.2",
    "ENCs are updated with the weekly update media according to the ECDIS maker's instructions. ENC coverage must exist for the whole voyage plan with an allowance for diversions and weather avoidance. Cyber-security procedures are followed for chart updates, and the Master checks the AVCS updates on board monthly.",
    "ENC'ler ECDIS üreticisinin talimatına göre haftalık güncelleme ortamıyla güncellenir. Sapma ve hava kaçınma payı dahil tüm sefer planı için ENC kapsaması bulunmalıdır. Harita güncellemelerinde siber güvenlik prosedürleri uygulanır ve Kaptan gemideki AVCS güncellemelerini her ay kontrol eder."),
  ["Show the last weekly update applied and permits for the next voyage.", "ENC update record, permit list", "Permits missing for part of the next voyage."],
  ["Yüklenen son haftalık güncellemeyi ve sonraki sefer için lisansları gösterin.", "ENC güncelleme kaydı, lisans listesi", "Sonraki seferin bir bölümü için lisans olmaması."]);

S("4.2.5", "2O", 0, "Kâğıt harita yönetimi",
  C("B3 §4.3.4 Chart and Publications Management System",
    "The Second Officer keeps charts and publications up to date from Notices to Mariners, radio warnings and digital update services. All paper charts on board, including the 'take-me-home' set, must be corrected, including T&P notices. The Master makes monthly random checks of corrections (Form 2706) and monthly inspections of the outfit (Form 4204) and reports discrepancies to the Company.",
    "İkinci Zabit haritaları ve yayınları Denizcilere İlanlar, telsiz uyarıları ve dijital güncelleme servisleriyle güncel tutar. Gemideki tüm kağıt haritalar ('take-me-home' seti dahil) T&P ilanları dahil düzeltilmelidir. Kaptan aylık rastgele düzeltme kontrolü (Form 2706) ve aylık envanter kontrolü (Form 4204) yapar, uyumsuzlukları şirkete bildirir."),
  ["Where paper charts are used they are the latest editions and corrected.", "Chart correction log", "Back-up paper charts not corrected."],
  ["Kâğıt harita kullanılıyorsa son baskı ve düzeltilmiş.", "Harita düzeltme kaydı", "Yedek kâğıt haritaların düzeltilmemesi."]);

S("4.2.6", "MS 2O 3O CE 2E", 1, "Varış/kalkış öncesi seyir, makine ve dümen testleri",
  C("B3 §2.22.1 Operational Checks",
    "Operational checks of navigational equipment are done when preparing for sea and before port entry (SM Form 4102 / 4103). Before restricted or coastal waters, full control of engine and steering is confirmed. Testing the engine in port needs the Master's permission and is not done with cargo arms connected or when the stern is not clear.",
    "Seyir ekipmanının operasyonel kontrolleri denize hazırlanırken ve limana girmeden önce yapılır (SM Form 4102 / 4103). Kısıtlı veya kıyı sularına girmeden önce makine ve dümenin tam kontrolü teyit edilir. Limanda makine denemesi Kaptan izniyle yapılır; yükleme kolları bağlıyken veya kıç taraf açık değilken yapılmaz."),
  ["Bridge and engine log times for the tests are consistent.", "SM Forms 4102/4103, deck and engine logbooks", "Checklists ticked without the test; log times do not match."],
  ["Testler için köprüüstü ve makine jurnali saatleri tutarlı.", "SM Form 4102/4103, güverte ve makine jurnalleri", "Testi yapılmadan listelerin işaretlenmesi; saatlerin tutmaması."]);

S("4.2.7", "2O", 0, "Denizcilik yayınları",
  C("B3 §6.12 Charts and Nautical Publications", "B3 lists the publications required on board (SOLAS, LSA and FSS Codes, International Code of Signals in hard copy, MARPOL, Ships' Routeing, COLREGS, STCW, Guide to Helicopter/Ship Operations and others).", "B3, gemide bulunması gereken yayınları listeler (SOLAS, LSA ve FSS Kodları, basılı Uluslararası İşaret Kodu, MARPOL, Ships' Routeing, COLREG, STCW, Helikopter/Gemi Operasyonları Rehberi ve diğerleri)."),
  ["Latest editions on board and corrected.", "Publication list", "Outdated list of lights or tide tables."],
  ["Son baskılar gemide ve düzeltilmiş.", "Yayın listesi", "Eski fener listesi veya gelgit cetveli."]);

S("4.3.1", "MS 2O 3O DR", 0, "Asgari köprüüstü ekibi",
  C("B3 §3.2 Bridge Resource Management · §2.4.2 Sole Look-out",
    "Bridge manning is set by officer experience, weather and traffic for each stage of the voyage. The OOW may be sole look-out only in daylight and only when the Master has decided it is safe — never during darkness. During STS under way the Master or C/O is on the bridge with an OOW, look-out and helmsman; during SPM/SBM/CBM or STS at anchor one OOW stays on the bridge at all times with the engine ready.",
    "Köprüüstü ekibi seferin her aşaması için zabit tecrübesi, hava ve trafiğe göre belirlenir. Vardiya zabiti yalnızca gündüz ve Kaptan emniyetli olduğuna karar verdiğinde tek gözcü olabilir — karanlıkta asla. Seyir halinde STS'te Kaptan veya Birinci Zabit, vardiya zabiti, gözcü ve dümenciyle köprüüstündedir; SPM/SBM/CBM veya demirde STS sırasında bir vardiya zabiti her zaman köprüüstünde kalır ve makine hazır tutulur."),
  ["Lookout: report all lights, vessels and objects by relative bearing; you are not given other work.", "Passage plan manning levels, watch schedule", "Lookout used for cleaning on the night watch."],
  ["Gözcü: tüm fener, gemi ve nesneleri nispi kerterizle bildirir; başka işe verilmez.", "Sefer planı ekip seviyeleri, vardiya listesi", "Gece vardiyasında gözcünün temizlikte kullanılması."]);

S("4.3.2", "CE 2E ER", 0, "Makine dairesi ekibi",
  C("B3 §2.9.2 UMS Operation · §3.2.7 Briefing and Debriefing",
    "The Chief Engineer identifies planned changes of machinery status (e.g. arrival/departure, restricted waters) for every passage in consultation with the Master, and the bridge team is briefed on manning levels and machinery availability.",
    "Başmühendis, her sefer için makine durumundaki planlı değişiklikleri (varış/kalkış, kısıtlı sular vb.) Kaptanla görüşerek belirler ve köprüüstü ekibi personel seviyeleri ve makine durumu hakkında bilgilendirilir."),
  ["State when the engine room changes from UMS to manned, and who is where during manoeuvring.", "Engine logbook, bridge logbook", "Engine room manned after manoeuvring had started."],
  ["Makine dairesinin UMS'ten insanlı moda ne zaman geçtiğini ve manevrada kimin nerede olduğunu söyleyin.", "Makine jurnali, köprüüstü jurnali", "Manevra başladıktan sonra makinenin insanlı moda alınması."]);

S("4.3.3", "MS 2O 3O", 0, "Pilotun köprüüstü ekibine dahil edilmesi",
  C("B3 §4.2.1 · §4.4.18 Squat · §7.4–7.5 Pilotage",
    "The pilot card is prepared before the pilot boards. Minimum UKC and manoeuvring constraints are always part of the master/pilot exchange, which takes as long as the Master deems necessary. The pilot communicates in English or an agreed working language using SMCP where needed; the pilot's presence does not relieve the Master or bridge team of their duties.",
    "Pilot kartı pilot gelmeden hazırlanır. Asgari UKC ve manevra kısıtları her zaman kaptan/pilot bilgi değişiminin parçasıdır ve bu değişim Kaptan gerekli gördüğü sürece devam eder. Pilot İngilizce veya kararlaştırılan çalışma dilinde, gerekirse SMCP ile iletişim kurar; pilotun varlığı Kaptanı ve köprüüstü ekibini görevlerinden kurtarmaz."),
  ["Explain the MPX and show where it is recorded; the OOW keeps monitoring.", "Pilot card, MPX record", "OOW stops monitoring once the pilot is aboard."],
  ["MPX'i ve nereye kaydedildiğini anlatın; vardiya zabiti izlemeye devam eder.", "Pilot kartı, MPX kaydı", "Pilot gelince vardiya zabitinin izlemeyi bırakması."]);

S("4.3.4", "MS 2O 3O DR", 0, "Köprüüstünde dikkat dağıtıcılar",
  C("B3 §3.2.9 Duties within the Bridge Team · §3.2.15 Management of Stress and Distractions",
    "Mobile phones and other personal electronic devices — including media and entertainment equipment and personal computers — are prohibited for the bridge team; the only exemptions are the pilot and service technicians who need them for their work. Non-urgent paperwork and non-related persons on the bridge are recognised distractions.",
    "Cep telefonu ve diğer kişisel elektronik cihazlar — medya/eğlence cihazları ve kişisel bilgisayarlar dahil — köprüüstü ekibi için yasaktır; tek istisna işi için ihtiyaç duyan pilot ve servis teknisyenleridir. Acil olmayan evrak işi ve ilgisiz kişilerin varlığı tanımlı dikkat dağıtıcılardır."),
  ["Explain the bridge rules on phones and visitors, especially in pilotage waters.", "Standing Orders", "OOW using a personal phone on watch."],
  ["Özellikle kılavuzluk sularında telefon ve ziyaretçi kurallarını anlatın.", "Daimi Emirler", "Vardiya zabitinin vardiyada kişisel telefon kullanması."]);

S("4.4.1", "2O 3O", 0, "EPIRB",
  C("B3 §6.15.8 EPIRB", "The EPIRB transmits on 406 MHz, is installed in an easily accessible position and is ready to be released manually and carried by one person.", "EPIRB 406 MHz'de yayın yapar, kolay erişilebilir yerdedir; elle serbest bırakılmaya ve tek kişi tarafından taşınmaya hazırdır."),
  ["Hydrostatic release and battery in date, monthly self-test recorded; show manual activation.", "EPIRB tests, shore maintenance certificate", "HRU expired."],
  ["Hidrostatik serbest bırakma ve akü geçerli, aylık self-test kayıtlı; elle çalıştırmayı gösterin.", "EPIRB testleri, karada bakım sertifikası", "HRU süresinin dolması."]);
S("4.4.2", "2O 3O DR", 0, "SART / AIS-SART",
  C("B3 §6.11.11 Search and Rescue Transponder", "A radar-SART shows a line of 12 dots on the X-band radar; watchkeepers know how SART, AIS-SART and AIS-MOB alerts are displayed.", "Radar-SART, X-band radarda 12 noktalık bir çizgi gösterir; vardiya zabitleri SART, AIS-SART ve AIS-MOB uyarılarının nasıl göründüğünü bilir."),
  ["SARTs in place, battery in date; you know how to deploy one in a survival craft.", "SART tests", "Battery expired."],
  ["SART'lar yerinde, aküsü geçerli; can kurtarma aracında nasıl kurulacağını biliyorsunuz.", "SART testleri", "Akünün süresinin dolması."]);
S("4.4.3", "2O 3O DR", 0, "Can kurtarma aracı portatif VHF telsizleri",
  C("B3 §6.15.9 Survival Craft Portable VHF Radios",
    "At least three survival craft two-way VHF radios are carried, operating on channel 16 and at least one other channel, with sealed primary batteries that have an expiry date and brief operating instructions marked on the outside. They are inspected and tested per the manufacturer's requirements in PMS and must not be used for routine communication.",
    "En az üç adet can kurtarma aracı iki yönlü VHF telsizi bulunur; kanal 16 ve en az bir başka kanalda çalışır, mühürlü primer pilin son kullanma tarihi ve kısa kullanım talimatı dışında yazılıdır. PMS'teki üretici gerekliliklerine göre muayene ve test edilir; rutin haberleşmede kullanılmaz."),
  ["Portable VHFs charged; sealed primary batteries in date.", "Battery expiry list", "Primary battery seal broken."],
  ["Portatif VHF'ler şarjlı; mühürlü primer piller geçerli.", "Pil son kullanma listesi", "Primer pil mührünün açılması."]);
S("4.4.4", "MS 2O 3O", 0, "Tehlike, acelelik ve emniyet mesajları",
  C("B3 §2.19 GMDSS Watchkeeping",
    "A designated officer (preferably the 2nd Officer) is appointed by the Master for emergency communications and recorded in the GMDSS log. Instructions for distress and urgency messages are displayed by the equipment, and the OOW knows the IAMSAR Vol. III Section 4 procedures.",
    "Acil durum haberleşmesi için Kaptan tarafından bir zabit (tercihen İkinci Zabit) görevlendirilir ve GMDSS jurnaline kaydedilir. Tehlike ve acelelik mesajı talimatları cihazların yanında asılıdır; vardiya zabiti IAMSAR Cilt III Bölüm 4 prosedürlerini bilir."),
  ["Explain how to send and cancel a false distress alert.", "Posted GMDSS instructions", "Officer unsure how to cancel a false alert."],
  ["Yanlış tehlike alarmının nasıl gönderilip iptal edildiğini anlatın.", "Asılı GMDSS talimatları", "Yanlış alarmı iptal etmeyi bilmemek."]);
S("4.4.5", "2O 3O", 0, "GMDSS istasyonunun kullanımı ve testi",
  C("B3 §2.19.5 GMDSS Log Keeping · §2.19.6",
    "A GMDSS radio log records all events connected with the radio facilities, including the ship's position at least daily; radio logs are kept on board for 5 years. Equipment is tested per the SMS, flag requirements and the makers' manuals.",
    "GMDSS telsiz jurnali, en az günlük gemi mevkii dahil telsiz tesisleriyle ilgili tüm olayları kaydeder; telsiz jurnalleri gemide 5 yıl saklanır. Cihazlar SMS, bayrak gereklilikleri ve üretici kılavuzlarına göre test edilir."),
  ["Show daily, weekly and monthly tests in the log.", "GMDSS log, battery records", "Tests logged but officer cannot demonstrate the procedure."],
  ["Jurnalde günlük, haftalık ve aylık testleri gösterin.", "GMDSS jurnali, akü kayıtları", "Testler kayıtlı ama prosedürü gösterememek."]);
S("4.4.6", "MS CO 2O 3O DR", 1, "Yük/balast operasyonunda telsiz ve cep telefonu kullanımı",
  C("B2 §2.2.3 Work Permits",
    "Non-intrinsically-safe electronic equipment — mobile phones, pagers, digital cameras and tablets — is controlled in gas-hazardous areas, and smart watches and fitness bands are prohibited there.",
    "Kendinden emniyetli olmayan elektronik cihazlar — cep telefonu, çağrı cihazı, dijital kamera ve tablet — gaz tehlikeli alanlarda kontrol altındadır; akıllı saat ve fitness bileklikleri bu alanlarda yasaktır."),
  ["Only intrinsically safe radios at the manifold; MF/HF and radar restrictions agreed with the terminal.", "Ship/shore safety checklist", "Mobile phone used at the manifold."],
  ["Manifoldda yalnızca kendinden emniyetli telsiz; MF/HF ve radar kısıtları terminalle kararlaştırılmış.", "Gemi/terminal kontrol listesi", "Manifoldda cep telefonu kullanılması."]);
