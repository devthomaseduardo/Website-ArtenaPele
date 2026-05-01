import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { ChevronRight, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

// Custom artisanal icons — hand-crafted SVG paths
const IconPencilSketch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 20l2.5-2.5M18.5 3.5a2 2 0 0 1 2 2L9 17l-3 1 1-3L18.5 3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6"/>
    <path d="M7 17.5c1-.5 3-1.5 4.5-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" strokeDasharray="1.5 1.5"/>
  </svg>
);

const IconCalendarThin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M3 10h18" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5"/>
    <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="12" cy="15" r="1.2" fill="currentColor" opacity="0.7"/>
    <path d="M8 15h1.5M14.5 15H16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4"/>
  </svg>
);

const IconNeedle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 19l12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14.5 5l4.5 4.5-1.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 7l-9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.45"/>
    <path d="M5 19l-1 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="19" cy="5" r="1.5" fill="currentColor" opacity="0.5"/>
  </svg>
);

const IconLeaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 21c0-6-4-10-9-11 1 5 4 9 9 11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M12 21c0-6 4-10 9-11-1 5-4 9-9 11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeOpacity="0.5"/>
    <path d="M12 21V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6"/>
  </svg>
);

interface Step {
  number: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  duration: string;
  image: string;
  color: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <IconPencilSketch className="h-6 w-6" />,
    label: "Briefing",
    title: "Concepção & Design",
    subtitle: "Sua ideia vira arte.",
    description:
      "Compartilhe a sua visão, referências, local do corpo, estilo preferido. Nossa equipe traduz tudo em um desenho autoral, respeitando a anatomia, a fluidez natural da pele e a longevidade do traço.",
    details: [
      "Consulta de referências e estilo",
      "Rascunho digital exclusivo",
      "Ajustes antes da sessão",
      "Orientação de posicionamento corporal",
    ],
    duration: "1–3 dias",
    image: "/editorial/artist-work-1.png",
    color: "from-brand-red/30 to-transparent",
  },
  {
    number: "02",
    icon: <IconCalendarThin className="h-6 w-6" />,
    label: "Agendamento",
    title: "Consultoria & Agenda",
    subtitle: "Direto, sem enrolação.",
    description:
      "Tudo alinhado via WhatsApp. Detalhamos o investimento real, o tempo estimado de sessão e a disponibilidade de agenda. Transparência total antes de qualquer confirmação.",
    details: [
      "Orçamento detalhado e honesto",
      "Escolha da data e horário",
      "Confirmação via WhatsApp",
      "Guia de preparação pré-sessão",
    ],
    duration: "Mesmo dia",
    image: "/editorial/studio-portrait-1.png",
    color: "from-white/10 to-transparent",
  },
  {
    number: "03",
    icon: <IconNeedle className="h-6 w-6" />,
    label: "Sessão",
    title: "Execução Impecável",
    subtitle: "Precisão e higiene absolutas.",
    description:
      "Chegue no horário, saia com uma obra-prima. Stencil posicionado com precisão, ambiente completamente esterilizado e o traço firme que a arte exige. Do primeiro ao último detalhe.",
    details: [
      "Ambiente 100% esterilizado",
      "Materiais descartáveis e certificados",
      "Ajuste fino do stencil",
      "Execução com foco total",
    ],
    duration: "1–8 horas",
    image: "/editorial/dragon-tattoo-1.png",
    color: "from-brand-red/20 to-transparent",
  },
  {
    number: "04",
    icon: <IconLeaf className="h-6 w-6" />,
    label: "Pós-Cuidado",
    title: "Pós-Procedimento",
    subtitle: "O cuidado não termina aqui.",
    description:
      "Você vai embora com a arte e com o protocolo de cicatrização completo. Acompanhamento via WhatsApp durante a healing phase e retoque incluído, sempre que necessário após avaliação.",
    details: [
      "Protocolo de cicatrização personalizado",
      "Acompanhamento via WhatsApp",
      "Retoque avaliado e incluído",
      "Suporte contínuo sem custo extra",
    ],
    duration: "30–60 dias",
    image: "/editorial/artist-work-2.png",
    color: "from-white/5 to-transparent",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 text-white overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full bg-brand-red/8 blur-[120px]" />
        <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-white/4 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/60 backdrop-blur-md mb-6">
              <span className="h-1 w-1 rounded-full bg-brand-red animate-pulse" />
              Processo Exclusivo
              <span className="h-1 w-1 rounded-full bg-brand-red animate-pulse" />
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight mb-4">
              A Jornada
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-white/60 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              Um ritual meticuloso em quatro atos, da ideia à pele, focado em exclusividade, segurança e longevidade da sua arte.
            </p>
          </Reveal>
        </div>

        {/* Step tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`
                flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em]
                border transition-all duration-300
                ${activeStep === i
                  ? "bg-brand-red/20 border-brand-red/60 text-white shadow-[0_0_30px_-10px_rgba(138,3,3,0.8)]"
                  : "bg-white/5 border-white/10 text-white/50 hover:border-white/25 hover:text-white/70"}
              `}
            >
              <span className={`transition-colors ${activeStep === i ? "text-brand-red" : "text-white/30"}`}>
                {step.icon}
              </span>
              <span className="hidden sm:inline">{step.number}</span> {step.label}
            </button>
          ))}
        </div>

        {/* Active step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left – Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl aspect-[4/3]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${current.color}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Step number badge */}
                <div className="absolute top-6 left-6">
                  <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/50 mb-1">Etapa</div>
                    <div className="font-display text-4xl leading-none text-white">{current.number}</div>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl px-4 py-2">
                  <Clock className="h-3.5 w-3.5 text-brand-red" />
                  <span className="text-[11px] font-bold tracking-wide text-white/80">{current.duration}</span>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex gap-2 justify-center mt-5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeStep === i ? "w-8 bg-brand-red" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right – Content */}
            <div className="order-1 lg:order-2 flex flex-col">
              <div className="inline-flex items-center gap-2 mb-4 text-[10px] font-bold uppercase tracking-[0.26em] text-brand-red">
                <span className="h-px w-8 bg-brand-red/60" />
                {current.label}
              </div>

              <h3 className="font-display text-4xl sm:text-5xl tracking-tight mb-2 leading-tight">
                {current.title}
              </h3>
              <p className="text-white/40 text-sm font-bold uppercase tracking-[0.2em] mb-6">{current.subtitle}</p>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 border-l-2 border-brand-red/40 pl-4">
                {current.description}
              </p>

              {/* Details list */}
              <ul className="space-y-3 mb-8">
                {current.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                    {detail}
                  </motion.li>
                ))}
              </ul>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-auto">
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition-all duration-300 backdrop-blur-md group"
                  >
                    Próxima etapa
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
                {activeStep === steps.length - 1 && (
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-brand-red/20 border border-brand-red/50 hover:bg-brand-red/30 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 group"
                  >
                    Começar minha jornada
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "+500", label: "Clientes atendidos" },
            { value: "100%", label: "Materiais esterilizados" },
            { value: "8+", label: "Anos de experiência" },
            { value: "4.9★", label: "Avaliação média" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/8 bg-white/4 backdrop-blur-md px-5 py-5 text-center"
            >
              <div className="font-display text-3xl sm:text-4xl tracking-tight text-white mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
