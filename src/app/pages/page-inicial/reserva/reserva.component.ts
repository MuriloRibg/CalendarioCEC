import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { Reserva } from 'src/app/core/reserva/reserva';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: ReservaComponent.getAccordionConfig }],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('250ms'))
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('default<=>rotated', animate('250ms'))
    ])
  ]
})
export class ReservaComponent implements OnInit {

  @Output() reservaDelete = new EventEmitter<Reserva>();
  @Output() reservaUpdate = new EventEmitter<Reserva>();

  @Input() reserva!: Reserva;
  @Input() title!: string;
  showBody = false;

  constructor() { }

  ngOnInit(): void {
  }

  static getAccordionConfig(): AccordionConfig {
    return Object.assign(new AccordionConfig(), { closeOthers: true });
  }

  toggle() {
    this.showBody = !this.showBody;
  }

  onUpdate(reserva: Reserva){
    this.reservaUpdate.emit(reserva);
  }

  onDelete(reserva: Reserva){
    this.reservaDelete.emit(reserva);
  } 
}
