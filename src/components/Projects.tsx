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
            description="Engineered a comprehensive real-time chat application using Next.js and Convex to enable instant messaging and low-latency peer-to-peer video/audio calls. Implemented advanced features including dynamic group chats, real-time read receipts, message reactions, and secure user authentication via Clerk."
            topics={['Next.js', 'Convex', 'Tailwind', 'Clerk']}
            html_url="#"
            homepage="#"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000"
          // figma_url="YOUR_FIGMA_LINK_HERE" 
          />

          <ProjectCard
            index={1}
            name="Portfolio"
            description="A sleek and responsive personal website designed to showcase my projects, skills, and professional experience. Developed using Vite, React, and Framer Motion, it delivers a lightning-fast user experience with engaging UI components and smooth transitions."
            topics={['React', 'vite', 'Framer Motion','Tailwind']}
            html_url="https://github.com/saroj-02/Portfolio"
            homepage="https://portfolio-8-4qo4.onrender.com/"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />

          <ProjectCard
            index={2}
            name="Task-Manager"
            description="A premium full-stack task management application built with React, Node.js, and Express, featuring a sleek glassmorphism UI powered by custom vanilla CSS. It streamlines productivity with seamless inline editing, dynamic status tracking, and efficient file-based JSON persistence."
            topics={['React', 'Express', 'Node.js', 'Vanila CSS']}
            html_url="https://github.com/saroj-02/Task-Manager"
            homepage="https://task-manager-45ei.onrender.com/"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />

        </div>
      </div>
    </section>
  );
}
