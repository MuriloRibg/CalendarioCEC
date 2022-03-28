export interface Local {
  id?: number;
  nome?: string;
  capacidade?: number;
  sistemas?: boolean | string;
}
export interface ResponseLocal {
  locais: Local[];
  qtdTotalLocais: number;
}
