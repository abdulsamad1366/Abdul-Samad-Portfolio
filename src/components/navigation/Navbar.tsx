'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Linkedin, Github, Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'What you get', href: '#overview' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#testimonial' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-40 px-4 py-4 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
            
            {/* Brand Logo & Badges */}
            <div className="flex items-center gap-3">
              <a
                href="#hero"
                className="flex items-center gap-1 font-black text-xl tracking-tighter bg-[#FFFF23] text-black px-3 py-1.5 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                <span>SAMAD</span>
                <span className="text-xs align-super">®</span>
              </a>

              <div className="hidden lg:flex items-center gap-2 text-xs font-semibold">
                <div className="bg-[#121212]/90 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#FFFF23] animate-pulse"></span>
                  <span>{PORTFOLIO_DATA.profile.stats.projectsCompleted} Projects</span>
                </div>
              </div>
            </div>

            {/* Center Floating Glassmorphic Nav */}
            <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-[#121212]/90 border border-white/15 backdrop-blur-xl shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-[#8C8C8C] hover:text-black hover:bg-[#FFFF23] rounded-xl transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.profile.socials.calCom}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-[#FFFF23] text-black font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-white transition-all shadow-md group"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 bg-[#121212] border border-white/15 rounded-xl text-white hover:text-[#FFFF23]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Dropdown */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 bg-[#121212] border border-white/15 rounded-2xl p-4 flex flex-col gap-3 pointer-events-auto backdrop-blur-2xl shadow-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-[#FFFF23] py-1 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </motion.header>
      )}
    </AnimatePresence>
  );
}
