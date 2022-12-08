-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 08, 2022 at 06:14 PM
-- Server version: 5.7.31
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pcwebshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikl`
--

DROP TABLE IF EXISTS `artikl`;
CREATE TABLE IF NOT EXISTS `artikl` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Naziv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Opis` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Jmj` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `JdCijena` decimal(10,2) NOT NULL,
  `IdPotkategorije` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `artikl`
--

INSERT INTO `artikl` (`ID`, `Naziv`, `Opis`, `Jmj`, `JdCijena`, `IdPotkategorije`) VALUES
(1, 'Procesor INTEL Pentium Gold G6405, 4100 MHz, Socket 1200', 'Model: Intel® Pentium® Gold G6405 Processor\r\nPodnožje Socket FCLGA1200\r\nVeličina L3 cachea 4 MB\r\nBroj jezgri: 2\r\nBroj threadova: 4\r\nRadni takt jezgre: 4.1 GHz\r\nMax turbo frekvencija: -\r\nTehnologija izrade: 14 nm\r\nTip memorije: DDR4 2666\r\nGrafički procesor: Intel UHD Graphics 610\r\nGrafika osnovna frekvencija: 350 MHz\r\nGrafika maksimalna dinamička frekvencija: 1.05 GHz\r\nTDP: 58 W\r\nHladnjak: da', 'kom', '448.87', 2),
(2, 'Procesor AMD Ryzen 3 2200G, 3500/3700 MHz, Socket AM4, Radeon Vega 8 Graphics', 'Ryzen 3 2200G, Socket AM4, Radni takt 3500 MHz, L3 cache 4MB, Jezgra Raven Ridge, Broj jezgri 4, TDP 65W, Hladnjak da, Grafički procesor Radeon Vega 8, Dual channel. MBO sa X370, B350 i A320 chipsetom obavezni update BIOS-a !', 'kom', '990.19', 2),
(3, 'Procesor AMD Ryzen 5 3600X, 3800/4400 MHz, Socket AM4\r\n', 'AMD Ryzen 5 3600X je snažan 6 jezgreni procesor sa 12 dretvi. Izgrađen sa Zen 2 arhitekturom, treća generacija 7nm Ryzen procesora nudi povećane performanse u odnosu na svog prethodnika.Ima osnovni radni takt od 3.8 GHz, a može postići maksimalni pojačani takt od 4.4 GHz. Uparen s AMD X570 ili B550 čipsetom, Ryzen 5 3600X podržava standard PCI Express 4.0 koji je dvostruko brži od svog prethodnika.\r\n', 'kom', '2099.00', 2),
(4, 'Procesor INTEL Core i5 10600K, 4100/4800 MHz, Socket 1200\r\n', 'INTEL Core i5 10600K je 6 jezgreni procesor sa 12 dretvi. Ima osnovni radni takt od 3.1 GHz te dolazi sa posebnim karakteristikama kao što je podrška za Intel Optane memoriju, Intel vPro, Intel Boot Guard, Intel VT-d tehnologija virtualizacije i Intel Hyper-Threading. Uz Intel Turbo Boost 2.0, maksimalna turbo frekvencija koju ovaj procesor može postići je 4.8 GHz. Ovaj procesor također podržava 128 GB dual-channel 2666 MHz DDR4 RAM-a i koristi tehnologiju 10. generacije.\r\n', 'kom', '2479.63', 2),
(5, 'Matična ploča ASROCK A320M-HDV R4.0, socket AM4, DDR4, VGA, DVI, HDMI', 'Asrock A320M-HDV R4.0 - AMD AM4 Socket 2 DIMMs, Supports DDR4 3200 (OC)* 1 PCIe 3.0 x16, 1 PCIe 2.0 x1 Graphics Output : HDMI, DVI-D, D-Sub 7.1 CH HD Audio (Realtek ALC887 Audio Codec), ELNA Audio Caps 4 SATA3 1 Ultra M.2 (PCIe Gen3 x4 SATA3)* 6 USB 3.1 Gen1 (2 Front, 4 Rear) Realtek Gigabit LAN\r\n', 'kom', '392.44', 1),
(6, 'Matična ploča GIGABYTE B365M H, socket 1151 v2, DDR4, VGA, HDMI\r\n', 'ntel B365 Ultra Durable motherboard with GIGABYTE 8118 Gaming LAN, PCIe Gen3 x4 M.2, Anti-Sulfur Resistor, Smart Fan 5, CEC 2019 ready\r\nSupports 9th and 8th Gen Intel® Core™ Processors\r\nDual Channel Non-ECC Unbuffered DDR4\r\nNew Hybrid Digital PWM Design', 'kom', '539.27', 1),
(7, 'Tvrdi disk 2 TB, WESTERN DIGITAL Blue, 3.5\'\', SATA III, 7200 rpm, 256 MB, WD20EZBX', 'Capacity 2 TB\r\nInterface SATA\r\nForm Factor 3.5 Inch\r\nCache Size 256 MB\r\nDisk Speed (RPM) 7200rpm\r\nCompatibility Windows® 10. Windows 8.1, Windows 7, macOS High Sierra™, Sierra El Capitan\r\nNote: Compatibility may vary depending on user’s hardware configuration and operating system. Acronis™ True Image™ WD Edition designed to work with Windows systems only.\r\nDimensions (L x W x H) 5.79\" x 4\" x 1.03\"', 'kom', '443.09', 3),
(9, 'Tvrdi disk 1 TB, WESTERN DIGITAL Blue, 3.5\", SATA III, 5400 rpm, WD10EZRZ', 'WD Blue™ 40EZRZ, 4000 GB, SATA3, 64 MB, 3,5\", 5.400 rpm\r\n\r\nOsnovne karakteristike:\r\nKapacitet [GB]: 4000\r\nSučelje: SATA3\r\nBuffer [MB]: 64\r\nFormat: 3,5\"\r\nBroj okretaja [rpm]: 5.400\r\nData Bit Rate [MB/s]: 150', 'kom', '313.78', 3),
(10, 'ASUS GT1030 PH-GT1030-O2G, 2GB GDDR5, 90YV0AU0-M0NA00\r\n', 'Chip: GP108-300-A1 \"Pascal\" • Chip clock: 1278MHz, Boost: 1531MHz (OC Mode) • Memory: 2GB GDDR5, 1500MHz, 64bit, 48GB/s • Shader Units/TMUs/ROPs: 384/24/8 • computing power: 1176GFLOPS (Single), 37GFLOPS (Double) • Manufacturing process: 14nm', 'kom', '869.00', 4),
(11, 'ASUS GT1030-SL-2G-BRK, 2GB DDR5, 90YV0AT0-M0NA00\r\n', 'Connectors 1x DVI, 1x HDMI 2.0b Chip GP108-300-A1 \"Pascal\" Manufacturing process 14nm Chip clock 1266MHz, Boost: 1506MHz (OC Mode) Memory 2GB GDDR5, 1500MHz, 64bit, 48GB/s Shader Units/TMUs/ROPs 384/24/16 TDP 30W\r\n', 'kom', '819.00', 4),
(12, 'ASUS GT710-SL-2GD5, nVidia GT 710, GeForce, 90YV0AL1-M0NA00\r\n', 'Chip: GK208 - GeForce GT 710 \"Kepler 2.0\" • Chip clock: 954MHz, Boost: not available • Memory: 2GB GDDR5, 1250MHz, 64bit, 40GB/s • Shader Units/TMUs/ROPs: 192/16/8 • computing power: 366GFLOPS (Single), 15GFLOPS (Double)', 'kom', '549.00', 4),
(13, 'NVIDIA Quadro RTX A6000, 48GB GDDR6, 4x DP, VCNRTXA6000-PB\r\n', 'Connectors 4x DisplayPort 1.4 Graphics NVIDIA RTX A6000 - 48GB GDDR6 - desktop Chip GA102 \"Ampere\", 84SM, 628mm2 Manufacturing Process 8nm (Samsung) Chip clock 1455MHz, Boost: 1860MHz Memory 48GB GDDR6, ECC mode, 2000MHz', 'kom', '46299.00', 4),
(14, 'Abkoncore Cronos 750, TG, RGB, Midi Tower\r\n', 'Model Abkoncore CRONOS 750 Materijal ABS, čelik, staklo Utori 1x USB 3.0 2x USB 1.1 HD Audio Mikrofon Hlađenje CPU: 158mm Podržani formati ploča ATX, Micro-ATX, Mini-ITX Dimenzije i masa 210x410x463mm 5.6kg', 'kom', '379.00', 5),
(15, 'Aerocool Python RGB Black Midi Tower, ACCM-PB15033.11\r\n', 'External not available Internal 1x 3.5\", 1x 2.5\"/3.5\", 2x 2.5\" front I/O 1x USB-A 3.0, 2x USB-A 2.0, 1x headphone, 1x microphone PCI-slots 7 Fan(s) (front) 2x 200mm (RGB illuminated) or 2x 140mm (optional) or 3x 120mm (optional) Fan(s)', 'kom', '599.00', 5),
(16, 'Be quiet! Dark Base Pro 900 Rev.2 Orange, glass window, noise-insulated, BGW14', 'External 2x 5.25\" Internal 5x 3.5\" (transverse, HDD rails) or 10x 2.5\" (transverse, HDD rails), 1x 2.5\" front I/O 1x USB-C 3.1 (20-Pin Key-A Header), 2x USB-A 3.0, 1x USB-A quick charging port, 1x headphone, 1x microphone PCI-slots 8 Fan(s)', 'kom', '2099.00', 5),
(17, 'AEG UPS Protect A 1600VA/960W, Line-Interactive, AVR, Data line/network protection, USB/RS232, LCD\r\n', 'Protect A is a uninterruptible power supply designed to provide mains power protection and battery back-up for desktop systems and network peripherals - The internal battery provides several minutes runtime when the mains power fails.', 'kom', '1975.00', 6),
(18, 'APC 3000VA SMT3000RMI2UC\r\n', 'APC SMT3000RMI2U - Smart-UPS 3000VA/2700W RM LCD with Smart Connect | Vrijeme rada (pri 50% opterećenja) 11min | Vrijeme rada (pri 100% opterećenja) 3min | Input/Output 230V | Sučelje (Smartslot, USB)', 'kom', '14148.99', 6),
(19, 'APC Back-UPS Pro 550VA, USB, BR550GI\r\n', 'APC BR550GI • Back-UPS RS 550VA/330W • Izlazna snaga 330W • Tehnologija Line interactive AVR • Stepped sinewave • Izlazni napon 230V • Ulazni napon 230V • Vrijeme punjenja 8h • Vrijeme rada (sa 50% opterećenja) 14,9 min', 'kom', '1274.99', 6),
(20, 'APC BE850G2-GR, 850VA/520W, Schuko CEE7\r\n', 'Kapacitet izlazne snage (VA) : 850 VA Kapacitet izlazne snage (W) : 520 W Tip uređaja : SurgeArrest + Battery Backup Izlazni strujni priključci : Schuko CEE 7 - 8 kom Oblik kućišta : Desktop Regulacija napona : - Zaštita podatkovne linije.', 'kom', '880.00', 6),
(21, 'Acer CB242Ybmiprx 23.8\" FHD IPS, VGA/DisplayPort/HDMI 1.4,FreeSync, zvučnici 2x2W, UM.QB2EE.001, REFURBISHED/RABLJENO\r\n', 'IPS panel, Rezolucija 1920x1080@75Hz, Dijagonala 23.8, Kontrast 100M:1,Svjetlina 250 cd/m2, Odziv 1 ms (VRB), Kut 178/178, VGA, HDMIx2,Zvučnici 2x2W, tilt, AMD Radeon FreeSync Technology, Acer BlueLightShield, ZeroFrame\r\n', 'kom', '990.00', 7),
(22, 'Acer GN246HLBbid 24\", TN, VGA/DVI/HDMI 1.4 , 144Hz, 1ms, niža cijena - smanjeno jamstvo\r\n', 'Screen size: 24\"/61cm • Resolution: 1920x1080, 16:9 • Brightness: 350cd/m2 • Contrast: not specified (static), 100.000.000:1 (dynamic) • Response time: 1ms • Viewing angle: 170°/160° • Panel: TN • Shape: straight • Coating: matte (non-glare)', 'kom', '1298.99', 7),
(23, 'Acer KA270HAbid, 27\" FHD, VA panel, VGA/DV/HDMI, ZeroFrame, UM.HX3EE.A01\r\n', 'Screen size 27\"/68.6cm resolution 1920x1080, 16:9, 82dpi Brightness 300cd/m2 Contrast 3.000:1 (static), 100.000.000:1 (dynamic) Response time 4ms (GtG), not specified (MPRT) viewing angle 178°/178° panel VA shape straight (flat) coating matte', 'kom', '1089.00', 7),
(24, 'Držač TRUST za tablet 7-11\", vakuumski, univerzalni, crni (19735)\r\n', 'Savršeno za navigaciju u prednjem dijelu automobila .Potpuno podesivi kut gledanja. Jednostavno odvajanje svoj tablet .Za horizontalnu i vertikalnu uporabu .Prikladno za sve tablete od 7\"do 11 \"\r\n', 'kom', '59.00', 8),
(25, 'Stolni nosač za monitor SBOX LCD-F048, za 4 monitora, 13\" - 32\", do 4x8kg\r\n', 'Desktop - stolni stalak za 4 monitora - SBOX\r\n\r\nVeličine ekrana: 13“ - 32\"\r\nNosivost: do 8 kg (4 x 8kg)\r\nVESA: 75 x 75, 100 x 100\r\nOkomiti nagib: ± 45°\r\nHorizontalno okretanje: 180°\r\nRotacija: 360°\r\nPodešavanje visine\r\nUgrađeni držači kablova\r\nMetalno postolje\r\nBoja: Crna\r\nMaterijal: Aluminij, čelik\r\nDimenzije: 72,6 x 31,6 x 81,8 cm', 'kom', '294.19', 8),
(26, 'Multifunkcijski printer HP DeskJet 2320, p/s/c, USB\r\n', 'Format i tehnologija: A4, inkjet\r\nRezolucija ispisa: do 4.800 x 1.200 dpi\r\nBrzina ispisa: do 5,5 stranica/min (u boji) i do 7,5 stranica/minuto (crno-bijelo)\r\nIzpis prve strani: do 15 s (črno-belo) in do 18 sekund (u boji)\r\nObostrani ispis: Ne\r\nAutomatski ulagač dokumenata (ADF): Ne\r\nUlaz papira: do 60 listova\r\nIzlaz papira: do 25 listova\r\nPreporučeni mjesečni volumen ispisa: od 50 do 100 stranica (priporučeno); do 1000 stranica (max.)', 'kom', '349.00', 9),
(33, 'Skener EPSON Perfection V600 Photo (B11B198033)\r\n', 'Senzor Tip CCD\r\nVeličina papira A4\r\nOptička rezolucija 6400 x 9600 dpi\r\nDubina boje 48-bitna\r\nOCR Da\r\nUSB sučelje tipa 2.0\r\nŠirina 280 mm/Visina 118 mm/Dubina 485 mm/Težina 4100 g\r\nAutomatsko ulaganje papira: ne\r\nPlugin vizualna projekcija Da', 'kom', '2514.40', 10),
(34, 'Skener CANON imageFORMULA P-215 mark II\r\n', 'Model Canon P-215\r\nVrsta Skener s ulaganjem listova i USB napajanjem\r\nOptička rezolucija 600 dpi\r\nElement skeniranja 1-linijski CMOS CIS senzor\r\nIzvor svjetlosti RGB LED\r\nSučelje Hi speed USB 2.0 i USB 3.0\r\nPodručje skeniranja Prednja/stražnja/obostrano\r\nBrzina pregleda Crno-bijelo: Uz USB 3.0: 15 ppm / 30 ipm, uz USB 2.0: 12 ppm / 14 ipm\r\nU boji: Uz USB 3.0: 10 ppm / 20 ipm, uz USB 2.0: 10 ppm / 10 ipm', 'kom', '2348.07', 10),
(35, 'Tinta ORINK za CANON BCI-6BK/BCI-5B, crna\r\n', 'Namjena Zamjenska boja za printer\r\nKompatibilni printeri BJC 3000 / 6000 / 6100 / 6200 / 6200S / 6500 / 8200 / 8200 Photo;S400 / S400x / S450 / S800 / S820 / S820D / S830D / S900 / S4500 / S6300 / S9000; MultiPASS C100; PIXMA iP4000 / iP4000R / iP5000 / iP6000D / iP8500 / MP750 / MP760 / MP780; i860 / i865 / i900D / i905D / i950 / i960 / i965 / i990 / i9100 / i9900 / i9950\r\nBoja Crna', 'ml', '7.20', 11),
(36, 'Tinta MS za EPSON T0711, crna\r\n', 'Tinta MS za EPSON T0711, zamjenska, crna', 'ml', '7.44', 11),
(37, 'Tinta MS za EPSON T0712, plava\r\n', 'Tinta MS za EPSON T0712, zamjenska, plavo zelena', 'ml', '7.44', 11),
(38, 'Tinta MS za EPSON T0713, magenta\r\n', 'Tinta MS za EPSON T0713, zamjenska, rozo - ljubičasta', 'ml', '7.44', 11),
(39, 'Tinta MS za EPSON T0714, žuta\r\n', 'Tinta MS za EPSON T0714, zamjenska, žuta', 'ml', '7.44', 11),
(40, 'Memorijska kartica microSDHC 16 GB A-DATA, Class 10 UHS + adapter\r\n', 'AUSDH16GUICL10-RA1, Format microSD, Kapacitet 16 GB MB, Čitanje 90 MB/s, Pisanje 45 MB/s\r\n', 'kom', '35.00', 12),
(41, 'Memorijska kartica microSDHC 32 GB SAMSUNG EVO Plus, Class 10 UHS + adapter SD micro 32GB Evo Plus + Ad Sam\r\n', 'Brzina čitanja 95\r\nBrzina pisanja 20', 'kom', '65.00', 12),
(31, 'Multifunkcijski printer HP 4120, p/s/c/eFax, ADF, Wi-Fi, USB\r\n', 'Radite brzo i bez ruku - automatski ulagač od 35 stranica pomaže vam da brzo dovršite zadatke skeniranja i kopiranja. Jednostavno rješavajte zadatke i dobit ćete puno od jednog uređaja - ispisujte, skenirajte i kopirajte. Jednostavno ispisujte, skenirajte i kopirajte svakodnevne dokumente sa svog pametnog telefona pomoću aplikacije HP Smart.', 'kom', '549.00', 9),
(32, 'Multifunkcijski pritner CANON Pixma TS3352, p/s/c, WiFi, USB, crveni\r\n', 'Metoda ispisa 2 spremnika s tintom FINE (crni i u boji)\r\nRezolucija ispisa Do 4800 x 1200 dpi\r\nBrzina c/b ispisa Pribl. 7,7 ipm\r\nBrzina ispisa u boji Pribl. 4 ipm\r\nBrzina foto ispisa Fotografija bez obruba 10 x 15 cm: pribl. 65 sekundi', 'kom', '599.00', 9),
(42, 'Memorijska kartica SDXC 256 GB KINGSTON Canvas Go! Plus, Class10 UHS-I A2 U3 V30, 170/90 MB/s (SDG3/256GB)\r\n', 'Kingston 256GB Canvas Go Plus SD (SDXC) Card U3, V30, A2, 170MB/s R, 90MB/s W\r\n\r\nSKU SDG3/256GB\r\nBrand Kingston\r\nMemory Card Capacity 256GB\r\nMemory Type SD , SDXC\r\nModel/Series/Type Canvas Go Plus\r\nRead Speed Up To 170MB/s\r\nWrite Speed Up To 90MB/s\r\nUHS Speed Class U3\r\nUHS Interface UHS-I', 'kom', '325.00', 12),
(43, 'USB 128GB Kingston DataTraveler Locker+ G3 USB 3.0, DTLPG3/128GB\r\n', 'Flash Memory Interface Type USB 3.0 Product Type USB flash drive Read Rate 135 MB/s Write Rate 40 MB/s System Requirements OS Required Apple macOS 10.12.x - 10.15.x, Windows 8, Windows 8.1, Windows 10', 'kom', '899.00', 13),
(44, 'USB 128GB Kingston DT Elite G2 metal USB 3.0, DTEG2/128GB\r\n', 'Type: with protection cap, eyelet • Interface: USB-A 3.0 • Read: 180MB/s • Write: 70MB/s • Dimensions: 59x19x11mm • Special features: metal housing\r\n', 'kom', '378.00', 13),
(45, 'SD micro 32GB Sandisk Ultra, SDSQUNR-032G-GN3MA, bez adaptera\r\n', 'Class UHS-I, Class 10 Read 100MB/s Special features SD adapter, expanded operating temperature range (-25/85°C)\r\n', 'kom', '44.99', 13),
(46, 'USB 128GB Adata UV150 Black USB 3.0, AUV150-128G-RBK\r\n', 'UV150 ujedinjuje klasičan izgled, povoljnu cijenu, super brzi USB 3.1 i sjajno kućište. Dostupni u crnoj i crvenoj boji, minimalistički i moderan dizajn čine ga elegantnim i praktičnim dodatkom u vašoj svakodnevnici Kapacitet 128 GB', 'kom', '130.00', 13),
(47, 'USB 128GB Corsair Voyager Slider X1 USB 3.0, CMFSL3X1-128GB\r\n', 'Type Slider, eyelet Interface USB-A 3.0 Read 130MB/s Weight 9g Warranty five years\r\n', 'kom', '248.99', 13),
(48, 'LaCie 10TB 3.5\" d2 Professional USB-C3.0, STHA10000800\r\n', 'Shape factor 3.5\" data medium 10TB HDD (SATA, AHCI) Connection internal 1x SATA 6Gb/s Connection external 1x USB-C 3.0 RAID level not available Dimensions 188.5x130x60mm Weight 1.40kg Colour black Special features aluminum housing, incl. USB', 'kom', '3799.00', 14),
(49, 'Seagate 10TB 3.5\'\' External Backup Plus Hub Black USB3.0, STEL10000400\r\n', 'Shape factor 3.5\" data medium 10TB HDD (SATA, AHCI) Connection internal 1x SATA 6Gb/s Connection external 1x USB 3.0 micro-B RAID level not available Fan(s) not available Dimensions 198x118x41mm Weight 1.06kg Colour black Special features 2x', 'kom', '3498.99', 14),
(50, 'Transcend 4TB StoreJet T3 3.5\" USB3.0, TS4TSJ35T3\r\n', 'HDD External Drive Specifications Type of External Drive Hard Disk Drive Hard Drive Internal Form Factor 3.5\" Storage Capacity 4 TB External Data Bit Rate 5 Gbps Hard Drive Features One Touch Backup Function HDD External Interfaces Interfaces', 'kom', '869.99', 14),
(51, 'WD 4TB My Book, USB 3.0 micro-B, WDBBGB0040HBK-EESN\r\n', 'Form factor 3.5\" data medium 3TB HDD Connection internal SATA 6Gb/s Connection external USB 3.0 micro-B RAID level not available Fan(s) not available Dimensions 170.6x139.3x49mm Weight 962g Colour black Special features 256bit AES', 'kom', '849.99', 14),
(52, 'Crucial X8 SSD 1TB, 2.5\", USB 3.1, CT1000X8SSD9\r\n', 'Form factor M.2 2280 data medium 1TB SSD (PCIe 3.0 x2, NVMe, TLC NAND) Connection internal 1x M.2 (PCIe 3.0 x2, NVMe) Connection external 1x USB-C 3.1 RAID level not available Fan(s) not available Chipset ASMedia ASM2362 Dimensions 127', 'kom', '1288.99', 15),
(53, 'Crucial X8 SSD 500GB, 2.5\", USB 3.1, CT500X8SSD9\r\n', 'Form factor M.2 2280 data medium 500GB SSD (PCIe 3.0 x2, NVMe, TLC NAND) Connection internal 1x M.2 (PCIe 3.0 x2, NVMe) Connection external 1x USB-C 3.1 RAID level not available Fan(s) not available Chipset ASMedia ASM2362 Dimensions 1', 'kom', '810.00', 15),
(54, 'iStorage 1TB, diskAshur PRO2, 2.5\", USB 3.1 SSD\r\n', 'shape factor 2.5\" data medium 1TB SSD (SATA, AHCI) Connection internal 1x SATA 6Gb/s Connection external 1x USB-A 3.0 RAID level not available Fan(s) not available Dimensions 124x84x20mm Weight 180g Colour black Special features 256bit AES', 'kom', '4248.74', 15),
(55, 'Samsung 1TB 2.5in USB 3.1 T5 SSD MU-PA1T0B/EU\r\n', 'Form factor: mSATA 6Gb/s • data medium: 1TB SSD • Connection Internal: SATA 6Gb/s • Connection external: USB-C 3.1 • RAID level: not available • Fan(s): not available • Dimensions: 74x57x11mm • Weight: 51g • Colour: black • Special features: UASP, 25', 'kom', '1168.00', 15),
(56, 'Apple Magic Keyboard za 11\" iPad Pro (2nd gen.),, mxqt2cr/a\r\n', 'Apple Magic Keyboard za 11\" iPad Pro (2nd gen.),, mxqt2cr/a\r\n', 'kom', '3050.00', 16),
(57, 'Apple Magic Keyboard, bluetooth\r\n', 'Layout: UK • Type: Rubber Dome • Lighting: not available • Key height: flat • Key shape: straight • Keypad: not available • Cursor block: shifted • Control keys: not available • Enter: Standard • Del key: not available • Status indicator: Capslock', 'kom', '1179.00', 16),
(58, 'Canyon tipkovnica+miš CNE-CSET1-AD\r\n', 'CANYON USB standard KB, 104 keys, water resistant AD layout bundle with optical 3D wired mice 1000DPI,USB2.0, Black, cable length 1.5m(KB)/1.5m(MS), 443*145*24mm(KB)/115.3*63.5*36.5mm(MS), 0.44kg', 'kom', '68.99', 16),
(59, 'Cherry KC 1000 USB bijela, JK-0800GB-0/01\r\n', 'Type: Rubber Dome • Switch type: Cherry LPK • Lighting: not available • Key height: flat • Key shape: concave • Keypad: Standard • Cursor block: Standard • Control keys: Standard • Enter: Standard • Del key: Standard • Status indicator: Capslock.', 'kom', '118.99', 16),
(60, 'Cherry KC 1000 USB crna, JK-0800SL-2\r\n', 'Type: Rubber Dome • Switch type: Cherry LPK • Lighting: not available • Key height: flat • Key shape: concave • Keypad: Standard • Cursor block: Standard • Control keys: Standard • Del key: Standard • Status indicator: Capslock, Num, wheels', 'kom', '149.00', 16),
(61, '3D CONNEXTION CadMouse USB, 3DX-700052\r\n', 'Operation right hander Keys 7 (entire), 3 (main), 2 (top), 2 (left), 1 (scroll wheel) scroll wheel 2-way Sampling laser Resolution 8200dpi Sampling rate 1000Hz Interface wired (1.8m), USB Power supply USB Dimensions (WxHxD) 80x44x128', 'kom', '677.99', 17),
(62, '3Dconnexion SpaceMouse Pro Wireless, 3DX-700075\r\n', 'Type 3D-mouse Keys 15 (15x programmable) Interface wireless (2.40GHz) Power supply battery pack (permanently installed) Dimensions (WxHxD) 142x58x204mm Weight 563g Special features incl. USB hub, palm rest\r\n', 'kom', '3098.99', 17),
(63, 'DELL MS116 optical mouse White\r\n', 'Operation: ambidextrous • keys: 3 (entire), 2 (main), 1 (scroll wheel) • scroll wheel: 2-way • Sampling: LED-red/IR • Resolution: 1000dpi • Lighting: not available • Connection: wired (1.8m), USB • Power supply: USB • Special features: not available\r\n', 'kom', '51.99', 17),
(64, 'Endgame Gear XM1 Gaming Mouse Black RGB, USB, EGG-XM1RGB-BLK\r\n', 'Operation right hander Keys 5 (entire), 2 (main), 2 (left), 1 (scroll wheel) Scroll wheel 2-way sampling LED-red/IR resolution 16000dpi, adjustable in 50dpi-steps sensor PixArt PMW 3389 button Kailh GM 4.0 sampling installment 1000Hz, adjustable', 'kom', '625.00', 17),
(65, 'Amazon Echo Dot (3rd) Grey DE, B07PDHSPYD\r\n', 'Tuner Internet radio Connectors Bluetooth, WLAN 802.11a/b/g/n, AUX In (3.5mm) Power supply mains operation Dimensions (WxHxD) 99x43x99mm Weight 300g Special features speech assistant (Amazon Alexa)\r\n', 'W', '578.99', 18),
(66, 'Anker SoundCore Flare + Bluetooth 360° portable waterproof black speaker 25W, A3162G11\r\n', 'Soundcore by Anker - Listen. Hear. 360 ° sound Dual full-range drivers, combined with dual bass and tweeters, deliver 25W 360 ° sound with stunning clarity. Special BassUp technology.', 'W', '729.00', 18),
(67, 'Anker Soundcore Flare Bluetooth 360° portable waterproof speaker, blue, A3161H31\r\n', 'Soundcore by Anker - Listen. Hear. 360 ° sound Give everyone in the room a pass for a real backstage experience with Soundcore Flare amazing 360 ° sound. ', 'W', '399.00', 18),
(68, 'Anker Soundcore Space NC Wireless Headphones, A3021GF1\r\n', 'Anker Soundcore Space NC Wireless Headphones Take control of your surroundings and surrender to the sound From ANKER, a leading brand for mobile accessories - Faster and safer charging with advanced technology - 20 million + satisfied users.\r\n', 'kom', '771.75', 19),
(69, 'Apple AirPods slušalice 2nd generation, MV7N2ZM/A\r\n', 'Design earphones (Earbuds) Type non-wired Principle semi-open Microphone integrated Interface Bluetooth Operating time 5h (active) Cable no Weight 8g Colour white Special features Touch Control, voice control, full wireless.', 'kom', '1148.99', 19),
(70, 'APPLE Earpods, 3.5mm, bijele, 2017 (mnhf2zm/a)\r\n', 'Design earphones (Earbuds) Type non-wired Principle semi-open Microphone cable microphone Interface jack plug (3.5mm) Colour white Special features 3-button remote control\r\n', 'kom', '267.99', 19),
(71, 'Arctic P614BT Bluetooth Headphones (On-Ear), HEASO-ERM47-GBA01\r\n', 'Design Headphones (On-Ear) Type headband Principle closed microphone integrated Wireless Bluetooth 4.0, aptX, NFC cable no Control volume control Operating time 30h Battery micro USB charging connector Frequency range 20Hz-20kHz Impedance 3.', 'kom', '149.00', 19),
(72, 'ASUS Strix Fusion 500 headset 7.1 USB, 90YH00Z2-B8UA00\r\n', 'Design Headphones (Over-Ear) Type headband Microphone microphone Interface USB Frequency range 20Hz-20kHz Impedance 32 Ohm driver 50mm Cable one-sided Weight 360g Special features surround\r\n', 'kom', '1089.99', 19),
(73, 'Podloga za miš MS MP-02, plava\r\n', 'Plava podloga za miš je platnena podloga sa donjom stranom od spuzve. Dimenzija je 18x22 cm.', 'kom', '12.40', 20),
(74, 'Podloga za miš G&BL mačke\r\n', 'Podloga za miš G&BL mačke', 'kom', '25.00', 20),
(75, 'Podloga za miš WHITE SHARK MP-1892 - FACELESS ORACLE, 40x30cm\r\n', 'Podloga za miš', 'kom', '39.00', 20),
(76, 'Podloga za miš TRUST GXT754 (L), crna (21567)\r\n', 'Veličina : 320x270x3mm\r\nPodržani svi tipovi senzora na miševima\r\nProtuklizna podloga', 'kom', '49.00', 20),
(77, 'ASUS 4G-AC68U, AC1900 ADSL Modem/Wireless Router, 802.11a/g/b/n/ac 1900Mbps, 3G/4G LTE 300Mbps\r\n', 'Modem GSM (not specified), UMTS (900/2100), LTE (B1/B3/B7/B20/B38) network EDGE, GPRS, HSDPA, HSUPA, HSPA+ bandwidth 300Mbps/50Mbps (LTE) Interfaces 1x USB 3.0, WLAN 802.11a/b/g/n/ac/h, 1x Gb WAN, 4x Gb LAN Dimensions 247x168x76mm Weight 795g.', 'kom', '1564.00', 21),
(78, 'ASUS RP-AC51, Wireless repeater, 90IG03Y0-BO3410\r\n', 'LAN 1x 100Base-TX Wireless WLAN 802.11ab/g/n/ac (Wi-Fi 5), simultaneous Transfer rate 300Mbps (2.4GHz), 433Mbps (5GHz) Security 64/128bit WEP, WPA, WPA2, WPS Antennas 2x external Connectors not available Power consumption 2.6W.', 'kom', '229.00', 21),
(79, 'ASUS RT AS GT-AX11000, WiFi Router Black, 90IG04H0-MO3G00\r\n', 'GT-AX11000, ADSL/Cable/Wireless Router, WAN 1x 10/100/1000 Mbps, LAN 4x10/100/1000Mbps, 802.11ac, Napajanje vanjsko, AX11000 ultimate AXperformance\r\n', 'kom', '2799.00', 21),
(80, 'ASUS RT-AC53, AC750 Wireless Router, 90IG02Z1-BM3000\r\n', 'Modem not available WAN 1x 1000Base-T LAN 2x 1000Base-T Wireless WLAN 802.11a/b/g/n/ac (Wi-Fi 5), simultaneous Transfer rate 300Mbps (2.4GHz), 433Mbps (5GHz) Security 64/128bit WEP, WPA, WPA2, WPS Antennas 3x external Connectors.', 'kom', '449.00', 21),
(81, 'ASUS RT-AC57U V3 Dual band AC1200 Wireless Router\r\n', 'RT-AC55U, ADSL/Cable/Wireless Router, WAN 1x 10/100/1000 Mbps, LAN 4x 10/100/1000Mbps, Napajanje vanjsko\r\n', 'kom', '449.00', 21),
(82, 'Mrežna kartica AXAGON PCEE-GRH, Gigabit Ethernet RJ45 + LP\r\n', 'PCEE-GRH, Sučelje PCIe x1, Priključci 1x Gb Ethernet, dodatni low profile lim\r\n', 'kom', '73.91', 22),
(83, 'Mrežna kartica TP-LINK TL-WN881ND, 300 Mbps, PCIe, bežična\r\n', 'Dimenzije 120.8 x 78.5 x 21.5mm\r\nModel: TP-Link TL-WN881ND\r\nPrijenos podataka: 11n: Do 300Mbps(dynamic)\r\n11g: Do 54Mbps(dynamic)\r\n11b: Do 11Mbps(dynamic)\r\nRadna frekvencija 2.400-2.4835GHz\r\nSučelje PCI Express(x1)\r\nWiFi standard IEEE 802.11n, IEEE 802.11g, IEEE 802.11b\r\nWireless EIRP: Do 20dBm(EIRP)', 'kom', '125.00', 22),
(84, 'Mrežna kartica TP-LINK Archer T5E, dual band AC1200 PCIe Wi-Fi adapter, Bluetooth 4.2\r\n', 'Archer T5E\r\nAC1200 Wi-Fi Bluetooth 4.2 PCIe Adapter\r\n\r\nUltra-Fast Speed – Make full use of your network with Wi-Fi speeds up to 1167 Mbps (867 Mbps on the 5 GHz band and 300 Mbps on the 2.4 GHz band)\r\nBluetooth 4.2 – Achieve 2.5× faster speed and 10× more packet capacity than Bluetooth 4.0\r\nBroad Wireless Range – Connect to your Wi-Fi in more parts of your home with two external high-gain antennas ensuring greater coverage and enhanced stability', 'kom', '279.00', 22),
(85, 'Mrežna kartica TP-LINK Archer TX3000E, dual band AX3000 PCIe Wi-Fi 6 adapter, Bluetooth 5.0, MU-MIMO, 2× 5dBi antene\r\n', 'Features\r\n- Unrivaled Wi-Fi 6 Speed: Breaks the gigabit barrier with speed up to 2402 Mbps (5 GHz) + 574 Mbps (2.4 GHz)\r\n- Smoother Experience: 75% lower latency ensures ultra-responsive real-time gaming\r\n- Reliable Connections: Intel Wi-Fi 6 chipset brings faster and clearer Wi-Fi to fully unlock the potential of your Wi-Fi 6 router', 'kom', '425.00', 22),
(86, 'Mrežni kabel ROLINE VALUE\r\n', '0.5m, Cat6, crveni', 'm', '5.61', 23),
(87, 'Mrežni kabel ROLINE VALUE\r\n', '0.5m, Cat6, plavi', 'm', '5.74', 23),
(88, 'Mrežni kabel ROLINE VALUE\r\n', '0.5m, Cat6, zeleni', 'm', '5.74', 23),
(89, 'Mrežni kabel ROLINE VALUE\r\n', '0.5m, Cat6, žuti', 'm', '5.74', 23),
(90, 'Mrežni kabel ROLINE VALUE\r\n', '1.0m, Cat6, plavi', 'm', '6.39', 23),
(91, 'Laptop ACER Aspire 1, N4500/4GB/64GB eMMC/IntelUHD/15.6\"FHD/Win 10 S (NX.A6WEX.001)\r\n', 'Kombinacija pouzdane tehnologije i praktičnog dizajna koju nudi računalo Aspire 1 zadovoljit će vaše svakodnevne potrebe pri radu na računalu.', 'kom', '2499.00', 25),
(92, 'Laptop ACER Aspire 3, A4-9120e/8GB/256GB SSD/AMD Radeon/14\"FHD/NoOS (NX.HEREX.008)\r\n', 'Za još bolje performanse Aspire 3 ima najnovije AMD-ove procesore, do 8 GB memorije i dovoljno snage za čitav radni dan. Rad, igranje ili opuštanje – obavljajte sve uz moćnu produktivnost.\r\n', 'kom', '2599.00', 25),
(98, 'Stolno računalo HGPC Prime R322G8S2HD, AMD Ryzen 3 2200G, AMD Radeon Vega 8, 8 GB, SSD 240 GB, HDD 1 TB, DVD-RW, Free DOS\r\n', 'Ukoliko tražite stručno sastavljena stolna računala profinjenog kućišta i najnovijih komponenata visokih performansa uz odličnu cijenu i dugoročno jamstvo na pravom ste mjestu.\r\nUz HGPC računala doživite eksplozivno moćne performanse uz pouzdanost kako u igri tako i kod radnih zadataka, jamstvo od 60 mjeseci, brzina, mogućnost nadogradnje savršeno odgovara vašem životnim stilu bilo da se računalo koristi u školi, za posao ili za kućnu zabavu.', 'kom', '3399.00', 24),
(95, 'Laptop LENOVO V14 ADA, AMD 3020e/4GB/256GB SSD/AMD Radeon/14\"FHD/FreeDOS (82C600E0SC)\r\n', 'Lenovo V14 s ekranom od 14\" učinkovito će se nositi s vašim potrebama. Dizajnirano kako bi vam osiguralo produktivnost i sigurnost podataka, pouzdan je svakodnevni poslovni partner. Manji dizajn vašem poslu daje elegantno, profesionalno lice.\r\n', 'kom', '2716.25', 25),
(96, 'Laptop ACER Extensa 15, AMD A6-9220e/4GB/256GB SSD/AMD Radeon/15.6\"FHD/FreeDOS (NX.EFVEX.002)\r\n', 'Laptopi Extensa 15 napravljeni su za poslovne ljudi kojima su potrebna računala dovoljno snažna za svakodnevnu upotrebu i rad. Ovo prijenosno računalo ima veliki 15,6“ Full HD ekran koji pruža ugodan osjećaj rada. Sastoji se od procesora AMD A-Series s 2 jezgre, AMD grafičkom karticom te 4 GB radne memorije uz 256 GB tvrdog diska što je idealno za svakodnevne poslove koji ne zahtijevaju veliku brzinu i snagu komponenti.\r\n\r\n', 'kom', '2899.00', 25),
(97, 'Laptop LENOVO Ideapad 3, AMD 3050U/8GB/512GB SSD/AMD Radeon/15.6\"FHD/FreeDOS (81W100AGSC)\r\n', 'AMD Athlon™ Silver 3050U (4C, 4MB cache, up to 3.2GHz), 8GB (4+4 onboard), SSD 512GB M.2,Integrated CPU, 15.6\"FHD (1920x1080) TN AG 220N, FreeDOS, WLAN 2X2AC+BT, 0.3M cam w/arrayMIC, FPR, 2g', 'kom', '2917.04', 25),
(99, 'Stolno računalo INTEL NUC Core i3 Mini PC H, Core i3 10110U, 8 GB, SSD 250 GB NVMe, Intel UHD, Wi-Fi 6, BT 5, Thunderbolt 3, Windows 10 Home (NUC10I3FNH_CTO)\r\n', 'Intel Core i3 10110U, 2100/4100 MHz, 2 Cores, 4 Threads\r\n1x8 GB DDR4, 2666 MHz, SODIMM (max 64 GB)\r\n2x SODIMM (1 slobodan)\r\nIntel UHD Graphics za 10. generaciju Intel procesora (integrirana grafika), 4K podrška, podrška za 3 ekrana\r\nSSD 250 GB, M.2 2280, PCIe NVMe', 'kom', '4511.55', 24),
(100, 'Stolno računalo HP 290 G4 MT, i5 10500, 8 GB, SSD 512 GB NVMe, Intel UHD 630, DVD-RW, Windows 10 Pro, tipk + miš (1C6T6EA)\r\n', 'Intel Core i3 10110U, 2100/4100 MHz, 2 Cores, 4 Threads\r\n1x8 GB DDR4, 2666 MHz, SODIMM (max 64 GB)\r\nHP računalo 290 G4 MT / i5-10500 / 8GB / 512GB SSD / Windows 10 pro 64/DVD-WR / 1yw / USB kbd / USB mouse\r\nHP računalo 290 G4 MT / i5-10500 / 8GB / 512GB SSD / Windows 10 pro 64/DVD-WR / 1yw / USB kbd / USB mouse\r\nSSD 250 GB, M.2 2280, PCIe NVMe\r\n1x GLAN, Wi-Fi 6, BT 5.0\r\n1x Thunderbolt 3 USB-C, 1x HDMI (2.0b), 1x USB 3.1 Gen2 Type-C, 3x USB 3.1 Gen2 Type-A, SDXC card slot', 'kom', '5069.00', 24),
(101, 'Stolno računalo HP AiO 27-dp0019ny, 27\" FHD IPS, AMD Ryzen 5 4500U, 8 GB, SSD 256 GB NVMe, AMD Radeon Graphics, Wi-Fi, WebCam, FreeDOS, tipk + miš, srebrno (236W4EA)\r\n', 'AMD Ryzen™ 4000 U-Series mobilni procesor s Radeon™ grafikom\r\nUz najviše dostupnih jezgri za ultratanka prijenosna računala i odaziv koji kreće u akciju za rad i igru, AMD Ryzen™ 4000 Series Mobile procesori vam daju performanse da biste učinili više, s bilo kojeg mjesta – brže nego ikada prije.\r\nPCIe SSD pohrana\r\nPodignite sustav za nekoliko sekundi brzinom munje, s do 256 GB PCIe SSD pohrane.\r\nDDR4 RAM', 'kom', '5549.00', 24),
(102, 'Stolno računalo LENOVO V50t, Intel i3 10100/8GB/256GB SDD NVMe/Intel UHD Graphics/Windows 10 Pro, 11ED002JCR\r\n', 'Model: Lenovo V50t 13IMB\r\nPart number: 11ED002JCR\r\nProcesor: Intel Core i3-10100 (4C / 8T, 3.6 / 4.3GHz, 6MB)\r\nChipset: Intel B460\r\nMemorija: 1x 8GB DIMM DDR4-2666\r\nGrafika: Integrated Intel UHD Graphics 630\r\nDisk: 256GB SSD M.2 2242 PCIe NVMe\r\nOptički pogon: 9.0mm DVD±RW\r\nKućište: Tower\r\nNapajanje: 180W 85%\r\nPriključci:\r\nPrednja strana:\r\n4x USB 3.1 Gen 1\r\n1x priključak za slušalice/mikrofon (3,5mm)\r\n1x priključak za slušalice (3,5mm)', 'kom', '4889.00', 24);

-- --------------------------------------------------------

--
-- Table structure for table `kategorija`
--

DROP TABLE IF EXISTS `kategorija`;
CREATE TABLE IF NOT EXISTS `kategorija` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `parentNaziv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kategorija`
--

INSERT INTO `kategorija` (`Id`, `parentNaziv`) VALUES
(1, 'Komponente'),
(2, 'Monitori'),
(3, 'Pisači i oprema'),
(4, 'Pohrana podataka'),
(5, 'Periferija'),
(6, 'Mreža'),
(7, 'Računala');

-- --------------------------------------------------------

--
-- Table structure for table `potkategorije`
--

DROP TABLE IF EXISTS `potkategorije`;
CREATE TABLE IF NOT EXISTS `potkategorije` (
  `IDPotkategorije` int(11) NOT NULL AUTO_INCREMENT,
  `NazivPotkategorije` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `KategorijaID` int(11) NOT NULL,
  PRIMARY KEY (`IDPotkategorije`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `potkategorije`
--

INSERT INTO `potkategorije` (`IDPotkategorije`, `NazivPotkategorije`, `KategorijaID`) VALUES
(1, 'Matične ploče', 1),
(2, 'Procesori', 1),
(3, 'Tvrdi diskovi', 1),
(4, 'Grafičke kartice', 1),
(5, 'Kućišta', 1),
(6, 'Napajanja', 1),
(7, 'Monitori', 2),
(8, 'Nosači za monitore', 2),
(9, 'Pisači', 3),
(10, 'Skeneri', 3),
(11, 'Tinte i toneri', 3),
(12, 'Memorijske kartice', 4),
(13, 'USB stickovi', 4),
(14, 'Eksterni tvrdi diskovi', 4),
(15, 'Eksterni SSD diskovi', 4),
(16, 'Tipkovnice', 5),
(17, 'Miševi', 5),
(18, 'PC zvučnici', 5),
(19, 'Slušalice', 5),
(20, 'Podloge za miševe', 5),
(21, 'Routeri i modemi', 6),
(22, 'Mrežne kartice', 6),
(23, 'Mrežni kabeli', 6),
(24, 'Stolna računala', 7),
(25, 'Prijenosna računala ', 7);

-- --------------------------------------------------------

--
-- Table structure for table `racun`
--

DROP TABLE IF EXISTS `racun`;
CREATE TABLE IF NOT EXISTS `racun` (
  `Sifra` int(11) NOT NULL,
  `ZaposlenikSifra` int(11) NOT NULL,
  `UkIznos` decimal(5,2) NOT NULL,
  `Datum` date NOT NULL,
  `StavkaId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Sifra`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stavka`
--

DROP TABLE IF EXISTS `stavka`;
CREATE TABLE IF NOT EXISTS `stavka` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Kolicina` int(11) NOT NULL,
  `UkCijena` decimal(5,2) NOT NULL,
  `IdArtikla` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `zaposlenik`
--

DROP TABLE IF EXISTS `zaposlenik`;
CREATE TABLE IF NOT EXISTS `zaposlenik` (
  `OIB` bigint(12) NOT NULL,
  `Ime` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prezime` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DatumRodjenja` date NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Placa` decimal(6,2) NOT NULL,
  `Uloga` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GodinaStaza` int(2) NOT NULL,
  `Lozinka` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TajniKljuc` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`OIB`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `zaposlenik`
--

INSERT INTO `zaposlenik` (`OIB`, `Ime`, `Prezime`, `DatumRodjenja`, `Email`, `Placa`, `Uloga`, `GodinaStaza`, `Lozinka`, `TajniKljuc`) VALUES
(12345678912, 'Roko', 'Kovač', '2000-08-18', 'rokokovac@gmail.com', '4500.00', 'Prodavač', 2, 'lozinka123', 'k5w64w4z4i'),
(98765432112, 'Ivan', 'Ivić', '1999-05-12', 'ivanivic@gmail.com', '5900.00', 'Prodavač', 4, '123Lozinka', 'pn35lpwfj8h');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
