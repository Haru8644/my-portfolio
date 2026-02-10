'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/constants';

export const Hero = () => {
  const { lang } = useLanguage();

  return (
    <section className="hero min-h-[90vh] bg-base-100 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-azure/5 rounded-full blur-3xl -z-10" />
    
      <div className="hero-content text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="badge badge-outline badge-lg mb-6 text-gray-500">
            {PROFILE.university[lang]}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            {PROFILE.catchphrase[lang]}
          </h1>
          
          <p className="py-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
            {PROFILE.description[lang]}
          </p>
          
          <div className="flex justify-center mb-10">
            <div className="stats shadow-sm border border-atcoder/20 bg-white/50 backdrop-blur">
              <div className="stat place-items-center py-4 px-8">
                <div className="stat-title font-semibold text-gray-500">AtCoder Rating</div>
                <div className="stat-value text-atcoder flex items-center gap-2 text-4xl">
                  <Trophy className="w-8 h-8" />
                  {PROFILE.atcoder.rating}
                </div>
                <div className="stat-desc text-atcoder font-bold uppercase tracking-wider mt-1">
                  {PROFILE.atcoder.rank[lang]}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#projects" className="btn btn-primary bg-azure border-azure hover:bg-blue-700 text-white px-8 rounded-full">
              View Projects
            </a>
            <a href={PROFILE.socials.email} className="btn btn-outline border-azure text-azure hover:bg-azure hover:text-white rounded-full px-8">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};