import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";


@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.component.html',
  styles: [
  ]
})
export class DefaultLayoutComponent {

  @ViewChild("menu") menu: MenuComponent
  public menuIsOpen = true;
  constructor() { }

  public toggle() {
    this.menuIsOpen = !this.menuIsOpen;
    this.menu.toggle();
  }

}
