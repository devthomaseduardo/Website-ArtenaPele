import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ClockDialIcon, PinDropIcon, RazorIcon } from "./StudioIcons";

interface LocationSectionProps {
  title?: string;
  subtitle?: string;
  addressLabel?: string;
  hoursLabel?: string;
  mapsUrl?: string;
}

const LocationSection = ({
  title = "No centro. Entrada discreta.",
  subtitle = "Chegada fácil, atendimento com privacidade. Abra o mapa e venha no horário.",
  addressLabel = "Centro da cidade • referência enviada após confirmação",
  hoursLabel = "Seg a Sáb • 10h a 20h",
  mapsUrl = "https://www.google.com/maps",
}: LocationSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 backdrop-blur-md"
          >
            Localização
            <span className="h-1 w-1 rounded-full bg-brand-red" />
            Estúdio Black
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 font-display text-5xl md:text-6xl tracking-tight leading-[1.02]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-white/70 max-w-xl"
          >
            {subtitle}
          </motion.p>

          <div className="mt-8 grid gap-3 max-w-xl">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                <PinDropIcon className="h-5 w-5 text-white/80" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
                  Endereço
                </div>
                <div className="mt-1 text-white/75">{addressLabel}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                <ClockDialIcon className="h-5 w-5 text-white/80" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
                  Horários
                </div>
                <div className="mt-1 text-white/75">{hoursLabel}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="px-10">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <RazorIcon className="h-4 w-4" />
                Abrir no mapa
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10"
              onClick={() =>
                document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Agendar horário
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full"
        >
          <Card className="h-full overflow-hidden">
            <CardHeader className="pb-0">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                Mapa
              </div>
              <div className="mt-2 text-sm text-white/70">
                Prévia do centro. Detalhes completos após confirmação do agendamento.
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <iframe
                  title="Mapa"
                  className="h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=centro%20sao%20paulo&output=embed"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_20%,rgba(138,3,3,0.20),transparent_60%)]" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;

