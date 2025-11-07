
import React from 'react';
import { useLanguage } from '../i18n.tsx';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-slate-50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
        <p>&copy; {currentYear} Maki Kishimoto. {t('footer_rights')}</p>
        <p className="mt-1">{t('footer_built_with')}</p>
      </div>
    </footer>
  );
};

export default Footer;
