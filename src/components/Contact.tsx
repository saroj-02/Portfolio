import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact({ isOverlay = false }: { isOverlay?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send feedback');
      }

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={isOverlay ? undefined : "contact"} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Connect</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-outfit mb-8">Get In <span className="text-gradient">Touch.</span></h3>
            <p className="text-slate-600 dark:text-slate-400 mb-12">
              Have a project in mind? Let's discuss how we can work together to build something amazing.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-lg font-semibold break-all">sarojpadhi28@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-lg font-semibold">+91 8249651716</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-semibold">Cuttack, Odisha, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://github.com/saroj-02" target="_blank" className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/saroj-padhi-492979270" target="_blank" className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:sarojpadhi28@gmail.com" className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {isSuccess ? (
                <div className="py-20 text-center flex flex-col items-center">
                  <CheckCircle size={60} className="text-green-500 mb-6" />
                  <h4 className="text-2xl font-bold font-outfit mb-2">Message Sent!</h4>
                  <p className="text-slate-600 dark:text-slate-400">Thanks for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Your Name</label>
                      <input
                        {...register('name')}
                        className={`w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} focus:border-primary focus:outline-none transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-red-500 ml-1 font-medium">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Email Address</label>
                      <input
                        {...register('email')}
                        className={`w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} focus:border-primary focus:outline-none transition-colors`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 ml-1 font-medium">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Subject</label>
                    <input
                      {...register('subject')}
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border ${errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} focus:border-primary focus:outline-none transition-colors`}
                      placeholder="Project Opportunity"
                    />
                    {errors.subject && <p className="text-xs text-red-500 ml-1 font-medium">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Message</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} focus:border-primary focus:outline-none transition-colors resize-none`}
                      placeholder="Tell me more about your project..."
                    />
                    {errors.message && <p className="text-xs text-red-500 ml-1 font-medium">{errors.message.message}</p>}
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
