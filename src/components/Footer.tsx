import React from "react";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  studioName?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const Footer = ({
  studioName = "GRAVURA",
  address = "Centro da cidade. Endereço detalhado após confirmação",
  phone = "(11) 99999-9999",
  email = "contato@estudioblack.com.br",
  socialLinks = {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
  },
}: FooterProps) => {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* ── Video background ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          src="/videos/footer.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        {/* Scrim so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_30%_60%,rgba(0, 0, 0, 0.85),transparent_65%)]" />
      </div>

      {/* ── Top separator line removed ── */}

      {/* ── Main content ── */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Studio Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display text-2xl tracking-tight">
              {studioName}
              <span className="ml-2 align-middle inline-block h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Estúdio de tatuagem com estética escura, técnica e acabamento impecável. Arte que dura.
            </p>
            <div className="flex space-x-3 mt-2">
              {[
                { href: socialLinks.instagram, icon: <Instagram size={18} /> },
                { href: socialLinks.facebook, icon: <Facebook size={18} /> },
                { href: socialLinks.twitter, icon: <Twitter size={18} /> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display text-xl tracking-tight">Contato</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red/60 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red/60 shrink-0" />
                <span className="text-white/60 text-sm">{phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red/60 shrink-0" />
                <span className="text-white/60 text-sm">{email}</span>
              </div>
            </div>
          </div>

          {/* Hours & Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display text-xl tracking-tight">Horários</h3>
            <div className="text-white/60 text-sm space-y-1.5">
              <p>Segunda a Sexta: <span className="text-white/80">10h às 20h</span></p>
              <p>Sábado: <span className="text-white/80">10h às 18h</span></p>
              <p>Domingo: <span className="text-white/40">Fechado</span></p>
            </div>

            <div className="mt-2">
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white/50 mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-white/5 border border-white/10 text-white text-sm px-4 py-2.5 rounded-l-full w-full focus:outline-none focus:ring-1 focus:ring-brand-red/50 placeholder:text-white/30"
                />
                <Button
                  variant="default"
                  size="sm"
                  className="rounded-l-none rounded-r-full bg-brand-red hover:bg-brand-red/80 px-5"
                >
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 text-center text-white/35 text-xs">
          <p>
            © {new Date().getFullYear()} {studioName}. Todos os direitos reservados.{" "}
            Desenvolvido por{" "}
            <a
              href="https://github.com/devthomaseduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white underline underline-offset-4 decoration-brand-red/50 transition-colors"
            >
              devthomaeduardo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
