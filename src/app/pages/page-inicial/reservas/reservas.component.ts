import { TurmaService } from 'src/app/pages/page-turmas/turma/turma.service';

import { Turma } from 'src/app/pages/page-turmas/turma/turma';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ToastService } from 'angular-toastify';

import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { BsModalService } from 'ngx-bootstrap/modal';
import { switchMap } from 'rxjs';
import { Reserva } from 'src/app/core/reserva/reserva';
import { ReservaService } from 'src/app/core/reserva/reserva.service';
import { ConvertDay } from 'src/app/shared/helpers/conevert-day';
import { Local } from '../../page-locais/local/local';
import { LocalService } from '../../page-locais/local/local.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
  providers: [
    {
      provide: AccordionConfig,
      useFactory: ReservasComponent.getAccordionConfig,
    },
  ],
})
export class ReservasComponent implements OnInit, OnChanges {
  @Input() reservas!: Reserva[];
  reserva!: Reserva;
  turmas!: Turma[];
  locais!: Local[];

  @ViewChild('modalDelete', { static: true }) modalDelete!: TemplateRef<any>;
  @ViewChild('modalUpdate', { static: true }) modalUpdate!: TemplateRef<any>;

  constructor(
    private modalService: BsModalService,
    private reservaService: ReservaService,
    private turmaService: TurmaService,
    private localService: LocalService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reservas'].currentValue) {
      this.reservas = changes['reservas'].currentValue;
    }
  }

  static getAccordionConfig(): AccordionConfig {
    return Object.assign(new AccordionConfig(), { closeOthers: true });
  }

  reservaAtualizada(date: Date) {
    const dataReserva = new Date(date);

    dataReserva.setDate(dataReserva.getDate() + 1);
    const data = ConvertDay(dataReserva);

    this.reservaService.listaReservas(data).subscribe((reservas) => {
      this.reservas = reservas.reservasDto;
      this._toastService.success('Reserva atualizada com sucesso!');
    });
    this.modalService.hide();
  }

  OpenModalUdpdate(reserva: Reserva) {
    this.turmaService.listar().subscribe((turmas) => (this.turmas = turmas.turmas));
    
    this.reserva = reserva;
    this.modalService.show(this.modalUpdate);
  }

  OpenModalDelete(reserva: Reserva) {
    this.reserva = reserva;
    this.modalService.show(this.modalDelete);
  }

  excluir() {
    const dataReserva = new Date(this.reserva.dataInicio);

    dataReserva.setDate(dataReserva.getDate());
    const data = ConvertDay(dataReserva);

    console.log(this.reserva.id, data);
    const id = this.reserva.id;
    this.reservaService.deleteReserva(id)
    .pipe(
      switchMap(mensagem => {
        this._toastService.warn(mensagem.message);
        this.modalService.hide();
        return this.reservaService.listaReservas(data)
      })
    )
    .subscribe(reservas => {
      this.reservas = reservas.reservasDto
    })
  }
}
