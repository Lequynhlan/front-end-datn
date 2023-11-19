import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './Views/auth/auth.component';
import { DasboardComponent } from './Views/dasboard/dasboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
