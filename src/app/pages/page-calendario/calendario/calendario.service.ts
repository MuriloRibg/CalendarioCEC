import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from '../../page-turmas/turma/turma';

const API = environment.API

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private httpClient: HttpClient) { }

  
}
