'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Mail, Terminal, Server, Code2, 
  Database, BookOpen, Award, Briefcase, Trophy // ← Trophyを追加、Linkedinを削除
} from 'lucide-react';

import { PROFILE, SKILLS, PROJECTS } from './constants';
import { SkillCategory } from './types';

// --- Helper Components ---

const NavBar = () => (
  <nav className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200">
    <div className="flex-1">
      <a 
        className="btn btn-ghost normal-case text-xl font-bold tracking-tighter" 
        aria-label="Navigate to top"
      >
        {PROFILE.name}<span className="text-azure">.Dev</span>
      </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 font-medium hidden sm:flex">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="flex gap-2">
        <a 
          href={PROFILE.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-ghost btn-circle"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="hero min-h-[90vh] bg-base-100 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-azure/5 rounded-full blur-3xl -z-10" />

    <div className="hero-content text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="badge badge-outline badge-lg mb-6 text-gray-500 gap-2">
          <BookOpen className="w-4 h-4" />
          {PROFILE.university}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          {PROFILE.catchphrase.split('|')[0]}<br />
          <span className="text-gradient-azure">
             {PROFILE.catchphrase.split('|')[1]}
          </span>
        </h1>
        
        <p className="py-6 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {PROFILE.description}
        </p>
        
        {/* AtCoder Statistics Badge */}
        <div className="flex justify-center mb-10">
          <div className="stats shadow-sm border border-atcoder/20 bg-white/50 backdrop-blur">
            <div className="stat place-items-center py-4 px-8">
              <div className="stat-title font-semibold text-gray-500">AtCoder Rating</div>
              <div className="stat-value text-atcoder flex items-center gap-2 text-4xl">
                <Award className="w-8 h-8" />
                {PROFILE.atcoder.rating}
              </div>
              <div className="stat-desc text-atcoder font-bold uppercase tracking-wider mt-1">
                {PROFILE.atcoder.rank}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#projects" className="btn btn-primary bg-azure border-azure hover:bg-blue-700 hover:border-blue-700 text-white px-8 rounded-full shadow-lg transition-all">
            View Projects
          </a>
          <a href={PROFILE.socials.email} className="btn btn-outline border-azure text-azure hover:bg-azure hover:text-white hover:border-azure rounded-full px-8">
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const getSkillIcon = (category: string) => {
  if (category.includes("Languages")) return <Code2 className="w-6 h-6" />;
  if (category.includes("Cloud")) return <Server className="w-6 h-6" />;
  return <Terminal className="w-6 h-6" />;
};

const Skills = () => (
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
            className="card bg-base-100 shadow-xl border border-base-200/60 hover:border-azure/30 transition-colors"
          >
            <div className="card-body">
              <div className="flex items-center gap-3 mb-6 text-azure">
                <div className="p-3 bg-azure/10 rounded-lg">
                  {getSkillIcon(skill.category)}
                </div>
                <h3 className="card-title text-xl">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="badge badge-lg badge-ghost bg-base-200/80 p-4 font-medium text-gray-700 border-none">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 bg-base-100">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Engineering solutions for real-world business problems.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card bg-base-100 shadow-lg border border-base-200 card-hover-effect flex flex-col h-full overflow-hidden group"
          >
            <div className="card-body p-8 flex-1 relative">
              <div className="flex justify-between items-start mb-6 z-10">
                <div className="p-3 bg-azure/10 rounded-xl text-azure">
                  {index === 0 ? <Database className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
                </div>
                <div className={`badge ${project.status === 'In Development' ? 'badge-warning' : 'badge-success'} badge-outline font-semibold`}>
                  {project.status}
                </div>
              </div>
              
              <h3 className="card-title text-2xl mb-3 z-10 group-hover:text-azure transition-colors">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-8 z-10">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="space-y-6 z-10">
                {project.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-azure rounded-full" />
                    <p className="text-xs font-bold text-azure uppercase tracking-wider mb-1 opacity-80">
                      {highlight.label}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer footer-center p-10 bg-base-200 text-base-content border-t border-base-300">
    <div className="grid grid-flow-col gap-6">
      <a 
        href={PROFILE.socials.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-ghost btn-circle hover:bg-azure/20 hover:text-azure transition-all"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" />
      </a>
      {/* AtCoder Link replaced LinkedIn */}
      <a 
        href={PROFILE.socials.atcoder} 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-ghost btn-circle hover:bg-azure/20 hover:text-azure transition-all"
        aria-label="AtCoder"
      >
        <Trophy className="w-6 h-6" />
      </a>
    </div>
    <div>
      <p className="font-bold text-lg">
        {PROFILE.name}
      </p>
      <p className="text-gray-500">{PROFILE.university} {PROFILE.department}</p>
      <p className="text-xs mt-4 text-gray-400">
        Built with Next.js, Tailwind CSS, and Azure Static Web Apps.
        <br />
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content font-sans selection:bg-azure selection:text-white">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}