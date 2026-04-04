'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Shell } from '@/components/ui/Shell';
import { CONTACT, SOCIAL } from '@/lib/config';

/* Metadata should remain in a separate server-side metadata file */

function R({ c = 'rv', d = 0, children, style = {}, className = '', ...rest }) {
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
      className={`${c} ${className}`.trim()}
      style={{ transitionDelay: `${d}s`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

const SERVICES = [
  'Web Development',
  'Mobile App',
  'AI / ML Integration',
  'Cloud & DevOps',
  'UI/UX Design',
  'E-Commerce',
  'Security Audit',
  'Data Analytics',
  'Multiple services (select later)',
  'Not sure yet',
];

const BUDGETS = [
  '₹50,000 – ₹1,50,000',
  '₹1,50,000 – ₹5,00,000',
  '₹5,00,000 – ₹15,00,000',
  '₹15,00,000+',
  'Not sure yet',
];

const TIMES = [
  'ASAP (within 2 weeks)',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Flexible',
];

const FIELD_ORDER = ['name', 'email', 'phone', 'company', 'service', 'budget', 'timeline', 'message'];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  timeline: '',
  message: '',
};

const initialTouched = {
  name: false,
  email: false,
  phone: false,
  company: false,
  service: false,
  budget: false,
  timeline: false,
  message: false,
};

function normalizeForm(values) {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    company: values.company.trim(),
    service: values.service.trim(),
    budget: values.budget.trim(),
    timeline: values.timeline.trim(),
    message: values.message.trim(),
  };
}

function validateField(name, value, form) {
  const trimmedValue = typeof value === 'string' ? value.trim() : value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/;

  switch (name) {
    case 'name':
      if (!trimmedValue) return 'Please enter your full name.';
      if (trimmedValue.length < 2) return 'Name must be at least 2 characters.';
      return '';

    case 'email':
      if (!trimmedValue) return 'Please enter your email address.';
      if (!emailRegex.test(trimmedValue)) return 'Please enter a valid email address.';
      return '';

    case 'phone':
      if (!trimmedValue) return '';
      if (!phoneRegex.test(trimmedValue)) return 'Please enter a valid phone number.';
      return '';

    case 'service':
      if (!trimmedValue) return 'Please select a service.';
      return '';

    case 'message':
      if (!trimmedValue) return 'Please enter your project brief.';
      if (trimmedValue.length < 10) return 'Project brief must be at least 10 characters.';
      return '';

    case 'company':
    case 'budget':
    case 'timeline':
    default:
      return '';
  }
}

function validateForm(values) {
  const normalized = normalizeForm(values);
  const errors = {};

  FIELD_ORDER.forEach((field) => {
    const error = validateField(field, normalized[field], normalized);
    if (error) errors[field] = error;
  });

  return { normalized, errors };
}

function buildWhatsAppMessage(form) {
  return encodeURIComponent(
    `🚀 *New Project Brief — Rewan Tech Solutions*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📧 *Email:* ${form.email}\n` +
      `📱 *Phone:* ${form.phone || 'Not provided'}\n` +
      `🏢 *Company:* ${form.company || 'Not provided'}\n` +
      `🛠 *Service:* ${form.service}\n` +
      `💰 *Budget:* ${form.budget || 'Not specified'}\n` +
      `⏱ *Timeline:* ${form.timeline || 'Not specified'}\n\n` +
      `📝 *Brief:*\n${form.message}`
  );
}

function Fi({ label, htmlFor, error, children, full }) {
  return (
    <label htmlFor={htmlFor} style={{ display: 'block', gridColumn: full ? '1 / -1' : 'auto' }}>
      <span
        style={{
          fontFamily: 'var(--f-d)',
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: error ? 'var(--r)' : 'var(--t3)',
          display: 'block',
          marginBottom: 8,
        }}
      >
        {label}
      </span>

      {children}

      <div
        style={{
          minHeight: 18,
          marginTop: 8,
          fontSize: 12,
          color: 'var(--r)',
          fontFamily: 'var(--f-d)',
          lineHeight: 1.4,
        }}
      >
        {error || ''}
      </div>
    </label>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState(initialTouched);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [topMessage, setTopMessage] = useState('');
  const [topMessageType, setTopMessageType] = useState('error');

  const refs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    company: useRef(null),
    service: useRef(null),
    budget: useRef(null),
    timeline: useRef(null),
    message: useRef(null),
  };

  const submittedMessage = useMemo(() => normalizeForm(form), [form]);

  function showTopMessage(message, type = 'error') {
    setTopMessage(message);
    setTopMessageType(type);
  }

  function clearTopMessage() {
    setTopMessage('');
  }

  function focusField(fieldName) {
    const el = refs[fieldName]?.current;
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    window.setTimeout(() => {
      try {
        el.focus({ preventScroll: true });
      } catch {
        el.focus();
      }
    }, 250);
  }

  function getFirstInvalidField(errorMap) {
    return FIELD_ORDER.find((field) => errorMap[field]);
  }

  function markAllTouched() {
    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      service: true,
      budget: true,
      timeline: true,
      message: true,
    });
  }

  function updateField(name, value) {
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      const normalizedNext = normalizeForm(next);

      if (touched[name]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: validateField(name, normalizedNext[name], normalizedNext),
        }));
      }

      return next;
    });

    if (topMessage) clearTopMessage();
  }

  function handleBlur(name) {
    setTouched((prev) => ({ ...prev, [name]: true }));

    const normalized = normalizeForm(form);
    const error = validateField(name, normalized[name], normalized);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }

  function getInputStyle(fieldName) {
    return {
      borderColor: errors[fieldName] ? 'var(--r)' : undefined,
      boxShadow: errors[fieldName] ? '0 0 0 3px rgba(244,63,94,0.12)' : undefined,
    };
  }

  async function submit(e) {
    e.preventDefault();
    if (loading) return;

    clearTopMessage();
    setLoading(true);

    const { normalized, errors: validationErrors } = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      markAllTouched();
      setErrors(validationErrors);
      setLoading(false);
      showTopMessage('Please fix the highlighted fields.', 'error');

      const firstInvalidField = getFirstInvalidField(validationErrors);
      if (firstInvalidField) focusField(firstInvalidField);
      return;
    }

    setErrors({});
    setForm(normalized);

    let formspreeOk = false;
    let whatsappOpened = false;

    try {
      const res = await fetch(CONTACT.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: normalized.name,
          email: normalized.email,
          phone: normalized.phone,
          company: normalized.company,
          service: normalized.service,
          budget: normalized.budget,
          timeline: normalized.timeline,
          message: normalized.message,
          _subject: `New Project Brief from ${normalized.name}`,
        }),
      });

      formspreeOk = res.ok;
    } catch {
      formspreeOk = false;
    }

    const waURL = `https://wa.me/${CONTACT.whatsappRaw}?text=${buildWhatsAppMessage(normalized)}`;

    try {
      const popup = window.open(waURL, '_blank', 'noopener,noreferrer');
      whatsappOpened = !!popup;
    } catch {
      whatsappOpened = false;
    }

    setLoading(false);
    setSent(true);

    if (formspreeOk && whatsappOpened) {
      showTopMessage('Your brief was submitted successfully and WhatsApp was opened.', 'success');
      return;
    }

    if (!formspreeOk && whatsappOpened) {
      showTopMessage('WhatsApp opened successfully, but Formspree submission failed.', 'warning');
      return;
    }

    if (formspreeOk && !whatsappOpened) {
      showTopMessage('Your brief was submitted, but WhatsApp could not open automatically.', 'warning');
      return;
    }

    showTopMessage('Submission partially failed. Please use the WhatsApp button below.', 'warning');
  }

  function resetForm() {
    setForm(initialForm);
    setTouched(initialTouched);
    setErrors({});
    setSent(false);
    setLoading(false);
    clearTopMessage();
  }

  function renderTopMessage() {
    if (!topMessage) return null;

    const colorMap = {
      error: {
        bg: 'rgba(244,63,94,0.10)',
        border: 'rgba(244,63,94,0.30)',
        text: 'var(--r)',
      },
      warning: {
        bg: 'rgba(245,158,11,0.10)',
        border: 'rgba(245,158,11,0.30)',
        text: '#b45309',
      },
      success: {
        bg: 'rgba(34,197,94,0.10)',
        border: 'rgba(34,197,94,0.28)',
        text: '#15803d',
      },
    };

    const c = colorMap[topMessageType] || colorMap.error;

    return (
      <div
        role="alert"
        aria-live="polite"
        style={{
          background: c.bg,
          border: `1px solid ${c.border}`,
          borderRadius: 'var(--rl, 14px)',
          padding: '12px 16px',
          marginBottom: 18,
          fontFamily: 'var(--f-d)',
          fontSize: 13,
          color: c.text,
          lineHeight: 1.6,
        }}
      >
        {topMessage}
      </div>
    );
  }

  return (
    <Shell>
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg)',
          padding: 'clamp(120px,14vw,170px) clamp(20px,5vw,80px) clamp(64px,8vw,96px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '20%',
            width: 700,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse,rgba(37,99,235,0.09) 0%,transparent 65%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />
        <div className="b-hr" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />

        <div className="ctr" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              maxWidth: 660,
              opacity: 0,
              animation: 'rise 0.9s var(--ease) both',
              animationFillMode: 'forwards',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--bg-b)',
                border: '1px solid var(--ln-b)',
                borderRadius: 'var(--rf)',
                padding: '6px 16px',
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--g)',
                  display: 'block',
                  animation: 'blink 2s ease infinite',
                  boxShadow: '0 0 8px var(--g)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--f-d)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--bl)',
                  letterSpacing: '0.05em',
                }}
              >
                Available for new projects
              </span>
            </div>

            <h1 className="d1" style={{ fontSize: 'clamp(44px,7.5vw,96px)', marginBottom: 20 }}>
              Let&apos;s talk about
              <br />
              <span className="grad">your project</span>
            </h1>

            <p
              className="body"
              style={{
                fontSize: 'clamp(16px,1.8vw,19px)',
                maxWidth: 520,
                lineHeight: 1.85,
                marginBottom: 40,
              }}
            >
              Free 30-min discovery call. Fixed-price proposal in 24 hours. No obligation.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                  ),
                  label: 'WhatsApp',
                  href: SOCIAL.whatsapp2,
                  color: '#25d366',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: 'Email',
                  href: `mailto:${CONTACT.email}`,
                  color: 'var(--bl)',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: 'Call',
                  href: `tel:${CONTACT.phoneRaw}`,
                  color: 'var(--a)',
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  aria-label={c.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'var(--f-d)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: c.color,
                    background: `${c.color}12`,
                    border: `1px solid ${c.color}25`,
                    padding: '9px 18px',
                    borderRadius: 'var(--rf)',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${c.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${c.color}12`;
                  }}
                >
                  {c.icon}
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="sec" style={{ background: 'var(--bg2)', borderTop: 'none' }}>
        <div className="ctr">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 'clamp(36px,5vw,64px)',
              alignItems: 'start',
            }}
          >
            {/* Sidebar */}
            <R c="rv-l" className="no-mob">
              <h2 className="d3" style={{ fontSize: 'clamp(22px,3vw,36px)', marginBottom: 16 }}>
                Why fill the form?
              </h2>
              <p className="body" style={{ marginBottom: 28, lineHeight: 1.82 }}>
                The more context you share, the more accurate our proposal. Takes under 3 minutes.
              </p>

              {[
                { t: 'Fixed-price quote in 24h', d: 'Back in your inbox within one business day.' },
                { t: 'No obligation to proceed', d: 'Just a proposal — no strings attached.' },
                { t: 'Free discovery call included', d: '30 min with our team, on us.' },
                { t: '100% confidential', d: 'Your data is never shared with third parties.' },
              ].map((item) => (
                <div key={item.t} style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'var(--bg-b)',
                      border: '1px solid var(--ln-b)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--bl)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--f-d)',
                        fontWeight: 600,
                        fontSize: 14,
                        color: 'var(--t1)',
                        marginBottom: 3,
                      }}
                    >
                      {item.t}
                    </div>
                    <div style={{ fontFamily: 'var(--f-d)', fontSize: 12, color: 'var(--t3)' }}>{item.d}</div>
                  </div>
                </div>
              ))}

              <div
                style={{
                  marginTop: 32,
                  background: 'var(--bg3)',
                  border: '1px solid var(--bdr)',
                  borderRadius: 'var(--rxl)',
                  padding: 24,
                }}
              >
                <p className="d4" style={{ fontSize: 15, marginBottom: 8 }}>
                  Prefer to talk directly?
                </p>
                <p className="body-sm" style={{ marginBottom: 16, lineHeight: 1.75 }}>
                  Skip the form. Ping us on WhatsApp and we&apos;ll chat right away.
                </p>
                <a
                  href={SOCIAL.whatsapp2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Open WhatsApp
                </a>
              </div>
            </R>

            {/* Form */}
            <R c="rv-r" d={0.12}>
              <div
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--bdr)',
                  borderRadius: 'var(--r3)',
                  padding: 'clamp(24px,4vw,48px)',
                }}
              >
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '48px 20px', animation: 'slide-up 0.4s var(--ease)' }}>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: 'var(--bg-b)',
                        border: '1px solid var(--ln-b)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--bl)" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <h3 className="d3" style={{ fontSize: 26, marginBottom: 10 }}>
                      Brief received!
                    </h3>

                    <p className="body" style={{ marginBottom: 8, lineHeight: 1.8 }}>
                      Your WhatsApp should be opening — if not, tap below.
                    </p>

                    <p className="body-sm" style={{ marginBottom: 28 }}>
                      We&apos;ll also send a detailed proposal within 24 hours.
                    </p>

                    {renderTopMessage()}

                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <a
                        href={`https://wa.me/${CONTACT.whatsappRaw}?text=${buildWhatsAppMessage(submittedMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-wa"
                      >
                        Chat on WhatsApp
                      </a>

                      <button type="button" className="btn btn-g" onClick={resetForm}>
                        Submit another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <h3 className="d3" style={{ fontSize: 22, marginBottom: 6 }}>
                      Project Brief
                    </h3>

                    <p className="body-sm" style={{ marginBottom: 28 }}>
                      All fields marked * are required.
                    </p>

                    {renderTopMessage()}

                    <div className="form-2col">
                      <Fi label="Full Name *" htmlFor="name" error={touched.name ? errors.name : ''}>
                        <input
                          id="name"
                          ref={refs.name}
                          className="fi"
                          type="text"
                          placeholder="Priya Sharma"
                          value={form.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          autoComplete="name"
                          aria-invalid={!!(touched.name && errors.name)}
                          aria-describedby="name-error"
                          style={getInputStyle('name')}
                        />
                      </Fi>

                      <Fi label="Email Address *" htmlFor="email" error={touched.email ? errors.email : ''}>
                        <input
                          id="email"
                          ref={refs.email}
                          className="fi"
                          type="email"
                          placeholder="priya@company.com"
                          value={form.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          autoComplete="email"
                          aria-invalid={!!(touched.email && errors.email)}
                          aria-describedby="email-error"
                          style={getInputStyle('email')}
                        />
                      </Fi>

                      <Fi label="Phone / WhatsApp" htmlFor="phone" error={touched.phone ? errors.phone : ''}>
                        <input
                          id="phone"
                          ref={refs.phone}
                          className="fi"
                          type="tel"
                          placeholder="+91 98xxx xxxxx"
                          value={form.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          autoComplete="tel"
                          aria-invalid={!!(touched.phone && errors.phone)}
                          aria-describedby="phone-error"
                          style={getInputStyle('phone')}
                        />
                      </Fi>

                      <Fi label="Company / Startup" htmlFor="company" error="">
                        <input
                          id="company"
                          ref={refs.company}
                          className="fi"
                          type="text"
                          placeholder="Acme Inc."
                          value={form.company}
                          onChange={(e) => updateField('company', e.target.value)}
                          onBlur={() => handleBlur('company')}
                          autoComplete="organization"
                        />
                      </Fi>

                      <Fi label="Service Needed *" htmlFor="service" error={touched.service ? errors.service : ''} full>
                        <select
                          id="service"
                          ref={refs.service}
                          className="fi"
                          value={form.service}
                          onChange={(e) => updateField('service', e.target.value)}
                          onBlur={() => handleBlur('service')}
                          aria-invalid={!!(touched.service && errors.service)}
                          style={{
                            appearance: 'none',
                            ...getInputStyle('service'),
                          }}
                        >
                          <option value="">Select a service…</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </Fi>

                      <Fi label="Budget Range" htmlFor="budget" error="">
                        <select
                          id="budget"
                          ref={refs.budget}
                          className="fi"
                          value={form.budget}
                          onChange={(e) => updateField('budget', e.target.value)}
                          onBlur={() => handleBlur('budget')}
                          style={{ appearance: 'none' }}
                        >
                          <option value="">Select budget…</option>
                          {BUDGETS.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </Fi>

                      <Fi label="Timeline" htmlFor="timeline" error="">
                        <select
                          id="timeline"
                          ref={refs.timeline}
                          className="fi"
                          value={form.timeline}
                          onChange={(e) => updateField('timeline', e.target.value)}
                          onBlur={() => handleBlur('timeline')}
                          style={{ appearance: 'none' }}
                        >
                          <option value="">Select timeline…</option>
                          {TIMES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </Fi>

                      <Fi label="Project Brief *" htmlFor="message" error={touched.message ? errors.message : ''} full>
                        <textarea
                          id="message"
                          ref={refs.message}
                          className="fi"
                          rows={5}
                          placeholder="Describe what you want to build, who it's for, any specific features or integrations…"
                          value={form.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          onBlur={() => handleBlur('message')}
                          aria-invalid={!!(touched.message && errors.message)}
                          style={{
                            resize: 'vertical',
                            minHeight: 120,
                            ...getInputStyle('message'),
                          }}
                        />
                      </Fi>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-p"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '16px',
                        fontSize: 15,
                        marginTop: 20,
                        opacity: loading ? 0.65 : 1,
                        transition: 'opacity 0.2s',
                      }}
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? (
                        <>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            style={{ animation: 'spin 1s linear infinite' }}
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a10 10 0 0 1 10 10" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Submit Brief — Get Quote in 24h
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p
                      style={{
                        textAlign: 'center',
                        marginTop: 12,
                        fontFamily: 'var(--f-d)',
                        fontSize: 11,
                        color: 'var(--t4)',
                      }}
                    >
                      🔒 Your information is never sold or shared. Submitting opens WhatsApp with your brief.
                    </p>
                  </form>
                )}
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* WhatsApp band */}
      <section
        style={{
          background: 'linear-gradient(135deg,#1aad4e,#25d366)',
          padding: 'clamp(48px,6vw,72px) clamp(20px,5vw,80px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
          }}
        />

        <div
          className="ctr"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 'var(--rf)',
                padding: '4px 14px',
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'white',
                  display: 'block',
                  animation: 'blink 2s ease infinite',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--f-d)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                Available now
              </span>
            </div>

            <h2 className="d2" style={{ fontSize: 'clamp(24px,3.5vw,44px)', color: 'white', marginBottom: 10 }}>
              Prefer instant messaging?
            </h2>

            <p style={{ fontFamily: 'var(--f-d)', fontSize: 16, color: 'rgba(255,255,255,0.75)' }}>
              Send a voice note, screenshot, or just a few words about your idea.
            </p>
          </div>

          <a
            href={SOCIAL.whatsapp2}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg"
            style={{
              background: 'white',
              color: '#1aad4e',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              padding: '18px 36px',
              borderRadius: 'var(--rf)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            Open WhatsApp Chat
          </a>
        </div>
      </section>
    </Shell>
  );
}