'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { PROFILE } from '../../data/constants';
import { Accounts } from './Accounts';

export const Hero = () => {
  const { lang } = useLanguage();

  return (
    <section className="hero min-h-[85vh] bg-base-100 relative overflow-hidden flex items-center">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-azure/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge badge-outline badge-lg mb-6 text-gray-500">
              {PROFILE.university[lang]}
            </div>
            
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            {lang === 'ja' ? (
              PROFILE.catchphrase.ja.split('、').map((text, i) => (
                <span key={i} className="block">
                  {text}{i === 0 && '、'}
                </span>
              ))
            ) : (
              PROFILE.catchphrase.en
            )}
          </h1>
            
            <p className="py-4 text-lg text-gray-600 leading-relaxed max-w-2xl whitespace-pre-line border-l-4 border-azure pl-6 bg-base-200/30 rounded-r-lg">
              {PROFILE.description[lang]}
            </p>
            
            <div className="mt-10">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Accounts & Links</p>
              <Accounts />
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#projects" className="btn btn-primary bg-azure border-azure hover:bg-blue-700 text-white px-8 rounded-full shadow-lg">
                View Projects
              </a>
              <a href={PROFILE.socials.email} className="btn btn-outline border-azure text-azure hover:bg-azure hover:text-white rounded-full px-8">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};