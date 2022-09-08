import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from './typeahead/typeahead.module';
import {HttpClientModule} from '@angular/common/http'
import { InitializerModule } from './initializer/initializer.module';
import { CustomNgTemplateModule } from './custom-ng-template/custom-ng-template.module';
import { NgForPracticeModule } from './ng-for-practice/ng-for-practice.module';
import { DemoModule } from './demo/demo.module';
import { TabsModule } from './tabs/tabs.module';
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
    InitializerModule,
    CustomNgTemplateModule,
    NgForPracticeModule,
    DemoModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
