import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OnHoverModule } from './../../../shared/directives/on-hover/on-hover.module';

import { LocalComponent } from './local.component';

@NgModule({
  declarations: [LocalComponent],
  imports: [CommonModule, HttpClientModule, OnHoverModule],
  exports: [LocalComponent]
})
export class LocalModule {}
