import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroReservaComponent } from './cadastro-reserva.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModalModule } from 'src/app/shared/components/form-modal/form-modal.module';
import { AngularToastifyModule } from 'angular-toastify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnSelectEventModule } from 'src/app/shared/directives/on-select-event/on-select-event.module';



@NgModule({
  declarations: [ CadastroReservaComponent ],
  imports: [
    ReactiveFormsModule,
    FormModalModule,
    CommonModule,
    AngularToastifyModule,
    BrowserAnimationsModule
  ],
  exports: [
    CadastroReservaComponent
  ]
})
export class CadastroReservaModule { }
