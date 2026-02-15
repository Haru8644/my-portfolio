'use client';

import { Github, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const NavBar = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200 px-4 md:px-8">
      <div className="flex-1">
        <span className="btn btn-ghost normal-case text-xl font-bold tracking-tighter">
          Haruki Ino<span className="text-azure">.Dev</span>
        </span>
      </div>
      <div className="flex-none gap-4">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-sm md:btn-md gap-2 font-mono hover:text-azure transition-colors">
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'EN' : 'JA'}
            <ChevronDown className="w-3 h-3 opacity-50" />
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24 border border-base-200">
            <li><button onClick={() => lang !== 'ja' && toggleLang()} className={lang === 'ja' ? 'active font-bold' : ''}>🇯🇵 JA</button></li>
            <li><button onClick={() => lang !== 'en' && toggleLang()} className={lang === 'en' ? 'active font-bold' : ''}>🇺🇸 EN</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};