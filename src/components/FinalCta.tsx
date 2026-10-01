import { generateWhatsAppLink } from "@/config/whatsapp";
import { WhatsAppButton, WhatsAppIcon } from "./WhatsAppButton";

export function FinalCta() {
  const link = generateWhatsAppLink(
    "Olá! Gostaria de solicitar um orçamento para aluguel de caçamba.",
  );

  return (
    <section id="contato" aria-labelledby="cta-final-titulo" className="bg-secondary">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center text-secondary-foreground lg:py-20">
        <h2
          id="cta-final-titulo"
          className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl"
        >
          Pronto para organizar sua obra?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-foreground/90">
          Escolha o tamanho ideal da sua caçamba e fale com nossa equipe pelo WhatsApp.
        </p>
        <WhatsAppButton href={link} variant="primary" size="lg" className="mt-8">
          <WhatsAppIcon className="h-5 w-5" />
          Solicitar orçamento pelo WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
