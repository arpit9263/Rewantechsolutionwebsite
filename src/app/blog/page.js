
'use client';
import Link from 'next/link';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';
import { BLOG_POSTS } from '@/lib/config';

export default function BlogPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Insights"
        title="Practical digital growth"
        accent="guides for businesses"
        desc="Simple, useful articles about websites, apps, AI, SEO and digital systems for growing organizations."
        pill="New guides added regularly"
        ctas={<Link href="/contact" className="btn btn-p btn-lg">Ask for a Free Audit →</Link>}
      />
      <section className="sec" style={{ background:'var(--bg2)', borderTop:'1px solid var(--bdr)' }}>
        <div className="ctr" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap:18 }}>
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card" style={{ padding:'clamp(26px,3vw,38px)', display:'block' }}>
              <span className="tag tag-b" style={{ marginBottom:18 }}>{post.category}</span>
              <h2 className="d3" style={{ fontSize:'clamp(22px,3vw,30px)', marginBottom:12 }}>{post.title}</h2>
              <p className="body-sm" style={{ lineHeight:1.8, marginBottom:22 }}>{post.excerpt}</p>
              <span style={{ fontFamily:'var(--f-d)', color:'var(--bl)', fontSize:13, fontWeight:700 }}>Read guide →</span>
            </Link>
          ))}
        </div>
      </section>
      <SectionCTA title="Need a custom digital strategy?" sub="Let’s talk" />
    </Shell>
  );
}
