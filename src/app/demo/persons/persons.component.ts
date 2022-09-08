import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  detail$:Observable<any>|undefined;
  constructor(public dataService:DataService) {

   }

  ngOnInit(): void {
    this.dataService.getData();
  }
  getDetails(url:string)
  {
    this.detail$=this.dataService.getHomeWorld(url);
  }
}
