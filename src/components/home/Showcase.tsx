"use client";

import { motion } from "framer-motion";

import { PROJECTS } from "@/data/constants";
import { useLanguage } from "@/context/LanguageContext";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export const Showcase = () => {
  const { lang } = useLanguage();

  const showcaseImages = PROJECTS.flatMap((p) => p.images ?? []);

  return (
    <section aria-label="Showcase" className="py-16 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {lang === "en" ? "Product Screens" : "プロダクト画面"}
          </h2>
          <p className="mt-2 text-gray-500">
            {lang === "en"
              ? "Auto-sliding gallery. Hover to pause, use arrows to inspect."
              : "自動スライドのギャラリー。ホバーで停止、矢印で確認できます。"}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <ImageCarousel images={showcaseImages} intervalMs={4200} aspect="wide" fit="contain" />
        </motion.div>
      </div>
    </section>
  );
};