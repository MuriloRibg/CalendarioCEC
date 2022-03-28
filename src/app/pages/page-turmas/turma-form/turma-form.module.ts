import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularToastifyModule } from 'angular-toastify';
import { FormModalModule } from '../../../shared/components/form-modal/form-modal.module';
import { TurmaFormComponent } from './turma-form.component';

@NgModule({
  declarations: [TurmaFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModalModule,
    AngularToastifyModule,
    BrowserAnimationsModule,
  ],
  exports: [TurmaFormComponent],
})
export class TurmaFormModule {}
