import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

import { Disciplina, ResponseDisciplina, ResponseValidacaoDisciplina } from './disciplina';

const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {

  constructor(private httpClient: HttpClient) {}

  listar(pesquisa?: string, page?: number): Observable<ResponseDisciplina> {
    return this.httpClient.get<ResponseDisciplina>(`${API}/disciplina?pesquisa=${pesquisa ?? ''}&page=${page ?? 0}`);
  }

  listarPorPilar(pilar: string): Observable<Disciplina[]>{
    return this.httpClient.get<Disciplina[]>(`${API}/disciplina/pilar?pilar=${pilar}`);
  }

  verificarNomeDisciplina(nomeDisciplina: string): Observable<ResponseValidacaoDisciplina>{
    return this.httpClient.get<ResponseValidacaoDisciplina>(`${API}/disciplina/validar/${nomeDisciplina}`);
  }

  pegarPorId(id: number): Observable<Disciplina>{
    return this.httpClient.get<Disciplina>(`${API}/disciplina/${id}`);
  }

  adicionar(novaDisciplina: Disciplina): Observable<Disciplina>{
    return this.httpClient.post<Disciplina>(`${API}/disciplina`, novaDisciplina)
  }

  atualizar(id: number, infoDisciplina: Disciplina): Observable<Disciplina>{
    return this.httpClient.put<Disciplina>(`${API}/disciplina/${id}`, infoDisciplina);
  }

  excluir(id: number): Observable<Disciplina>{
   return this.httpClient.delete<Disciplina>(`${API}/disciplina/${id}`);
  }
}
