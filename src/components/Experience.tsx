import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'edu',
    title: 'BCA',
    company: 'Ravenshaw univercity',
    location: 'Cuttack, Odisha',
    period: '2024 - present',
    description: '---'
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'InternsEllite',
    location: 'Work From Home',
    period: 'Jul 2025 - Oct 2025',
    description: 'Leading a team of 5 developers to build a multi-tenant SaaS platform. Optimized API response times by 40% using Redis caching.'
  },
  {
    type: 'edu',
    title: '12th',
    company: 'Narashingha Chaudhary Higher Secondary School',
    location: 'Jajpur, Odisha',
    period: '2022 - 2024',
    description: 'Stream: Science (PCM) 80%'
  },
  {
    type: 'edu',
    title: 'Matriculation',
    company: 'Saraswati sishu vidya mandir',
    location: 'Jajpur ,Odisha',
    period: '2021 - 2022',
    description: 'Percentage: 90%'
  }
];

export function Experience({ isOverlay = false }: { isOverlay?: boolean }) {
  return (
    <section id={isOverlay ? undefined : "experience"} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-outfit">My Professional <span className="text-gradient">Timeline.</span></h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-slate-800 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-primary hidden md:flex items-center justify-center z-10">
                  {exp.type === 'work' ? <Briefcase size={18} className="text-primary" /> : <GraduationCap size={18} className="text-primary" />}
                </div>

                <div className="w-full md:w-1/2">
                  <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-primary/5 transition-all">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <h4 className="text-2xl font-bold mb-1 font-outfit">{exp.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-4 flex items-center justify-between">
                      <span>{exp.company}</span>
                      <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg">{exp.location}</span>
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
