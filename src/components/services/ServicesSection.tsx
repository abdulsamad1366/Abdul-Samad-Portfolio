'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export default function ServicesSection() {
  const iconMap = {
    Code2: <Code2 className="w-6 h-6 text-[#FFFF23]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#FFFF23]" />,
    Zap: <Zap className="w-6 h-6 text-[#FFFF23]" />,
  };

  const techStack = [
    'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 
    'GSAP ScrollTrigger', 'Lenis Smooth Scroll', 'Swiper.js', 
    'Three.js / WebGL', 'GraphQL / REST', 'Vercel Edge'
  ];

  return (
    <section id="services" className="py-28 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-[#FFFF23] font-bold mb-3"
            >
              Services & Capabilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-black tracking-tight"
            >
              How We Can Collaborate
            </motion.h2>
          </div>

          <p className="text-sm md:text-base text-[#8C8C8C] max-w-md">
            From technical discovery to motion prototype and final production launch, every stage is optimized for speed and user experience.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PORTFOLIO_DATA.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon as keyof typeof iconMap] || <Code2 className="w-6 h-6 text-[#FFFF23]" />}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFFF23] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#8C8C8C] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#FFFF23]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Production Tech Stack</h4>
            <p className="text-xs text-[#8C8C8C]">Modern frameworks & animation engines powering my builds.</p>
          </div>

          <div className="flex flex-wrap gap-2 max-w-2xl">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90 hover:border-[#FFFF23] hover:text-[#FFFF23] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
