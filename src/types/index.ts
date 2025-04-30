export type Categoria = '2D' | '3D';
export type Censura = 'Livre' | '10 anos' | '12 anos' | '14 anos' | '16 anos';

export interface Movie {
  id: number;
  alt: string;
  src: string;
  titulo: string;
  categoria: Categoria;
  censura: Censura;
  genero: string;
  duracao: number;
};