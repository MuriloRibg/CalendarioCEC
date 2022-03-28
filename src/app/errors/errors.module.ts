import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

@NgModule({
  declarations: [
    NaoEncontradoComponent
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports:[ NaoEncontradoComponent]
})
export class ErrorsModule { }
