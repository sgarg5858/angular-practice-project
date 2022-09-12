import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }


  private dataSubject = new BehaviorSubject<any[]|null>(null);
  public readonly data$ = this.dataSubject.asObservable();

  getData()
  {
    this.httpClient.get<any>('https://swapi.dev/api/peoples')
    .pipe(
      map((data)=>data.results),
      tap({
        error:(error:unknown)=>console.log(error)
      }),
      catchError((err:unknown)=>{
        return throwError(()=>new Error(err as string))
      })
    )
    .subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.dataSubject.next(data);
        },
        error:(error)=>{
          this.dataSubject.next([]);
        }
      }
    )
  }

  getHomeWorld(url:string)
  {
   return this.httpClient.get<any>(url);
  }
}
