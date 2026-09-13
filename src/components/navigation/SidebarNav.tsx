'use client';

import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME', icon: '🏠' },
  { id: 'about', label: 'ABOUT ME', icon: '👤' },
  { id: 'projects', label: 'PROJECTS', icon: '💼' },
  { id: 'capabilities', label: 'WHAT YOU GET', icon: '⚡' },
  { id: 'services', label: 'SERVICES', icon: '🛠️' },
  { id: 'testimonial', label: 'CLIENTS', icon: '⭐' },
  { id: 'faq', label: 'FAQ', icon: '❓' },
];

export default function SidebarNav({ isPinned }: { isPinned: boolean }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <aside
      className={`fixed left-0 top-0 w-[280px] xl:w-[310px] h-screen bg-[#E3DFD3] text-black border-r border-black/10 flex-col justify-between p-6 z-40 hidden lg:flex transition-all duration-500 origin-left ${
        isPinned ? 'opacity-100 translate-x-0 pointer-events-auto shadow-2xl' : 'opacity-0 -translate-x-full pointer-events-none'
      }`}
    >
      {/* Top Header: Mini Brand Badge & Social Icons */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2 bg-black text-[#FFFF23] px-3.5 py-1.5 rounded-xl font-black text-sm tracking-tighter uppercase shadow-md hover:scale-105 transition-transform"
          >
            <span>SAMAD</span>
            <span className="text-[10px] bg-[#FFFF23] text-black px-1 rounded font-bold">®</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-2 text-black/70">
            <a
              href={PORTFOLIO_DATA.profile.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg hover:bg-black/10 hover:text-black transition-colors"
              title="X / Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg hover:bg-black/10 hover:text-black transition-colors"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-[11px] font-semibold text-black/70 leading-relaxed border-b border-black/10 pb-4">
          Working closely with your team to deliver Webflow builds that merge creativity & technical excellence.
        </p>

        {/* Compact Stat Badge */}
        <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-2xl p-3.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-6 text-black fill-current flex-shrink-0" viewBox="0 0 200 120">
              <path d="M 20 20 L 65 100 L 98 45 L 131 100 L 180 20 L 142 20 L 118 70 L 98 20 L 78 70 L 54 20 Z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-sm font-black text-black leading-none">80+ Projects</span>
              <span className="text-[10px] font-bold text-black/60 mt-0.5">7+ Yrs Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center: Vertical Navigation Menu */}
      <nav className="flex flex-col gap-1.5 my-auto py-4">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'bg-[#FFFF23] text-black shadow-md scale-105'
                  : 'text-black/70 hover:text-black hover:bg-black/5'
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Bottom Actions: Direct Email Box & Book a Call Button */}
      <div className="flex flex-col gap-3 pt-4 border-t border-black/10">
        <button
          onClick={copyEmail}
          className="w-full bg-white/70 hover:bg-white border border-black/10 text-black text-[11px] font-bold py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors shadow-sm"
        >
          <span className="truncate">{PORTFOLIO_DATA.profile.email}</span>
          <span className="text-[10px] bg-black/10 px-1.5 py-0.5 rounded font-mono font-bold text-black/80">
            {copiedEmail ? 'COPIED!' : 'COPY'}
          </span>
        </button>

        <a
          href={PORTFOLIO_DATA.profile.socials.calCom}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-[#FFFF23] text-black font-extrabold text-xs py-3 rounded-xl text-center hover:bg-black hover:text-[#FFFF23] transition-all shadow-md uppercase tracking-wider"
        >
          Book a Call
        </a>
      </div>
    </aside>
  );
}
