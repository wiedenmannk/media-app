import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  dropBox: HTMLElement | null = null;


  public start(event) {
    console.log("start", event);
  }

  public end(event: DragEvent, item) {
    console.log("end", event);
    console.log("element", event.target);
    console.log("end item", item);
  }

  public handleDrop(event) {
    console.log("drop",event);
    event.preventDefault;
  }

  public onDragLeave(event) {
    console.log("leave",event);
  }

  public setBox(event: DragEvent) {
    if(this.dropBox !== event.target) {
      // this.dropBox = event.target;
      console.log("catch dropBox", event.target);
    }
  }

  public killBox() {
    console.log("killBox");
    this.dropBox = null;
  }

  public checkItem(event) {
    console.log("check", event);
    event.preventDefault;
  }

  public exit(event) {
    console.log("exit", event);
  }

  public setDropBoxForHTML(event: DragEvent, item: HTMLElement) {
    if(this.dropBox !== item) {
      this.dropBox = item;
      console.log("item", item);
    }
  }

}
