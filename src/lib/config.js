/**
 * ═══════════════════════════════════════════════
 *  REWAN TECH SOLUTIONS — Centralized Config
 *  Update all business details here globally.
 * ═══════════════════════════════════════════════
 */

export const SITE = {
  name: 'Rewan Tech Solutions',
  tagline: 'Premium IT Engineering Partner',
  description:
    'Premium IT engineering partner. Web, Mobile, AI, Cloud. Fixed-price contracts. Extraordinary results.',
  url: 'https://rewantechsolutions.com',
  logo: '/logo.svg',
  favicon: '/favicon.ico',
};

export const CONTACT = {
  email: 'rewantechsolutions@gmail.com',
  phone: '+91 8545098444',
  phoneRaw: '+918545098444',
  whatsapp: '+91 7992127047',
  whatsappRaw: '917992127047',
  whatsappRaw2: '918545098444', // secondary WhatsApp
  formspreeEndpoint: 'https://formspree.io/f/meeprbqd',
};

export const SOCIAL = {
  instagram: 'https://instagram.com/rewantechsolutions',
  whatsapp: `https://wa.me/${CONTACT.whatsappRaw}?text=Hi%2C+I+want+to+discuss+a+project`,
  whatsapp2: `https://wa.me/${CONTACT.whatsappRaw2}?text=Hi%2C+I+want+to+discuss+a+project`,
};

export const SEO = {
  defaultTitle: 'Rewan Tech Solutions — Premium IT Engineering Partner',
  titleTemplate: '%s — Rewan Tech Solutions',
  description: SITE.description,
  keywords: [
    'web development India',
    'mobile app development',
    'AI ML integration',
    'cloud DevOps',
    'UI UX design',
    'e-commerce development',
    'IT solutions India',
    'software development company',
    'Next.js development',
    'React development',
    'rewan tech solutions',
  ],
  og: {
    type: 'website',
    image: '/og-image.png',
    imageWidth: 1200,
    imageHeight: 630,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rewantechsol',
  },
};
