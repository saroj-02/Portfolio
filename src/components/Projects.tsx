import { ProjectCard } from './ProjectCard';

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


          <ProjectCard
            index={0}
            name="Sarreya Chat"
            description="Engineered a comprehensive real-time chat application using Next.js and Convex to enable instant messaging and low-latency peer-to-peer video/audio calls. Implemented advanced features including dynamic group chats, real-time read receipts, message reactions, and secure user authentication via Clerk."
            topics={['Next.js', 'Convex', 'Tailwind', 'Clerk']}
            html_url="#"
            homepage="#"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000"
            status="ongoing"
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
            status="ongoing"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />

          <ProjectCard
            index={2}
            name="Task-Manager"
            description="A premium full-stack task management application built with React, Node.js, and Express, featuring a sleek glassmorphism UI powered by custom vanilla CSS. It streamlines productivity with seamless inline editing, dynamic status tracking, and efficient file-based JSON persistence."
            topics={['React', 'Express', 'Node.js', 'Vanila CSS']}
            html_url="https://github.com/saroj-02/Aura-Task-Suite"
            homepage="https://aura-task-suite.onrender.com/"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
            status="completed"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />
          <ProjectCard
            index={3}
            name="HCP Module"
            description="Designed and developed a comprehensive HCP Module that simplifies healthcare professional onboarding, data management, activity tracking, and analytics through an intuitive web-based platform."
            topics={['React', 'Express', 'Node.js', 'Vanila CSS']}
            html_url="https://github.com/saroj-02/HCP-Module"
            homepage="https://hcp-module.onrender.com/"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
            status="completed"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />
          <ProjectCard
            index={4}
            name="Drive Search Engine"
            description="Built a scalable Drive Search Engine featuring keyword-based search, metadata filtering, secure access control, and optimized indexing for efficient file retrieval."
            topics={['React', 'Express', 'Node.js', 'Vanila CSS']}
            html_url="https://github.com/saroj-02/Drive-Search-Web"
            homepage="https://drive-search-web.onrender.com"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
            status="completed"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />
          <ProjectCard
            index={5}
            name="Linkedin Search Engine"
            description="Developed a powerful Linkedin Search Engine with advanced filtering, AI-driven profiling, and scalable architecture for intelligent prospecting."
            topics={['React', 'Express', 'Node.js', 'Vanila CSS']}
            html_url="https://github.com/saroj-02/Linkedin-Search"
            homepage="https://linkedin-search-ll1r.onrender.com"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
            status="completed"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />
          <ProjectCard
            index={6}
            name="Aura Social Media"
            description="An advanced social media platform featuring real-time messaging, profile management, post sharing, and a modern, interactive user interface."
            topics={['React', 'Express', 'Node.js', 'Vanila CSS']}
            html_url="https://github.com/saroj-02/Social-Media"
            homepage="#"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
            status="completed"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />
          <ProjectCard
            index={7}
            name="Project Manager"
            description="A comprehensive project management platform enabling users to create projects, assign tasks, track progress, and collaborate effectively with team members."
            topics={['React', 'Express', 'Node.js', 'Vanila CSS']}
            html_url="https://github.com/saroj-02/Progect-Manager"
            homepage="#"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
            status="completed"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />
          <ProjectCard
            index={8}
            name="E-Commerce Web"
            description="An intuitive e-commerce platform with product browsing, cart functionality, secure checkout, and order management capabilities."
            topics={['React', 'Express', 'Node.js', 'Vanila CSS']}
            html_url="https://github.com/saroj-02/E-Commerce-Web"
            homepage="#"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
            status="completed"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />
          <ProjectCard
            index={9}
            name="Boarding Schools"
            description="Built a responsive boarding school management and information portal featuring school listings, advanced search, admission inquiry forms, content management, and user-friendly navigation."
            topics={['React', 'Express', 'Node.js', 'Vanila CSS']}
            html_url="https://github.com/saroj-02/Aura-Boarding-Schools"
            homepage="#"
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
            status="completed"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />
        </div>

        {/* App Development Section */}
        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-bold font-outfit text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-4">
            App Development Projects
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            index={10}
            name="Fitness Tracker App"
            description="A premium cross-platform mobile application built with React Native and Firebase. It offers personalized workout routines, real-time activity tracking, and a sleek user interface designed for maximum engagement and performance."
            topics={['Kotlin', 'Jetpack Compose', 'Firebase', 'Android Studio']}
            html_url="#"
            homepage="#"
            image="https://images.unsplash.com/photo-1526502613317-0624d77ce606?q=80&w=1000"
            status="ongoing"
          // figma_url="YOUR_FIGMA_LINK_HERE"
          />
        </div>

      </div>
    </section>
  );
}
