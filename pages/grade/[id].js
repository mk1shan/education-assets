import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// Data for Media Studies (Art Stream)
const mediaStudiesFolderLink = "https://drive.google.com/drive/folders/1ctG24ct0CHLW3EMRubYDkSP2w3rg2aJ4?usp=sharing";

const mediaStudiesFiles = [
  { name: "_MEDIA_12_ශ්‍රේණිය_ප්‍රශ්නෝත්තර_සංග්‍රහය-1 - Hiruni Wijethunge.pdf", link: mediaStudiesFolderLink },
  { name: "01_සන්නිවේදන_අධ්‍යයනයෙහි_ආරම්භය_හා_විකාශය_lesson_short_note_book - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "02_සන්නිවේදනයේ_පදනම_lesson_short_note_book_Lahiruk_MEDIASTU_compressed - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "03_මූලික_සන්නිවේදන_වර්ග,_ස්වරූප_හා_ආකෘති_lesson_short_note_book - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "04_සාම්ප්‍රදායික_මාධ්‍ය_ජනමාධ්‍ය_හා_නව_මාධ්‍_lesson_short_note_book - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "05_සංස්කෘතිකාවබෝධය,_මාධ්‍යයේ_ස්වභාවය_සහ_එහි_බලපෑම_lesson_short_note - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "06_මාධ්‍ය_සාක්ෂරතාව_හා_මාධ්‍ය_චිචාරය_lesson_short_note_book_Lahiruk - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "07_නිර්මාණාත්මක_සන්නිවේදනය_lesson_short_note_book_Lahiruk_MEDIASTU - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "08_මහජන_සම්බන්ධතා_හා_සිද්ධි_කළමනාකරණය_lesson_short_note_book_Lahiruk - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "09_සංවර්ධනය_සඳහා_සන්නිවේදනය_lesson_short_note_book_Lahiruk_MEDIASTU - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "10_සන්නිවේදන_ප්‍රතිපත්ති_හා_මාධ්‍ය_නියාමනය_lesson_short_note_book - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "11_ශ්‍රී_ලංකාවේ_මාධ්‍ය_හා_සමකාලීන_ප්‍රවණතා_lesson_short_note_book - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "12_සන්නිවෙදන_සමීක්ශන_lesson_short_note_book_Lahiruk_MEDIASTU - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "13 ශ්‍රේණිය දකුණු පලාත ප්‍රශ්න පත්‍රය - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "13_ශ්‍රේණිය_2024_අනුමාන_ප්‍රශ්න_පත්‍රය_1_කොටස_013543 - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "2016 AL Communication & Media Studies Past Paper - Sinhala Medium - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "2017 AL Communication & Media Studies Past Paper - Sinhala Medium - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "2020 AL Communication & Media Studies Past Paper - Sinhala Medium - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "2024 NCP AL Media paper_241016_120408 - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "2024 NWP AL Media paper with marking scheme (1) - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "CamScanner 25-10-2025 11.41 - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "grade_13_2024_පෙරහුරු_ප්‍රශ්න_පත්‍රය_Paper_II_031609 - Waruni Nelusha.pdf", link: mediaStudiesFolderLink },
  { name: "mediaසියලු නිර්වචන _220213_115145 - Chamathka Ganeshan.pdf", link: mediaStudiesFolderLink }
];

// Data for Media Studies - Note Kokka
const mediaStudiesNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1OoBk93u1NmMoeX1q6AK5fKqh3lopCHPa?usp=sharing";
const mediaStudiesNoteKokkaFolderLink2 = "https://drive.google.com/drive/folders/1GiDkzRW1FcZeY895WJpZN8a61At2JMoF?usp=drive_link";

const mediaStudiesNoteKokkaFiles = [
  { name: "5_6199651842847146992 (1).pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "5_6199651842847146995.pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "5_6224235831922524824.pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "6.pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "7(1).pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "8(1).pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "9(1).pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "10(1).pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "11(1).pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "12(1).pdf", link: mediaStudiesNoteKokkaFolderLink },
  { name: "mediaසියලු නිර්වචන _220213_115145.pdf", link: mediaStudiesNoteKokkaFolderLink },
  // New folder files
  { name: "a¦+a+ûa¦+a+Æa¦Ü a+âa¦¦a+èa¦¦a+Æa+Ça+Öa+èa¦»a¦¦ a+Ça¦+a+èa¦£ a+âa+èa+Ça¦+a+ûa¦¦ a+äa+Å a¦åa¦Üa+ÿa¦¡a+Æ .pdf", link: mediaStudiesNoteKokkaFolderLink2 },
  { name: "a+âa+Æa¦¦a¦+a+Å a¦+a+Åa¦¦a+è_a¦¦ a¦ëa¦¡a+Æa+äa+Åa+âa¦¦ - History of Cinema.pdf", link: mediaStudiesNoteKokkaFolderLink2 },
  { name: "a+âa¦¦a+èa¦¦a+Æa+Ça+Öa+èa¦»a¦¦a¦¦a+Öa+è a¦¦a+Æa¦+a+èa+Ça¦áa¦¦ a¦¦a+Éa+äa+Éa¦»a+Æa¦+a+Æ a¦Üa+Æa¦+a+ôa¦+.pdf", link: mediaStudiesNoteKokkaFolderLink2 },
  { name: "a¦+a+äa¦óa¦¦ a+âa¦+a+èa¦¦a¦¦a+èa¦¦a¦¡a+Å a+äa+Å a+âa+Æa¦»a+èa¦¦a+Æ a¦Üa¦+a¦+a¦½a+Åa¦Üa¦+a¦½a¦¦.txt", link: mediaStudiesNoteKokkaFolderLink2 },
  { name: "a¦¦a+èGÇìa¦+a¦óa+Å a¦£a+öa+Ça¦¦a+èa+Ça+Æa¦»a+öa¦+a+Æ .pdf", link: mediaStudiesNoteKokkaFolderLink2 },
  { name: "a¦¦a¦+a¦»a+Åa¦¦a+ô a+âa¦¦a+èa¦¦a+Æa+Ça+Öa+èa¦»a¦¦ a¦Üa+è.pdf", link: mediaStudiesNoteKokkaFolderLink2 },
  { name: "communication approaches (3).pdf", link: mediaStudiesNoteKokkaFolderLink2 },
  { name: "comunication concept.pdf", link: mediaStudiesNoteKokkaFolderLink2 },
  { name: "Media Short note Book-1.pdf", link: mediaStudiesNoteKokkaFolderLink2 },
  { name: "s12tim42.pdf", link: mediaStudiesNoteKokkaFolderLink2 }
];

// Data for Accounting (Commerce Stream)
const accountingFolderLink = "https://drive.google.com/drive/folders/1Zhl9U1-xMQWvDVXFfmSlM0LstF-MMXfj?usp=sharing";
const accountingFolderLink2 = "https://drive.google.com/drive/folders/1GYmwfru9373j1G63IZGZIpgefbPxkXg8?usp=sharing";
const accountingFolderLink3 = "https://drive.google.com/drive/folders/1gYi4nVTyiF4qbDKlaVfrwM67_I5APbd7?usp=drive_link";

const accountingFiles = [
  { name: "1 ව්_යුහගත පිළිතුරු - Pawani Akarsha.pdf", link: accountingFolderLink },
  { name: "1 BF2023SN - Sachini Bulathsinhala.pdf", link: accountingFolderLink },
  { name: "2 SR&BE 2023 SN - Sachini Bulathsinhala.pdf", link: accountingFolderLink },
  { name: "4 ඒකකය - Pawani Akarsha.pdf", link: accountingFolderLink },
  { name: "7 M&FI SN new - Sachini Bulathsinhala.pdf", link: accountingFolderLink },
  { name: "8I SN - Sachini Bulathsinhala.pdf", link: accountingFolderLink },
  { name: "13 OM SN - Sachini Bulathsinhala.pdf", link: accountingFolderLink },
  { name: "2023 Accounting ඌව පලාත් MCQ - Unknown.pdf", link: accountingFolderLink },
  { name: "2023 Accounting බස්නාහිර පළාත් Sinhala paper 1 - Unknown.pdf", link: accountingFolderLink },
  { name: "2023 Accounting බස්නාහිර පළාත් Sinhala paper II - Unknown.pdf", link: accountingFolderLink },
  { name: "2024-AL-ACCOUNTING-PART-I-PAPER-SINHALA-MEDIUM-alevelapi.com-pdf - Chamathka Chandupa.pdf", link: accountingFolderLink },
  { name: "1764434130391448360357 - institute nithya.jpg", link: accountingFolderLink },
  { name: "1764434182611739165113 - institute nithya.jpg", link: accountingFolderLink },
  { name: "1764434206793730327663 - institute nithya.jpg", link: accountingFolderLink },
  { name: "1764434253446170476660 - institute nithya.jpg", link: accountingFolderLink },
  { name: "1764434275330196549344 - institute nithya.jpg", link: accountingFolderLink },
  { name: "1764434323835201383036 - institute nithya.jpg", link: accountingFolderLink },
  { name: "1764434506666106188532 - institute nithya.jpg", link: accountingFolderLink },
  { name: "1764434534087467060723 - institute nithya.jpg", link: accountingFolderLink },
  { name: "17644341586531460247944 - institute nithya.jpg", link: accountingFolderLink },
  { name: "17644342302431605453933 - institute nithya.jpg", link: accountingFolderLink },
  { name: "17644343043761850607036 - institute nithya.jpg", link: accountingFolderLink },
  { name: "17644343585371288657873 - institute nithya.jpg", link: accountingFolderLink },
  { name: "17644345814811272943394 - institute nithya.jpg", link: accountingFolderLink },
  { name: "17644346202611354707598 - institute nithya.jpg", link: accountingFolderLink },
  { name: "17644346551351706661626 - institute nithya.jpg", link: accountingFolderLink },
  { name: "17644346856561257182915 - institute nithya.jpg", link: accountingFolderLink },
  { name: "ACC Sinhala Grade 13 Part 1_240902_130546 - Unknown.pdf", link: accountingFolderLink },
  { name: "Acc Sinhala Grade 13- Part 2_240902_130633 - Unknown.pdf", link: accountingFolderLink },
  { name: "Acc_G12_3rd_Term_Q_&_ANS_01 - Sethumi Yuhansa.pdf", link: accountingFolderLink },
  { name: "Acc_G12_3rd_Term_Q_&_ANS_01 (1) - Sethumi Yuhansa.pdf", link: accountingFolderLink },
  { name: "Acc_G12_3rd_Term_Q_&_ANS_02 - Sethumi Yuhansa.pdf", link: accountingFolderLink },
  { name: "Acc_G12_3rd_Term_Q_&_ANS_03 - Sethumi Yuhansa.pdf", link: accountingFolderLink },
  { name: "Accounting 01,02 S Answers (2012) - Unknown.pdf", link: accountingFolderLink },
  { name: "ACCOUNTING FOCUS_final - Chamathka Chandupa.pdf", link: accountingFolderLink },
  { name: "Accounting paper 2 (S) - Unknown.pdf", link: accountingFolderLink },
  { name: "ACCOUNTING PROCESS (1) - Sachini Bulathsinhala.pdf", link: accountingFolderLink },
  { name: "Copy of 02.ගිණුම්කරණ සමීකරණය .pdf", link: accountingFolderLink },
  { name: "Copy of 03_ද්විත්ව_සටහන්_ගිණුම්කරණය_.pdf", link: accountingFolderLink },
  { name: "Copy of 04. මූලික සටහන් පොත් .pdf", link: accountingFolderLink },
  { name: "Copy of 05_ගිණුම්කරණ_සංකල්ප_හැඳින්වීම_.pdf", link: accountingFolderLink },
  { name: "Copy of 06_02_මූල්_ය_ප්_රකාශන_ගැලපිලි_.pdf", link: accountingFolderLink },
  { name: "Copy of 06.01. මූල්‍ය ප්‍රකාශන .pdf", link: accountingFolderLink },
  { name: "Copy of 07. නිෂ්පාදන ව්‍යාපාර .pdf", link: accountingFolderLink },
  { name: "Copy of 09. අසම්පූර්ණ සටහන් .pdf", link: accountingFolderLink },
  { name: "Copy of 10. හවුල් ව්‍යාපාර .pdf", link: accountingFolderLink },
  { name: "Copy of 13. අනුපාත විශ්ලේෂණය .pdf", link: accountingFolderLink },
  { name: "Copy of 14_01_කළමනාකරණ_ගිණුම්කරණය_තීරණ_ගැනීමේ_ක්_රියාවලියට_සම්බන්ධ_කරගැනීම.pdf", link: accountingFolderLink },
  { name: "Copy of 14_03_ශ්‍රම_කාලය_සම්බන්ධයෙන්_වාර්තා_කරයි_1.pdf", link: accountingFolderLink },
  // New folder files
  { name: "2024-AL-ACCOUNTING-PART-I-PAPER-SINHALA-MEDIUM-alevelapi.com-pdf.pdf", link: accountingFolderLink2 },
  { name: "accounting.pdf", link: accountingFolderLink2 },
  { name: "COMPANY - STRUCTURE.pdf", link: accountingFolderLink2 },
  { name: "ගිණුම්කරණය .pdf", link: accountingFolderLink2 },
  { name: "සංකල්ප.pdf", link: accountingFolderLink2 }
];

// Data for Accounting English Medium (Commerce Stream)
const accountingEMFolderLink = "https://drive.google.com/drive/folders/1jqD0Xk4MVF881wMPsRWnvJjXMg9U4mi3?usp=sharing";

const accountingEMFiles = [
  { name: "1. CHAPTER 01.pdf", link: accountingEMFolderLink },
  { name: "1) Unit 02 - Accounting Equations.pdf", link: accountingEMFolderLink },
  { name: "2. Accounting Equation.pdf", link: accountingEMFolderLink },
  { name: "2. CHAPTER 02.pdf", link: accountingEMFolderLink },
  { name: "2) Unit 04 - Prime Entry.pdf", link: accountingEMFolderLink },
  { name: "3. CHAPTER 3.pdf", link: accountingEMFolderLink },
  { name: "3. Prime entry books.pdf", link: accountingEMFolderLink },
  { name: "3) Unit 05 - Accounting Concepts.pdf", link: accountingEMFolderLink },
  { name: "4. CHAPTER 04 - Part 01.pdf", link: accountingEMFolderLink },
  { name: "4. CHAPTER 04 - Part 02.pdf", link: accountingEMFolderLink },
  { name: "4) Unit 06 - Sole Trade.pdf", link: accountingEMFolderLink },
  { name: "5) Unit 07 - Manufacturing Accounts.pdf", link: accountingEMFolderLink },
  { name: "6. ADDITIONAL QUESTIONS - sole traders.pdf", link: accountingEMFolderLink },
  { name: "6) Unit 08 - Non-Profit Organizations.pdf", link: accountingEMFolderLink },
  { name: "7. UNIT 07 - MANUFACTURING ACCOUNTS.pdf", link: accountingEMFolderLink },
  { name: "7) Unit 09 - Incomplete Records.pdf", link: accountingEMFolderLink },
  { name: "8) Unit 10 - Partnership Accounts.pdf", link: accountingEMFolderLink },
  { name: "9. UNIT 09.pdf", link: accountingEMFolderLink },
  { name: "9) Unit 11 - Accounting Standards.pdf", link: accountingEMFolderLink },
  { name: "10) Unit 12 - Limited Company.pdf", link: accountingEMFolderLink },
  { name: "10) Unit 15 - Marginal Costing.pdf", link: accountingEMFolderLink },
  { name: "11a. LKAS 01.pdf", link: accountingEMFolderLink },
  { name: "11b. LKAS 02.pdf", link: accountingEMFolderLink },
  { name: "11c. LKAS 16.pdf", link: accountingEMFolderLink },
  { name: "11d. LKAS 10.pdf", link: accountingEMFolderLink },
  { name: "11e. LKAS 07.pdf", link: accountingEMFolderLink },
  { name: "11f. LKAS 17.pdf", link: accountingEMFolderLink },
  { name: "11g. ADDITIONAL QUESTIONS - CO accs.pdf", link: accountingEMFolderLink },
  { name: "12) Unit 14 - Cost and Management Accounting.pdf", link: accountingEMFolderLink },
  { name: "13. unit 13 - ACC RATIOS.pdf", link: accountingEMFolderLink },
  { name: "2019-Advanced-Level-Exam-Accounting-Model-Paper-EM.pdf", link: accountingEMFolderLink },
  { name: "2025-07-17, 1925 Microsoft Lens.pdf", link: accountingEMFolderLink },
  { name: "2025-10-10, 1028 Microsoft Lens.pdf", link: accountingEMFolderLink },
  { name: "Accounting short note (Revised).pdf", link: accountingEMFolderLink },
  { name: "AL Accounting Notes.pdf", link: accountingEMFolderLink },
  { name: "AL Accounting(Unit-1 to 16)Short Notes.pdf", link: accountingEMFolderLink },
  { name: "Ratios part 2.pdf", link: accountingEMFolderLink },
  { name: "Sole traders - Part 1.pdf", link: accountingEMFolderLink },
  { name: "Sole traders II.pdf", link: accountingEMFolderLink }
];

// Data for Accounting Notes (Commerce Stream)
const accountingNotesFolderLink = "https://drive.google.com/drive/folders/1PT4hjBkEBsqV4g9z4EUo8jC2y8wSlbm6?usp=sharing";

const accountingNotesFiles = [
  { name: "accounting ratios.pdf", link: accountingNotesFolderLink },
  { name: "Accounting short note (Revised).pdf", link: accountingNotesFolderLink },
  { name: "Accounting short note for MCQ paper.pdf - English Medium", link: accountingNotesFolderLink },
  { name: "Copy of 5_6208314534185140461.pdf", link: accountingNotesFolderLink },
  { name: "Copy of 5_6255727799152148765.pdf", link: accountingNotesFolderLink },
  { name: "Copy of 5_6271758962152964440.pdf", link: accountingNotesFolderLink },
  { name: "Copy of 5_6278042830019494281.pdf", link: accountingNotesFolderLink },
  { name: "Copy of 5_6314248751489745218.pdf", link: accountingNotesFolderLink },
  { name: "Copy of 12.05. LKAS 10 .pdf", link: accountingNotesFolderLink },
  { name: "Copy of 28 LKAS 02 තොග ප්_රමිතය.pdf", link: accountingNotesFolderLink },
  { name: "Copy of Accounting concept..pdf", link: accountingNotesFolderLink },
  { name: "Copy of Accounting_Ratios_chathura_NalandaAdmin_කොමස්_පන්තිය_ෆේස්බුක්_පිටුව.pdf", link: accountingNotesFolderLink },
  { name: "Copy of accounting.pdf", link: accountingNotesFolderLink },
  { name: "Copy of accounting(1)_removed_removed (1).pdf", link: accountingNotesFolderLink },
  { name: "Copy of accounting(1)_removed_removed.pdf", link: accountingNotesFolderLink },
  { name: "Copy of BOL NAYA GELAPIMA Edit Page.pdf", link: accountingNotesFolderLink },
  { name: "Copy of Cash Flow Statements.pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250920-WA0060..pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250920-WA0061..pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250920-WA0062..pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250920-WA0063..pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250920-WA0064..pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250920-WA0065..pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250920-WA0066..pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250920-WA0067..pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250922-WA0026..pdf", link: accountingNotesFolderLink },
  { name: "Copy of DOC-20250922-WA0028..pdf", link: accountingNotesFolderLink },
  { name: "Copy of Fundamental_Concepts_of_Management_Accounts_Revision_Tute_01.pdf", link: accountingNotesFolderLink },
  { name: "Copy of LKAS 02 තොග -05.pdf", link: accountingNotesFolderLink },
  { name: "Copy of lkAS 1 a.pdf", link: accountingNotesFolderLink },
  { name: "Copy of LKAS 08(1).pdf", link: accountingNotesFolderLink },
  { name: "Copy of LKAS 16 - Revaluation_AL_CP.pdf", link: accountingNotesFolderLink },
  { name: "Copy of LKAS 16 (Study material 8).pdf", link: accountingNotesFolderLink },
  { name: "Copy of LKAS 16 01.pdf", link: accountingNotesFolderLink },
  { name: "Copy of lkas 37.pdf", link: accountingNotesFolderLink },
  { name: "Copy of lkas37 new111(1)-pages-deleted (1).pdf", link: accountingNotesFolderLink },
  { name: "Copy of null-1.pdf", link: accountingNotesFolderLink },
  { name: "Copy of null-2.pdf", link: accountingNotesFolderLink },
  { name: "Copy of null-3.pdf", link: accountingNotesFolderLink },
  { name: "Copy of null-4.pdf", link: accountingNotesFolderLink },
  { name: "Copy of null-5.pdf", link: accountingNotesFolderLink },
  { name: "Copy of null-6.pdf", link: accountingNotesFolderLink },
  { name: "Copy of null-7.pdf", link: accountingNotesFolderLink },
  { name: "Copy of null-8.pdf", link: accountingNotesFolderLink },
  { name: "Copy of Prime Entry.pdf", link: accountingNotesFolderLink },
  { name: "Copy of Revaluation of Property, Plant and Equipment.pdf", link: accountingNotesFolderLink },
  { name: "Copy of samithi sanwidhaana 2 new.pdf", link: accountingNotesFolderLink },
  { name: "Copy of SLFRS 16 - Leases (Short Note).pdf", link: accountingNotesFolderLink },
  { name: "Copy of SLFRS 16 Sinahala.pdf", link: accountingNotesFolderLink }
];

// Data for Accounting Papers (Commerce Stream)
const accountingPapersFolderLink = "https://drive.google.com/drive/folders/1c121V4qDSC-Mgn_EcwUF6Kq1FCuV7XTW?usp=sharing";

const accountingPapersFiles = [
  { name: "2022-AL-Accounting-Past-Paper-English-Medium.pdf", link: accountingPapersFolderLink },
  { name: "Accounting Equation - AL Sums.pdf", link: accountingPapersFolderLink },
  { name: "Accounting-and-Its-Need-Part-I.pdf", link: accountingPapersFolderLink },
  { name: "Accounting-Equation-Part-I.pdf", link: accountingPapersFolderLink },
  { name: "Accounting-Equation-Part-II.pdf", link: accountingPapersFolderLink },
  { name: "AL2021-Accounting.pdf", link: accountingPapersFolderLink },
  { name: "central province - Accounting 132024 (2).pdf", link: accountingPapersFolderLink },
  { name: "Copy of 5_6251167523136341024.pdf", link: accountingPapersFolderLink },
  { name: "Copy of 12 කළමනාකරණය MANAGEMENT.pdf", link: accountingPapersFolderLink },
  { name: "Copy of 2020 Royal College Accounting Prototype Paper Part-2.pdf", link: accountingPapersFolderLink },
  { name: "Copy of 2020.09.23 තක්ෂිලා paper II.pdf", link: accountingPapersFolderLink },
  { name: "Copy of 2020.09.24 විෂාඛා Paper II.pdf", link: accountingPapersFolderLink },
  { name: "Copy of acc (2).pdf", link: accountingPapersFolderLink },
  { name: "Copy of acc (3).pdf", link: accountingPapersFolderLink },
  { name: "Copy of acc (4).pdf", link: accountingPapersFolderLink },
  { name: "Copy of acc (5).pdf", link: accountingPapersFolderLink },
  { name: "Copy of acc (7).pdf", link: accountingPapersFolderLink },
  { name: "Copy of acc (8).pdf", link: accountingPapersFolderLink },
  { name: "Copy of Acco_G13_I,II Ans_2020.pdf", link: accountingPapersFolderLink },
  { name: "Copy of Acco_G13_I,IIpp_2019_Dakunu palath.pdf", link: accountingPapersFolderLink },
  { name: "Copy of account ආදර්ශ.pdf", link: accountingPapersFolderLink },
  { name: "Copy of Accounting Gampaha 13 - I.pdf", link: accountingPapersFolderLink },
  { name: "Copy of ananda college account .pdf", link: accountingPapersFolderLink },
  { name: "Copy of Company_Accounts_Q_2_Answer-1.pdf", link: accountingPapersFolderLink },
  { name: "Copy of Company_Accounts_Q_2-1.pdf", link: accountingPapersFolderLink },
  { name: "Copy of DOC-20250920-WA0073..pdf", link: accountingPapersFolderLink },
  { name: "Copy of DOC-20250920-WA0074..pdf", link: accountingPapersFolderLink },
  { name: "Copy of DOC-20250920-WA0075..pdf", link: accountingPapersFolderLink },
  { name: "Copy of DOC-20250920-WA0076..pdf", link: accountingPapersFolderLink },
  { name: "Copy of DOC-20250922-WA0025..pdf", link: accountingPapersFolderLink },
  { name: "Copy of grade 13 2nd term test accounting.pdf", link: accountingPapersFolderLink },
  { name: "Copy of Japura Acc Model Paper 2018.pdf", link: accountingPapersFolderLink },
  { name: "Copy of LKAS - 02.pdf", link: accountingPapersFolderLink },
  { name: "Copy of money 2022.pdf", link: accountingPapersFolderLink },
  { name: "Copy of Sg province Account paper.pdf", link: accountingPapersFolderLink },
  { name: "Copy of SM_Acco_T2_G12_I,II pp_2020.pdf", link: accountingPapersFolderLink },
  { name: "Copy of SM_Acco_T2_G13_I,II pp_2020.pdf", link: accountingPapersFolderLink },
  { name: "Copy of කළුතර account ii.pdf", link: accountingPapersFolderLink },
  { name: "Copy of ගිණුම්කරණ_සංකල්ප_සම්මන්ත්‍රණ.pdf", link: accountingPapersFolderLink },
  { name: "Copy of දකුණු_පළාත්_2023_12_ශ්‍රේණිය_අවසාන_වාර_පරීක්ෂණය_1.pdf", link: accountingPapersFolderLink },
  { name: "Copy of නොමිලේ_සම්මන්ත්‍රණය_SL_Accounting_2022.pdf", link: accountingPapersFolderLink },
  { name: "Copy of මතුගම acc 1.pdf", link: accountingPapersFolderLink },
  { name: "Copy of විශාකා_විද්_යාලය_කොලඹ_account_.pdf", link: accountingPapersFolderLink },
  { name: "Copy of ශුද්ධ_වූ_පවුලේ_බාලිකා_මහ_විදුහල_2024_AL_G12Acc_Part_1.pdf", link: accountingPapersFolderLink },
  { name: "Copy of ශුද්ධ_වූ_පවුලේ_බාලිකා_මහ_විදුහල_2024_AL_G12Acc_Part_2.pdf", link: accountingPapersFolderLink }
];

// Data for Chemistry (Science Stream)
const chemistryFolderLink = "https://drive.google.com/drive/folders/1okhr3Ogphw4OZ_2JaPzd4WOC7uN3tqGB?usp=sharing";
const chemistryFolderLink2 = "https://drive.google.com/drive/folders/1NkaE02aJyxRqm2iMqc47d0v23vsog7HV?usp=sharing";

const chemistryFiles = [
  { name: "විද්‍යුත් රසායනය Note Tute (Anushka Idunil Sir)", link: chemistryFolderLink },
  { name: "CHEMISTRY Gr 12 පරමාණුක ව්‍යුහය", link: chemistryFolderLink },
  { name: "Inorganic Chemistry විවරණය (1)", link: chemistryFolderLink },
  { name: "Inorganic IUPAC", link: chemistryFolderLink },
  { name: "Inorganic MCQ Point - Final P. 1-8", link: chemistryFolderLink },
  { name: "P ගොනුව-1", link: chemistryFolderLink },
  { name: "Unit 2A Theory Book full (Version 2.0)", link: chemistryFolderLink },
  { name: "Unit-1A-Theory-Book-Atomic-Structure-Note-SM-version-2.0", link: chemistryFolderLink },
  { name: "ආවර්තීය විචලන වර්ග", link: chemistryFolderLink },
  { name: "චාලක රසායනය විවරණය", link: chemistryFolderLink },
  { name: "පරමාණුක ව්යුහය Short Note (Amila Dasanayake)", link: chemistryFolderLink },
  { name: "ප්‍රතික්‍රියා short note", link: chemistryFolderLink },
  { name: "ශක්ති විද්‍යාව MCQ POINT COLLECTION", link: chemistryFolderLink },
  // New folder files
  { name: "AL Chemistry Resource Book Unit 1,2,3.pdf", link: chemistryFolderLink2 },
  { name: "AL Chemistry Resource Book Unit 4,5.pdf", link: chemistryFolderLink2 },
  { name: "Chemistry 2(1).pdf", link: chemistryFolderLink2 },
  { name: "Classified MCQs - Chemistry - Unit 1-2-3.pdf", link: chemistryFolderLink2 },
  { name: "Inoganic Short Note.pdf", link: chemistryFolderLink2 },
  { name: "sOMAL Chemistry Practical Hand book.pdf", link: chemistryFolderLink2 },
  { name: "Unit 3A (Chemical Calculations) Theory Book 1.pdf", link: chemistryFolderLink2 },
  { name: "Zahira_Collage_Chemistry_1st_Term_Test_paper_2019_Grade_12_English.pdf", link: chemistryFolderLink2 },
  { name: "චාලක රසායනය Full note with questions.pdf", link: chemistryFolderLink2 },
  { name: "චාලක රසායනය short note.pdf", link: chemistryFolderLink2 },
  { name: "ධර්මරාජ_විද්‍යාලය_නුවර _Chemistry_2_term_test_12_grade_.pdf", link: chemistryFolderLink2 }
];

// Data for Biology (Science Stream)
const biologyFolderLink = "https://drive.google.com/drive/folders/1IKg9SL7rOlZyxMixfD_VXbTZVbZJ76IC?usp=sharing";

const biologyFiles = [
  { name: "DEFINITIONS SM Final done - Hansika Nishshanka.pdf", link: biologyFolderLink },
  { name: "Practical Handbook - Buddhika Lakshan.pdf", link: biologyFolderLink },
  { name: "Biology_2021_විවරණය_හිරාන්_අමරසේකර_සර්_@ANYyScienceStudentHelpbot - Viraj Gamage.pdf", link: biologyFolderLink },
  { name: "2020-Sinhala - Kushmi Dahamsa.pdf", link: biologyFolderLink },
  { name: "2022-AL-English-Past-Paper - Gagani Apsara.pdf", link: biologyFolderLink },
  { name: "2024-AL-Common-General-Test-Paper-Sinhala-Medium - Gagani Apsara.pdf", link: biologyFolderLink },
  { name: "2025 AL FAST TRACK Unit-9 MICROBIOLOGY - Ayali Ashinsa.pdf", link: biologyFolderLink },
  { name: "20232024-AL-General-English-Marking-Scheme - Gagani Apsara.pdf", link: biologyFolderLink },
  { name: "20232024-AL-General-English-Paper-English-Medium - Gagani Apsara.pdf", link: biologyFolderLink },
  { name: "Bio නිර්වචන SM_256776_144735 - Lasithma Malthika.pdf", link: biologyFolderLink },
  { name: "Biology Grade 13 - Resource Book Unit 5 - Viraj Gamage.pdf", link: biologyFolderLink },
  { name: "Biology Grade 13 -Resource Book Unit 8 - Viraj Gamage.pdf", link: biologyFolderLink },
  { name: "biology pictures - 02 - Lasithma Malthika.pdf", link: biologyFolderLink },
  { name: "ImageToPDF 30-11-2025 07.43.01 - Dinuli Sahasra.pdf", link: biologyFolderLink },
  { name: "sALOM Biology Practical Handbook - Imasha Nethmini.pdf", link: biologyFolderLink },
  { name: "අන්තරාසර්ග පද්ධතිය - Vandana Samanpriya.pdf", link: biologyFolderLink },
  { name: "අස්ති පද්ධතිය - Vandana Samanpriya.pdf", link: biologyFolderLink },
  { name: "අස්ථි පද්ධතිය Short Note - Lasithma Malthika.pdf", link: biologyFolderLink },
  { name: "පරිණාමය Short Note 01 - Lasithma Malthika.pdf", link: biologyFolderLink },
  { name: "පරිසරය SM - Vandana Samanpriya.pdf", link: biologyFolderLink },
  { name: "ප්‍රතිශක්තිය - Vandana Samanpriya.pdf", link: biologyFolderLink },
  { name: "ප්‍රතිශක්තිය Short Note - Lasithma Malthika.pdf", link: biologyFolderLink },
  { name: "ශ්වසන පද්ධතිය - Vandana Samanpriya.pdf", link: biologyFolderLink },
  { name: "ස්නායු පද්ධතිය SM - Vandana Samanpriya.pdf", link: biologyFolderLink }
];

// Data for Physics (Science Stream)
const physicsFolderLink = "https://drive.google.com/drive/folders/16QP9eM-iwEsGPHbWnx6VRhzbCqTAl5CL?usp=drive_link";
const physicsNewFolderLink = "https://drive.google.com/drive/folders/18cz_Hc-6nqGKdzB9YRJNCCCYd11muECr?usp=sharing";
const physicsFolderLink3 = "https://drive.google.com/drive/folders/1mH3gK009r3VaysUaBln8qFVmoPEswdHE?usp=sharing";

const physicsFiles = [
  { name: "DocScanner 5 Aug 2025 23-54 - Amandi Herath", link: physicsNewFolderLink },
  { name: "Liner Motion 2027 Final - Bumashi Sharindi", link: physicsNewFolderLink },
  { name: "EM_Phy-Classified EQs (1991-2020)", link: physicsFolderLink },
  { name: "EM_Phy-Classified MCQs (1991-2022)", link: physicsFolderLink },
  { name: "EM_Phy-Classified SEQs (1991-2022)", link: physicsFolderLink },
  { name: "EM_Phy-Past Papers (1990-2025)", link: physicsFolderLink },
  { name: "EM_Phy-Reference Books", link: physicsFolderLink },
  { name: "EM_Phy-Resource Book", link: physicsFolderLink },
  { name: "EM_Phy-Reviews (2000-2023)", link: physicsFolderLink },
  { name: "SM_Phy-Past Papers (1980-2023)", link: physicsFolderLink },
  { name: "SM_Phy-Reviews (1995-2024)", link: physicsFolderLink },
  { name: "MCQ ANALYSIS I...pdf", link: physicsFolderLink },
  // New folder files
  { name: "Past papers", link: physicsFolderLink3 },
  { name: "short note", link: physicsFolderLink3 },
  { name: "part 01 දෛශික.pdf", link: physicsFolderLink3 },
  { name: "part 02 _ සරල රේඛීය චලිතය.pdf", link: physicsFolderLink3 },
  { name: "part 04 - ආනත ප්‍රක්ෂිප්ත.pdf", link: physicsFolderLink3 },
  { name: "part 05 _ සාපේක්ෂ ප්‍රවේගය.pdf", link: physicsFolderLink3 },
  { name: "part 6 - චලිත ප්‍රස්ථාර.pdf", link: physicsFolderLink3 },
  { name: "part_07_චලිතය_පිළිබඳ_නිව්ටන්_නියම.pdf", link: physicsFolderLink3 },
  { name: "ධාරා විද්‍යුතය theory + Questions.pdf", link: physicsFolderLink3 }
];

// Data for Combined Maths (Science Stream)
const combinedMathsFolderLink = "https://drive.google.com/drive/folders/1egPHQmVpwEpQFvJWmm7vXof8NULn7mYC?usp=sharing";

const combinedMathsFiles = [
  { name: "CM_ගුරුත්ව කේන්ද්‍රය shortnote.pdf", link: combinedMathsFolderLink },
  { name: "CM_දෛශික short note.pdf", link: combinedMathsFolderLink },
  { name: "REVISION_2021_STATICS_01_COMPLETE_.pdf", link: combinedMathsFolderLink },
  { name: "REVISION_2021_STATICS_02_COMPLETE_MODULE.pdf", link: combinedMathsFolderLink },
  { name: "REVISION_2021_TRIGONOMETRY_COMPLETE_MODULE.pdf", link: combinedMathsFolderLink },
  { name: "Work-and-Energy-REVISION-2021.pdf", link: combinedMathsFolderLink },
  { name: "ආවේගය හා ගැටුම් tute.pdf", link: combinedMathsFolderLink },
  { name: "ගණිත අභ්‍යුහනය මූලධර්මය.pdf", link: combinedMathsFolderLink },
  { name: "සරල ශ්‍රේණි tute.pdf", link: combinedMathsFolderLink },
  { name: "සාපේක්ෂ ත්වරණය tute.pdf", link: combinedMathsFolderLink }
];

// Data for Economics (Commerce Stream)
const econFolderLink = "https://drive.google.com/drive/folders/10A43cuXuXsPvc63Wa4QSaot7KFoqNJaS?usp=sharing";

const econFiles = [
  { name: "2.1 - Jimi.pdf", link: econFolderLink },
  { name: "2.2 - Jimi.pdf", link: econFolderLink },
  { name: "2.3 - Jimi.pdf", link: econFolderLink },
  { name: "2.4 - Jimi.pdf", link: econFolderLink },
  { name: "2.6 - Jimi.pdf", link: econFolderLink },
  { name: "2.7 - Jimi.pdf", link: econFolderLink },
  { name: "3පාඩම_වෙලදපොට_රජයේ_මැදිහත්_වීම්_1 (5) - Manuka Methdini.pdf", link: econFolderLink },
  { name: "2018 econ 1st & 2nd - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "2019 econ 1st & 2nd - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "2020 econ 1st - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "2020 econ 2nd - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "2020-AL-Economics-Marking-Scheme-–-Sinhala-Medium - Sineth Sadalu.pdf", link: econFolderLink },
  { name: "2021 econ 1st - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "2021 econ 2nd - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "2021-AL-Econ-Past-Paper-Sinhala-Medium - Sineth Sadalu.pdf", link: econFolderLink },
  { name: "2022 (23)econ 1st - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "2022(23) econ 2nd - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "2023 econ 1st - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "2024 econ 1st & 2nd - Chanuri Nishara.pdf", link: econFolderLink },
  { name: "20232024-AL-Economics-Marking-Scheme-Sinhala-Medium (1) - Sineth Sadalu.pdf", link: econFolderLink },
  { name: "Eco_1.1_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_1.2_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_1.3_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_1.4_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_1.5_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_1.6_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_1.7_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_1.8_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_1.9_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.1_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.2_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.3_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.4_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.5_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.6_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.7_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.8_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.9_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.10_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.11_lo - Jimi.pdf", link: econFolderLink },
  { name: "Eco_2.12_lo - Jimi.pdf", link: econFolderLink },
  { name: "ECON 1 පාඩම - Manuka Methdini.pdf", link: econFolderLink },
  { name: "ECON 03rd Lesson - Unknown.pdf", link: econFolderLink },
  { name: "Econ All lessons - Unit Papers - Reshana Gamage.pdf", link: econFolderLink },
  { name: "Econ lesson 3 theory - RMB Rathnayaka", link: econFolderLink },
  { name: "ECON RAPID MCQ PACK Lesson 01 - RMB Rathnayaka.pdf", link: econFolderLink },
  { name: "Econ_I,IIpp_2018 - Sethumi Yuhansa.PDF", link: econFolderLink },
  { name: "Econ-G-13 Uva-province-model paper -Answe - RMB Rathnayaka.pdf", link: econFolderLink },
  { name: "Econ-G-13 Wayaba-province-model paper -Answe - RMB Rathnayaka.pdf", link: econFolderLink },
  { name: "Economics Unit 1 T - Dilmi Ranaweera.pdf", link: econFolderLink },
  { name: "Economics Unit 2 T - Dilmi Ranaweera", link: econFolderLink },
  { name: "Economics Unit 3 T - Dilmi Ranaweera", link: econFolderLink },
  { name: "Economics Unit 4 T - Dilmi Ranaweera", link: econFolderLink },
  { name: "Economics Unit 5 T - Dilmi Ranaweera", link: econFolderLink }
];

// Data for Business Studies (Commerce Stream)
const businessStudiesFolderLink = "https://drive.google.com/drive/folders/1Tz5wXzQP-5S_7GUEF_NQNqBVTmPo03y9?usp=sharing";

const businessStudiesFiles = [
  { name: "12 BS 1.0 (1) - Sineth Sadalu.pdf", link: businessStudiesFolderLink },
  { name: "12 managment SN 1 - Chamathka Chandupa.pdf", link: businessStudiesFolderLink },
  { name: "13 OM SN - Chamathka Chandupa.pdf", link: businessStudiesFolderLink },
  { name: "15.මූල්‍ය කළමනාකරණය - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "16_මානව_සම්පත්_කළමනාකරණය - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "2024 bs 1st & 2nd - Chanuri Nishara.pdf", link: businessStudiesFolderLink },
  { name: "Bs - Punsala Hewage.pdf", link: businessStudiesFolderLink },
  { name: "BS 5.6.11 lessons - Hesara wickramasinghe.pdf", link: businessStudiesFolderLink },
  { name: "BS FINAL PAPER 02 - 02 - Unknown.pdf", link: businessStudiesFolderLink },
  { name: "BS_I,II Ans_dakunu palatha_2019 - Sethumi Yuhansa.pdf", link: businessStudiesFolderLink },
  { name: "BuisStu_I,IIpp-2018 - Sethumi Yuhansa.PDF", link: businessStudiesFolderLink },
  { name: "BuisStu_I,IIpp-2018 (1) - Sethumi Yuhansa.PDF", link: businessStudiesFolderLink },
  { name: "Busi_T2_I,II pp_dakunu palatha_2019 - Sethumi Yuhansa.pdf", link: businessStudiesFolderLink },
  { name: "Busi_T2_I,II pp_dakunu palatha_2019 (1) - Sethumi Yuhansa.pdf", link: businessStudiesFolderLink },
  { name: "Business studies_12_Unit exam_ 01 - Sineth Sadalu.pdf", link: businessStudiesFolderLink },
  { name: "Business-Studies-Marking-Scheme-Sinhala-Medium - Unknown.pdf", link: businessStudiesFolderLink },
  { name: "BusiStu_I,IIans_2018 - Sethumi Yuhansa.PDF", link: businessStudiesFolderLink },
  { name: "c4095ebe-ee2a-451f-8ef7-ca976102c2a1 - Mayanjana Hewagamage.PDF", link: businessStudiesFolderLink },
  { name: "Classify The Information System - Unknown.pdf", link: businessStudiesFolderLink },
  { name: "Grade-12-Business-Studies-2nd-Term-Test-Paper-With-Answers-2020-North-Western-Province - Sineth Sadalu.pdf", link: businessStudiesFolderLink },
  { name: "sGr13TG Business - Punsala Hewage.pdf", link: businessStudiesFolderLink },
  { name: "SM_Bus_G12_T3_I,II pp Ans_2018 - Sethumi Yuhansa.pdf", link: businessStudiesFolderLink },
  { name: "SM_Bus_T3_G12_I,II pp Ans_2019 - Sethumi Yuhansa.pdf", link: businessStudiesFolderLink },
  { name: "අලෙවිකරණය 14 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "කළමණාකරණය 12 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "ගනුදෙනු කළ හැකි ලියවිලි ( දැනුමට යමක් page ) - Unknown.pdf", link: businessStudiesFolderLink },
  { name: "නිර්වචන 02 - Unknown.pdf", link: businessStudiesFolderLink },
  { name: "නිර්වචන. - Unknown.1", link: businessStudiesFolderLink },
  { name: "ප්‍රවාහනය හා සැපයුම් සේවා 10 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "මුදල් හා මූල්‍ය ආයතන 7 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "මූල්‍ය වෙළදපොල - Unknown.pdf", link: businessStudiesFolderLink },
  { name: "මෙහෙයුම් කළමණාකරණය 13 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "රක්ශනය 8 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "රජය ව්‍ය්‍රාපර - Jimi.pdf", link: businessStudiesFolderLink },
  { name: "රජය හා ව්‍යාපාර 3 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "වරලත් ව්‍යාපාර Franchises - Unknown.pdf", link: businessStudiesFolderLink },
  { name: "විදේශ වෙළදාම (දැනුමට යමක් FB PAGE) - Unknown.pdf", link: businessStudiesFolderLink },
  { name: "වියාපාර mcQ 500පිලිතුරු - Chamathka Chandupa.pdf", link: businessStudiesFolderLink },
  { name: "වියාපාර mcQ 500පිලිතුරු - Punsala Hewage.pdf", link: businessStudiesFolderLink },
  { name: "වියාපාර_mcQ_500ප්_රශ්න_පොත_poto_copy - Chamathka Chandupa.pdf", link: businessStudiesFolderLink },
  { name: "වියාපාර_mcQ_500ප්_රශ්න_පොත_poto_copy - Chanuri Nishara.pdf", link: businessStudiesFolderLink },
  { name: "වියාපාර_mcQ_500ප්_රශ්න_පොත_poto_copy - Enuthi Methasha.pdf", link: businessStudiesFolderLink },
  { name: "වියාපාර_mcQ_500ප්_රශ්න_පොත_poto_copy - Punsala Hewage.pdf", link: businessStudiesFolderLink },
  { name: "වියාපාර_mcQ_500ප්_රශ්න_පොත_poto_copy.pdf", link: businessStudiesFolderLink },
  { name: "ව්‍යවසායකත්වය 5 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "ව්‍යාපාර පදනම හා පරිසරය 1 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "ව්‍යාපාර සන්විදාන 4.1 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "සන්නිවේදනය 9 - Anupa Indeewara.pdf", link: businessStudiesFolderLink },
  { name: "සමාජ වගකීම_ - Jimi.pdf", link: businessStudiesFolderLink },
  { name: "සමාජ වගකීම් හා අචාරධර්ම 2 - Anupa Indeewara.pdf", link: businessStudiesFolderLink }
];

// Data for Engineering Tech (Technology Stream)
const etFolderLink = "https://drive.google.com/drive/folders/1I7bDOPzzKkNf6RgkpPAf25iNcJhLlMbG?usp=sharing";
const etNewFolderLink = "https://drive.google.com/drive/folders/1VdfeMKs8r4qbzMR9bFjFoQ60sQ2643pT?usp=drive_link";

const etFiles = [
  { name: "Short Notes", link: etNewFolderLink },
  { name: "Syllabus", link: etNewFolderLink },
  { name: "Teacher Guide", link: etNewFolderLink },
  { name: "TextBook", link: etNewFolderLink },
  { name: "hadinwima.txt", link: etNewFolderLink },
  
  // Existing files
  { name: "2015 et", link: etFolderLink },
  { name: "2016 et", link: etFolderLink },
  { name: "2017 et", link: etFolderLink },
  { name: "2018 et", link: etFolderLink },
  { name: "2019 et", link: etFolderLink },
  { name: "2020 et", link: etFolderLink },
  { name: "2021 et", link: etFolderLink },
  { name: "2022 et", link: etFolderLink },
  { name: "2023 et structure", link: etFolderLink },
  { name: "2023 ET", link: etFolderLink },
  { name: "2024 ET", link: etFolderLink },
  { name: "Answers Folder", link: etFolderLink }
];

// Data for ICT (Technology Stream)
const ictFolderLink = "https://drive.google.com/drive/folders/1qmF7DlnemUtyVkq4YSfR8404MGNY4ZMc?usp=sharing";
const ictNewFolderLink = "https://drive.google.com/drive/folders/1xc5jnO4AJqiittZOcbryFkpNYh_n4z5v?usp=drive_link";

const ictFiles = [
  { name: "short notes", link: ictNewFolderLink },
  { name: "Syllabus", link: ictNewFolderLink },
  { name: "Teachers Guide", link: ictNewFolderLink },
  { name: "Text Book", link: ictNewFolderLink },
  { name: "hadinwima.txt", link: ictNewFolderLink },

  // Existing files
  { name: "Answers", link: ictFolderLink },
  { name: "විවරණ 2015-2024", link: ictFolderLink },
  { name: "2011 ict", link: ictFolderLink },
  { name: "2012 ict", link: ictFolderLink },
  { name: "2013 ict", link: ictFolderLink },
  { name: "2014 ict", link: ictFolderLink },
  { name: "2015 ict", link: ictFolderLink },
  { name: "2016 ict", link: ictFolderLink },
  { name: "2017 ict", link: ictFolderLink },
  { name: "2018 ict", link: ictFolderLink },
  { name: "2018-AL-ICT-Marking-Scheme-Sinhala-Medium - Ridmi Wijesinghe", link: ictFolderLink },
  { name: "2019 ict. Pdf", link: ictFolderLink },
  { name: "2019-AL-ICT-Marking-Scheme-Sinhala-Medium - Ridmi Wijesinghe", link: ictFolderLink },
  { name: "2020 AL ICT Past Paper - Sinhala Medium - Ridmi Wijesinghe", link: ictFolderLink },
  { name: "2020 ict", link: ictFolderLink },
  { name: "2020-AL-Information-And-Communication-Technology-Marking-Scheme-–-Sinhala-Medium - Ridmi Wijesinghe", link: ictFolderLink },
  { name: "2021 AL ICT Past Paper - Sinhala Medium - Ridmi Wijesinghe", link: ictFolderLink },
  { name: "2021 ict. Pdf", link: ictFolderLink },
  { name: "2021-AL-ICT-Marking-Scheme-Sinhala-Medium - Ridmi Wijesinghe", link: ictFolderLink },
  { name: "2022 ict", link: ictFolderLink },
  { name: "2022-AL-ICT-MARKING-SCHEME-NEW-OLD-SYLLABUS-SINHALA-MEDIUM-AlevelApi-PDF - Ridmi Wijesinghe", link: ictFolderLink },
  { name: "2023 ICT", link: ictFolderLink },
  { name: "2024 ict marking - Chamathka Chandupa", link: ictFolderLink },
  { name: "2024 ICT", link: ictFolderLink },
  { name: "2025 AL ICT GAMPAHA ZONAL PAPER - Ridmi Wijesinghe", link: ictFolderLink },
  { name: "50002_2024-10-20_00-48-54", link: ictFolderLink },
  { name: "50002_2024-10-20_22-32-23", link: ictFolderLink },
  { name: "20232024-AL-ICT-Marking-Scheme-Sinhala-Medium - Ridmi Wijesinghe", link: ictFolderLink },
  { name: "al-2024-sinhala_2025-06-27_11-03-58", link: ictFolderLink },
  { name: "Copy of essay paper 2025 - Chamathka Chandupa", link: ictFolderLink },
  { name: "Document from Jithmi Kaveesha - Jimi", link: ictFolderLink },
  { name: "MCQ 01 python print Sinhala", link: ictFolderLink },
  { name: "OS notes - Nadun Rajapaksha", link: ictFolderLink },
  { name: "Paper 35 RBV-SM-part1", link: ictFolderLink },
  { name: "pie chart", link: ictFolderLink },
  { name: "Wayamba MCQ 2025_251126_212350", link: ictFolderLink }
];

// Data for SFT (Technology Stream)
const sftFolderLink = "https://drive.google.com/drive/folders/1tZmFRTfg3KYtHGbMqdjlcwWIOifnCwtG?usp=sharing";

const sftFiles = [
  { name: "Answers", link: sftFolderLink },
  { name: "2015 sft", link: sftFolderLink },
  { name: "2016 sft", link: sftFolderLink },
  { name: "2017 sft", link: sftFolderLink },
  { name: "2018 sft", link: sftFolderLink },
  { name: "2019 sft. pdf", link: sftFolderLink },
  { name: "2020 sft", link: sftFolderLink },
  { name: "2021 sft", link: sftFolderLink },
  { name: "2022 sft", link: sftFolderLink },
  { name: "2023 sft", link: sftFolderLink }
];

// Data for BST (Technology Stream)
const bstFolderLink = "https://drive.google.com/drive/folders/1m-1sOfCxWYWctV1j6Ir1lRKsVgb76v-b?usp=drive_link";

const bstFiles = [
  { name: "Short Notes", link: bstFolderLink },
  { name: "Syllabus", link: bstFolderLink },
  { name: "Teachers Guide", link: bstFolderLink },
  { name: "TextBook", link: bstFolderLink },
  { name: "BST Subjects.txt", link: bstFolderLink },
  { name: "hadinwima.txt", link: bstFolderLink }
];

// Data for Geography (Arts Stream)
const geoFolderLink = "https://drive.google.com/drive/folders/1dlWFtKKampkFivA5IAXl76RJshapd9xU?usp=sharing";

const geoFiles = [
  { name: "♨️භෞතික_භූගෝල_විද්‍යාව(1) - Hiruni Wijethunge", link: geoFolderLink },
  { name: "17644827207084807018727028412062 - Gangani Sasadara.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105301 - Samadi Paramitha.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105310 - Samadi Paramitha.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105316 - Samadi Paramitha.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105323 - Samadi Paramitha.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105329 - Samadi Paramitha.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105338 - Samadi Paramitha.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105343 - Samadi Paramitha.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105400 - Samadi Paramitha.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105411 - Samadi Paramitha.jpg", link: geoFolderLink },
  { name: "IMG_20251130_105416 - Samadi Paramitha.jpg", link: geoFolderLink }
];

// Data for Geography Note Kokka (Arts Stream)
const geoNoteKokkaFolderLink = "https://drive.google.com/drive/folders/198Z48q-hl9n4H-Ej18ORerWnvNoHK4ox?usp=drive_link";

const geoNoteKokkaFiles = [
  { name: "♨️ප්‍රායෝගික_භූගෝල_විද්‍යාව.pdf", link: geoNoteKokkaFolderLink },
  { name: "♨️භෞතික_භූගෝල_විද්‍යාව.pdf", link: geoNoteKokkaFolderLink },
  { name: "♨️මානුෂ_භූගෝල_විද්‍යාව.pdf", link: geoNoteKokkaFolderLink },
  { name: "2025Geo_Answer_Sheet_අධ්‍යාපන_අමාත්‍යාංශය_251102_234407.pdf", link: geoNoteKokkaFolderLink },
  { name: "2025Geo_අධ්‍යාපන_අමාත්‍යාංශය_251104_213509.pdf", link: geoNoteKokkaFolderLink },
  { name: "Geography Papers AL..pdf", link: geoNoteKokkaFolderLink },
  { name: "geography සිතියම් pdf.pdf", link: geoNoteKokkaFolderLink },
  { name: "GIS (2).pdf", link: geoNoteKokkaFolderLink },
  { name: "GIS.pdf", link: geoNoteKokkaFolderLink },
  { name: "නවීන_සිතියම්_විද්‍යාව_SADU.pdf", link: geoNoteKokkaFolderLink },
  { name: "සිතියම් පොත.pdf", link: geoNoteKokkaFolderLink },
  { name: "සිතියම් ලකුනු කිරිම.pdf", link: geoNoteKokkaFolderLink }
];

// Data for Political Science (Arts Stream)
const polSciFolderLink = "https://drive.google.com/drive/folders/1-UlfuKhBchmQVKnx6yRCH6S2TMWXLkRM?usp=sharing";

const polSciFiles = [
  { name: "07 ps - Hiruni Wijethunge.pdf", link: polSciFolderLink },
  { name: "08 ps - Hiruni Wijethunge.pdf", link: polSciFolderLink },
  { name: "1978 දෙවන ජනරජ ආණ්ඩුක්‍රම ව්‍යවස්ථාව - Hiruni Wijethunge.pdf", link: polSciFolderLink },
  { name: "රාජ්‍යය සහ එහි භූමිකාව - Hiruni Wijethunge.pdf", link: polSciFolderLink }
];

// Data for Sinhala (Arts Stream)
const sinhalaFolderLink = "https://drive.google.com/drive/folders/1RiuTuWXhzqU9x6zAIftOgHCOtd5ly80B?usp=sharing";

const sinhalaFiles = [
  { name: "සද්ධර්මරත්නාවලිය උදෘත - Hiruni Wijethunge", link: sinhalaFolderLink },
  { name: "සද්ධර්මරත්නාවලිය__(1) - Hiruni Wijethunge", link: sinhalaFolderLink },
  { name: "සද්ධර්මලංකාරය විඡාර 4 - Hiruni Wijethunge", link: sinhalaFolderLink },
  { name: "සිංහල-පූජාවලිය-සද්ධර්මාලංකාරය_(1) - Hiruni Wijethunge", link: sinhalaFolderLink }
];

// Data for Japanese (Arts Stream)
const japaneseFolderLink = "https://drive.google.com/drive/folders/1TTWQ3XqLdSNyp3Xgxj7sfas31RuLbwZS?usp=sharing";

const japaneseFiles = [
  { name: "05. About Japan - 02 - Tharushi Ama.pdf", link: japaneseFolderLink },
  { name: "05. About Japan - 03 (4) - Tharushi Ama.pdf", link: japaneseFolderLink },
  { name: "AL රචනා සංග්‍රහය(日本🇯🇵) - Tharushi Ama.pdf", link: japaneseFolderLink },
  { name: "DOC060524-06052024102923 - Tharushi Ama.pdf", link: japaneseFolderLink },
  { name: "Kaiwa and Essay - Tharushi Ama.pdf", link: japaneseFolderLink },
  { name: "NIE Textbook Literature - Tharushi Ama.pdf", link: japaneseFolderLink },
  { name: "ViVt - Tharushi Ama.pdf", link: japaneseFolderLink },
  { name: "サチニさんといっしょ1_たんごリスト_1課⇒12課 - Tharushi Ama.pdf", link: japaneseFolderLink },
  { name: "サチニさんといっしょ2_単語リスト_13課⇒20課 - Tharushi Ama.pdf", link: japaneseFolderLink }
];

// Data for History (Arts Stream)
const historyFolderLink = "https://drive.google.com/drive/folders/1-nh895N3Knyqs8L-3LdQOASIgtlXxu4t?usp=sharing";

const historyFiles = [
  { name: "IMG_20251130_082734_726 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "IMG_20251130_082740_506 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "IMG_20251130_082751_065 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "IMG_20251130_082758_298 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "IMG_20251130_082812_454 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "IMG_20251130_082817_728 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "IMG_20251130_082827_239 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "IMG_20251130_082833_435 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "IMG_20251130_082841_346 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "IMG_20251130_082846_787 - Sachini Aluthgedara.jpg", link: historyFolderLink },
  { name: "අනුරාධපුර රාජධානි සමයේ මුල් භාගයේ එල්ල වූ ආක් - Deepani Nadeesha.pdf", link: historyFolderLink },
  { name: "නිශ්ශංක මල්ල රජ මුහුණ දුන් අභියෝග හා ඒවා ජයගත් ආකාරය පරීක්ෂා කරන්නන - Deepani Nadeesha.pdf", link: historyFolderLink },
  { name: "මහා විජයබාහු රජතුමාගේ කාර්යභාරය පිළිබඳ විමසීමක් කරන්න - Deepani Nadeesha.pdf", link: historyFolderLink },
  { name: "ශ්‍රී ලාංකේය ඉතිහාසය - Deepani Nadeesha.pdf", link: historyFolderLink }
];

// Data for Music (Arts Stream)
const musicFolderLink = "https://drive.google.com/drive/folders/1zqnfwwSrJkYg-gCQRm59OMfxDEEYUEku?usp=sharing";

const musicFiles = [
  { name: "grade-13-oriental-music-teacher-guide-619dd89168782 - Yesuru Banuka.pdf", link: musicFolderLink },
  { name: "sGr12OM OrienMusic - Yesuru Banuka.pdf", link: musicFolderLink },
  { name: "sGr12TG Orient Music - Yesuru Banuka.pdf", link: musicFolderLink }
];

// Data for French (Arts Stream)
const frenchFolderLink = "https://drive.google.com/drive/folders/1tIAkd23W46CPJ3sEqbH6HMWZWJJJaz0l?usp=sharing";

const frenchFiles = [
  { name: "French grammer", link: frenchFolderLink },
  { name: "GCE A/L French past papers", link: frenchFolderLink },
  { name: "20242025-OL-French-Past-Paper-and-Answers (1).pdf", link: frenchFolderLink },
  { name: "Adverbs of Quantity and Intensity.pdf", link: frenchFolderLink },
  { name: "Comparatives in French.pdf", link: frenchFolderLink },
  { name: "conquerir and such verbs.pdf", link: frenchFolderLink },
  { name: "Document 4.pdf", link: frenchFolderLink },
  { name: "Dont - Relative Pronoun (1).pdf", link: frenchFolderLink },
  { name: "Dont - Relative Pronoun.pdf", link: frenchFolderLink },
  { name: "Faire expressions.pdf", link: frenchFolderLink },
  { name: "fiche apprenant covid 19 fle.pdf", link: frenchFolderLink },
  { name: "French Answers.pdf", link: frenchFolderLink },
  { name: "french lit texts.pdf", link: frenchFolderLink },
  { name: "French Question Forms.pdf", link: frenchFolderLink },
  { name: "French Relative Pronouns - Summary (1).pdf", link: frenchFolderLink },
  { name: "French Relative Pronouns - Summary.pdf", link: frenchFolderLink },
  { name: "French verbs short notes.pdf .pdf", link: frenchFolderLink },
  { name: "French Verbs with Their Correct Prepositions.pdf", link: frenchFolderLink },
  { name: "Fri, Apr 3, 2020, 5_05 AM.pdf", link: frenchFolderLink },
  { name: "General Certificate of Education (Ordinary Level) Examination - 2015 December - French.pdf", link: frenchFolderLink },
  { name: "General Certificate of Education (Ordinary Level) Examination - 2016 December - French (New syllabus).pdf", link: frenchFolderLink },
  { name: "General Certificate of Education (Ordinary Level) Examination - 2017 December - French (New syllabus).pdf", link: frenchFolderLink },
  { name: "General Certificate of Education (Ordinary Level) Examination - 2018 December - French.pdf", link: frenchFolderLink },
  { name: "General Certificate of Education (Ordinary Level) Examination - 2019 December - French.pdf", link: frenchFolderLink },
  { name: "How to form a Participe présent _ Participe présent vs Gérondif.pdf", link: frenchFolderLink },
  { name: "IMG_8437.JPG", link: frenchFolderLink },
  { name: "IMG_8443.JPG", link: frenchFolderLink },
  { name: "IMG_8448.JPG", link: frenchFolderLink },
  { name: "IMG_8449.JPG", link: frenchFolderLink },
  { name: "IMG_8450.JPG", link: frenchFolderLink },
  { name: "IMG_8451.JPG", link: frenchFolderLink },
  { name: "IMG-20251129-WA0003.jpg", link: frenchFolderLink },
  { name: "Irregular Past Participles with the meanings.pdf", link: frenchFolderLink },
  { name: "Le Superlatif.pdf", link: frenchFolderLink },
  { name: "le_gerondif.pdf", link: frenchFolderLink },
  { name: "le.participe passe.pdf", link: frenchFolderLink },
  { name: "le.present continu.pdf", link: frenchFolderLink },
  { name: "Les Adverbes.pdf", link: frenchFolderLink },
  { name: "Les pronoms relatifs Qui, Que, Dont et Ou exercices.pdf", link: frenchFolderLink },
  { name: "Movable Adjectives.pdf", link: frenchFolderLink },
  { name: "negation.pdf", link: frenchFolderLink },
  { name: "NOUNS with TWO GENDERS.pdf", link: frenchFolderLink },
  { name: "Prepositions of Time.pdf", link: frenchFolderLink },
  { name: "Prepositions with mode of transportation in French.pdf", link: frenchFolderLink },
  { name: "Proceeding Direct Object Rule.pdf", link: frenchFolderLink },
  { name: "pronoms_relatifs_simples3 (2).pdf", link: frenchFolderLink },
  { name: "Reflexive (Pronominal) Verbs vs. Reciprocal Verbs.pdf", link: frenchFolderLink },
  { name: "Savoir and Connaitre.pdf", link: frenchFolderLink },
  { name: "Self Learning Kit French AL_241201_091626.pdf", link: frenchFolderLink },
  { name: "The Imperative Form in French.pdf", link: frenchFolderLink }
];

// Data for GRC (Greek and Roman Classics) (Arts Stream)
const grcFolderLink = "https://drive.google.com/drive/folders/1yviYxnz-29c7m56tCmyXnjND-XOK9FI3?usp=sharing";

const grcFiles = [
  { name: "Alcestis", link: grcFolderLink },
  { name: "Past papers", link: grcFolderLink },
  { name: "Philoctetes", link: grcFolderLink },
  { name: "Short Notes", link: grcFolderLink },
  { name: "Text Books - Mukherjee", link: grcFolderLink },
  { name: "The Mother in law by Terence", link: grcFolderLink },
  { name: "Works and Days", link: grcFolderLink },
  { name: "A Study OfRoman History.pdf", link: grcFolderLink },
  { name: "Alcestis.pdf", link: grcFolderLink },
  { name: "cato the old age (1).pdf", link: grcFolderLink },
  { name: "Philoctetes.pdf", link: grcFolderLink },
  { name: "The Mother in Law.pdf", link: grcFolderLink },
  { name: "the-voyage-of-argo-the-argonautica-apollonius-rieu--annas-archive.pdf", link: grcFolderLink },
  { name: "Wasps.pdf", link: grcFolderLink },
  { name: "Works and Days.pdf", link: grcFolderLink }
];

// Data for Home Science (Arts Stream) - Note Kokka
const homeScienceNoteKokkaFileLink = "https://drive.google.com/file/d/1hHQDeHsUQlkY5mpoHVGwkrRkimGn8r5F/view";

const homeScienceNoteKokkaFiles = [
  { name: "Home Science Resource", link: homeScienceNoteKokkaFileLink }
];

// Data for ICT Notes (Arts Stream)
const ictNotesFolderLink = "https://drive.google.com/drive/folders/16z9fg6YEKrPv2cg-PT5beBAbxG45hfAW?usp=sharing";

const ictNotesFiles = [
  { name: "ADDERS (Half and Full).jpg", link: ictNotesFolderLink },
  { name: "AL ICT Operating System.pdf", link: ictNotesFolderLink },
  { name: "AL ICT(Unit-1 to 13)Short Notes.pdf", link: ictNotesFolderLink },
  { name: "Applications of ICT.pdf", link: ictNotesFolderLink },
  { name: "basics 1.pdf", link: ictNotesFolderLink },
  { name: "Boolean Rules.pdf", link: ictNotesFolderLink },
  { name: "Computer Networks.pdf", link: ictNotesFolderLink },
  { name: "CSS Styles Format [IntInlEx] Syntax.pdf", link: ictNotesFolderLink },
  { name: "CSS Basics Syntax.pdf", link: ictNotesFolderLink },
  { name: "CSS Internal Style Selector Types [ElClGrId].pdf", link: ictNotesFolderLink },
  { name: "Database | FULL SUMMARY.pdf", link: ictNotesFolderLink },
  { name: "ER Summary.pdf", link: ictNotesFolderLink },
  { name: "GCE Advanced Level_ICT_AGENT TECHNOLOGY.pdf", link: ictNotesFolderLink },
  { name: "GCE Advanced Level_ICT_E COMMERCE.pdf", link: ictNotesFolderLink },
  { name: "GCE Advanced Level_ICT_INTERNET OF THINGS.pdf", link: ictNotesFolderLink },
  { name: "GCE Advanced Level_ICT_OPERATING SYSTEM.pdf", link: ictNotesFolderLink },
  { name: "GCE Advanced Level_ICT_PYTHON- English mediam.pdf", link: ictNotesFolderLink },
  { name: "GCE Advanced Level_Tamil_DATA COMMUNICATIONS & COMPUTER NETWORK.pdf", link: ictNotesFolderLink },
  { name: "History of Computer.pdf", link: ictNotesFolderLink },
  { name: "HTML (1).pdf", link: ictNotesFolderLink },
  { name: "HTML Basics Syntax .pdf", link: ictNotesFolderLink },
  { name: "HTML Basics.pdf", link: ictNotesFolderLink },
  { name: "HTML CheatSheet.jpg", link: ictNotesFolderLink },
  { name: "HTML Forms Syntax.pdf", link: ictNotesFolderLink },
  { name: "HTML summary form.pdf", link: ictNotesFolderLink },
  { name: "HTML Summary.pdf", link: ictNotesFolderLink },
  { name: "HTML-1.pdf", link: ictNotesFolderLink },
  { name: "html.pdf", link: ictNotesFolderLink },
  { name: "HTML.pdf", link: ictNotesFolderLink },
  { name: "ICT (Gr.12) - Teachers Guide.pdf", link: ictNotesFolderLink },
  { name: "ICT and Business Transformation.pdf", link: ictNotesFolderLink },
  { name: "Important theory units.pdf", link: ictNotesFolderLink },
  { name: "Internet Protocols.pptx", link: ictNotesFolderLink },
  { name: "Introduction to Internet of Things.pdf", link: ictNotesFolderLink },
  { name: "IOT Cheatsheet -khalifa niyas.pdf", link: ictNotesFolderLink },
  { name: "IOT-Unit_11(AL ICT)Tute.pdf", link: ictNotesFolderLink },
  { name: "Ip Notes English.pdf", link: ictNotesFolderLink },
  { name: "IT short notes ( GR10 - 08).pdf", link: ictNotesFolderLink },
  { name: "KEY TERMS AND DEFINITIONS UNITS 1-7.pdf", link: ictNotesFolderLink },
  { name: "Lesson 7.pdf", link: ictNotesFolderLink },
  { name: "Lesson 11.pdf", link: ictNotesFolderLink },
  { name: "logic gate summary.pdf", link: ictNotesFolderLink },
  { name: "Logic Gates | SR Latches & Adders.pdf", link: ictNotesFolderLink },
  { name: "Logic Gates-1.pdf", link: ictNotesFolderLink },
  { name: "Logic Gates.pdf", link: ictNotesFolderLink },
  { name: "Network 1.pdf", link: ictNotesFolderLink }
];

// Data for General English (Common Stream)
const generalEnglishFolderLink = "https://drive.google.com/drive/folders/1L6u_LFJpKxrA4w-OBSGjUzzqTQxdeDXI?usp=sharing";

const generalEnglishFiles = [
  { name: "Answers", link: generalEnglishFolderLink },
  { name: "2015 english", link: generalEnglishFolderLink },
  { name: "2016 english", link: generalEnglishFolderLink },
  { name: "2017 english", link: generalEnglishFolderLink },
  { name: "2018 english", link: generalEnglishFolderLink },
  { name: "2019 english", link: generalEnglishFolderLink },
  { name: "2020(1) english", link: generalEnglishFolderLink },
  { name: "2020(2) english", link: generalEnglishFolderLink },
  { name: "2021 english", link: generalEnglishFolderLink },
  { name: "2022 english", link: generalEnglishFolderLink },
  { name: "2023 english", link: generalEnglishFolderLink }
];

// Data for GIT (Common Stream)
const gitFolderLink = "https://drive.google.com/drive/folders/1HUYLmp_r7-bZjWCGNL7bF4Secgc5Yzgn?usp=sharing";

const gitFiles = [
  { name: "Answers", link: gitFolderLink },
  { name: "2010 GIT", link: gitFolderLink },
  { name: "2011 GIT", link: gitFolderLink },
  { name: "2012 GIT", link: gitFolderLink },
  { name: "2013 GIT", link: gitFolderLink },
  { name: "2014 GIT", link: gitFolderLink },
  { name: "2015 GIT", link: gitFolderLink },
  { name: "2016 GIT", link: gitFolderLink },
  { name: "2017 GIT", link: gitFolderLink },
  { name: "2023 GIT", link: gitFolderLink },
  { name: "2024 GIT", link: gitFolderLink }
];

// Data for Common Test (Common Stream)
const commonTestFolderLink = "https://drive.google.com/drive/folders/1oDPMCS0-YZM7BGguQqFhlCEqagu9n0tp?usp=sharing";

const commonTestFiles = [
  { name: "Answers", link: commonTestFolderLink },
  { name: "2015 common test", link: commonTestFolderLink },
  { name: "2016 common test", link: commonTestFolderLink },
  { name: "2017 common test", link: commonTestFolderLink },
  { name: "2018 common test", link: commonTestFolderLink },
  { name: "2019 common test", link: commonTestFolderLink },
  { name: "2020 common test", link: commonTestFolderLink },
  { name: "2021 common test", link: commonTestFolderLink },
  { name: "2022 common test", link: commonTestFolderLink },
  { name: "2023 common test", link: commonTestFolderLink },
  { name: "2024 Common Test", link: commonTestFolderLink }
];

// Data for Ordinary Level
// Updated to use individual subject folders
// const olFolderLink = "https://drive.google.com/drive/folders/13ag0Hlrz8OGYwAo1iV87vgxBQ6MaPHnk?usp=sharing";

// Data for O/L Art
const olArtFolderLink = "https://drive.google.com/drive/folders/1UyrpaFsadD6Co8VKboUozx5NrgItlr1e?usp=sharing";

const olArtFiles = [
  { name: "ART-Grade-11 - Copy - ANJANA Chamodya.pdf", link: olArtFolderLink },
  { name: "DOC-20250528-WA0008. - ANJANA Chamodya.pdf", link: olArtFolderLink },
  { name: "grade11-syllabus - ANJANA Chamodya.pdf", link: olArtFolderLink },
  { name: "HIGHLIGHTED ART BOOK g10 - ANJANA Chamodya.pdf", link: olArtFolderLink }
];

// Data for O/L Art Note Kokka
const olArtNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1EpXAL5maqmLVze_Xt_mz_8glhMB0p4X8?usp=drive_link";

const olArtNoteKokkaFiles = [
  { name: "English (1).pdf", link: olArtNoteKokkaFolderLink },
  { name: "Sinhala (1).pdf", link: olArtNoteKokkaFolderLink }
];

// Data for O/L Dancing Note Kokka
const olDancingNoteKokkaFolderLink = "https://drive.google.com/drive/folders/194l24EKiCHjv5bMZ0ST1BuEvHzuxJTA_?usp=drive_link";

const olDancingNoteKokkaFiles = [
  { name: "English.pdf", link: olDancingNoteKokkaFolderLink },
  { name: "Sinhala.pdf", link: olDancingNoteKokkaFolderLink }
];

// Data for O/L Drama Note Kokka
const olDramaNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1cX4sa-CgS_3dn4Xl9nE6j0Xbx8AjN-Wz?usp=drive_link";

const olDramaNoteKokkaFiles = [
  { name: "Drama English 01.pdf", link: olDramaNoteKokkaFolderLink },
  { name: "Drama English 02.pdf", link: olDramaNoteKokkaFolderLink },
  { name: "Drama English 03.pdf", link: olDramaNoteKokkaFolderLink },
  { name: "Drama sinhala 01.pdf", link: olDramaNoteKokkaFolderLink },
  { name: "Drama sinhala 02.pdf", link: olDramaNoteKokkaFolderLink },
  { name: "Drama sinhala 03.pdf", link: olDramaNoteKokkaFolderLink }
];

// Data for O/L Buddhism
const olBuddhismFolderLink = "https://drive.google.com/drive/folders/14i20AbDN0wJVMTvqBWLuKGrf3udoUK0q?usp=sharing";
const olBuddhismFolderLink2 = "https://drive.google.com/drive/folders/1ugSyoGAdnrGbzVtI7YxO3jo-ZXYgLPHA?usp=drive_link";

const olBuddhismFiles = [
  { name: "1 - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "2 (1) - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "3 - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "5 - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "6 - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "7 - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "9 - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "10 - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "11 - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "11 wsara 3 padama - Brian Makalanda.pdf", link: olBuddhismFolderLink },
  { name: "11 ශ්‍රේණිය 1 වාරය 1 පාඩම - Reshana Gamage.pdf", link: olBuddhismFolderLink },
  { name: "11. බුද්ධ ධර්මය කෙටි සටහන් අත්වැල-1 - Amodya Sewmindi.pdf", link: olBuddhismFolderLink },
  { name: "12 - ANJANA Chamodya.pdf", link: olBuddhismFolderLink },
  { name: "12 කාර්_ය පත්_රිකාව - බුද්ධ ධර්මය - Amodya Sewmindi.pdf", link: olBuddhismFolderLink },
  { name: "14 කාර්_ය පත්_රිකාව - බුද්ධ ධර්මය - Amodya Sewmindi.pdf", link: olBuddhismFolderLink },
  { name: "15 කාර්_ය පත්_රිකාව - බුද්ධ ධර්මය - Amodya Sewmindi.pdf", link: olBuddhismFolderLink },
  { name: "Buddhism 11 - Sujeewa Pradeep.pdf", link: olBuddhismFolderLink },
  { name: "Buddhism Grade 10 Unit 02 - susantha pushpakumara.pdf", link: olBuddhismFolderLink },
  { name: "Buddhism Grade 10 Unit 03 - susantha pushpakumara.pdf", link: olBuddhismFolderLink },
  { name: "Buddhism Grade 10 Unit 04 - susantha pushpakumara.pdf", link: olBuddhismFolderLink },
  { name: "Buddhism Grade 10 Unit 07 - susantha pushpakumara.pdf", link: olBuddhismFolderLink },
  { name: "Buddism all in one pdf by WAY TO A9 - Amodya Sewmindi.pdf", link: olBuddhismFolderLink },
  { name: "G.C.E. - OL - 2022 - Buddhism (11) - Marking Scheme - SM - Tharushi Ama.pdf", link: olBuddhismFolderLink },
  { name: "G.C.E. - OL - 2022 - Buddhism (11) - SM - Tharushi Ama.pdf", link: olBuddhismFolderLink },
  { name: "G11_බුද්ධාගම_ස්වයං_අධ්‍යයන_පත්‍රිකා_සංග්‍රහය - Sujeewa Pradeep.pdf", link: olBuddhismFolderLink },
  { name: "image - Kehan paper craft.jpg", link: olBuddhismFolderLink },
  { name: "IMG_20251130_110927 - Dilru -.jpg", link: olBuddhismFolderLink },
  { name: "IMG_20251130_111020 - Dilru -.jpg", link: olBuddhismFolderLink },
  { name: "IMG_20251130_111236_edit_11742889037650958 - Dilru -.jpg", link: olBuddhismFolderLink },
  { name: "IMG_20251130_111648_edit_11743132114008730 - Dilru -.jpg", link: olBuddhismFolderLink },
  { name: "IMG_20251130_112123_edit_11743406918421229 - Dilru -.jpg", link: olBuddhismFolderLink },
  { name: "IMG_20251130_112401_edit_11743561517894920 - Dilru -.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0011 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0012 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0013 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0014 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0015 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0016 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0017 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0018 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0019 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  { name: "IMG-20251125-WA0020 - Gamini jayasuriya.jpg", link: olBuddhismFolderLink },
  // New folder files
  { name: "IMG-20251130-WA0001.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0002.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0003.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0005.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0006.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0007.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0008.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0012.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0013.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0014.jpg", link: olBuddhismFolderLink2 },
  { name: "IMG-20251130-WA0015.jpg", link: olBuddhismFolderLink2 }
];

// Data for O/L Buddhism Note Kokka
const olBuddhismNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1l-xmiXN3Zs0VuastTjMRQ4qHEPMwRi9H?usp=sharing";

const olBuddhismNoteKokkaFiles = [
  { name: "English.pdf", link: olBuddhismNoteKokkaFolderLink },
  { name: "Sinhala.pdf", link: olBuddhismNoteKokkaFolderLink }
];

// Data for O/L Citizenship Education
const olCivicFolderLink = "https://drive.google.com/drive/folders/1W6QKzXiFiLaXmWTFznvuMU4-IQAt7jgt?usp=sharing";

const olCivicFiles = [
  { name: "1011 PURAWESI NOTES 2020 - Yashodya Nethmini Rathnayake.pdf", link: olCivicFolderLink },
  { name: "Civic-Education SM - Adeesh Thejan Ranaweera.pdf", link: olCivicFolderLink }
];

// Data for O/L Citizenship Education Note Kokka
const olCivicNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1koT9bejsVkbzeq-q4qDTAOJ9jxoB138Q?usp=drive_link";

const olCivicNoteKokkaFiles = [
  { name: "English.pdf", link: olCivicNoteKokkaFolderLink },
  { name: "Sinhala.pdf", link: olCivicNoteKokkaFolderLink }
];

// Data for O/L Commerce
const olCommerceFolderLink = "https://drive.google.com/drive/folders/1jaOQxEpC4LmCxA2PdR79W9B2MNR3NFlE?usp=sharing";

const olCommerceFiles = [
  { name: "Business-and-Accounting-Short-Note-in-Sinhala-Medium-01 - ANJANA Chamodya.pdf", link: olCommerceFolderLink },
  { name: "WhatsApp Image 2025-06-04 at 4.52.47 PM - ANJANA Chamodya.jpeg", link: olCommerceFolderLink },
  { name: "WhatsApp Image 2025-06-04 at 4.52.47 PM (1) - ANJANA Chamodya.jpeg", link: olCommerceFolderLink },
  { name: "WhatsApp Image 2025-06-04 at 4.52.48 PM - ANJANA Chamodya.jpeg", link: olCommerceFolderLink },
  { name: "WhatsApp Image 2025-06-04 at 4.52.48 PM (1) - ANJANA Chamodya.jpeg", link: olCommerceFolderLink },
  { name: "WhatsApp Image 2025-06-04 at 4.52.49 PM - ANJANA Chamodya.jpeg", link: olCommerceFolderLink },
  { name: "WhatsApp Image 2025-06-04 at 4.52.49 PM (1) - ANJANA Chamodya.jpeg", link: olCommerceFolderLink },
  { name: "WhatsApp Image 2025-06-04 at 4.52.50 PM - ANJANA Chamodya.jpeg", link: olCommerceFolderLink },
  { name: "WhatsApp Image 2025-06-04 at 4.52.50 PM (1) - ANJANA Chamodya.jpeg", link: olCommerceFolderLink },
  { name: "WhatsApp Image 2025-06-04 at 4.52.50 PM (2) - ANJANA Chamodya.jpeg", link: olCommerceFolderLink }
];

// Data for O/L Commerce Note Kokka
const olCommerceNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1QbEMXRs2yGTcfcP1F3_-zQjhh3HT6C5M?usp=drive_link";

const olCommerceNoteKokkaFiles = [
  { name: "English.pdf", link: olCommerceNoteKokkaFolderLink },
  { name: "Sinhala.pdf", link: olCommerceNoteKokkaFolderLink }
];

// Data for O/L English
const olEnglishFolderLink = "https://drive.google.com/drive/folders/1J0WzluIX5K50h0wZUcWw4QnRota0OSn1?usp=sharing";

const olEnglishFiles = [
  { name: "2018-3rd-english - sl ace.pdf", link: olEnglishFolderLink },
  { name: "english - sl ace.pdf", link: olEnglishFolderLink },
  { name: "English Short notes - Amodya Sewmindi.pdf", link: olEnglishFolderLink },
  { name: "EXPECTED ESSAY TOPICS - nalika dilrukshi.pdf", link: olEnglishFolderLink },
  { name: "final - nalika dilrukshi.pdf", link: olEnglishFolderLink },
  { name: "Grade-10-English-1st-Term-Test-Paper-2020-Southern-Province - sl ace.pdf", link: olEnglishFolderLink },
  { name: "Grade-10-English-2nd-Term-Test-Paper-2019-Southern-Province - sl ace.pdf", link: olEnglishFolderLink },
  { name: "Grade-11-english-3rd-NWP-sinhala-medium - nalika dilrukshi.pdf", link: olEnglishFolderLink },
  { name: "IMG-20250911-WA0001 - nalika dilrukshi.jpg", link: olEnglishFolderLink },
  { name: "IMG-20251028-WA0056 - nalika dilrukshi.jpg", link: olEnglishFolderLink },
  { name: "OL English Support Papers by Ministry - nalika dilrukshi.pdf", link: olEnglishFolderLink },
  { name: "Present Continuous Tense - ANJANA Chamodya.pdf", link: olEnglishFolderLink },
  { name: "sg10_eng_tt3_wp2016 - sl ace.pdf", link: olEnglishFolderLink },
  { name: "Simple Past Tense - ANJANA Chamodya.pdf", link: olEnglishFolderLink },
  { name: "Simple Present Tense. - ANJANA Chamodya.pdf", link: olEnglishFolderLink },
  { name: "Unit 7 Graphs - nalika dilrukshi.pdf", link: olEnglishFolderLink }
];

// Data for O/L English Literature
const olEnglishLitFolderLink = "https://drive.google.com/drive/folders/1tu6w56PvrxdDi9wDwJZ5s15twnW2MCg7?usp=sharing";

const olEnglishLitFiles = [
  { name: "2016-NEW46EIII-11132019191038 - Lihini Sehara.pdf", link: olEnglishLitFolderLink },
  { name: "2020-3rdTerm-G11-EnglishLiterature-Paper-III - Lihini Sehara.pdf", link: olEnglishLitFolderLink },
  { name: "G.C.E-OL-23QP - Lihini Sehara.pdf", link: olEnglishLitFolderLink },
  { name: "G.C.E-OL-Appreciation-of-English-Literary-Texts-2021-March - Lihini Sehara.pdf", link: olEnglishLitFolderLink },
  { name: "G.C.E-OL-Appreciation-of-English-Literary-Texts-2022-Past-Paper - Lihini Sehara.pdf", link: olEnglishLitFolderLink },
  { name: "Grade 10 Western Province 3rd Term  - Lihini Sehara.pdf", link: olEnglishLitFolderLink },
  { name: "Grade-11-Appreciation-of-English-Literary-Texts-1st-Term-Test-Paper-2020-Richmond-College - Lihini Sehara.pdf", link: olEnglishLitFolderLink },
  { name: "Vendor_of_Sweets_Themes_Summary_Clean-1 - Sujeewa Pradeep.pdf", link: olEnglishLitFolderLink },
  { name: "wp-11-ms-2020-3rd - Lihini Sehara.pdf", link: olEnglishLitFolderLink }
];

// Data for O/L English Literature Note Kokka
const olEnglishLitNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1QpsmVWtNsZOH0AbHQ82cQ9XSxZJZMrSU?usp=sharing";

const olEnglishLitNoteKokkaFiles = [
  { name: "English Litreature.pdf", link: olEnglishLitNoteKokkaFolderLink }
];

// Data for O/L History
const olHistoryFolderLink = "https://drive.google.com/drive/folders/1N_-O9vdovw5wPlEGC8BEV1hw0ptZMCz5?usp=sharing";

const olHistoryFiles = [
  { name: "1 වාරය 3 පාඩම - Brian Makalanda.pdf", link: olHistoryFolderLink },
  { name: "1 ශ්‍රී ලංකාවේ පැරණි විද්‍යාව හා තාක්ෂණය-කියවීම් පත්‍රිකාව new - Ganga Lakmini.pdf", link: olHistoryFolderLink },
  { name: "2 වාරය 16 පාඩම - Brian Makalanda.pdf", link: olHistoryFolderLink },
  { name: "2 වාරය 10 පාඩම 2 - Brian Makalanda.pdf", link: olHistoryFolderLink },
  { name: "04 පාඩම - බ්‍රිතාන්‍යයන් යටතේ ශ්‍රී ලංකාවේ දේශපාලන වෙනස් වීම් - 02 (1) - ANJANA Chamodya.pdf", link: olHistoryFolderLink },
  { name: "10 ශ්‍රී ලංකාවේ දේශපාලන බලව විකාශනය වීම 01කියවීම් - Ganga Lakmini.pdf", link: olHistoryFolderLink },
  { name: "10 - ANJANA Chamodya.pdf", link: olHistoryFolderLink },
  { name: "10 ඉතිහාසය හැදෑරීමේ මූලාශ්‍රය 01 කියවීම් සටහන මූලාශ්‍රය වර්ගීකරණය - Ganga Lakmini.pdf", link: olHistoryFolderLink },
  { name: "10 ශ්‍රී ලංකාව ජනාවාස වීම 01 කියවීම් - Ganga Lakmini.pdf", link: olHistoryFolderLink },
  { name: "10 ශ්‍රී ලංකාව ජනාවාස වීම 02කියවීම් - Ganga Lakmini.pdf", link: olHistoryFolderLink },
  { name: "10 ශ්‍රී ලංකාව ජනාවාස වීම 03කියවීම් - Ganga Lakmini.pdf", link: olHistoryFolderLink },
  { name: "10 ශ්‍රේණිය-ඉතිහාසය-2 පාඩම-2 කොටස-පිළිතුරු - Reshana Gamage.pdf", link: olHistoryFolderLink },
  { name: "DOC-20250314-WA0005. - ANJANA Chamodya.pdf", link: olHistoryFolderLink },
  { name: "DOC-20250314-WA0008. (1) - ANJANA Chamodya.pdf", link: olHistoryFolderLink },
  { name: "G10 2022-3t Western Pro.(SM) - Chandrajith K.G..pdf", link: olHistoryFolderLink },
  { name: "G10 2023-3t-Royal College P1 (SM) - Chandrajith K.G..pdf", link: olHistoryFolderLink },
  { name: "G10 2023-3t-Royal College P2 (SM) - Chandrajith K.G..pdf", link: olHistoryFolderLink },
  { name: "G10 2024 3t Visaka V. (SM)P1 - Chandrajith K.G..pdf", link: olHistoryFolderLink },
  { name: "G10 2024 3t Visaka V. (SM)P2 - Chandrajith K.G..pdf", link: olHistoryFolderLink },
  { name: "Grade11history - Himansa Hirudini.pdf", link: olHistoryFolderLink },
  { name: "History Grade 10 Unit 01 - Ikcp Ilukkumbura.pdf", link: olHistoryFolderLink },
  { name: "HISTORY study pack - ANJANA Chamodya.pdf", link: olHistoryFolderLink },
  { name: "history-paper-2023-with-answers - MY CHANNEL.pdf", link: olHistoryFolderLink },
  { name: "IMG_20251130_111845_edit_11743271161374094 - Dilru -.jpg", link: olHistoryFolderLink },
  { name: "IMG-20250130-WA0036 - ANJANA Chamodya.jpg", link: olHistoryFolderLink },
  { name: "IMG-20250130-WA0037 - ANJANA Chamodya.jpg", link: olHistoryFolderLink },
  { name: "IMG-20250130-WA0038 - ANJANA Chamodya.jpg", link: olHistoryFolderLink },
  { name: "IMG-20250130-WA0040 - ANJANA Chamodya.jpg", link: olHistoryFolderLink },
  { name: "IMG-20250130-WA0041 - ANJANA Chamodya.jpg", link: olHistoryFolderLink },
  { name: "OL-History-PDF - MY CHANNEL.pdf", link: olHistoryFolderLink },
  { name: "Scan 27 Nov 25 09·20·57 - Yenuli Ailapperuma.pdf", link: olHistoryFolderLink },
  { name: "Short-Note-History-11 - MY CHANNEL.pdf", link: olHistoryFolderLink },
  { name: "ඉති-3වාරය-10 ශ්‍රේ-9පාඩම-ඉගෙ.ආධා_ - Brian Makalanda.pdf", link: olHistoryFolderLink },
  { name: "ඉතිහාසය රූප සටහන් අධ්‍යයනය - Thulakshana Shehan.pdf", link: olHistoryFolderLink }
];

// Data for O/L History Note Kokka
const olHistoryNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1_sc6TBV4gPTpEaLjeuFbeBFTazWExNcM?usp=sharing";

const olHistoryNoteKokkaFiles = [
  { name: "English.pdf", link: olHistoryNoteKokkaFolderLink },
  { name: "Sinhala.pdf", link: olHistoryNoteKokkaFolderLink }
];

// Data for O/L ICT
const olIctFolderLink = "https://drive.google.com/drive/folders/1k5borDdWH1ZjmAGZAKaYJGueKIrDxLXV?usp=sharing";

const olIctFiles = [
  { name: "11 ශ්‍රේණිය තොරතුරු හා සංනිවේදන හා තාක්ෂණය කෙටි සටහන් 2 - Deevika Suwarnamali.pdf", link: olIctFolderLink },
  { name: "11 ශ්‍රේණිය තොරතුරු හා සංනිවේදන හා තාක්ෂණය කෙටි සටහන් 3 - Deevika Suwarnamali.pdf", link: olIctFolderLink },
  { name: "2023(2024) Sab P Grade 10 ICT 3rd ENG - Ruhansa Hirusari.pdf", link: olIctFolderLink },
  { name: "241385 10 ICT - I (1) - Ruhansa Hirusari.pdf", link: olIctFolderLink },
  { name: "Chapter 02 English - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 2 Sinhala - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 3 English - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 3 Sinhala - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 4 English - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 4 Sinhala - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 5 Sinhala - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 5- English - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 6 English - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 6 Sinhala - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 7 English - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 7 Sinhala - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 8 English - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 8 Sinhala - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 9 English - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "Chapter 9 Sinhala - Dananjaya Alahapperuma.pdf", link: olIctFolderLink },
  { name: "chart elements excel - Ruhansa Hirusari.pdf", link: olIctFolderLink },
  { name: "Grade 10 -unit 01 - susantha pushpakumara.pdf", link: olIctFolderLink },
  { name: "Grade 10 -unit 03 - susantha pushpakumara.pdf", link: olIctFolderLink },
  { name: "Grade 10 ICT Third Term Test English Medium Paper - Look Rich.pdf", link: olIctFolderLink },
  { name: "Grade 10 ICT Third Term Test English Medium Paper - Ruhansa Hirusari.pdf", link: olIctFolderLink },
  { name: "Grade-10-ICT-3rd-Term-Test-Paper-2020-English-Medium-–-North-Western-Province - Ruhansa Hirusari.pdf", link: olIctFolderLink },
  { name: "ICT G10 T3 E 2023(2024) NCP - Ruhansa Hirusari.pdf", link: olIctFolderLink },
  { name: "north-western-province-grade-10-information-and-communication-technology-ict-2019-3-term-test-paper - Ruhansa Hirusari.pdf", link: olIctFolderLink },
  { name: "OL Grade 10 and 11 ICT short notes Sinhala medium - ANJANA Chamodya.pdf", link: olIctFolderLink },
  { name: "OL-ICT-Short-Note-Book - ANJANA Chamodya.pdf", link: olIctFolderLink },
  { name: "powerpoint tute - Ruhansa Hirusari.pdf", link: olIctFolderLink },
  { name: "Programming 11 - ANJANA Chamodya.pdf", link: olIctFolderLink },
  { name: "SHORT NOTE - E-Commerce - Pawani Nadeera.pdf", link: olIctFolderLink },
  { name: "SHORT NOTE - Number system - Pawani Nadeera.pdf", link: olIctFolderLink },
  { name: "SHORT NOTE - UNIT 1 - Pawani Nadeera.pdf", link: olIctFolderLink },
  { name: "SHORT NOTE - UNIT 4 - Pawani Nadeera.pdf", link: olIctFolderLink },
  { name: "SHORT NOTE - UNIT 5 - Pawani Nadeera.pdf", link: olIctFolderLink },
  { name: "SHORT NOTE - UNIT 8 - Pawani Nadeera.pdf", link: olIctFolderLink },
  { name: "SHORT NOTE - UNIT 13 - Pawani Nadeera.pdf", link: olIctFolderLink },
  { name: "SHORT NOTE -PYTHON - Pawani Nadeera.pdf", link: olIctFolderLink },
  { name: "SHORT NOTE -Webdesign - Pawani Nadeera.pdf", link: olIctFolderLink },
  { name: "short note full syllabus redesign - ANJANA Chamodya.pdf", link: olIctFolderLink },
  { name: "WP-G10-E-ICT-2022(2023 MARCH)-I&II - Ruhansa Hirusari.pdf", link: olIctFolderLink },
  { name: "අන්තර්ජාලය හා විද්‍යුත් තැපෑල - ANJANA Chamodya.pdf", link: olIctFolderLink },
  { name: "ඉලෙක්ට්‍රොනික සමර්පණ - ANJANA Chamodya.pdf", link: olIctFolderLink }
];

// Data for O/L ICT Note Kokka
const olIctNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1qGSWbYaBQX21U7Io-Z1AvkgUy1s6BH0q?usp=sharing";

const olIctNoteKokkaFiles = [
  { name: "ICT English.pdf", link: olIctNoteKokkaFolderLink },
  { name: "ICT Sinhala.pdf", link: olIctNoteKokkaFolderLink }
];

// Data for O/L Mathematics
const olMathFolderLink = "https://drive.google.com/drive/folders/1VxVic12I9EbIiL39NP8a_rGblTKGtyjy?usp=sharing";

const olMathFiles = [
  { name: "1 මිනිතය -1 Edit 11-19 - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "3.දර්ශක හා ලඝුගණක ii-පිළිතුරු - Chamal Karawgodage Don.pdf", link: olMathFolderLink },
  { name: "7 Mathematics S 2015 - Dithmi Sasena.pdf", link: olMathFolderLink },
  { name: "10-maths-sin-s - Dinul Rashmitha.pdf", link: olMathFolderLink },
  { name: "11-maths-sin-s - Dhananga Masakorala.pdf", link: olMathFolderLink },
  { name: "11-maths-sin-s - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "2021-Grade-10-Maths-3rd-Term-Test-Paper-Southern-Province - Dinul Rashmitha.pdf", link: olMathFolderLink },
  { name: "2022-Grade-10-3rd-tem-Maths.sm (1) - Dinul Rashmitha.pdf", link: olMathFolderLink },
  { name: "17644837404467184932159915710522 - Thulani Nethmini.jpg", link: olMathFolderLink },
  { name: "G 10 Maths (SM)Wp Last term 2024(2025) - Ruhansa Hirusari.pdf", link: olMathFolderLink },
  { name: "G 10 Maths(SM) Wp Last term 2023(2024) - Ruhansa Hirusari.pdf", link: olMathFolderLink },
  { name: "G 11 Maths(SM) Wp Last term 2024(2025) - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "G11_ජ්‍යාමිතිය, ත්‍රිකකෝණමිතිය, දිගංශය_(www.iscolee.blogspot.com) - Deevika Suwarnamali.pdf", link: olMathFolderLink },
  { name: "GEMP කාර්ය පත්‍රිකා සංග්‍රහය ගණිත ශාඛාව අධ්‍යාපන අමාත්‍යාංශය ඉසුරුපාය - Deevika Suwarnamali.pdf", link: olMathFolderLink },
  { name: "Grade_11_3rd_term_paper II_(sm)2025 Final - Suneetha Samarawickrama.pdf", link: olMathFolderLink },
  { name: "Grade-10-Mathematics-1st-Term-Test-Paper-with-Answers-2020-Sinhala-Medium-Southern-Province - Chathura Dillshan.pdf", link: olMathFolderLink },
  { name: "Grade-10-Mathematics-3rd-Term-Test-Paper-with-Answers-2020-Sinhala-Medium-North-western-Province - Dinul Rashmitha.pdf", link: olMathFolderLink },
  { name: "Grade-10-Mathematics-3rd-Term-Test-Paper-with-Answers-2020-Sinhala-Medium-Southern-Province - Dinul Rashmitha.pdf", link: olMathFolderLink },
  { name: "Grade-11-Maths-3rd-NWP-Sinhala-Medium - Malini Malini.pdf", link: olMathFolderLink },
  { name: "Grdae-10-Mathamatics-Sinhala-Medium-NWP (1) - Dinul Rashmitha.pdf", link: olMathFolderLink },
  { name: "ImageToPDF 29-11-2025 Nyasa - Mahinda Kumara.pdf", link: olMathFolderLink },
  { name: "IMG-20250104-WA0012 - ANJANA Chamodya.jpg", link: olMathFolderLink },
  { name: "IMG-20250104-WA0021 - ANJANA Chamodya.jpg", link: olMathFolderLink },
  { name: "IMG-20250104-WA0022 - ANJANA Chamodya.jpg", link: olMathFolderLink },
  { name: "IMG-20250104-WA0023 - ANJANA Chamodya.jpg", link: olMathFolderLink },
  { name: "IMG-20250104-WA0024 - ANJANA Chamodya.jpg", link: olMathFolderLink },
  { name: "IMG-20250104-WA0025 - ANJANA Chamodya.jpg", link: olMathFolderLink },
  { name: "IMG-20250104-WA0026 - ANJANA Chamodya.jpg", link: olMathFolderLink },
  { name: "IMG-20250104-WA0027 - ANJANA Chamodya.jpg", link: olMathFolderLink },
  { name: "IMG-20250104-WA0028 - ANJANA Chamodya.jpg", link: olMathFolderLink },
  { name: "Maths shortnote - T Master.zip", link: olMathFolderLink },
  { name: "OL Maths Content - T Master.zip", link: olMathFolderLink },
  { name: "OL Maths Model Paper - T Master.zip", link: olMathFolderLink },
  { name: "OL-Mathematics-short-questions - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "Practicing_Paper_Grade11_Sinhala - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "shortnote-for-OL(2) (1) (1) - ANJANA Chamodya.pdf", link: olMathFolderLink },
  { name: "southern-province-grade-10-mathematics-2024-3rd-term-test-paper-688b35cbf09b1 - Dhananga Masakorala.pdf", link: olMathFolderLink },
  { name: "Western 2016 G 11 3rd - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "Western 2017 G 11 3rd - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "Western 2018 G 11 3rd - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "WhatsApp Image 2025-03-24 at 17.47.51 - Ridmi Dewmini.jpeg", link: olMathFolderLink },
  { name: "WhatsApp Image 2025-03-24 at 17.48.07 - Ridmi Dewmini.jpeg", link: olMathFolderLink },
  { name: "ගණිත හුරුව 2023(1) - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "ගණිතයට නව ප්‍රවේශයක් බස්නාහිර පළාත් අධ්‍යාපන දෙපාර්තමේන්තුව - Deevika Suwarnamali.pdf", link: olMathFolderLink },
  { name: "ජ්‍යාමිතිය ප්‍රමේයයන් OL - nalika dilrukshi.pdf", link: olMathFolderLink },
  { name: "ජ්‍යාමිතිය__(www.iscolee.blogspot.com) - Deevika Suwarnamali.pdf", link: olMathFolderLink },
  { name: "වෘත්ත ආශ්‍රිත ජ්‍යාමිතික ප්‍රමේයන් - Deevika Suwarnamali.pdf", link: olMathFolderLink }
];

// Data for O/L Mathematics Note Kokka
const olMathNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1QCMmECDdBoyO2To_ZvdkMVjFUAQm7q1V?usp=sharing";

const olMathNoteKokkaFiles = [
  { name: "English.pdf", link: olMathNoteKokkaFolderLink },
  { name: "Sinhala.pdf", link: olMathNoteKokkaFolderLink }
];

// Data for O/L Music
const olMusicFolderLink = "https://drive.google.com/drive/folders/1RJwlt8dp4D22Y5eIs0AvcTHZeJZwZOxe?usp=sharing";

const olMusicFiles = [
  { name: "පෙරදිග_සංගීතය_කෙටි_සටහන්_අත්වැල - Thulakshana Shehan.pdf", link: olMusicFolderLink }
];

// Data for O/L Science
const olScienceFolderLink = "https://drive.google.com/drive/folders/1z076QtuRG2Kq-syWnA7fwv6LOnGUM7GM?usp=sharing";

const olScienceFiles = [
  { name: "🔥Exam Boost 🔥 - ANJANA Chamodya.pdf", link: olScienceFolderLink },
  { name: "01 Sathwa pataka ZOOM Paper - Manuli Hansika.pdf", link: olScienceFolderLink },
  { name: "10-2 සරල රේඛිය චලිතය - Nilmini Katipearachchi.pdf", link: olScienceFolderLink },
  { name: "10-20 ප්‍රවේණිය - Nilmini Katipearachchi.pdf", link: olScienceFolderLink },
  { name: "10.19_current_electricity - Brian Makalanda.pdf", link: olScienceFolderLink },
  { name: "10.20_inheritance - Brian Makalanda.pdf", link: olScienceFolderLink },
  { name: "11 ශ්‍රේණිය විද්‍යාව 3 වාරය ප්‍රශ්න පත්‍ර සහ පිළිතුරු පොත අංක 01 - Sujeewa Pradeep.pdf", link: olScienceFolderLink },
  { name: "14Ahara jirnaya CK science (epapere) - Samanthi Hettiarachchi.pdf", link: olScienceFolderLink },
  { name: "17644678216766777348306482296722 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "17644708095137619559358632473047 - Buddika Sandamali.jpg", link: olScienceFolderLink },
  { name: "ahara jirna paddathiya - Ridmi Dewmini.pdf", link: olScienceFolderLink },
  { name: "Amla bashma ha lawana - Hirudini Aloka.pdf", link: olScienceFolderLink },
  { name: "Amla basma ha lawana - Manuli Hansika.pdf", link: olScienceFolderLink },
  { name: "G 11 Prbasansleshanaya Past Papers - Manuli Hansika.pdf", link: olScienceFolderLink },
  { name: "Grade 10 & 11 - Biology Mcq (1) - ANJANA Chamodya.pdf", link: olScienceFolderLink },
  { name: "Grade 10 Science Unit 15 Sin. - Deevika Suwarnamali.pdf", link: olScienceFolderLink },
  { name: "Grade 10 Science Unit 16 Sin. - Deevika Suwarnamali.pdf", link: olScienceFolderLink },
  { name: "Grade_11_First_term_Short_note_11ශ්‍රේණිය_පළමු_වාර_කෙටි_සටහන් - ANJANA Chamodya.pdf", link: olScienceFolderLink },
  { name: "Grade-11-Study-Pack-–-Art-02 - Usitha Harshana.pdf", link: olScienceFolderLink },
  { name: "hydrocarbon - Manuli Hansika.pdf", link: olScienceFolderLink },
  { name: "IMG_20251130_072923 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "IMG_20251130_072928 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "IMG_20251130_072933 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "IMG_20251130_072940 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "IMG_20251130_072945 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "IMG_20251130_072951 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "IMG_20251130_072954 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "IMG_20251130_073000 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "IMG_20251130_073004 - Upul Nuwan.jpg", link: olScienceFolderLink },
  { name: "Jaywa Golaya-Grade 11 lesson 15 - 2 - Manuli Hansika.pdf", link: olScienceFolderLink },
  { name: "Jaywa Golaya-Grade 11 lesson 15 - Manuli Hansika.pdf", link: olScienceFolderLink },
  { name: "prakasha_vidyawa_full - ANJANA Chamodya.pdf", link: olScienceFolderLink },
  { name: "Rudira Sansarana paddathiya roga - Manuli Hansika.pdf", link: olScienceFolderLink },
  { name: "Science 1💓✍️💫🍃😚 - Nethmi Kaveesha.pdf", link: olScienceFolderLink },
  { name: "Science SM - Amodya Sewmindi.pdf", link: olScienceFolderLink },
  { name: "Sol_Sci_sss_P_I_II_2022(2023) - Deevika Suwarnamali.pdf", link: olScienceFolderLink },
  { name: "southern-province-grade-10-science-2020-3rd-term-test-paper-6530f331e262e - Dhananga Masakorala.pdf", link: olScienceFolderLink },
  { name: "Tharanga ha ewaye yedim - 02 - Manuli Hansika.pdf", link: olScienceFolderLink },
  { name: "Unit-09-thapaya-B - Alex Bot.pdf", link: olScienceFolderLink },
  { name: "WhatsApp Image 2025-03-19 at 10.59.30 PM - ANJANA Chamodya.jpeg", link: olScienceFolderLink },
  { name: "WhatsApp Image 2025-03-19 at 10.59.31 PM - ANJANA Chamodya.jpeg", link: olScienceFolderLink },
  { name: "WhatsApp Image 2025-03-19 at 10.59.31 PM (1) - ANJANA Chamodya.jpeg", link: olScienceFolderLink },
  { name: "WhatsApp Image 2025-03-19 at 10.59.32 PM - ANJANA Chamodya.jpeg", link: olScienceFolderLink },
  { name: "WhatsApp Image 2025-03-19 at 10.59.32 PM (1) - ANJANA Chamodya.jpeg", link: olScienceFolderLink },
  { name: "widyuth upakarana POLL - Manuli Hansika.pdf", link: olScienceFolderLink },
  { name: "ප්‍රකාශ විද්‍යාවPrakasha vidyawa Past Papers - Manuli Hansika.pdf", link: olScienceFolderLink }
];

// Data for O/L Science Note Kokka
const olScienceNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1nF5SevLFhWIbOlmJcYVoB6tQC-glhik4?usp=sharing";

const olScienceNoteKokkaFiles = [
  { name: "English.pdf", link: olScienceNoteKokkaFolderLink },
  { name: "Sinhala.pdf", link: olScienceNoteKokkaFolderLink }
];

// Data for O/L Sinhala
const olSinhalaFolderLink = "https://drive.google.com/drive/folders/1sZH0F1MPAbV-Z0j6L68LgxTDH4sIKyBi?usp=sharing";

const olSinhalaFiles = [
  { name: "11_මග_විසිතුරු_සැළලිහිණි_සංදේශය_⚜️SL_EDUCATION_OUR_SCHOOL⚜️_ - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "11-sinhala-s - Dhananga Masakorala.pdf", link: olSinhalaFolderLink },
  { name: "13_අපට_වැසිකිළියක්⚜️SL_EDUCATION_OUR_SCHOOL_⚜️_ - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "2016-ol-sinhala-language-literature-past-paper-sinhala-medium - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "2017-ol-sinhala-language-literature-marking-scheme - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "2018-ol-sinhala-language-literature-marking-scheme-sinhala-medium - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "2019-ol-sinhala-language-literature-marking-scheme-sinhala-medium - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "2020-ol-sinhala-language-past-paper-and-answers-2 - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "2021-OL-Sinhala-paper - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "20242025-ol-sinhala-language-past-paper - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "IMG_20251130_111741_edit_11743180503217983 - Dilru -.jpg", link: olSinhalaFolderLink },
  { name: "ordinary-level-sinhala-language-paper-and-answers-20222023 - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "Sinhala විභක්ති - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "Sinhala සන්ධි - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "Unit 1 - susantha pushpakumara.pdf", link: olSinhalaFolderLink },
  { name: "Unit 2 - susantha pushpakumara.pdf", link: olSinhalaFolderLink },
  { name: "Unit 3 - susantha pushpakumara.pdf", link: olSinhalaFolderLink },
  { name: "Unit 6 - susantha pushpakumara.pdf", link: olSinhalaFolderLink },
  { name: "vichara-dara - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "අපටත්_වැසිකියක්_විචාරය_නැණ_පහන - Copy - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "දෑතේ_කරගැට_2[1] - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "වස්සානය_-[1] - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "සාමාන්‍ය_පෙළ_සාහිත්‍ය_කෙටි_සටහන - Senevirathne P.K.pdf", link: olSinhalaFolderLink },
  { name: "සාහිත්_ය පාඩම් 3,5.6.15,16.17 - ANJANA Chamodya.pdf", link: olSinhalaFolderLink },
  { name: "සියලු_පාඩම්_වල_විචාර_උද්ධෘත - ANJANA Chamodya.pdf", link: olSinhalaFolderLink }
];

// Data for O/L Sinhala Literature
const olSinhalaLitFolderLink = "https://drive.google.com/drive/folders/1w6Oh-m5Ey33nspgnOFQUBRh-e1eT_qIN?usp=sharing";
const olSinhalaLitAudioFolderLink = "https://drive.google.com/drive/folders/11Mp1Qde-q4KOshPDmqyJ5SeitWozZ1dG?usp=sharing";

const olSinhalaLitFiles = [
  { name: "Sinhala Literature 10 3 2024 - Nilmini Katipearachchi.pdf", link: olSinhalaLitFolderLink },
  { name: "Copy of සාමාන්‍ය_පෙළ_සාහිත්‍ය_කෙටි_සටහන - Sujeewa Pradeep.pdf", link: olSinhalaLitFolderLink },
  { name: "Sinhala sahithya Intros - Kusali sithumila444.pdf", link: olSinhalaLitFolderLink },
  { name: "Wichara serama NEW - Kusali sithumila444.pdf", link: olSinhalaLitFolderLink }
];

// Data for O/L Sinhala Literature Audio
const olSinhalaLitAudioFiles = [
  { name: "01 stharakan mantranaya.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "02 guththila wena nada.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "03 hana heeya pana.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "04 baddegama.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "05 muni siripa.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "06 gangawe sangeethaya.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "08 angulmal damanaya.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "09 uggasena situputh.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "10 keeragalaya vajambei.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "11 maga visithuru.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "12 kurahan isimuwa.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "13 apata vasikiliyak.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "14 diyamanthi malaya.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "15 dathe karagata.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "16 vassanaya.mp3", link: olSinhalaLitAudioFolderLink },
  { name: "Sinhabahu Drama Audio - Part 1 of 2.mp3", link: olSinhalaLitAudioFolderLink }
];

// Data for O/L Tamil
const olTamilFolderLink = "https://drive.google.com/drive/folders/1PSh5joa1sWoA8bjXsORmJw3bAcvpolbW?usp=sharing";

const olTamilFiles = [
  { name: "2nd Language Sinhala 10 3 2024 - Nilmini Katipearachchi.pdf", link: olTamilFolderLink }
];

// Data for O/L Tamil Note Kokka
const olTamilNoteKokkaFolderLink = "https://drive.google.com/drive/folders/18G0oyAzj_Hzhd4iOnbwSJQmJGypbREUx?usp=sharing";

const olTamilNoteKokkaFiles = [
  { name: "Tamil Grammar.pdf", link: olTamilNoteKokkaFolderLink }
];

// Data for O/L Geography Note Kokka
const olGeographyNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1y2HNu2_O36iEY3qAi596EoIsg0gTZTkv?usp=sharing";

const olGeographyNoteKokkaFiles = [
  { name: "English.pdf", link: olGeographyNoteKokkaFolderLink },
  { name: "Sinhala.pdf", link: olGeographyNoteKokkaFolderLink }
];

// Data for O/L Health & Physical Education Note Kokka
const olHealthNoteKokkaFolderLink = "https://drive.google.com/drive/folders/1IaMA6v-UwWVYiE20Qgx2fZKhbzq470Qk?usp=drive_link";

const olHealthNoteKokkaFiles = [
  { name: "English.pdf", link: olHealthNoteKokkaFolderLink },
  { name: "Sinhala.pdf", link: olHealthNoteKokkaFolderLink }
];

// O/L Subjects with individual links
const olSubjects = [
  { 
    name: "Art", 
    link: olArtFolderLink, 
    files: olArtFiles, 
    subsections: [
      {
        name: "Main Resources",
        files: olArtFiles,
        link: olArtFolderLink,
        links: [olArtFolderLink]
      },
      {
        name: "Note Kokka",
        files: olArtNoteKokkaFiles,
        link: olArtNoteKokkaFolderLink,
        links: [olArtNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Buddhism", 
    link: olBuddhismFolderLink, 
    files: olBuddhismFiles, 
    links: [olBuddhismFolderLink, olBuddhismFolderLink2], // Multiple folder links
    subsections: [
      {
        name: "Main Resources",
        files: olBuddhismFiles,
        links: [olBuddhismFolderLink, olBuddhismFolderLink2]
      },
      {
        name: "Note Kokka",
        files: olBuddhismNoteKokkaFiles,
        link: olBuddhismNoteKokkaFolderLink,
        links: [olBuddhismNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Citizenship Education", 
    link: olCivicFolderLink, 
    files: olCivicFiles, 
    subsections: [
      {
        name: "Main Resources",
        files: olCivicFiles,
        link: olCivicFolderLink,
        links: [olCivicFolderLink]
      },
      {
        name: "Note Kokka",
        files: olCivicNoteKokkaFiles,
        link: olCivicNoteKokkaFolderLink,
        links: [olCivicNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Commerce", 
    link: olCommerceFolderLink, 
    files: olCommerceFiles, 
    subsections: [
      {
        name: "Main Resources",
        files: olCommerceFiles,
        link: olCommerceFolderLink,
        links: [olCommerceFolderLink]
      },
      {
        name: "Note Kokka",
        files: olCommerceNoteKokkaFiles,
        link: olCommerceNoteKokkaFolderLink,
        links: [olCommerceNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "English", 
    link: olEnglishFolderLink, 
    files: olEnglishFiles, 
    special: true,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "English Literature", 
    link: olEnglishLitFolderLink, 
    files: olEnglishLitFiles, 
    subsections: [
      {
        name: "Main Resources",
        files: olEnglishLitFiles,
        link: olEnglishLitFolderLink,
        links: [olEnglishLitFolderLink]
      },
      {
        name: "Note Kokka",
        files: olEnglishLitNoteKokkaFiles,
        link: olEnglishLitNoteKokkaFolderLink,
        links: [olEnglishLitNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "History", 
    link: olHistoryFolderLink, 
    files: olHistoryFiles, 
    subsections: [
      {
        name: "Main Resources",
        files: olHistoryFiles,
        link: olHistoryFolderLink,
        links: [olHistoryFolderLink]
      },
      {
        name: "Note Kokka",
        files: olHistoryNoteKokkaFiles,
        link: olHistoryNoteKokkaFolderLink,
        links: [olHistoryNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "ICT", 
    link: olIctFolderLink, 
    files: olIctFiles, 
    subsections: [
      {
        name: "Main Resources",
        files: olIctFiles,
        link: olIctFolderLink,
        links: [olIctFolderLink]
      },
      {
        name: "Note Kokka",
        files: olIctNoteKokkaFiles,
        link: olIctNoteKokkaFolderLink,
        links: [olIctNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Mathematics", 
    link: olMathFolderLink, 
    files: olMathFiles, 
    subsections: [
      {
        name: "Main Resources",
        files: olMathFiles,
        link: olMathFolderLink,
        links: [olMathFolderLink]
      },
      {
        name: "Note Kokka",
        files: olMathNoteKokkaFiles,
        link: olMathNoteKokkaFolderLink,
        links: [olMathNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Music", 
    link: olMusicFolderLink, 
    files: olMusicFiles, 
    special: true,
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Science", 
    link: olScienceFolderLink, 
    files: olScienceFiles, 
    subsections: [
      {
        name: "Main Resources",
        files: olScienceFiles,
        link: olScienceFolderLink,
        links: [olScienceFolderLink]
      },
      {
        name: "Note Kokka",
        files: olScienceNoteKokkaFiles,
        link: olScienceNoteKokkaFolderLink,
        links: [olScienceNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Sinhala", 
    link: olSinhalaFolderLink, 
    files: olSinhalaFiles, 
    special: true,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Sinhala Literature", 
    link: olSinhalaLitFolderLink, 
    files: olSinhalaLitFiles, 
    subsections: [
      {
        name: "Notes & Papers",
        files: olSinhalaLitFiles,
        link: olSinhalaLitFolderLink,
        links: [olSinhalaLitFolderLink]
      },
      {
        name: "Audio Files (MP3)",
        files: olSinhalaLitAudioFiles,
        link: olSinhalaLitAudioFolderLink,
        links: [olSinhalaLitAudioFolderLink]
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Tamil", 
    link: olTamilFolderLink, 
    files: olTamilFiles, 
    subsections: [
      {
        name: "Main Resources",
        files: olTamilFiles,
        link: olTamilFolderLink,
        links: [olTamilFolderLink]
      },
      {
        name: "Note Kokka",
        files: olTamilNoteKokkaFiles,
        link: olTamilNoteKokkaFolderLink,
        links: [olTamilNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Geography", 
    link: "#", 
    files: [],
    subsections: [
      {
        name: "Note Kokka",
        files: olGeographyNoteKokkaFiles,
        link: olGeographyNoteKokkaFolderLink,
        links: [olGeographyNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Health & Physical Education", 
    link: "#", 
    files: [],
    subsections: [
      {
        name: "Note Kokka",
        files: olHealthNoteKokkaFiles,
        link: olHealthNoteKokkaFolderLink,
        links: [olHealthNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Dancing", 
    link: "#", 
    files: [],
    subsections: [
      {
        name: "Note Kokka",
        files: olDancingNoteKokkaFiles,
        link: olDancingNoteKokkaFolderLink,
        links: [olDancingNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
  },
  { 
    name: "Drama", 
    link: "#", 
    files: [],
    subsections: [
      {
        name: "Note Kokka",
        files: olDramaNoteKokkaFiles,
        link: olDramaNoteKokkaFolderLink,
        links: [olDramaNoteKokkaFolderLink],
        color: "#fef3c7", // Yellow color for this section
        credits: "Credits to Note Kokka"
      }
    ],
    special: true,
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=600&q=80"
  }
];

// Data for Primary (Grade 1-5)
const primaryEnvFolderLink = "https://drive.google.com/drive/folders/1rL-Y4Vyh3omCBYdgQNmZR7WYJZYeFnxw?usp=sharing";

const primaryEnvFiles = [
  { name: "පරිසරය grade 3 - 3 වාරය. - Samadhi Ruhunage", link: primaryEnvFolderLink }
];

// Data for Grade 1
const grade1FolderLink = "https://drive.google.com/drive/folders/1TAMXkC5T6prO-dVtuQiIoGRw0G6AnYO4?usp=sharing";

const grade1Files = [
  { name: "grade-1-mathematics-text-book-633aba649d309 - indude silva.pdf", link: grade1FolderLink }
];

// Data for Grade 2
const grade2FolderLink = "https://drive.google.com/drive/folders/1h87fmDNiWGygkq9CCWTvIGvNRJ21ue6g?usp=sharing";

const grade2Files = [
  { name: "2 ශ්‍රේණිය ගණිතය -ක්‍රියාකාරකම් පත්‍රිකා අංක 2 නව(1) - Chamal Karawgodage Don.pdf", link: grade2FolderLink }
];

// Data for Grade 3
const grade3FolderLink = "https://drive.google.com/drive/folders/1rL-Y4Vyh3omCBYdgQNmZR7WYJZYeFnxw?usp=sharing";

const grade3Files = [
  { name: "3 engWorksheets 137 - Trimasha Binurangi.pdf", link: grade3FolderLink },
  { name: "5_6267283666360074655 - Trimasha Binurangi.pdf", link: grade3FolderLink },
  { name: "G3English_1st_Richmond College-2018 - Trimasha Binurangi.pdf", link: grade3FolderLink },
  { name: "Grade 3_English_1st Term - Trimasha Binurangi.pdf", link: grade3FolderLink },
  { name: "Grade 4_English_First Term - Trimasha Binurangi.pdf", link: grade3FolderLink },
  { name: "Grade 4_English_First Term-1 - Trimasha Binurangi.pdf", link: grade3FolderLink },
  { name: "පරිසරය grade 3 - 3 වාරය. - Samadhi Ruhunage.pdf", link: grade3FolderLink }
];

// Data for Grade 4
const grade4FolderLink = "https://drive.google.com/drive/folders/10vNd3RlYXv7b3ou15_vQS1w582c7DX31?usp=sharing";

const grade4Files = [
  { name: "4 buddhism - unit 06 - Nilmini Katipearachchi.pdf", link: grade4FolderLink },
  { name: "4 English - Unit 01 - Nilmini Katipearachchi.pdf", link: grade4FolderLink },
  { name: "4 English - Unit 03 - Nilmini Katipearachchi.pdf", link: grade4FolderLink },
  { name: "4 sinhala - Unit 04 - Nilmini Katipearachchi.pdf", link: grade4FolderLink },
  { name: "4 tamil- Unit 01 - Nilmini Katipearachchi.pdf", link: grade4FolderLink },
  { name: "4 tamil- Unit 04 - Nilmini Katipearachchi.pdf", link: grade4FolderLink },
  { name: "IMG_2980 - Mudipa Kishan.jpeg", link: grade4FolderLink }
];

// Data for Grade 6
const grade6FolderLink = "https://drive.google.com/drive/folders/1C6CiRPpkrBD-HaTA28r4T8Qb43KKs59n?usp=sharing";

const grade6Files = [
  { name: "6-science-s - Rasika Kumari Girihagama.pdf", link: grade6FolderLink },
  { name: "2018 Maths Grade 6 English medium 3rd term - Darshana Waduge.pdf", link: grade6FolderLink },
  { name: "Grade 6 Science EM Unit 01 - Darshana Waduge.pdf", link: grade6FolderLink },
  { name: "Grade 6 Science EM Unit 02 - Darshana Waduge.pdf", link: grade6FolderLink },
  { name: "Grade 6 Sinhala essays - Rasika Kumari Girihagama.pdf", link: grade6FolderLink },
  { name: "Grade-06-Science-3rd-Term-Test-Paper-2018-Sinhala-Medium-Southern-Province - Rasika Kumari Girihagama.pdf", link: grade6FolderLink },
  { name: "Grade-06-Science-3rd-Term-Test-Paper-with-Answers-2020-Sinhala-Medium-Southern-Province - Rasika Kumari Girihagama.pdf", link: grade6FolderLink },
  { name: "openart-image_vHs390ln_1764421946883_raw - Mudipa Kishan.jpg", link: grade6FolderLink },
  { name: "Western Province grade 6 third term test paper 2024(2025) _1 - Rasika Kumari Girihagama.jpg", link: grade6FolderLink },
  { name: "Western Province grade 6 third term test paper 2024(2025) _2 - Rasika Kumari Girihagama.jpg", link: grade6FolderLink },
  { name: "Western Province grade 6 third term test paper 2024(2025) _3 - Rasika Kumari Girihagama.jpg", link: grade6FolderLink },
  { name: "Western Province grade 6 third term test paper 2024(2025) _4 - Rasika Kumari Girihagama.jpg", link: grade6FolderLink },
  { name: "Western Province grade 6 third term test paper 2024(2025) _5 - Rasika Kumari Girihagama.jpg", link: grade6FolderLink },
  { name: "Western Province grade 6 third term test paper 2024(2025) _6 - Rasika Kumari Girihagama.jpg", link: grade6FolderLink },
  { name: "Western Province grade 6 third term test paper 2024(2025) _7 - Rasika Kumari Girihagama.jpg", link: grade6FolderLink },
  { name: "Western Province grade 6 third term test paper 2024(2025) _8 - Rasika Kumari Girihagama.jpg", link: grade6FolderLink }
];

// Data for Grade 7
const grade7FolderLink = "https://drive.google.com/drive/folders/1tAjHlhSA2AWFwNXqIsuurxvGLKltXKEZ?usp=sharing";

const grade7Files = [
  { name: "Grade-07-Geography-3rd-Term-Test-Paper-2019-English-Medium-–-Central-Province - Kushmi Dahamsa.pdf", link: grade7FolderLink },
  { name: "Grade-07-Health-3rd-Term-Test-Paper-2019-English-Medium-–-North-Western-Province - Kushmi Dahamsa.pdf", link: grade7FolderLink }
];

// Data for Grade 8
const grade8FolderLink = "https://drive.google.com/drive/folders/1Jkf5-V4bRqRSKizoo__ojDinMUQQCnQA?usp=sharing";

const grade8Files = [
  { name: "8 unit 01 - Darshana Waduge.pdf", link: grade8FolderLink },
  { name: "8 ශ්‍රේණිය இரண்டாம் மொழி தமிழ் Text Book_edudoc.lk_ - Nilmini Katipearachchi.pdf", link: grade8FolderLink },
  { name: "8-1 Health EM - Darshana Waduge.pdf", link: grade8FolderLink },
  { name: "8-2 health EM - Darshana Waduge.pdf", link: grade8FolderLink },
  { name: "8-PTS- 1.3, 2.3, 3.3, 4.3 - Darshana Waduge.pdf", link: grade8FolderLink },
  { name: "Civic 8_1 - Darshana Waduge.pdf", link: grade8FolderLink },
  { name: "English - 08 - Nilmini Katipearachchi.pdf", link: grade8FolderLink },
  { name: "Geo 8_2 - Darshana Waduge.pdf", link: grade8FolderLink },
  { name: "Geo 8_3 - Darshana Waduge.pdf", link: grade8FolderLink }
];

// Data for Grade 9
const grade9FolderLink = "https://drive.google.com/drive/folders/1q90hU-ONj4PgG2tcR6DX5BFUT3beQDpg?usp=sharing";

const grade9Files = [
  { name: "Unit 09 - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "9 -6 veegeeya prakasha පළමු වාරය - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "9-1 sankya rata පළමු වාරය - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "9-2 dwimaya sankya පළමු වාරය - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "9-3 baga පළමු වාරය - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "9-4 pratishata පළමු වාරය - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "9-5 පළමු වාරය dipada - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "9-7 pratyaksha පළමු වාරය - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "9-8 sarala reka maths පළමු වාරය - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "9-9 drawa minum පළමු වාරය - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "Document from Sarika Kodagoda - Sarika Kodagoda.pdf", link: grade9FolderLink },
  { name: "Geography Grade 9 Unit 01 - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "Science Grade 9 Unit 01 - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "Science Grade 9 Unit 02 - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "Science Grade 9 Unit 03 - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "Science Grade 9 Unit 04 - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "Science Grade 9 Unit 05 - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "southern-province-grade-9-practical-technical-skills-2018-3-term-test-paper-61e7eac2372aa - Kosali Nishshanka.pdf", link: grade9FolderLink },
  { name: "southern-province-grade-9-practical-technical-skills-2019-2nd-term-test-paper-6532368d902ab - Kosali Nishshanka.pdf", link: grade9FolderLink },
  { name: "southern-province-grade-9-practical-technical-skills-2020-3-term-test-paper-61e93d575d1cc - Kosali Nishshanka.pdf", link: grade9FolderLink },
  { name: "unit 01 - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "unit 01 - Pushpika Nanayakkara.pdf", link: grade9FolderLink },
  { name: "unit 1 - Pushpika Nanayakkara.pdf", link: grade9FolderLink },
  { name: "Unit 02 - Nilmini Katipearachchi.pdf", link: grade9FolderLink },
  { name: "unit 2 - Nilmini Katipearachchi.pdf", link: grade9FolderLink }
];

const gradeConfig = {
  "1-5": {
    title: "Primary (Grade 1–5)",
    subjects: [
      { 
        name: "Grade 1", 
        files: grade1Files, 
        link: grade1FolderLink,
        special: true,
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80"
      },
      { 
        name: "Grade 2", 
        files: grade2Files, 
        link: grade2FolderLink,
        special: true,
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80"
      },
      { 
        name: "Grade 3", 
        files: grade3Files, 
        link: grade3FolderLink,
        special: true,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
      },
      { 
        name: "Grade 4", 
        files: grade4Files, 
        link: grade4FolderLink,
        special: true,
        image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
      },
      { 
        name: "Grade 5", 
        files: [], 
        link: "#",
        special: false,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
      }
    ],
  },
  "6-9": {
    title: "Middle School (Grade 6–9)",
    subjects: [
      { 
        name: "Grade 6", 
        files: grade6Files, 
        link: grade6FolderLink, 
        special: true,
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
      },
      { 
        name: "Grade 7", 
        files: grade7Files, 
        link: grade7FolderLink, 
        special: true,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
      },
      { 
        name: "Grade 8", 
        files: grade8Files, 
        link: grade8FolderLink, 
        special: true,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
      },
      { 
        name: "Grade 9", 
        files: grade9Files, 
        link: grade9FolderLink, 
        special: true,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
      }
    ],
  },
  ol: {
    title: "O/L (Ordinary Level)",
    subjects: olSubjects,
  },
  al: {
    title: "Advanced Level",
    // Implementing folder structure with IMAGES
    streams: [
      {
        title: "Science Stream",
        subtitle: "Physics, Chemistry, Biology & Combined Maths",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
        subjects: [
          { 
            name: "Physics", 
            files: physicsFiles, 
            link: physicsFolderLink,
            links: [physicsFolderLink, physicsNewFolderLink, physicsFolderLink3], // Multiple folder links
            special: true,
            image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "Chemistry", 
            files: chemistryFiles, 
            link: chemistryFolderLink,
            links: [chemistryFolderLink, chemistryFolderLink2], // Multiple folder links
            special: true,
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80" 
          },
          { 
            name: "Biology", 
            files: biologyFiles, 
            link: biologyFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "Combined Maths", 
            files: combinedMathsFiles, 
            link: combinedMathsFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
          }
        ]
      },
      {
        title: "Technology Stream",
        subtitle: "SFT, ET, BST & ICT",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
        subjects: [
          { 
            name: "IT", 
            files: ictFiles, 
            link: ictFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
          },
          { 
             name: "Engineering Tech", 
             files: etFiles, 
             link: etFolderLink,
             special: true,
             image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "SFT", 
            files: sftFiles, 
            link: sftFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "BST", 
            files: bstFiles, 
            link: bstFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80"
          }
        ]
      },
      {
        title: "Commerce Stream",
        subtitle: "Accounting, Business Studies & Economics",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        subjects: [
          { 
            name: "Accounting", 
            files: accountingFiles, 
            link: accountingFolderLink,
            links: [accountingFolderLink, accountingFolderLink2, accountingFolderLink3], // Multiple folder links
            subsections: [
              {
                name: "Sinhala Medium",
                files: accountingFiles,
                links: [accountingFolderLink, accountingFolderLink2]
              },
              {
                name: "English Medium",
                files: accountingEMFiles,
                link: accountingEMFolderLink,
                links: [accountingEMFolderLink]
              },
              {
                name: "Accounting Notes",
                files: accountingNotesFiles,
                link: accountingNotesFolderLink,
                links: [accountingNotesFolderLink]
              },
              {
                name: "Accounting Papers",
                files: accountingPapersFiles,
                link: accountingPapersFolderLink,
                links: [accountingPapersFolderLink]
              },
              {
                name: "Note Kokka",
                files: [],
                link: accountingFolderLink3,
                links: [accountingFolderLink3],
                color: "#fef3c7", // Yellow color for this section
                credits: "Credits to Note Kokka"
              }
            ],
            special: true,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "Business Studies", 
            files: businessStudiesFiles, 
            link: businessStudiesFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" 
          },
          { 
            name: "Econ", 
            files: econFiles, 
            link: econFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
          }
        ]
      },
      {
        title: "Arts Stream",
        subtitle: "Languages, Humanities & Social Sciences",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
        subjects: [
          { 
            name: "Media Studies", 
            files: mediaStudiesFiles, 
            link: mediaStudiesFolderLink,
            links: [mediaStudiesFolderLink, mediaStudiesNoteKokkaFolderLink, mediaStudiesNoteKokkaFolderLink2],
            subsections: [
              {
                name: "Main Resources",
                files: mediaStudiesFiles,
                link: mediaStudiesFolderLink,
                links: [mediaStudiesFolderLink]
              },
              {
                name: "Note Kokka",
                files: mediaStudiesNoteKokkaFiles,
                link: mediaStudiesNoteKokkaFolderLink,
                links: [mediaStudiesNoteKokkaFolderLink, mediaStudiesNoteKokkaFolderLink2],
                color: "#fef3c7", // Yellow color for this section
                credits: "Credits to Note Kokka"
              }
            ],
            special: true,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
          },
          { 
             name: "Geography", 
             files: geoFiles, 
             link: geoFolderLink,
             subsections: [
               {
                 name: "Main Resources",
                 files: geoFiles,
                 link: geoFolderLink,
                 links: [geoFolderLink]
               },
               {
                 name: "Note Kokka",
                 files: geoNoteKokkaFiles,
                 link: geoNoteKokkaFolderLink,
                 links: [geoNoteKokkaFolderLink],
                 color: "#fef3c7", // Yellow color for this section
                 credits: "Credits to Note Kokka"
               }
             ],
             special: true,
             image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "Political Science", 
            files: polSciFiles, 
            link: polSciFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80" 
          },
          { 
            name: "Sinhala", 
            files: sinhalaFiles, 
            link: sinhalaFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "Japanese", 
            files: japaneseFiles, 
            link: japaneseFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "History", 
            files: historyFiles, 
            link: historyFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "Music", 
            files: musicFiles, 
            link: musicFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "French", 
            files: frenchFiles, 
            link: frenchFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "GRC", 
            files: grcFiles, 
            link: grcFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "ICT Notes", 
            files: ictNotesFiles, 
            link: ictNotesFolderLink,
            special: true,
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
          },
          { 
            name: "Home Science", 
            files: homeScienceNoteKokkaFiles, 
            link: homeScienceNoteKokkaFileLink,
            subsections: [
              {
                name: "Note Kokka",
                files: homeScienceNoteKokkaFiles,
                link: homeScienceNoteKokkaFileLink,
                links: [homeScienceNoteKokkaFileLink],
                color: "#fef3c7", // Yellow color for this section
                credits: "Credits to Note Kokka"
              }
            ],
            special: true,
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
          }
        ]
      },
      {
        title: "Common Test",
        subtitle: "General Knowledge & IQ",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
        subjects: [
           { 
             name: "General Knowledge", 
             files: commonTestFiles, 
             link: commonTestFolderLink,
             special: true,
             image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
           }
        ]
      },
      {
        title: "General English",
        subtitle: "Grammar, Reading & Writing",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
        subjects: [
           { 
             name: "General English", 
             files: generalEnglishFiles, 
             link: generalEnglishFolderLink,
             special: true,
             image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
           }
        ]
      },
      {
        title: "GIT",
        subtitle: "Information Technology Basics",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
        subjects: [
           { 
             name: "General Information Technology", 
             files: gitFiles, 
             link: gitFolderLink,
             special: true,
             image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80"
           }
        ]
      }
    ]
  },
};

export default function GradePage() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedStream, setSelectedStream] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const grade = gradeConfig[id] || null;

  // If grade changes, reset selection
  if (grade && grade.streams && selectedStream && !grade.streams.find(s => s.title === selectedStream.title)) {
     setSelectedStream(null);
  }

  if (!grade) {
    return (
      <div className="page-wrapper">
        <nav className="nav">
          <div className="nav-content">
            <div className="brand">
              <span className="brand-name">EduRelief SL</span>
            </div>
            <Link href="/" className="nav-link active">← Back Home</Link>
          </div>
        </nav>
        <main className="main-content" style={{ marginTop: '120px', textAlign: 'center' }}>
          <h1>Grade not found</h1>
          <p style={{ color: 'var(--gray)' }}>Please select a valid grade from the home page.</p>
          <br />
          <Link href="/" className="btn btn-primary">Go Home</Link>
        </main>
      </div>
    );
  }

  // Helper to handle subject click
  const handleSubjectClick = (subject) => {
    if (subject.link && subject.link !== "#") {
      window.open(subject.link, "_blank");
    } else {
      alert("This subject has individual file downloads. Please use the 'Download' buttons above.");
    }
  };

  const handleFileDownload = (fileLink) => {
     if(fileLink && fileLink !== "#") {
        window.open(fileLink, "_blank");
     } else {
        alert("Download link not yet added.");
     }
  };

  // Helper function to render file list
  const renderFileList = (files, query, subjectMatches) => {
    const displayFiles = files ? files.filter(f => 
        !query || subjectMatches || f.name.toLowerCase().includes(query)
    ) : [];

    if (displayFiles.length === 0) return null;

    return (
      <ul style={{ 
        listStyle: 'none', fontSize: '0.9rem', color: '#4b5563', margin: 0, padding: 0 
      }}>
        {displayFiles.map((f, i) => {
          // Clean up the file name
          let displayName = f.name;
          displayName = displayName.split(" - ")[0];
          displayName = displayName.replace(/\s*\(.*?\)\s*/g, "");
          displayName = displayName.trim();

          return (
            <li key={i} style={{ 
                  padding: '0.75rem 1.5rem', 
                  borderBottom: '1px solid #eee',
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  background: 'white',
                  transition: 'background 0.2s'
            }}
            className="file-item"
            >
              <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                📄 {displayName}
              </span>
              <button 
                onClick={() => handleFileDownload(f.link)}
                style={{
                    background: 'var(--light)', border: '1px solid #e2e8f0', color: 'var(--primary-dark)',
                    padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem',
                    cursor: 'pointer', fontWeight: '600', whiteSpace: 'nowrap',
                    display: 'flex', alignItems: 'center', gap: '4px'
                }}
              >
                View
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  // Render Subject Card
  const renderSubjectCard = (subject) => {
    const query = searchQuery.toLowerCase();
    const subjectMatches = subject.name.toLowerCase().includes(query);
    
    // If subject has subsections, render them separately
    if (subject.subsections && subject.subsections.length > 0) {
      const totalFiles = subject.subsections.reduce((sum, sub) => sum + (sub.files ? sub.files.length : 0), 0);
      
      return (
        <div 
          key={subject.name} 
          className="grade-card"
        >
          {subject.image && (
            <div className="grade-card-image">
               <img src={subject.image} alt={subject.name} />
               <div className="grade-card-overlay" />
            </div>
          )}
          <div className="grade-card-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{subject.name}</h3>
                {subject.special ? (
                    <span style={{ 
                    background: '#dcfce7', color: '#166534', 
                    padding: '0.2rem 0.6rem', borderRadius: '12px', 
                    fontSize: '0.75rem', fontWeight: '600', whiteSpace: 'nowrap'
                    }}>
                    UPDATED
                    </span>
                ) : (
                    <span style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>No files</span>
                )}
              </div>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>
                {totalFiles} resources available
              </p>
          </div>

          <div style={{ padding: '0', background: '#f9fafb', borderTop: '1px solid #eee', maxHeight: '400px', overflowY: 'auto' }}>
            {subject.subsections.map((subsection, subIndex) => {
              const subDisplayFiles = subsection.files ? subsection.files.filter(f => 
                  !query || subjectMatches || f.name.toLowerCase().includes(query)
              ) : [];
              
              if (subDisplayFiles.length === 0 && query) return null;

              return (
                <div key={subIndex} style={{ borderBottom: subIndex < subject.subsections.length - 1 ? '2px solid #e5e7eb' : 'none' }}>
                  <div style={{ 
                    padding: '0.75rem 1.5rem', 
                    background: subsection.color || '#f3f4f6', 
                    borderBottom: '1px solid #e5e7eb',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    color: '#374151',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span>{subsection.name}</span>
                    {subsection.credits && (
                      <span style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '500', 
                        color: '#6b7280',
                        fontStyle: 'italic'
                      }}>
                        {subsection.credits}
                      </span>
                    )}
                  </div>
                  {renderFileList(subsection.files, query, subjectMatches)}
                </div>
              );
            })}
          </div>

          <div style={{ padding: '1.5rem', marginTop: 'auto', borderTop: '1px solid #eee', background: 'white' }}>
            {subject.subsections.map((subsection, subIndex) => {
              if (subsection.links && subsection.links.length > 0) {
                return (
                  <div key={subIndex} style={{ marginBottom: subIndex < subject.subsections.length - 1 ? '0.75rem' : '0' }}>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: '600' }}>
                      {subsection.name}:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {subsection.links.map((link, linkIndex) => (
                        <button 
                          key={linkIndex}
                          onClick={() => window.open(link, "_blank")}
                          className={`btn ${subject.special ? 'btn-primary' : 'btn-outline'}`}
                          style={{ width: '100%', justifyContent: 'center', display: 'flex', padding: '0.75rem', fontSize: '0.85rem' }}
                        >
                          Open {subsection.name} Folder {subsection.links.length > 1 ? `(${linkIndex + 1})` : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              } else if (subsection.link && subsection.link !== "#") {
                return (
                  <div key={subIndex} style={{ marginBottom: subIndex < subject.subsections.length - 1 ? '0.75rem' : '0' }}>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: '600' }}>
                      {subsection.name}:
                    </div>
                    <button 
                      onClick={() => window.open(subsection.link, "_blank")}
                      className={`btn ${subject.special ? 'btn-primary' : 'btn-outline'}`}
                      style={{ width: '100%', justifyContent: 'center', display: 'flex', padding: '0.75rem', fontSize: '0.85rem' }}
                    >
                      Open {subsection.name} Folder
                    </button>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      );
    }

    // Original rendering for subjects without subsections
    const displayFiles = subject.files ? subject.files.filter(f => 
        !searchQuery || subjectMatches || f.name.toLowerCase().includes(query)
    ) : [];

    return (
    <div 
      key={subject.name} 
      className="grade-card"
    >
      {subject.image && (
        <div className="grade-card-image">
           <img src={subject.image} alt={subject.name} />
           <div className="grade-card-overlay" />
        </div>
      )}
      <div className="grade-card-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{subject.name}</h3>
            {subject.special ? (
                <span style={{ 
                background: '#dcfce7', color: '#166534', 
                padding: '0.2rem 0.6rem', borderRadius: '12px', 
                fontSize: '0.75rem', fontWeight: '600', whiteSpace: 'nowrap'
                }}>
                UPDATED
                </span>
            ) : (
                <span style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>No files</span>
            )}
          </div>
          
          {displayFiles && displayFiles.length > 0 ? (
             <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>
               {displayFiles.length} resources available
             </p>
          ) : (
             <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>
               Check back later for updates.
             </p>
          )}
      </div>

      {displayFiles && displayFiles.length > 0 && (
        <div style={{ padding: '0', background: '#f9fafb', borderTop: '1px solid #eee', maxHeight: '250px', overflowY: 'auto' }}>
          {renderFileList(subject.files, query, subjectMatches)}
        </div>
      )}

      <div style={{ padding: '1.5rem', marginTop: 'auto', borderTop: '1px solid #eee', background: 'white' }}>
        {subject.links && subject.links.length > 0 ? (
          // Multiple folder links
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {subject.links.map((link, index) => (
                  <button 
                key={index}
                onClick={() => window.open(link, "_blank")}
                className={`btn ${subject.special ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%', justifyContent: 'center', display: 'flex', padding: '0.75rem' }}
              >
                Open Full Folder {subject.links.length > 1 ? `(${index + 1})` : ''}
                  </button>
            ))}
        </div>
        ) : subject.link && subject.link !== "#" ? (
          // Single folder link
          <button 
            onClick={() => handleSubjectClick(subject)}
            className={`btn ${subject.special ? 'btn-primary' : 'btn-outline'}`}
            style={{ width: '100%', justifyContent: 'center', display: 'flex', padding: '0.75rem' }}
          >
            Open Full Folder
          </button>
        ) : (
            <p style={{ fontSize: '0.8rem', color: 'var(--gray)', textAlign: 'center', fontStyle: 'italic' }}>
              Select individual files above.
            </p>
        )}
      </div>
    </div>
  )};

  return (
    <>
      <Head>
        <title>{grade.title} - EduRelief SL</title>
      </Head>

      <style jsx>{`
        .hero-modern {
            position: relative;
            height: 50vh;
            min-height: 450px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            overflow: hidden;
            margin-bottom: 4rem;
            border-radius: 0 0 3rem 3rem;
            background: #0f172a;
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
        }
        .hero-modern-bg {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=80') center/cover no-repeat;
            z-index: 0;
            opacity: 0.6;
            transform: scale(1.1);
            animation: subtleZoom 20s infinite alternate;
        }
        @keyframes subtleZoom {
            from { transform: scale(1.1); }
            to { transform: scale(1.2); }
        }
        .hero-modern-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.9));
            z-index: 1;
            backdrop-filter: blur(4px);
        }
        .hero-modern-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 900px;
            padding: 2rem;
            animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .hero-modern h1 {
            font-family: 'Merriweather', serif;
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 900;
            margin-bottom: 1.5rem;
            background: linear-gradient(to right, #fff, #cbd5e1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 10px 30px rgba(0,0,0,0.2);
            letter-spacing: -2px;
            line-height: 1.1;
        }
        .hero-modern p {
            font-size: 1.25rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
            font-weight: 300;
            letter-spacing: 0.5px;
            line-height: 1.6;
        }
        
        .folder-list-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 2.5rem;
            padding: 1rem;
        }

        .folder-card {
            background: rgba(255, 255, 255, 0.8);
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            border: 1px solid rgba(255,255,255,0.6);
            box-shadow: 
                0 4px 6px -1px rgba(0, 0, 0, 0.02), 
                0 2px 4px -1px rgba(0, 0, 0, 0.02),
                inset 0 0 0 1px rgba(255,255,255,0.5);
            cursor: pointer;
            overflow: hidden;
            height: 100%;
            backdrop-filter: blur(20px);
            position: relative;
        }
        
        .folder-card:hover {
            transform: translateY(-12px) scale(1.01);
            box-shadow: 
                0 25px 50px -12px rgba(0, 0, 0, 0.1), 
                0 10px 20px -5px rgba(0, 0, 0, 0.05);
            background: rgba(255, 255, 255, 0.95);
            border-color: rgba(255,255,255,1);
        }

        .card-image-header {
            height: 220px;
            width: 100%;
            background-size: cover;
            background-position: center;
            position: relative;
            overflow: hidden;
        }
        
        /* Zoom effect on image hover */
        .folder-card:hover .card-image-header {
             /* We can't animate background-size smoothly on all browsers easily, 
                so we rely on the container transform or pseudo-element */
        }

        .card-image-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
            opacity: 0.6;
            transition: opacity 0.3s;
        }
        
        .folder-card:hover .card-image-overlay {
            opacity: 0.3;
        }
        
        .card-content {
            padding: 2rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
        }

        .folder-title {
            font-family: 'Merriweather', serif;
            font-size: 1.5rem;
            font-weight: 900;
            color: #1e293b;
            margin-bottom: 0.75rem;
            letter-spacing: -0.5px;
        }

        .folder-subtitle {
            font-size: 0.95rem;
            color: #64748b;
            line-height: 1.6;
            font-weight: 400;
        }
        
        .card-arrow {
            margin-top: auto;
            align-self: flex-end;
            color: #10b981;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s ease;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding-top: 1.5rem;
        }
        
        .folder-card:hover .card-arrow {
            opacity: 1;
            transform: translateX(0);
        }

        .file-item:hover {
            background: #f8fafc !important;
            transform: translateX(4px);
        }
        
        .grade-card {
            background: white;
            border-radius: 20px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            overflow: hidden;
        }
        .grade-card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            transform: translateY(-4px);
            border-color: #cbd5e1;
        }

        /* Animation for items appearing */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            opacity: 0; /* Start hidden */
        }
      `}</style>

      <div className="page-wrapper" style={{ background: '#f1f5f9' }}>
        <nav className="nav">
          <div className="nav-content">
            <Link href="/" className="brand">
              <div style={{ color: '#10b981', width: '24px', height: '24px', display: 'flex', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="brand-name">EduRelief SL</span>
            </Link>
            <div className="nav-links">
                <Link href="/" className="nav-link">← Back to Home</Link>
            </div>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>← Back to Home</Link>
          </div>
        </nav>

        <header className="hero-modern">
          <div className="hero-modern-bg" />
          <div className="hero-modern-overlay" />
          <div className="hero-modern-content">
            <span style={{ 
                background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', 
                borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600',
                marginBottom: '1rem', display: 'inline-block'
            }}>
                Selected Grade
            </span>
            <h1>{grade.title}</h1>
            <p>
              Access a comprehensive library of past papers, notes, and resources. 
              Select your stream to begin downloading.
            </p>
          </div>
        </header>

        {/* Search Bar */}
        <div className="search-container" style={{ marginTop: '-30px', position: 'relative', zIndex: 50, padding: '0 1.5rem' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <svg 
                    className="search-icon" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ pointerEvents: 'none' }}
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search for subjects, files..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoComplete="off"
                    style={{ paddingRight: searchQuery ? '3rem' : '1.5rem' }}
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery("")}
                        style={{
                            position: 'absolute',
                            right: '1rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#9ca3af',
                            padding: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="Clear search"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                )}
            </div>
        </div>

        <main className="main-content" style={{ minHeight: '50vh' }}>
          {/* Search Results View */}
          {searchQuery ? (
             <div className="animate-fade-in">
                 <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '0.5rem' }}>
                        Search Results
                    </h2>
                 </div>
                 <div className="grades-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
                     {(() => {
                        // Collect all subjects
                        const allSubjects = grade.streams 
                            ? grade.streams.flatMap(s => s.subjects) 
                            : grade.subjects;

                        const filteredSubjects = allSubjects.filter(sub => {
                            const query = searchQuery.toLowerCase();
                            const subjectMatches = sub.name.toLowerCase().includes(query);
                            const hasMatchingFiles = sub.files && sub.files.some(f => f.name.toLowerCase().includes(query));
                            return subjectMatches || hasMatchingFiles;
                        });

                        if (filteredSubjects.length === 0) {
                            return (
                                <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '4rem' }}>
                                    <p style={{ fontSize: '1.2rem', color: 'var(--gray)' }}>No matches found for "{searchQuery}"</p>
                                </div>
                            );
                        }

                        return filteredSubjects.map(renderSubjectCard);
                     })()}
                 </div>
             </div>
          ) : (
            /* Normal Content Rendering */
            <>
              {/* Render Content based on selection state */}
              {grade.streams ? (
             <>
               {/* If a stream is selected, show its subjects and a back button */}
               {selectedStream ? (
                 <div className="animate-fade-in">
                   <button 
                     onClick={() => setSelectedStream(null)}
                     style={{
                       background: 'white', border: '1px solid #e5e7eb', color: '#16a34a', 
                       padding: '0.5rem 1.5rem', borderRadius: '50px',
                       fontSize: '0.95rem', cursor: 'pointer', marginBottom: '2rem',
                       display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600',
                       boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                     }}
                   >
                     ← Back to Streams
                   </button>
                   
                   <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: '#1f2937', marginBottom: '0.5rem' }}>
                            {selectedStream.title}
                        </h2>
                        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
                            Select a subject below to view available downloads.
                        </p>
                   </div>

                   <div className="grades-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
                     {selectedStream.subjects.map(subject => renderSubjectCard(subject))}
                   </div>
                 </div>
               ) : (
                 /* Default View: Grid of Beautiful Cards with Images */
                 <div className="folder-list-container">
                    {grade.streams.map((stream, index) => (
                      <div 
                        key={stream.title}
                        className="folder-card animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                        onClick={() => setSelectedStream(stream)}
                      >
                        <div 
                           className="card-image-header"
                           style={{ backgroundImage: `url(${stream.image})` }}
                        >
                           <div className="card-image-overlay" />
                        </div>
                        <div className="card-content">
                            <h3 className="folder-title">
                              {stream.title}
                            </h3>
                            {stream.subtitle && (
                                <p className="folder-subtitle">{stream.subtitle}</p>
                            )}
                            <div className="card-arrow">
                                Explore Stream 
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                      </div>
                    ))}
                 </div>
               )}
             </>
          ) : (
            /* Fallback for other grades (flat list) */
            <div className="grades-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
              {grade.subjects.map((subject) => renderSubjectCard(subject))}
            </div>
          )}
          </>
        )}
        </main>

        {/* Disclaimer Section */}
        <div style={{ background: '#fff', padding: '3rem 1.5rem', borderTop: '1px solid #eee', marginTop: '2rem' }}>
          <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto', 
              background: '#f9fafb', 
              padding: '1.5rem', 
              borderRadius: '12px', 
              border: '1px solid #e5e7eb',
              textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.5rem' }}>⚠️ Disclaimer</h3>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
              The documents, papers, and short notes available on this website are sent by students and teachers from all over Sri Lanka. 
              We do not claim ownership of any of these materials. All rights belong to their respective owners and authors.
            </p>
          </div>
        </div>

        <footer className="site-footer">
          <p>© 2025 EduRelief SL. Built with ❤️ for our students.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            Contact: 076 101 3045 (Teshan)
          </p>
        </footer>
      </div>
    </>
  );
}
