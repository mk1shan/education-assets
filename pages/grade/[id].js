import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// Data for Media Studies (Art Stream)
const mediaStudiesFiles = [
  { name: "01. සන්නිවේදන අධ්‍යයනයෙහි ආරම්භය හා විකාශය", link: "https://drive.google.com/file/d/1qL6rsIKCcuRXPSpwlWa3Ru9zvWITgqgp/view?usp=sharing" },
  { name: "02. සන්නිවේදනයේ පදනම", link: "https://drive.google.com/file/d/13oFRyJR0eE3GtWrRk7I6MW7kZr5fynTd/view?usp=sharing" },
  { name: "03. මූලික සන්නිවේදන වර්ග, ස්වරූප හා ආකෘති", link: "https://drive.google.com/file/d/1F9oQNZ6lX9SlRn4AW_2ssizaKMxgjiZI/view?usp=sharing" },
  { name: "04. සාම්ප්‍රදායික මාධ්‍ය ජනමාධ්‍ය හා නව මාධ්‍ය", link: "https://drive.google.com/file/d/1URFHPB5vUYOSd6KSZCAkwJY-KUaSURyU/view?usp=sharing" },
  { name: "05. සංස්කෘතිකාවබෝධය, මාධ්‍යයේ ස්වභාවය", link: "https://drive.google.com/file/d/138GrcTzorXiWFWag2jkOXsOTffkklQGN/view?usp=sharing" },
  { name: "06. මාධ්‍ය සාක්ෂරතාව හා මාධ්‍ය චිචාරය", link: "https://drive.google.com/file/d/1Gzt1J1BrERYyYkXfgxA3y4hq2N2AAJmv/view?usp=sharing" },
  { name: "07. නිර්මාණාත්මක සන්නිවේදනය", link: "https://drive.google.com/file/d/1KDPEOQZ25hP7fIkbqQxDnB73Yfvy8vUe/view?usp=sharing" },
  { name: "08. මහජන සම්බන්ධතා හා සිද්ධි කළමනාකරණය", link: "https://drive.google.com/file/d/1ShIoWOyojNo9mPdzPBdR00zujr5S3ZM9/view?usp=sharing" },
  { name: "09. සංවර්ධනය සඳහා සන්නිවේදනය", link: "https://drive.google.com/file/d/1V9WZ6BR3txsspTr2dEwWRowA29M5CkEp/view?usp=sharing" },
  { name: "10. සන්නිවේදන ප්‍රතිපත්ති හා මාධ්‍ය නියාමනය", link: "https://drive.google.com/file/d/1sxvXIjC5qaXjIXhm0aFhTgyf4h5PCWHy/view?usp=sharing" },
  { name: "11. ශ්‍රී ලංකාවේ මාධ්‍ය හා සමකාලීන ප්‍රවණතා", link: "https://drive.google.com/file/d/1cjLZetb1QXRV_DYdDeU7DGxzKGq75WRh/view?usp=sharing" },
  { name: "12. සන්නිවෙදන සමීක්ශන", link: "https://drive.google.com/file/d/178k6eEXTsXr5FITUboRAHNesy7g2Y1UI/view?usp=sharing" }
];

// Data for Accounting (Commerce Stream)
const accountingFolderLink = "https://drive.google.com/drive/folders/1Zhl9U1-xMQWvDVXFfmSlM0LstF-MMXfj?usp=sharing";

const accountingFiles = [
  // New files (cleaned names)
  { name: "02. ගිණුම්කරණ සමීකරණය", link: accountingFolderLink },
  { name: "03. ද්විත්ව සටහන් ගිණුම්කරණය", link: accountingFolderLink },
  { name: "04. මූලික සටහන් පොත්", link: accountingFolderLink },
  { name: "05. ගිණුම්කරණ සංකල්ප හැඳින්වීම", link: accountingFolderLink },
  { name: "06.01. මූල්‍ය ප්‍රකාශන", link: accountingFolderLink },
  { name: "06.02. මූල්‍ය ප්‍රකාශන ගැලපිලි", link: accountingFolderLink },
  { name: "07. නිෂ්පාදන ව්‍යාපාර", link: accountingFolderLink },
  { name: "09. අසම්පූර්ණ සටහන්", link: accountingFolderLink },
  { name: "10. හවුල් ව්‍යාපාර", link: accountingFolderLink },
  { name: "13. අනුපාත විශ්ලේෂණය", link: accountingFolderLink },
  { name: "14.01. කළමනාකරණ ගිණුම්කරණය තීරණ ගැනීමේ ක්‍රියාවලියට සම්බන්ධ කරගැනීම", link: accountingFolderLink },
  { name: "14.03. ශ්‍රම කාලය සම්බන්ධයෙන් වාර්තා කරයි 1", link: accountingFolderLink },
  { name: "15. පිරිවැය ලාභ පරිමා විශ්ලේශණය", link: accountingFolderLink },
  { name: "16. ප්‍රාග්ධන ආයෝජන තීරණ Review", link: accountingFolderLink },
  { name: "අරමුණු කර නොගත් ව්‍යාපාර", link: accountingFolderLink },
  { name: "ගිණුම්කරණ ප්‍රමිත පොත", link: accountingFolderLink },
  { name: "ගිණුම්කරණය හා එහි අවශ්‍යතාවය", link: accountingFolderLink },
  { name: "සීමාසහිත සමාගම් Note", link: accountingFolderLink },

  // Existing files
  { name: "1 ව්_යුහගත පිළිතුරු", link: accountingFolderLink },
  { name: "4 ඒකකය", link: accountingFolderLink },
  { name: "2024 AL Accounting Part I Paper (Sinhala Medium)", link: accountingFolderLink },
  { name: "Acc G12 3rd Term Q & ANS 01", link: accountingFolderLink },
  { name: "Acc G12 3rd Term Q & ANS 02", link: accountingFolderLink },
  { name: "Acc G12 3rd Term Q & ANS 03", link: accountingFolderLink },
  { name: "Accounting Focus Final", link: accountingFolderLink },
  { name: "Grade 13 Accounting 3rd Term Answers 2025", link: accountingFolderLink },
  { name: "North Western Province Gr12 Business Studies 2020", link: accountingFolderLink },
  { name: "Grade 12 Teacher Guide - Accounting", link: accountingFolderLink },
  { name: "SM Acc T3 G12 I,II Paper Answers 2019", link: accountingFolderLink },
  { name: "SM Acco G12 T3 I,II Paper Answers 2018", link: accountingFolderLink },
  { name: "Unit Paper 10 - 2025", link: accountingFolderLink },
  { name: "Unit Paper 19 - 2025", link: accountingFolderLink },
  { name: "Unit Test 01-06", link: accountingFolderLink },
  { name: "අවිනිශ්චිත Seminar (1)", link: accountingFolderLink },
  { name: "නිපුණතාවය 02 - බහුවරණ ප්_රශ්න 3", link: accountingFolderLink },
  { name: "නිපුණතාවය 03 - බහුවරණ ප්_රශ්න 2", link: accountingFolderLink },
  { name: "පැහැසරණිය Accounting", link: accountingFolderLink },
  { name: "මූලික ෙපාත්", link: accountingFolderLink },
  
  // Images
  { name: "Institute Nithya - Image 01", link: accountingFolderLink },
  { name: "Institute Nithya - Image 02", link: accountingFolderLink },
  { name: "Institute Nithya - Image 03", link: accountingFolderLink },
  { name: "Institute Nithya - Image 04", link: accountingFolderLink },
  { name: "Institute Nithya - Image 05", link: accountingFolderLink },
  { name: "Institute Nithya - Image 06", link: accountingFolderLink },
  { name: "Institute Nithya - Image 07", link: accountingFolderLink },
  { name: "Institute Nithya - Image 08", link: accountingFolderLink },
  { name: "Institute Nithya - Image 09", link: accountingFolderLink },
  { name: "Institute Nithya - Image 10", link: accountingFolderLink },
  { name: "Institute Nithya - Image 11", link: accountingFolderLink },
  { name: "Institute Nithya - Image 12", link: accountingFolderLink },
  { name: "Institute Nithya - Image 13", link: accountingFolderLink },
  { name: "Institute Nithya - Image 14", link: accountingFolderLink },
  { name: "Institute Nithya - Image 15", link: accountingFolderLink },
  { name: "Institute Nithya - Image 16", link: accountingFolderLink }
];

// Data for Chemistry (Science Stream)
const chemistryFolderLink = "https://drive.google.com/drive/folders/1okhr3Ogphw4OZ_2JaPzd4WOC7uN3tqGB?usp=sharing";

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
  { name: "ශක්ති විද්‍යාව MCQ POINT COLLECTION", link: chemistryFolderLink }
];

// Data for Biology (Science Stream)
const biologyFolderLink = "https://drive.google.com/drive/folders/1IKg9SL7rOlZyxMixfD_VXbTZVbZJ76IC?usp=sharing";

const biologyFiles = [
  { name: "DEFINITIONS SM Final done - Hansika Nishshanka", link: biologyFolderLink },
  { name: "Practical Handbook - Buddhika Lakshan", link: biologyFolderLink }
];

// Data for Physics (Science Stream)
const physicsFolderLink = "https://drive.google.com/drive/folders/16QP9eM-iwEsGPHbWnx6VRhzbCqTAl5CL?usp=drive_link";
const physicsNewFolderLink = "https://drive.google.com/drive/folders/18cz_Hc-6nqGKdzB9YRJNCCCYd11muECr?usp=sharing";

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
  { name: "MCQ ANALYSIS I...pdf", link: physicsFolderLink }
];

// Data for Economics (Commerce Stream)
const econFolderLink = "https://drive.google.com/drive/folders/10A43cuXuXsPvc63Wa4QSaot7KFoqNJaS?usp=sharing";

const econFiles = [
  { name: "2.1 - Jimi", link: econFolderLink },
  { name: "2.2 - Jimi", link: econFolderLink },
  { name: "2.3 - Jimi", link: econFolderLink },
  { name: "2.4 - Jimi", link: econFolderLink },
  { name: "2.6 - Jimi", link: econFolderLink },
  { name: "2.7 - Jimi", link: econFolderLink },
  { name: "3පාඩම_වෙලදපොට_රජයේ_මැදිහත්_වීම්_1 (5) - Manuka Methdini", link: econFolderLink },
  { name: "2018 econ 1st & 2nd - Chanuri Nishara", link: econFolderLink },
  { name: "2019 econ 1st & 2nd - Chanuri Nishara", link: econFolderLink },
  { name: "2020 econ 1st - Chanuri Nishara", link: econFolderLink },
  { name: "2020 econ 2nd - Chanuri Nishara", link: econFolderLink },
  { name: "2021 econ 1st - Chanuri Nishara", link: econFolderLink },
  { name: "2021 econ 2nd - Chanuri Nishara", link: econFolderLink },
  { name: "2022 (23)econ 1st - Chanuri Nishara", link: econFolderLink },
  { name: "2022(23) econ 2nd - Chanuri Nishara", link: econFolderLink },
  { name: "2023 econ 1st - Chanuri Nishara", link: econFolderLink },
  { name: "2024 econ 1st & 2nd - Chanuri Nishara", link: econFolderLink },
  { name: "Eco_1.1_lo - Jimi", link: econFolderLink },
  { name: "Eco_1.2_lo - Jimi", link: econFolderLink },
  { name: "Eco_1.3_lo - Jimi", link: econFolderLink },
  { name: "Eco_1.4_lo - Jimi", link: econFolderLink },
  { name: "Eco_1.5_lo - Jimi", link: econFolderLink },
  { name: "Eco_1.6_lo - Jimi", link: econFolderLink },
  { name: "Eco_1.7_lo - Jimi", link: econFolderLink },
  { name: "Eco_1.8_lo - Jimi", link: econFolderLink },
  { name: "Eco_1.9_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.1_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.2_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.3_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.4_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.5_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.6_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.7_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.8_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.9_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.10_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.11_lo - Jimi", link: econFolderLink },
  { name: "Eco_2.12_lo - Jimi", link: econFolderLink },
  { name: "ECON 1 පාඩම - Manuka Methdini", link: econFolderLink },
  { name: "Econ All lessons - Unit Papers - Reshana Gamage", link: econFolderLink },
  { name: "Econ lesson 3 theory - RMB Rathnayaka", link: econFolderLink },
  { name: "ECON RAPID MCQ PACK Lesson 01 - RMB Rathnayaka", link: econFolderLink },
  { name: "Econ_I,IIpp_2018 - Sethumi Yuhansa", link: econFolderLink },
  { name: "Econ-G-13 Uva-province-model paper -Answe - RMB Rathnayaka", link: econFolderLink },
  { name: "Econ-G-13 Wayaba-province-model paper -Answe - RMB Rathnayaka", link: econFolderLink },
  { name: "Economics Unit 1 T - Dilmi Ranaweera", link: econFolderLink },
  { name: "Economics Unit 2 T - Dilmi Ranaweera", link: econFolderLink },
  { name: "Economics Unit 3 T - Dilmi Ranaweera", link: econFolderLink },
  { name: "Economics Unit 4 T - Dilmi Ranaweera", link: econFolderLink },
  { name: "Economics Unit 5 T - Dilmi Ranaweera", link: econFolderLink }
];

// Data for Business Studies (Commerce Stream)
const businessStudiesFolderLink = "https://drive.google.com/drive/folders/1Tz5wXzQP-5S_7GUEF_NQNqBVTmPo03y9?usp=sharing";

const businessStudiesFiles = [
  { name: "12 managment SN 1 - Chamathka Chandupa", link: businessStudiesFolderLink },
  { name: "13 OM SN - Chamathka Chandupa", link: businessStudiesFolderLink },
  { name: "2024 bs 1st & 2nd - Chanuri Nishara", link: businessStudiesFolderLink },
  { name: "BS_I,II Ans_dakunu palatha_2019 - Sethumi Yuhansa", link: businessStudiesFolderLink },
  { name: "BuisStu_I,IIpp-2018 - Sethumi Yuhansa", link: businessStudiesFolderLink },
  { name: "BuisStu_I,IIpp-2018 (1) - Sethumi Yuhansa", link: businessStudiesFolderLink },
  { name: "Busi_T2_I,II pp_dakunu palatha_2019 - Sethumi Yuhansa", link: businessStudiesFolderLink },
  { name: "Busi_T2_I,II pp_dakunu palatha_2019 (1) - Sethumi Yuhansa", link: businessStudiesFolderLink },
  { name: "BusiStu_I,IIans_2018 - Sethumi Yuhansa", link: businessStudiesFolderLink },
  { name: "c4095ebe-ee2a-451f-8ef7-ca976102c2a1 - Mayanjana Hewagamage", link: businessStudiesFolderLink },
  { name: "SM_Bus_G12_T3_I,II pp Ans_2018 - Sethumi Yuhansa", link: businessStudiesFolderLink },
  { name: "SM_Bus_T3_G12_I,II pp Ans_2019 - Sethumi Yuhansa", link: businessStudiesFolderLink },
  { name: "රජය ව්‍ය්‍රාපර - Jimi", link: businessStudiesFolderLink },
  { name: "වියාපාර mcQ 500පිලිතුරු - Chamathka Chandupa", link: businessStudiesFolderLink },
  { name: "වියාපාර_mcQ_500ප්_රශ්න_පොත_poto_copy - Chamathka Chandupa", link: businessStudiesFolderLink },
  { name: "වියාපාර_mcQ_500ප්_රශ්න_පොත_poto_copy - Chanuri Nishara", link: businessStudiesFolderLink },
  { name: "වියාපාර_mcQ_500ප්_රශ්න_පොත_poto_copy", link: businessStudiesFolderLink },
  { name: "සමාජ වගකීම_ - Jimi", link: businessStudiesFolderLink }
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
  { name: "♨️භෞතික_භූගෝල_විද්‍යාව(1) - Hiruni Wijethunge", link: geoFolderLink }
];

// Data for Political Science (Arts Stream)
const polSciFolderLink = "https://drive.google.com/drive/folders/1-UlfuKhBchmQVKnx6yRCH6S2TMWXLkRM?usp=sharing";

const polSciFiles = [
  { name: "07 ps - Hiruni Wijethunge", link: polSciFolderLink },
  { name: "08 ps - Hiruni Wijethunge", link: polSciFolderLink },
  { name: "1978 දෙවන ජනරජ ආණ්ඩුක්‍රම ව්‍යවස්ථාව - Hiruni Wijethunge", link: polSciFolderLink },
  { name: "රාජ්‍යය සහ එහි භූමිකාව - Hiruni Wijethunge", link: polSciFolderLink }
];

// Data for Sinhala (Arts Stream)
const sinhalaFolderLink = "https://drive.google.com/drive/folders/1RiuTuWXhzqU9x6zAIftOgHCOtd5ly80B?usp=sharing";

const sinhalaFiles = [
  { name: "සද්ධර්මරත්නාවලිය උදෘත - Hiruni Wijethunge", link: sinhalaFolderLink },
  { name: "සද්ධර්මරත්නාවලිය__(1) - Hiruni Wijethunge", link: sinhalaFolderLink },
  { name: "සද්ධර්මලංකාරය විඡාර 4 - Hiruni Wijethunge", link: sinhalaFolderLink },
  { name: "සිංහල-පූජාවලිය-සද්ධර්මාලංකාරය_(1) - Hiruni Wijethunge", link: sinhalaFolderLink }
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
const olFolderLink = "https://drive.google.com/drive/folders/13ag0Hlrz8OGYwAo1iV87vgxBQ6MaPHnk?usp=sharing";

// O/L Files to display directly (instead of subject-based)
const olFiles = [
  { name: "BUDHDHISM", link: olFolderLink },
  { name: "ENGLISH", link: olFolderLink },
  { name: "ENGLISH LIT", link: olFolderLink },
  { name: "HISTORY", link: olFolderLink },
  { name: "ICT", link: olFolderLink },
  { name: "MATHEMATICS", link: olFolderLink },
  { name: "SCIENCE", link: olFolderLink },
  { name: "SINHALA", link: olFolderLink },
  { name: "SINHALA LIT", link: olFolderLink },
];

// Data for Primary (Grade 1-5)
const primaryEnvFolderLink = "https://drive.google.com/drive/folders/1rL-Y4Vyh3omCBYdgQNmZR7WYJZYeFnxw?usp=sharing";

const primaryEnvFiles = [
  { name: "පරිසරය grade 3 - 3 වාරය. - Samadhi Ruhunage", link: primaryEnvFolderLink }
];

// Data for Grade 2
const grade2FolderLink = "https://drive.google.com/drive/folders/1h87fmDNiWGygkq9CCWTvIGvNRJ21ue6g?usp=sharing";

const grade2Files = [
  { name: "2 ශ්‍රේණිය ගණිතය -ක්‍රියාකාරකම් පත්‍රිකා අංක 2 නව(1) - Chamal Karawgodage Don", link: grade2FolderLink }
];

const gradeConfig = {
  "1-5": {
    title: "Primary (Grade 1–5)",
    subjects: [
      { name: "Mathematics", files: [], link: "#" },
      { name: "English", files: [], link: "#" },
      { name: "Sinhala", files: [], link: "#" },
      { name: "Tamil", files: [], link: "#" },
      { 
        name: "Environment", 
        files: primaryEnvFiles, 
        link: primaryEnvFolderLink,
        special: true 
      },
      { 
        name: "Grade 2", 
        files: grade2Files, 
        link: grade2FolderLink,
        special: true 
      }
    ],
  },
  "6-9": {
    title: "Middle School (Grade 6–9)",
    subjects: [
      { name: "Mathematics", files: [], link: "#" },
      { name: "Science", files: [], link: "#" },
      { name: "History", files: [], link: "#" },
      { name: "Geography", files: [], link: "#" },
      { name: "English", files: [], link: "#" }
    ],
  },
  ol: {
    title: "O/L (Ordinary Level)",
    subjects: [
      { 
        name: "Ordinary Level Subjects", 
        files: olFiles, 
        link: olFolderLink, 
        special: true 
      }
    ],
  },
  al: {
    title: "A/L (Advanced Level)",
    // Implementing folder structure with IMAGES
    streams: [
      {
        title: "SCIENCE STREAM",
        subtitle: "Physics, Chemistry, Biology...",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        subjects: [
          { 
            name: "Physics", 
            files: physicsFiles, 
            link: physicsFolderLink,
            special: true
          },
          { 
            name: "Chemistry", 
            files: chemistryFiles, 
            link: chemistryFolderLink,
            special: true 
          },
          { 
            name: "Biology", 
            files: biologyFiles, 
            link: biologyFolderLink,
            special: true 
          }
        ]
      },
      {
        title: "TECHNOLOGY STREAM",
        subtitle: "ET, BST, SFT, ICT...",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        subjects: [
          { 
            name: "IT", 
            files: ictFiles, 
            link: ictFolderLink,
            special: true
          },
          { 
             name: "Engineering Tech", 
             files: etFiles, 
             link: etFolderLink,
             special: true
          },
          { 
            name: "SFT", 
            files: sftFiles, 
            link: sftFolderLink,
            special: true
          },
          { 
            name: "BST", 
            files: bstFiles, 
            link: bstFolderLink,
            special: true
          }
        ]
      },
      {
        title: "COMMERCE STREAM",
        subtitle: "Accounting, Econ, Business Studies...",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        subjects: [
          { 
            name: "Accounting", 
            files: accountingFiles, 
            link: accountingFolderLink,
            special: true
          },
          { 
            name: "Business Studies", 
            files: businessStudiesFiles, 
            link: businessStudiesFolderLink,
            special: true 
          },
          { 
            name: "Econ", 
            files: econFiles, 
            link: econFolderLink,
            special: true 
          }
        ]
      },
      {
        title: "ARTS STREAM",
        subtitle: "Media Studies, Geography, History...",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
        subjects: [
          { 
            name: "Media Studies", 
            files: mediaStudiesFiles, 
            link: "https://drive.google.com/drive/folders/1ctG24ct0CHLW3EMRubYDkSP2w3rg2aJ4?usp=sharing",
            special: true
          },
          { 
             name: "Geography", 
             files: geoFiles, 
             link: geoFolderLink,
             special: true
          },
          { 
            name: "Political Science", 
            files: polSciFiles, 
            link: polSciFolderLink,
            special: true 
          },
          { 
            name: "Sinhala", 
            files: sinhalaFiles, 
            link: sinhalaFolderLink,
            special: true 
          },
          { name: "History", files: [], link: "#" }
        ]
      },
      {
        title: "COMMON TEST",
        subtitle: "General Knowledge & IQ",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
        subjects: [
           { 
             name: "General Knowledge", 
             files: commonTestFiles, 
             link: commonTestFolderLink,
             special: true 
           }
        ]
      },
      {
        title: "GENERAL ENGLISH",
        subtitle: "Grammar, Reading, Writing",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
        subjects: [
           { 
             name: "General English", 
             files: generalEnglishFiles, 
             link: generalEnglishFolderLink,
             special: true 
           }
        ]
      },
      {
        title: "GIT",
        subtitle: "Information Technology Basics",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        subjects: [
           { 
             name: "General Information Technology", 
             files: gitFiles, 
             link: gitFolderLink,
             special: true
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

  // Render Subject Card
  const renderSubjectCard = (subject) => {
    const query = searchQuery.toLowerCase();
    const subjectMatches = subject.name.toLowerCase().includes(query);
    
    // If subject matches, show all files. If not, show only matching files.
    const displayFiles = subject.files ? subject.files.filter(f => 
        !searchQuery || subjectMatches || f.name.toLowerCase().includes(query)
    ) : [];

    return (
    <div 
      key={subject.name} 
      className="grade-card" 
      style={{ padding: '0', cursor: 'default' }}
    >
      <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{subject.name}</h3>
          {subject.special ? (
            <span style={{ 
              background: '#dcfce7', color: '#166534', 
              padding: '0.2rem 0.6rem', borderRadius: '12px', 
              fontSize: '0.75rem', fontWeight: '600' 
            }}>
              UPDATED
            </span>
          ) : (
            <span style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>No files yet</span>
          )}
      </div>

      {displayFiles && displayFiles.length > 0 && (
        <div style={{ padding: '0', background: '#f9fafb' }}>
          <p style={{ padding: '1rem 1.5rem 0.5rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--gray)' }}>
            {displayFiles.length} Lessons Available:
          </p>
          <ul style={{ 
            listStyle: 'none', fontSize: '0.9rem', color: '#4b5563', 
            maxHeight: '300px', overflowY: 'auto', padding: '0' 
          }}>
            {displayFiles.map((f, i) => {
              // If searching, show full name to avoid confusion. Otherwise, simplify.
              const shouldShowFullName = !!searchQuery;

              // For certain subjects, we normally strip the uploader's name for cleaner UI
              const isStripSubject = (
                subject.name === "Econ" || 
                subject.name === "Business Studies" || 
                subject.name === "IT" || 
                subject.name === "SFT" || 
                subject.name === "Geography" || 
                subject.name === "Political Science" || 
                subject.name === "Sinhala" ||
                subject.name === "General English" ||
                subject.name === "General Information Technology" ||
                subject.name === "General Knowledge" ||
                subject.name === "Environment" ||
                subject.name === "Grade 2"
              );

              const displayName = (isStripSubject && !shouldShowFullName)
                ? f.name.split(" - ")[0] 
                : f.name;

              return (
                <li key={i} style={{ 
                      padding: '0.75rem 1.5rem', 
                      borderBottom: '1px solid #eee',
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      background: 'white'
                }}>
                  <span style={{ flex: 1 }}>{displayName}</span>
                  <button 
                    onClick={() => handleFileDownload(f.link)}
                    style={{
                        background: '#eff6ff', border: '1px solid #dbeafe', color: '#2563eb',
                        padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem',
                        cursor: 'pointer', fontWeight: '600', whiteSpace: 'nowrap'
                    }}
                  >
                    Open Folder
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div style={{ padding: '1.5rem', marginTop: 'auto', borderTop: '1px solid #eee' }}>
        {subject.link && subject.link !== "#" ? (
          <button 
            onClick={() => handleSubjectClick(subject)}
            className={`btn ${subject.special ? 'btn-primary' : 'btn-outline'}`}
            style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
          >
            Open Full Folder
          </button>
        ) : (
            <p style={{ fontSize: '0.8rem', color: 'var(--gray)', textAlign: 'center' }}>
              Select individual files above to download.
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
            height: 40vh;
            min-height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            overflow: hidden;
            margin-bottom: 3rem;
            border-radius: 0 0 2rem 2rem;
        }
        .hero-modern-bg {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=2000&q=80') center/cover no-repeat;
            z-index: 0;
        }
        .hero-modern-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to bottom, rgba(22, 163, 74, 0.8), rgba(22, 101, 52, 0.9));
            z-index: 1;
            backdrop-filter: blur(2px);
        }
        .hero-modern-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 800px;
            padding: 2rem;
        }
        .hero-modern h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
            letter-spacing: -1px;
        }
        .hero-modern p {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .folder-list-container {
            max-width: 1100px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
            padding: 1rem;
        }

        .folder-card {
            background: white;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
            cursor: pointer;
            overflow: hidden;
            height: 100%;
        }
        
        .folder-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .card-image-header {
            height: 160px;
            width: 100%;
            background-size: cover;
            background-position: center;
            position: relative;
        }

        .card-image-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4));
        }
        
        .card-content {
            padding: 1.5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .folder-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }

        .folder-subtitle {
            font-size: 0.9rem;
            color: #6b7280;
            line-height: 1.4;
        }

        /* Animation for items appearing */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeInUp 0.5s ease forwards;
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
