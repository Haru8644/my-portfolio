'use client';

import React from 'react'; 
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { SKILLS } from '@/data/constants';

export const Skills = () => {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-base-200/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Stack</h2>
          <div className="w-20 h-1 bg-azure mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card bg-base-100 shadow-xl border border-base-200/60"
            >
              <div className="card-body">
                <h3 className="card-title text-xl mb-4 text-azure">
                  {skill.category[lang]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 badge badge-lg badge-ghost bg-base-200/50 p-4 h-auto py-2">
                      {item.icon && React.createElement(item.icon, { className: "w-5 h-5" })}
                      <span className="font-medium text-gray-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};