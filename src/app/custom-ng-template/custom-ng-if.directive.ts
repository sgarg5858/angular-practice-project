import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgIf]'
})
export class CustomNgIfDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { 
    console.log(templateRef.elementRef,viewContainerRef.element);
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

}
