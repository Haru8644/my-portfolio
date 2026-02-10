'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import { NavBar } from '@/components/common/NavBar';
import { Footer } from '@/components/common/Footer';
import { Hero } from '@/components/home/Hero';
import { Skills } from '@/components/home/Skills';
import { Projects } from '@/components/home/Projects';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-base-100 text-base-content font-sans selection:bg-azure selection:text-white">
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </LanguageProvider>
  );
}