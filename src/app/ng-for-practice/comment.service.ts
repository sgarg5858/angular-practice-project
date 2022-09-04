import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IComment{
  id:number;
  postId:number;
  email:string;
  name:string;
  body:string
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  private commentSubject = new BehaviorSubject<IComment[]|null>(null);
  public readonly comments$ = this.commentSubject.asObservable();

  getComments():void{
    this.httpClient.get<IComment[]>('https://jsonplaceholder.typicode.com/comments').subscribe({
      next:(comments)=>{
        this.commentSubject.next(comments);
      },
      error:(err)=>{
        this.commentSubject.next([]);
      }
    })
  }

}
