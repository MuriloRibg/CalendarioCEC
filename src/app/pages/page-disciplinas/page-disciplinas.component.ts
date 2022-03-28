import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastService } from 'angular-toastify';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { Disciplina } from './disciplina/disciplina';
import { DisciplinaService } from './disciplina/disciplina.service';

@Component({
  selector: 'app-page-disciplinas',
  templateUrl: './page-disciplinas.component.html',
  styleUrls: ['./page-disciplinas.component.scss'],
})
export class PageDisciplinasComponent implements OnInit {
  titulo: string = 'Disciplina';
  id!: number;
  filter: string = '';
  modalRef?: BsModalRef;
  disciplinas!: Disciplina[];

  page: number = 1;
  totalItems = 0;
  itemsPerPage = 6;
  maxSize = 3;
  rotate = true;
  hideProgressBar = false

  constructor(
    private disciplinaService: DisciplinaService,
    private modalService: BsModalService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.disciplinaService.listar('', this.page)
      .subscribe((disciplinas) => {
        this.disciplinas = disciplinas.disciplinas;
        this.totalItems = disciplinas.qtdTotalDisciplinas;
      });
  }

  pageChanged(event: PageChangedEvent) {
    this.disciplinaService
      .listar(this.filter, event.page)
      .subscribe((disciplinas) => {
        this.disciplinas = disciplinas.disciplinas;
        this.page = event.page;
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pegaId(id: number) {
    this.id = id;
  }

  disciplinaAdicionada(disciplina: Disciplina) {
    if (disciplina) {
      this.disciplinaService
        .listar(disciplina.nome, 1)
        .subscribe((disciplinas) => {
          this.disciplinas = disciplinas.disciplinas;
          this.totalItems = 1;
        });
    }
    this.modalService.hide();
  }

  pesquisa(pesquisa: string) {
    this.filter = pesquisa;
    this.disciplinaService.listar(pesquisa, 1).subscribe(
      (disciplina) => {
        this.disciplinas = disciplina.disciplinas;
        this.totalItems = disciplina.qtdTotalDisciplinas;
      },
      (err) => console.log(err)
    );
  }
}
