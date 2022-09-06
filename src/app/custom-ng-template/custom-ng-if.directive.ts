import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

class MyNgIfContext<T>{
  appCustomNgIf:T|null=null;
  public get $implicit(){
    return this.appCustomNgIf;
  }
}
class MyNgIfElseContext<T>{
  appCustomNgIfElse:T|null=null;
}

@Directive({
  selector: '[appCustomNgIf]'
})
export class CustomNgIfDirective {

  @Input('appCustomNgIf') set condition(data: any |null){

    if(data)
    {
      this.myContext.appCustomNgIf=data;
    }

    this.updateView(data??false);

    
  }
  @Input('appCustomNgIfElse') falsyTemplate:TemplateRef<any>|undefined;

  myContext = new MyNgIfContext();

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { 
  }

  updateView(condition:boolean)
  {
    this.viewContainerRef.clear();
    if(condition)
    {
      this.viewContainerRef.createEmbeddedView(this.templateRef,this.myContext);
    }
    else
    {
     if(this.falsyTemplate)
     {
      this.viewContainerRef.createEmbeddedView(this.falsyTemplate);
     }
    }
  }
  static ngTemplateContextGuard(dir:CustomNgIfDirective,ctx:unknown):ctx is MyNgIfContext<any>{
    return true;
  }

}
