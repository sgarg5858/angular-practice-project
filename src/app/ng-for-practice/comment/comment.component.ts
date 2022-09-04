import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IComment } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit,OnDestroy {

  @Input() comment:IComment|undefined;
  constructor() { }

  ngOnInit(): void {
    console.log("Creating Comment Component")
  }
  ngOnDestroy(): void {
     console.log( "Destroying Comment Component");
  }

}
