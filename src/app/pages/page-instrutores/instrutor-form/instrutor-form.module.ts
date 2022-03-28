import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularToastifyModule } from 'angular-toastify';
import { FormModalModule } from 'src/app/shared/components/form-modal/form-modal.module';
import { InstrutorFormComponent } from './instrutor-form.component';

@NgModule({
  declarations: [InstrutorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModalModule,
    AngularToastifyModule,
    BrowserAnimationsModule,
  ],
  exports: [InstrutorFormComponent],
})
export class InstrutorFormModule {}
