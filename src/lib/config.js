
/**
 * REWAN TECH SOLUTIONS — Centralized brand, SEO and contact config.
 * Keep official brand name consistent across the website.
 */

export const SITE = {
  name: 'Rewan Tech Solutions',
  shortName: 'Rewan Tech',
  tagline: 'Web, Mobile, AI & Digital Growth Solutions',
  description:
    'Rewan Tech Solutions helps businesses build websites, mobile applications, custom software, AI-powered systems and digital growth experiences that are reliable, scalable and conversion-focused.',
  url: 'https://rewantechsolutions.com',
  logo: '/logo.svg',
  favicon: '/favicon.ico',
  foundingLocation: 'Jhansi, Uttar Pradesh, India',
};

export const CONTACT = {
  email: 'rewansolutions@gmail.com',
  phone: '+91 8545098444',
  phoneRaw: '+918545098444',
  whatsapp: '+91 8545098444',
  whatsappRaw: '918545098444',
  whatsappRaw2: '918545098444',
  formspreeEndpoint: 'https://formspree.io/f/meeprbqd',
};

const projectMessage = encodeURIComponent(
  `Hi Rewan Tech Solutions, I want to discuss a project.\n\nBusiness Name:\nIndustry:\nService Required:\nBudget Range:\nTimeline:`
);

export const SOCIAL = {
  instagram: 'https://www.instagram.com/rewan_tech?igsh=dHk1OHo4eTg1OThn',
  linkedin: 'https://linkedin.com/company/rewantechsolutions',
  whatsapp: `https://wa.me/${CONTACT.whatsappRaw}?text=${projectMessage}`,
  whatsapp2: `https://wa.me/${CONTACT.whatsappRaw2}?text=${projectMessage}`,
};

export const SEO = {
  defaultTitle: 'Rewan Tech Solutions | Web Development, Mobile Apps, AI & Digital Marketing',
  titleTemplate: '%s | Rewan Tech Solutions',
  description: SITE.description,
  keywords: [
    'Rewan Tech Solutions',
    'Rewan Tech',
    'rewantechsolutions',
    'web development company',
    'website development company',
    'mobile app development company',
    'custom software development',
    'AI solutions company',
    'digital marketing agency',
    'UI UX design company',
    'cloud and devops services',
    'software company India',
    'technology partner for businesses',
    'hospital website development',
    'school website development',
    'travel website development',
    'startup technology solutions',
  ],
  og: {
    type: 'website',
    image: '/og-image.svg',
    imageWidth: 1200,
    imageHeight: 630,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rewantechsol',
  },
};

export const INDUSTRIES = [
  {
    slug: 'healthcare',
    title: 'Healthcare Digital Solutions',
    shortTitle: 'Healthcare',
    color: '#3b82f6',
    project: 'Kamla Hospital',
    desc: 'Hospital websites, appointment enquiry flows, emergency contact access, doctor profiles and trust-focused healthcare experiences.',
  },
  {
    slug: 'education',
    title: 'Education & EdTech Solutions',
    shortTitle: 'Education',
    color: '#34d399',
    project: 'EduNest',
    desc: 'Tutor platforms, school websites, admission enquiry flows, course pages and mobile-first education experiences.',
  },
  {
    slug: 'travel',
    title: 'Travel & Tourism Websites',
    shortTitle: 'Travel',
    color: '#f59e0b',
    project: 'Trippper',
    desc: 'Destination showcases, holiday package pages, enquiry funnels and premium travel brand experiences.',
  },
  {
    slug: 'technology',
    title: 'Technology & Startup Platforms',
    shortTitle: 'Technology',
    color: '#06b6d4',
    project: 'EV Halt',
    desc: 'Startup landing pages, product platforms, SaaS dashboards, EV and infrastructure product storytelling.',
  },
];

export const SERVICE_PAGES = [
  {
    slug: 'web-development',
    title: 'Web Development Services',
    accent: 'fast, scalable and SEO-ready',
    color: '#3b82f6',
    desc: 'We build high-performance websites and web applications using modern frameworks, clean architecture and conversion-focused design.',
    features: ['Business websites', 'Landing pages', 'SaaS platforms', 'Admin dashboards', 'API integrations', 'SEO-ready structure'],
    process: ['Discovery & content mapping', 'UX wireframe and UI design', 'Frontend and backend development', 'Testing, deployment and launch'],
    faqs: [
      ['How long does a website project take?', 'Most business websites take 2–6 weeks depending on content, features and approval speed.'],
      ['Will the website be mobile responsive?', 'Yes. Every website is built mobile-first and tested across common screen sizes.'],
      ['Do you provide maintenance?', 'Yes. Maintenance and growth support can be added after launch.'],
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    accent: 'Android, iOS and cross-platform',
    color: '#a78bfa',
    desc: 'We design and develop mobile applications for startups and businesses with reliable user flows, scalable backend integration and launch-ready builds.',
    features: ['Flutter apps', 'React Native apps', 'Authentication', 'Push notifications', 'Payment integration', 'App Store support'],
    process: ['App scope and feature planning', 'Prototype and user flow design', 'Development and API integration', 'Testing, build and launch support'],
    faqs: [
      ['Which technology do you use for apps?', 'We work with Flutter and React Native depending on project needs, budget and future roadmap.'],
      ['Can you build admin panels too?', 'Yes. Most apps include a web-based admin panel or dashboard when needed.'],
      ['Do you help with Play Store publishing?', 'Yes. We help prepare builds, assets and basic publishing steps.'],
    ],
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions & Automation',
    accent: 'practical AI for real business use',
    color: '#f43f5e',
    desc: 'We integrate AI into websites, apps and internal systems to automate support, improve workflows and turn business data into useful actions.',
    features: ['AI chatbots', 'Document assistants', 'Workflow automation', 'Lead qualification', 'Knowledge-base systems', 'AI integrations'],
    process: ['Use-case identification', 'Data and workflow mapping', 'Prototype and integration', 'Testing, monitoring and iteration'],
    faqs: [
      ['Is AI useful for small businesses?', 'Yes, when it is applied to clear use cases like support, lead filtering, content workflows or internal operations.'],
      ['Do you create custom AI models?', 'When required, we can design custom workflows or integrate existing AI models for faster delivery.'],
      ['Will AI replace my team?', 'The goal is not replacement. The goal is to reduce repetitive work and improve response speed.'],
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing Services',
    accent: 'visibility, leads and measurable growth',
    color: '#34d399',
    desc: 'We help businesses improve online visibility with SEO foundations, landing pages, tracking setup, local search optimization and campaign-ready digital assets.',
    features: ['SEO setup', 'Local SEO', 'Landing pages', 'Conversion tracking', 'Content strategy', 'Google Business Profile support'],
    process: ['Audit and goal mapping', 'Keyword and audience planning', 'Content and landing-page improvements', 'Tracking, reporting and optimization'],
    faqs: [
      ['Do you guarantee rankings?', 'No ethical agency can guarantee rankings. We focus on strong technical, content and authority signals.'],
      ['Can you improve local visibility?', 'Yes. We can help with Google Business Profile, local landing pages and location-based content.'],
      ['Do you run ads?', 'We can prepare landing pages and tracking first, then support paid campaigns when the funnel is ready.'],
    ],
  },
];

export const CASE_STUDIES = [
  {
    slug: 'edunest',
    title: 'EduNest',
    industry: 'Education / EdTech',
    url: 'https://edunest.org.in/',
    image: '/images/edunest.png',
    color: '#34d399',
    summary: 'A tutor discovery and education platform built for parents, students and tutors with structured enquiry journeys.',
    challenge: 'Parents needed a simple way to understand services and request tutors, while tutors needed a separate application path.',
    solution: 'We created a mobile-first platform with clear academic coverage, city-based positioning, trust-focused content and enquiry flows.',
    highlights: ['Parent and tutor journeys', 'Home and online learning positioning', 'Responsive education UI', 'WhatsApp and enquiry flow'],
  },
  {
    slug: 'kamla-hospital',
    title: 'Kamla Hospital',
    industry: 'Healthcare',
    url: 'https://kamlahospitaljhansi.in/',
    image: '/images/kamlahospital.png',
    color: '#3b82f6',
    summary: 'A professional healthcare website focused on trust, service visibility and patient accessibility.',
    challenge: 'The hospital needed a credible digital presence that allowed patients to quickly access services, doctors and contact information.',
    solution: 'We developed a healthcare-focused experience with clear service presentation, mobile-first layout and accessible contact paths.',
    highlights: ['Healthcare trust design', 'Emergency/contact access', 'Responsive patient experience', 'Local SEO-ready structure'],
  },
  {
    slug: 'ev-halt',
    title: 'EV Halt',
    industry: 'EV Infrastructure / Technology',
    url: 'https://evhalt.com/',
    image: '/images/evhalt.png',
    color: '#06b6d4',
    summary: 'A modern digital platform for an EV charging network and infrastructure brand.',
    challenge: 'The brand needed to communicate speed, scale and credibility in a growing EV market.',
    solution: 'We built a sharp landing experience with product storytelling, CTA clarity and a modern EV visual language.',
    highlights: ['EV-focused brand experience', 'Network and partner messaging', 'Fast landing-page structure', 'Scalable frontend'],
  },
  {
    slug: 'trippper',
    title: 'Trippper',
    industry: 'Travel & Tourism',
    url: 'https://trippper.com/',
    image: '/og-image.svg',
    color: '#f59e0b',
    summary: 'A premium travel web experience for destination discovery and holiday package enquiries.',
    challenge: 'The travel brand needed a visual-first platform that could showcase destinations and create enquiry intent.',
    solution: 'We designed a modern travel interface with destination storytelling, package-oriented navigation and mobile-first visuals.',
    highlights: ['Destination showcase', 'Premium travel UI', 'Package enquiry flow', 'Mobile-first experience'],
  },
];

export const BLOG_POSTS = [
  {
    slug: 'hospital-website-development-cost-india',
    title: 'Hospital Website Development Cost in India',
    category: 'Healthcare',
    excerpt: 'A practical guide to features, cost ranges and planning considerations for hospital websites in India.',
    date: '2026-06-24',
  },
  {
    slug: 'school-website-features',
    title: 'Features Every School Website Should Have',
    category: 'Education',
    excerpt: 'Admissions, notices, galleries, academics and mobile-first communication features that matter for schools.',
    date: '2026-06-24',
  },
  {
    slug: 'mobile-app-development-cost-india',
    title: 'Mobile App Development Cost in India',
    category: 'Mobile Apps',
    excerpt: 'Understand what affects app development cost and how to plan a realistic first version.',
    date: '2026-06-24',
  },
];
