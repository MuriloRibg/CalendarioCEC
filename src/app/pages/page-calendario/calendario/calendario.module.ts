import { DragCalendarioModule } from './../drag-calendario/drag-calendario.module';
import { CalendarioEventInfoModule } from './../calendario-event-info/calendario-event-info.module';
import { CadastroReservaModule } from 'src/app/components/cadastro-reserva/cadastro-reserva.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioComponent } from './calendario.component';

//FullCalendar
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
  timeGridPlugin,
  bootstrap5Plugin,
]);

@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    CadastroReservaModule,
    CalendarioEventInfoModule,
    DragCalendarioModule,
    TooltipModule.forRoot()
  ],
  exports: [CalendarioComponent],
})
export class CalendarioModule {}
