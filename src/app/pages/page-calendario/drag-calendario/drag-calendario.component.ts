import { Turma } from 'src/app/pages/page-turmas/turma/turma';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'app-drag-calendario',
  templateUrl: './drag-calendario.component.html',
  styleUrls: ['./drag-calendario.component.scss']
})
export class DragCalendarioComponent implements OnInit {

  @Input() pilar!: string;
  @Input() turmas!: Turma[];

  @ViewChild('event') event!: ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    new Draggable(this.event.nativeElement, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        var returnedEvent = {
          title: eventEl.innerText,
          event: eventEl,
        };
        return returnedEvent;
      },
    });
  }

}
