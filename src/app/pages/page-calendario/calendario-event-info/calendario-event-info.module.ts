import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioEventInfoComponent } from './calendario-event-info.component';
import { FormModalModule } from './../../../shared/components/form-modal/form-modal.module';

@NgModule({
  declarations: [CalendarioEventInfoComponent],
  imports: [CommonModule, FormModalModule],
  exports: [CalendarioEventInfoComponent],
})
export class CalendarioEventInfoModule {}
