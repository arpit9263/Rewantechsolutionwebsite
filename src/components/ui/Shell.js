'use client';
import Cursor from '@/components/ui/Cursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/ui/FloatingActions';
import Link from 'next/link';

export function Shell({ children }) {
  return (
    <main style={{ background:'var(--bg)', minHeight:'100vh', overflowX:'hidden' }}>
      <Cursor/>
      <Navbar/>
      {children}
      <Footer/>
      <FloatingActions/>
    </main>
  );
}

export function PageHero({ eyebrow, title, accent, desc, ctas, pill, align='left' }) {
  return (
    <section style={{
      background:'var(--bg)',
      padding:'clamp(130px,16vw,190px) clamp(20px,5vw,80px) clamp(72px,9vw,112px)',
      position:'relative', overflow:'hidden',
    }}>
      <div className="hero-grid" style={{ position:'absolute', inset:0, opacity:0.8, pointerEvents:'none' }}/>
      <div style={{ position:'absolute', top:'10%', left:'25%', width:700, height:500, borderRadius:'50%', background:'radial-gradient(ellipse,rgba(37,99,235,0.08) 0%,transparent 65%)', filter:'blur(40px)', pointerEvents:'none', animation:'glow-p 6s ease-in-out infinite' }}/>
      <div style={{ position:'absolute', bottom:'10%', right:'15%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(ellipse,rgba(6,182,212,0.07) 0%,transparent 65%)', filter:'blur(30px)', pointerEvents:'none', animation:'glow-p 8s ease-in-out infinite 2s' }}/>
      <div style={{ position:'absolute', left:0, right:0, height:80, background:'linear-gradient(to bottom,transparent,rgba(37,99,235,0.04),transparent)', animation:'scan 9s ease-in-out infinite', pointerEvents:'none' }}/>
      <div className="b-hr" style={{ position:'absolute', bottom:0, left:0, right:0 }}/>

      <div className="ctr" style={{ position:'relative', zIndex:1, maxWidth: align==='center'?860:900, margin: align==='center'?'0 auto':'0' }}>
        {pill && (
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'var(--bg-b)', border:'1px solid var(--ln-b)', borderRadius:'var(--rf)', padding:'6px 16px', marginBottom:24, animation:'rise 0.7s var(--ease) both' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--g)', display:'block', animation:'blink 2s ease infinite', boxShadow:'0 0 8px var(--g)' }}/>
            <span style={{ fontFamily:'var(--f-d)', fontSize:11, fontWeight:600, color:'var(--bl)', letterSpacing:'0.05em' }}>{pill}</span>
          </div>
        )}
        {eyebrow && <div className="ey" style={{ marginBottom:20, opacity:0, animation:'rise 0.7s 0.05s var(--ease) both', animationFillMode:'forwards', justifyContent: align==='center'?'center':'flex-start' }}>{eyebrow}</div>}
        <h1 className="d1" style={{ fontSize:'clamp(44px,7.5vw,98px)', marginBottom:20, opacity:0, animation:'rise 0.9s 0.15s var(--ease) both', animationFillMode:'forwards', color:'var(--t1)', textAlign: align==='center'?'center':'left' }}>
          {title}
          {accent && <><br/><span className="grad" style={{ fontStyle:'italic' }}>{accent}</span></>}
        </h1>
        {desc && (
          <p className="body" style={{ fontSize:'clamp(16px,1.8vw,20px)', maxWidth:520, marginBottom:ctas?44:0, opacity:0, animation:'rise 0.9s 0.25s var(--ease) both', animationFillMode:'forwards', lineHeight:1.82, margin: align==='center'?'0 auto':`0 0 ${ctas?'44px':'0'}` }}>{desc}</p>
        )}
        {ctas && (
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginTop:44, opacity:0, animation:'rise 0.9s 0.35s var(--ease) both', animationFillMode:'forwards', justifyContent: align==='center'?'center':'flex-start' }}>{ctas}</div>
        )}
      </div>
    </section>
  );
}

export function SectionCTA({ title, sub }) {
  return (
    <section style={{ background:'var(--bg2)', padding:'clamp(64px,9vw,112px) clamp(20px,5vw,80px)', position:'relative', overflow:'hidden', borderTop:'1px solid var(--bdr)' }}>
      <div className="dots" style={{ position:'absolute', inset:0, pointerEvents:'none', opacity:0.6 }}/>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:300, borderRadius:'50%', background:'radial-gradient(ellipse,rgba(37,99,235,0.07) 0%,transparent 70%)', pointerEvents:'none' }}/>
      <div className="ctr" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
        <div className="ey" style={{ justifyContent:'center', marginBottom:16 }}>{sub||"Ready to start?"}</div>
        <h2 className="d2" style={{ fontSize:'clamp(28px,4.5vw,58px)', marginBottom:16 }}>
          {title||"Let's build something"}<br/>
          <span className="grad">extraordinary</span>
        </h2>
        <p className="body" style={{ maxWidth:420, margin:'0 auto 40px', fontSize:16, lineHeight:1.82 }}>Free consultation · Fixed-price quote in 24h · No obligation.</p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/contact" className="btn btn-p btn-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Book Free Consultation
          </Link>
          <a href="https://wa.me/917992127047?text=Hi%2C+I+want+to+discuss+a+project" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
