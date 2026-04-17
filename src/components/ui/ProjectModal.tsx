"use client";

import { motion } from "framer-motion";
import { X, Github, ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/types";
import { useLanguage } from "@/context/LanguageContext";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 28 }}
        className="glass-panel-strong relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/80 text-slate-600 transition hover:text-slate-900"
          aria-label={lang === "en" ? "Close" : "閉じる"}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-5 md:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 pr-14 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                {project.title[lang]}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                {project.longDescription[lang]}
              </p>
            </div>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <ImageCarousel images={project.images} intervalMs={3800} aspect="video" />
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-3">
            {project.highlights.map((highlight) => (
              <div
                key={`${project.title.en}-${highlight.label}`}
                className="rounded-[1.5rem] border border-white/80 bg-white/80 p-5 shadow-[0_12px_32px_-24px_rgba(15,23,42,0.28)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {highlight.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{highlight.text[lang]}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200/80 pt-6">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_-20px_rgba(37,99,235,0.72)] transition hover:translate-y-[-1px]"
              >
                <ArrowUpRight className="h-4 w-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
