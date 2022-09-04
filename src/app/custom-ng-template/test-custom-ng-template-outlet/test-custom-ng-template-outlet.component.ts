import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-custom-ng-template-outlet',
  templateUrl: './test-custom-ng-template-outlet.component.html',
  styleUrls: ['./test-custom-ng-template-outlet.component.scss']
})
export class TestCustomNgTemplateOutletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user={
    name:"Sanjay"
  }

}
