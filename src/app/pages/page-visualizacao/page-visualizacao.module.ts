import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVisualizacaoComponent } from './page-visualizacao.component';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { EventosModule } from './eventos/eventos.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { InputDataModule } from 'src/app/shared/components/input-Data/input-data.module';

@NgModule({
  declarations: [ PageVisualizacaoComponent ],
  imports: [
    CommonModule,
    SearchModule,
    EventosModule,
    TooltipModule.forRoot(),
    InputDataModule
  ],
  exports: [ PageVisualizacaoComponent ]
})
export class PageVisualizacaoModule { }
