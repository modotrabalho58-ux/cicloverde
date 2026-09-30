import { Truck } from "lucide-react";
import { NAV_LINKS, SITE } from "@/config/site";
import { generateWhatsAppLink } from "@/config/whatsapp";
import { WhatsAppButton, WhatsAppIcon } from "./WhatsAppButton";

export function Footer() {
  const link = generateWhatsAppLink();

  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground">
              <Truck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold uppercase">{SITE.nome}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-steel-foreground/70">
            Aluguel de caçambas para entulho de obras: reformas, construções, demolições e remoção
            de entulho. Período padrão de 07 dias inclusos.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-display text-base font-bold uppercase tracking-wider">Navegação</h2>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-steel-foreground/70 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold uppercase tracking-wider">Contato</h2>
          <p className="mt-4 text-sm text-steel-foreground/70">
            O atendimento é feito pelo WhatsApp. Envie sua dúvida ou solicite um orçamento.
          </p>
          <WhatsAppButton href={link} variant="whatsapp" className="mt-4">
            <WhatsAppIcon className="h-4 w-4" />
            Falar conosco
          </WhatsAppButton>
        </div>
      </div>

      <div className="border-t border-steel-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-steel-foreground/60">
          © {SITE.ano} {SITE.nome} — {SITE.descricaoCurta}.
        </p>
      </div>
    </footer>
  );
}
