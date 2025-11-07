
import React from 'react';
import Section from './Section.tsx';
import { MOCK_TEACHING } from '../constants.ts';
import type { TeachingExperience } from '../types.ts';
import { useLanguage } from '../i18n.tsx';
import { DocumentTextIcon } from './icons/HeroIcons.tsx';

const TeachingItem: React.FC<{ item: TeachingExperience }> = ({ item }) => {
  const { language, t } = useLanguage();
  const courseTitle = language === 'ja' && item.courseTitle_jp ? item.courseTitle_jp : item.courseTitle;
  const syllabusLink = language === 'ja' && item.syllabusLink_jp ? item.syllabusLink_jp : item.syllabusLink_en;

  return (
    <div className="p-4 rounded-lg bg-gray-50 border border-slate-200 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-slate-800">{item.courseCode}: {courseTitle}</h3>
        <p className="text-sm text-slate-500">{item.university} &bull; {item.semester}</p>
      </div>
      {syllabusLink && (
        <div className="mt-3">
          <a
            href={syllabusLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
          >
            <DocumentTextIcon className="w-4 h-4 mr-1" />
            {t('teaching_syllabus')}
          </a>
        </div>
      )}
    </div>
  );
};

interface TeachingProps {
    id: string;
}

const Teaching: React.FC<TeachingProps> = ({ id }) => {
  const { t } = useLanguage();
  return (
    <Section id={id} title={t('teaching_title')}>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_TEACHING.map((item, index) => (
          <TeachingItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Teaching;
