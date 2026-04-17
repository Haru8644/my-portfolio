"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";

import { PROJECTS } from "@/data/constants";
import type { Project } from "@/data/types";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectModal } from "@/components/ui/ProjectModal";

export const Projects = () => {
  const { lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Featured Work
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            {lang === "en" ? "Select a card to open details" : "カードを選ぶと詳細を開けます"}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 xl:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const previewImage = project.images?.[0];

            return (
              <motion.article
                key={project.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="interactive-card glow-ring glass-panel group cursor-pointer overflow-hidden rounded-[2rem]"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-5 md:p-6">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-slate-950 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.5)]">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-3 text-xs font-medium text-white/60">
                        {previewImage?.alt[lang] ?? project.title[lang]}
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden">
                      {previewImage ? (
                        <>
                          <Image
                            src={previewImage.src}
                            alt={previewImage.alt[lang]}
                            fill
                            sizes="(max-width: 1280px) 100vw, 620px"
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-indigo-700" />
                      )}
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900 transition group-hover:text-sky-700">
                          {project.title[lang]}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                          {project.description[lang]}
                        </p>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-500 transition group-hover:border-sky-200 group-hover:text-sky-700">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-200/80 pt-4">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <Layers3 className="h-4 w-4" />
                        {project.highlights[0]?.text[lang]}
                      </div>
                      <button
                        type="button"
                        className="text-sm font-semibold text-sky-700 transition group-hover:text-indigo-700"
                      >
                        {lang === "en" ? "Open details" : "詳細を見る"}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
