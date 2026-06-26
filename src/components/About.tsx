import { motion } from 'framer-motion';
import profilePhoto from '../s_photo.webp';

export function About({ isOverlay = false }: { isOverlay?: boolean }) {
  return (
    <section id={isOverlay ? undefined : "about"} className={`py-24 relative ${isOverlay ? 'bg-white dark:bg-slate-950 min-h-screen flex items-center' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={isOverlay ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={isOverlay ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl bg-slate-100 dark:bg-slate-800">
              <img src={profilePhoto} alt="Profile" className="w-full aspect-square object-cover" fetchPriority="high" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-3xl -z-0 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-slate-200 dark:border-slate-800 rounded-3xl -z-0" />
          </motion.div>

          <motion.div
            initial={isOverlay ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={isOverlay ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Mastering the art of <span className="text-gradient">Software | Web | AI/ML development.</span></h3>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>I'm a passionate developer with a deep love for creating clean, efficient, and user-centric digital solutions. With a background in computer applications and years of experience in the field, I've honed my skills in both frontend and backend technologies.</p>
              <p>My approach is simple: I believe in building software that not only works perfectly but also looks beautiful and feels intuitive to the user.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">1+</h4>
                <p className="text-sm font-medium">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                <p className="text-sm font-medium">Projects Completed</p>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
