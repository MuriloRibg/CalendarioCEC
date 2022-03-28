import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaComponent } from './disciplina.component';
import { OnHoverModule } from './../../../shared/directives/on-hover/on-hover.module';

@NgModule({
  declarations: [DisciplinaComponent],
  imports: [CommonModule, OnHoverModule, HttpClientModule],
  exports: [DisciplinaComponent],
})
export class DisciplinaModule {}
