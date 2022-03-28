import { Local } from "src/app/pages/page-locais/local/local";
import { Evento, EventoRequest } from "src/app/pages/page-visualizacao/evento/evento";

export interface Reserva {
    id: number;
    Id_Aula: number,
    titulo: string;
    dataInicio: Date;
    dataFim:Date;
    horaInicio: Date;
    horaFim: Date;
    local: Local;
    descricao?: string;
    aula?: Evento;
    evento?: Evento;
}

export interface ReservaRequest {
    titulo: string;
    dataInicio: Date;
    horaInicio: string;
    horaFim: string;
    Id_local: number;
    descricao?: string;
    aula?: EventoRequest;
    evento?: EventoRequest;
}

export interface ReservaResponse{
  reservasDto: Reserva[];
  qtdTotalReservas: number;
}
