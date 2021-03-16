import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "@dev/welcome/welcome.component";
import { DashboardComponent } from "@dev/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
    children: [
      { path: "dashboard", component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
