import img3 from "@/assets/cacamba-3.jpg";
import img4 from "@/assets/cacamba-4.jpg";
import img5 from "@/assets/cacamba-5.jpg";
import img7 from "@/assets/cacamba-7.jpg";
import img10 from "@/assets/cacamba-10.jpg";

export interface Dumpster {
  id: string;
  nome: string;
  capacidade: string;
  preco: string;
  indicacao: string;
  dimensoes: string;
  periodo: string;
  destaque: boolean;
  imagem: string;
  alt: string;
}

export const PERIODO_PADRAO = "07 dias inclusos";

export const dumpsters: Dumpster[] = [
  {
    id: "cacamba-3m3",
    nome: "Caçamba 3 m³",
    capacidade: "3 m³",
    preco: "R$ 180,00",
    indicacao: "Pequenas reformas e resíduos de jardim.",
    dimensoes: "2,0 x 1,6 x 1,0 m",
    periodo: PERIODO_PADRAO,
    destaque: false,
    imagem: img3,
    alt: "Caçamba de entulho estacionária de 3 m³ para pequenas reformas",
  },
  {
    id: "cacamba-4m3",
    nome: "Caçamba 4 m³",
    capacidade: "4 m³",
    preco: "R$ 260,00",
    indicacao: "Reformas de banheiros e obras residenciais médias.",
    dimensoes: "2,5 x 1,6 x 1,1 m",
    periodo: PERIODO_PADRAO,
    destaque: true,
    imagem: img4,
    alt: "Caçamba de entulho estacionária de 4 m³ para reformas residenciais",
  },
  {
    id: "cacamba-5m3",
    nome: "Caçamba 5 m³",
    capacidade: "5 m³",
    preco: "R$ 340,00",
    indicacao: "Troca de pisos, revestimentos e descarte de móveis.",
    dimensoes: "2,8 x 1,8 x 1,2 m",
    periodo: PERIODO_PADRAO,
    destaque: false,
    imagem: img5,
    alt: "Caçamba de entulho de 5 m³ com restos de piso e revestimento",
  },
  {
    id: "cacamba-7m3",
    nome: "Caçamba 7 m³",
    capacidade: "7 m³",
    preco: "R$ 430,00",
    indicacao: "Grandes reformas e limpeza pós-obra.",
    dimensoes: "3,2 x 1,8 x 1,4 m",
    periodo: PERIODO_PADRAO,
    destaque: false,
    imagem: img7,
    alt: "Caçamba de entulho de 7 m³ em obra de grande reforma",
  },
  {
    id: "cacamba-10m3",
    nome: "Caçamba 10 m³",
    capacidade: "10 m³",
    preco: "R$ 500,00",
    indicacao: "Demolições e resíduos industriais.",
    dimensoes: "4,5 x 2,2 x 1,6 m",
    periodo: PERIODO_PADRAO,
    destaque: false,
    imagem: img10,
    alt: "Caçamba de entulho industrial de 10 m³ em obra de demolição",
  },
];
