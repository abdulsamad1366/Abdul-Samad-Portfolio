'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Twitter, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export default function Footer() {
  return (
    <footer className="pt-28 pb-12 px-4 bg-[#050505] border-t border-white/10 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FFFF23]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[400px]">
        
        {/* Main CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-[#FFFF23] font-bold mb-4"
            >
              Have a project in mind?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-8"
            >
              Let’s build something <br />
              <span className="text-[#FFFF23]">exceptional</span> together.
            </motion.h2>

            <div className="flex flex-wrap gap-4">
              <a
                href={PORTFOLIO_DATA.profile.socials.calCom}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#FFFF23] text-black font-bold text-sm px-8 py-4 rounded-2xl hover:bg-white transition-all duration-300 shadow-xl shadow-[#FFFF23]/20 group"
              >
                <span>Book an Intro Call</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
            <div className="bg-[#121212] border border-white/10 p-6 rounded-3xl w-full max-w-sm">
              <p className="text-xs text-[#8C8C8C] font-semibold uppercase tracking-wider mb-2">Direct Contact</p>
              <p className="text-sm font-bold text-white mb-4">hello@samadportfolio.com</p>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFFF23] animate-pulse" />
                <span className="text-xs text-white/80 font-medium">Taking projects for Q2 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8C8C]">
          <div className="flex items-center gap-2">
            <span className="font-black text-white text-base">SAMAD</span>
            <span className="text-[#FFFF23] font-bold">®</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFFF23] transition-colors"
            >
              Twitter / X
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFFF23] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFFF23] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
