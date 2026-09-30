export const SITE = {
  nome: "Ciclo Verde",
  descricaoCurta: "Aluguel de caçambas para entulho de obras",
  ano: new Date().getFullYear(),
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Caçambas", href: "#cacambas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
] as const;
