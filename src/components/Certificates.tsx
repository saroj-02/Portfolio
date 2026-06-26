import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { Be10X_certificate, Build_With_AI, CodeAlpha, Cognifyz, data_science, Deloitte, gen_ai, Internship, machine_learning } from '../assets';

const images = import.meta.glob('../assets/*.{png,jpg,jpeg,webp}', { eager: true });

const certificates = [
  {
    title: 'Al tools and ChatGPT workshop',
    issuer: 'be10X',
    date: 'April 27, 2025',
    image: Be10X_certificate,
    link: 'https://drive.google.com/file/d/1AUVe9bU5gwj2HTA6EDQ_Z8Vl-lyV-zqa/view?usp=sharing',
    skills: ['ChatGPT', 'Gemini', 'NotebookLM', 'Rezi.ai']
  },
  {
    title: 'Ingest Data with DataFlows Gen2',
    issuer: 'Microsoft',
    date: 'Dec 31, 2025',
    image: gen_ai,
    link: 'https://drive.google.com/file/d/1uoz5_Sf3G4nHuEr_B-MzjHxbGOtlD-f7/view?usp=sharing',
    skills: []
  },
  {
    title: 'Build With Ai',
    issuer: 'Lets Upgrade',
    date: 'April 23, 2025',
    image: Build_With_AI,
    link: 'https://drive.google.com/file/d/18Fwr93QomoYrPq9GDswIAncOECOBiKBj/view?usp=sharing',
    skills: []
  },
  {
    title: 'Data Science',
    issuer: 'Infosys',
    date: 'Feb 12, 2026',
    image: data_science,
    link: 'https://drive.google.com/file/d/1tQ_dxOU-jUm0jfvmOtVW2RI2ky7OnT00/view?usp=sharing',
    skills: []
  },
  {
    title: 'Machine Learning',
    issuer: 'GTR Academy',
    date: 'May 11, 2025',
    image: machine_learning,
    link: 'https://drive.google.com/file/d/1XL02LkjSQjzCvH7tzinu_C2YeiwyufhX/view?usp=sharing',
    skills: []
  },
  {
    title: 'Full Stack Internship',
    issuer: 'InternsElite',
    date: 'Sep 11, 2025',
    image: Internship,
    link: 'https://drive.google.com/file/d/1tdxOoBw--VMoD25iyJuUkNjnMAX0F-5g/view?usp=sharing',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js']
  },
  {
    title: 'Full stack Web Development',
    issuer: 'CodeAlpha',
    date: 'June 2026',
    image: CodeAlpha,
    link: 'https://drive.google.com/file/d/1wkFwXEaVPq1HW2Uwbi_VSt85v8p3u9S9/view?usp=sharing',
    skills: ['MongoDB','Express.js','Node.js','React.js']
  },  
  {
    title: 'Web Development',
    issuer: 'Cognifyz IT Solution',
    date: 'May 2026',
    image: Cognifyz,
    link: 'https://drive.google.com/file/d/1uKTLRBjgvFOXgux2pZky6qbjqSVN2Cul/view?usp=sharing',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Data Analytics',
    issuer: 'Deloitte',
    date: 'June 2026',
    image: Deloitte,
    link: 'https://drive.google.com/file/d/1oGsKqOIx01SD_AiDhOlEW1A1z8mp9cJi/view?usp=sharing',
    skills: ['Python','SQL','Excel']
  }
  
];

export function Certificates({ isOverlay = false }: { isOverlay?: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const getDirectLink = (url: string | any) => {
    if (typeof url !== 'string') return url;
    if (url.includes('drive.google.com')) {
      const id = url.match(/[-\w]{25,}/);
      return id ? `https://lh3.googleusercontent.com/d/${id[0]}` : url;
    }
    return url;
  };

  return (
    <section id={isOverlay ? undefined : "certificates"} className="py-24 relative bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6"
          >
            <ShieldCheck size={14} />
            My Achievements
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit"
          >
            Professional <span className="text-gradient">Certifications.</span>
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title + i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="w-full relative h-48 overflow-hidden">
                <img 
                  src={getDirectLink(cert.image)} 
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-4">
                   <div className="flex items-center gap-2 text-white/90 text-[10px] font-bold uppercase tracking-wider">
                      <Award size={12} className="text-primary" />
                      {cert.issuer}
                   </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="mb-4">
                  <h4 className="text-lg font-bold mb-2 font-outfit leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map(skill => (
                      <span key={skill} className="px-2 py-0.5 text-[9px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-medium">
                    <Calendar size={12} />
                    {cert.date}
                  </div>
                  <motion.a
                    href={cert.link}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-1.5 text-primary font-bold text-xs hover:underline"
                  >
                    View
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
