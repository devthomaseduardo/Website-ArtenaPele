import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Instagram,
  Star,
  Clock,
  Award,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface Artist {
  id: string;
  name: string;
  role: string;
  photo: string;
  specialties: string[];
  experience: string;
  sampleWorks: string[];
  bio: string;
  longBio: string;
  instagram?: string;
  location: string;
  sessionsCompleted: string;
  rating: string;
  achievements: string[];
}

const artists: Artist[] = [
  {
    id: "1",
    name: "Maria Silva",
    role: "Realismo & Aquarela",
    photo: "/tatto/Maria%20Silva-artista.jpg",
    specialties: ["Realismo", "Blackwork", "Aquarela"],
    experience: "8 anos",
    location: "São Paulo · Nova York",
    sessionsCompleted: "+320",
    rating: "4.9",
    sampleWorks: [
      "/gallery/gallery1.jpg",
      "/gallery/gallery2.jpg",
      "/gallery/gallery3.jpg",
    ],
    bio: "Especialista em transformar ideias em arte única na pele. Formada pela Escola de Artes Visuais.",
    longBio:
      "Maria Silva construiu sua carreira como uma das mais respeitadas artistas de realismo e aquarela do Brasil. Formada pela Escola de Artes Visuais de São Paulo, aperfeiçoou sua técnica em estúdios de referência em Nova York, onde absorveu influências do movimento editorial contemporâneo. Cada peça é tratada como uma obra de arte permanente — da composição inicial ao último detalhe de sombreamento.",
    instagram: "https://instagram.com/",
    achievements: [
      "Formação: Escola de Artes Visuais SP",
      "Residência: NYC Tattoo Studio (2019)",
      "Premiada: Convenção SP 2022 — Melhor Realismo",
      "Especialização em Pigmentos Aquarela",
    ],
  },
  {
    id: "2",
    name: "Carlos Mendes",
    role: "Old School & Geométrico",
    photo: "/tatto/Carlos%20Mendes-artista.jpg",
    specialties: ["Old School", "Tradicional", "Geométrico"],
    experience: "12 anos",
    location: "São Paulo · Barcelona",
    sessionsCompleted: "+580",
    rating: "5.0",
    sampleWorks: [
      "/gallery/gallery4.jpg",
      "/gallery/gallery5.jpg",
      "/gallery/gallery6.jpg",
    ],
    bio: "Mestre em estilos tradicionais e contemporâneos. Convenções internacionais e certificações avançadas.",
    longBio:
      "Com 12 anos de carreira, Carlos Mendes é referência em estilos tradicionais e geométricos. Participou de convenções internacionais em Barcelona, Londres e Buenos Aires, acumulando prêmios e reconhecimento pela consistência e identidade visual única de seu trabalho. Possui certificações em técnicas avançadas de sombreamento e é um dos poucos artistas do país com domínio completo do estilo Neo-Traditional.",
    instagram: "https://instagram.com/",
    achievements: [
      "12 anos de experiência ativa",
      "Expositor: Barcelona Tattoo World (2021, 2023)",
      "Certificado: Neo-Traditional Advanced",
      "Premiado em 3 categorias internacionais",
    ],
  },
  {
    id: "3",
    name: "Ana Oliveira",
    role: "Fine Line & Minimalismo",
    photo: "/tatto/Ana%20Oliveira-artista.jpg",
    specialties: ["Fine line", "Minimalista", "Pontilhismo"],
    experience: "5 anos",
    location: "São Paulo",
    sessionsCompleted: "+180",
    rating: "4.8",
    sampleWorks: [
      "/gallery/gallery7.jpg",
      "/gallery/gallery8.jpg",
      "/gallery/gallery1.jpg",
    ],
    bio: "Especializada em traços finos e designs minimalistas. Formada em Artes Plásticas.",
    longBio:
      "Ana Oliveira descobriu no pontilhismo e no fine line a linguagem perfeita para traduzir emoção com delicadeza. Formada em Artes Plásticas com ênfase em ilustração contemporânea, traz para a pele uma sensibilidade visual que poucos artistas conseguem alcançar em traços tão sutis. Seu portfólio reflete uma busca constante por minimalismo com máximo impacto.",
    instagram: "https://instagram.com/",
    achievements: [
      "Formação: Artes Plásticas FAAP",
      "Especialização em Pontilhismo Contemporâneo",
      "Colaboração com marcas de moda",
      "Featured: Tattoo Magazine BR 2023",
    ],
  },
  {
    id: "4",
    name: "Rafael Costa",
    role: "Oriental & Cover Up",
    photo: "/tatto/Rafael%20Costa-artista.jpeg",
    specialties: ["Oriental", "Colorido", "Cover up"],
    experience: "10 anos",
    location: "São Paulo · Tóquio",
    sessionsCompleted: "+440",
    rating: "4.9",
    sampleWorks: [
      "/gallery/gallery2.jpg",
      "/gallery/gallery5.jpg",
      "/gallery/gallery8.jpg",
    ],
    bio: "Especialista em arte oriental e coberturas complexas. Técnicas tradicionais no Japão.",
    longBio:
      "Rafael Costa é um dos poucos artistas brasileiros com formação direta em técnicas tradicionais japonesas de tatuagem — estudou em Tóquio por dois anos e trabalhou em estúdios de referência na Ásia e Europa. Seu domínio em cover ups complexos e composições orientais é reconhecido nacionalmente. Cada projeto é tratado como uma narrativa visual que dialoga com a história e a pele do cliente.",
    instagram: "https://instagram.com/",
    achievements: [
      "Residência: Tóquio Tattoo Studio (2017–2019)",
      "Especialista em Tebori Japonês",
      "Cover ups de alto padrão — 98% de aprovação",
      "Premiado: Melhor Oriental — Expo Tattoo RJ",
    ],
  },
];

/* ── Artist Profile Modal ── */
const ArtistModal = ({
  artist,
  onClose,
}: {
  artist: Artist;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 80, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 80, opacity: 0, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_40px_160px_-40px_rgba(0,0,0,0.95)]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white/60 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl sm:rounded-t-3xl">
          <img
            src={artist.photo}
            alt={artist.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
          {/* Artist info overlay */}
          <div className="absolute bottom-5 left-6 right-6">
            <div className="inline-flex items-center gap-2 mb-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 backdrop-blur-md">
              <span className="h-1 w-1 rounded-full bg-brand-red animate-pulse" />
              {artist.role}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-white">
              {artist.name}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-7">
            {[
              { icon: <Clock className="h-4 w-4" />, value: artist.experience, label: "Experiência" },
              { icon: <Award className="h-4 w-4" />, value: artist.sessionsCompleted, label: "Sessões" },
              { icon: <Star className="h-4 w-4" />, value: artist.rating + "★", label: "Avaliação" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 bg-white/4 p-3 text-center"
              >
                <div className="flex justify-center text-brand-red mb-1">{s.icon}</div>
                <div className="font-bold text-lg text-white leading-none mb-0.5">{s.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <MapPin className="h-4 w-4 text-brand-red/60 shrink-0" />
            {artist.location}
          </div>

          {/* Bio */}
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-7 border-l-2 border-brand-red/30 pl-4">
            {artist.longBio}
          </p>

          {/* Specialties */}
          <div className="mb-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/40 mb-3">
              Especialidades
            </div>
            <div className="flex flex-wrap gap-2">
              {artist.specialties.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/40 mb-3">
              Formação & Conquistas
            </div>
            <ul className="space-y-2">
              {artist.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/65">
                  <ChevronRight className="h-4 w-4 text-brand-red/60 shrink-0 mt-0.5" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Sample works */}
          <div className="mb-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/40 mb-3">
              Portfólio
            </div>
            <div className="grid grid-cols-3 gap-2">
              {artist.sampleWorks.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-xl border border-white/10"
                >
                  <img
                    src={img}
                    alt={`Trabalho ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-red py-3.5 text-sm font-bold tracking-wide text-white hover:bg-brand-red/85 transition-colors shadow-[0_8px_30px_-8px_rgba(138,3,3,0.7)]"
          >
            Agendar com {artist.name.split(" ")[0]}
            <ChevronRight className="h-4 w-4" />
          </a>

          {artist.instagram && (
            <a
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/4 py-3 mt-3 text-sm font-bold tracking-wide text-white/60 hover:text-white hover:bg-white/8 transition-colors"
            >
              <Instagram className="h-4 w-4" />
              Ver Instagram
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Artist Card ── */
const ArtistCard = ({
  artist,
  index,
  onOpen,
}: {
  artist: Artist;
  index: number;
  onOpen: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] },
        },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer"
      onClick={onOpen}
    >
      {/* Image — overflow-hidden isolado aqui para o zoom não vazar */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
        {/* Wrapper extra isola o transform do img do clip do parent */}
        <div className="w-full h-full overflow-hidden">
          <motion.img
            src={artist.photo}
            alt={artist.name}
            className="w-full h-full object-cover object-center"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          />
        </div>
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Hover red glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-brand-red/30 to-transparent"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Specialties — appear on hover */}
        <motion.div
          className="absolute top-4 left-4 right-4 flex flex-wrap gap-1.5"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -8 }}
          transition={{ duration: 0.35 }}
        >
          {artist.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-red/80 mb-1">
            {artist.role}
          </div>
          <h3 className="font-display text-2xl tracking-tight text-white leading-none mb-3">
            {artist.name}
          </h3>

          {/* Stats row */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <Clock className="h-3 w-3" />
              {artist.experience}
            </div>
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <Star className="h-3 w-3 text-yellow-400/70" />
              {artist.rating}
            </div>
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <Award className="h-3 w-3" />
              {artist.sessionsCompleted} sessões
            </div>
          </div>

          {/* Ver perfil button */}
          <motion.div
            animate={{ y: hovered ? 0 : 6, opacity: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md w-fit group-hover:border-brand-red/40 group-hover:bg-brand-red/10 group-hover:text-white transition-colors duration-300">
              Ver perfil completo
              <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Section ── */
const ArtistsSection = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 text-white overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-brand-red/6 blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/60 backdrop-blur-md mb-6">
              <span className="h-1 w-1 rounded-full bg-brand-red animate-pulse" />
              O Time
              <span className="h-1 w-1 rounded-full bg-brand-red animate-pulse" />
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tight mb-4">
              Nossos Artistas
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-white/55 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed">
              Estilo, técnica e assinatura. Cada traço com intenção. Escolha o
              artista que fala com a sua identidade.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {artists.map((artist, i) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              index={i}
              onOpen={() => setSelectedArtist(artist)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4 tracking-wide">
            Não sabe qual artista escolher? A gente te ajuda.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md"
          >
            Consultar pelo WhatsApp
            <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <ArtistModal
            artist={selectedArtist}
            onClose={() => setSelectedArtist(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArtistsSection;