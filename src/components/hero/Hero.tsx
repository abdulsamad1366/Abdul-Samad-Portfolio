'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import WarpText from '@/components/ui/WarpText';

const LETTERS = ['S', 'A', 'M', 'A', 'D'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const badgeRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const navRowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const leftCardsRef = useRef<HTMLDivElement>(null);
  const rightCardsRef = useRef<HTMLDivElement>(null);

  const [counterText, setCounterText] = useState(0);

  useGSAP(
    () => {
      // Create master GSAP timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial GSAP setup
      gsap.set(titleWrapperRef.current, { y: '32vh' });
      gsap.set(lettersRef.current, { x: 250, opacity: 0, autoAlpha: 0, scale: 0.85 });
      gsap.set(badgeRef.current, { opacity: 0, y: 15, scale: 0.9, autoAlpha: 0 });
      gsap.set(portraitRef.current, { yPercent: 100, opacity: 0, autoAlpha: 0 });
      gsap.set([navRowRef.current, headlineRef.current, leftCardsRef.current, rightCardsRef.current], {
        opacity: 0,
        autoAlpha: 0,
        y: 30,
      });

      // 1. Preloader Character Reveal (Right to Left Stagger into center)
      tl.to(lettersRef.current, {
        x: 0,
        opacity: 1,
        autoAlpha: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
      })
        // 2. Fade in Badge Counter
        .to(badgeRef.current, { opacity: 1, autoAlpha: 1, y: 0, scale: 1, duration: 0.4 }, '-=0.4')
        // 3. Increment Counter 0 -> 100%
        .to(
          { val: 0 },
          {
            val: 100,
            duration: 1.2,
            ease: 'power1.inOut',
            onUpdate: function () {
              setCounterText(Math.floor(this.targets()[0].val));
            },
          }
        )
        // 4. Fade out Badge
        .to(badgeRef.current, { opacity: 0, autoAlpha: 0, y: -15, scale: 0.8, duration: 0.35, ease: 'power2.in' }, '+=0.1')
        // 5. UNIFIED GSAP MOTION: Title glides UP from center (32vh -> 0) & Portrait rises from bottom
        .to(
          titleWrapperRef.current,
          {
            y: 0,
            duration: 1.2,
            ease: 'power4.inOut',
          },
          '<-=0.1'
        )
        .to(
          portraitRef.current,
          {
            yPercent: 0,
            opacity: 1,
            autoAlpha: 1,
            duration: 1.2,
            ease: 'power3.out',
          },
          '<+0.1'
        )
        // 6. Staggered Hero Content Entrance
        .to(
          navRowRef.current,
          { opacity: 1, autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out' },
          '-=0.5'
        )
        .to(
          headlineRef.current,
          { opacity: 1, autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        )
        .to(
          [leftCardsRef.current, rightCardsRef.current],
          { opacity: 1, autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' },
          '-=0.6'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen h-[100dvh] bg-[#E3DFD3] text-black overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 1. SINGLE CONTINUOUS GSAP GIANT SAMAD TITLE — Moves from Preloader Center to Hero Top seamlessly */}
      <div
        ref={titleWrapperRef}
        className="relative w-full pt-1 sm:pt-2 flex flex-col items-center justify-start pointer-events-none z-10"
      >
        <div className="flex items-center justify-center text-[22vw] sm:text-[23vw] md:text-[23.5vw] lg:text-[24vw] font-black tracking-tighter leading-none text-[#FFFF23] uppercase font-smooch drop-shadow-sm select-none transform scale-x-105 sm:scale-x-108 md:scale-x-110 lg:scale-x-112 origin-center">
          {LETTERS.map((letter, index) => (
            <span
              key={index}
              ref={(el) => {
                lettersRef.current[index] = el;
              }}
              style={{ opacity: 0, visibility: 'hidden' }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Floating Percentage Progress Counter Badge */}
        <div
          ref={badgeRef}
          style={{ opacity: 0, visibility: 'hidden' }}
          className="absolute top-[54vh] flex items-center gap-3 bg-black/90 text-white px-5 py-2 rounded-full border border-white/20 shadow-2xl backdrop-blur-md font-bold text-xs sm:text-sm tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFFF23] animate-pulse"></span>
          <span className="text-white/80">LOADING</span>
          <span className="text-[#FFFF23] font-mono font-extrabold text-xs bg-white/10 px-2 py-0.5 rounded">
            {counterText}%
          </span>
        </div>
      </div>

      {/* 2. Navigation Items Row — Positioned directly BELOW / AFTER the giant SAMAD text */}
      <div className="absolute top-[44vh] sm:top-[47vh] inset-x-0 z-10 pointer-events-none">
        <div
          ref={navRowRef}
          style={{ opacity: 0, visibility: 'hidden' }}
          className="max-w-[1450px] mx-auto w-full px-6 sm:px-12 flex items-center justify-between font-extrabold text-xs sm:text-sm tracking-wider uppercase pointer-events-auto"
        >
          {/* Left Links */}
          <div className="flex items-center gap-2 sm:gap-4 text-black">
            <a href="#hero" className="hover:text-black/60 transition-colors">HOME</a>
            <span className="text-black/40 font-normal">|</span>
            <a href="#about" className="hover:text-black/60 transition-colors">ABOUT ME</a>
            <span className="text-black/40 font-normal">|</span>
            <a href="#projects" className="hover:text-black/60 transition-colors">PROJECTS</a>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-2 sm:gap-4 text-black">
            <a href="#overview" className="hover:text-black/60 transition-colors">WHAT YOU GET</a>
            <span className="text-black/40 font-normal">|</span>
            <a href="#services" className="hover:text-black/60 transition-colors">SERVICES</a>
            <span className="text-black/40 font-normal">|</span>
            <a href="#testimonial" className="hover:text-black/60 transition-colors">CLIENTS</a>
            <span className="text-black/40 font-normal">|</span>
            <a href="#faq" className="hover:text-black/60 transition-colors">FAQ</a>
          </div>
        </div>
      </div>

      {/* 3. Center Portrait Image (Rises smoothly from bottom in front of SAMAD title via GSAP) */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-20 overflow-hidden">
        <div
          ref={portraitRef}
          style={{ opacity: 0, visibility: 'hidden' }}
          className="relative w-[90vw] sm:w-[600px] md:w-[680px] lg:w-[760px] xl:w-[840px] h-[90vh] sm:h-[95vh] md:h-[98vh] lg:h-[100vh] flex items-end justify-center"
        >
          <Image
            src="/samad-allsaints-halfbody.png"
            alt="Samad"
            fill
            priority
            className="object-contain object-bottom drop-shadow-2xl scale-[1.30] sm:scale-[1.45] md:scale-[1.62] lg:scale-[1.78] xl:scale-[1.88] origin-bottom transition-all duration-300"
          />

          {/* Overlaid Headline & Action Pill Buttons on Center Torso */}
          <div
            ref={headlineRef}
            style={{ opacity: 0, visibility: 'hidden' }}
            className="absolute bottom-6 sm:bottom-10 inset-x-0 flex flex-col items-center text-center z-30 pointer-events-auto"
          >
            <div className="w-full h-[240px] sm:h-[280px] md:h-[310px] max-w-[95vw] sm:max-w-[660px] mb-2 relative flex items-center justify-center">
              <WarpText
                text={"I BUILD\nDIGITAL EXPERIENCES\nDIFFERENTLY."}
                color="#ffffff"
                warpStrength={0.08}
                warpScale={1.7}
                speed={0.55}
                pointerInfluence={0.42}
                pointerStrength={0.38}
                refraction={0.018}
                ripple={true}
                fontSize="clamp(2.4rem, 6vw, 4.8rem)"
                fontWeight={900}
                letterSpacing="-0.04em"
                lineHeight={0.90}
                style={{ height: '100%', width: '100%' }}
              />
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.profile.socials.calCom}
                target="_blank"
                rel="noreferrer"
                className="bg-[#FFFF23] text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-white transition-all shadow-xl hover:scale-105"
              >
                Book a Call
              </a>
              <a
                href="#about"
                className="bg-[#FFFF23] text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-white transition-all shadow-xl hover:scale-105"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Left Side Glass Cards & Subtext (GSAP Animated Entrance) */}
      <div
        ref={leftCardsRef}
        style={{ opacity: 0, visibility: 'hidden' }}
        className="absolute left-6 sm:left-12 lg:left-16 bottom-10 hidden lg:flex flex-col gap-4 z-30 pointer-events-auto"
      >
        {/* Projects Glass Card */}
        <div className="bg-white/20 backdrop-blur-2xl border border-white/35 rounded-2xl sm:rounded-3xl px-6 py-5 flex items-center gap-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] min-w-[230px]">
          {/* Yellow Webflow W Logo */}
          <svg className="w-14 h-10 text-[#FFFF23] fill-current flex-shrink-0 drop-shadow-sm" viewBox="0 0 200 120">
            <path d="M 20 20 L 65 100 L 98 45 L 131 100 L 180 20 L 142 20 L 118 70 L 98 20 L 78 70 L 54 20 Z" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-2xl sm:text-3xl font-black leading-none text-white tracking-tight">80+</span>
            <span className="text-sm sm:text-base font-extrabold text-white/95 mt-1">Projects</span>
          </div>
        </div>

        {/* Experience Glass Card */}
        <div className="bg-white/20 backdrop-blur-2xl border border-white/35 rounded-2xl sm:rounded-3xl p-6 flex flex-col items-center justify-center text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] w-[180px] self-center">
          <span className="text-5xl sm:text-6xl font-black text-[#FFFF23] leading-none tracking-tight mb-2">7+</span>
          <span className="text-sm sm:text-base font-black text-white leading-tight">
            Years of<br />experience
          </span>
        </div>

        <p className="text-xs font-semibold text-black/80 mt-1 leading-relaxed max-w-[200px]">
          The Webflow Expert.<br />That's Samad.
        </p>
      </div>

      {/* 5. Right Side Traits Card & Bio Paragraph (GSAP Animated Entrance) */}
      <div
        ref={rightCardsRef}
        style={{ opacity: 0, visibility: 'hidden' }}
        className="absolute right-6 sm:right-12 lg:right-16 bottom-10 hidden lg:flex flex-col gap-4 z-30 pointer-events-auto max-w-[270px]"
      >
        {/* Traits Glass List */}
        <div className="bg-white/20 backdrop-blur-2xl border border-white/35 rounded-2xl sm:rounded-3xl p-6 flex flex-col gap-3 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-3 text-sm font-extrabold text-white">
            <span className="w-3 h-3 rounded-full bg-[#FFFF23] inline-block shadow-[0_0_10px_#FFFF23]"></span> Creative
          </div>
          <div className="flex items-center gap-3 text-sm font-extrabold text-white">
            <span className="w-3 h-3 rounded-full bg-[#FFFF23] inline-block shadow-[0_0_10px_#FFFF23]"></span> Reliable
          </div>
          <div className="flex items-center gap-3 text-sm font-extrabold text-white">
            <span className="w-3 h-3 rounded-full bg-[#FFFF23] inline-block shadow-[0_0_10px_#FFFF23]"></span> Strategist
          </div>
          <div className="flex items-center gap-3 text-sm font-extrabold text-white">
            <span className="w-3 h-3 rounded-full bg-[#FFFF23] inline-block shadow-[0_0_10px_#FFFF23]"></span> Builder
          </div>
          <div className="flex items-center gap-3 text-sm font-extrabold text-white">
            <span className="w-3 h-3 rounded-full bg-[#FFFF23] inline-block shadow-[0_0_10px_#FFFF23]"></span> Efficient
          </div>
        </div>

        <p className="text-xs font-semibold text-black/80 leading-relaxed">
          Working closely with your team to deliver Webflow builds that merge creativity, technical excellence, and long-term value.
        </p>
      </div>
    </section>
  );
}
