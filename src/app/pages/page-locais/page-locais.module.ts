import { AngularToastifyModule } from 'angular-toastify';
import { LocaisModule } from './locais/locais.module';
import { FormModalModule } from './../../shared/components/form-modal/form-modal.module';
import { SearchModule } from './../../shared/components/search/search.module';
import { LocalFormModule } from './local-form/local-form.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLocaisComponent } from './page-locais.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    PageLocaisComponent,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    LocalFormModule,
    LocaisModule,
    SearchModule,
    FormModalModule,
    TooltipModule.forRoot(),
    AngularToastifyModule
  ],
  exports: [PageLocaisComponent]
})
export class PageLocaisModule { }
