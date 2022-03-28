import { PageCalendarioComponent } from './pages/page-calendario/page-calendario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoEncontradoComponent } from './errors/nao-encontrado/nao-encontrado.component';
import { PageDisciplinasComponent } from './pages/page-disciplinas/page-disciplinas.component';
import { PageInicialComponent } from './pages/page-inicial/page-inicial.component';
import { PageInstrutoresComponent } from './pages/page-instrutores/page-instrutores.component';
import { PageLocaisComponent } from './pages/page-locais/page-locais.component';
import { PageTurmasComponent } from './pages/page-turmas/page-turmas.component';
import { PageVisualizacaoComponent } from './pages/page-visualizacao/page-visualizacao.component';

const routes: Routes = [
  { path: '', component: PageInicialComponent },
  { path: 'calendario', component: PageCalendarioComponent },
  { path: 'telaVisualizacao', component: PageVisualizacaoComponent },
  { path: 'instrutores', component: PageInstrutoresComponent },
  { path: 'disciplinas', component: PageDisciplinasComponent },
  { path: 'turmas', component: PageTurmasComponent },
  { path: 'locais', component: PageLocaisComponent },
  { path: '**', component: NaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
