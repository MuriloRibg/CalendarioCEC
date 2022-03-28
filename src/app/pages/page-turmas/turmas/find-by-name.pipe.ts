import { Pipe, PipeTransform } from '@angular/core';
import { Turma } from '../turma/turma';

@Pipe({
  name: 'FindByNamePipe'
})

export class FindByName implements PipeTransform {
  transform(turmas: Turma[], query: string): Turma[] {
    query = query.trim().toLowerCase();
    if(query) {
      return turmas.filter(turma => turma.nome?.toLocaleLowerCase().includes(query));
    }
    else {
      return turmas;
    }
  }
}
