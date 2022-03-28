import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageDisciplinasModule } from './page-disciplinas/page-disciplinas.module';
import { PageInstrutoresModule } from './page-instrutores/page-instrutores.module';
import { PageTurmasModule } from './page-turmas/page-turmas.module';
import { PageLocaisModule } from './page-locais/page-locais.module';
import { PageVisualizacaoModule } from './page-visualizacao/page-visualizacao.module';
import { PageInicialModule } from './page-inicial/page-inicial.module';
import { PageCalendarioModule } from './page-calendario/page-calendario.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    PageDisciplinasModule,
    PageInstrutoresModule,
    PageTurmasModule,
    PageLocaisModule,
    PageVisualizacaoModule,
    PageInicialModule,
    PageCalendarioModule
  ]
})

export class PagesModule { }
