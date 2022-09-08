import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabComponent } from './tab/tab.component';
import { TestingTabsComponent } from './testing-tabs/testing-tabs.component';



@NgModule({
  declarations: [
    TabGroupComponent,
    TabComponent,
    TestingTabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TestingTabsComponent,
    TabGroupComponent,
    TabComponent
  ]
})
export class TabsModule { }
