import { Categoria } from './../../../core/pilar/pilar';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { PilarService } from 'src/app/core/pilar/pilar.service';
import { TurmaService } from '../turma/turma.service';
import { Turma } from '../turma/turma';
import { ToastService } from 'angular-toastify';
import { NomeTurmaValidator } from './nome-turma.validator.service';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.scss'],
})
export class TurmaFormComponent implements OnInit {

  @ViewChild('selectId_pilar') selectId_pilar!: ElementRef<HTMLInputElement>;
  @Output() idTurma = new EventEmitter();

  @Input() tituloModal: string = 'Cadastro de Turma';
  @Input() turma!: Turma;
  pilares$!: Observable<string[]>;
  categorias!: Categoria[];

  formTurma!: FormGroup;
  hideProgressBar= false

  constructor(
    private formBuilder: FormBuilder,
    private turmaService: TurmaService,
    private pilarService: PilarService,
    private nomeTurmaValidator: NomeTurmaValidator,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    if(this.turma){
      this.pegaPorPilar(this.turma?.pilar?.nomePilar ?? '')
    }

    this.pilares$ = this.pilarService.listaPilares();
    this.formTurma = this.formBuilder.group({
      nome: [this.turma?.nome, [Validators.required], this.nomeTurmaValidator.validaNomeTurma()],
      quant_alunos: [this.turma?.quant_alunos, [Validators.required]],
      pilar: [this.turma?.pilar?.nomePilar, [Validators.required]],
      id_pilar: [
        { value: this.turma?.pilar?.id ?? null, disabled: true },
        [Validators.required],
      ],
    });
  }

  pegaPorPilar(pilar: string) {
    this.pilarService.listaCategoriasPorPilar(pilar)
    .subscribe((categorias) => {
      this.categorias = categorias;
      this.selectId_pilar.nativeElement.disabled = false;
    })
  }

  enviar() {
    const turma = this.formTurma.getRawValue() as Turma;
    console.log(turma)

    if (this.turma?.id) {
      this.turmaService
        .atualizar(this.turma.id, turma)
        .subscribe((turmas) => {
          this._toastService.success("Turma atualizada com sucesso!")
          this.idTurma.emit(turmas?.id)
        }
        , err => {
          const erros: any[] = err.error
          erros.forEach(erro => {
            this._toastService.error(erro.message);
          });
        });
      } else {
        this.turmaService.adicionar(turma).subscribe((turma) => {
          this._toastService.success(`${turma.nome} adicionada com sucesso!`)
          this.idTurma.emit(turma?.id);
      }, err => {
        const erros: any[] = err.error
        erros.forEach(erro => {
          this._toastService.error(erro.message);
        });
      });
    }
  }
}
