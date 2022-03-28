import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { ConvertDay } from 'src/app/shared/helpers/conevert-day';
import { Reserva } from 'src/app/core/reserva/reserva';
import { ReservaService } from 'src/app/core/reserva/reserva.service';
import { Disciplina } from '../page-disciplinas/disciplina/disciplina';
import { Instrutor } from '../page-instrutores/instrutor/instrutor';
import { Local } from '../page-locais/local/local';
import { Turma } from '../page-turmas/turma/turma';
import { LocalService } from '../page-locais/local/local.service';
import { TurmaService } from './../page-turmas/turma/turma.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-page-inicial',
  templateUrl: './page-inicial.component.html',
  styleUrls: ['./page-inicial.component.scss'],
})
export class PageInicialComponent implements OnInit {
  titulo: string = 'Inicial';
  filter: string = '';
  modalRef?: BsModalRef;
  instrutores!: Instrutor[];
  turmas!: Turma[];
  locais!: Local[];
  disciplinas!: Disciplina[];
  reservas!: Reserva[];
  inputData!: string;
  idTurma!: number;

  page: number = 1;
  totalItems = 0;
  itemsPerPage = 6;
  maxSize = 3;
  rotate = true;

  hideProgressBar= false

  constructor(
    private modalService: BsModalService,
    private reservaService: ReservaService,
    private turmaService: TurmaService,
    private localService: LocalService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.turmaService.listar().subscribe((turmas) => (this.turmas = turmas.turmas));
    this.localService.listar().subscribe((responseLocal) => (this.locais = responseLocal.locais));
    const dataAtual = ConvertDay(new Date());
    this.inputData = dataAtual

    this.reservaService.listaReservas(dataAtual, this.page)
    .subscribe((reservas) => {
      this.reservas = reservas.reservasDto
      this.totalItems = reservas.qtdTotalReservas
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pageChanged(event: PageChangedEvent) {
    this.page = event.page;

    if(this.idTurma !=0 ){
      this.reservaService.listaReservasPorTurma(this.page, this.filter, this.idTurma)
      .subscribe((reservas)=> {
        this.reservas = reservas.reservasDto;
        this.totalItems = reservas.qtdTotalReservas;
      })
    }else{
      this.reservaService
      .listaReservas(this.inputData, this.page, this.filter)
      .subscribe((reservas) => {
        this.reservas = reservas.reservasDto;
      });
    }
  }

  pesquisa(pesquisa: string) {
    this.filter = pesquisa;
    this.reservaService.listaReservas(this.inputData, this.page, pesquisa)
    .subscribe(
      (reservas) => {
        this.reservas = reservas.reservasDto;
        this.totalItems = reservas.qtdTotalReservas;
      },
      (err) => console.log(err)
    );
  }

  pesquisaPorData(data: string) {
    this.inputData = data
    this.reservaService.listaReservas(data, this.page, "")
    .subscribe((reservas)=> {
      this.reservas = reservas.reservasDto
      this.totalItems = reservas.qtdTotalReservas
    });
  }

  pesquisaPorTurma(event: any) {
    this.idTurma = event.target.value;
    
    if(this.idTurma == 0){
      console.log(this.inputData);
      this.pesquisaPorData(this.inputData)
    }else{
      this.reservaService.listaReservasPorTurma(this.page, this.filter, this.idTurma)
        .subscribe((reservas)=> {
          this.reservas = reservas.reservasDto;
          this.totalItems = reservas.qtdTotalReservas;
        })
      }
  }

  reservaAdicionada(date: Date) {
    const dataReserva = new Date(date);

    dataReserva.setDate(dataReserva.getDate() + 1);
    const data = ConvertDay(dataReserva);

    this.reservaService.listaReservas(data, this.page, "")
      .subscribe((reservas) => {
        this.reservas = reservas.reservasDto;
        this.totalItems = 1;
        this._toastService.success('Reserva adicionada com sucesso!');
      })
    this.modalService.hide();
  }

}
