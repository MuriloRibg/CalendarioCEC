import { Pilar } from "src/app/core/pilar/pilar";

export interface Turma {
  id?: number;
  nome?: string;
  quant_alunos?: number;
  pilar?: Pilar;
}

// export type Turmas = Array<Turma>;

export interface ResponseTurma{
  turmas: Turma[];
  qtdTotalTurmas: number;
}

