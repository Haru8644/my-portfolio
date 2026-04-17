"use client";

import { ExternalLink } from "lucide-react";
import { ACCOUNTS } from "@/data/constants";

export const Accounts = () => {
  return (
    <div className="flex flex-wrap gap-3 md:gap-4">
      {ACCOUNTS.map((account) => (
        <a
          key={account.platform}
          href={account.url}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-card glow-ring group flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-[0_12px_32px_-22px_rgba(15,23,42,0.28)] backdrop-blur-sm"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white transition group-hover:scale-105">
            <account.icon className={`h-5 w-5 transition-colors ${account.color ?? ""}`} />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              {account.platform}
            </p>
            <p className="truncate text-sm font-semibold text-slate-800">{account.username}</p>
          </div>
          <ExternalLink className="ml-1 h-4 w-4 text-slate-300 transition group-hover:text-sky-600" />
        </a>
      ))}
    </div>
  );
};
