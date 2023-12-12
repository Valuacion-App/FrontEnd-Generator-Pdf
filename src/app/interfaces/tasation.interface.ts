export interface ITasation {
  CodigoTasacion: string;
  Codigo: string;
  Viñeta: string;
  Fecha: string;
  Ubication: string;
  Article: string;
  SubGroup: string;
  Detalle: string;
  Descripcion: string;
  Vre: string;
  Vr: string;
  Ant: string;
  Vexp: string;
  EstadoDelArticulo: string;
  K2: string;
  ValorDeReposicion: string;
  K1a: string;
  Va: string;
  Fotografia: {
    url: string;
    size: number;
    width: number;
    height: number;
    filename: string;
  },
  FotografiaII: {
    url: string;
    size: number;
    width: number;
    height: number;
    filename: string;
  },
  Created: string;
  Updated: string;
  IsCPU: boolean;
  AssignedTo: string;
}