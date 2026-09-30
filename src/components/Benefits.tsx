import { CalendarDays, Ruler, MousePointerClick, MessageCircle } from "lucide-react";

const items = [
  {
    icon: CalendarDays,
    titulo: "07 dias inclusos",
    texto: "Período padrão de locação de 07 dias.",
  },
  {
    icon: Ruler,
    titulo: "Diversos tamanhos",
    texto: "Caçambas de 3 m³ a 10 m³.",
  },
  {
    icon: MousePointerClick,
    titulo: "Escolha fácil",
    texto: "Encontre o tamanho adequado para sua obra.",
  },
  {
    icon: MessageCircle,
    titulo: "Atendimento pelo WhatsApp",
    texto: "Solicite informações e orçamento de forma rápida.",
  },
];

export function Benefits() {
  return (
    <section aria-labelledby="beneficios-titulo" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <h2 id="beneficios-titulo" className="sr-only">
          Benefícios do aluguel de caçamba
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, titulo, texto }) => (
            <li key={titulo} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-muted text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase">{titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
