import { Reserva } from "src/app/core/reserva/reserva";
import { Disciplina } from "../../page-disciplinas/disciplina/disciplina";
import { Instrutor } from "../../page-instrutores/instrutor/instrutor";
import { Turma } from "../../page-turmas/turma/turma";

export interface Evento {
    id?: number;
    reserva?: Reserva;
    instrutor?: Instrutor;
    disciplina?: Disciplina;
    descricao?: string;
    turma?: Turma; //Turma;
}

export interface EventoRequest {
    id?: number;
    Id_Instrutor?: number;
    Id_Disciplina?: number;
    Id_Turma?: number; //Turma;
}
