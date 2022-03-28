import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ReservasComponent } from './reservas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservaModule } from '../reserva/reserva.module';
import { CadastroReservaModule } from 'src/app/components/cadastro-reserva/cadastro-reserva.module';
import { FormModalModule } from 'src/app/shared/components/form-modal/form-modal.module';

@NgModule({
  declarations: [ ReservasComponent ],
  imports: [
    CommonModule,
    ReservaModule,
    BrowserAnimationsModule,
    CadastroReservaModule,
    FormModalModule,
    AccordionModule.forRoot()
  ],
  exports: [ ReservasComponent ]
})
export class ReservasModule { }
