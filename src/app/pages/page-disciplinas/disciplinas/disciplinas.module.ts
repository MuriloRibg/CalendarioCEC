import { AngularToastifyModule } from 'angular-toastify';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaFormModule } from './../disciplina-form/disciplina-form.module';
import { FormModalModule } from 'src/app/shared/components/form-modal/form-modal.module';
import { DisciplinaModule } from './../disciplina/disciplina.module';
import { DisciplinasComponent } from './disciplinas.component';

@NgModule({
  declarations: [DisciplinasComponent],
  imports: [
    CommonModule,
    DisciplinaModule,
    DisciplinaFormModule,
    FormModalModule,
    AngularToastifyModule
  ],
  exports: [DisciplinasComponent],
})
export class DisciplinasModule {}
