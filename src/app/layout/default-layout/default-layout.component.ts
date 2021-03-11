import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.component.html',
  styles: [
  ]
})
export class DefaultLayoutComponent implements OnInit {

  public menuIsOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

}
