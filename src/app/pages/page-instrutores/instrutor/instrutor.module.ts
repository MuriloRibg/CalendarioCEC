import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';

import { InstrutorComponent } from './instrutor.component';

@NgModule({
  declarations: [ InstrutorComponent ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    OnHoverModule, 
  ],
  exports: [InstrutorComponent],
})
export class InstrutorModule {}
