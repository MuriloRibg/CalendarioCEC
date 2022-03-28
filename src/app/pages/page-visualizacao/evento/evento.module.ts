import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponent } from './evento.component';

@NgModule({
  declarations: [ EventoComponent ],
  imports: [
    CommonModule
  ],
  exports: [ EventoComponent ]
})
export class EventoModule { }
