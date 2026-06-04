import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Figma } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  image?: string;
  html_url?: string;
  homepage?: string;
  figma_url?: string;
  topics: string[];
  index: number;
  stargazers_count?: number;
  status?: 'completed' | 'in-development' | 'ongoing';
}

export const ProjectCard = ({ 
  name, 
  description, 
  image, 
  html_url, 
  homepage, 
  figma_url,
  topics, 
  index,
  stargazers_count,
  status
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/10 transition-all font-inter"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000'}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
          {html_url && (
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-950 hover:bg-primary hover:text-white transition-colors"
              title="GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-950 hover:bg-primary hover:text-white transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {figma_url && (
            <a
              href={figma_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-950 hover:bg-[#F24E1E] hover:text-white transition-colors"
              title="Figma Design"
            >
              <Figma size={20} />
            </a>
          )}
        </div>
        
        {status && (
          <div className="absolute top-4 left-4 z-20">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg border ${
              status === 'completed' 
                ? 'bg-emerald-500/90 text-white border-emerald-400' 
                : status === 'in-development'
                ? 'bg-amber-500/90 text-white border-amber-400'
                : 'bg-blue-500/90 text-white border-blue-400'
            }`}>
              {status === 'in-development' ? 'Under Development' : status}
            </span>
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-2xl font-bold font-outfit group-hover:text-primary transition-colors capitalize">{name}</h4>
          {stargazers_count !== undefined && stargazers_count > 0 && (
            <div className="flex items-center gap-1 text-slate-400 font-bold">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              {stargazers_count}
            </div>
          )}
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {topics.slice(0, 4).map((t) => (
            <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 uppercase tracking-tighter">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
