import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    pergunta: "Qual tamanho de caçamba devo escolher?",
    resposta:
      "A escolha depende do volume e do tipo de material gerado na obra. Reformas pequenas e resíduos de jardim costumam caber na caçamba de 3 m³, enquanto trocas de piso, grandes reformas e demolições pedem modelos maiores. Na dúvida, descreva sua obra pelo WhatsApp que indicamos o tamanho adequado.",
  },
  {
    pergunta: "Qual é o período padrão?",
    resposta: "O período padrão é de 07 dias inclusos.",
  },
  {
    pergunta: "Como faço para solicitar uma caçamba?",
    resposta:
      "Escolha o modelo no catálogo e clique no botão “Solicitar esta caçamba”. O WhatsApp abre com os dados da caçamba escolhida já preenchidos e nossa equipe segue o atendimento por lá.",
  },
  {
    pergunta: "Qual o valor da caçamba?",
    resposta:
      "Caçamba 3 m³: R$ 180,00 · Caçamba 4 m³: R$ 260,00 · Caçamba 5 m³: R$ 340,00 · Caçamba 7 m³: R$ 430,00 · Caçamba 10 m³: R$ 500,00. Todos os valores já consideram o período padrão de 07 dias inclusos.",
  },
  {
    pergunta: "Vocês atendem qual região?",
    resposta:
      "A área de atendimento é confirmada caso a caso. Envie o endereço da obra pelo WhatsApp para verificarmos a disponibilidade de entrega.",
  },
  {
    pergunta: "Posso colocar qualquer tipo de resíduo?",
    resposta:
      "Existem materiais que exigem tratamento específico. Antes de carregar a caçamba, confirme conosco pelo WhatsApp quais resíduos são permitidos para o seu caso.",
  },
];

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="duvidas" aria-labelledby="faq-titulo" className="bg-muted">
      <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <h2 id="faq-titulo" className="font-display text-3xl font-bold uppercase sm:text-4xl">
          Dúvidas frequentes
        </h2>

        <div className="mt-8 divide-y divide-border rounded-lg border border-border bg-card">
          {faqs.map((faq, i) => {
            const isOpen = aberto === i;
            return (
              <div key={faq.pergunta}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setAberto(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-bold uppercase transition-colors hover:text-primary"
                  >
                    {faq.pergunta}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="px-5 pb-5 text-muted-foreground">
                    {faq.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
