# Vetting Inspector

Rütbe bazında SIRE 2.0 hazırlığı, cevaplar Torlak SQEMS prosedürlerinden.
Kurulum ve internet gerekmez: `index.html` dosyasını tarayıcıda açın.

## İçerik
- **263 resmi SIRE 2.0 sorusu** (petrol/kimyasal tanker; gaz, LNG yakıt, DP/shuttle, OBO, polar ve fotoğraf soruları hariç).
- Her soruda: resmi soru metni (İngilizce), **şirket prosedürü** (manuel kitabı ve bölümüyle, örn. `B2 §2.2.3.1`), ne gösterilmeli / kanıt / sık bulgu, varsa tayfa cep rehberi ve denetçi notları.
- 258 soruda şirket prosedürü var; tam manuel setinden (B1–B7) yazıldı. Manuellerde karşılığı olmayan 5 soru (5.4.9, 5.9.2, 5.10.4, 6.4.2, 9.6.1) açıkça belirtilir.
- **152 sınav sorusu**; 82'si doğrudan şirket manuellerinden (form numaraları, süreler, limitler) — B5 makine, B7 eğitim, denetim ve LSA konuları dahil.

## SIRE 2.0 Questionnaire (ana menü)
- Petrol ve kimyasal tanker soru listesinin tamamı (263 soru), bölümlere göre; **Güverte / Makine** filtresi.
- Her maddede şirket prosedürü referansı vurgulu; açılınca resmi soru metni ve prosedürün kendisi.
- **Manuel atıfları tıklanabilir:** `B1 5.5.1` gibi bir atıftaki bölüm numarasına tıklayınca o prosedürün sayfaları ayrı bir PDF olarak açılır (denetçiye göstermek için). Bağlantı üzerinde beklerseniz manueldeki sayfa numarası görünür.
- Her maddede sonuç (**Uygun / N/C / N/A**) ve **remark** alanı.
- **Rapor:** gemi, liman, tarih, hazırlayan bilgisiyle A4 yazdırma/PDF veya Excel (CSV, `;` ayraçlı). Tüm sorular ya da yalnız N/C ve remark olanlar; seçili departman filtresi rapora da uygulanır.

## Kaptan denetimi (ana menü)
- Kaptan SIRE 2.0 denetçisi gibi çalışır: gemi, liman, tarih, denetleyen ve ofis e-postasını girer; görüşülecek zabit ve tayfaları (rütbe + ad) seçer.
- Soru kapsamı: öncelikli + yüksek risk, rütbenin tüm soruları ya da rastgele 10. Bölüm 2 (Sertifikasyon ve Dokümantasyon) kapsam dışıdır.
- Her soruda resmi soru metni (tayfalara cep rehberi sorusu), istenirse beklenen cevap (şirket prosedürü); verilen cevap, SIRE 2.0 insan cevabı değerlendirmesi (**Beklenenin altında / Büyük ölçüde / Beklendiği gibi / Beklentinin üstünde / N/A**), gözlem türü (İnsan / Süreç / Donanım) ve denetçi notu kaydedilir.
- Bitince **ofis raporu**: özet, kişi bazında tablo, gözlemler ve tüm soru-cevaplar. A4 yazdırma/PDF, Excel (CSV) ve ofis adresine özetli e-posta taslağı (PDF/CSV eke eklenir). Tamamlanan denetimler cihazda saklanır.
- Kod: `js/captain.js`.

## Rütbeler
Güverte: Kaptan · Birinci Zabit · İkinci Zabit · Üçüncü Zabit · Güverte Tayfaları
Makine: Başmühendis · İkinci Mühendis · ETO · Makine Tayfaları

## Kaynaklar (`tools/source/`)
| Dosya | Kullanım |
|---|---|
| `manuals/full/B1.pdf` … `B7.pdf` (+ `.txt` metinleri) | **Tam set** (05.10.2026 çıktısı): B1 SMM, B2 HSSEQ, B3 Bridge & Deck, B4 Cargo, B5 Engine, B6 Emergency, B7 Training. Tüm referanslar bu setle doğrulandı. |
| `manuals/*.pdf` (eski kısmi kopyalar) | Yalnız arşiv; `B3_Bridge_Deck.txt` eski NotebookLM metni |
| `manuals/pages/` | Atıf yapılan her bölümün kesilmiş PDF'i (`B1_5.5.1.pdf` …), `tools/build_manual_pages.py` üretir |
| `manuals/MSMP_LMP_ADA.pdf` | M/T ADA Palamar Sistemi ve Halat Yönetim Planı (bölüm 9) |
| `Torlak_SIRE_2_0_Tum_Sorular.xlsx` | Resmi soru metinleri, Core/Rotational bilgisi, denetçi notları |
| `Torlak_SIRE_2_0_Secilmis_Sorular_Zabitler.xlsx` | "Öncelikli" işareti |
| `Torlak_SIRE_2_0_Rating_Mulakat_Sorulari.docx` | Tayfa cep rehberi (21 madde) |

**Manuel seti tam.** B5 (makine: UMS, acil jeneratör, pano izolasyonu, yağ analizi, bunker, yakıt geçişi) ve B7 (eğitim matrisi: BRM, ship handling, CCH/OCH, ERM) ile bölüm 3 ve 10 soruları doldu. Karşılığı olmayan 5 soru: acil aydınlatma testi (5.4.9), tek hortum vinci yedek parçası (5.9.2), personel transfer sepeti (5.10.4), baş kasara yağlı su (6.4.2), şamandırada buhar toplama (9.6.1).

**Excel cevapları neden kullanılmadı:** 344 cevabın 304'ü şablon cümle; kalanlar manuellerde bulunmayan form (SMS-B5-F06 vb.) ve bölüm numaraları içeriyor. Şirket formları 4 hanelidir (3602-A, 3703, 3501…).

## Güncelleme
- Excel/Word değişirse: `python3 tools/import_company.py` (gerekli: `pip install openpyxl python-docx`) → `js/company.js` yenilenir.
- Manuel sayfa bağlantıları: atıf ekleyince/değişince ya da manuel yenilenince `python3 tools/build_manual_pages.py` (gerekli: Ghostscript, poppler-utils) → `js/manual-pages.js` ve `tools/source/manuals/pages/` yenilenir. Yeni manuel PDF'inden önce metin kopyası: `pdftotext -layout B1.pdf B1.txt`.
- Şirket prosedürleri: `js/sire/chNN.js` → `S(no, rütbeler, yüksekRisk, "TR başlık", C("Kitap §bölüm", "EN", "TR"), [EN rehber], [TR rehber])`
- Sınav: `js/exam.js` → `Q(...)` genel, `QC("Kitap §bölüm", ...)` şirket sorusu.
- Rütbe kodları: `MS CO 2O 3O DR CE 2E ETO ER`, gruplar `DECK ENG OFF ALL`.

## Diğer
Temalar (otomatik · açık · koyu · gece kırmızı), A4 rapor yazdırma, ilerleme yedekle/geri yükle, klavye kısayolları.

> Hazırlık aracıdır; geçerli olan gemideki kontrollü SMS kopyasıdır.
