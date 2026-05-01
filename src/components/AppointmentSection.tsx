import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowInkIcon, CalendarMarkIcon, ClockDialIcon, PinDropIcon, RazorIcon } from "./StudioIcons";

interface AppointmentSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  whatsappNumber?: string;
  bookingUrl?: string;
  phoneNumber?: string;
}

const AppointmentSection = ({
  title = "Agende sua Sessão",
  subtitle = "Converse direto com o estúdio. Você manda a referência e a gente confirma a melhor data disponível.",
  backgroundImage = "/gallery/tatto.png",
  whatsappNumber = "5511999999999",
  bookingUrl = "https://wa.me/",
  phoneNumber = "(11) 99999-9999",
}: AppointmentSectionProps) => {
  const waLink =
    bookingUrl?.includes("wa.me")
      ? `${bookingUrl.replace(/\/$/, "")}/${whatsappNumber}`
      : `https://wa.me/${whatsappNumber}`;

  const telLink = `tel:${phoneNumber.replace(/[^\d+]/g, "")}`;

  // Reusable feature item component
  const FeatureItem = ({ icon: Icon, title, description }) => (
    <div className="flex items-center gap-5 mb-6 group">
      <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-white/8 border border-white/10 shadow-[0_18px_70px_-42px_rgba(0,0,0,0.9)]">
        <Icon className="w-7 h-7 text-white/75 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-white/65 text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="relative w-full min-h-[720px] overflow-hidden py-16">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#080808]">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/90 to-black/85 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_520px_at_10%_50%,rgba(108,2,2,0.15),transparent_60%)] z-10" />
        <img
          src={backgroundImage}
          alt="Estúdio de tatuagem background"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity grayscale-[50%]"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-white/70 text-[10px] font-bold uppercase tracking-[0.28em] mb-6 border border-white/10">
            Estúdio privado
            <span className="h-1 w-1 rounded-full bg-brand-red" />
            Sessões exclusivas
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-6 leading-[1.0]">
            {title}
          </h2>
          <p className="text-white/70 mb-10 max-w-md text-lg">{subtitle}</p>
          <div className="hidden md:block space-y-2">
            <FeatureItem 
              icon={CalendarMarkIcon}
              title="Na hora (sem formulário)"
              description="Você chama no WhatsApp e a gente confirma a melhor data disponível"
            />
            <FeatureItem 
              icon={ClockDialIcon}
              title="Resposta rápida"
              description="Confirmação rápida durante o horário do estúdio"
            />
            <FeatureItem 
              icon={PinDropIcon}
              title="Localização"
              description="Detalhes do endereço enviados após confirmação"
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button asChild size="lg" className="px-10">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <ArrowInkIcon className="h-5 w-5" />
                Agendar agora
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-10">
              <a href={telLink}>
                <RazorIcon className="h-5 w-5" />
                Ligar
              </a>
            </Button>
          </div>
        </div>

        {/* Agendamento na hora (sem formulário) */}
        <Card className="w-full">
          <CardContent className="p-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
              Agendamento
            </div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
              Chama no WhatsApp e fecha na hora.
            </h3>
            <p className="mt-3 text-white/70">
              Envie: nome + serviço + preferência de horário. A gente responde com a melhor opção disponível.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button asChild size="lg" className="w-full">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <ArrowInkIcon className="h-5 w-5" />
                  WhatsApp (agora)
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <a href={telLink}>
                  <RazorIcon className="h-5 w-5" />
                  Ligar agora
                </a>
              </Button>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                Estilos e sessões
              </div>
              <div className="mt-3 grid gap-2 text-white/75">
                {[
                  "Flash",
                  "Fine line",
                  "Blackwork",
                  "Projeto autoral",
                ].map((s) => (
                  <div key={s} className="flex items-center justify-between">
                    <span>{s}</span>
                    <span className="text-white/45 text-xs">consulte agenda</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppointmentSection;