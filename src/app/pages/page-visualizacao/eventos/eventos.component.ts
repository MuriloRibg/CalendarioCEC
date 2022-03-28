import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/core/reserva/reserva';
import { ReservaService } from 'src/app/core/reserva/reserva.service';
import { ConvertDay } from 'src/app/shared/helpers/conevert-day';

import { Local } from '../../page-locais/local/local';
import { LocalService } from '../../page-locais/local/local.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit, OnChanges {

  locais!: Local[];
  @Input() reservas!: Reserva[];
  @Input() day!: Date;

  constructor(
    private localService: LocalService,
    private reservaService: ReservaService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reservas']?.currentValue) {
      this.reservas = changes['reservas'].currentValue;
    }

    if (changes['day']?.currentValue) {
      this.day = changes['day'].currentValue;
    }
  }

  ngOnInit(): void {
    this.localService.listar()
      .subscribe(responseLocal => {
        this.locais = responseLocal.locais;
      })
  }

}
