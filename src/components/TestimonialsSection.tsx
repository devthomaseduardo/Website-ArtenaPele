import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Carlos Oliveira",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Minha experiência no Estúdio Black foi incrível. A artista entendeu exatamente o que eu queria e o resultado ficou muito acima do esperado. Cada detalhe foi pensado.",
    tattooType: "Realismo",
    artist: "Maria Silva",
    highlight: true,
  },
  {
    name: "Ana Souza",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Fiz minha primeira tatuagem aqui e não poderia ter escolhido lugar melhor. Profissionais atenciosos e ambiente impecável. Voltarei com certeza.",
    tattooType: "Aquarela",
    artist: "Ana Oliveira",
    highlight: false,
  },
  {
    name: "Pedro Santos",
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Já fiz tatuagens em outros lugares, mas o Estúdio Black é o mais profissional. Higiene impecável e traço firme. Resultado que mostro para todo mundo.",
    tattooType: "Blackwork",
    artist: "Carlos Mendes",
    highlight: false,
  },
  {
    name: "Juliana Costa",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Ambiente acolhedor e profissionais talentosos. Minha tatuagem ficou exatamente como eu imaginava. Arte de verdade na pele.",
    tattooType: "Fine Line",
    artist: "Ana Oliveira",
    highlight: false,
  },
  {
    name: "Bruno Ferreira",
    photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Rafael fez minha manga oriental completa em 3 sessões. Cada sessão foi uma experiência única — o cuidado com a composição e o sombreamento é absurdo.",
    tattooType: "Oriental",
    artist: "Rafael Costa",
    highlight: false,
  },
  {
    name: "Fernanda Lima",
    photo: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Fiz um cover up que parecia impossível. Carlos transformou completamente o que eu tinha antes. Não consigo de imaginar outro resultado assim.",
    tattooType: "Cover Up",
    artist: "Carlos Mendes",
    highlight: false,
  },
  {
    name: "Rodrigo Alves",
    photo: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Fine line no antebraço ficou simplesmente perfeito. Traços milimétricos, curei sem nenhum problema e o retoque foi rápido. Recomendo sem hesitar.",
    tattooType: "Fine Line",
    artist: "Ana Oliveira",
    highlight: false,
  },
  {
    name: "Mariana Torres",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Pedi uma composição geométrica no ombro e o Rafael entregou algo além do que eu imaginava. Simétrico, limpo e com um significado que só eu e ele sabemos. Isso é arte.",
    tattooType: "Geométrico",
    artist: "Rafael Costa",
    highlight: false,
  },
];

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 text-white overflow-hidden">
      {/* Bg glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/6 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/60 backdrop-blur-md mb-5">
                <span className="h-1 w-1 rounded-full bg-brand-red animate-pulse" />
                Depoimentos
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
                O que dizem<br />
                <span className="text-white/30">nossos clientes</span>
              </h2>
            </Reveal>
          </div>

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/4 backdrop-blur-md px-6 py-4 shrink-0"
          >
            <div className="text-center">
              <div className="font-display text-4xl text-white leading-none">4.9</div>
              <Stars />
              <div className="text-[10px] text-white/40 uppercase tracking-[0.18em] mt-1">+500 avaliações</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-[11px] text-white/50 leading-relaxed max-w-[120px]">
              Avaliação média baseada em clientes reais.
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Featured card — spans 2 rows on large screens */}
          {testimonials.slice(0, 1).map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:row-span-2 relative rounded-3xl border border-brand-red/25 bg-gradient-to-br from-brand-red/10 to-white/2 backdrop-blur-md overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(600px_at_30%_20%,rgba(138,3,3,0.15),transparent_70%)] pointer-events-none" />
              <div className="relative z-10 p-7 lg:p-9 flex flex-col h-full">
                <Quote className="h-10 w-10 text-brand-red/40 mb-6 shrink-0" />
                <p className="text-white/85 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic flex-1 mb-8">
                  "{t.text}"
                </p>
                <div className="mt-auto">
                  <Stars />
                  <div className="flex items-center gap-3 mt-4">
                    <img src={t.photo} alt={t.name} className="h-11 w-11 rounded-xl object-cover border border-white/10" />
                    <div>
                      <div className="font-bold text-white text-sm">{t.name}</div>
                      <div className="text-[11px] text-white/45">{t.tattooType} · por {t.artist}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Regular cards */}
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.08 }}
              className="relative rounded-3xl border border-white/8 bg-white/4 backdrop-blur-md overflow-hidden group hover:border-white/15 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-[radial-gradient(400px_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 p-6 sm:p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <img src={t.photo} alt={t.name} className="h-10 w-10 rounded-xl object-cover border border-white/10 shrink-0" />
                    <div>
                      <div className="font-bold text-white text-sm leading-tight">{t.name}</div>
                      <Stars />
                    </div>
                  </div>
                  <Quote className="h-5 w-5 text-white/15 shrink-0 mt-0.5" />
                </div>
                <p className="text-white/65 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/4 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    {t.tattooType}
                  </span>
                  <span className="text-white/25 text-[10px]">por {t.artist}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
