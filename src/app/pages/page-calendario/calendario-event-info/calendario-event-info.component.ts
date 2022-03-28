import { Component, Input, OnInit } from '@angular/core';

import { Calendario } from './../calendario/calendario';

@Component({
  selector: 'app-calendario-event-info',
  templateUrl: './calendario-event-info.component.html',
  styleUrls: ['./calendario-event-info.component.scss'],
})
export class CalendarioEventInfoComponent implements OnInit {
  @Input() tituloModal!: string;
  @Input() calendario!: Calendario;

  constructor() {}

  ngOnInit(): void {}
}
