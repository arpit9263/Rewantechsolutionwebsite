'use client';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';
import { CONTACT } from '@/lib/config';

function R({ c='rv', d=0, children, style={}, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } }, { threshold:0.06 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={c} style={{ transitionDelay:`${d}s`, ...style }} {...rest}>{children}</div>;
}

const VALUES = [
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, t:'Quality Without Compromise', d:'We would rather lose a project than ship something we\'re not proud of. Every commit, every pixel, every decision reflects our standard.', c:'#3b82f6' },
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, t:'Radical Transparency', d:'You see everything in real time — code commits, sprint demos, budget tracking. We communicate clearly, even when the news isn\'t good.', c:'#06b6d4' },
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>, t:'Partnership, Not Vendor', d:'We think about your business outcomes, not just your feature list. When you succeed, we succeed.', c:'#a78bfa' },
  { icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, t:'Continuous Improvement', d:'Technology evolves daily. We invest in learning so your products are always built with the best available tools and patterns.', c:'#34d399' },
];

const TEAM = [
  { name:'Manvendra Yadav', role:'CEO', bio:'CEO of Rewan Tech Solution and an Android & iOS developer. I build innovative, user-friendly mobile apps and lead tech solutions that turn ideas into impactful digital products, focusing on quality, performance, and great user experience.', g:'linear-gradient(135deg,#3b82f6,#06b6d4)', init:'MY', skills:['React','Node.js','System Design','Strategy'] },
  { name:'Satendra Singh', role:'HDM', bio:'Data Analyst and Digital Marketing Head with expertise in turning data into actionable insights and driving growth strategies. Skilled in analytics, campaigns, and market trends to optimize performance, enhance brand presence, and deliver measurable results.', g:'linear-gradient(135deg,#a78bfa,#3b82f6)', init:'SS', skills:['Node.js','AWS','Kubernetes','PostgreSQL'] },
  // { name:'Priya Kapoor', role:'Lead Designer', bio:'Product designer with 6 years at top agencies. Specialises in data-heavy interfaces, design systems, and mobile-first experiences. Design thinking certified.', g:'linear-gradient(135deg,#fb923c,#f43f5e)', init:'PK', skills:['Figma','Design Systems','UX Research','Prototyping'] },
  { name:'Manas Tripathi', role:'Business Analyst', bio:'Business Analyst and Lead Generation Specialist skilled in identifying growth opportunities, analyzing market trends, and driving data-backed strategies. Experienced in generating high-quality leads, optimizing sales funnels, and supporting business expansion through actionable insights.', g:'linear-gradient(135deg,#34d399,#06b6d4)', init:'MT', skills:['React Native','Flutter','iOS','Android'] },
  // { name:'Sneha Rao', role:'AI/ML Engineer', bio:'MSc in Data Science from IIT-B. Specialises in NLP, LLM fine-tuning, and production ML systems. Built AI models deployed at scale.', g:'linear-gradient(135deg,#f43f5e,#a78bfa)', init:'SR', skills:['Python','PyTorch','LangChain','MLOps'] },
  { name:'Arpit Yadav', role:'Senior Developer', bio:'DevOps Developer with expertise in CI/CD, cloud infrastructure, and automation. Experienced in optimizing deployment pipelines, improving system reliability, and ensuring scalable, secure environments.', g:'linear-gradient(135deg,#f59e0b,#fb923c)', init:'AY', skills:['AWS','Terraform','Docker','K8s'] },
];

const TIMELINE = [
  { y:'2021', t:'Founded', d:'Rewan started with a single client and a clear vision: engineering quality India deserved.' },
  { y:'2022', t:'First 10 clients', d:'Grew to a team of 4. Shipped first enterprise SaaS and first mobile app. 100% on-time record established.' },
  { y:'2023', t:'AI practice launched', d:'Hired our first ML engineer. Shipped MediAssist AI, our first healthcare AI product.' },
  { y:'2024', t:'25 projects milestone', d:'Team of 8. Expanded to cloud architecture and data engineering practices.' },
  { y:'2025', t:'International clients', d:'First clients in UK and UAE. Remote-first team of 12. 40+ projects shipped.' },
  { y:'2026+', t:'Scale', d:'Targeting 100+ projects milestone. Launching dedicated enterprise and startup packages.' },
];

export default function AboutPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="About Rewan Tech"
        title="Engineering excellence"
        accent="from India to the world"
        desc="We're a team of 12 engineers, designers, and product thinkers building digital products that matter — with honesty, craft, and accountability."
        pill="Est. 2021 · Fully remote"
        ctas={<>
          <Link href="/contact" className="btn btn-p btn-lg">Work With Us →</Link>
          <Link href="/work" className="btn btn-g btn-lg">See Our Work</Link>
        </>}
      />

      {/* Values */}
      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr">
          <R style={{ marginBottom:'clamp(44px,5vw,64px)' }}>
            <div className="ey" style={{ marginBottom:14 }}>What drives us</div>
            <h2 className="d2" style={{ fontSize:'clamp(28px,4vw,52px)' }}>
              Four beliefs we<br/><span className="grad">never compromise on</span>
            </h2>
          </R>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 }}>
            {VALUES.map((v,i)=>(
              <R key={v.t} c="rv" d={i*0.07} style={{
                background:'var(--bg3)', border:'1px solid var(--bdr)',
                borderRadius:'var(--rxl)', padding:'clamp(24px,3vw,36px)',
                transition:'all 0.4s var(--ease)',
              }}
              data-h
              onMouseEnter={e=>{e.currentTarget.style.borderColor=v.c+'40';e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow=`0 20px 50px ${v.c}15`;}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--bdr)';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>
                <div style={{ width:48, height:48, borderRadius:'var(--rl)', background:`${v.c}14`, border:`1px solid ${v.c}25`, display:'flex', alignItems:'center', justifyContent:'center', color:v.c, marginBottom:20 }}>
                  {v.icon}
                </div>
                <h3 className="d4" style={{ fontSize:17, marginBottom:10, color:'var(--t1)' }}>{v.t}</h3>
                <p className="body-sm" style={{ lineHeight:1.82 }}>{v.d}</p>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="sec" style={{ background:'var(--bg)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'clamp(40px,6vw,80px)', alignItems:'center' }}>
            <R c="rv-l">
              <div className="ey" style={{ marginBottom:16 }}>Meet the founder</div>
              <h2 className="d2" style={{ fontSize:'clamp(28px,4vw,52px)', marginBottom:20 }}>
                Sarita Devi<br/><span className="grad">Founder</span>
              </h2>
              <p className="body" style={{ fontSize:16, lineHeight:1.88, marginBottom:20 }}>
                I started Rewan Tech in 2021 with one belief: Indian engineers can build world-class products, and clients deserve to pay Indian prices for global quality.
              </p>
              <p className="body" style={{ fontSize:16, lineHeight:1.88, marginBottom:32 }}>
                I've spent 7+ years building software for startups and enterprises. I've seen what bad agencies do to good founders — hidden costs, missed deadlines, poor communication. I built Rewan Tech to be the opposite of all of that.  Direct communication. Code that lasts.
              </p>
              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <a href="https://wa.me/917992127047?text=Hi+Rewan%2C+I+want+to+discuss+a+project" target="_blank" className="btn btn-wa">
                  WhatsApp Rewan directly
                </a>
                <a href="mailto:rewantechsolutions@gmail.com" className="btn btn-g">
                  Send an Email
                </a>
              </div>
            </R>
            <R c="rv-r" style={{ transitionDelay:'0.12s' }}>
              <div style={{ background:'linear-gradient(135deg,rgba(37,99,235,0.1),rgba(6,182,212,0.08))', border:'1px solid var(--bdrb)', borderRadius:'var(--r3)', padding:'clamp(28px,3.5vw,44px)', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:-40, right:-40, width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle,rgba(37,99,235,0.15) 0%,transparent 70%)', pointerEvents:'none' }}/>
                {/* Avatar */}
                <div style={{ width:80, height:80, borderRadius:'50%', background:'linear-gradient(135deg,#3b82f6,#06b6d4)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--f-d)', fontWeight:800, fontSize:26, color:'white', marginBottom:20, boxShadow:'0 0 24px rgba(37,99,235,0.4)', position:'relative', zIndex:1 }}>
                  SD
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, position:'relative', zIndex:1 }}>
                  {[{n:'7+',l:'Years exp'},{n:'50+',l:'Projects'},{n:'40+',l:'Clients'},{n:'100%',l:'On time'}].map(s=>(
                    <div key={s.l} style={{ background:'var(--bg3)', borderRadius:'var(--rl)', padding:'16px 14px', border:'1px solid var(--bdr)' }}>
                      <div className="stat-n" style={{ fontSize:24, marginBottom:4 }}>{s.n}</div>
                      <div style={{ fontFamily:'var(--f-d)', fontSize:11, color:'var(--t3)' }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:20, position:'relative', zIndex:1 }}>
                  <p style={{ fontFamily:'var(--f-d)', fontSize:11, color:'var(--t3)', marginBottom:6 }}>Contact</p>
                  <p style={{ fontFamily:'var(--f-d)', fontSize:13, fontWeight:600, color:'var(--bl)' }}>{CONTACT.phone}</p>
                  <p style={{ fontFamily:'var(--f-d)', fontSize:13, color:'var(--t2)' }}>{CONTACT.email}</p>
                </div>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr">
          <R style={{ textAlign:'center', marginBottom:'clamp(44px,5vw,64px)' }}>
            <div className="ey" style={{ justifyContent:'center', marginBottom:14 }}>The team</div>
            <h2 className="d2" style={{ fontSize:'clamp(26px,4vw,52px)' }}>
              4 specialists.<br/><span className="grad">One standard.</span>
            </h2>
          </R>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:16 }}>
            {TEAM.map((m,i)=>(
              <R key={m.name} c="rv" d={i*0.07} style={{
                background:'var(--bg3)', border:'1px solid var(--bdr)',
                borderRadius:'var(--rxl)', padding:'clamp(24px,2.5vw,32px)',
                transition:'all 0.4s var(--ease)',
              }}
              data-h
              onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--bdrb)';e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='var(--sh-b),var(--sh-md)';}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--bdr)';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>
                <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:16 }}>
                  <div style={{ width:52, height:52, borderRadius:'50%', background:m.g, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--f-d)', fontWeight:800, fontSize:16, color:'white', flexShrink:0 }}>{m.init}</div>
                  <div>
                    <div className="d4" style={{ fontSize:16, color:'var(--t1)' }}>{m.name}</div>
                    <div style={{ fontFamily:'var(--f-d)', fontSize:11, color:'var(--t3)', marginTop:2 }}>{m.role}</div>
                  </div>
                </div>
                <p className="body-sm" style={{ lineHeight:1.78, marginBottom:16 }}>{m.bio}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                  {/* {m.skills.map(s=>(
                    <span key={s} style={{ fontFamily:'var(--f-d)', fontSize:10, fontWeight:600, color:'var(--bl)', background:'var(--bg-b)', border:'1px solid var(--ln-b)', padding:'3px 10px', borderRadius:'var(--rf)' }}>{s}</span>
                  ))} */}
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="sec" style={{ background:'var(--bg)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr" style={{ maxWidth:860 }}>
          <R style={{ marginBottom:'clamp(44px,5vw,64px)' }}>
            <div className="ey" style={{ marginBottom:14 }}>Our story</div>
            <h2 className="d2" style={{ fontSize:'clamp(26px,4vw,48px)' }}>
              5 years of<br/><span className="grad">building & shipping</span>
            </h2>
          </R>
          <div style={{ position:'relative' }}>
            <div className="b-vr" style={{ position:'absolute', left:36, top:0, bottom:0 }}/>
            {TIMELINE.map((t,i)=>(
              <R key={t.y} c="rv-l" d={i*0.08} style={{ display:'flex', gap:28, marginBottom:36 }}>
                <div style={{ width:72, height:72, borderRadius:'50%', background:'var(--bg2)', border:'2px solid var(--bdrb)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', flexShrink:0, zIndex:1, position:'relative' }}>
                  <span style={{ fontFamily:'var(--f-d)', fontWeight:800, fontSize:13, color:'var(--bl)', letterSpacing:'-0.03em' }}>{t.y}</span>
                </div>
                <div style={{ background:'var(--bg2)', border:'1px solid var(--bdr)', borderRadius:'var(--rxl)', padding:'20px 24px', flex:1, transition:'all 0.3s' }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--bdrb)';}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--bdr)';}}>
                  <div className="d4" style={{ fontSize:16, marginBottom:6, color:'var(--t1)' }}>{t.t}</div>
                  <p className="body-sm">{t.d}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA title="Ready to work together?" sub="Let's build"/>
    </Shell>
  );
}
