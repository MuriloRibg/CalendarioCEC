import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Local, ResponseLocal } from './local';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) {}

  listar(pesquisa?: string, page: number=0): Observable<ResponseLocal>{
    return this.http.get<ResponseLocal>(`${API}/local?pesquisa=${pesquisa ?? ''}&page=${page ?? 0}`)
  }

  listarPorQuantidade(qtd_alunos: number): Observable<Local[]>{
    return this.http.get<Local[]>(`${API}/local/listar_qtd?qtd_alunos=${qtd_alunos}`);
  }

  adicionar(local: Local){
    return this.http.post<Local>(`${API}/local`, local);
  }

  excluir(id: number){
    return this.http.delete(`${API}/local/${id}`);
  }

  pegaLocalPorId(id: number){
    return this.http.get(`${API}/local/${id}`);
  }

  atualizar(id: number, infoAtualizada: Local){
    return this.http.put(`${API}/local/${id}`, infoAtualizada);
  }
}
