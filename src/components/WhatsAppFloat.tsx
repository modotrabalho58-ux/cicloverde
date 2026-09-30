import { DEFAULT_WHATSAPP_MESSAGE, generateWhatsAppLink } from "@/config/whatsapp";
import { WhatsAppIcon } from "./WhatsAppButton";

export function WhatsAppFloat() {
  const link = generateWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a empresa pelo WhatsApp"
        className="group animate-fade-up relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated transition-transform duration-200 hover:scale-105"
      >
        <span className="animate-soft-pulse absolute inset-0 rounded-full" aria-hidden="true" />
        <WhatsAppIcon className="relative h-7 w-7" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden whitespace-nowrap rounded bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 lg:block"
        >
          Fale conosco pelo WhatsApp
        </span>
      </a>
    </div>
  );
}
