import { motion } from 'framer-motion';
import { Server, Smartphone, Cpu, Layout } from 'lucide-react';

const skills = [
  {
    category: 'Web Dev',
    icon: <Layout className="text-sky-500" />,
    subSections: [
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        title: 'Backend',
        items: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'Python', 'REST APIs', 'Mongoose']
      }
    ],
    color: 'bg-gradient-to-br from-sky-500/10 via-indigo-100/60 to-emerald-500/10'
  },
  {
    category: 'App Dev',
    icon: <Smartphone className="text-purple-500" />,
    items: ['Kotlin', 'Android Studio', 'Firebase','Jetpack Compose','JIRA','Coil'],
    color: 'bg-purple-500/10'
  },
  {
    category: 'Tools',
    icon: <Cpu className="text-orange-500" />,
    items: ['Git', 'Render', 'AWS', 'Docker', 'VS Code','Antigravity', 'Figma', 'Postman','Blender'],
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
            <h3 className="text-4xl md:text-5xl font-bold font-outfit">AI/ML | Web Development <span className="text-gradient">Skills.</span></h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm">
            Clear separation of frontend and backend skills so recruiters can quickly understand your strengths.
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
              {skill.subSections ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skill.subSections.map((section) => (
                    <div key={section.title}>
                      <h5 className="text-sm font-semibold uppercase tracking-wider mb-3 text-primary">{section.title}</h5>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
