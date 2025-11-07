
import React from 'react';
import { useLanguage } from '../i18n.tsx';
import { MailIcon } from './icons/MailIcon.tsx';
import { LinkedInIcon } from './icons/LinkedInIcon.tsx';

interface HomeProps {
  id: string;
}

// Helper component to format research points with a bold title and line break
const ResearchPoint: React.FC<{ text: string }> = ({ text }) => {
  // Find the first colon (either half-width or full-width)
  const colonIndex = text.indexOf(':');
  const wideColonIndex = text.indexOf('：');
  
  let splitIndex = -1;
  if (colonIndex > -1 && wideColonIndex > -1) {
    splitIndex = Math.min(colonIndex, wideColonIndex);
  } else if (colonIndex > -1) {
    splitIndex = colonIndex;
  } else {
    splitIndex = wideColonIndex;
  }
  
  // If no colon is found, render as a simple paragraph
  if (splitIndex === -1) {
    return <p>{text}</p>;
  }

  const title = text.substring(0, splitIndex + 1); // Include the colon in the title
  const description = text.substring(splitIndex + 1).trim();

  return (
    <div>
      <strong>{title}</strong>
      <br />
      {description}
    </div>
  );
};


const Home: React.FC<HomeProps> = ({ id }) => {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'Email', href: 'mailto:kishimoto.m.8408@m.isct.ac.jp', Icon: MailIcon },
    { name: 'Linked In', href: 'https://www.linkedin.com/in/maki-kishimoto-135b20298', Icon: LinkedInIcon },
  ];

  return (
    <section id={id} className="py-20 sm:py-24 border-b border-slate-200">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
        <div className="flex-shrink-0">
          <img
            src="https://github.com/kishimoto-m-ac/my-academic-website-assets/blob/main/DSC00913%202.jpeg?raw=true"
            
            alt="Maki Kishimoto"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover shadow-lg mx-auto"
          />
          <div className="mt-4 flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-slate-500 hover:text-slate-700 transition-colors duration-300"
              >
                <link.Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            {t('home_name')}
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            {t('home_title')}
          </p>
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">{t('about_title')}</h2>
        <div className="mt-8 text-slate-600 space-y-6">
          {t('about_p0') && <p>{t('about_p0')}</p>}
          <p>{t('about_p1')}</p>
          <ResearchPoint text={t('about_p2')} />
          <ResearchPoint text={t('about_p3')} />
          <p>{t('about_p4')}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;