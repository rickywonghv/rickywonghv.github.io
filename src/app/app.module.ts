import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import {AppService} from './app.service';

import { AppComponent } from './app.component';
//import {BROWSER_SANITIZATION_PROVIDERS} from "@angular/platform-browser/src/browser";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
