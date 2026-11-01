"use client";

import type { ReactNode } from "react";

import { LanguageProvider } from "@/context/LanguageContext";
import { ProjectModalProvider } from "@/components/ui/ProjectModalProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ProjectModalProvider>{children}</ProjectModalProvider>
    </LanguageProvider>
  );
}
