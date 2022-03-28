import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchModule } from './../../shared/components/search/search.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AngularToastifyModule } from 'angular-toastify';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PageDisciplinasComponent } from './page-disciplinas.component';
import { DisciplinaFormModule } from './disciplina-form/disciplina-form.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';

@NgModule({
  declarations: [PageDisciplinasComponent],
  imports: [
    CommonModule,
    DisciplinasModule,
    DisciplinaFormModule,
    SearchModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    NgxPaginationModule,
    TooltipModule.forRoot(),
    AngularToastifyModule
  ],
  exports: [PageDisciplinasComponent],
})
export class PageDisciplinasModule {}
