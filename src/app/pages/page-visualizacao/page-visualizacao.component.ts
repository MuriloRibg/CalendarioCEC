import { Component, OnInit, TemplateRef } from '@angular/core';

import { ConvertDay } from 'src/app/shared/helpers/conevert-day';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Reserva } from 'src/app/core/reserva/reserva';
import { ReservaService } from 'src/app/core/reserva/reserva.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-page-visualizacao',
  templateUrl: './page-visualizacao.component.html',
  styleUrls: ['./page-visualizacao.component.scss']
})
export class PageVisualizacaoComponent implements OnInit {

  titulo: string = 'Visualização';
  filter: string = '';
  modalRef?: BsModalRef;

  reservas!: Reserva[];
  data: Date = new Date();

  constructor(
    private modalService: BsModalService,
    private reservaService: ReservaService
  ) { }

  ngOnInit(): void {
    const data = ConvertDay(this.data);
    this.pesquisaPorData(data);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pesquisaPorData(data: string) {
    this.data = new Date(data);
    this.data.setDate(this.data.getDate() + 1)
    this.reservaService.listaReservasPorData(data)
    .pipe(tap(console.log))
    .subscribe(reservas => this.reservas = reservas.reservasDto);
  }
}
