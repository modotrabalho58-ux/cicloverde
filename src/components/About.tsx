import { Clock, Recycle, Headset, Hammer } from "lucide-react";

const pilares = [
  { icon: Headset, titulo: "Atendimento direto", texto: "Contato rápido pelo WhatsApp, sem burocracia." },
  { icon: Clock, titulo: "Agilidade", texto: "Escolha, solicitação e confirmação em poucos passos." },
  { icon: Hammer, titulo: "Foco em obras", texto: "Caçambas para reformas, construções e demolições." },
  { icon: Recycle, titulo: "Destinação do entulho", texto: "Entulho concentrado em um só lugar e retirado da obra." },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            Sobre a empresa
          </span>
          <h2
            id="sobre-titulo"
            className="mt-2 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl"
          >
            Solução prática para remoção de entulho
          </h2>
          <p className="mt-5 text-secondary-foreground/80">
            Trabalhamos com aluguel de caçambas para entulho de obras, atendendo reformas,
            construções, demolições e limpeza pós-obra. Nosso objetivo é simples: dar ao cliente um
            caminho direto para resolver a retirada de entulho, sem processos complicados.
          </p>
          <p className="mt-4 text-secondary-foreground/80">
            O catálogo apresenta os tamanhos disponíveis com valores e indicações de uso, para que
            você escolha a caçamba adequada e fale com a nossa equipe em poucos cliques. Toda a
            solicitação é feita pelo WhatsApp, com confirmação de disponibilidade e condições antes
            da entrega.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {pilares.map(({ icon: Icon, titulo, texto }) => (
            <li key={titulo} className="rounded border border-secondary-foreground/15 bg-steel p-5">
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold uppercase">{titulo}</h3>
              <p className="mt-1 text-sm text-secondary-foreground/75">{texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
