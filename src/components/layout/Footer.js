'use client';
import Link from 'next/link';
import { CONTACT, SOCIAL } from '@/lib/config';

const PAGES = [
  {l:'Services',h:'/services'},{l:'Work',h:'/work'},{l:'About',h:'/about'},
  {l:'Pricing',h:'/pricing'},{l:'Process',h:'/process'},{l:'FAQ',h:'/faq'},{l:'Contact',h:'/contact'},
];
const SERVICES = [
  'Web Development','Mobile Apps','AI / ML Integration',
  'Cloud & DevOps','UI/UX Design','E-Commerce','Security Audit',
];

/* Shared logo mark — same as Navbar for brand consistency */
function LogoMark() {
  return (
    <Link href="/" style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:20 }}>
      <div style={{ width:32, height:32, borderRadius:9, background:'linear-gradient(135deg,var(--b),var(--c))', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 16px rgba(37,99,235,0.35)', flexShrink:0 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M4 8h10a4 4 0 0 1 0 8H4" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="19" cy="16" r="1.8" fill="rgba(255,255,255,0.7)"/>
        </svg>
      </div>
      <span style={{ fontFamily:'var(--f-d)', fontWeight:800, fontSize:15, letterSpacing:'-0.05em', color:'var(--t1)' }}>
        rewan<span style={{ color:'var(--bl)' }}>tech</span>
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)', position:'relative', overflow:'hidden' }}>
      <div className="noise"/>

      {/* CTA Band */}
      <div style={{ background:'linear-gradient(135deg,rgba(37,99,235,0.08) 0%,rgba(6,182,212,0.05) 100%)', borderBottom:'1px solid var(--bdr)', padding:'clamp(44px,7vw,80px) clamp(20px,5vw,80px)', position:'relative', zIndex:1 }}>
        <div style={{ position:'absolute', top:'-60%', right:'-5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 70%)', pointerEvents:'none', animation:'glow-p 7s ease-in-out infinite' }}/>
        <div className="ctr footer-cta-row" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:32, position:'relative', zIndex:1 }}>
          <div style={{ minWidth:0, flex:'1 1 300px' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:'var(--rf)', padding:'5px 14px', marginBottom:18 }}>
              <span style={{ width:7, height:7, borderRadius:'50%', background:'var(--g)', display:'block', animation:'blink 2s ease infinite', boxShadow:'0 0 8px var(--g)' }}/>
              <span style={{ fontFamily:'var(--f-d)', fontSize:11, fontWeight:700, color:'var(--g)', letterSpacing:'0.05em' }}>Currently accepting projects</span>
            </div>
            <h2 className="d2" style={{ fontSize:'clamp(24px,4vw,52px)', marginBottom:14 }}>
              Ready to build something<br/>
              <span className="grad">extraordinary?</span>
            </h2>
            <p className="body" style={{ fontSize:16, maxWidth:420 }}>Free 30-min discovery call. Fixed-price proposal in 24h. Your code, your IP.</p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:12, flex:'0 0 auto' }}>
            <Link href="/contact" className="btn btn-p btn-lg" style={{ justifyContent:'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Free Call
            </Link>
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg" style={{ justifyContent:'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div style={{ padding:'clamp(44px,6vw,72px) clamp(20px,5vw,80px) clamp(28px,4vw,40px)', position:'relative', zIndex:1 }}>
        <div className="ctr">
          <div className="footer-grid" style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1.2fr', gap:'clamp(28px,4vw,60px)', marginBottom:48 }}>

            {/* Brand column */}
            <div>
              <LogoMark/>
              <p className="body-sm" style={{ maxWidth:280, marginBottom:24, lineHeight:1.8 }}>
                Premium IT engineering partner. We design, build, and scale digital products that drive real business outcomes.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {[
                  { icon:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, v:CONTACT.email, h:`mailto:${CONTACT.email}` },
                  { icon:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, v:CONTACT.phone, h:`tel:${CONTACT.phoneRaw}` },
                ].map(c=>(
                  <a key={c.v} href={c.h} style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--f-d)', fontSize:12, color:'var(--t3)', transition:'color 0.2s', wordBreak:'break-all' }}
                    onMouseEnter={e=>e.currentTarget.style.color='var(--bl)'}
                    onMouseLeave={e=>e.currentTarget.style.color='var(--t3)'}>
                    <span style={{ color:'var(--t3)', flexShrink:0 }}>{c.icon}</span>{c.v}
                  </a>
                ))}
              </div>
            </div>

            {/* Pages */}
            <div>
              <p style={{ fontFamily:'var(--f-d)', fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:20 }}>Pages</p>
              {PAGES.map(p=>(
                <Link key={p.h} href={p.h} style={{ display:'block', fontFamily:'var(--f-d)', fontSize:13, color:'var(--t2)', marginBottom:10, transition:'color 0.2s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='var(--bl)'}
                  onMouseLeave={e=>e.currentTarget.style.color='var(--t2)'}>
                  {p.l}
                </Link>
              ))}
            </div>

            {/* Services */}
            <div>
              <p style={{ fontFamily:'var(--f-d)', fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:20 }}>Services</p>
              {SERVICES.map(s=>(
                <Link key={s} href="/services" style={{ display:'block', fontFamily:'var(--f-d)', fontSize:13, color:'var(--t2)', marginBottom:10, transition:'color 0.2s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='var(--bl)'}
                  onMouseLeave={e=>e.currentTarget.style.color='var(--t2)'}>
                  {s}
                </Link>
              ))}
            </div>

            {/* Connect */}
            <div>
              <p style={{ fontFamily:'var(--f-d)', fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:20 }}>Connect</p>
              <a href={SOCIAL.whatsapp2} target="_blank" rel="noopener noreferrer"
                style={{ display:'flex', alignItems:'center', gap:10, background:'rgba(37,211,102,0.07)', border:'1px solid rgba(37,211,102,0.15)', borderRadius:'var(--rl)', padding:'14px 16px', marginBottom:10, transition:'all 0.25s' }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(37,211,102,0.14)';e.currentTarget.style.borderColor='rgba(37,211,102,0.3)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(37,211,102,0.07)';e.currentTarget.style.borderColor='rgba(37,211,102,0.15)';}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                <div>
                  <div style={{ fontFamily:'var(--f-d)', fontSize:12, fontWeight:600, color:'#4ade80' }}>WhatsApp</div>
                  <div style={{ fontFamily:'var(--f-d)', fontSize:10, color:'var(--t3)' }}>{CONTACT.phone}</div>
                </div>
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                style={{ display:'flex', alignItems:'center', gap:10, background:'rgba(221,42,123,0.07)', border:'1px solid rgba(221,42,123,0.15)', borderRadius:'var(--rl)', padding:'14px 16px', marginBottom:10, transition:'all 0.25s' }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(221,42,123,0.14)';e.currentTarget.style.borderColor='rgba(221,42,123,0.3)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(221,42,123,0.07)';e.currentTarget.style.borderColor='rgba(221,42,123,0.15)';}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#dd2a7b" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="#dd2a7b" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="#dd2a7b"/></svg>
                <div>
                  <div style={{ fontFamily:'var(--f-d)', fontSize:12, fontWeight:600, color:'#f472b6' }}>Instagram</div>
                  <div style={{ fontFamily:'var(--f-d)', fontSize:10, color:'var(--t3)' }}>@rewantechsolutions</div>
                </div>
              </a>
              <Link href="/contact"
                style={{ display:'flex', alignItems:'center', gap:10, background:'var(--bg-b)', border:'1px solid var(--ln-b)', borderRadius:'var(--rl)', padding:'14px 16px', transition:'all 0.25s' }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(37,99,235,0.2)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='var(--bg-b)';}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--bl)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <div>
                  <div style={{ fontFamily:'var(--f-d)', fontSize:12, fontWeight:600, color:'var(--bl)' }}>Book a Call</div>
                  <div style={{ fontFamily:'var(--f-d)', fontSize:10, color:'var(--t3)' }}>Free 30-min consultation</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom-row" style={{ borderTop:'1px solid var(--bdr)', paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
            <p style={{ fontFamily:'var(--f-d)', fontSize:12, color:'var(--t3)' }}>
              © {new Date().getFullYear()} Rewan Tech Solutions. All rights reserved.
            </p>
            <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
              {['Privacy Policy','Terms of Service','Sitemap'].map(t=>(
                <span key={t} style={{ fontFamily:'var(--f-d)', fontSize:11, color:'var(--t4)', transition:'color 0.2s', cursor:'pointer' }}
                  onMouseEnter={e=>e.currentTarget.style.color='var(--bl)'}
                  onMouseLeave={e=>e.currentTarget.style.color='var(--t4)'}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
