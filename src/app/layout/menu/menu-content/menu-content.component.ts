import { Component, ElementRef, Input } from "@angular/core";
import { menu } from "@appmodel/menu";

@Component({
  selector: 'ma-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent {

  public menuItems = menu;
  selectedId: string;
  selectClass = "selected";
  @Input() title?;
  constructor() { }

  public selectItem(id: string) {
    const newItem = document.getElementById(id);
    const oldItem = document.getElementById(this.selectedId);

    if(oldItem) {
      oldItem.classList.remove(this.selectClass);
    }
    newItem.classList.add(this.selectClass);
    this.selectedId = id;
  }

}
