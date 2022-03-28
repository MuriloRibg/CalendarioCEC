import { ReservaResponse } from './reserva';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/core/reserva/reserva';
import { environment } from 'src/environments/environment';

const API = environment.API

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  listaReservas(data?: string, page?: number, pesquisa?: string, idTurma?: number): Observable<ReservaResponse>{
    return this.http.get<ReservaResponse>(
      `${API}/reserva?data=${data ?? ''}&pesquisa=${pesquisa ?? ''}&page=${page ?? 0}&idTurma=${idTurma ?? 0}`
      )
  }
  listaReservasPorData(data: string){
    return this.http.get<ReservaResponse>(
      `${API}/reserva?data=${data ?? ''}`
      )
  }
  listaReservasPorTurma(page?: number, pesquisa?: string, idTurma?: number){
    return this.http.get<ReservaResponse>(
      `${API}/reserva?pesquisa=${pesquisa ?? ''}&page=${page ?? 0}&idTurma=${idTurma ?? 0}`
      )
  }

  adicionaReserva(reserva: Reserva){
    return this.http.post<Reserva>(`${API}/reserva`, reserva);
  }

  atualizaReserva(id: number, reserva: Reserva){
    return this.http.put<any>(`${API}/reserva/${id}`, reserva);
  }

  deleteReserva(id: number): Observable<any>{
    return this.http.delete<any>(`${API}/reserva/${id}`);
  }

}
