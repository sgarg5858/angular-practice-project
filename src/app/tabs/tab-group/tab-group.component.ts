import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit,AfterContentInit {

  constructor() { }
  @ContentChildren(TabComponent) tabs:QueryList<TabComponent>|undefined;

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
      console.log(this.tabs);
      if(this.tabs)
      {
        this.markFirstSelectedIfNoOneIsSelectedInitially(this.tabs);
      }
  }

  markFirstSelectedIfNoOneIsSelectedInitially(tabs:QueryList<TabComponent>)
  {
    const selectedTab = tabs.find((tab)=>tab.selected);
    if(!selectedTab && tabs.length>0)
    {
      tabs.first.selected=true;
      console.log("Set to true",tabs.first)
    }
  }
  
  select(tab:TabComponent)
  {
    if(this.tabs)
    {
      this.tabs.forEach((tab,index)=>{
       tab.selected=false;
      })
      tab.selected=true;
    }
  }

}
