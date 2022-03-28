import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Local } from './local';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  @Output() idDelete = new EventEmitter<Local>();
  @Output() idUpdate = new EventEmitter<Local>();

  @Input() local!: Local
  sistema: string = "Possui"

  constructor() { }

  ngOnInit(): void {
    if(!this.local.sistemas){
      this.sistema = "N/A"
    }
  }

  onUpdate(local: Local ){
    this.idUpdate.emit(local);
  }

  onDelete(local: Local){
    this.idDelete.emit(local);
  }

}
