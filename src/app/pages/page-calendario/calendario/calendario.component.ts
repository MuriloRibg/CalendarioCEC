import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, forwardRef, OnInit, ViewChild, Output, EventEmitter, TemplateRef } from '@angular/core';

//FullCalendar
import { Calendar, CalendarOptions, EventApi, EventClickArg } from '@fullcalendar/angular';

import { TurmaService } from 'src/app/pages/page-turmas/turma/turma.service';
import { Turma } from 'src/app/pages/page-turmas/turma/turma';
import { environment } from 'src/environments/environment';
import { Calendario } from './calendario';

const API = environment.API

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {
  @Output() dropEvent = new EventEmitter();
  calendario!: Calendario;

  currentEvents: EventApi[] = [];
  calendarVisible = true;

  turmas: Turma[] = [];
  turma!: Turma;
  pilares: string[] = [];

  @ViewChild('eventInfo', { static: true }) eventInfo!: TemplateRef<any>;

  constructor(
    private turmaService: TurmaService,
    private modalService: BsModalService
  ) {
    forwardRef(() => Calendar);
  }

  ngOnInit(): void {
    this.turmaService.listar().subscribe((turmas) => {
      this.turmas = turmas.turmas
    });
  }

  calendarOptions: CalendarOptions = {
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dragScroll: true,
    locale: 'pt-br',
    expandRows: true,
    droppable: true,
    navLinks: true,
    businessHours: true,
    buttonHints: {
      day: 'Visualizar os eventos do Dia.',
      month: 'Visualizar os eventos do mês.',
      next: 'Ir para o próximo mês.',
      nextYear: 'Ir para o próximo ano.',
      prev: 'Voltar para o mês anterio.',
      prevYear: 'Voltar para o ano anterio.',
      today: 'Visualizar o mês atual.',
      week: 'Visualizar os eventos da semana.',
    },
    buttonText: {
      day: 'Dia',
      month: 'Mês',
      next: '',
      nextYear: 'Próx. Ano',
      prev: '',
      prevYear: 'Volar o Ano',
      today: 'Hoje',
      week: 'Semana',
      list: 'Lista',
    },
    buttonIcons: {
      prev: 'bi bi-chevron-left',
      next: 'bi bi-chevron-right',
    },
    eventDisplay: "block",

    //Evento de click
    eventClick: (clickInfo: EventClickArg) => {
      const infoExtras: any = clickInfo.event._def.extendedProps

      this.calendario ={
        title:  clickInfo.event._def.title,
        start: clickInfo.event.start?.toLocaleString(),
        end: clickInfo.event.end?.toLocaleString(),
        descricao: infoExtras.descricao,
        disciplina: infoExtras.disciplina,
        instrutor: infoExtras.instrutor,
        local: infoExtras.local,
        turma: infoExtras.turma
      }
      this.openModal(this.eventInfo);
    },

    //Evento de arraste
    eventReceive: (arg: any) => {
      const turma: Turma = {
        id:  arg.draggedEl.childNodes[0].getAttribute("id"),
        nome:  arg.draggedEl.childNodes[0].textContent
      }
      this.dropEvent.emit(turma);
    },
    events: {url: `${API}/calendario`}
  };

  openModal(template: TemplateRef<any>): void {
    this.modalService.show(template);
  }
}
