import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Instrutor, ResponseInstrutor, ResponseValidacaoInstrutor } from './instrutor';

const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class InstrutorService {

  constructor(private http: HttpClient) {}

  listar(pesquisa?: string, pagina?: number) {
    return this.http.get<ResponseInstrutor>(`${API}/instrutor?page=${pagina ?? 0}&pesquisa=${pesquisa ?? ''}`);
  }

  listarPorPilar(pilar: string): Observable<Instrutor[]>{
    return this.http.get<Instrutor[]>(`${API}/instrutor/pilar?pilar=${pilar}`);
  }

  validarEmailInstrutor(email: string): Observable<ResponseValidacaoInstrutor>{
    return this.http.get<ResponseValidacaoInstrutor>(`${API}/instrutor/validar/${email}`)
  }

  adicionar(instrutor: Instrutor) {
    return this.http.post<Instrutor>(`${API}/instrutor`, instrutor);
  }

  excluir(id: number) {
    return this.http.delete(`${API}/instrutor/${id}`);
  }

  pegaInstrutorPorId(id: number) {
    return this.http.get<Instrutor>(`${API}/instrutor/${id}`);
  }

  atualizar(id: number, infoAtualizada: Instrutor) {
    return this.http.put(`${API}/instrutor/${id}`, infoAtualizada);
  }
}
