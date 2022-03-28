import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasModule } from './reservas/reservas.module';
import { PageInicialComponent } from './page-inicial.component';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { CadastroReservaModule } from 'src/app/components/cadastro-reserva/cadastro-reserva.module';
import { InputDataModule } from 'src/app/shared/components/input-Data/input-data.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AngularToastifyModule } from 'angular-toastify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ PageInicialComponent ],
  imports: [
    CommonModule,
    SearchModule,
    ReservasModule,
    CadastroReservaModule,
    InputDataModule,
    TooltipModule.forRoot(),
    AngularToastifyModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  exports: [ PageInicialComponent ]
})
export class PageInicialModule { }
