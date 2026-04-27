import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [transitionData, setTransitionData] = useState<{ from: string, to: string, direction: number } | null>(null);
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
    if (targetId === activeSection || transitionData) return;

    const fromIndex = sections.indexOf(activeSection);
    const toIndex = sections.indexOf(targetId);
    if (toIndex === -1) return;
    
    // Lock the observer during this transition
    isAutoScrolling.current = true;
    const direction = toIndex > fromIndex ? 1 : -1;
    setTransitionData({ from: activeSection, to: targetId, direction });
  };

  const finalizeNavigation = (id: string) => {
    const targetEl = document.getElementById(id);
    if (targetEl) {
      // INSTANT scroll while obscured by overlay
      targetEl.scrollIntoView({ behavior: 'instant' });
      setActiveSection(id);
    }
    
    // Hold the overlay momentarily to hide the scroll jump, then exit.
    setTimeout(() => {
      setTransitionData(null);
      // Release the IO lock after a brief delay
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 500);
    }, 150);
  };

  const renderSection = (id: string, isOverlay = false) => {
    switch (id) {
      case 'hero': return <Hero isOverlay={isOverlay} />;
      case 'about': return <About isOverlay={isOverlay} />;
      case 'skills': return <Skills isOverlay={isOverlay} />;
      case 'projects': return <Projects isOverlay={isOverlay} />;
      case 'experience': return <Experience isOverlay={isOverlay} />;
      case 'contact': return <Contact isOverlay={isOverlay} />;
      default: return null;
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
      <main className={`relative z-10 ${transitionData ? 'invisible' : 'visible'}`}>
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><Contact /></div>
      </main>

      {/* Full-Screen Transition Overlay */}
      <AnimatePresence>
        {transitionData && (
          <motion.div
            key="transition-stage"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[140] bg-white dark:bg-slate-950 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              key={transitionData.to}
              custom={transitionData.direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 350, damping: 35 },
                opacity: { duration: 0.4 }
              }}
              onAnimationComplete={() => finalizeNavigation(transitionData.to)}
              className="w-full h-full"
            >
              <div className="w-full h-full flex items-center justify-center overflow-auto pointer-events-none">
                {renderSection(transitionData.to, true)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
