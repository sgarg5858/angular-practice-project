import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service';
import { take } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
    //So We know APP_INITIALIZER is a builtin Injection Token
    //Which expects a function and it can return value or promise or observable
    //We can provide multiple functions using multi:true
    //Angular runs the functions before it starts bootstrapping app module
    //If function retuens promise it waits for promise to resolve
    //If function retuns observable then it waits for observable to complete or error out
      provide:APP_INITIALIZER,
      multi:true,
      useFactory:((injector:Injector)=>{

        const configService=injector.get(ConfigService);
        configService.loadConfig();
        //Observable Should Complete or Error out !
        return () => configService.config$.pipe(take(1));
        
      }),
      deps:[Injector]
    }
  ]
})
export class InitializerModule { }
