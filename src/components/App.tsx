
import React, { useState } from 'react';
import Header from './Header.tsx';
import Home from './Home.tsx';
import Publications from './Publications.tsx';
import Teaching from './Teaching.tsx';
import Footer from './Footer.tsx';
import { useLanguage } from '../i18n.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const { language } = useLanguage();

  return (
    <div className={`bg-white text-slate-800 leading-relaxed ${language === 'en' ? 'font-roboto-custom' : 'font-sans'}`}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Home id="home" />
        <Publications id="publications" />
        <Teaching id="teaching" />
      </main>
      <Footer />
    </div>
  );
};

export default App;