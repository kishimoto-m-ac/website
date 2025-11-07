import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 sm:py-20 border-b border-slate-200">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
        {title}
      </h2>
      <div className="text-slate-600 space-y-6">{children}</div>
    </section>
  );
};

export default Section;
