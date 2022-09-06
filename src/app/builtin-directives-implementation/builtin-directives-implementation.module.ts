import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyIfDirective } from './my-if.directive';
import { MyAsyncPipe } from './my-async.pipe';
import { MyTemplateOutletDirective } from './my-template-outlet.directive';



@NgModule({
  declarations: [
    MyIfDirective,
    MyAsyncPipe,
    MyTemplateOutletDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyAsyncPipe,
    MyIfDirective,MyTemplateOutletDirective
  ]
})
export class BuiltinDirectivesImplementationModule { }
