'use client';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
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

const SVC = [
  { n:'01', color:'#3b82f6', bg:'rgba(59,130,246,0.07)', bd:'rgba(59,130,246,0.2)',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title:'Web Development', tag:'High-performance apps that convert.',
    desc:'Production-grade web apps with Next.js, React, Node.js and TypeScript. From marketing sites to complex SaaS — every line optimised for performance, SEO and conversion.',
    feats:['Next.js / React / Vue','Node.js / NestJS APIs','PostgreSQL / MongoDB','REST & GraphQL','CI/CD pipelines','Core Web Vitals'],
    dels:['Technical spec & architecture','Figma design + assets','Full source code','Staging + production deploy','1-month post-launch support'],
    time:'6–16 weeks', price:'₹80,000+' },
  { n:'02', color:'#a78bfa', bg:'rgba(167,139,250,0.07)', bd:'rgba(167,139,250,0.2)',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>,
    title:'Mobile Apps', tag:'Native-quality iOS & Android.',
    desc:'Cross-platform apps in React Native and Flutter. We handle design, development, testing and App Store submission from start to finish.',
    feats:['React Native / Flutter','iOS & Android','Push notifications','Offline-first','App Store submission','Crash monitoring'],
    dels:['UX wireframes + prototype','iOS + Android builds','Store listings & assets','Post-launch monitoring','Full documentation'],
    time:'8–20 weeks', price:'₹1,20,000+' },
  { n:'03', color:'#f43f5e', bg:'rgba(244,63,94,0.07)', bd:'rgba(244,63,94,0.2)',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title:'AI & Machine Learning', tag:'AI that solves real problems.',
    desc:'LLM integration, custom ML models, and AI-powered features that drive measurable ROI. From intelligent chatbots to computer vision systems.',
    feats:['LLM integration','Custom ML models','NLP & text analytics','Computer vision','RAG / knowledge bases','MLOps & monitoring'],
    dels:['AI solution design','Trained & tested model','API + integration','Accuracy benchmarks','Monitoring dashboard'],
    time:'4–12 weeks', price:'₹60,000+' },
  { n:'04', color:'#06b6d4', bg:'rgba(6,182,212,0.07)', bd:'rgba(6,182,212,0.2)',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title:'Cloud & DevOps', tag:'Infrastructure that scales from day one.',
    desc:'Architect, migrate, and manage cloud infrastructure on AWS and GCP. CI/CD pipelines, container orchestration, and IaC that reduce ops burden and cost.',
    feats:['AWS / GCP / Azure','Kubernetes & Docker','Terraform IaC','GitHub Actions CI/CD','Auto-scaling','Cost optimisation'],
    dels:['Architecture diagram','IaC (Terraform)','CI/CD pipelines','Runbook docs','Cost forecast'],
    time:'2–8 weeks', price:'₹40,000+' },
  { n:'05', color:'#fb923c', bg:'rgba(251,146,60,0.07)', bd:'rgba(251,146,60,0.2)',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title:'UI/UX Design', tag:'Design that converts visitors.',
    desc:'End-to-end product design — research, wireframes, prototypes and a full design system. We make things beautiful and make them work harder for your business.',
    feats:['User research','Information architecture','Wireframes hi-fi','Figma design system','Interactive prototype','Usability testing'],
    dels:['Research report','Complete Figma file','Design system','Prototype link','Usability findings'],
    time:'3–8 weeks', price:'₹35,000+' },
  { n:'06', color:'#34d399', bg:'rgba(52,211,153,0.07)', bd:'rgba(52,211,153,0.2)',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
    title:'E-Commerce', tag:'Online stores that actually sell.',
    desc:'Custom Shopify stores and full-stack marketplaces built for conversion. Headless commerce, payments, inventory management and analytics out of the box.',
    feats:['Shopify / Headless','Multi-vendor support','Payment integration','Inventory management','SEO optimisation','Analytics & A/B'],
    dels:['Storefront design','Product management','Payment integration','SEO setup','Analytics dashboard'],
    time:'4–12 weeks', price:'₹70,000+' },
  { n:'07', color:'#f59e0b', bg:'rgba(245,158,11,0.07)', bd:'rgba(245,158,11,0.2)',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title:'Security & VAPT', tag:'Find vulnerabilities first.',
    desc:'Comprehensive vulnerability assessment and penetration testing, aligned with OWASP standards. We find and fix security gaps before attackers do.',
    feats:['OWASP Top 10','API pen testing','Auth & session testing','Infrastructure audit','Dependency scanning','GDPR compliance'],
    dels:['Executive summary','Technical vuln report','Severity ratings','Remediation roadmap','Retest certificate'],
    time:'2–4 weeks', price:'₹50,000+' },
  { n:'08', color:'#818cf8', bg:'rgba(129,140,248,0.07)', bd:'rgba(129,140,248,0.2)',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title:'Data & Analytics', tag:'Data-driven decisions.',
    desc:'Data pipelines, BI dashboards and analytics integrations that give you a live view of what matters — from GA4 to custom data warehouses.',
    feats:['Data warehouse setup','ETL pipeline design','BI dashboards','GA4 & event tracking','Funnel analytics','Predictive reporting'],
    dels:['Data architecture','ETL pipelines','Live dashboard','Event tracking plan','Reporting template'],
    time:'3–10 weeks', price:'₹45,000+' },
];

export default function ServicesPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="What we build"
        title="Every service you need"
        accent="under one roof"
        desc="From a landing page to an enterprise AI platform — fixed price, on time, with engineering quality that lasts."
        pill="8 core services"
        ctas={<>
          <Link href="/contact" className="btn btn-p btn-lg">Get a Quote →</Link>
          <Link href="/pricing" className="btn btn-g btn-lg">View Pricing</Link>
        </>}
      />

      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr">
          {SVC.map((s, i) => (
            <R key={s.n} c={i%2===0?'rv-l':'rv-r'} style={{
              display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
              gap:'clamp(28px,4vw,56px)', alignItems:'start',
              padding:'clamp(36px,5vw,60px) 0',
              borderBottom: i < SVC.length-1 ? '1px solid var(--bdr)' : 'none',
            }}>
              {/* Left */}
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:22 }}>
                  <div style={{ width:52, height:52, borderRadius:'var(--rl)', background:s.bg, border:`1px solid ${s.bd}`, display:'flex', alignItems:'center', justifyContent:'center', color:s.color }}>
                    {s.icon}
                  </div>
                  <span style={{ fontFamily:'var(--f-d)', fontWeight:700, fontSize:11, letterSpacing:'0.18em', color:s.color, textTransform:'uppercase' }}>{s.n}</span>
                </div>
                <h2 className="d3" style={{ fontSize:'clamp(26px,3vw,40px)', marginBottom:10, color:'var(--t1)' }}>{s.title}</h2>
                <p style={{ fontFamily:'var(--f-d)', fontWeight:600, fontSize:16, color:s.color, marginBottom:18, fontStyle:'italic' }}>{s.tag}</p>
                <p className="body" style={{ fontSize:15, lineHeight:1.85, marginBottom:28 }}>{s.desc}</p>
                <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:28 }}>
                  {s.feats.map(f => (
                    <span key={f} style={{ fontFamily:'var(--f-d)', fontSize:11, fontWeight:600, color:s.color, background:s.bg, border:`1px solid ${s.bd}`, padding:'4px 12px', borderRadius:'var(--rf)' }}>{f}</span>
                  ))}
                </div>
                <div style={{ display:'flex', gap:10, flexWrap:'wrap', alignItems:'center' }}>
                  <Link href="/contact" className="btn btn-p btn-sm">Get Quote</Link>
                  <span style={{ fontFamily:'var(--f-d)', fontSize:12, color:'var(--t3)', display:'flex', alignItems:'center', gap:5 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {s.time}
                  </span>
                </div>
              </div>

              {/* Right — deliverables card */}
              <div style={{ background:'var(--bg3)', border:`1px solid ${s.bd}`, borderRadius:'var(--rxl)', padding:'clamp(24px,3vw,36px)', position:'sticky', top:100 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:22, paddingBottom:18, borderBottom:'1px solid var(--bdr)' }}>
                  <div>
                    <div style={{ fontFamily:'var(--f-d)', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:5 }}>Starting price</div>
                    <div className="d3" style={{ fontSize:30, color:s.color }}>{s.price}</div>
                  </div>
                  <div style={{ background:s.bg, border:`1px solid ${s.bd}`, borderRadius:'var(--rm)', padding:'9px 14px', textAlign:'center' }}>
                    <div style={{ fontFamily:'var(--f-d)', fontSize:9, color:'var(--t3)', marginBottom:3, textTransform:'uppercase', letterSpacing:'0.1em' }}>Timeline</div>
                    <div style={{ fontFamily:'var(--f-d)', fontSize:12, fontWeight:700, color:s.color }}>{s.time}</div>
                  </div>
                </div>
                <p style={{ fontFamily:'var(--f-d)', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:14 }}>What you receive</p>
                {s.dels.map(d => (
                  <div key={d} style={{ display:'flex', gap:10, alignItems:'flex-start', marginBottom:10 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2.5" style={{ flexShrink:0, marginTop:2 }}><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ fontFamily:'var(--f-d)', fontSize:13, color:'var(--t2)' }}>{d}</span>
                  </div>
                ))}
                <a href={`https://wa.me/917992127047?text=Hi%2C+I%27m+interested+in+${encodeURIComponent(s.title)}`} target="_blank"
                  className="btn btn-wa" style={{ width:'100%', justifyContent:'center', marginTop:20 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </R>
          ))}
        </div>
      </section>

      <SectionCTA title="Ready to get started?" sub="Pick your service"/>
    </Shell>
  );
}
