import { NomeDisciplinaValidationService } from './nome-disciplina.validation.service';
import { DisciplinaService } from './../disciplina/disciplina.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Disciplina } from '../disciplina/disciplina';
import { PilarService } from 'src/app/core/pilar/pilar.service';
import { Observable } from 'rxjs';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.scss'],
})
export class DisciplinaFormComponent implements OnInit {
  @Input() tituloModal: string = 'Cadastro de Disciplina';
  @Input() disciplina: Disciplina = {};

  @Output() idDisciplina = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  formDisciplina!: FormGroup;
  pilares$!: Observable<string[]>;
  hideProgressBar = false;

  constructor(
    private formBuilder: FormBuilder,
    private disciplinaService: DisciplinaService,
    private pilarService: PilarService,
    private validationService: NomeDisciplinaValidationService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.pilares$ = this.pilarService.listaPilares();

    this.formDisciplina = this.formBuilder.group({
      nome: [this.disciplina.nome,[Validators.required],[this.validationService.checarNomeDisciplina()],],
      pilar: [this.disciplina.pilar, Validators.required],
    });
  }

  enviar(): void {
    const disciplina = this.formDisciplina.getRawValue() as Disciplina;

    if (this.disciplina.id) {
      this.disciplinaService
        .atualizar(this.disciplina.id, disciplina)
        .subscribe((disciplina) => {
          this._toastService.success(`Disciplina atualizanda com sucesso!`)
          this.idDisciplina.emit(disciplina);
        });
    } else {
      this.disciplinaService.adicionar(disciplina).subscribe(
        (disciplina) => {
          this._toastService.success(`${disciplina.nome} adicionando(a) com sucesso!`)
          this.idDisciplina.emit(disciplina);
        },
        (erro) => {
          const errors = erro.error;
          this._toastService.error(errors[0].message);
        }
      );
    }
  }
}
