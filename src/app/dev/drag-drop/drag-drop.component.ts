import { Component, HostListener } from '@angular/core';
import { DragdropService } from "@service/dragdrop.service";


@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {

  dropBox: HTMLElement | null = null;
  dragObject: HTMLElement | null = null;
  isDragging: boolean = false;

  constructor(private dd: DragdropService) {
    dd.checkArgs(this.isDragging, this.dragObject);
  }

/*
  @HostListener("window:mouseup", ["$event"])
  OnMouseUp(event: MouseEvent) {
    console.log("mouseup");
    console.log(event);
  }
*/


  public start(event, item: HTMLElement) {
    console.log("start", event);
    console.log("startItem", item);
    this.dragObject = item;
  }

  public end(event: DragEvent) {
    console.log("end", event);
    if(this.dropBox) {
      console.log("i am dropped over container");
      console.log("push me to container");
      console.log("childnodes",this.dropBox.hasChildNodes());
      const i = this.dropBox.childNodes.length;
      console.log("index",i);
      console.log(this.dropBox.childNodes[i]);
      const clone = this.dragObject.cloneNode(true) as HTMLElement;
      console.log(this.dropBox.appendChild(clone));
      console.log("nodes", this.dropBox.childNodes);
    } else {
      this.dragObject = null;
      console.log("object has no container... has left");
    }
    // this.dragObject = null;
    this.isDragging = false;
  }

  public handleDrop(event) {
    console.log("drop",event);
    event.preventDefault;
  }

  public onDragLeave(event) {
    console.log("leave");
  }

  public setBox(event: DragEvent) {
    if(this.dropBox !== event.target) {
      console.log("catch dropBox", event.target);
    }
  }

  public checkItem(event) {
    console.log("check", event);
    event.preventDefault;
  }

  public setDropBoxForHTML(event: DragEvent, item: HTMLElement) {
    if(this.dropBox !== item) {
      this.dropBox = item;
      console.log("item", item);
    }
  }

  public checkForDrop(event) {
    setTimeout(()=> {
      if(this.isDragging) {
        console.log("has left");
        this.dropBox = null;
        return false;
      }
    },5);
  }

  public onDrag($event) {
    this.isDragging = true;
  }

}
