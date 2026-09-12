'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-[#FFFF23] font-bold mb-3"
            >
              Selected Work (2024 - 2026)
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            >
              Crafted with Precision
            </motion.h2>
          </div>

          <p className="text-sm md:text-base text-[#8C8C8C] max-w-md">
            A curated collection of web applications, micro-interaction systems, and modern digital experiences.
          </p>
        </div>

        {/* Matrix Work Track Grid */}
        <div className="work-track grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="work-card group relative bg-[#0D0D0D] border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-white/30"
            >
              {/* Card Dark Dimming Overlay */}
              <div className="work-image-overlay absolute inset-0 bg-black pointer-events-none opacity-0 transition-opacity duration-500 z-10" />

              {/* Top Meta Bar */}
              <div className="p-6 md:p-8 flex items-center justify-between z-20">
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/80">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-[#8C8C8C]">{project.year}</span>
              </div>

              {/* Project Cover Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Details & Arrow Button */}
              <div className="p-6 md:p-8 flex items-end justify-between gap-4 z-20 bg-gradient-to-t from-black via-black/90 to-transparent">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#FFFF23] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8C8C8C] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-[#8C8C8C] bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Button Icon */}
                <div className="work-card-arrow p-4 rounded-2xl bg-[#2F2F2F] text-[#8C8C8C] transition-all duration-300 group-hover:bg-[#FFFF23] group-hover:text-black flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
