import obraImg from "@/assets/obra-alvenaria.jpg";
import { generateWhatsAppLink } from "@/config/whatsapp";
import { WhatsAppButton, WhatsAppIcon } from "./WhatsAppButton";

export function SiteBanner() {
  const link = generateWhatsAppLink("Olá! Gostaria de alugar uma caçamba para minha obra.");

  return (
    <section aria-labelledby="organizacao-titulo" className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-20">
        <img
          src={obraImg}
          alt="Obra de alvenaria organizada com caçamba de entulho no canteiro"
          width={1600}
          height={912}
          loading="lazy"
          decoding="async"
          className="w-full rounded-lg object-cover shadow-card"
        />
        <div>
          <h2
            id="organizacao-titulo"
            className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl"
          >
            Mais organização e praticidade para sua obra
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tenha um local adequado para concentrar o entulho e mantenha sua obra mais organizada.
          </p>
          <WhatsAppButton href={link} variant="primary" size="lg" className="mt-7">
            <WhatsAppIcon className="h-5 w-5" />
            Alugar uma caçamba
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
