import { Pipe, PipeTransform } from '@angular/core';
import { Local } from '../local/local';

@Pipe({
  name: 'FindByNamePipe'
})

export class FindByName implements PipeTransform {
  transform(locais: Local[], query: string): Local[] {
    query = query.trim().toLowerCase();
    if(query) {
      return locais.filter(local => local.nome?.toLocaleLowerCase().includes(query));
    }
    else {
      return locais;
    }
  }
}
