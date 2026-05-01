import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "./ui/button";
import Magnetic from "./Magnetic";

const HeroSection = ({
  title = "GRAVURA",
  tagline = "Arte, atitude e precisão. Um estúdio escuro, íntimo e impecável. Do primeiro risco ao último detalhe.",
  ctaText = "Agendar agora",
  onCtaClick = () => console.log("CTA clicked"),
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden pt-20 sm:pt-24 min-h-[680px] md:min-h-[860px]"
    >
      {/* Hero clean. O fundo com imagem fica global (ParallaxBackdrop). */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/62 to-black/86" />
        {/* Glow vermelho esquerdo */}
        <div className="absolute inset-0 opacity-0 sm:opacity-100 bg-[radial-gradient(900px_520px_at_84%_20%,rgba(193,0,0,0.06),transparent_60%)]" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start lg:items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/80 backdrop-blur-md"
            >
              Estúdio Privado
              <span className="h-1 w-1 rounded-full bg-brand-red" />
              Sessões Exclusivas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-4 sm:mt-8 font-display text-[clamp(2.5rem,10vw,5rem)] sm:text-7xl md:text-8xl leading-[1] sm:leading-[0.85] tracking-tight"
            >
              {title.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + i * 0.1,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block mr-3 sm:mr-4 last:mr-0"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-2xl text-white/70 max-w-2xl leading-relaxed"
            >
              {tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              <Magnetic strength={0.2}>
                <Button size="lg" onClick={onCtaClick} className="w-full sm:w-auto px-10 relative overflow-hidden group">
                  <span className="relative z-10">{ctaText}</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </Magnetic>
              
              <Magnetic strength={0.2}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full sm:w-auto px-10 relative overflow-hidden group border-white/20 hover:border-white/40 bg-transparent"
                >
                  <span className="relative z-10">Ver trabalhos</span>
                </Button>
              </Magnetic>
            </motion.div>

            {/* Pilares */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
              {[
                { t: "Higiene real", d: "Ambiente limpo, material esterilizado, processo sério." },
                { t: "Mão firme", d: "Técnica e precisão, do início ao último detalhe." },
                { t: "Resultado fotogênico", d: "Acabamento pensado para ficar forte ao vivo e na câmera." },
              ].map((i) => (
                <div
                  key={i.t}
                  className="rounded-3xl border border-white/12 bg-white/5 px-5 py-5 backdrop-blur-md shadow-[0_18px_80px_-55px_rgba(0,0,0,0.9)]"
                >
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.26em] text-white/70">
                    <span className="h-1 w-1 rounded-full bg-brand-red" />
                    {i.t}
                  </div>
                  <div className="mt-3 text-[13px] sm:text-sm leading-relaxed text-white/65">{i.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Collage */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-[radial-gradient(520px_420px_at_50%_40%,rgba(138, 3, 3, 0),transparent_60%)] blur-2xl" />

              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 sm:col-span-7">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <img
                      src="/editorial/artist-work-1.png"
                      alt="Trabalho em destaque"
                      className="h-[220px] sm:h-[420px] w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent" />
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-5 grid gap-3">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <img
                      src="/editorial/artist-work-2.png"
                      alt="Artista trabalhando"
                      className="h-[160px] sm:h-[204px] w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent" />
                  </div>
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <img
                      src="/hero/hero.jpg"
                      alt="Tatuagem finalizada"
                      className="h-[160px] sm:h-[204px] w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Film strip */}
        <div className="mt-10 sm:mt-14 pb-8 sm:pb-10">
          <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory">
            {[
              "/hero/hero.jpg",
              "/hero/hero1.jpg",
              "/hero/hero2.jpg",
              "/hero/hero3.jpg",
              "/editorial/artist-work-1.png",
              "/editorial/artist-work-2.png",
            ].map((src) => (
              <div
                key={src}
                className="snap-start min-w-[200px] sm:min-w-[260px] relative overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0 rounded-3xl border border-white/12 bg-white/5 backdrop-blur-md shadow-[0_26px_120px_-80px_rgba(0,0,0,0.95)]" />
                <div className="absolute -inset-px rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(420px_240px_at_20%_20%,rgba(138, 3, 3, 0),transparent_60%),radial-gradient(420px_240px_at_80%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
                <img
                  src={src}
                  alt="Preview"
                  className="relative h-[120px] sm:h-[140px] w-full object-cover transition-transform duration-\\[1400ms\\] ease-out hover:scale-[1.08]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;