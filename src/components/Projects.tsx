import { ProjectCard } from './ProjectCard';
import { projectsData } from '../assets';

export function Projects({ isOverlay = false }: { isOverlay?: boolean }) {
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
              />
            ))}
        </div>

        {/* App Development Section */}
        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-bold font-outfit text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-4">
            App Development Projects
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData
            .filter((project) => project.type === 'app')
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
              />
            ))}
        </div>

      </div>
    </section>
  );
}
