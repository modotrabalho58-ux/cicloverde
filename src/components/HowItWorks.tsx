import { ListChecks, MessageSquare, ClipboardCheck, Truck } from "lucide-react";

const steps = [
  {
    numero: "01",
    icon: ListChecks,
    titulo: "Escolha o tamanho",
    texto: "Veja as opções disponíveis e escolha a caçamba adequada.",
  },
  {
    numero: "02",
    icon: MessageSquare,
    titulo: "Solicite pelo WhatsApp",
    texto: "Clique no botão da caçamba desejada.",
  },
  {
    numero: "03",
    icon: ClipboardCheck,
    titulo: "Confirme os detalhes",
    texto: "Nossa equipe informa disponibilidade e condições.",
  },
  {
    numero: "04",
    icon: Truck,
    titulo: "Receba a caçamba",
    texto: "Combine o local e a entrega.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:py-20">
        <h2
          id="como-funciona-titulo"
          className="font-display text-3xl font-bold uppercase sm:text-4xl"
        >
          Como funciona
        </h2>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ numero, icon: Icon, titulo, texto }) => (
            <li key={numero} className="border-t-4 border-primary pt-5">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold leading-none text-muted-foreground/30">
                  {numero}
                </span>
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-display text-xl font-bold uppercase">{titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
