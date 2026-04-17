"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { NavBar } from "@/components/common/NavBar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/home/Hero";
import { Showcase } from "@/components/home/Showcase";
import { Skills } from "@/components/home/Skills";
import { Projects } from "@/components/home/Projects";
import { Timeline } from "@/components/home/Timeline";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen overflow-x-clip bg-transparent text-base-content font-sans selection:bg-azure selection:text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="floating-orb absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="floating-orb-slow absolute right-[-6rem] top-[24rem] h-[28rem] w-[28rem] rounded-full bg-indigo-300/18 blur-3xl" />
          <div className="floating-orb absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-cyan-200/18 blur-3xl" />
        </div>

        <div className="relative z-10">
          <NavBar />
          <Hero />
          <Showcase />
          <Timeline />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
}
