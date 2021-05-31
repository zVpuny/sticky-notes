import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StickyNotesComponent } from './sticky-notes/sticky-notes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    StickyNotesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
