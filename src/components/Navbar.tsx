import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Navbar({ theme, toggleTheme, activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled
        ? 'py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="relative group flex flex-col justify-center w-40 h-16 no-underline"
        >
          <div className="flex flex-col items-start gap-0">
            {/* NAME LAYER (Saroj) */}
            <div className="flex items-center gap-0 transform-gpu translate-y-2">
              {"Saroj".split("").map((letter, i) => (
                <motion.div
                  key={`n-float-${i}`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15
                  }}
                  className="transform-gpu"
                >
                  <motion.span
                    style={{ willChange: "transform" }}
                    animate={{ rotateY: [0, 0, 1080, 1080, 0] }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      times: [0, 0.4, 0.6, 0.9, 1],
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                    className="text-3xl font-black tracking-tighter bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent inline-block transform-gpu"
                  >
                    {letter}
                  </motion.span>
                </motion.div>
              ))}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
                className="transform-gpu"
              >
                <motion.span
                  style={{ willChange: "transform" }}
                  animate={{
                    rotateY: [0, 0, 1080, 1080, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotateY: {
                      duration: 12,
                      repeat: Infinity,
                      times: [0, 0.4, 0.6, 0.9, 1],
                      delay: 0.6,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="text-primary text-4xl leading-none ml-0.5 transform-gpu"
                >
                  .
                </motion.span>
              </motion.div>
            </div>

            {/* SUBTITLE LAYER (Portfolio) */}
            <div className="flex items-center gap-0 mt-[-8px] transform-gpu">
              {"Portfolio".split("").map((letter, i) => (
                <motion.div
                  key={`p-float-${i}`}
                  animate={{ y: [0, 3, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                  className="transform-gpu"
                >
                  <motion.span
                    style={{ willChange: "transform" }}
                    animate={{ rotateY: [0, 0, 1080, 1080, 0] }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      times: [0, 0.4, 0.6, 0.9, 1],
                      delay: i * 0.08,
                      ease: "easeInOut"
                    }}
                    className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-extrabold inline-block transform-gpu"
                  >
                    {letter}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mouse follow glow effect (subtle) */}
          <motion.div
            className="absolute inset-0 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.href.replace('#', ''));
                  }}
                  className={`relative text-sm font-bold transition-colors group/link ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all group-hover/link:w-full ${
                    activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0'
                  }`} />
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.8, rotate: 90 }}
              whileHover={{ scale: 1.1 }}
              className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 shadow-sm relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ y: 20, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
            <a
              href="https://github.com/saroj-02"
              target="_blank"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-400"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-400"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    onNavigate(link.href.replace('#', ''));
                  }}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                <a href="https://github.com/saroj-02" target="_blank" className="text-slate-600 dark:text-slate-400"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/saroj-padhi-492979270" target="_blank" className="text-slate-600 dark:text-slate-400"><Linkedin size={20} /></a>
                <a href="mailto:sarojpadhi28@gmail.com" className="text-slate-600 dark:text-slate-400"><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
