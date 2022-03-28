import { ToastService } from 'angular-toastify';
import { switchMap, tap } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Disciplina } from './../disciplina/disciplina';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DisciplinaService } from '../disciplina/disciplina.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss'],
})
export class DisciplinasComponent implements OnInit, OnChanges {
  @Input() disciplinas!: Disciplina[];
  @Input() search: string = '';
  @Input() page: number = 1;
  disciplina!: Disciplina;

  hideProgressBar = false;

  @ViewChild('modalDelete', { static: true }) modalDelete!: TemplateRef<any>;
  @ViewChild('modalUpdate', { static: true }) modalUpdate!: TemplateRef<any>;

  constructor(
    private disciplinaService: DisciplinaService,
    private modalService: BsModalService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disciplinas']?.currentValue) {
      this.disciplinas = changes['disciplinas'].currentValue;
    }
    if(changes['page']?.currentValue){
      this.page = changes['page'].currentValue;
    }
  }

  openModal(template: TemplateRef<any>): void {
    this.modalService.show(template);
  }

  openModalUpdate(id: number): void {
    this.disciplinaService.pegarPorId(id).subscribe((disciplina) => {
      this.disciplina = disciplina;
      this.openModal(this.modalUpdate);
    });
  }

  openModalDelete(id: number): void {
    this.disciplinaService.pegarPorId(id).subscribe((disciplina) => {
      this.disciplina = disciplina;
      this.openModal(this.modalDelete);
    });
  }

  disciplinaAtualizado(disciplina: Disciplina) {
    this.disciplinaService.listar("", this.page).subscribe((disciplinas)=> {
      this.disciplinas = disciplinas.disciplinas;
      this.modalService.hide();
    })
  }

  onClose(): void {
    this.modalService.hide();
  }

  excluir() {
    const id = this.disciplina.id ?? 0;
    this.disciplinaService.excluir(id)
    .pipe(
      switchMap((mensagem: any) => {
        this._toastService.success(mensagem[0].message)
        return this.disciplinaService.listar("", this.page)
      }),
      tap(() => this.onClose())
    ).subscribe((disciplina => {
      this.disciplinas = disciplina.disciplinas
    }))
  }
}
