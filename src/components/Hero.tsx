import { CalendarCheck, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-cacamba.jpg";
import { generateWhatsAppLink } from "@/config/whatsapp";
import { WhatsAppButton, WhatsAppIcon } from "./WhatsAppButton";

export function Hero() {
  const link = generateWhatsAppLink(
    "Olá! Gostaria de informações sobre o aluguel de caçambas para minha obra.",
  );

  return (
    <section id="inicio" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            Aluguel de caçambas para entulho
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Aluguel de Caçambas para sua Obra
          </h1>
          <p className="mt-5 max-w-xl text-lg text-secondary-foreground/80">
            Caçambas para reformas, construções, demolições e remoção de entulho.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded border-l-4 border-primary bg-steel px-4 py-3 text-base font-semibold">
            <CalendarCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            Período padrão: 07 dias inclusos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton href={link} variant="whatsapp" size="lg">
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar pelo WhatsApp
            </WhatsAppButton>
            <a
              href="#cacambas"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-secondary-foreground/30 px-6 py-3.5 text-base font-semibold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
            >
              Ver Caçambas
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg shadow-elevated">
          <img
            src={heroImg}
            alt="Caçamba de entulho laranja posicionada em frente a uma obra residencial"
            width={1600}
            height={1008}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
