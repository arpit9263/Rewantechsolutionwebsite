'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x:0, y:0 });
  const ringPos = useRef({ x:0, y:0 });
  const raf = useRef(null);

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    const animate = () => {
      const { x, y } = pos.current;
      ringPos.current.x += (x - ringPos.current.x) * 0.12;
      ringPos.current.y += (y - ringPos.current.y) * 0.12;
      if (dot.current) dot.current.style.cssText = `left:${x}px;top:${y}px`;
      if (ring.current) ring.current.style.cssText = `left:${ringPos.current.x}px;top:${ringPos.current.y}px`;
      raf.current = requestAnimationFrame(animate);
    };
    const hover = () => ring.current?.classList.add('hov');
    const unhov = () => ring.current?.classList.remove('hov');
    const clk = () => { ring.current?.classList.add('clk'); setTimeout(()=>ring.current?.classList.remove('clk'),200); };

    const bind = () => {
      document.querySelectorAll('a,button,[data-h]').forEach(el => {
        el.addEventListener('mouseenter', hover);
        el.addEventListener('mouseleave', unhov);
      });
    };
    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList:true, subtree:true });

    window.addEventListener('mousemove', move, { passive:true });
    window.addEventListener('mousedown', clk);
    animate();
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', clk);
      if (raf.current) cancelAnimationFrame(raf.current);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cur-dot" style={{ position:'fixed', pointerEvents:'none', zIndex:99999 }}/>
      <div ref={ring} className="cur-ring" style={{ position:'fixed', pointerEvents:'none', zIndex:99998 }}/>
    </>
  );
}
