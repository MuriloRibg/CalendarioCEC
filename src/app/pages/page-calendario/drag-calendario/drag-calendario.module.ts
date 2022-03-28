import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragCalendarioComponent } from './drag-calendario.component';

//FullCalendar
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
  timeGridPlugin,
  bootstrap5Plugin,
]);

@NgModule({
  declarations: [
    DragCalendarioComponent
  ],
  imports: [
    CommonModule, FullCalendarModule
  ],
  exports: [DragCalendarioComponent]

})
export class DragCalendarioModule { }
