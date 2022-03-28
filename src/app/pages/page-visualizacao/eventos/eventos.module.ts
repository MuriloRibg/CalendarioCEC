import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos.component';
import { EventoModule } from '../evento/evento.module';

@NgModule({
  declarations: [ EventosComponent ],
  imports: [
    CommonModule,
    EventoModule
  ],
  exports: [ EventosComponent ]
})
export class EventosModule { }
