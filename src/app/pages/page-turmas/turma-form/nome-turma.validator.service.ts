import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, first, map, switchMap } from "rxjs";
import { TurmaService } from "../turma/turma.service";

@Injectable({
    providedIn: 'root'
})
export class NomeTurmaValidator {

    constructor(
        private turmaService: TurmaService
    ) {}

    validaNomeTurma() {
        return (control: AbstractControl) => {
            return control.valueChanges.pipe(
                debounceTime(300),
                switchMap((nomeTurma) => {
                    return this.turmaService.validarNomeTurma(nomeTurma);
                }),
                map((validacao) => (validacao.status ? { nomeEmUso : true } : null)),
                first()
            )
        }
    }

}