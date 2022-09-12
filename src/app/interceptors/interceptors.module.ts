import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHttpErrorHandlerInterceptor } from './global-http-error-handler.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      multi:true,
      useClass:GlobalHttpErrorHandlerInterceptor
    }
  ]
})
export class InterceptorsModule { }
