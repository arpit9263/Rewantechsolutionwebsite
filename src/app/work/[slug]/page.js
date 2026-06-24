
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';
import { CASE_STUDIES, SITE } from '@/lib/config';

export function generateStaticParams() { return CASE_STUDIES.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const item = CASE_STUDIES.find((c) => c.slug === slug); if (!item) return {}; return { title: `${item.title} Case Study`, description: item.summary, alternates: { canonical: `${SITE.url}/work/${item.slug}` } }; }

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const item = CASE_STUDIES.find((c) => c.slug === slug);
  if (!item) notFound();
  return <Shell><PageHero eyebrow={item.industry} title={item.title} accent="case study" desc={item.summary} pill="Real project · No fake numbers" ctas={<><a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-p btn-lg">Visit Live Site →</a><Link href="/contact" className="btn btn-g btn-lg">Build Similar</Link></>} /><section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}><div className="ctr work-detail-grid" style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)', gap:'clamp(32px,5vw,72px)', alignItems:'start' }}><div className="card" style={{ padding:14 }}><Image src={item.image} alt={`${item.title} project screenshot`} width={900} height={560} style={{ borderRadius:'var(--rl)', width:'100%', height:'auto', objectFit:'cover' }} /></div><div style={{ display:'grid', gap:18 }}><div className="card-s" style={{ padding:'clamp(22px,3vw,30px)' }}><div className="ey" style={{ marginBottom:12 }}>Challenge</div><p className="body-sm">{item.challenge}</p></div><div className="card-s" style={{ padding:'clamp(22px,3vw,30px)' }}><div className="ey" style={{ marginBottom:12 }}>Solution</div><p className="body-sm">{item.solution}</p></div><div className="card-s" style={{ padding:'clamp(22px,3vw,30px)' }}><div className="ey" style={{ marginBottom:12 }}>Highlights</div><div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>{item.highlights.map((h)=><span key={h} className="tag" style={{ background:`${item.color}14`, color:item.color, border:`1px solid ${item.color}30` }}>{h}</span>)}</div></div></div></div></section><SectionCTA title="Want a case study like this?" sub="Let’s plan it" /></Shell>;
}
