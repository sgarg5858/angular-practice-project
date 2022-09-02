import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, filter } from 'rxjs';
import { DELAY } from '../injection_tokens/delay';

export interface InitialConfig{
  baseUrl:string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    @Inject(DELAY) private delay:number,
    private httpClient:HttpClient) { }

  //We are using Service with Subject Pattern here because
  // Its easy to switch to ngrx with facade and at the same time gives us
  //state management
  // Now we will need this url to make api calls
  // We can directly inject this service inside HTTP Interceptor and subscribe
  // to this config$ observable, which will right away give you the value
  private configBehaviorSubject = new BehaviorSubject<InitialConfig|null>(null);

  public readonly config$ = 
  this.configBehaviorSubject.asObservable()
  .pipe(filter((config)=>config!=null))


  loadConfig(){
    console.log("Loading Config")
    this.httpClient.get<InitialConfig>('../../assets/config.json').pipe(delay(this.delay))
    .subscribe(
      {
        next:(config:InitialConfig)=>{
          console.log(config);
          this.configBehaviorSubject.next(config);
        },
        error:(error:any)=>{
          this.configBehaviorSubject.error("Couldn't load config")
        }
      }
    )
   ;
  }
}
