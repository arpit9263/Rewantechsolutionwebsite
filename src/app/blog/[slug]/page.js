
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';
import { BLOG_POSTS, SITE } from '@/lib/config';

const CONTENT = {
  'hospital-website-development-cost-india': ['A hospital website is not just a brochure. It should help patients understand services, find doctors, access emergency contact information and submit enquiries without confusion.', 'Cost depends on design quality, number of pages, appointment flow, doctor profiles, SEO setup, performance needs and whether advanced features like dashboards or patient portals are required.', 'For most hospitals, the first version should focus on trust, mobile usability, fast loading, clear departments and easy WhatsApp or call access.'],
  'school-website-features': ['A school website should make communication easier for parents and improve trust for new admissions. The structure should be simple, fast and mobile-friendly.', 'Important sections include about, academics, admissions, notices, gallery, facilities, contact and enquiry forms. Schools can also add fee information, transport details and events when needed.', 'The best school websites do not overload visitors. They guide parents quickly toward admissions and contact actions.'],
  'mobile-app-development-cost-india': ['Mobile app cost depends on features, platforms, design complexity, backend systems, payment integration, notifications, admin panels and testing requirements.', 'A practical first version should focus on the core user journey instead of trying to build every feature at once. This reduces risk and improves launch speed.', 'After launch, analytics and user feedback should guide the second version.'],
};

export function generateStaticParams() { return BLOG_POSTS.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const post = BLOG_POSTS.find((p) => p.slug === slug); if (!post) return {}; return { title: post.title, description: post.excerpt, alternates: { canonical: `${SITE.url}/blog/${post.slug}` } }; }

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const paragraphs = CONTENT[post.slug] || [post.excerpt];
  return <Shell><PageHero eyebrow={post.category} title={post.title} accent="business guide" desc={post.excerpt} pill="Rewan Tech Solutions Insights" ctas={<Link href="/contact" className="btn btn-p btn-lg">Get Free Consultation →</Link>} /><section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}><article className="ctr" style={{ maxWidth:820 }}>{paragraphs.map((p) => <p key={p} className="body" style={{ fontSize:18, lineHeight:1.9, marginBottom:24 }}>{p}</p>)}<div className="card" style={{ padding:'clamp(24px,4vw,38px)', marginTop:34 }}><h2 className="d3" style={{ fontSize:'clamp(24px,3vw,34px)', marginBottom:14 }}>Need help applying this?</h2><p className="body-sm" style={{ marginBottom:22 }}>We can review your current website or idea and suggest a practical next step without changing your brand direction.</p><Link href="/contact" className="btn btn-p">Request audit</Link></div></article></section><SectionCTA title="Turn your idea into a plan" sub="Free audit available" /></Shell>;
}
