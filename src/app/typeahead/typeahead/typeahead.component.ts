import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable, of, Subscription, switchMap } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  providers:[
    DataService
  ]
})
export class TypeaheadComponent implements OnInit {

  constructor(private dataService:DataService) { }
  search = new FormControl();
  filteredEmails:Observable<string[]>|undefined;

  ngOnInit(): void {

     this.filteredEmails = this.search.valueChanges.pipe(
      debounceTime(300),
      switchMap((keyword:string)=> this.dataService.getEmails(keyword))
     )
     
  }

}
