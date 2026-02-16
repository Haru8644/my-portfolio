'use client';

import { Github, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PROFILE, ACCOUNTS } from '@/data/constants'; 

export const Footer = () => {
  const { lang } = useLanguage();

  const githubUrl = ACCOUNTS.find(a => a.platform === 'GitHub')?.url;
  const atcoderUrl = ACCOUNTS.find(a => a.platform === 'AtCoder')?.url;
  
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content border-t border-base-300">
      <div className="grid grid-flow-col gap-6">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle hover:text-azure transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href={atcoderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle hover:text-atcoder transition-colors">
          <Trophy className="w-6 h-6" />
        </a>
      </div>
      <div>
        <p className="font-bold text-lg">{PROFILE.name[lang]}</p>
        <p className="text-gray-500">{PROFILE.university[lang]}</p>
        <p className="text-xs mt-4 text-gray-400">
          Built with Next.js, Tailwind CSS, and Azure Static Web Apps.
        </p>
      </div>
    </footer>
  );
};