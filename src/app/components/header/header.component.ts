import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuVariable = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.menuVariable = !this.menuVariable;
  }

}
