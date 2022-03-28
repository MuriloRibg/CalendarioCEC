import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pilar, Categoria } from './pilar';

const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class PilarService {
  constructor(private http: HttpClient) {}

  listaPilares(): Observable<string[]> {
    return this.http.get<string[]>(`${API}/pilar/pilares`);
  }

  listaCategoriasPorPilar(pilar: string): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${API}/pilar/categorias?pilar=${pilar}`);
  }
}
