import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageCalendarioComponent } from './page-calendario.component';
import { CalendarioModule } from './calendario/calendario.module';
import { CadastroReservaModule } from 'src/app/components/cadastro-reserva/cadastro-reserva.module';

@NgModule({
  declarations: [PageCalendarioComponent],
  imports: [
    CommonModule, 
    CalendarioModule, 
    CadastroReservaModule
  ],
  exports: [PageCalendarioComponent]
})
export class PageCalendarioModule {}
