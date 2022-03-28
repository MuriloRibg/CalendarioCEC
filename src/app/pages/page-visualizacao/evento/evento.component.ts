import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from 'src/app/core/reserva/reserva';
import { Evento } from './evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  @Input() reserva!: Reserva;

  constructor() { }

  ngOnInit(): void {
  }

}
