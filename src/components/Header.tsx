
import React, { useState, useRef, useEffect } from 'react';
import { SECTIONS } from '../constants.ts';
import type { SectionLink } from '../types.ts';
import { useLanguage } from '../i18n.tsx';
import { GlobeAltIcon } from './icons/HeroIcons.tsx';


interface HeaderProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const { language, setLanguage } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setActiveSection(sectionId); // Set the active section on click
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleLangChange = (lang: 'en' | 'ja') => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4 sm:flex-row sm:justify-between">
          {/* Left Side: Name */}
          <div className="flex items-center mb-2 sm:mb-0">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-300">
              Maki Kishimoto
            </a>
          </div>

          {/* Right Side: Navigation & Language Toggle */}
          <div className="flex items-center">
            <ul className="flex items-center space-x-4 sm:space-x-6">
              {SECTIONS.map((section: SectionLink) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleNavClick(e, section.id)}
                    className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
                      activeSection === section.id
                        ? 'text-blue-600'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {language === 'ja' ? section.title_jp : section.title}
                  </a>
                </li>
              ))}
            </ul>
             {/* Language Dropdown */}
            <div ref={langMenuRef} className="relative ml-4 sm:ml-6">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-300"
                aria-haspopup="true"
                aria-expanded={isLangMenuOpen}
                aria-label="Toggle language"
              >
                <GlobeAltIcon className="w-6 h-6" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => handleLangChange('en')}
                      className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'font-bold text-blue-600 bg-slate-50' : 'text-slate-700'} hover:bg-slate-100 hover:text-slate-900`}
                      role="menuitem"
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLangChange('ja')}
                      className={`w-full text-left px-4 py-2 text-sm ${language === 'ja' ? 'font-bold text-blue-600 bg-slate-50' : 'text-slate-700'} hover:bg-slate-100 hover:text-slate-900`}
                      role="menuitem"
                    >
                      日本語
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
