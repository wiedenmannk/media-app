import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  public dropBox: HTMLElement | null;
  public containers: HTMLElement[] = [];
  public container: HTMLElement | null;
  constructor() { }

  public clear() {
    this.dropBox = null;
  }

  public cloneHTML() {
  }

  public saveHTML

  public checkArgs(...args: any[]) {
    console.log(args);
  }
}
