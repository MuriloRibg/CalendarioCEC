import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaComponent } from './reserva.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ReservaComponent
  ],
  imports: [
    CommonModule,
    OnHoverModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    ReservaComponent
  ]
})
export class ReservaModule { }
