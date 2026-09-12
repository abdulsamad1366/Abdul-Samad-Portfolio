'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export default function CapabilitiesSection() {
  return (
    <section id="overview" className="py-24 px-4 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#FFFF23] font-bold mb-3"
          >
            What You Get
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Engineered for Impact & Scalability
          </motion.h2>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.capabilities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col justify-between hover:border-[#FFFF23]/50 transition-all duration-300 group"
            >
              <div>
                <span className="inline-block text-xs font-mono font-bold text-[#FFFF23] bg-[#FFFF23]/10 px-3 py-1 rounded-lg mb-6">
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFFF23] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8C8C8C] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-full h-[1px] bg-white/10 mt-8 group-hover:bg-[#FFFF23]/50 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
