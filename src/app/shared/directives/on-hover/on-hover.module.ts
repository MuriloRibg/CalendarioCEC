import { NgModule } from '@angular/core';
import { OnHoverDirective } from './on-hover.directive';



@NgModule({
  declarations: [
    OnHoverDirective
  ],
  exports: [ OnHoverDirective ]
})
export class OnHoverModule { }
