import type { Publication, TeachingExperience, SectionLink } from './types.ts';

export const SECTIONS: SectionLink[] = [
  { id: 'home', title: 'Home', title_jp: 'Home' },
  { id: 'publications', title: 'Publications', title_jp: 'Publications' },
  { id: 'teaching', title: 'Teaching', title_jp: 'Teaching' },
];

export const MOCK_PUBLICATIONS: Publication[] = [
  {
    authors: ['Maki Kishimoto'],
    year: 2024,
    title: "Damage from Road Blockages in the 2024 Noto Peninsula Earthquake",
    title_jp: '令和6年能登半島地震における道路閉塞被害',
    journal: 'JAEE NEWSLETTER, Japan Association for Earthquake Engineering, 13(1), 6-7.',
    journal_jp: 'JAEE NEWSLETTER, 日本地震工学会, 13(1), 6-7.'
  },
  {
    authors: ['Maki Kishimoto', 'Toshihiro Osaragi', 'YiLi Chan'],
    year: 2024,
    title: 'Simulation Analysis of Disaster Mitigation Effects by Urban Improvement Projects in Densely Built-Up Wooden Residential Area',
    title_jp: '木造住宅密集地域における市街地整備の減災効果に関するシミュレーション分析',
    journal: 'Journal of Architecture and Planning (Transactions of AIJ), 89(816), 310-319.',
    journal_jp: '日本建築学会計画系論文集, 89(816), 310-319.',
    doi: '10.3130/aija.89.310'

  },
  {
    authors: ['Maki Kishimoto', 'Toshihiro Osaragi'],
    year: 2019,
    title: "Accessibility Evaluation of Specific Emergency Transportation Roads and Effects of Quake-Resistant-Conversion of Roadside Buildings",
    title_jp: '特定緊急輸送道路のアクセシビリティ評価と沿道建築物耐震化の効果',
    journal: 'Journal of Architecture and Planning (Transactions of AIJ), 84(764), 2175-2182.',
    journal_jp: '日本建築学会計画系論文集, 84(764), 2175-2182.',
    doi: '10.3130/aija.84.2175'
  }
];

export const MOCK_TEACHING: TeachingExperience[] = [
  {
    courseCode: 'ARC.A301',
    courseTitle: 'Architectural Design and Drawing III',
    courseTitle_jp: '建築設計製図第三',
    university: 'Institute of Science Tokyo',
    semester: '2025 Academic Year',
    syllabusLink_en: 'https://syllabus.s.isct.ac.jp/courses/2025/6/0-906-362500-0-0/202502559',
    syllabusLink_jp: 'https://syllabus.s.isct.ac.jp/courses/2025/6/0-906-362500-0-0/202502559?hl=en',
  },
  {
    courseCode: 'ARC.P201',
    courseTitle: 'Introduction to Architectural Planning',
    courseTitle_jp: '建築計画基礎',
    university: 'Institute of Science Tokyo',
    semester: '2025 Academic Year',
    syllabusLink_en: 'https://syllabus.s.isct.ac.jp/courses/2025/6/0-906-362500-0-0/202502567',
    syllabusLink_jp: 'https://syllabus.s.isct.ac.jp/courses/2025/6/0-906-362500-0-0/202502567?hl=en',
  },
   {
    courseCode: 'ARC.P203',
    courseTitle: 'Exercise in Architectural Planning',
    courseTitle_jp: '建築計画演習',
    university: 'Institute of Science Tokyo',
    semester: '2025 Academic Year',
    syllabusLink_en: 'https://syllabus.s.isct.ac.jp/courses/2025/6/0-906-362500-0-0/202502587',
    syllabusLink_jp: 'https://syllabus.s.isct.ac.jp/courses/2025/6/0-906-362500-0-0/202502587?hl=en',
  },
    {
    courseCode: 'ARC.P422',
    courseTitle: 'Theories in Facility Planning II',
    courseTitle_jp: '施設計画学特論第二',
    university: 'Institute of Science Tokyo',
    semester: '2025 Academic Year',
    syllabusLink_en: 'https://syllabus.s.isct.ac.jp/courses/2025/6/1-25-462525-0-0/202504934',
    syllabusLink_jp: 'https://syllabus.s.isct.ac.jp/courses/2025/6/1-25-462525-0-0/202504934?hl=en',
  },
  {
    courseCode: 'ARC.P442',
    courseTitle: 'Theories in Urban Analysis and Planning II',
    courseTitle_jp: '空間計画学特論第二',
    university: 'Institute of Science Tokyo',
    semester: '2025 Academic Year',
    syllabusLink_en: 'https://syllabus.s.isct.ac.jp/courses/2025/6/1-25-462525-0-0/202504933',
    syllabusLink_jp: 'https://syllabus.s.isct.ac.jp/courses/2025/6/1-25-462525-0-0/202504933?hl=en',
  },
   {
    courseCode: 'XCO.T488',
    courseTitle: 'Exercises in Fundamentals of Data Science',
    courseTitle_jp: '基盤データサイエンス演習',
    university: 'Institute of Science Tokyo',
    semester: '2025 Academic Year',
    syllabusLink_en: 'https://syllabus.s.isct.ac.jp/courses/2025/4/1-904-340000-120900-0/202528454',
    syllabusLink_jp: 'https://syllabus.s.isct.ac.jp/courses/2025/4/1-904-340000-120900-0/202528454?hl=ja',
  },
];