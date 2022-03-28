import { AngularToastifyModule } from 'angular-toastify';
import { HttpClientModule } from '@angular/common/http';
import { FindByName } from './find-by-name.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormModalModule } from './../../../shared/components/form-modal/form-modal.module';
import { TurmaFormModule } from './../turma-form/turma-form.module';
import { TurmaModule } from './../turma/turma.module';
import { TurmasComponent } from './turmas.component';

@NgModule({
  declarations: [TurmasComponent, FindByName],
  imports: [
    CommonModule,
    FormModalModule,
    TurmaFormModule,
    TurmaModule,
    HttpClientModule,
    AngularToastifyModule
  ],
  exports: [TurmasComponent],
})
export class TurmasModule {}
