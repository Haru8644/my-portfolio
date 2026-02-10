'use client';

import { motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { lang } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-base-100 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose} 
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:bg-base-200"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className={`badge ${project.status === 'In Development' ? 'badge-warning' : 'badge-success'} badge-outline mb-4`}>
            {project.status}
          </div>
          
          <h2 className="text-3xl font-bold mb-6">{project.title[lang]}</h2>
          
          <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
            {project.longDescription[lang]}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="badge badge-lg bg-gray-100 border-none text-gray-600">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 border-t pt-6">
            {project.links.github && (
              <a 
                href={project.links.github} target="_blank" rel="noopener"
                className="btn btn-outline gap-2 hover:bg-gray-100"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            )}
            {project.links.demo && (
              <a 
                href={project.links.demo} target="_blank" rel="noopener"
                className="btn btn-primary gap-2 text-white bg-azure border-azure hover:bg-blue-700"
              >
                <ExternalLink className="w-5 h-5" /> Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};