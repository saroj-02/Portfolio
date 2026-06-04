import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, Certificates, CustomCursor } from './components';


const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Ref to track if we're currently in a triggered navigate to avoid IO interference
  const isAutoScrolling = useRef(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);


  // Intersection Observer to track active section during scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If we're auto-scrolling (navigating), DON'T update activeSection from IO
        if (isAutoScrolling.current) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // Reasonable threshold for content sections
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleNavigate = (targetId: string) => {
    if (targetId === activeSection) return;

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      isAutoScrolling.current = true;
      targetEl.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      
      // Release the IO lock after smooth scrolling completes
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-primary selection:text-white">
      <CustomCursor />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[150] origin-left"
        style={{ scaleX }}
      />

      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Standard Vertical Content */}
      <main className="relative z-10">
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="certificates"><Certificates /></div>
        <div id="contact"><Contact /></div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
