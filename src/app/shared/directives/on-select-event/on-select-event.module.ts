import { NgModule } from '@angular/core';
import { OnSelectEventDirective } from './on-select-event.directive';

@NgModule({
  declarations: [
    OnSelectEventDirective
  ],
  exports: [ OnSelectEventDirective ]
})
export class OnSelectEventModule { }
