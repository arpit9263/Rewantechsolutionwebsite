'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Shell, PageHero, SectionCTA } from '@/components/ui/Shell';

function R({ c = 'rv', d = 0, children, style = {}, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.unobserve(el);
        }
      },
      { threshold: 0.06 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={c}
      style={{ transitionDelay: `${d}s`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

const CASES = [
  {
    id: 'edunest',
    title: 'EduNest',
    cat: 'EdTech · Tutor Matching Platform',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.05)',
    liveUrl: 'https://edunest.org.in/',
    metrics: [
      { n: '2', l: 'Cities served' },
      { n: 'Nursery–12', l: 'Academic coverage' },
      { n: 'Home + Online', l: 'Learning modes' },
      { n: 'JEE / NEET', l: 'Exam support' },
    ],
    challenge:
      'EduNest needed a clean and trust-building platform for parents looking for home or online tutors, while also creating a separate application flow for tutors. The website had to feel simple, local, and conversion-focused for Jhansi and Indore.',
    solution:
      'We designed and developed a modern lead-focused education website with separate journeys for parents and tutors, city-based service positioning, structured subject coverage, WhatsApp-first contact flow, and forms built for enquiry capture and future automation readiness.',
    stack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Form Handling',
      'WhatsApp Integration',
      'Responsive UI',
    ],
    services: [
      'Web Development',
      'UI/UX Design',
      'Lead Generation Flow',
      'Responsive Design',
    ],
    highlights: [
      'Separate trust-focused user journeys for parents and tutors',
      'Strong local positioning for Jhansi and Indore audiences',
      'Lead capture flow designed for better enquiry conversion',
      'Responsive frontend built for mobile-first discovery',
    ],
    img: '🎓',
  },
  {
    id: 'evhalt',
    title: 'EV Halt',
    cat: 'EV Infrastructure · Charging Network',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.05)',
    liveUrl: 'https://www.evhalt.com/',
    metrics: [
      { n: '350+', l: 'Stations' },
      { n: '28', l: 'Cities' },
      { n: '12', l: 'Highway corridors' },
      { n: 'Solar-ready', l: 'Network focus' },
    ],
    challenge:
      'EV Halt needed a brand-first website that communicates trust, speed, and scale in India’s growing EV charging market. The platform had to present the network clearly while supporting product credibility for charging infrastructure and expansion.',
    solution:
      'We created a sharp, modern EV website experience focused on charging network visibility, expansion messaging, fast-access CTAs, strong visual hierarchy, and business-ready storytelling for both drivers and infrastructure partners.',
    stack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Brand UI System',
      'Landing Experience',
      'Performance Optimisation',
    ],
    services: [
      'Web Development',
      'Brand-Focused UI/UX',
      'Conversion Landing Design',
      'Responsive Engineering',
    ],
    highlights: [
      'Premium EV visual language aligned with the charging domain',
      'Strong business storytelling for customers and partners',
      'Fast CTA-driven structure for clearer action paths',
      'Responsive layout with sharper trust and scale messaging',
    ],
    img: '⚡',
  },
  {
    id: 'travelsuru',
    title: 'Travel Suru',
    cat: 'Travel · Booking & Tour Enquiry Website',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.05)',
    liveUrl: 'https://travelsuru.com/',
    metrics: [
      { n: 'Custom', l: 'Travel packages' },
      { n: 'Family', l: 'Trip planning focus' },
      { n: 'Seamless', l: 'Travel support' },
      { n: 'Enquiry-led', l: 'Lead model' },
    ],
    challenge:
      'Travel Suru needed a digital presence that makes tour discovery feel easier, warmer, and more trustworthy. The site had to support enquiry-based conversion for holiday packages, itineraries, and destination planning.',
    solution:
      'We built a travel-business website structure around destination storytelling, trip enquiry intent, package presentation, and mobile-friendly lead generation so visitors can quickly move from browsing to contacting the business.',
    stack: [
      'Next.js',
      'React',
      'Responsive Layout',
      'Service Pages',
      'Lead Forms',
      'Business Website Architecture',
    ],
    services: [
      'Web Development',
      'UI/UX Design',
      'Service Website Structuring',
      'Mobile Optimisation',
    ],
    highlights: [
      'Warm travel storytelling built around package enquiries',
      'Simple structure for quick browsing and conversion',
      'Mobile-friendly design for on-the-go users',
      'Clear service presentation for business growth',
    ],
    img: '✈️',
  },
  {
    id: 'knightman',
    title: 'Knightman Security Services',
    cat: 'Security Services · Business Website',
    color: '#818cf8',
    bg: 'rgba(129,140,248,0.05)',
    liveUrl: 'https://knightman.in/',
    metrics: [
      { n: 'Schools', l: 'Service segment' },
      { n: 'Hotels', l: 'Service segment' },
      { n: 'Hospitals', l: 'Service segment' },
      { n: 'Societies', l: 'Service segment' },
    ],
    challenge:
      'Knightman needed a business website that presents its security services with more credibility and clarity. The website had to communicate professionalism, operational trust, and sector coverage for commercial and residential clients.',
    solution:
      'We structured the site around service trust signals, clear business positioning, and easy enquiry pathways so Knightman can present itself as a serious, high-quality security services provider across key use cases.',
    stack: [
      'Next.js',
      'React',
      'Corporate UI',
      'Service Positioning',
      'Lead Capture',
      'Responsive Frontend',
    ],
    services: [
      'Web Development',
      'Corporate UI/UX',
      'Business Positioning',
      'Conversion Flow Design',
    ],
    highlights: [
      'Professional visual direction built around trust',
      'Sector-based service positioning for credibility',
      'Easy enquiry paths for business leads',
      'Clear and serious frontend presentation',
    ],
    img: '🛡️',
  },
  {
    id: 'aarbhay',
    title: 'Aarbhay Beverages',
    cat: 'Beverages · Brand Website',
    color: '#f43f5e',
    bg: 'rgba(244,63,94,0.05)',
    liveUrl: 'https://aarbhaybeverages.com/',
    metrics: [
      { n: 'Brand', l: 'Digital presence' },
      { n: 'Responsive', l: 'User experience' },
      { n: 'Scalable', l: 'Website foundation' },
      { n: 'Modern', l: 'Business identity' },
    ],
    challenge:
      'Aarbhay Beverages required an online foundation that supports a growing beverage business with stronger brand presence, legitimacy, and future marketing readiness. The site needed to look polished while staying simple and expandable.',
    solution:
      'We developed a clean business presence for the brand with product and business storytelling, trust-oriented layout, mobile responsiveness, and a structure that can scale into a stronger beverage marketing site as the brand grows.',
    stack: [
      'Next.js',
      'React',
      'Responsive UI',
      'Brand Layout System',
      'Business Content Structure',
      'SEO-Ready Frontend',
    ],
    services: [
      'Web Development',
      'Brand UI/UX',
      'Business Website Setup',
      'Responsive Design',
    ],
    highlights: [
      'Clean and polished frontend for an emerging brand',
      'Scalable website foundation for future campaigns',
      'Trust-focused business storytelling',
      'Responsive design for broader reach',
    ],
    img: '🥤',
  },
];

function MetricCard({ metric, color, compact = false }) {
  return (
    <div
      style={{
        background: 'var(--bg3)',
        borderRadius: 'var(--rm)',
        padding: compact ? '10px 8px' : '12px 10px',
        textAlign: 'center',
        minHeight: compact ? 60 : 68,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid transparent',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--f-d)',
          fontWeight: 800,
          fontSize: compact ? 14 : 15,
          color,
          letterSpacing: '-0.03em',
          marginBottom: 4,
        }}
      >
        {metric.n}
      </div>
      <div
        style={{
          fontFamily: 'var(--f-d)',
          fontSize: compact ? 9 : 10,
          color: 'var(--t3)',
          lineHeight: 1.35,
        }}
      >
        {metric.l}
      </div>
    </div>
  );
}

function Chip({ children, color, subtle = false }) {
  return (
    <span
      style={{
        fontFamily: 'var(--f-d)',
        fontSize: 11,
        fontWeight: 600,
        color: subtle ? 'var(--t2)' : color,
        background: subtle ? 'var(--bg3)' : `${color}10`,
        border: subtle ? '1px solid var(--bdr)' : `1px solid ${color}20`,
        padding: '4px 10px',
        borderRadius: 'var(--rf)',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: 'var(--f-d)',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--t3)',
        marginBottom: 10,
      }}
    >
      {children}
    </p>
  );
}

function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(2,6,23,0.70)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(1120px, 100%)',
          maxHeight: '88vh',
          overflowY: 'auto',
          borderRadius: 'var(--r3)',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(180deg, #0b1220 0%, #101827 100%)',
          boxShadow: '0 30px 80px rgba(2,6,23,0.45)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            padding: '18px 20px',
            background: 'rgba(8,15,28,0.88)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '14px',
                background: `${project.color}12`,
                border: `1px solid ${project.color}25`,
                display: 'grid',
                placeItems: 'center',
                fontSize: 22,
                flexShrink: 0,
              }}
            >
              {project.img}
            </div>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: 'var(--f-d)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: project.color,
                  marginBottom: 4,
                }}
              >
                Case Study
              </div>
              <div
                style={{
                  fontFamily: 'var(--f-d)',
                  fontSize: 18,
                  fontWeight: 800,
                  color: '#f8fafc',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {project.title}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 42,
              height: 42,
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
              color: '#cbd5e1',
              fontSize: 18,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: 'clamp(22px,3vw,34px)' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--r3)',
              overflow: 'hidden',
              marginBottom: 20,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -34,
                right: -34,
                width: 140,
                height: 140,
                borderRadius: '50%',
                background: `radial-gradient(circle,${project.color}24 0%,transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                padding: 'clamp(24px,3vw,36px)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 16,
                  marginBottom: 16,
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontSize: 40 }}>{project.img}</span>

                <span
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontSize: 11,
                    fontWeight: 600,
                    color: project.color,
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}25`,
                    padding: '4px 12px',
                    borderRadius: 'var(--rf)',
                  }}
                >
                  {project.cat}
                </span>
              </div>

              <h2
                className="d3"
                style={{
                  fontSize: 'clamp(28px,4vw,40px)',
                  marginBottom: 12,
                  color: '#f8fafc',
                  lineHeight: 1.02,
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  margin: 0,
                  maxWidth: 760,
                  color: '#94a3b8',
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                A premium, conversion-focused digital experience designed to improve
                brand clarity, trust, and business presentation.
              </p>
            </div>

            <div
              style={{
                padding: 'clamp(24px,3vw,36px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
                gap: 10,
              }}
              className="case-metric-grid"
            >
              {project.metrics.map((metric) => (
                <MetricCard
                  key={`${project.id}-${metric.l}`}
                  metric={metric}
                  color={project.color}
                  compact
                />
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: 20,
            }}
            className="case-modal-grid"
          >
            <div style={{ display: 'grid', gap: 20 }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r3)',
                  padding: '24px',
                }}
              >
                <SectionLabel>The challenge</SectionLabel>
                <p className="body-sm" style={{ lineHeight: 1.9, margin: 0, color: '#cbd5e1' }}>
                  {project.challenge}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r3)',
                  padding: '24px',
                }}
              >
                <SectionLabel>Our solution</SectionLabel>
                <p className="body-sm" style={{ lineHeight: 1.9, margin: 0, color: '#cbd5e1' }}>
                  {project.solution}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r3)',
                  padding: '24px',
                }}
              >
                <SectionLabel>Project highlights</SectionLabel>

                <div style={{ display: 'grid', gap: 12 }}>
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        padding: '14px 14px',
                        borderRadius: 'var(--rm)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: '999px',
                          background: `${project.color}14`,
                          color: project.color,
                          border: `1px solid ${project.color}25`,
                          display: 'grid',
                          placeItems: 'center',
                          fontSize: 12,
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        ✓
                      </div>

                      <div
                        style={{
                          color: '#cbd5e1',
                          lineHeight: 1.75,
                          fontSize: 14,
                        }}
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 20 }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r3)',
                  padding: '24px',
                }}
              >
                <SectionLabel>Tech stack</SectionLabel>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.stack.map((item) => (
                    <Chip key={item} color={project.color}>
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r3)',
                  padding: '24px',
                }}
              >
                <SectionLabel>Services delivered</SectionLabel>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.services.map((item) => (
                    <Chip key={item} color={project.color} subtle>
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r3)',
                  padding: '24px',
                }}
              >
                <SectionLabel>Quick actions</SectionLabel>

                <div style={{ display: 'grid', gap: 10 }}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-s"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Visit live project
                  </a>

                  <a
                    href={`https://wa.me/917992127047?text=${encodeURIComponent(
                      `Hi, I want to build a project similar to ${project.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-wa"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Build something similar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .case-modal-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }

          .case-metric-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          @media (max-width: 960px) {
            .case-modal-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            .case-metric-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Shell>
      <PageHero
        eyebrow="Selected work"
        title="Real projects we've designed"
        accent="and delivered"
        desc="A closer look at some of the brands and businesses we’ve helped with modern websites, stronger digital presence, and conversion-focused experiences."
        pill="5 featured client projects"
        ctas={
          <>
            <Link href="/contact" className="btn btn-p btn-lg">
              Start Your Project →
            </Link>
            <a
              href="https://wa.me/917992127047"
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa btn-lg"
            >
              WhatsApp Us
            </a>
          </>
        }
      />

      <section
        className="sec"
        style={{
          background: 'var(--bg2)',
          borderTop: '1px solid var(--bdr)',
        }}
      >
        <div className="ctr">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))',
              gap: 20,
            }}
          >
            {CASES.map((c, i) => (
              <R key={c.id} c="rv" d={i * 0.07}>
                <div
                  style={{
                    background: c.bg,
                    border: '1px solid var(--bdr)',
                    borderRadius: 'var(--r3)',
                    overflow: 'hidden',
                    transition: 'all 0.4s var(--ease)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'default',
                  }}
                  data-h
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${c.color}40`;
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 24px 60px ${c.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--bdr)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      padding: 'clamp(24px,3vw,36px)',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: -30,
                        right: -30,
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        background: `radial-gradient(circle,${c.color}20 0%,transparent 70%)`,
                        pointerEvents: 'none',
                      }}
                    />

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 16,
                        gap: 12,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <span style={{ fontSize: 36 }}>{c.img}</span>
                      <span
                        style={{
                          fontFamily: 'var(--f-d)',
                          fontSize: 11,
                          fontWeight: 600,
                          color: c.color,
                          background: `${c.color}12`,
                          border: `1px solid ${c.color}25`,
                          padding: '4px 12px',
                          borderRadius: 'var(--rf)',
                          textAlign: 'right',
                        }}
                      >
                        {c.cat}
                      </span>
                    </div>

                    <h3
                      className="d3"
                      style={{
                        fontSize: 'clamp(20px,2.5vw,26px)',
                        marginBottom: 14,
                        color: 'var(--t1)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {c.title}
                    </h3>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
                        gap: 10,
                        position: 'relative',
                        zIndex: 1,
                        marginBottom: 16,
                      }}
                    >
                      {c.metrics.map((metric) => (
                        <MetricCard
                          key={`${c.id}-${metric.l}`}
                          metric={metric}
                          color={c.color}
                          compact
                        />
                      ))}
                    </div>

                    <p
                      className="body-sm"
                      style={{
                        lineHeight: 1.8,
                        color: 'var(--t2)',
                        marginBottom: 0,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {c.solution.slice(0, 150)}...
                    </p>

                    <div style={{ flex: 1 }} />

                    <button
                      type="button"
                      onClick={() => setSelectedProject(c)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px clamp(20px,2.5vw,24px)',
                        marginTop: 18,
                        fontFamily: 'var(--f-d)',
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'var(--t2)',
                        transition: 'all 0.25s ease',
                        background: 'transparent',
                        border: '1px solid var(--bdr)',
                        borderRadius: 'var(--rm)',
                        cursor: 'pointer',
                        position: 'relative',
                        zIndex: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = c.color;
                        e.currentTarget.style.borderColor = `${c.color}40`;
                        e.currentTarget.style.background = `${c.color}05`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--t2)';
                        e.currentTarget.style.borderColor = 'var(--bdr)';
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      View case study
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ flexShrink: 0 }}
                      >
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Have a business idea or client project in mind?"
        sub="Let’s turn it into a premium digital experience."
      />

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Shell>
  );
}