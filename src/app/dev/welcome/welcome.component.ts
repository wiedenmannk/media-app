import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from "@angular/router";

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnDestroy {

  items: MenuItem[] = [
    {
      label: "Dashboard",
      icon: "pi pi-pencil",
      routerLink: "dashboard",
      command: (event?: any) => {
        console.log(event);
        this.showMessage = false;
      },
    }
  ];

  public showMessage = true;
  constructor(private router: Router) {
    if(router.url !== "/dev") {
      this.showMessage = false;
    }
  }

  ngOnDestroy() {
    this.showMessage = true;
  }

}
