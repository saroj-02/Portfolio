import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Brain } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../assets';
import { DevModal } from './DevModal';

export function Projects({ isOverlay = false }: { isOverlay?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id={isOverlay ? undefined : "projects"} className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-outfit mb-8">My Projects.</h3>
        </div>

        {/* Web Development Section */}
        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-bold font-outfit text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-4">
            Web Development Projects
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projectsData
            .filter((project) => project.type === 'web')
            .map((project) => (
              <ProjectCard
                key={project.name}
                index={project.index}
                name={project.name}
                description={project.description}
                topics={project.topics}
                html_url={project.html_url}
                homepage={project.homepage}
                image={project.image}
                status={project.status}
                figma_url={project.figma_url}
                onShowUnderDevelopment={(name) => setSelectedProject(name)}
              />
            ))}
        </div>

        {/* AI/ML Projects Section */}
        <div className="mt-20">
          <div className="mb-8">
            <h4 className="text-2xl md:text-3xl font-bold font-outfit text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-4">
              AI/ML Projects
            </h4>
          </div>
          
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 md:p-12 text-center group hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 shadow-sm">
            {/* Glowing background shapes */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-500" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
            
            <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-100/60 to-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Brain className="text-emerald-500 w-8 h-8 animate-pulse" />
              </div>
              <h5 className="text-xl font-bold font-outfit mb-3 text-slate-900 dark:text-white">
                Intelligent Systems & Models
              </h5>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Exciting new projects featuring generative AI, deep learning models, and intelligent agentic workflows are currently in development. Stay tuned!
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-xs uppercase tracking-wider">
                Coming Soon
              </div>
            </div>
          </div>
        </div>

      </div>
      <AnimatePresence>
        {selectedProject && (
          <DevModal
            projectName={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
