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

const FAQS = {
  'Getting Started':[
    { q:'How do I get started with Rewan Tech?', a:'The easiest way is to book a free 30-minute discovery call via our Contact page, or ping us on WhatsApp. We\'ll understand your project, advise on approach, and send a detailed proposal within 24 hours.' },
    { q:'What information do I need before contacting you?', a:'Just a rough idea of what you want to build, your approximate timeline, and budget range. We\'ll ask the right questions on the call. No spec document needed.' },
    { q:'Do you work with international clients?', a:'Yes. We have active clients in India, UK, UAE, Singapore, and Australia. All communication is in English, and we work across time zones with async updates and recorded meetings.' },
    { q:'What size of company do you work with?', a:'Everything from solo founders building their first MVP to enterprises modernising legacy systems. Our sweet spot is seed-to-Series B startups and SMBs.' },
  ],
  'Pricing & Contracts':[
    { q:'How do you price projects?', a:'Fixed-price contracts. We scope the project, provide a detailed quote, you approve it — that\'s the final price. No hourly billing, no surprise invoices.' },
    { q:'What is your minimum project size?', a:'Our minimum engagement is ₹80,000. For ongoing retainers, the minimum is ₹8,000/month.' },
    { q:'Do you offer payment plans?', a:'Standard split: 40% upfront, 30% at mid-project milestone, 30% on delivery. For projects above ₹5L, we can discuss monthly installments.' },
    { q:'What happens if I run out of budget mid-project?', a:'We scope very carefully to prevent this. If needed, we\'ll pause the project and deliver everything completed to date with full handover documentation.' },
  ],
  'Technical Questions':[
    { q:'Which technologies do you use?', a:'We are framework-agnostic. Most-used: Next.js/React (frontend), Node.js/Python (backend), PostgreSQL/MongoDB (data), AWS/GCP/Vercel (cloud), React Native/Flutter (mobile).' },
    { q:'Do I own the code and intellectual property?', a:'100% yes. You own all code, designs, databases, and IP the moment it is delivered. We retain no rights whatsoever.' },
    { q:'Can you work with our existing codebase?', a:'Yes. We regularly join existing projects and conduct code audits. We\'ll do a technical assessment first and be honest about what we find.' },
    { q:'How do you handle data security?', a:'Security is first-class on every project: encrypted data at rest and in transit, principle of least privilege, regular dependency audits, and OWASP-aligned practices.' },
  ],
  'Project Management':[
    { q:'How will I know what progress is being made?', a:'Weekly written updates every Friday, fortnightly sprint demos, a shared project board you can check any time, and direct Slack access to your team.' },
    { q:'What if I want to change requirements mid-project?', a:'Small changes (under 4 hours) are absorbed. Larger changes go through a quick change-request process with transparent impact on timeline and budget.' },
    { q:'How long does a typical project take?', a:'Landing site: 3–5 weeks. Web app MVP: 8–14 weeks. Mobile app: 12–20 weeks. Full-stack product: 16–28 weeks.' },
    { q:'Do you work on weekends?', a:'Core hours are Mon–Fri 9am–7pm IST. For urgent post-launch issues, Pro and Retainer clients get weekend emergency support.' },
  ],
  'Post-Launch & Support':[
    { q:'What happens after my project launches?', a:'All projects include 1-month post-launch support (bug fixes). After that, continue on a monthly retainer (Basic ₹8K, Pro ₹18K, Dedicated ₹45K).' },
    { q:'Do you offer a warranty on your work?', a:'Yes. 3-month bug warranty on all projects. Pro and Scale package clients get 12 months.' },
    { q:'Can you take over support for an app you didn\'t build?', a:'Yes, after a technical audit (₹15,000 one-time). We\'ll assess code quality and infrastructure, then take over if we\'re satisfied.' },
  ],
};

const CATS = Object.keys(FAQS);

function AccItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom:'1px solid var(--bdr)' }}>
      <button className="acc-h" onClick={()=>setOpen(!open)} style={{ padding:'22px 0' }}>
        <span style={{ paddingRight:16 }}>{q}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform:open?'rotate(180deg)':'none', transition:'transform 0.3s', flexShrink:0, color:'var(--bl)' }}><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div style={{ overflow:'hidden', maxHeight:open?'600px':'0', transition:'max-height 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
        <div style={{ padding:'0 0 22px' }}>
          <p className="body-sm" style={{ lineHeight:1.82 }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [cat, setCat] = useState(CATS[0]);

  return (
    <Shell>
      <PageHero
        eyebrow="Questions answered"
        title="Everything you"
        accent="need to know"
        desc="Honest answers to every question we get asked — about pricing, process, technology, and support."
        ctas={<>
          <a href="https://wa.me/917992127047?text=I+have+a+question" target="_blank" className="btn btn-wa btn-lg">Ask on WhatsApp</a>
          <Link href="/contact" className="btn btn-g btn-lg">Book a Call</Link>
        </>}
      />

      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr">
          <div style={{ display:'grid', gridTemplateColumns:'220px 1fr', gap:'clamp(32px,5vw,60px)', alignItems:'start' }}>

            {/* Sidebar */}
            <div className="no-mob" style={{ position:'sticky', top:100 }}>
              <p style={{ fontFamily:'var(--f-d)', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:16 }}>Categories</p>
              {CATS.map(c=>(
                <button key={c} onClick={()=>setCat(c)} style={{
                  display:'flex', justifyContent:'space-between', alignItems:'center',
                  width:'100%', textAlign:'left', padding:'9px 13px', borderRadius:'var(--rl)', marginBottom:4,
                  fontFamily:'var(--f-d)', fontSize:13, fontWeight:cat===c?700:500,
                  color:cat===c?'var(--bl)':'var(--t2)',
                  background:cat===c?'var(--bg-b)':'transparent',
                  border:`1px solid ${cat===c?'var(--ln-b)':'transparent'}`,
                  transition:'all 0.2s',
                }}>
                  {c}
                  <span style={{ fontFamily:'var(--f-d)', fontSize:10, color:'var(--t3)' }}>{FAQS[c].length}</span>
                </button>
              ))}
              <div style={{ marginTop:28, background:'var(--bg3)', border:'1px solid var(--bdr)', borderRadius:'var(--rxl)', padding:20 }}>
                <p className="d4" style={{ fontSize:14, marginBottom:8 }}>Still have questions?</p>
                <p className="body-sm" style={{ marginBottom:14, lineHeight:1.7 }}>Book a free 30-min call. No pitch, just answers.</p>
                <Link href="/contact" className="btn btn-p btn-sm" style={{ width:'100%', justifyContent:'center' }}>Book a Call</Link>
              </div>
            </div>

            {/* FAQ content */}
            <div>
              {CATS.map(section=>(
                <div key={section} style={{ marginBottom:48, display:(cat===section||true)?'block':'none' }}>
                  <R>
                    <h2 className="d3" style={{ fontSize:'clamp(20px,2.5vw,30px)', marginBottom:24, paddingBottom:16, borderBottom:'2px solid var(--bdr)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      {section}
                      <span style={{ fontFamily:'var(--f-d)', fontSize:12, color:'var(--t3)', fontWeight:400 }}>{FAQS[section].length} questions</span>
                    </h2>
                    {FAQS[section].map((item,i)=>(
                      <AccItem key={i} {...item}/>
                    ))}
                  </R>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionCTA title="Didn't find your answer?" sub="We're here to help"/>
    </Shell>
  );
}
