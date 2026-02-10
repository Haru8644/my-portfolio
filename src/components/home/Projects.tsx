'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/data/constants';
import { Project } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectModal } from '@/components/ui/ProjectModal';

export const Projects = () => {
  const { lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-500">
            {lang === 'en' ? 'Select a card to view details' : 'カードを選択して詳細を表示'}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="card bg-base-100 shadow-lg border border-base-200 card-hover-effect cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-body p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className={`badge ${project.status === 'In Development' ? 'badge-warning' : 'badge-success'} badge-outline`}>
                    {project.status}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-azure transition-colors" />
                </div>
                
                <h3 className="card-title text-2xl mb-3 group-hover:text-azure transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {project.description[lang]}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-gray-400 px-2 py-1">+{project.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
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