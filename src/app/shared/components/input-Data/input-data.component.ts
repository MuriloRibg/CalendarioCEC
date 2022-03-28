import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss']
})
export class InputDataComponent implements OnInit {
  @Output() data = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  burcarPorData(event: any) {
    this.data.emit(event.target.value)
  }

}
