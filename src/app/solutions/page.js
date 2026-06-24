
'use client';
import Link from 'next/link';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';
import { INDUSTRIES } from '@/lib/config';

export default function SolutionsPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Industry solutions"
        title="Digital systems for"
        accent="focused industries"
        desc="We bring domain-focused thinking to healthcare, education, travel and technology businesses without changing the proven engineering process."
        pill="Healthcare · Education · Travel · Technology"
        ctas={<><Link href="/contact" className="btn btn-p btn-lg">Discuss Your Industry →</Link><Link href="/work" className="btn btn-g btn-lg">View Work</Link></>}
      />
      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:18 }}>
          {INDUSTRIES.map((item) => (
            <Link key={item.slug} href={`/solutions/${item.slug}`} className="card" style={{ padding:'clamp(26px,3vw,38px)', display:'block' }}>
              <span className="tag" style={{ background:`${item.color}14`, color:item.color, border:`1px solid ${item.color}30`, marginBottom:18 }}>{item.project}</span>
              <h2 className="d3" style={{ fontSize:'clamp(24px,3vw,34px)', marginBottom:12 }}>{item.title}</h2>
              <p className="body-sm" style={{ lineHeight:1.8, marginBottom:22 }}>{item.desc}</p>
              <span style={{ fontFamily:'var(--f-d)', color:item.color, fontSize:13, fontWeight:700 }}>Explore solution →</span>
            </Link>
          ))}
        </div>
      </section>
      <SectionCTA title="Build a solution for your industry" sub="Ready for a focused plan?" />
    </Shell>
  );
}
