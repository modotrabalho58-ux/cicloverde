# Ciclo Verde — Aluguel de Caçambas para Entulho

Landing page + catálogo de caçambas com conversão direta pelo WhatsApp.

## Stack

- React 19 + TypeScript
- TanStack Start / TanStack Router
- Tailwind CSS v4 (design system em `src/styles.css`)
- Vite

## Rodando localmente

```bash
bun install
bun run dev
```

Build de produção:

```bash
bun run build
```

## Configuração do WhatsApp

O número fica em um único lugar: `src/config/whatsapp.ts`
(ou na variável de ambiente `VITE_WHATSAPP_NUMBER` — veja `.env.example`).

- `generateWhatsAppLink(mensagem?)` — link genérico de contato/orçamento.
- `generateDumpsterWhatsAppLink(cacamba)` — link com os dados da caçamba
  selecionada já preenchidos na mensagem.

## Catálogo

Os produtos ficam em `src/data/dumpsters.ts` (5 caçambas: 3, 4, 5, 7 e 10 m³),
com nome, capacidade, preço, indicação, dimensões, período, destaque e imagem.

## Estrutura

```
src/
  assets/      imagens das caçambas e das obras
  components/  seções e componentes reutilizáveis
  config/      configuração central do site e do WhatsApp
  data/        catálogo de caçambas
  routes/      rotas (página única em routes/index.tsx)
  styles.css   design system (tokens semânticos)
```
