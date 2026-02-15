'use client';

import { ACCOUNTS } from '@/data/constants';
import { ExternalLink } from 'lucide-react';

export const Accounts = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
      {ACCOUNTS.map((account) => (
        <a 
          key={account.platform}
          href={account.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-base-100 border border-base-300 rounded-xl hover:shadow-md transition-all group"
        >
          <account.icon className={`w-6 h-6 transition-colors ${account.color}`} />
          <div className="text-left">
            <p className="text-xs text-gray-500 font-semibold">{account.platform}</p>
            <p className="font-bold text-sm">{account.username}</p>
          </div>
          <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-azure ml-2" />
        </a>
      ))}
    </div>
  );
};