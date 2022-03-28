import { AngularToastifyModule } from 'angular-toastify';
import { FindByName } from './find-by-name.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormModalModule } from './../../../shared/components/form-modal/form-modal.module';
import { LocalFormModule } from './../local-form/local-form.module';
import { LocalModule } from './../local/local.module';
import { LocaisComponent } from './locais.component';

@NgModule({
  declarations: [ LocaisComponent, FindByName ],
  imports: [ CommonModule, FormModalModule, LocalFormModule, LocalModule, AngularToastifyModule],
  exports: [ LocaisComponent ]
})
export class LocaisModule {}
