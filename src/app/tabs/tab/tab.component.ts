import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }
  @Input() label:string="";
  @Input() selected:boolean=false;

  ngOnInit(): void {
    console.log("Tab Component")
  }

}
