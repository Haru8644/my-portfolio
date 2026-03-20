'use client';

import { useLanguage } from '../../context/LanguageContext';
import { EDUCATION, EXPERIENCE } from '../../data/constants';
import { TimelineItem } from '../../data/types';

const TimelineSection = ({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) => {
  const { lang } = useLanguage();

  return (
    <div className="mb-12">
      <h3 className="mb-6 flex items-center gap-3 text-xl font-bold">
        <span className="h-8 w-2 rounded-full bg-azure" />
        {title}
      </h3>

      <div className="relative ml-3 space-y-10 border-l-2 border-base-300 pl-8">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-base-100 bg-azure shadow-sm" />

            <span className="mb-1 block font-mono text-sm font-bold text-azure">
              {item.period}
            </span>

            <h4 className="text-lg font-bold text-base-content">
              {item.organization[lang]}
            </h4>

            <p className="text-base font-medium text-base-content/80">
              {item.title[lang]}
            </p>

            {item.description && (
              <p className="mt-3 text-sm leading-7 text-base-content/70">
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
    <section className="bg-base-100 py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <TimelineSection
            title={lang === 'en' ? 'Education' : '学歴'}
            items={EDUCATION}
          />
          <TimelineSection
            title={lang === 'en' ? 'Experience' : '経歴'}
            items={EXPERIENCE}
          />
        </div>
      </div>
    </section>
  );
};