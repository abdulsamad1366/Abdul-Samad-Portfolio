// customize.js — Personalise the portfolio replica for SAMAD
// Run with: node customize.js
'use strict';

const fs   = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const OUT    = path.join(__dirname, 'out');
const INFILE = path.join(OUT, 'index.html');

const ME = {
  firstName      : 'Samad',
  firstNameUpper : 'SAMAD',
  fullName       : 'Abdul Samad',
  email          : 'dev.abdulsamad.cs@gmail.com',
  jobTitle       : 'Full-Stack Web Developer',
  years          : '3+',
  projects       : '20+',
  stack          : 'React / Angular / Next.js / Node.js / Express / APIs / MongoDB / PostgreSQL',
  about          : 'Full-stack developer with 3+ years of experience building high-performance web applications. Specialising in React, Next.js, Node.js, and scalable API design — I bridge the gap between elegant interfaces and solid backend architecture.',
  navText        : 'Working closely with your team to deliver full-stack builds that merge creativity, technical excellence, and long-term value.',
};

const BRAND_SUBS = [
  [/Johar/g, ME.firstName],
  [/JOHAR/g, ME.firstNameUpper],
  [/hello@johar\.co/gi, ME.email],
];
const sub = (s) => BRAND_SUBS.reduce((acc, [re, to]) => acc.replace(re, to), s);

const MY_PROJECTS = [
  { num:'01', title:'DevBoard',    desc:'A developer productivity dashboard with task management, GitHub integration, and real-time notifications.', tags:['React','Node.js','MongoDB'] },
  { num:'02', title:'ShopAPI',     desc:'Scalable REST API backend for e-commerce platforms — built with Express, PostgreSQL, and JWT auth.', tags:['Express','PostgreSQL','API'] },
  { num:'03', title:'EduPortal',   desc:'Full-featured LMS platform with real-time chat, video streaming, and automated assessments.', tags:['Next.js','Socket.io','MongoDB'] },
  { num:'04', title:'HealthTrack', desc:'Patient health monitoring app with data visualisation dashboards and appointment scheduling.', tags:['React','Node.js','PostgreSQL'] },
  { num:'05', title:'CryptoScan',  desc:'Real-time cryptocurrency tracking and portfolio management tool with charting and alerts.', tags:['Next.js','API','React'] },
  { num:'06', title:'LinkLite',    desc:'A fast URL shortener and analytics platform with custom domains and QR code generation.', tags:['Node.js','MongoDB','Express'] },
  { num:'07', title:'TaskFlow',    desc:'Collaborative project management tool with drag-and-drop Kanban boards and team workspaces.', tags:['React','Node.js','WebSockets'] },
  { num:'08', title:'BudgetBuddy', desc:'Personal finance tracker with budgeting, expense categorisation, and spending insights.', tags:['Next.js','PostgreSQL','APIs'] },
  { num:'09', title:'AIChat',      desc:'AI-powered customer support chatbot with multi-language support and conversation analytics.', tags:['Node.js','Angular','AI APIs'] },
];

const SERVICES = [
  {
    heading:'Ongoing Support', price:'$1,500', unit:'/ 20 hours',
    intro:'Your dedicated full-stack developer, 20 hours a month. Whatever your app needs — handled. Minimum 3 month commitment.',
    items:['New features, pages, and API endpoints','Bug fixes, maintenance, and dependency upgrades','Database optimisation and performance tuning','Code reviews and technical consulting','Unused hours roll over (up to 3 months)'],
    footer:'For teams that need continuous engineering support and long-term collaboration.',
  },
  {
    heading:'Starter Build', price:'$2,500', unit:'',
    intro:'A clean full-stack web app ready to launch in one to two weeks. Perfect for MVPs and startups that need to move fast.',
    items:['Up to 5 core pages or screens','REST or GraphQL API backend','Database design and setup','Authentication and user roles','Deployment to Vercel, Railway, or AWS','Post-launch handover and documentation'],
    footer:'For new projects or MVPs that need a fast, clean start.',
  },
  {
    heading:'Custom Project', price:'Book a Call', unit:'',
    intro:'Complex full-stack development tailored to your needs. Every scope is different, so every project starts with a conversation.',
    items:['Advanced real-time features (WebSockets, live data)','Scalable microservices and API architecture','Third-party integrations (payment, auth, AI, CMS)','Multi-tenant or SaaS platform builds','14 days post-launch support included'],
    footer:'For complex projects that go beyond the basics and need a tailored approach.',
  },
];

const CAPABILITY_CARDS = [
  { heading:'Frontend Development',  text:'Fast, beautiful interfaces with React, Next.js, and Angular — responsive, accessible, and pixel-perfect.' },
  { heading:'Backend & API Design',  text:'Robust REST and GraphQL APIs with Node.js and Express — built to scale and easy to maintain.' },
  { heading:'Database Architecture', text:'Efficient schema design and query optimisation with MongoDB and PostgreSQL.' },
  { heading:'Cloud & Deployment',    text:'Seamless deployment pipelines on Vercel, Railway, AWS, and Docker — zero-downtime releases.' },
  { heading:'Performance & SEO',     text:'Core Web Vitals optimisation, server-side rendering, and technical SEO setup that boosts rankings.' },
];

const FAQS = [
  { q:'What technologies do you specialise in?',   a:'I specialise in React, Next.js, Angular for the frontend, and Node.js, Express for the backend, with MongoDB and PostgreSQL as my primary databases.' },
  { q:'Can you handle both frontend and backend?', a:"Yes — I'm a full-stack developer. I build everything from the UI layer right through to APIs, databases, and cloud deployment." },
  { q:'How long does a typical project take?',     a:"A Starter Build typically takes 1 to 2 weeks. Complex projects are scoped individually — we will discuss timeline during our discovery call." },
  { q:'Do you work with existing codebases?',      a:'Absolutely. I can join an existing project, refactor legacy code, add new features, or migrate from one stack to another.' },
  { q:'Do you offer post-launch support?',         a:'Yes. The Starter Build includes a handover session, Custom Project includes 14 days of post-launch support, and Ongoing Support keeps me on your team month-to-month.' },
  { q:'How do I get started?',                     a:'Click "Let\'s Talk" or email me at dev.abdulsamad.cs@gmail.com. I will send a proposal within 24 hours.' },
];

// ── Load HTML ─────────────────────────────────────────────────
const html = fs.readFileSync(INFILE, 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });
let textHits = 0, attrHits = 0, logoHits = 0, linkHits = 0;

// 1. Text nodes
function walk(node) {
  for (const child of node.children || []) {
    if (child.type === 'text') {
      const next = sub(child.data);
      if (next !== child.data) { child.data = next; textHits++; }
    } else if (['tag','script','style'].includes(child.type)) {
      const tag = child.name && child.name.toLowerCase();
      if (tag === 'style') continue;
      if (tag === 'script' && $(child).attr('type') !== 'application/ld+json') continue;
      walk(child);
    }
  }
}
walk($.root()[0]);

// 2. Attributes
$('*').each((_, el) => {
  for (const a of ['alt','title','aria-label','content','data-wf-domain']) {
    const v = $(el).attr(a);
    if (!v || /^(https?:)?\/\//.test(v) || v.startsWith('assets/')) continue;
    const next = sub(v);
    if (next !== v) { $(el).attr(a, next); attrHits++; }
  }
});

// 3. Logo SVG — rebuild for SAMAD (5 letters)
const LETTERS = [...ME.firstNameUpper];
const VB_W = 1288, VB_H = 338;
const glyphs = LETTERS.map((ch, i) => {
  const x = (VB_W / LETTERS.length) * (i + 0.5);
  return '<text class="nesh-logo-letter" x="' + x.toFixed(1) + '" y="' + VB_H +
    '" text-anchor="middle" font-family="Ppneuemontreal, \'PP Neue Montreal\', Arial, sans-serif"' +
    ' font-weight="700" font-size="420" fill="currentColor">' + ch + '</text>';
}).join('');
$('.nesh-logo-preload-svg, .nesh-logo-svg').each((_, el) => { $(el).empty().append(glyphs); logoHits++; });

// 4. Meta / title
const titleStr = ME.jobTitle + ' — ' + ME.firstName + ' | ' + ME.firstNameUpper + String.fromCharCode(174);
const descStr  = ME.jobTitle + ' with ' + ME.years + ' years of experience building full-stack web apps with React, Next.js, Node.js, and more.';
$('title').text(titleStr);
$('meta[name="description"]').attr('content', descStr);
$('meta[property="og:title"]').attr('content', titleStr);
$('meta[property="og:description"]').attr('content', descStr);
$('meta[name="twitter:title"]').attr('content', titleStr);
$('meta[name="twitter:description"]').attr('content', descStr);

// 5. JSON-LD
$('script[type="application/ld+json"]').first().text(JSON.stringify({
  '@context':'https://schema.org', '@type':'Service',
  'name':'Full-Stack Web Development by ' + ME.firstName,
  'url':'https://abdulsamad.dev',
  'provider':{'@type':'Person','name':ME.fullName,'url':'https://abdulsamad.dev'},
  'aggregateRating':{'@type':'AggregateRating','ratingValue':'5','bestRating':'5','ratingCount':'5'}
}, null, 2));

// 6. Nav & hero text
$('.nav-top-text').text(ME.navText);
$('#projects_start_text').html(ME.projects + '<br>Projects');
$('.hero-profile-img').attr('alt', ME.firstName);
$('.hero-left-text').each((_, el) => { if ($(el).text().trim()) $(el).text(ME.about); });
$('.hero-right-text').each((_, el) => { $(el).text(ME.stack); });
$('.what_you_get-text').first().text('Full-stack engineering, clean architecture, and polished UX combined — turning your vision into a performant digital product that feels effortless.');

// 7. Capability cards
$('.capa-card-heading').each((i, el) => { if (CAPABILITY_CARDS[i]) $(el).text(CAPABILITY_CARDS[i].heading); });
$('.capa-card-text').each((i, el)    => { if (CAPABILITY_CARDS[i]) $(el).text(CAPABILITY_CARDS[i].text); });

// 8. Services
$('.sevice_section .max-width-389').first().text('Same quality, same attention to detail. Whether you need a complete web app, a backend API, or ongoing engineering support.');
$('.service-card').each((i, card) => {
  if (!SERVICES[i]) return;
  const s = SERVICES[i], $c = $(card);
  $c.find('.service-card-heading').text(s.heading);
  $c.find('.service-price-item > p').first().text(s.price);
  $c.find('.services-hours-text p').text(s.unit);
  $c.find('.service-top-content > p').text(s.intro);
  $c.find('.service-list-item').each((j, li) => { if (s.items[j]) $(li).find('p').text(s.items[j]); });
  $c.find('.service-bottom-content > p').text(s.footer);
});

// 9. Work / portfolio cards
$('.work-card').each((i, card) => {
  if (!MY_PROJECTS[i]) return;
  const p = MY_PROJECTS[i], $c = $(card);
  $c.find('.work-label').first().text(p.num);
  $c.find('.work-label-wrap .work-label').each((j, t) => { if (p.tags[j]) $(t).text(p.tags[j]); });
  $c.find('.work-card-heading').text(p.title);
  $c.find('.work-card-content-bottom-layout > p').text(p.desc);
  $c.attr('href', '#');
  $c.attr('aria-label', p.title);
});

// 10. FAQ
$('.faq-list').each((i, item) => {
  if (!FAQS[i]) return;
  const $item = $(item);
  $item.find('.faq-question-text, .faq-heading').text(FAQS[i].q);
  $item.find('.faq-answer-text, .faq-answer p').first().text(FAQS[i].a);
});

// 11. CTA
$('.cta-text').first().text('Have a project in mind?');

// 12. Neutralise outbound links
$('a[href]').each((_, el) => {
  const href = $(el).attr('href');
  if (/x\.com|twitter\.com|linkedin\.com|cal\.com|instagram\.com|mailto:/i.test(href)) {
    $(el).attr('href', '#'); linkHits++;
  }
});

// Write
fs.writeFileSync(INFILE, $.html());
console.log('=== Customization Complete ===');
console.log('text nodes  : ' + textHits);
console.log('attributes  : ' + attrHits);
console.log('logos       : ' + logoHits);
console.log('links       : ' + linkHits);
console.log('');
console.log('Brand : ' + ME.firstNameUpper);
console.log('Email : ' + ME.email);
console.log('Role  : ' + ME.jobTitle);
console.log('');
console.log('Done! Visit http://localhost:8080');
