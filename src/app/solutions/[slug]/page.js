
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';
import { INDUSTRIES, SITE } from '@/lib/config';

const FEATURES = {
  healthcare: ['Appointment enquiry flows', 'Doctor and department pages', 'Emergency contact visibility', 'Patient trust and accessibility', 'Local SEO foundations', 'Mobile-first experience'],
  education: ['Admission and enquiry funnels', 'Course and class pages', 'Tutor/student workflows', 'Notice and update sections', 'Parent-friendly navigation', 'Lead capture forms'],
  travel: ['Destination showcases', 'Package landing pages', 'WhatsApp enquiry flows', 'Premium visual storytelling', 'Mobile travel discovery', 'SEO-ready destination structure'],
  technology: ['Product storytelling', 'SaaS-ready frontend', 'Admin dashboards', 'API-ready architecture', 'Investor and partner credibility', 'Scalable landing pages'],
};

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = INDUSTRIES.find((i) => i.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.desc, alternates: { canonical: `${SITE.url}/solutions/${item.slug}` } };
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  const item = INDUSTRIES.find((i) => i.slug === slug);
  if (!item) notFound();
  const list = FEATURES[item.slug] || [];
  return (
    <Shell>
      <PageHero eyebrow="Industry solution" title={item.title} accent="built for business outcomes" desc={item.desc} pill={`Proven through ${item.project}`} ctas={<><Link href="/contact" className="btn btn-p btn-lg">Get Industry Plan →</Link><Link href="/work" className="btn btn-g btn-lg">View Related Work</Link></>} />
      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr solution-grid" style={{ display:'grid', gridTemplateColumns:'minmax(0,0.9fr) minmax(0,1.1fr)', gap:'clamp(32px,5vw,72px)', alignItems:'start' }}>
          <div><div className="ey" style={{ marginBottom:16 }}>What we focus on</div><h2 className="d2" style={{ fontSize:'clamp(30px,4vw,54px)', marginBottom:18 }}>Useful features, not just pages.</h2><p className="body" style={{ fontSize:16, lineHeight:1.85 }}>Every industry has different trust signals and user journeys. We keep the same premium design system, but shape the structure around how your customers actually decide and take action.</p></div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap:14 }}>{list.map((f) => <div key={f} className="card-s" style={{ padding:20 }}><div style={{ width:9, height:9, borderRadius:'50%', background:item.color, boxShadow:`0 0 12px ${item.color}`, marginBottom:14 }} /><p style={{ fontFamily:'var(--f-d)', fontSize:14, fontWeight:700, color:'var(--t1)' }}>{f}</p></div>)}</div>
        </div>
      </section>
      <section className="sec-s" style={{ background:'var(--bg)', borderTop:'1px solid var(--bdr)' }}><div className="ctr" style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between' }}><p className="body" style={{ maxWidth:720 }}>Related proof: <strong style={{ color:'var(--t1)' }}>{item.project}</strong> shows our ability to design for this category with practical business goals and mobile-first execution.</p><Link href="/work" className="btn btn-o">View case studies</Link></div></section>
      <SectionCTA title="Let’s map your industry funnel" sub="Free consultation" />
    </Shell>
  );
}
