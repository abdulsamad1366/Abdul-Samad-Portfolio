'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 bg-[#E3DFD3] text-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#121212]">
            <Image
              src="/samad-raw-3.jpg"
              alt="Samad"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
              <p className="text-xs uppercase tracking-widest text-[#FFFF23] font-bold">Creative Engineer</p>
              <p className="text-lg font-bold text-white">Nenad / Samad Level Precision</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Philosophy */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#FFFF23] font-bold"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black tracking-tight"
          >
            Building Digital Products That Feel Alive.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-[#8C8C8C] leading-relaxed"
          >
            With over 7 years of engineering experience across Next.js, Framer Motion, GSAP, and custom Webflow architecture, I craft interfaces that capture attention and drive business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10"
          >
            <div>
              <p className="text-3xl font-black text-white">80+</p>
              <p className="text-xs text-[#8C8C8C] font-semibold uppercase tracking-wider mt-1">Completed Builds</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">7+ Yrs</p>
              <p className="text-xs text-[#8C8C8C] font-semibold uppercase tracking-wider mt-1">Industry Experience</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#FFFF23]">100%</p>
              <p className="text-xs text-[#8C8C8C] font-semibold uppercase tracking-wider mt-1">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
