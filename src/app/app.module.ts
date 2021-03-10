import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainModule } from "@modules/main/main.module";
import { DefaultLayoutComponent } from "./layout/default-layout/default-layout.component";
import { MenuComponent } from "./layout/menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
