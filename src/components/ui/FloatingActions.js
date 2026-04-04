'use client';
import { useEffect, useState } from 'react';
import { SOCIAL } from '@/lib/config';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fab-group" aria-label="Quick actions">

      {/* WhatsApp */}
      <a
        href={SOCIAL.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-wa"
        aria-label="Chat on WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
        <span className="fab-tooltip">WhatsApp Us</span>
      </a>

      {/* Instagram */}
      <a
        href={SOCIAL.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-ig"
        aria-label="Follow on Instagram"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
        </svg>
        <span className="fab-tooltip">Follow on Instagram</span>
      </a>

      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        className={`fab-btn fab-top${showTop ? ' visible' : ''}`}
        aria-label="Scroll to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
        <span className="fab-tooltip">Back to top</span>
      </button>

    </div>
  );
}
