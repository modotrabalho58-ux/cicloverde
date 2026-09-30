import { Bookmark, CalendarDays, Maximize2 } from "lucide-react";
import type { Dumpster } from "@/data/dumpsters";
import { generateDumpsterWhatsAppLink } from "@/config/whatsapp";
import { WhatsAppButton, WhatsAppIcon } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

export function DumpsterCard({ dumpster }: { dumpster: Dumpster }) {
  const link = generateDumpsterWhatsAppLink(dumpster);

  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border bg-card shadow-card transition-shadow duration-200 hover:shadow-elevated",
        dumpster.destaque ? "border-2 border-primary" : "border-border",
      )}
    >
      <div className="relative">
        <img
          src={dumpster.imagem}
          alt={dumpster.alt}
          width={1024}
          height={768}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />
        {dumpster.destaque && (
          <span className="absolute left-0 top-3 inline-flex items-center gap-1.5 rounded-r bg-highlight px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-highlight-foreground">
            <Bookmark className="h-3.5 w-3.5" aria-hidden="true" />
            A mais solicitada
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-bold uppercase">{dumpster.nome}</h3>
        <p className="text-sm font-medium text-muted-foreground">
          Capacidade: {dumpster.capacidade}
        </p>

        <p className="mt-4 font-display text-4xl font-bold leading-none text-primary">
          {dumpster.preco}
        </p>
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
          {dumpster.periodo}
        </p>

        <hr className="my-4 border-border" />

        <p className="text-sm text-muted-foreground">{dumpster.indicacao}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <Maximize2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          {dumpster.dimensoes}
        </p>

        <WhatsAppButton
          href={link}
          variant="whatsapp"
          size="lg"
          className="mt-5 w-full"
          ariaLabel={`Solicitar ${dumpster.nome} pelo WhatsApp`}
        >
          <WhatsAppIcon className="h-5 w-5" />
          Solicitar esta caçamba
        </WhatsAppButton>
      </div>
    </article>
  );
}
