import { Check } from "lucide-react";

const tipos = [
  "Pequenas reformas",
  "Reformas residenciais",
  "Troca de pisos",
  "Reformas de banheiros",
  "Obras de alvenaria",
  "Limpeza pós-obra",
  "Demolições",
  "Resíduos industriais",
  "Limpeza de terrenos",
  "Descarte de móveis",
];

export function WorkTypes() {
  return (
    <section aria-labelledby="tipos-obra-titulo" className="bg-muted">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:py-20">
        <h2 id="tipos-obra-titulo" className="font-display text-3xl font-bold uppercase sm:text-4xl">
          Tipos de obra atendidos
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A caçamba de entulho atende desde pequenas reformas residenciais até demolições e limpeza
          de terrenos.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tipos.map((tipo) => (
            <li
              key={tipo}
              className="flex items-center gap-3 rounded border border-border bg-card px-4 py-3"
            >
              <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">{tipo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
