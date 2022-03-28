import { debounceTime, switchMap, map, first } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { InstrutorService } from 'src/app/pages/page-instrutores/instrutor/instrutor.service';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class EmailInstrutorValidationService {
  constructor(private instrutorService: InstrutorService) {
  }

  checarEmailInstrutor() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(300),
        switchMap((email) => {
          return this.instrutorService.validarEmailInstrutor(email);
        }),
        map((validacao) => (validacao.status ? { emailEmUso: true } : null)),
        first() //Forçar a requisição a completar
      )
    };
  }

}
