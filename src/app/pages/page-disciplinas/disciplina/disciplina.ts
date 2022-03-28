export interface Disciplina {
  id?: number;
  nome?: string;
  pilar?: string;
}

export interface ResponseDisciplina {
  disciplinas: Disciplina[];
  qtdTotalDisciplinas: number;
}

export interface ResponseValidacaoDisciplina {
  reasons: { message: string; metadata: string };
  status: boolean;
}
