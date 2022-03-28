import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PageInstrutoresComponent } from './page-instrutores.component';
import { FormModalModule } from 'src/app/shared/components/form-modal/form-modal.module';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { InstrutorFormModule } from './instrutor-form/instrutor-form.module';
import { InstrutoresModule } from './instrutores/instrutores.module';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    PageInstrutoresComponent,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    InstrutorFormModule,
    InstrutoresModule,
    SearchModule,
    FormModalModule,
    NgxPaginationModule,
    FormsModule,
    TooltipModule.forRoot(),
    AngularToastifyModule
  ],
  exports: [PageInstrutoresComponent],
  providers: [ToastService],

})
export class PageInstrutoresModule { }
