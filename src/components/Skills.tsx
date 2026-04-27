import { motion } from 'framer-motion';
import { Server, Smartphone, Cpu, Layout } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="text-blue-500" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'bg-blue-500/10'
  },
  {
    category: 'Backend',
    icon: <Server className="text-emerald-500" />,
    items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    color: 'bg-emerald-500/10'
  },
  {
    category: 'Mobile & AI',
    icon: <Smartphone className="text-purple-500" />,
    items: ['React Native', 'OpenAI API', 'TensorFlow', 'PyTorch'],
    color: 'bg-purple-500/10'
  },
  {
    category: 'Tools',
    icon: <Cpu className="text-orange-500" />,
    items: ['Git', 'Clerk', 'AWS', 'Vercel', 'Antigravity'],
    color: 'bg-orange-500/10'
  }
];

export function Skills({ isOverlay = false }: { isOverlay?: boolean }) {
  return (
    <section id={isOverlay ? undefined : "skills"} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-outfit">My Technical <span className="text-gradient">Arsenal.</span></h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 font-outfit">{skill.category}</h4>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
