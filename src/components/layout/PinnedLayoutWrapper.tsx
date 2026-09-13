'use client';

import { useState, useEffect } from 'react';
import SidebarNav from '@/components/navigation/SidebarNav';

export default function PinnedLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal pinned sidebar when user scrolls past 70% of Hero height
      const threshold = window.innerHeight * 0.7;
      if (window.scrollY > threshold) {
        setIsPinned(true);
      } else {
        setIsPinned(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Pinned Left Vertical Navigation (Desktop) */}
      <SidebarNav isPinned={isPinned} />

      {/* Main Content Area */}
      <div className="w-full lg:pl-[280px] xl:pl-[310px] transition-all duration-500">
        {children}
      </div>
    </div>
  );
}
