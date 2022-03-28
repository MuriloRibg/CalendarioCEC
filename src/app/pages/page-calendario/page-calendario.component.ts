import { LocalService } from './../page-locais/local/local.service';
import { TurmaService } from './../page-turmas/turma/turma.service';
import { Turma } from 'src/app/pages/page-turmas/turma/turma';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Instrutor } from '../page-instrutores/instrutor/instrutor';
import { Local } from '../page-locais/local/local';
import { Disciplina } from '../page-disciplinas/disciplina/disciplina';

@Component({
  selector: 'app-page-calendario',
  templateUrl: './page-calendario.component.html',
  styleUrls: ['./page-calendario.component.scss'],
})
export class PageCalendarioComponent implements OnInit {
  titulo: string = 'Calendario Corporativo';
  modalRef?: BsModalRef;
  instrutores: Instrutor[] = [];
  turmas: Turma[] = [];
  locais: Local[] = [];
  disciplinas: Disciplina[] = [];

  constructor(
    private modalService: BsModalService,
    private turmaService: TurmaService,
    private localService: LocalService
  ) {}

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.turmaService.listar().subscribe((turmas) => (this.turmas = turmas.turmas));
    this.localService.listar().subscribe((responseLocal) => (this.locais = responseLocal.locais));
    this.modalRef = this.modalService.show(template);
  }

  onClose(){
    this.modalService.hide()
  }

  openModalComTurma(template: TemplateRef<any>, turma: Turma) {
    this.turmas = [{ id: turma.id, nome: turma.nome }];
    this.modalRef = this.modalService.show(template);
  }

  reservaAdicionada(date: Date){
    this.modalService.hide();
  }

}
