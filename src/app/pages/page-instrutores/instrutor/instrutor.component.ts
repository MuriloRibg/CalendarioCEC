import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Instrutor } from './instrutor';

@Component({
  selector: 'app-instrutor',
  templateUrl: './instrutor.component.html',
  styleUrls: ['./instrutor.component.scss']
})
export class InstrutorComponent implements OnInit {

  @Output() idDelete = new EventEmitter<number>();
  @Output() idUpdate = new EventEmitter<number>();

  @Input() instrutor!: Instrutor

  ngOnInit(): void {
  }

  onUpdate(id: number ){
    this.idUpdate.emit(id);
  }

  onDelete(id: number){
    this.idDelete.emit(id);
  }


}
