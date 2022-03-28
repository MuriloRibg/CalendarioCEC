export interface Instrutor {
  id?: number;
  nome?: string;
  abreviacao?: string;
  email?: string;
  disponibilidade?: string;
  pilar?: string;
}

export interface ResponseInstrutor{
  instrutores: Instrutor[];
  qtdTotalInstrutores: number;
}


export interface ResponseValidacaoInstrutor {
  reasons: { message: string; metadata: string };
  status: boolean;
}
