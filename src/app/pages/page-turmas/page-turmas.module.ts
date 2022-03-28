import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './../../shared/components/search/search.module';
import { TurmasModule } from './turmas/turmas.module';
import { FormModalModule } from './../../shared/components/form-modal/form-modal.module';
import { TurmaFormModule } from './turma-form/turma-form.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PageTurmasComponent } from './page-turmas.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AngularToastifyModule } from 'angular-toastify';

@NgModule({
  declarations: [PageTurmasComponent],
  imports: [
    CommonModule,
    TurmaFormModule,
    TurmasModule,
    SearchModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    NgxPaginationModule,
    FormModalModule,
    TooltipModule.forRoot(),
    AngularToastifyModule
  ],
  exports: [PageTurmasComponent]
})
export class PageTurmasModule {}
