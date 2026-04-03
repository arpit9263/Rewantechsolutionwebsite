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

const CASES = [
  {
    id:'finedge', title:'FinEdge Banking', cat:'Mobile · FinTech', color:'#a78bfa', bg:'rgba(167,139,250,0.05)',
    metrics:[{n:'50K+',l:'Active users'},{n:'4.8★',l:'App Store rating'},{n:'11wk',l:'Time to ship'},{n:'99.9%',l:'Uptime'}],
    challenge:'A fast-growing fintech needed a white-label banking app for their SMB clients — compliant, beautiful, and scalable to 100K users in year one.',
    solution:'We designed and built a React Native app with biometric auth, real-time transactions, account management and custom notifications. Backend on Node.js + PostgreSQL, deployed on AWS with auto-scaling.',
    stack:['React Native','Node.js','PostgreSQL','AWS','Redis','Stripe'],
    services:['Mobile App Development','Cloud & DevOps','UI/UX Design'],
    img:'💳',
  },
  {
    id:'shopnova', title:'ShopNova Marketplace', cat:'E-Commerce · Full Stack', color:'#06b6d4', bg:'rgba(6,182,212,0.05)',
    metrics:[{n:'₹2Cr+',l:'GMV / month'},{n:'<180ms',l:'Page load P95'},{n:'340+',l:'Active vendors'},{n:'12wk',l:'To launch'} ],
    challenge:'A marketplace startup wanted to go from zero to a multi-vendor platform with vendor onboarding, product management, and complex commission logic — in 12 weeks.',
    solution:'Full-stack Next.js marketplace with a custom vendor portal, automated payouts, Stripe Connect, Elasticsearch-powered search, and a real-time admin dashboard.',
    stack:['Next.js','PostgreSQL','Elasticsearch','Stripe Connect','Redis','Vercel'],
    services:['Web Development','UI/UX Design','Cloud & DevOps'],
    img:'🛍️',
  },
  {
    id:'mediassist', title:'MediAssist AI', cat:'AI/ML · Healthcare', color:'#f43f5e', bg:'rgba(244,63,94,0.05)',
    metrics:[{n:'94%',l:'Triage accuracy'},{n:'22',l:'Languages supported'},{n:'3s',l:'Response time'},{n:'60K',l:'Monthly queries'}],
    challenge:'A healthcare company needed an AI-powered symptom triage system that could operate across 22 Indian languages with clinical accuracy — meeting regulatory compliance.',
    solution:'We built a RAG-based AI engine fine-tuned on clinical data, with a multilingual NLP layer, human escalation flows, and a compliance-ready audit trail.',
    stack:['Python','FastAPI','OpenAI','LangChain','PostgreSQL','GCP'],
    services:['AI & Machine Learning','Web Development','Cloud & DevOps'],
    img:'🏥',
  },
  {
    id:'eduspark', title:'EduSpark LMS', cat:'EdTech · Web Platform', color:'#34d399', bg:'rgba(52,211,153,0.05)',
    metrics:[{n:'10K',l:'Active students'},{n:'0',l:'Downtime incidents'},{n:'4.9★',l:'Student rating'},{n:'68%',l:'Completion rate'}],
    challenge:'An EdTech startup needed a full-featured LMS with live sessions, recorded courses, assignments, certificates, and a teacher analytics dashboard — on a startup budget.',
    solution:'Custom LMS on Next.js with WebRTC-based live classrooms, Cloudflare-delivered video, auto-grading engine, and a comprehensive analytics suite.',
    stack:['Next.js','WebRTC','Cloudflare Stream','Node.js','PostgreSQL','AWS'],
    services:['Web Development','UI/UX Design','Cloud & DevOps'],
    img:'📚',
  },
  {
    id:'propstar', title:'PropStar Real Estate', cat:'PropTech · Web + Mobile', color:'#f59e0b', bg:'rgba(245,158,11,0.05)',
    metrics:[{n:'3D',l:'Virtual property tours'},{n:'AI',l:'Price valuation'},{n:'8K',l:'Listed properties'},{n:'40%',l:'Faster sales cycle'}],
    challenge:'A property platform wanted to stand out with immersive 3D tours and AI-powered valuations — differentiating in a commoditised market.',
    solution:'We built a platform with Three.js-powered 3D tour viewer, a GPT-4 based valuation assistant, WhatsApp lead integration, and a custom CRM for agents.',
    stack:['Next.js','Three.js','GPT-4 API','React Native','PostgreSQL','Vercel'],
    services:['Web Development','Mobile Apps','AI & ML','UI/UX Design'],
    img:'🏠',
  },
  {
    id:'logitrack', title:'LogiTrack Supply Chain', cat:'Logistics · Enterprise SaaS', color:'#818cf8', bg:'rgba(129,140,248,0.05)',
    metrics:[{n:'28%',l:'Cost reduction'},{n:'Real-time',l:'Fleet tracking'},{n:'12',l:'Integrations'},{n:'50+',l:'Enterprise clients'}],
    challenge:'A logistics company needed a real-time supply chain visibility platform integrating with 12 different ERPs, fleet tracking APIs and customs portals.',
    solution:'Enterprise SaaS with a custom integration layer, real-time GPS fleet dashboard, predictive ETA engine using historical data, and role-based client portal.',
    stack:['React','Node.js','PostgreSQL','Redis','Kafka','AWS EKS'],
    services:['Web Development','Cloud & DevOps','Data & Analytics'],
    img:'🚛',
  },
];

export default function WorkPage() {
  const [active, setActive] = useState(null);

  return (
    <Shell>
      <PageHero
        eyebrow="Selected work"
        title="Products we've shipped"
        accent="and scaled"
        desc="Six case studies across fintech, healthcare, e-commerce, edtech, proptech and enterprise SaaS. Real outcomes, real numbers."
        pill="50+ projects total"
        ctas={<>
          <Link href="/contact" className="btn btn-p btn-lg">Start Your Project →</Link>
          <a href="https://wa.me/917992127047" target="_blank" className="btn btn-wa btn-lg">WhatsApp Us</a>
        </>}
      />

      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:20 }}>
            {CASES.map((c, i) => (
              <R key={c.id} c="rv" d={i*0.07}>
                <div style={{
                  background:c.bg, border:'1px solid var(--bdr)',
                  borderRadius:'var(--r3)', overflow:'hidden',
                  transition:'all 0.4s var(--ease)',
                  cursor:'pointer',
                }}
                data-h
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=c.color+'40'; e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.boxShadow=`0 24px 60px ${c.color}15`; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--bdr)'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
                onClick={()=>setActive(active===c.id?null:c.id)}>

                  {/* Card header */}
                  <div style={{ padding:'clamp(24px,3vw,36px)', borderBottom:'1px solid var(--bdr)', position:'relative', overflow:'hidden' }}>
                    <div style={{ position:'absolute', top:-30, right:-30, width:120, height:120, borderRadius:'50%', background:`radial-gradient(circle,${c.color}20 0%,transparent 70%)`, pointerEvents:'none' }}/>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16, position:'relative', zIndex:1 }}>
                      <span style={{ fontSize:36 }}>{c.img}</span>
                      <span style={{ fontFamily:'var(--f-d)', fontSize:11, fontWeight:600, color:c.color, background:`${c.color}12`, border:`1px solid ${c.color}25`, padding:'4px 12px', borderRadius:'var(--rf)' }}>{c.cat}</span>
                    </div>
                    <h3 className="d3" style={{ fontSize:'clamp(20px,2.5vw,26px)', marginBottom:12, color:'var(--t1)', position:'relative', zIndex:1 }}>{c.title}</h3>
                    {/* Metrics mini row */}
                    <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8, position:'relative', zIndex:1 }}>
                      {c.metrics.map(m=>(
                        <div key={m.l} style={{ background:'var(--bg3)', borderRadius:'var(--rm)', padding:'10px 8px', textAlign:'center' }}>
                          <div style={{ fontFamily:'var(--f-d)', fontWeight:800, fontSize:14, color:c.color, letterSpacing:'-0.03em', marginBottom:2 }}>{m.n}</div>
                          <div style={{ fontFamily:'var(--f-d)', fontSize:9, color:'var(--t3)', lineHeight:1.3 }}>{m.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expand toggle */}
                  <button style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px clamp(24px,3vw,36px)', fontFamily:'var(--f-d)', fontSize:13, fontWeight:600, color:'var(--t2)', transition:'color 0.2s', background:'transparent' }}
                    onMouseEnter={e=>e.currentTarget.style.color=c.color}
                    onMouseLeave={e=>e.currentTarget.style.color='var(--t2)'}>
                    {active===c.id ? 'Hide details' : 'View case study'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform:active===c.id?'rotate(180deg)':'none', transition:'transform 0.35s' }}><polyline points="6 9 12 15 18 9"/></svg>
                  </button>

                  {/* Expanded detail */}
                  {active===c.id && (
                    <div style={{ padding:'0 clamp(24px,3vw,36px) clamp(24px,3vw,36px)', borderTop:'1px solid var(--bdr)', animation:'slide-up 0.35s var(--ease)' }}>
                      <div style={{ display:'grid', gap:20, marginTop:24 }}>
                        <div>
                          <p style={{ fontFamily:'var(--f-d)', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:10 }}>The challenge</p>
                          <p className="body-sm" style={{ lineHeight:1.8 }}>{c.challenge}</p>
                        </div>
                        <div>
                          <p style={{ fontFamily:'var(--f-d)', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:10 }}>Our solution</p>
                          <p className="body-sm" style={{ lineHeight:1.8 }}>{c.solution}</p>
                        </div>
                        <div>
                          <p style={{ fontFamily:'var(--f-d)', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:10 }}>Tech stack</p>
                          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                            {c.stack.map(t=>(
                              <span key={t} style={{ fontFamily:'var(--f-d)', fontSize:11, fontWeight:600, color:c.color, background:`${c.color}10`, border:`1px solid ${c.color}20`, padding:'3px 10px', borderRadius:'var(--rf)' }}>{t}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p style={{ fontFamily:'var(--f-d)', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:10 }}>Services delivered</p>
                          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                            {c.services.map(s=>(
                              <span key={s} style={{ fontFamily:'var(--f-d)', fontSize:11, fontWeight:600, color:'var(--t2)', background:'var(--bg3)', border:'1px solid var(--bdr)', padding:'3px 10px', borderRadius:'var(--rf)' }}>{s}</span>
                            ))}
                          </div>
                        </div>
                        <a href={`https://wa.me/917992127047?text=Hi%2C+I+want+to+build+something+similar+to+${encodeURIComponent(c.title)}`} target="_blank"
                          className="btn btn-wa" style={{ width:'100%', justifyContent:'center', marginTop:4 }}>
                          Build something similar
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA title="Inspired? Let's build yours." sub="Your project"/>
    </Shell>
  );
}
