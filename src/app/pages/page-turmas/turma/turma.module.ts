import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OnHoverModule } from '../../../shared/directives/on-hover/on-hover.module';

import { TurmaComponent } from './turma.component';

@NgModule({
  declarations: [TurmaComponent],
  imports: [CommonModule, HttpClientModule, OnHoverModule],
  exports: [TurmaComponent]
})
export class TurmaModule {}
