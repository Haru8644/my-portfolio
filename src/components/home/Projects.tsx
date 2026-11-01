"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Layers3 } from "lucide-react";

import { PROJECTS } from "@/data/constants";
import type { Project } from "@/data/types";
import { useLanguage } from "@/context/LanguageContext";
import { useProjectModal } from "@/components/ui/ProjectModalProvider";
import { FEATURED_WORK } from "@/data/featuredWork";
import type { Language } from "@/data/types";
import styles from "./ReferenceSections.module.css";

function FeaturedProjectCard({
  project,
  lang,
  onOpen,
}: {
  project: Project & { id: NonNullable<Project["id"]> };
  lang: Language;
  onOpen: () => void;
}) {
  const card = FEATURED_WORK[project.id];
  const room = project.id === "meetingroombooker";
  const image = project.images?.[0];

  return (
    <article className={styles.featuredCard} data-case={project.id}>
      {room && image ? (
        <div className={styles.roomCover}>
          <Image
            src={image.src}
            alt={image.alt[lang]}
            fill
            sizes="(max-width: 700px) 100vw, 550px"
          />
        </div>
      ) : (
        <div className={styles.cover} data-case={project.id}>
          {card.illustration && (
            <Image
              src={card.illustration}
              alt={card.illustrationAlt?.[lang] ?? ""}
              className={styles.coverIllustration}
              width={340}
              height={300}
            />
          )}
          <span className={styles.coverBadge}>{card.stage[lang]}</span>
          <div className={styles.coverCopy}>
            <p className={styles.coverLabel}>
              {lang === "ja" ? "取り組みの要約" : "Project summary"}
            </p>
            <p className={styles.coverHeading}>{card.heading?.[lang]}</p>
          </div>
          <div className={styles.coverKeywords}>
            {card.keywords.map((keyword) => (
              <span key={keyword.en}>{keyword[lang]}</span>
            ))}
          </div>
        </div>
      )}
      <div className={styles.cardBody}>
        <h3>{card.title[lang]}</h3>
        <p className={styles.cardSummary}>{card.summary[lang]}</p>
        <div className={styles.cardFooter}>
          {room ? (
            <div className={styles.roomKeywords}>
              <span className={styles.roomStage}>{card.stage[lang]}</span>
              {card.keywords.map((keyword) => (
                <span key={keyword.en}>{keyword[lang]}</span>
              ))}
            </div>
          ) : (
            <span className={styles.footerRule} aria-hidden="true" />
          )}
          <button type="button" className={styles.cardButton} onClick={onOpen}>
            {card.button[lang]}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export const Projects = () => {
  const { lang } = useLanguage();
  const openProject = useProjectModal();

  return (
    <section id="projects" className={`px-4 py-14 md:px-6 md:py-20 ${styles.projectsSection}`}>
      <div className={styles.workContainer}>
        <div className={styles.workHeading}>
          <div>
            <p>Featured Work</p>
            <h2>Featured Work</h2>
          </div>
        </div>

        <div className={styles.workGrid}>
          {PROJECTS.map((project, index) => {
            if (project.id)
              return (
                <FeaturedProjectCard
                  key={project.id}
                  project={{ ...project, id: project.id }}
                  lang={lang}
                  onOpen={() => openProject(project)}
                />
              );
            const previewImage = project.images?.[0];

            return (
              <motion.article
                key={project.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="interactive-card glow-ring glass-panel group cursor-pointer overflow-hidden rounded-[2rem]"
                onClick={() => openProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${lang === "en" ? "Open project details for" : "プロジェクト詳細を開く"} ${project.title[lang]}`}
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
                        <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-br from-sky-600 to-indigo-700 p-6 text-white md:p-8">
                          <p className="text-sm font-semibold text-white/80">
                            {project.stage?.[lang]}
                          </p>
                          <p className="mt-4 text-2xl font-bold leading-relaxed">
                            {project.title[lang]}
                          </p>
                        </div>
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
                        {project.role && (
                          <p className="mt-3 text-sm leading-7 text-slate-500">
                            {lang === "en" ? "Role: " : "担当："}
                            {project.role[lang]}
                          </p>
                        )}
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-500 transition group-hover:border-sky-200 group-hover:text-sky-700">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stage && (
                        <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700">
                          {project.stage[lang]}
                        </span>
                      )}
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
                      <span className="text-sm font-semibold text-sky-700 transition group-hover:text-indigo-700">
                        {lang === "en" ? "Open details" : "詳細を見る"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
