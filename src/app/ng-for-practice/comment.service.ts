import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

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
  sortOrder:'asc'|'desc'='asc';

  getComments():void{
    this.httpClient.get<IComment[]>('https://jsonplaceholder.typicode.com/comments').pipe(
      tap(()=>{
        this.sortOrder = 'asc' ?'desc':'asc';
      })
    )
    .subscribe({
      next:(comments)=>{
        this.commentSubject.next(
          comments.sort()
        );
      },
      error:(err)=>{
        this.commentSubject.next([]);
      }
    })
  }

}
