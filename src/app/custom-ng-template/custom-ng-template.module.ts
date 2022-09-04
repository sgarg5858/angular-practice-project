import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNgTemplateOultletDirective } from './custom-ng-template-oultlet.directive';
import { TestCustomNgTemplateOutletComponent } from './test-custom-ng-template-outlet/test-custom-ng-template-outlet.component';
import { CustomNgIfDirective } from './custom-ng-if.directive';



@NgModule({
  declarations: [
    CustomNgTemplateOultletDirective,
    TestCustomNgTemplateOutletComponent,
    CustomNgIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomNgTemplateOultletDirective,
    TestCustomNgTemplateOutletComponent
  ]
})
export class CustomNgTemplateModule { }
