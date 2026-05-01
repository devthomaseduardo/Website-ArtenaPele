import React, { useEffect, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(Boolean(mq.matches));
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export default function ParallaxBackdrop() {
  const reducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Pause video for prefers-reduced-motion users
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reducedMotion) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* ── Video layer ── */}
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />

      {/* ── Overlay stack (same as before) ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black/98" />
      <div className="absolute inset-0 opacity-0 sm:opacity-100 bg-[radial-gradient(900px_640px_at_12%_10%,rgba(138,3,3,0.28),transparent_60%)]" />
      <div className="absolute inset-0 opacity-70 sm:opacity-100 bg-[radial-gradient(980px_720px_at_86%_14%,rgba(255,255,255,0.07),transparent_62%)]" />

      {/* ── Animated red glows ── */}
      <div className="absolute inset-0">
        <div
          className="absolute -left-40 top-10 h-[560px] w-[560px] rounded-full bg-brand-red/30 blur-[150px] glow-drift-left motion-reduce:animate-none mix-blend-screen"
          style={{ opacity: 0.5 }}
        />
        <div
          className="absolute -right-44 bottom-10 h-[600px] w-[600px] rounded-full bg-brand-red/25 blur-[170px] glow-drift-right motion-reduce:animate-none mix-blend-screen"
          style={{ opacity: 0.45 }}
        />
      </div>

      {/* ── Film grain ── */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] animate-grain" />
      </div>
    </div>
  );
}
