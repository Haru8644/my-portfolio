'use client';

import { Github, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/constants';

export const NavBar = () => {
  const { lang, toggleLang } = useLanguage();
  
  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200 px-4 md:px-8">
      <div className="flex-1">
        <span className="btn btn-ghost normal-case text-xl font-bold tracking-tighter">
          {PROFILE.name[lang]}<span className="text-azure">.Dev</span>
        </span>
      </div>
      <div className="flex-none gap-2">
        <button 
          onClick={toggleLang}
          className="btn btn-ghost btn-sm md:btn-md gap-2 font-mono hover:text-azure transition-colors"
          aria-label="Switch Language"
        >
          <Globe className="w-4 h-4" />
          {lang === 'en' ? 'JP' : 'EN'}
        </button>

        <a 
          href={PROFILE.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-ghost btn-circle hover:text-azure transition-colors"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
};