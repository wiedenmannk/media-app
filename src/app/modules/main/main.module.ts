import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from "primeng/accordion";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NgbModule,
    AccordionModule,
  ]
})
export class MainModule { }
