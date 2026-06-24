
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';
import { SERVICE_PAGES, SITE } from '@/lib/config';

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICE_PAGES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: `${SITE.url}/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = SERVICE_PAGES.find((s) => s.slug === slug);
  if (!service) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero eyebrow="Service" title={service.title} accent={service.accent} desc={service.desc} pill="Strategy · Design · Development · Launch" ctas={<><Link href="/contact" className="btn btn-p btn-lg">Request Quote →</Link><Link href="/work" className="btn btn-g btn-lg">See Work</Link></>} />
      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap:'clamp(28px,5vw,64px)' }}>
          <div className="card" style={{ padding:'clamp(28px,4vw,44px)' }}>
            <div className="ey" style={{ marginBottom:16 }}>What you get</div>
            <h2 className="d3" style={{ fontSize:'clamp(24px,3vw,36px)', marginBottom:22 }}>Built with business goals in mind.</h2>
            <div style={{ display:'grid', gap:12 }}>{service.features.map((f) => <div key={f} className="tag tag-b" style={{ width:'fit-content' }}>{f}</div>)}</div>
          </div>
          <div className="card" style={{ padding:'clamp(28px,4vw,44px)' }}>
            <div className="ey" style={{ marginBottom:16 }}>Process</div>
            <h2 className="d3" style={{ fontSize:'clamp(24px,3vw,36px)', marginBottom:22 }}>A clear path from idea to launch.</h2>
            <div style={{ display:'grid', gap:14 }}>{service.process.map((p, i) => <div key={p} style={{ display:'flex', gap:12, alignItems:'flex-start' }}><span style={{ fontFamily:'var(--f-d)', fontSize:12, fontWeight:800, color:service.color }}>{String(i+1).padStart(2,'0')}</span><p className="body-sm" style={{ color:'var(--t1)' }}>{p}</p></div>)}</div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ background:'var(--bg)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr" style={{ maxWidth:960 }}>
          <div className="ey" style={{ justifyContent:'center', marginBottom:16 }}>FAQ</div>
          <h2 className="d2" style={{ textAlign:'center', fontSize:'clamp(28px,4vw,48px)', marginBottom:34 }}>Questions clients ask before starting</h2>
          <div style={{ display:'grid', gap:14 }}>{service.faqs.map(([q,a]) => <div key={q} className="card-s" style={{ padding:'clamp(20px,3vw,28px)' }}><h3 className="d4" style={{ fontSize:17, marginBottom:10 }}>{q}</h3><p className="body-sm">{a}</p></div>)}</div>
        </div>
      </section>
      <SectionCTA title={`Start your ${service.title.toLowerCase()} project`} sub="Get a practical plan" />
    </Shell>
  );
}
