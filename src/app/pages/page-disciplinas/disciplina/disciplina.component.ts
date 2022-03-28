import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Disciplina } from './disciplina';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss'],
})
export class DisciplinaComponent implements OnInit {
  @Input() disciplina!: Disciplina;

  @Output() idUpdate = new EventEmitter();
  @Output() idDelete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onUpdate(disciplinaId: number): void {
    this.idUpdate.emit(disciplinaId);
  }

  public onDelete(disciplinaId: number): void {
    this.idDelete.emit(disciplinaId);
  }
}
