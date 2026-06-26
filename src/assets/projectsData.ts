import {
  Be10X_certificate,
  Build_With_AI,
  data_science,
  gen_ai,
  Internship,
  machine_learning,
  Audit_Maker,
  Boarding_Schools,
  Drive_Search,
  E_commerce_web,
  HCP_Module,
  Lead_Distribution_System,
  Linkedin_Search,
  Project_Management,
  Social_Media,
  Task_Manager,
  portfolio,
  surreya_chat
} from './index';

export interface Project {
  index: number;
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage: string;
  image: string;
  status: 'ongoing' | 'completed';
  type: 'web';
  figma_url?: string;
}

export const projectsData: Project[] = [
  {
    index: 0,
    name: "Sarreya Chat",
    description: "Engineered a comprehensive real-time chat application using Next.js and Convex to enable instant messaging and low-latency peer-to-peer video/audio calls. Implemented advanced features including dynamic group chats, real-time read receipts, message reactions, and secure user authentication via Clerk.",
    topics: ['Next.js', 'Convex', 'Tailwind', 'Clerk'],
    html_url: "https://github.com/saroj-02/Live-Chat",
    homepage: "#",
    image: surreya_chat,
    status: "ongoing",
    type: "web"
  },
  {
    index: 1,
    name: "Portfolio",
    description: "A sleek and responsive personal website designed to showcase my projects, skills, and professional experience. Developed using Vite, React, and Framer Motion, it delivers a lightning-fast user experience with engaging UI components and smooth transitions.",
    topics: ['React', 'vite', 'Framer Motion', 'Tailwind'],
    html_url: "https://github.com/saroj-02/Portfolio",
    homepage: "https://portfolio-8-4qo4.onrender.com/",
    image: portfolio,
    status: "ongoing",
    type: "web"
  },
  {
    index: 2,
    name: "Task-Manager",
    description: "A premium full-stack task management application built with React, Node.js, and Express, featuring a sleek glassmorphism UI powered by custom vanilla CSS. It streamlines productivity with seamless inline editing, dynamic status tracking, and efficient file-based JSON persistence.",
    topics: ['React', 'Express', 'Node.js', 'Vanila CSS'],
    html_url: "https://github.com/saroj-02/Aura-Task-Suite",
    homepage: "https://aura-task-suite.onrender.com/",
    image: Task_Manager,
    status: "completed",
    type: "web"
  },
  {
    index: 3,
    name: "HCP Module",
    description: "Designed and developed a comprehensive HCP Module that simplifies healthcare professional onboarding, data management, activity tracking, and analytics through an intuitive web-based platform.",
    topics: ['React', 'Express', 'Node.js', 'Vanila CSS'],
    html_url: "https://github.com/saroj-02/HCP-Module",
    homepage: "https://hcp-module.onrender.com/",
    image: HCP_Module,
    status: "completed",
    type: "web"
  },
  {
    index: 4,
    name: "Drive Search Engine",
    description: "Built a scalable Drive Search Engine featuring keyword-based search, metadata filtering, secure access control, and optimized indexing for efficient file retrieval.",
    topics: ['React', 'Express', 'Node.js', 'Vanila CSS'],
    html_url: "https://github.com/saroj-02/Drive-Search-Web",
    homepage: "https://drive-search-web.onrender.com",
    image: Drive_Search,
    status: "completed",
    type: "web"
  },
  {
    index: 5,
    name: "Linkedin Search Engine",
    description: "Developed a powerful Linkedin Search Engine with advanced filtering, AI-driven profiling, and scalable architecture for intelligent prospecting.",
    topics: ['React', 'Express', 'Node.js', 'Vanila CSS'],
    html_url: "https://github.com/saroj-02/Linkedin-Search",
    homepage: "https://linkedin-search-ll1r.onrender.com",
    image: Linkedin_Search,
    status: "completed",
    type: "web"
  },
  {
    index: 6,
    name: "Aura Social Media",
    description: "An advanced social media platform featuring real-time messaging, profile management, post sharing, and a modern, interactive user interface.",
    topics: ['React', 'Express', 'Node.js', 'Vanila CSS'],
    html_url: "https://github.com/saroj-02/Social-Media",
    homepage: "https://social-media-6tlu.onrender.com/",
    image: Social_Media,
    status: "completed",
    type: "web"
  },
  {
    index: 7,
    name: "Project Manager",
    description: "A comprehensive project management platform enabling users to create projects, assign tasks, track progress, and collaborate effectively with team members.",
    topics: ['React', 'Express', 'Node.js', 'Vanila CSS'],
    html_url: "https://github.com/saroj-02/Progect-Manager",
    homepage: "https://project-manager-ct9s.onrender.com/",
    image: Project_Management,
    status: "completed",
    type: "web"
  },
  {
    index: 8,
    name: "E-Commerce Web",
    description: "An intuitive e-commerce platform with product browsing, cart functionality, secure checkout, and order management capabilities.",
    topics: ['React', 'Express', 'Node.js', 'Vanila CSS'],
    html_url: "https://github.com/saroj-02/E-Commerce-Web",
    homepage: "https://e-commerce-web-kwi3.onrender.com",
    image: E_commerce_web,
    status: "completed",
    type: "web"
  },
  {
    index: 9,
    name: "Boarding Schools",
    description: "Built a responsive boarding school management and information portal featuring school listings, advanced search, admission inquiry forms, content management, and user-friendly navigation.",
    topics: ['React', 'Express', 'Node.js', 'Vanila CSS'],
    html_url: "https://github.com/saroj-02/Aura-Boarding-Schools",
    homepage: "https://aura-boarding-schools.onrender.com",
    image: Boarding_Schools,
    status: "completed",
    type: "web"
  },
  {
    index: 10,
    name: "Audit Maker",
    description: "A comprehensive Audit Maker platform enabling users to create projects, assign tasks, track progress, and collaborate effectively with team members.",
    topics: ['Python', 'Django'],
    html_url: "https://github.com/saroj-02/Credex-App",
    homepage: "https://credex-app-san4.onrender.com",
    image: Audit_Maker,
    status: "completed",
    type: "web"
  },
  {
    index: 11,
    name: "Lead Distribution System",
    description: "A premium cross-platform mobile application built with React Native and Firebase. It offers personalized workout routines, real-time activity tracking, and a sleek user interface designed for maximum engagement and performance.",
    topics: ['Python', 'Django'],
    html_url: "https://github.com/saroj-02/Lead-Distribution-System",
    homepage: "https://lead-distribution-system-nxdj.onrender.com",
    image: Lead_Distribution_System,
    status: "completed",
    type: "web"
  }
];
