import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Layers, Crown, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const plans = [
  {
    id: "flash",
    icon: <Zap className="h-5 w-5" />,
    name: "Flash",
    tag: "Ideal para estrear",
    price: "R$ 180",
    priceNote: "a partir de",
    description:
      "Artes prontas do estúdio. Direto, rápido e com acabamento impecável. Perfeito para quem quer começar.",
    features: [
      "Escolha do catálogo de flash",
      "Aplicação no mesmo dia (quando disponível)",
      "Ambiente 100% esterilizado",
      "Orientação de cuidados pós-tatuagem",
      "Retoque conforme avaliação",
    ],
    cta: "Quero meu Flash",
    popular: false,
    accentColor: "rgba(255,255,255,0.08)",
    borderColor: "rgba(255,255,255,0.1)",
  },
  {
    id: "sessao",
    icon: <Layers className="h-5 w-5" />,
    name: "Sessão",
    tag: "Mais escolhido",
    price: "R$ 350",
    priceNote: "a partir de",
    description:
      "Para projetos médios com personalização. Realismo, blackwork, fine line, com briefing e arte adaptada ao seu corpo.",
    features: [
      "Briefing e alinhamento de estilo",
      "Arte exclusiva adaptada ao corpo",
      "Ambiente 100% esterilizado",
      "Orientação de cuidados pós-tatuagem",
      "Retoque conforme avaliação",
      "Prioridade de agenda",
    ],
    cta: "Agendar Sessão",
    popular: true,
    accentColor: "rgba(138,3,3,0.15)",
    borderColor: "rgba(138,3,3,0.5)",
  },
  {
    id: "autoral",
    icon: <Crown className="h-5 w-5" />,
    name: "Projeto Autoral",
    tag: "Exclusivo",
    price: "Sob consulta",
    priceNote: "",
    description:
      "Criação de alto impacto. Peças grandes, composições elaboradas e múltiplas sessões com acompanhamento dedicado.",
    features: [
      "Design 100% exclusivo e autoral",
      "Planejamento personalizado por sessões",
      "Acompanhamento integral do projeto",
      "Ambiente 100% esterilizado",
      "Orientação de cuidados pós-tatuagem",
      "Agenda dedicada e prioritária",
    ],
    cta: "Conversar sobre o projeto",
    popular: false,
    accentColor: "rgba(255,255,255,0.05)",
    borderColor: "rgba(255,255,255,0.08)",
  },
];

const PricingSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 text-white overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-brand-red/6 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/60 backdrop-blur-md mb-6">
              <span className="h-1 w-1 rounded-full bg-brand-red animate-pulse" />
              Investimento
              <span className="h-1 w-1 rounded-full bg-brand-red animate-pulse" />
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tight mb-4">
              Sessões & Valores
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-white/55 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Orçamento varia por tamanho, complexidade e estilo.{" "}
              <span className="text-white/80 font-medium">
                Chama no WhatsApp
              </span>{" "}
              e a gente fecha na hora.
            </p>
          </Reveal>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
                },
              }}
              onHoverStart={() => setHovered(plan.id)}
              onHoverEnd={() => setHovered(null)}
              className="relative flex flex-col"
            >
              {/* Popular badge – above card */}
              {plan.popular && (
                <div className="flex justify-center mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_8px_32px_-8px_rgba(138,3,3,0.9)]">
                    <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
                    Mais Pedido
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className="relative flex flex-col flex-1 rounded-3xl border backdrop-blur-md overflow-hidden transition-all duration-500"
                style={{
                  background: plan.accentColor,
                  borderColor:
                    hovered === plan.id
                      ? plan.popular
                        ? "rgba(138,3,3,0.8)"
                        : "rgba(255,255,255,0.2)"
                      : plan.borderColor,
                  boxShadow:
                    hovered === plan.id && plan.popular
                      ? "0 30px 80px -30px rgba(138,3,3,0.5)"
                      : plan.popular
                      ? "0 20px_60px -30px rgba(138,3,3,0.3)"
                      : "none",
                }}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: plan.popular
                      ? "radial-gradient(600px at 50% 0%, rgba(138,3,3,0.15), transparent 70%)"
                      : "radial-gradient(600px at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
                    opacity: hovered === plan.id ? 1 : 0,
                  }}
                />

                {/* Top section */}
                <div className="relative z-10 p-6 pb-0">
                  {/* Icon + plan name */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-colors duration-300 ${
                          plan.popular
                            ? "border-brand-red/40 bg-brand-red/15 text-brand-red"
                            : "border-white/10 bg-white/5 text-white/60"
                        }`}
                      >
                        {plan.icon}
                      </div>
                      <div>
                        <div className="font-display text-lg sm:text-xl tracking-wide text-white leading-none">
                          {plan.name}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mt-0.5">
                          {plan.tag}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    {plan.priceNote && (
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40 mb-1">
                        {plan.priceNote}
                      </div>
                    )}
                    <div className="font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none">
                      {plan.price}
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-px w-full mb-4 ${
                      plan.popular ? "bg-brand-red/20" : "bg-white/8"
                    }`}
                  />

                  {/* Description */}
                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="relative z-10 px-6 pb-0 flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 group/feat">
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                            plan.popular
                              ? "bg-brand-red/20 group-hover/feat:bg-brand-red/35"
                              : "bg-white/8 group-hover/feat:bg-white/15"
                          }`}
                        >
                          <Check
                            className={`h-3 w-3 ${
                              plan.popular ? "text-brand-red" : "text-white/50"
                            }`}
                          />
                        </div>
                        <span className="text-white/60 text-sm leading-snug group-hover/feat:text-white/80 transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="relative z-10 p-6 pt-6 mt-auto">
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group flex w-full items-center justify-center gap-2 rounded-2xl py-3 px-5
                      text-sm font-bold tracking-wide transition-all duration-300
                      ${
                        plan.popular
                          ? "bg-brand-red text-white hover:bg-brand-red/85 shadow-[0_8px_30px_-8px_rgba(138,3,3,0.7)] hover:shadow-[0_12px_40px_-8px_rgba(138,3,3,0.9)]"
                          : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20"
                      }
                    `}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/35 text-xs mt-8 tracking-wide"
        >
          * Valores sujeitos a alteração conforme complexidade do projeto. Parcelamento disponível.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
