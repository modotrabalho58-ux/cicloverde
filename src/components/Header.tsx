import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { NAV_LINKS, SITE } from "@/config/site";
import { generateWhatsAppLink } from "@/config/whatsapp";
import { WhatsAppButton, WhatsAppIcon } from "./WhatsAppButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const orcamentoLink = generateWhatsAppLink(
    "Olá! Gostaria de solicitar um orçamento para aluguel de caçamba.",
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center gap-2" aria-label={`${SITE.nome} — início`}>
          <span className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground">
            <Truck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-tight">
            {SITE.nome}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton href={orcamentoLink} variant="primary">
            <WhatsAppIcon className="h-4 w-4" />
            Solicitar orçamento
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Navegação mobile" className="mx-auto max-w-7xl px-5 py-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <WhatsAppButton
              href={orcamentoLink}
              variant="primary"
              size="lg"
              className="mt-3 w-full"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar orçamento
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  );
}
