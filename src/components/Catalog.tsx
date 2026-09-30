import { dumpsters } from "@/data/dumpsters";
import { DumpsterCard } from "./DumpsterCard";

export function Catalog() {
  return (
    <section id="cacambas" aria-labelledby="catalogo-titulo" className="bg-muted">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Catálogo</span>
          <h2
            id="catalogo-titulo"
            className="mt-2 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl"
          >
            Escolha a caçamba ideal para sua obra
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Confira os tamanhos, valores e indicações de uso.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {dumpsters.map((d) => (
            <DumpsterCard key={d.id} dumpster={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
