
import React from 'react';
import Section from './Section.tsx';
import { MOCK_PUBLICATIONS } from '../constants.ts';
import type { Publication } from '../types.ts';
import { LinkIcon, DocumentTextIcon } from './icons/HeroIcons.tsx';
import { useLanguage } from '../i18n.tsx';

const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => {
  const { language } = useLanguage();
  const title = language === 'ja' && pub.title_jp ? pub.title_jp : pub.title;
  const journal = language === 'ja' && pub.journal_jp ? pub.journal_jp : pub.journal;

  return (
    <li className="mb-6 pl-2 border-l-4 border-slate-200 transition-colors duration-300 hover:border-blue-500">
      <div className="ml-4">
        <p className="font-semibold text-slate-800">{title}</p>
        <p className="text-sm text-slate-500">{pub.authors.join(', ')} ({pub.year})</p>
        <p className="italic text-sm text-slate-600">{journal}</p>
        <div className="mt-2 flex items-center space-x-4">
          {pub.doi && (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-blue-600 hover:underline"
            >
              <LinkIcon className="w-4 h-4 mr-1" />
              DOI
            </a>
          )}
          {pub.pdfLink && (
            <a
              href={pub.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-blue-600 hover:underline"
            >
              <DocumentTextIcon className="w-4 h-4 mr-1" />
              PDF
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

interface PublicationsProps {
    id: string;
}

const Publications: React.FC<PublicationsProps> = ({ id }) => {
  const { language, t } = useLanguage();

  const repoUrl = language === 'ja'
    ? 'https://t2r2.star.titech.ac.jp/cgi-bin/researcherpublicationlist.cgi?q_researcher_content_number=CTT100638270&alldisp=1&tab_yf=2025'
    : 'https://t2r2.star.titech.ac.jp/cgi-bin/researcherpublicationlist.cgi?lv=en&q_researcher_content_number=CTT100638270&alldisp=1&tab_yf=2025';

  return (
    <Section id={id} title={t('publications_title')}>
      <p>
        {t('publications_p1_part1')}{' '}
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{t('publications_p1_part2')}</a>
        {t('publications_p1_part3')}
      </p>
      <ul className="mt-8">
        {MOCK_PUBLICATIONS.map((pub, index) => (
          <PublicationItem key={index} pub={pub} />
        ))}
      </ul>
    </Section>
  );
};

export default Publications;
