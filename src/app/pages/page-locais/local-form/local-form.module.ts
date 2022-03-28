import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularToastifyModule } from 'angular-toastify';
import { FormModalModule } from './../../../shared/components/form-modal/form-modal.module';
import { LocalFormComponent } from './local-form.component';

@NgModule({
  declarations: [LocalFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormModalModule, AngularToastifyModule],
  exports: [LocalFormComponent]
})
export class LocalFormModule {}
