"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Sparkles } from "lucide-react";

import { PROJECTS } from "@/data/constants";
import { useLanguage } from "@/context/LanguageContext";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export const Showcase = () => {
  const { lang } = useLanguage();

  const showcaseImages = PROJECTS.flatMap((p) => p.images ?? []);

  return (
    <section id="showcase" className="px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell overflow-hidden rounded-[2rem] p-[1px]">
          <div className="glass-panel-strong relative overflow-hidden rounded-[2rem] px-5 py-7 md:px-8 md:py-9 lg:px-10">
            <div className="absolute -left-14 top-0 h-40 w-40 rounded-full bg-sky-300/18 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-indigo-300/14 blur-3xl" />

            <div className="relative z-10 mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                  <Sparkles className="h-4 w-4" />
                  {lang === "en" ? "Product Showcase" : "プロダクトショーケース"}
                </div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                  {lang === "en" ? "Product Screens" : "プロダクト画面"}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                  {lang === "en"
                    ? "Framed like a polished product demo instead of a flat image dump. Hover to pause, use the arrows, and open individual shots in the lightbox."
                    : "平置きの画像一覧ではなく、プロダクトデモとして見せる構成に調整。ホバーで停止、矢印で移動、ライトボックスで拡大できます。"}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600">
                  {lang === "en" ? "Auto slide" : "自動スライド"}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600">
                  <MousePointerClick className="h-4 w-4" />
                  {lang === "en" ? "Hover to pause" : "ホバーで停止"}
                </span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <ImageCarousel images={showcaseImages} intervalMs={4200} aspect="wide" fit="contain" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
