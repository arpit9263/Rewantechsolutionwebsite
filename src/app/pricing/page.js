'use client';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';

function R({ c='rv', d=0, children, style={}, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } }, { threshold:0.06 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={c} style={{ transitionDelay:`${d}s`, ...style }} {...rest}>{children}</div>;
}

const PACKAGES = [
  {
    name:'Starter', price:'₹80,000', unit:'one-time', featured:false, color:'#06b6d4',
    desc:'For startups validating an idea or businesses needing a professional web presence fast.',
    features:['Up to 8-page Next.js website','Custom Figma design (mobile-first)','Contact form & lead capture','SEO on-page optimisation','Google Analytics setup','1-month post-launch support','Deployed on Vercel/AWS','Source code ownership'],
    not:['Mobile app','Custom backend/API','AI features','E-commerce'],
    cta:'Get Started',
  },
  {
    name:'Growth', price:'₹2,50,000', unit:'one-time', featured:true, color:'#3b82f6',
    desc:'For businesses ready to build a serious product — a full web app or mobile app with backend.',
    features:['Full-stack web app or mobile app','Custom backend API (Node.js/Python)','Database design & setup','User authentication & roles','3rd-party integrations','Admin dashboard','CI/CD pipeline','AWS/GCP deployment','3-month post-launch support','Weekly sprint demos'],
    not:['AI/ML features','Multi-platform (web+mobile)'],
    cta:'Start Growth Project',
  },
  {
    name:'Scale', price:'₹6,00,000', unit:'one-time', featured:false, color:'#a78bfa',
    desc:'Complete digital transformation. Web + mobile + AI + cloud — the full stack, built for scale.',
    features:['Web app + iOS/Android mobile app','AI/ML integration (LLMs, recommendations)','Microservices architecture','Multi-tenant SaaS support','Advanced security & VAPT','Custom design system','Performance budget & load testing','6-month post-launch support','Dedicated project manager','Full IP ownership'],
    not:[],
    cta:'Start Scale Project',
  },
];

const ADDONS = [
  { name:'UI/UX Design Sprint', price:'₹35,000', desc:'5-day intensive design sprint. Wireframes + hi-fi Figma prototype.' },
  { name:'AI Chatbot Integration', price:'₹40,000', desc:'Custom LLM chatbot trained on your data, embedded in your product.' },
  { name:'VAPT Security Audit', price:'₹50,000', desc:'Full vulnerability assessment + penetration test + compliance report.' },
  { name:'SEO & Analytics Setup', price:'₹15,000', desc:'Technical SEO audit, GA4, Search Console, conversion tracking.' },
  { name:'Cloud Migration', price:'₹30,000', desc:'Migrate your app to AWS/GCP with zero downtime.' },
  { name:'Performance Optimisation', price:'₹20,000', desc:'Core Web Vitals audit + code-level optimisations for sub-2s load.' },
];

const RETAINERS = [
  { name:'Basic Care', price:'₹8,000/mo', features:['Bug fixes (up to 5 hours)','Monthly security patches','Uptime monitoring','Monthly health report'], color:'#06b6d4', featured:false },
  { name:'Pro Support', price:'₹18,000/mo', features:['Bug fixes (up to 15 hours)','Weekly deployments','Priority Slack support','Monthly analytics review'], color:'#3b82f6', featured:true },
  { name:'Dedicated Retainer', price:'₹45,000/mo', features:['Up to 40 hours/month dev','Feature additions','24/7 incident response','Weekly strategy call'], color:'#a78bfa', featured:false },
];

const FAQS = [
  { q:'Are these prices final or just estimates?', a:'Fixed-price contracts. We provide a quote, you approve it, and that\'s the final number. No hidden costs ever.' },
  { q:'Do you charge per hour or fixed price?', a:'Fixed-price only. You know the exact cost before work begins. For retainers, it\'s a flat monthly fee with defined allocation.' },
  { q:'What if my project falls between packages?', a:'Most projects are scoped individually. The packages are reference points. Book a call and we\'ll send a custom proposal within 24 hours.' },
  { q:'Is there a payment plan?', a:'Standard split: 40% upfront, 30% at mid-point, 30% on delivery. For projects above ₹5L, we can discuss monthly installments.' },
];

export default function PricingPage() {
  const [tab, setTab] = useState('packages');
  const [open, setOpen] = useState(null);

  return (
    <Shell>
      <PageHero
        eyebrow="Transparent pricing"
        title="No hidden costs."
        accent="Ever."
        desc="Fixed-price projects. You get a quote, you approve it, that's the final number — regardless of scope changes we caused."
        pill="Fixed-price guarantee"
      />

      {/* Tab selector */}
      <div style={{ background:'var(--bg2)', borderBottom:'1px solid var(--bdr)', padding:'0 clamp(20px,5vw,80px)', position:'sticky', top:68, zIndex:100, backdropFilter:'blur(20px)' }}>
        <div className="ctr">
          <div style={{ display:'flex', gap:0, overflowX:'auto' }}>
            {[{k:'packages',l:'Project Packages'},{k:'retainers',l:'Monthly Retainers'},{k:'addons',l:'Add-ons'}].map(t=>(
              <button key={t.k} onClick={()=>setTab(t.k)} style={{
                fontFamily:'var(--f-d)', fontSize:13, fontWeight:600, letterSpacing:'-0.01em',
                color:tab===t.k?'var(--bl)':'var(--t3)',
                padding:'18px 22px', borderBottom:`2px solid ${tab===t.k?'var(--bl)':'transparent'}`,
                transition:'all 0.25s', whiteSpace:'nowrap', background:'transparent',
              }}>{t.l}</button>
            ))}
          </div>
        </div>
      </div>

      {tab==='packages' && (
        <section className="sec" style={{ background:'var(--bg)', borderTop:'none' }}>
          <div className="ctr">
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:20, marginBottom:28 }}>
              {PACKAGES.map((p,i)=>(
                <R key={p.name} c="rv" d={i*0.09} style={{
                  background: p.featured ? 'var(--bg2)' : 'var(--bg2)',
                  border: `1px solid ${p.featured?p.color+'50':'var(--bdr)'}`,
                  borderRadius:'var(--r3)', padding:'clamp(28px,3.5vw,44px)',
                  position:'relative', overflow:'hidden',
                  boxShadow: p.featured ? `0 0 0 1px ${p.color}30, var(--sh-lg)` : 'none',
                  transform: p.featured ? 'scale(1.02)' : 'none',
                }}>
                  {p.featured && (
                    <>
                      <div style={{ position:'absolute', top:-1, left:'50%', transform:'translateX(-50%)', background:`linear-gradient(135deg,var(--b),var(--c))`, color:'white', fontFamily:'var(--f-d)', fontSize:10, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 20px', borderRadius:'0 0 var(--rm) var(--rm)' }}>
                        Most Popular
                      </div>
                      <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at top right,${p.color}08 0%,transparent 60%)`, pointerEvents:'none' }}/>
                    </>
                  )}
                  <div style={{ position:'relative', zIndex:1 }}>
                    <h3 className="d4" style={{ fontSize:20, marginBottom:8, color:'var(--t1)' }}>{p.name}</h3>
                    <div style={{ display:'flex', alignItems:'baseline', gap:6, marginBottom:14 }}>
                      <span className="d2" style={{ fontSize:36, color:p.color }}>{p.price}</span>
                      <span style={{ fontFamily:'var(--f-d)', fontSize:12, color:'var(--t3)' }}>{p.unit}</span>
                    </div>
                    <p className="body-sm" style={{ lineHeight:1.78, marginBottom:24 }}>{p.desc}</p>
                    <div style={{ borderTop:'1px solid var(--bdr)', paddingTop:20, marginBottom:p.not.length?20:24 }}>
                      {p.features.map(f=>(
                        <div key={f} style={{ display:'flex', gap:10, marginBottom:10 }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5" style={{ flexShrink:0, marginTop:2 }}><polyline points="20 6 9 17 4 12"/></svg>
                          <span style={{ fontFamily:'var(--f-d)', fontSize:13, color:'var(--t2)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    {p.not.length>0 && (
                      <div style={{ marginBottom:24 }}>
                        {p.not.map(f=>(
                          <div key={f} style={{ display:'flex', gap:10, marginBottom:8 }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--t4)" strokeWidth="2" style={{ flexShrink:0, marginTop:2 }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            <span style={{ fontFamily:'var(--f-d)', fontSize:12, color:'var(--t4)' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <Link href="/contact" className={`btn ${p.featured?'btn-p':'btn-o'}`} style={{ width:'100%', justifyContent:'center', padding:'15px' }}>
                      {p.cta} →
                    </Link>
                  </div>
                </R>
              ))}
            </div>
            <R style={{ background:'var(--bg-b)', border:'1px solid var(--ln-b)', borderRadius:'var(--rl)', padding:'20px 24px', display:'flex', gap:14, alignItems:'center', flexWrap:'wrap' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bl)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
              <p style={{ fontFamily:'var(--f-d)', fontSize:14, color:'var(--t2)', flex:1 }}>
                Need something custom? These are starting-point packages. Most projects are scoped individually.{' '}
                <Link href="/contact" style={{ color:'var(--bl)', fontWeight:700, textDecoration:'underline' }}>Get a free custom quote →</Link>
              </p>
            </R>
          </div>
        </section>
      )}

      {tab==='retainers' && (
        <section className="sec" style={{ background:'var(--bg)' }}>
          <div className="ctr">
            <R style={{ textAlign:'center', marginBottom:'clamp(44px,5vw,60px)' }}>
              <div className="ey" style={{ justifyContent:'center', marginBottom:14 }}>Monthly retainers</div>
              <h2 className="d2" style={{ fontSize:'clamp(26px,4vw,48px)' }}>Post-launch support &<br/><span className="grad">maintenance plans</span></h2>
              <p className="body" style={{ maxWidth:440, margin:'16px auto 0', fontSize:16 }}>We don't disappear after launch. Our retainer plans keep your product healthy, secure, and evolving.</p>
            </R>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20, maxWidth:1000, margin:'0 auto' }}>
              {RETAINERS.map((m,i)=>(
                <R key={m.name} c="rv" d={i*0.09} style={{
                  background:'var(--bg2)', border:`1px solid ${m.featured?m.color+'50':'var(--bdr)'}`,
                  borderRadius:'var(--rxl)', padding:'clamp(28px,3vw,40px)',
                  boxShadow:m.featured?`0 0 0 1px ${m.color}20,var(--sh-md)`:'none',
                }}>
                  {m.featured && <div style={{ marginBottom:12 }}><span style={{ fontFamily:'var(--f-d)', fontSize:10, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:m.color, background:`${m.color}15`, border:`1px solid ${m.color}25`, padding:'3px 12px', borderRadius:'var(--rf)' }}>Recommended</span></div>}
                  <h3 className="d4" style={{ fontSize:22, marginBottom:8, color:'var(--t1)' }}>{m.name}</h3>
                  <div className="d2" style={{ fontSize:30, marginBottom:20, color:m.color }}>{m.price}</div>
                  {m.features.map(f=>(
                    <div key={f} style={{ display:'flex', gap:10, marginBottom:10 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="2.5" style={{ flexShrink:0, marginTop:2 }}><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontFamily:'var(--f-d)', fontSize:14, color:'var(--t2)' }}>{f}</span>
                    </div>
                  ))}
                  <Link href="/contact" className="btn btn-p" style={{ marginTop:24, width:'100%', justifyContent:'center' }}>
                    Choose {m.name} →
                  </Link>
                </R>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab==='addons' && (
        <section className="sec" style={{ background:'var(--bg)' }}>
          <div className="ctr">
            <R style={{ marginBottom:'clamp(44px,5vw,60px)' }}>
              <div className="ey" style={{ marginBottom:14 }}>Optional add-ons</div>
              <h2 className="d2" style={{ fontSize:'clamp(26px,4vw,48px)' }}>Enhance any package</h2>
              <p className="body" style={{ maxWidth:440, marginTop:12, fontSize:16 }}>Add these services to any package at a fixed additional price.</p>
            </R>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:16 }}>
              {ADDONS.map((a,i)=>(
                <R key={a.name} c="rv" d={i*0.07} style={{
                  background:'var(--bg2)', border:'1px solid var(--bdr)',
                  borderRadius:'var(--rl)', padding:24,
                  transition:'all 0.35s var(--ease)',
                }}
                data-h
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--bdrb)';e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='var(--sh-b)';}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--bdr)';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
                    <h4 className="d4" style={{ fontSize:16 }}>{a.name}</h4>
                    <span style={{ fontFamily:'var(--f-d)', fontWeight:700, fontSize:16, color:'var(--bl)', whiteSpace:'nowrap', marginLeft:8 }}>{a.price}</span>
                  </div>
                  <p className="body-sm" style={{ fontSize:13, lineHeight:1.75 }}>{a.desc}</p>
                </R>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="sec-s" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr" style={{ maxWidth:760 }}>
          <R style={{ marginBottom:36 }}>
            <div className="ey" style={{ marginBottom:14 }}>Pricing questions</div>
            <h2 className="d3" style={{ fontSize:'clamp(24px,3.5vw,40px)' }}>Common questions about cost</h2>
          </R>
          {FAQS.map((f,i)=>(
            <R key={i} c="rv" d={i*0.06} style={{ borderBottom:'1px solid var(--bdr)' }}>
              <button className="acc-h" onClick={()=>setOpen(open===i?null:i)} style={{ padding:'22px 0' }}>
                <span style={{ paddingRight:16 }}>{f.q}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform:open===i?'rotate(180deg)':'none', transition:'transform 0.3s', flexShrink:0, color:'var(--bl)' }}><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              {open===i && (
                <div style={{ padding:'0 0 22px', animation:'slide-up 0.3s var(--ease)' }}>
                  <p className="body-sm" style={{ lineHeight:1.82 }}>{f.a}</p>
                </div>
              )}
            </R>
          ))}
        </div>
      </section>

      <SectionCTA title="Get your custom quote in 24 hours" sub="Invest in your product"/>
    </Shell>
  );
}
