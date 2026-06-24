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
    image: '/images/edunest.png',
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
    img: '/images/edunest-logo.jpeg',
  },
  {
    id: 'kamla-hospital',
    title: 'Kamla Hospital',
    cat: 'Healthcare · Multi-Speciality Hospital',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.05)',
    liveUrl: 'https://www.kamlahospitaljhansi.in/',
    image: '/images/kamlahospital.png',
    metrics: [
      { n: '24/7', l: 'Emergency Care' },
      { n: 'Multi-Speciality', l: 'Healthcare Services' },
      { n: 'Patient-Centric', l: 'Treatment Approach' },
      { n: 'Digital Presence', l: 'Enhanced Accessibility' },
    ],
    challenge:
      'Kamla Hospital required a modern digital presence that could build trust with patients, clearly showcase medical services, improve accessibility to hospital information, and provide an easy way for patients to connect with the hospital online.',

    solution:
      'We designed and developed a professional healthcare website focused on trust, accessibility, and user experience. The platform highlights hospital services, doctor information, contact details, emergency support, and enquiry channels while ensuring a seamless experience across all devices.',

    stack: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Responsive Design',
      'SEO Optimization',
      'Performance Optimization',
    ],

    services: [
      'Website Design',
      'Healthcare UI/UX',
      'Web Development',
      'SEO Optimization',
      'Mobile Responsive Design',
    ],

    highlights: [
      'Trust-focused healthcare design with professional visual hierarchy',
      'Clear presentation of hospital services and facilities',
      'Mobile-first responsive experience for patients',
      'Fast-loading pages optimized for local search visibility',
      'Easy access to emergency contacts and enquiry channels',
      'Modern UI designed to strengthen patient confidence',
    ],
    img: '/images/kamla-hospital-logo.jpg',

  },
  {
    id: 'evhalt',
    title: 'EV Halt',
    cat: 'EV Infrastructure · Charging Network',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.05)',
    liveUrl: 'https://www.evhalt.com/',
    image: '/images/evhalt.png',
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
    img: '/images/evhalt-logo.png',
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
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(1140px, 100%)',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'linear-gradient(180deg, rgba(8,15,28,0.95) 0%, rgba(10,18,32,0.98) 100%)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            padding: '24px 32px',
            background: 'rgba(8,15,28,0.8)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: '14px',
                background: `${project.color}12`,
                border: `1px solid ${project.color}25`,
                display: 'grid',
                placeItems: 'center',
                fontSize: 28,
                flexShrink: 0,
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  borderRadius: '12px',

                }}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: 'var(--f-d)',
                  fontSize: '12px',
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
                  fontSize: '20px',
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
              width: 44,
              height: 44,
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#cbd5e1',
              fontSize: '20px',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.color = '#f8fafc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.color = '#cbd5e1';
            }}
          >
            ✕
          </button>
        </div>

        {/* Main Content */}
        <div style={{ padding: '40px' }}>
          {/* Hero Section */}
          <div
            style={{
              marginBottom: 40,
              position: 'relative',
              padding: '32px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -40,
                right: -40,
                width: 180,
                height: 180,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${project.color}15 0%, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: 20 }}>
                <span
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: project.color,
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}20`,
                    padding: '6px 14px',
                    borderRadius: '999px',
                    display: 'inline-block',
                  }}
                >
                  {project.cat.split(' · ')[0]}
                </span>
              </div>

              <h1
                style={{
                  fontSize: '40px',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: '#f8fafc',
                  marginBottom: 16,
                }}
              >
                {project.title}
              </h1>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#cbd5e1',
                  maxWidth: '800px',
                  marginBottom: 0,
                }}
              >
                A premium, conversion-focused digital experience designed to deliver brand clarity, user trust, and meaningful business outcomes.
              </p>
            </div>
          </div>

          {/* Live Website Preview */}
          <div
            style={{
              marginBottom: 40,
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)',
              overflow: 'hidden',
              minHeight: '500px',
            }}
          >
            <iframe
              src={project.liveUrl}
              title={`${project.title} live website`}
              style={{
                width: '100%',
                height: '500px',
                border: 'none',
                background: '#fff',
              }}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>

          {/* Metrics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 14,
              marginBottom: 40,
            }}
          >
            {project.metrics.map((metric) => (
              <div
                key={`${project.id}-${metric.l}`}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '18px 16px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontWeight: 800,
                    fontSize: '18px',
                    color: project.color,
                    marginBottom: 6,
                  }}
                >
                  {metric.n}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#64748b',
                    lineHeight: 1.4,
                  }}
                >
                  {metric.l}
                </div>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.3fr 0.7fr',
              gap: 24,
            }}
          >
            {/* Left Column */}
            <div style={{ display: 'grid', gap: 20 }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: project.color,
                    marginBottom: 16,
                  }}
                >
                  The Challenge
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#cbd5e1', margin: 0 }}>
                  {project.challenge}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: project.color,
                    marginBottom: 16,
                  }}
                >
                  Our Solution
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#cbd5e1', margin: 0 }}>
                  {project.solution}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: project.color,
                    marginBottom: 16,
                  }}
                >
                  Project Highlights
                </h3>

                <div style={{ display: 'grid', gap: 10 }}>
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}30`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 12,
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        ✓
                      </div>

                      <div
                        style={{
                          color: '#cbd5e1',
                          lineHeight: 1.6,
                          fontSize: '13px',
                        }}
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'grid', gap: 20 }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: project.color,
                    marginBottom: 14,
                  }}
                >
                  Tech Stack
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: project.color,
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}20`,
                        padding: '6px 12px',
                        borderRadius: '8px',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: project.color,
                    marginBottom: 14,
                  }}
                >
                  Services Delivered
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.services.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#94a3b8',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: `linear-gradient(135deg, ${project.color}08, transparent)`,
                  border: `1px solid ${project.color}20`,
                  borderRadius: '14px',
                  padding: '28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--f-d)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: project.color,
                    marginBottom: 14,
                  }}
                >
                  Next Steps
                </h3>

                <div style={{ display: 'grid', gap: 10 }}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      fontFamily: 'var(--f-d)',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#fff',
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 12px 30px ${project.color}35`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Visit Live Project
                  </a>

                  <a
                    href={`https://wa.me/917992127047?text=${encodeURIComponent(
                      `Hi, I want to build a project similar to ${project.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      fontFamily: 'var(--f-d)',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#25d366',
                      background: 'rgba(37,211,102,0.1)',
                      border: '1px solid rgba(37,211,102,0.3)',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(37,211,102,0.15)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(37,211,102,0.1)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    Build Something Similar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 960px) {
            div[style*="gridTemplateColumns: '1.3fr 0.7fr'"] {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            div[style*="gridTemplateColumns: 'repeat(4,"] {
              grid-template-columns: repeat(2, 1fr);
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 28,
            }}
          >
            {CASES.map((c, i) => (
              <R key={c.id} c="rv" d={i * 0.07}>
                <div
                  style={{
                    background: 'linear-gradient(180deg, rgba(15,23,42,0.45), rgba(8,14,28,0.55))',
                    border: '1px solid rgba(255,255,255,0.04)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.35s var(--ease)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${c.color}30`;
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = `0 32px 80px ${c.color}20`;
                    e.currentTarget.style.background = 'linear-gradient(180deg, rgba(20,30,50,0.6), rgba(12,18,35,0.65))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.background = 'linear-gradient(180deg, rgba(15,23,42,0.45), rgba(8,14,28,0.55))';
                  }}
                >
                  {/* Preview Section */}
                  <div
                    style={{
                      height: '160px',
                      background: c.bg,
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(135deg, ${c.color}08 0%, transparent 100%)`,
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div
                    style={{
                      padding: '28px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: -40,
                        right: -40,
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${c.color}12 0%, transparent 70%)`,
                        pointerEvents: 'none',
                      }}
                    />

                    <span
                      style={{
                        fontFamily: 'var(--f-d)',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: c.color,
                        background: `${c.color}12`,
                        border: `1px solid ${c.color}20`,
                        padding: '5px 10px',
                        borderRadius: '999px',
                        width: 'fit-content',
                        marginBottom: '12px',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {c.cat.split(' · ')[0]}
                    </span>

                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: 'var(--t1)',
                        marginBottom: '12px',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {c.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '13px',
                        lineHeight: 1.6,
                        color: '#94a3b8',
                        marginBottom: '16px',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {c.solution.slice(0, 120)}...
                    </p>

                    {/* Metrics */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '10px',
                        marginBottom: '18px',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {c.metrics.slice(0, 2).map((metric) => (
                        <div
                          key={`${c.id}-${metric.l}`}
                          style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '10px',
                            padding: '10px 8px',
                            textAlign: 'center',
                          }}
                        >
                          <div
                            style={{
                              fontFamily: 'var(--f-d)',
                              fontWeight: 700,
                              fontSize: '13px',
                              color: c.color,
                              marginBottom: '2px',
                            }}
                          >
                            {metric.n}
                          </div>
                          <div
                            style={{
                              fontFamily: 'var(--f-d)',
                              fontSize: '9px',
                              color: '#64748b',
                              lineHeight: 1.3,
                            }}
                          >
                            {metric.l}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ flex: 1 }} />

                    {/* Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(c)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        marginTop: '8px',
                        fontFamily: 'var(--f-d)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#fff',
                        background: `linear-gradient(135deg, ${c.color}, ${c.color}cc)`,
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        position: 'relative',
                        zIndex: 1,
                        overflow: 'hidden',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = `0 12px 30px ${c.color}35`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      View Case Study →
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