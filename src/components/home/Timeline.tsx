'use client';

import { useLanguage } from '../../context/LanguageContext';
import { EDUCATION, EXPERIENCE } from '../../data/constants';
import { TimelineItem } from '../../data/types';

const TimelineSection = ({ title, items }: { title: string, items: TimelineItem[] }) => {
  const { lang } = useLanguage();
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
        <span className="w-2 h-8 bg-azure rounded-full"></span>
        {title}
      </h3>
      <div className="space-y-8 border-l-2 border-base-300 ml-3 pl-8 relative">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-base-100 bg-azure shadow-sm"></div>
            
            <span className="text-sm font-mono text-azure font-bold mb-1 block">
              {item.period}
            </span>
            <h4 className="text-lg font-bold">{item.organization[lang]}</h4>
            <p className="text-base font-medium text-gray-700">{item.title[lang]}</p>
            {item.description && (
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {item.description[lang]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Timeline = () => {
  const { lang } = useLanguage();
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <TimelineSection title={lang === 'en' ? 'Education' : '学歴'} items={EDUCATION} />
          <TimelineSection title={lang === 'en' ? 'Experience' : '経歴'} items={EXPERIENCE} />
        </div>
      </div>
    </section>
  );
};