import { motion } from 'framer-motion';
import { X, Construction, Sparkles } from 'lucide-react';

interface DevModalProps {
  projectName: string;
  onClose: () => void;
}

export function DevModal({ projectName, onClose }: DevModalProps) {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[200] flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ 
          scale: 1, 
          y: 0, 
          opacity: 1,
          transition: { type: "spring", stiffness: 300, damping: 25 }
        }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        onClick={handleContentClick}
        className="group relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2rem] max-w-md w-full shadow-2xl p-8 overflow-hidden font-inter text-center"
      >
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors duration-500 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all hover:rotate-90 duration-300 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Animated Icon Section */}
        <div className="flex justify-center mb-6 mt-4">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -inset-2 bg-gradient-to-r from-primary to-indigo-500 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity"
            />
            <div className="relative w-20 h-20 bg-gradient-to-tr from-primary to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
              <Construction className="text-white w-10 h-10 animate-bounce" style={{ animationDuration: '3s' }} />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute top-2 right-2 text-yellow-300"
              >
                <Sparkles size={16} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
          Under Development
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold font-outfit text-slate-800 dark:text-slate-100 mb-3 capitalize leading-tight">
          {projectName}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">
          This project is currently in the active coding phase. I am crafting a high-quality experience and setting up the live preview. Check back soon to see it live!
        </p>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
          className="w-full py-4 px-6 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/95 hover:to-indigo-600/95 text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all font-outfit text-base uppercase tracking-wider cursor-pointer"
        >
          Got It
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
