import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);


  // Track the last section whose top has crossed the viewport activation point.
  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;
      const activationPoint = window.innerHeight * 0.35;
      let currentSection = sections[0];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= activationPoint) {
          currentSection = id;
        } else if (element) {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    const scheduleUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleNavigate = (targetId: string) => {
    if (targetId === activeSection) return;

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
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
