import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DevRoutingModule } from "./dev-routing.module";
import { MainModule } from "@modules/main/main.module";
import { WelcomeComponent } from "@dev/welcome/welcome.component";
import { DashboardComponent } from "@dev/dashboard/dashboard.component";


@NgModule({
  declarations: [WelcomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    DevRoutingModule,
    MainModule,
  ]
})
export class DevModule { }
