import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION = 2600; // ms before hiding

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  useEffect(() => {
    // Animate progress bar
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("reveal");
        setTimeout(onDone, 700); // wait for exit animation
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
        >
          {/* Background Image and Overlays */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <img 
              src="/Fundostudio%20.png" 
              alt="Studio Background" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-red/10 blur-[140px]" />
            <div className="absolute left-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full bg-brand-red/8 blur-[100px]" />
          </div>

          {/* Film grain */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-10 px-8">
            {/* Logo / wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex flex-col items-center gap-3"
            >
              {/* Red needle accent icon */}
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mb-2"
              >
                <line
                  x1="8" y1="40" x2="40" y2="8"
                  stroke="rgba(138,3,3,0.9)" strokeWidth="2.5" strokeLinecap="round"
                />
                <line
                  x1="13" y1="43" x2="40" y2="8"
                  stroke="rgba(138,3,3,0.4)" strokeWidth="1.5" strokeLinecap="round"
                />
                <circle cx="40" cy="8" r="3.5" fill="rgba(138,3,3,0.9)" />
                <circle cx="8" cy="40" r="2.5" fill="rgba(138,3,3,0.6)" />
              </svg>

              <h1 className="font-display text-5xl sm:text-6xl tracking-tight text-white leading-none">
                GRAVURA<span className="text-brand-red">.</span>
              </h1>

              <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-white/40">
                Estúdio de Tatuagem
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-56 sm:w-72 flex flex-col items-center gap-3"
            >
              <div className="relative w-full h-px bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-brand-red rounded-full"
                  style={{ width: `${progress}%` }}
                />
                {/* Shimmer */}
                <motion.div
                  className="absolute top-0 h-full w-10 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  style={{ left: `${progress - 5}%` }}
                />
              </div>

              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/30">
                  Carregando
                </span>
                <span className="text-[10px] font-bold tabular-nums text-white/50">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20"
          >
            Arte que fica. Para sempre.
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
