'use client';
import { useEffect, useRef } from 'react';

export function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add('in'), delay); io.unobserve(el); }
    }, { threshold: 0.07 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return ref;
}

export function R({ c = 'rv', d = 0, children, style = {}, ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add('in'), d * 1000); io.unobserve(el); }
    }, { threshold: 0.07 });
    io.observe(el);
    return () => io.disconnect();
  }, [d]);
  return <div ref={ref} className={c} style={{ transitionDelay: `${d}s`, ...style }} {...props}>{children}</div>;
}
