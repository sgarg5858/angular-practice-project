import { ErrorHandler, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomErrorHandlerService } from './custom-error-handler.service';
import { HttpClient } from '@angular/common/http';
import { Environment, ENVIRONMENT } from '../injection_tokens/environment';
import { ProductionErrorHanlderService } from './production-error-hanlder.service';
import { DevelopmentErrorHanlderService } from './development-error-hanlder.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide:ErrorHandler,
      useFactory:((environment:Environment,httpClient:HttpClient)=>{
        if(environment.production)
        {
          return new ProductionErrorHanlderService(httpClient);
        }
        return new DevelopmentErrorHanlderService();
      }),
      deps:[ENVIRONMENT,HttpClient]
    }
  ]
})
export class ErrorHandlerModule { }
