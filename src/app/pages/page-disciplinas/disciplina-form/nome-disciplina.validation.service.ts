import { DisciplinaService } from 'src/app/pages/page-disciplinas/disciplina/disciplina.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NomeDisciplinaValidationService {
  constructor(private disciplinaService: DisciplinaService) {}

  checarNomeDisciplina() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(300),
        switchMap((nomeDisciplina) => {
          return this.disciplinaService.verificarNomeDisciplina(nomeDisciplina);
        }),
        map((validacao) => (validacao.status ? { nomeEmUso: true } : null)),
        first() //Forçar a requisição a completar
      )
    };
  }
}
