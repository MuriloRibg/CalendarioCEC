import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  @Input() titulo!:string

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe((filter) => this.search.emit(filter));
  }

  filtrar(event: any) { 
    this.debounce.next(event.target.value);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
