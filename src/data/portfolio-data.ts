export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  link: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "SAMAD",
    brandName: "SAMAD®",
    role: "Creative Web Developer & Motion Engineer",
    tagline: "Merging architectural creativity, micro-interactions, and high-performance development.",
    bio: "Working closely with visionary teams to deliver custom web builds that blend artistic design, technical excellence, and measurable value.",
    avatar: "/samad-photo.jpg",
    stats: {
      projectsCompleted: "80+",
      yearsExperience: "7+",
      satisfactionRate: "100%",
    },
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      calCom: "https://cal.com",
    },
  },

  projects: [
    {
      id: "project-1",
      title: "Autorank Intelligence",
      category: "SaaS Platform",
      description: "AI-driven SEO automation infrastructure with custom GSAP scroll-driven storytelling.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      year: "2026",
      link: "#",
      tags: ["Next.js", "GSAP", "Tailwind CSS", "Technical SEO"],
    },
    {
      id: "project-2",
      title: "BioSynth Technologies",
      category: "Biotech & Health",
      description: "Interactive genomic data visualization suite engineered for biotech pioneers.",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      year: "2025",
      link: "#",
      tags: ["Three.js", "WebGL", "Framer Motion", "TypeScript"],
    },
    {
      id: "project-3",
      title: "Alosant Living",
      category: "Real Estate & Web3",
      description: "Luxury property portal with high-touch fluid animations and interactive 3D floorplans.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      year: "2025",
      link: "#",
      tags: ["Next.js", "Lenis Scroll", "Tailwind CSS", "CMS"],
    },
    {
      id: "project-4",
      title: "Pulse Protocol",
      category: "Fintech & DeFi",
      description: "High-frequency crypto exchange interface with sub-millisecond motion feedback.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
      year: "2026",
      link: "#",
      tags: ["React", "Motion", "Tailwind CSS", "WebSockets"],
    },
  ] as Project[],

  capabilities: [
    {
      id: "cap-1",
      title: "Tailored Architecture",
      description: "Built ground-up with scalable component systems, dynamic CMS setups, and zero bloat.",
      badge: "01",
    },
    {
      id: "cap-2",
      title: "60FPS Micro-Interactions",
      description: "Delightful scroll physics, spring-based hover responses, and fluid line masking.",
      badge: "02",
    },
    {
      id: "cap-3",
      title: "Technical SEO & Speed",
      description: "Sub-second loading times, automated schema structured data, and 95+ Lighthouse scores.",
      badge: "03",
    },
    {
      id: "cap-4",
      title: "Figma Precision",
      description: "Pixel-perfect translation from complex design systems into robust production code.",
      badge: "04",
    },
  ] as Capability[],

  services: [
    {
      id: "srv-1",
      title: "Custom Web Development",
      description: "End-to-end frontend engineering using Next.js 15, TypeScript, and modern styling solutions.",
      icon: "Code2",
      features: ["Next.js / React 19", "Clean Modular Architecture", "API Integration"],
    },
    {
      id: "srv-2",
      title: "Motion & GSAP Animations",
      description: "Scroll-driven storytelling, particle canvases, line masks, and dynamic layout transitions.",
      icon: "Sparkles",
      features: ["Lenis Smooth Scroll", "ScrollTrigger & FLIP", "Spring Physics"],
    },
    {
      id: "srv-3",
      title: "CMS & Performance Optimization",
      description: "Structuring headless CMS architectures and optimizing Core Web Vitals for maximum conversion.",
      icon: "Zap",
      features: ["Headless CMS", "Technical SEO", "Fast Page Load Speeds"],
    },
  ] as Service[],

  testimonials: [
    {
      id: "test-1",
      quote: "Samad has been a fantastic partner to work with and continues to be an essential extension of our core product team. His work consistently exceeds expectations.",
      author: "Danette Beal",
      role: "VP of Marketing",
      company: "Alosant",
      rating: 5,
    },
    {
      id: "test-2",
      quote: "I've worked with Samad for years and have always been impressed by his fast turnaround, attention to detail, and mastery over interactive frontend animations.",
      author: "Marko Ilic",
      role: "Founder",
      company: "see.design",
      rating: 5,
    },
    {
      id: "test-3",
      quote: "We loved working with Samad on our flagship launch. He showed exceptional technical leadership and guided key architecture decisions smoothly.",
      author: "Bart-Jan Leyts",
      role: "CEO",
      company: "Autorank",
      rating: 5,
    },
  ] as Testimonial[],

  faqs: [
    {
      id: "faq-1",
      question: "What is your typical project timeline?",
      answer: "Most full portfolio or landing page builds take between 2 to 4 weeks depending on the complexity of custom animations, CMS structures, and design revisions.",
    },
    {
      id: "faq-2",
      question: "How do you handle animations and smooth scrolling?",
      answer: "We use a combination of Lenis Smooth Scroll, Framer Motion, and GSAP ScrollTrigger to ensure silky smooth 60fps performance across desktop and mobile devices.",
    },
    {
      id: "faq-3",
      question: "Can you convert Figma designs directly into Next.js code?",
      answer: "Yes, we specialize in pixel-perfect Figma-to-code conversions, maintaining exact typography, responsive spacing, and component variants.",
    },
    {
      id: "faq-4",
      question: "Do you offer ongoing support after launch?",
      answer: "Absolutely. We provide post-launch maintenance, feature additions, speed audits, and content updates on a retainer or hourly basis.",
    },
  ] as FaqItem[],
};
