import { ProjectCard } from './ProjectCard';

export function Projects({ isOverlay = false }: { isOverlay?: boolean }) {

  return (
    <section id={isOverlay ? undefined : "projects"} className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-outfit mb-8">Featured Projects.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          <ProjectCard
            index={0}
            name="Sarreya Chat"
            description="A generative art platform powered by custom stable diffusion models and React."
            topics={['React.js', 'Node.js', 'Tailwind', 'Clerk']}
            html_url="#"
            homepage="#"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000"
          // figma_url="YOUR_FIGMA_LINK_HERE" 
          />

          <ProjectCard
            index={1}
            name="Portfolio"
            description="DeFi dashboard with real-time analytics and multi-chain wallet support."
            topics={['React', 'MongoDB', 'Node.js', 'Tailwind']}
            html_url="https://github.com/saroj-02/Portfolio"
            homepage="https://portfolio-one-opal-gx1iz8nex9.vercel.app/"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />

          <ProjectCard
            index={2}
            name="Task-Manager"
            description="DeFi dashboard with real-time analytics and multi-chain wallet support."
            topics={['React', 'MongoDB', 'Node.js', 'Tailwind']}
            html_url="https://github.com/saroj-02/Task-Manager"
            homepage="https://task-manager-2k26.vercel.app/"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />

        </div>
      </div>
    </section>
  );
}
