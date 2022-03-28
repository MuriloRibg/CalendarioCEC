import { TurmaService } from 'src/app/pages/page-turmas/turma/turma.service';
import { Turma } from 'src/app/pages/page-turmas/turma/turma';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-page-turmas',
  templateUrl: './page-turmas.component.html',
  styleUrls: ['./page-turmas.component.scss']
})
export class PageTurmasComponent implements OnInit {

  titulo: string = 'Turma';
  id!: number;
  filter: string= '';
  modalRef?: BsModalRef;
  turmas!: Turma[]

  page: number = 1;
  totalItems = 0;
  itemsPerPage = 6;
  maxSize = 3;
  rotate = true;

  hideProgressBar = false;

  constructor(
    private modalService: BsModalService,
    private turmaService: TurmaService,
    private _toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.turmaService.listar('', this.page).subscribe(turmas => {
      this.turmas = turmas.turmas
      this.totalItems = turmas.qtdTotalTurmas;
    });
  }

  pageChanged(event: PageChangedEvent){
    this.turmaService.listar(this.filter, event.page).subscribe(turmas => {
      this.turmas = turmas.turmas;
      this.page = event.page;
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pegaId(id: number){
    this.id = id;
  }

  turmaAdicionada(turma: Turma){
    if (turma) {
      this.turmaService.listar(turma.nome, 1).subscribe(turmas => {
        this.turmas = turmas.turmas;
        this.totalItems = 1;
        this._toastService.success('Turma adicionada com sucesso!');
      });
    }
    this.modalService.hide();
  }

  pesquisa(pesquisa: string) {
    this.filter = pesquisa;
    this.turmaService.listar(pesquisa, 1)
      .subscribe(turmas => {
        this.turmas = turmas.turmas;
        this.totalItems = turmas.qtdTotalTurmas;
      },
      err => console.log(err) 
    )
  }
}
