

import React, { createContext, useState, useContext, type ReactNode } from 'react';

const translations = {
  en: {
    // Header
    langSwitch: 'JP',
    // Home
    home_name: 'Maki Kishimoto',
    home_title: 'Assistant Professor, Institute of Science Tokyo  |  Dr. Eng.',
    // About Me
    about_title: 'About Me',
    about_p0: 'Thanks for visiting my digital home!',
    about_p1: 'I conduct research in the fields of architectural and urban planning, focusing on the following areas:',
    about_p2: '・Urban disaster management in response to major earthquakes: My work aims to realize disaster-resilient urban development based on scientific evidence. I have been developing city-scale simulation models to assess the impact of large-scale earthquakes and creating tools that support policymaking by local governments.',
    about_p3: '・Urban and architectural planning using ICT/IoT technologies: With the growing adoption of smart technologies in cities and buildings, I focus on how the sensor data collected through these initiatives can be leveraged to improve living environments. For example, I explore new ways of fostering spontaneous communication in local communities through the development of bench-based communication support systems, contributing to the design of more sustainable and inclusive communities.',
    about_p4: 'Please see the Publications section for further information on my research activities.',
    // FIX: Add missing translation keys for research list items.
    about_li1_title: 'Urban disaster management in response to major earthquakes',
    about_li1_desc: 'My work aims to realize disaster-resilient urban development based on scientific evidence. I have been developing city-scale simulation models to assess the impact of large-scale earthquakes and creating tools that support policymaking by local governments.',
    about_li2_title: 'Urban and architectural planning using ICT/IoT technologies',
    about_li2_desc: 'With the growing adoption of smart technologies in cities and buildings, I focus on how the sensor data collected through these initiatives can be leveraged to improve living environments. For example, I explore new ways of fostering spontaneous communication in local communities through the development of bench-based communication support systems, contributing to the design of more sustainable and inclusive communities.',
    about_li3_title: '',
    about_li3_desc: '',
    about_li4_title: '',
    about_li4_desc: '',
    // Publications
    publications_title: 'Publications',
    publications_p1_part1: 'Please see a full list of my publications on ',
    publications_p1_part2: 'T2R2 Science Tokyo Research Repository',
    publications_p1_part3: '.',
    // Teaching
    teaching_title: 'Teaching',
    teaching_syllabus: 'Syllabus',

    // Footer
    // FIX: Add missing translation keys for Footer component to resolve type errors.
    footer_rights: 'All rights reserved.',
    // FIX: Add missing translation key for the Footer component.
    footer_built_with: 'Powered by Gemini.',
  },
  ja: {
    // Header
    langSwitch: 'EN',
    // Home
    home_name: '岸本 まき',
    home_title: '東京科学大学 環境・社会理工学院 助教  |  博士（工学）',
    // About Me
    about_title: 'About me',
    about_p0: ' ',
    about_p1: '建築計画・都市計画分野において、以下の領域において研究に取り組んでいます。',
    about_p2: '・大地震を対象とした都市防災に関する研究：科学的根拠に基づく防災まちづくりの実現を目指し、大地震を想定した都市スケールのシミュレーションの開発や、行政による施策立案を支援するツール作成に取り組んでいます。',
    about_p3: '・ICT / IoT技術を応用した都市・建築計画に関する研究：都市や建物のスマート化に伴い蓄積されるセンサデータの利活用に着目し、それらを生活空間の改善に還元する方法を検討しています。たとえば、ベンチを媒介としたコミュニケーション支援システムの開発を通じて、地域における自然な交流を促し、持続可能なコミュニティ形成のあり方を探求しています。',
    about_p4: '詳しいプロジェクト内容は、Publications欄をご参照ください。',
    // FIX: Add missing translation keys for research list items.
    about_li1_title: '大地震を対象とした都市防災に関する研究',
    about_li1_desc: '科学的根拠に基づく防災まちづくりの実現を目指し、大地震を想定した都市スケールのシミュレーションの開発や、行政による施策立案を支援するツール作成に取り組んでいます。',
    about_li2_title: 'ICT / IoT技術を応用した都市・建築計画に関する研究',
    about_li2_desc: '都市や建物のスマート化に伴い蓄積されるセンサデータの利活用に着目し、それらを生活空間の改善に還元する方法を検討しています。たとえば、ベンチを媒介としたコミュニケーション支援システムの開発を通じて、地域における自然な交流を促し、持続可能なコミュニティ形成のあり方を探求しています。',
    about_li3_title: '',
    about_li3_desc: '',
    about_li4_title: '',
    about_li4_desc: '',
    // Publications
    publications_title: 'Publications',
    publications_p1_part1: '国際会議の論文を含む全リストは',
    publications_p1_part2: 'T2R2 Science Tokyo Research Repository',
    publications_p1_part3: 'をご覧ください。',
    // Teaching
    teaching_title: 'Teaching',
    teaching_syllabus: 'シラバス',
    // Footer
    // FIX: Add missing translation keys for Footer component to resolve type errors.
    footer_rights: 'All rights reserved.',
    // FIX: Add missing translation key for the Footer component.
    footer_built_with: 'ジェミニを利用しています',
  },
};

type Language = 'en' | 'ja';
type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ja' : 'en'));
  };

  const t = (key: TranslationKey): string => {
    const langTranslations = translations[language];
    // Check if the key exists in the current language's translations.
    // This prevents falling back to English for keys that are intentionally empty strings in another language.
    if (Object.prototype.hasOwnProperty.call(langTranslations, key)) {
      return langTranslations[key];
    }
    // Fallback to English only if the key is completely missing.
    return translations['en'][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};