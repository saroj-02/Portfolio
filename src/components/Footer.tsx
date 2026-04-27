import { ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl font-bold font-outfit tracking-tighter mb-4 uppercase">
              SAROJ PADHI<span className="text-blue-500">.</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs text-center md:text-left">
              Crafting premium digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors hover:-translate-y-1"
          >
            <ChevronUp size={18} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-slate-100 dark:border-slate-900">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Saroj Padhi. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 dark:text-slate-600 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 dark:text-slate-600 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
