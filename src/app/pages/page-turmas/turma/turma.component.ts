import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Turma } from './turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {

  @Output() idDelete = new EventEmitter<number>();
  @Output() idUpdate = new EventEmitter<number>();

  @Input() turma!: Turma

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(id: number ){
    this.idUpdate.emit(id);
  }

  onDelete(id: number){
    this.idDelete.emit(id);
  }

}
