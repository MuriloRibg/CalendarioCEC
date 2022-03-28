import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseValidacaoDisciplina } from '../../page-disciplinas/disciplina/disciplina';

import { Turma, ResponseTurma } from './turma';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private http: HttpClient) {}

  listar(pesquisa?: string, pagina?: number) {
    return this.http.get<ResponseTurma>(`${API}/turma?page=${pagina ?? 0}&pesquisa=${pesquisa ?? ''}`);
  }

  validarNomeTurma(nomeTurma: string): Observable<ResponseValidacaoDisciplina> {
    return this.http.get<ResponseValidacaoDisciplina>(`${API}/turma/validar/${nomeTurma}`);
  }

  adicionar(turma: Turma){
    return this.http.post<Turma>(`${API}/turma`, turma);
  }

  excluir(id: number){
    return this.http.delete(`${API}/turma/${id}`)
  }

  pegaTurmaPorId(id: number){
    return this.http.get<Turma>(`${API}/turma/${id}`);
  }

  atualizar(id: number, infoAtualizada: Turma){
    return this.http.put<Turma>(`${API}/turma/${id}`, infoAtualizada);
  }
}
