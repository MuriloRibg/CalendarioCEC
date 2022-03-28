import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  @Input() titulo!: string

  constructor(public bsModalService: BsModalService) { }

  ngOnInit(): void {
  }
  
  onClose(){
    this.bsModalService.hide();
  }

}
