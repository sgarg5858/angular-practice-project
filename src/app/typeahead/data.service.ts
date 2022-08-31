import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

interface IComment{
  postId:number;
  id:number;
  email:string;
  body:string;
  name:string;
}

@Injectable()
export class DataService {

  constructor(private httpClient:HttpClient) { }

   getEmails(keyword:string):Observable<string[]>
  {
    console.log(keyword);
    return this.httpClient.get<IComment[]>('https://jsonplaceholder.typicode.com/comments').pipe(
      map((comments)=>{
        return comments.map((comment)=>comment.email).filter((email)=>email.includes(keyword))
      }),
      catchError((err)=>of([]))
    )
  }
}
