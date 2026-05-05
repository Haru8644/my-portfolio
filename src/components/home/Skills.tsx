"use client";

import React from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import { SKILLS } from "@/data/constants";

export const Skills = () => {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">Technical Stack</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            {lang === "en" ? "Technical Stack" : "Technical Stack"}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category.en}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="interactive-card glass-panel rounded-[2rem] p-6 md:p-7"
            >
              <h3 className="text-xl font-bold tracking-tight text-slate-900">{skill.category[lang]}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-2 rounded-2xl border border-white/90 bg-white/85 px-4 py-3 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.35)]"
                  >
                    {item.icon && React.createElement(item.icon, { className: "h-5 w-5 text-sky-700" })}
                    <span className="text-sm font-semibold text-slate-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
