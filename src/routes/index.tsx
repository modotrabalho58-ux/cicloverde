import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Catalog } from "@/components/Catalog";
import { HowItWorks } from "@/components/HowItWorks";
import { WorkTypes } from "@/components/WorkTypes";
import { SiteBanner } from "@/components/SiteBanner";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ClientIntegrationScript } from "@/components/ClientIntegrationScript";

const title = "Ciclo Verde | Aluguel de Caçambas para Entulho de Obras";
const description =
  "Aluguel de caçambas de 3 m³ a 10 m³ para reformas, construções, demolições e remoção de entulho. Período padrão de 07 dias inclusos. Solicite pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Catalog />
        <HowItWorks />
        <WorkTypes />
        <SiteBanner />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ClientIntegrationScript />
    </>
  );
}
