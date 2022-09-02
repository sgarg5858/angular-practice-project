import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from './typeahead/typeahead.module';
import {HttpClientModule} from '@angular/common/http'
import { InitializerModule } from './initializer/initializer.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TypeaheadModule,
    HttpClientModule,
    InitializerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
