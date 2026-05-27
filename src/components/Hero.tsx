import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronRight } from 'lucide-react';

const words = ['Full Stack Developer', 'Software Developer', 'Android App Developer', 'Data Analyst', 'Problem Solver'];

export function Hero({ isOverlay = false }: { isOverlay?: boolean }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      const shouldDelete = isDeleting;

      if (!shouldDelete) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setIsDeleting(true);
          setTypingSpeed(100);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setIndex((index + 1) % words.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, index, isDeleting, typingSpeed]);

  return (
    <section id={isOverlay ? undefined : "hero"} className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 dark:opacity-20 animate-pulse" />
      <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] opacity-50 dark:opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Currently available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold font-outfit mb-6 tracking-tight"
        >
          I design & build <span className="text-gradient">digital experiences.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 mb-10 h-10 font-medium font-inter"
        >
          I'm a <span className="text-slate-900 dark:text-white border-r-2 border-primary pr-1">{displayText}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center gap-2 group cursor-pointer inline-block">
            Check My Work
            <ChevronRight className="group-hover:translate-x-1 transition-transform inline-block" />
          </a>
          <a
            href="https://drive.google.com/file/d/11vLZixC4ezAYB9tq-y8MvyDXJkKh2gPZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            Download CV
            <Download size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="mt-20 flex items-center justify-center gap-8 text-slate-400"
        >
          <a href="https://github.com/saroj-02" target="_blank" className="hover:text-primary transition-colors cursor-pointer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/saroj-padhi-492979270" target="_blank" className="hover:text-primary transition-colors cursor-pointer">
            <Linkedin size={24} />
          </a>
          <a href="mailto:sarojpadhi28@gmail.com" className="hover:text-primary transition-colors cursor-pointer">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Hero Image / Visual Element (Optional Placeholder) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-indigo-500 rounded-full animate-float delay-700 opacity-20" />
      </div>
    </section>
  );
}
