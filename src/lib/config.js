/**
 * ═══════════════════════════════════════════════
 *  REWAN TECH SOLUTIONS — Centralized Config
 *  Keep official brand, contact, SEO and social details aligned globally.
 * ═══════════════════════════════════════════════
 */

export const SITE = {
  name: 'Rewan Tech Solutions',
  shortName: 'Rewan Tech',
  alternateName: 'Rewan Tech',
  tagline: 'Web, Mobile, AI & Digital Growth Solutions',
  description:
    'Rewan Tech Solutions helps businesses build websites, mobile applications, custom software, AI-powered systems, cloud infrastructure and digital growth solutions.',
  url: 'https://rewantechsolutions.com',
  logo: '/logo.svg',
  favicon: '/favicon.ico',
  location: 'Jhansi, Uttar Pradesh, India',
  areaServed: ['India', 'Uttar Pradesh', 'Jhansi', 'Gwalior', 'Lucknow', 'Delhi NCR'],
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

export const SOCIAL = {
  instagram: 'https://www.instagram.com/rewan_tech?igsh=dHk1OHo4eTg1OThn',
  linkedin: 'https://linkedin.com/company/rewantechsolutions',
  whatsapp: `https://wa.me/${CONTACT.whatsappRaw}?text=Hi%2C+I+want+to+discuss+a+project`,
  whatsapp2: `https://wa.me/${CONTACT.whatsappRaw2}?text=Hi%2C+I+want+to+discuss+a+project`,
};

export const SEO = {
  defaultTitle: 'Rewan Tech Solutions | Web Development, Mobile Apps, AI & Digital Marketing',
  titleTemplate: '%s | Rewan Tech Solutions',
  description: SITE.description,
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
  keywords: [
    'Rewan Tech Solutions',
    'Rewan Tech',
    'rewantechsolutions',
    'web development company',
    'website development services',
    'mobile app development company',
    'custom software development',
    'AI solutions company',
    'digital marketing agency',
    'UI UX design company',
    'cloud and DevOps services',
    'ecommerce website development',
    'Next.js development',
    'React development',
    'Flutter app development',
    'software company India',
    'IT company India',
    'software company Jhansi',
    'web development Jhansi',
    'digital marketing Jhansi',
  ],
};

export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  alternateName: SITE.alternateName,
  url: SITE.url,
  logo: `${SITE.url}${SITE.logo}`,
  description: SITE.description,
  email: CONTACT.email,
  telephone: CONTACT.phoneRaw,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jhansi',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  areaServed: SITE.areaServed,
  sameAs: [SOCIAL.instagram, SOCIAL.linkedin],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT.phoneRaw,
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  alternateName: SITE.alternateName,
  url: SITE.url,
  publisher: {
    '@type': 'Organization',
    name: SITE.name,
  },
};
