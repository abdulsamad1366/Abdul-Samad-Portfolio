'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import WarpText from '@/components/ui/WarpText';
import GlareHover from '@/components/ui/GlareHover';

gsap.registerPlugin(ScrollTrigger);

const LETTERS = ['S', 'A', 'M', 'A', 'D'];

export default function Hero() {
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const titleTextRef = useRef<HTMLDivElement>(null);
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
      gsap.set(portraitRef.current, { yPercent: 100, opacity: 0, autoAlpha: 0, filter: 'blur(0px)' });
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
        )
        .call(() => {
          ScrollTrigger.refresh();
        });

      // 7. Pinned Scroll Animation: Main Image gets Blurred & Title Morphs
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });

      scrollTl
        .to(
          titleTextRef.current,
          {
            scale: 0.05,
            transformOrigin: 'top left',
            ease: 'none',
          },
          0
        )
        .to(
          portraitRef.current,
          {
            filter: 'blur(24px)',
            opacity: 0.2,
            scale: 1,
            y: 0,
            yPercent: 0,
            ease: 'none',
          },
          0
        )

        .to(
          rightCardsRef.current,
          {
            opacity: 0,
            x: 60,
            ease: 'none',
          },
          0
        )
        .to(
          headlineRef.current,
          {
            y: -700,
            yPercent: -150,
            opacity: 0,
            ease: 'none',
          },
          0
        )
        .to(
          navRowRef.current,
          {
            opacity: 0,
            y: -40,
            ease: 'none',
          },
          0
        )
        .to(
          leftCardsRef.current,
          {
            opacity: 0,
            x: -60,
            ease: 'none',
          },
          0
        );
    },
    { scope: pinWrapperRef }
  );

  return (
    <div ref={pinWrapperRef} className="relative w-full h-[220vh] bg-[#d5cfbe]">
      <section
        ref={containerRef}
        id="hero"
        className="sticky top-0 w-full h-screen h-[100dvh] bg-[#d5cfbe] text-black overflow-hidden flex flex-col justify-between select-none z-10"
      >
      {/* 1. SINGLE CONTINUOUS GSAP GIANT SAMAD TITLE — Centered across hero top */}
      <div
        ref={titleWrapperRef}
        className="fixed pl-1 w-full pt-1 sm:pt-6 flex flex-col items-center justify-start pointer-events-none z-10"
      >
        <div
          ref={titleTextRef}
          className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 text-[20vw] sm:text-[21vw] md:text-[21.5vw] lg:text-[30vw] font-black tracking-wider leading-none text-[#FFFF23] uppercase font-anton drop-shadow-sm select-none origin-top"
        >
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
          className="absolute top-[54vh] flex items-center gap-3 bg-black/90 text-white px-5 py-2 rounded-full border border-white/20 shadow-2xl backdrop-blur-md font-bold text-xs sm:text-sm tracking-widest uppercase z-30"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFFF23] animate-pulse"></span>
          <span className="text-white/80">LOADING</span>
          <span className="text-[#FFFF23] font-mono font-extrabold text-xs bg-white/10 px-2 py-0.5 rounded">
            {counterText}%
          </span>
        </div>
      </div>

      {/* 2. Navigation Items Row — Positioned cleanly BELOW the giant SAMAD text */}
      <div className="absolute top-[49vh] sm:top-[51vh] md:top-[52vh] lg:top-[52vh] inset-x-0 z-25 pointer-events-none">
        <div
          ref={navRowRef}
          style={{ opacity: 0, visibility: 'hidden' }}
          className="max-w-[1550px] mx-auto w-full px-6 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between font-extrabold text-base sm:text-lg md:text-xl tracking-wider uppercase pointer-events-auto"
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
            <a href="#faq" className="hover:text-black/60 transition-colors">FAQ's</a>
          </div>
        </div>
      </div>

      {/* 3. Center Portrait Image & Torso Headline */}
      <div className="fixed inset-0 flex items-end justify-center pointer-events-none z-20">
        <div
          ref={portraitRef}
          style={{ opacity: 0, visibility: 'hidden' }}
          className="relative w-[85vw] sm:w-[600px] md:w-[680px] lg:w-[760px] xl:w-[840px] h-[90vh] sm:h-[90vh] md:h-[93vh] lg:h-[95vh] xl:h-[97vh] flex items-end justify-center"
        >
          <Image
            src="/samad-allsaints-halfbody.png"
            alt="Samad"
            fill
            priority
            className="object-contain object-bottom drop-shadow-2xl scale-[1.22] sm:scale-[1.34] md:scale-[1.48] lg:scale-[1.60] xl:scale-[1.70] origin-bottom transition-all duration-300"
          />
        </div>

        {/* Overlaid Headline & Action Pill Buttons on Center Torso */}
        <div
          ref={headlineRef}
          style={{ opacity: 0, visibility: 'hidden' }}
          className="absolute bottom-6 sm:bottom-10 inset-x-0 flex flex-col items-center text-center z-30 pointer-events-auto px-4"
        >
          <div className="w-full h-[220px] sm:h-[260px] md:h-[290px] max-w-[95vw] sm:max-w-[660px] mb-3 relative flex items-center justify-center">
            {/* Interactive WebGL WarpText Overlay */}
            <div className="relative z-10 w-full h-full">
              <WarpText
                text={"I BUILD\nDIGITAL EXPERIENCES\nTHAT MATTER."}
                color="#ffffff"
                warpStrength={0.08}
                warpScale={1.7}
                speed={0.55}
                pointerInfluence={0.42}
                pointerStrength={0.38}
                refraction={0.018}
                ripple={true}
                fontSize="clamp(2.2rem, 5.5vw, 4.4rem)"
                fontWeight={900}
                letterSpacing="-0.04em"
                lineHeight={0.90}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 relative z-30">
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

      {/* 4. Left Side Glass Cards & Subtext (GSAP Animated Entrance) */}
      <div
        ref={leftCardsRef}
        style={{ opacity: 0, visibility: 'hidden' }}
        className="absolute left-4 sm:left-8 lg:left-16 bottom-6 lg:bottom-10 hidden md:flex flex-col gap-3 lg:gap-4 z-30 pointer-events-auto scale-90 md:scale-95 lg:scale-100 origin-bottom-left"
      >
        {/* Projects Glass Card */}
        <GlareHover
          width="clamp(240px, 15vw, 310px)"
          height="clamp(125px, 7.5vw, 155px)"
          background="rgba(214, 209, 193, 0.58)"
          borderRadius="1rem"
          borderColor="rgba(255, 255, 255, 0.55)"
          glareOpacity={0.28}
          glareAngle={-30}
          glareSize={280}
          transitionDuration={800}
          className="backdrop-blur-2xl !flex !flex-row items-center justify-center gap-7 px-7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
        >
          {/* Yellow Webflow W Logo */}
          <svg className="w-20 lg:w-24 h-12 lg:h-14 text-[#FFFF23] fill-current flex-shrink-0 drop-shadow-sm" viewBox="0 0 200 120">
            <path d="M 20 20 L 65 100 L 98 45 L 131 100 L 180 20 L 142 20 L 118 70 L 98 20 L 78 70 L 54 20 Z" />
          </svg>
          <div className="flex flex-col text-center">
            <span className="text-3xl lg:text-4xl font-black leading-none text-white tracking-tight">80+</span>
            <span className="text-base lg:text-lg font-extrabold text-white/95 mt-2">Projects</span>
          </div>
        </GlareHover>

        {/* Experience Glass Card */}
        <GlareHover
          width="clamp(170px, 10vw, 200px)"
          height="clamp(190px, 11vw, 220px)"
          background="rgba(214, 209, 193, 0.58)"
          borderRadius="1rem"
          borderColor="rgba(255, 255, 255, 0.55)"
          glareOpacity={0.28}
          glareAngle={-30}
          glareSize={280}
          transitionDuration={800}
          className="backdrop-blur-2xl !flex !flex-col items-center justify-center text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] self-center"
        >
          <span className="text-5xl lg:text-6xl font-black text-[#FFFF23] leading-none tracking-tight mb-5">10+</span>
          <span className="text-sm lg:text-base font-black text-white leading-tight">
            TECHNOLOGIES
          </span>
        </GlareHover>

        <p className="text-xs font-semibold text-black/80 mt-1 leading-relaxed max-w-[180px] lg:max-w-[200px]">
          Full-Stack Developer.<br /> Designer at heart. <br />Builder by nature.
        </p>
      </div>

      {/* 5. Right Side Traits Card & Bio Paragraph (GSAP Animated Entrance) */}
      <div
        ref={rightCardsRef}
        style={{ opacity: 0, visibility: 'hidden' }}
        className="absolute right-4 sm:right-8 lg:right-[10vw] xl:right-[12vw] bottom-6 lg:bottom-10 hidden md:flex flex-col gap-3 lg:gap-4 z-30 pointer-events-auto w-[240px] lg:w-[270px] scale-90 md:scale-95 lg:scale-100 origin-bottom-right"
      >
        {/* Traits Glass List */}
        <GlareHover
          width="auto"
          height="auto"
          background="rgba(214, 209, 193, 0.58)"
          borderRadius="1rem"
          borderColor="rgba(255, 255, 255, 0.55)"
          glareOpacity={0.25}
          glareAngle={-30}
          glareSize={280}
          transitionDuration={800}
          className="backdrop-blur-3xl p-6 lg:p-7 !flex !flex-col gap-3 lg:gap-4 text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] ring-1 ring-white/10"
        >
          <div className="flex flex-col gap-1 text-xs lg:text-sm font-extrabold text-white">
            <span className="text-[#FFFF23]">UI / UX</span>
            <span>Interfaces that feel effortless</span>
          </div>
          <div className="flex flex-col gap-1 text-xs lg:text-sm font-extrabold text-white">
            <span className="text-[#FFFF23]">FRONTEND</span>
            <span>React · Angular · Next.js</span>
          </div>
          <div className="flex flex-col gap-1 text-xs lg:text-sm font-extrabold text-white">
            <span className="text-[#FFFF23]">BACKEND</span>
            <span>Node.js · Express · APIs</span>
          </div>
          <div className="flex flex-col gap-1 text-xs lg:text-sm font-extrabold text-white">
            <span className="text-[#FFFF23]">DATABASE</span>
            <span>MongoDB · PostgreSQL</span>
          </div>
        </GlareHover>

        <p className="text-xs font-semibold text-black/80 leading-relaxed">
          Working closely with your team to deliver Webflow builds that merge creativity, technical excellence, and long-term value.
        </p>
      </div>
    </section>
  </div>
  );
}
