import { Component, OnInit } from '@angular/core';
import { ConfigService } from './initializer/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-best-practices';
 

  ngOnInit()
  {
   
  }
 
  
}
