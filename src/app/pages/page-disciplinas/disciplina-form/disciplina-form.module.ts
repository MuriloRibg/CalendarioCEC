import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormModalModule } from 'src/app/shared/components/form-modal/form-modal.module';
import { DisciplinaFormComponent } from './disciplina-form.component';
import { AngularToastifyModule } from 'angular-toastify';

@NgModule({
  declarations: [DisciplinaFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModalModule,
    AngularToastifyModule,
  ],
  exports: [DisciplinaFormComponent],
})
export class DisciplinaFormModule {}
