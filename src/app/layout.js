import './globals.css';
import { SEO, SITE } from '@/lib/config';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: SEO.og.type,
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.name,
    title: SEO.defaultTitle,
    description: SEO.description,
    images: [{ url: SEO.og.image, width: SEO.og.imageWidth, height: SEO.og.imageHeight, alt: SITE.name + ' — Premium IT Engineering' }],
  },
  twitter: {
    card: SEO.twitter.card,
    site: SEO.twitter.site,
    title: SEO.defaultTitle,
    description: SEO.description,
    images: [SEO.og.image],
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon.png', type: 'image/png+xml' }],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#050608" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  );
}
