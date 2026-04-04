# Rewan Tech Solutions — Production Website

Built with **Next.js 15**, custom design system, Formspree + WhatsApp form integration.

## 🚀 Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production static export → /out
```

## ⚙️ Configuration

Edit **`src/lib/config.js`** to update all business details in one place:

| Key | What to update |
|-----|---------------|
| `CONTACT.formspreeEndpoint` | Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID |
| `CONTACT.whatsappRaw` / `whatsappRaw2` | Your WhatsApp numbers (digits only, with country code) |
| `SOCIAL.instagram` | Your Instagram profile URL |
| `SITE.url` | Your production domain |

### Formspree Setup
1. Go to [formspree.io](https://formspree.io) → Create account → New Form
2. Copy your form endpoint (e.g. `https://formspree.io/f/xyzabcde`)
3. Paste it into `CONTACT.formspreeEndpoint` in `src/lib/config.js`

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js          ← Root layout + global SEO metadata
│   ├── globals.css         ← Design system v4.0
│   ├── page.js             ← Homepage
│   ├── about/
│   │   ├── layout.js       ← Page-level SEO metadata
│   │   └── page.js
│   ├── contact/
│   │   ├── layout.js
│   │   └── page.js         ← Formspree + WhatsApp dual submission
│   └── ...other pages
├── components/
│   ├── layout/
│   │   ├── Navbar.js
│   │   └── Footer.js       ← Fully responsive, config-driven
│   └── ui/
│       ├── Shell.js         ← Page wrapper (Cursor + Navbar + Footer + FAB)
│       ├── Cursor.js        ← Desktop-only custom cursor
│       ├── FloatingActions.js ← WhatsApp + Instagram + Scroll-to-top FAB
│       └── Reveal.js
└── lib/
    └── config.js            ← 🎯 Single source of truth for all config
```

## 🎨 Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Mobile: normal cursor restored, FAB buttons sized for touch
- ✅ Gradient text clip fix (last letter no longer cut off)
- ✅ Footer responsive — stacks on mobile/tablet
- ✅ Floating action group: WhatsApp + Instagram + Scroll-to-top
- ✅ Contact form → Formspree (email backup) + WhatsApp (instant message)
- ✅ Centralized config (`src/lib/config.js`)
- ✅ Full SEO: meta tags, OG tags, Twitter cards on all pages
- ✅ sitemap.xml + robots.txt
- ✅ icon.svg favicon + site.webmanifest
- ✅ `poweredByHeader: false` for security
- ✅ Static export ready (`next build` → `/out` folder)

## 🌐 Deployment

**Vercel (recommended):**
1. Push to GitHub
2. Import repo in Vercel
3. Done — auto-deploys on push

**Other static hosts (Netlify, GitHub Pages, Cloudflare Pages):**
```bash
npm run build
# Upload the /out directory
```

## 📝 Post-Deploy Checklist
- [ ] Replace Formspree endpoint in `config.js`
- [ ] Add real `og-image.png` (1200×630px) to `/public`
- [ ] Add real `favicon.ico` and `apple-touch-icon.png` to `/public`
- [ ] Submit sitemap to Google Search Console
- [ ] Verify all pages in GSC after deploy
