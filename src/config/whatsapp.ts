import type { Dumpster } from "@/data/dumpsters";

/**
 * Configuração central do WhatsApp.
 * Altere o número aqui (ou via VITE_WHATSAPP_NUMBER) para refletir em todo o site.
 * Formato: código do país + DDD + número, apenas dígitos.
 */
export const WHATSAPP_NUMBER: string =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "5511999999999";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Gostaria de informações sobre o aluguel de caçambas.";

function buildLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Link genérico de contato/orçamento. */
export function generateWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return buildLink(message);
}

/** Link com os dados da caçamba selecionada já preenchidos. */
export function generateDumpsterWhatsAppLink(dumpster: Dumpster): string {
  const message = [
    `Olá! Gostaria de solicitar informações sobre a ${dumpster.nome}.`,
    "",
    `Capacidade: ${dumpster.capacidade}`,
    `Valor: ${dumpster.preco}`,
    `Dimensões: ${dumpster.dimensoes}`,
    `Período padrão: ${dumpster.periodo}.`,
    "",
    "Gostaria de confirmar disponibilidade e condições de aluguel.",
  ].join("\n");

  return buildLink(message);
}
