'use client';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';

function R({ c='rv', d=0, children, style={}, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } }, { threshold:0.05 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={c} style={{ transitionDelay:`${d}s`, ...style }} {...rest}>{children}</div>;
}

const STEPS = [
  { n:'01', icon:'◎', title:'Discovery & Strategy', dur:'Week 1–2', color:'#3b82f6',
    what:'We immerse ourselves in your business, users, and competitive landscape before writing a single line of code.',
    activities:['Stakeholder discovery workshops','User research & persona mapping','Competitive analysis','Technical feasibility review','Risk identification'],
    delivers:['Product Brief document','Technical Architecture proposal','Project charter & KPIs','Risk register','Final quote & timeline'],
    client:'2–3 workshops, 4–6 hours of your time.' },
  { n:'02', icon:'◈', title:'Architecture & Planning', dur:'Week 2–3', color:'#06b6d4',
    what:'System design, technology selection, and sprint planning. Every feature mapped to a sprint before development begins.',
    activities:['System architecture design','Database schema design','API contract definition','Sprint backlog creation','Environment setup'],
    delivers:['Architecture diagram','ER diagram','API spec document','Sprint plan','Dev environment live'],
    client:'Review and approve architecture. One 1-hour sign-off call.' },
  { n:'03', icon:'✦', title:'UX Design & Prototype', dur:'Week 2–5', color:'#fb923c',
    what:'Wireframes, user flows, and a clickable high-fidelity prototype in Figma — before any code is written.',
    activities:['Information architecture','Lo-fi wireframes','User flow mapping','High-fidelity Figma designs','Interactive prototype','Usability testing (2 rounds)'],
    delivers:['Wireframe deck','High-fidelity Figma file','Clickable prototype','Design system','Usability test report'],
    client:'Review wireframes and hi-fi designs in 2 rounds. ~3–4 hours total.' },
  { n:'04', icon:'◉', title:'Agile Development', dur:'Week 4–16', color:'#34d399',
    what:'Two-week sprints. You see working software every fortnight. Shared Slack, live staging environment from week one.',
    activities:['Two-week sprint cycles','Daily standup (15 min)','End-of-sprint demo & review','Continuous integration','Code review & pair programming'],
    delivers:['Working features each sprint','Weekly progress report','Staging URL from Week 1','Sprint retrospective notes','Updated project board'],
    client:'Attend sprint demos (30 min every 2 weeks). Test on staging.' },
  { n:'05', icon:'◇', title:'QA & Testing', dur:'Week 14–17', color:'#a78bfa',
    what:'Rigorous multi-layer testing before anything goes near production. We don\'t ship until it\'s right.',
    activities:['Automated unit & integration tests','Cross-browser & device testing','Performance & load testing','Security vulnerability scan','UAT with your team'],
    delivers:['QA test report','Performance audit (Lighthouse)','Security scan results','UAT sign-off document','Bug fix log'],
    client:'Conduct user acceptance testing. Sign off on UAT document.' },
  { n:'06', icon:'⬡', title:'Launch & Go-Live', dur:'Week 17–18', color:'#f59e0b',
    what:'Zero-downtime deployment with full observability from minute one. We stay on call for 72 hours post-launch.',
    activities:['Production environment config','Zero-downtime deployment','DNS & SSL setup','Monitoring & alerting setup','72-hour launch watch','Team training'],
    delivers:['Live production app','Monitoring dashboards','Runbook / incident guide','Full source code handover','Video codebase walkthrough','Admin training session'],
    client:'DNS transfer (15 min guided). Attend 1-hour team training. You\'re live.' },
  { n:'07', icon:'◎', title:'Post-Launch Support', dur:'Ongoing', color:'#f43f5e',
    what:'Bug fixes, performance tuning, and new features — as a retainer or on-demand.',
    activities:['Bug monitoring & rapid fixes','Monthly security patches','Performance optimisation','Feature additions','Infrastructure scaling'],
    delivers:['Monthly health report','Patch notes','Priority Slack support (Pro)','Quarterly strategy review'],
    client:'Review monthly reports. Prioritise new feature requests.' },
];

export default function ProcessPage() {
  const [active, setActive] = useState(0);

  return (
    <Shell>
      <PageHero
        eyebrow="How we work"
        title="A process built for"
        accent="zero surprises"
        desc="Every engagement follows the same 7-phase process — battle-tested across 50+ projects. You always know exactly where your project stands."
        pill="7 defined phases"
        ctas={<>
          <Link href="/contact" className="btn btn-p btn-lg">Start Your Project →</Link>
          <Link href="/pricing" className="btn btn-g btn-lg">View Pricing</Link>
        </>}
      />

      {/* Process steps */}
      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr">
          <R style={{ marginBottom:'clamp(44px,5vw,64px)' }}>
            <div className="ey" style={{ marginBottom:14 }}>Step by step</div>
            <h2 className="d2" style={{ fontSize:'clamp(26px,4vw,52px)' }}>
              Seven phases.<br/><span className="grad">Every deliverable defined.</span>
            </h2>
          </R>

          {/* Desktop interactive layout */}
          <div className="no-mob" style={{ display:'grid', gridTemplateColumns:'320px 1fr', gap:1, background:'var(--bdr)', border:'1px solid var(--bdr)', borderRadius:'var(--r3)', overflow:'hidden' }}>
            {/* Step list */}
            <div style={{ background:'var(--bg3)' }}>
              {STEPS.map((s,i)=>(
                <button key={s.n} onClick={()=>setActive(i)} style={{
                  width:'100%', padding:'18px 22px',
                  display:'flex', alignItems:'center', gap:14,
                  borderLeft:`3px solid ${active===i?s.color:'transparent'}`,
                  background:active===i?`${s.color}08`:'transparent',
                  borderBottom:i<STEPS.length-1?'1px solid var(--bdr)':'none',
                  transition:'all 0.25s', textAlign:'left',
                }}>
                  <div style={{ width:38, height:38, borderRadius:'50%', background:active===i?`${s.color}18`:'var(--bg4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, color:active===i?s.color:'var(--t3)', flexShrink:0, transition:'all 0.25s' }}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily:'var(--f-d)', fontWeight:600, fontSize:14, letterSpacing:'-0.02em', color:active===i?s.color:'var(--t1)', transition:'color 0.25s' }}>{s.title}</div>
                    <div style={{ fontFamily:'var(--f-d)', fontSize:11, color:'var(--t3)', marginTop:2 }}>{s.dur}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div style={{ background:'var(--bg2)', padding:'clamp(28px,3.5vw,44px)' }} key={active}>
              {(() => {
                const s = STEPS[active];
                return (
                  <div style={{ animation:'slide-up 0.3s var(--ease)' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:22 }}>
                      <div style={{ width:44, height:44, borderRadius:'50%', background:`${s.color}18`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, color:s.color }}>{s.icon}</div>
                      <div>
                        <div style={{ fontFamily:'var(--f-d)', fontWeight:700, fontSize:20, letterSpacing:'-0.03em', color:s.color }}>{s.title}</div>
                        <div style={{ fontFamily:'var(--f-d)', fontSize:11, color:'var(--t3)' }}>{s.dur}</div>
                      </div>
                    </div>
                    <p className="body" style={{ fontSize:15, lineHeight:1.85, marginBottom:28 }}>{s.what}</p>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:20 }}>
                      <div style={{ background:'var(--bg3)', border:'1px solid var(--bdr)', borderRadius:'var(--rl)', padding:18 }}>
                        <p style={{ fontFamily:'var(--f-d)', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--t3)', marginBottom:12 }}>What we do</p>
                        {s.activities.map(a=>(
                          <div key={a} style={{ display:'flex', gap:8, marginBottom:8 }}>
                            <span style={{ color:s.color, fontSize:10, marginTop:3, flexShrink:0 }}>◆</span>
                            <span style={{ fontFamily:'var(--f-d)', fontSize:12, color:'var(--t2)' }}>{a}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ background:'var(--bg3)', border:`1px solid ${s.color}25`, borderRadius:'var(--rl)', padding:18 }}>
                        <p style={{ fontFamily:'var(--f-d)', fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:s.color, marginBottom:12 }}>Deliverables to you</p>
                        {s.delivers.map(d=>(
                          <div key={d} style={{ display:'flex', gap:8, marginBottom:8 }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2.5" style={{ flexShrink:0, marginTop:2 }}><polyline points="20 6 9 17 4 12"/></svg>
                            <span style={{ fontFamily:'var(--f-d)', fontSize:12, color:'var(--t2)' }}>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ background:`${s.color}0c`, border:`1px solid ${s.color}20`, borderRadius:'var(--rm)', padding:'14px 16px', display:'flex', gap:10 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" style={{ flexShrink:0, marginTop:1 }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <p style={{ fontFamily:'var(--f-d)', fontSize:13, color:s.color, lineHeight:1.65 }}><strong>Your role:</strong> {s.client}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Mobile stacked */}
          <div className="no-desk" style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {STEPS.map(s=>(
              <div key={s.n} style={{ background:'var(--bg3)', border:`1px solid var(--bdr)`, borderLeft:`3px solid ${s.color}`, borderRadius:'var(--rl)', padding:20 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                  <span style={{ fontSize:18, color:s.color }}>{s.icon}</span>
                  <div>
                    <div style={{ fontFamily:'var(--f-d)', fontWeight:700, fontSize:15, color:s.color }}>{s.title}</div>
                    <div style={{ fontFamily:'var(--f-d)', fontSize:11, color:'var(--t3)' }}>{s.dur}</div>
                  </div>
                </div>
                <p className="body-sm" style={{ lineHeight:1.78 }}>{s.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA title="Ready to kick off?" sub="Start your project"/>
    </Shell>
  );
}
