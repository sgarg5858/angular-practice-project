import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';


export class MyIfContext<T=unknown>{
  //for providing default value to variables inside ng-template
  public $implicit:T = null!;
  //for using as operator
  public myIf:T=null!;
}

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective<T=unknown> {

  private _context = new MyIfContext<T>();

  private _thenTemplateRef: TemplateRef<MyIfContext<T>>|null = null;
  private _elseTemplateRef: TemplateRef<MyIfContext<T>>|null = null;
  
  private _thenViewRef: EmbeddedViewRef<MyIfContext<T>>|null = null;
  private _elseViewRef: EmbeddedViewRef<MyIfContext<T>>|null = null;

  @Input()set myIf(condition:T)
  {
    this._context.$implicit = this._context.myIf = condition;
    this._updateView();
  }
  @Input()set myIfThen(templateRef:TemplateRef<MyIfContext<T>>|null)
  {
    this._assertTemplate('myIfThen',templateRef);
    this._thenTemplateRef=templateRef;
    this._thenViewRef=null;
    this._updateView();
  }
  @Input()set myIfElse(templateRef:TemplateRef<MyIfContext<T>>|null)
  {
    this._assertTemplate('myIfElse',templateRef);
    this._elseTemplateRef=templateRef;
    this._elseViewRef=null;
    this._updateView();
  }


  private _updateView() {
    //Truthy
    if (this._context.$implicit) {

      //These If checks  are useful when some data changed may 
      //be but you dont want to destroy the view
      if (!this._thenViewRef) {

        this.viewContainer.clear();
        this._elseViewRef = null;

        if (this._thenTemplateRef) {
          this._thenViewRef =
              this.viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
        }
      }
    } else {
      if (!this._elseViewRef) {
        this.viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef =
              this.viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
        }
      }
    }
  }

  constructor(
    private templateRef:TemplateRef<MyIfContext<T>>,
    private viewContainer:ViewContainerRef
    ) { 
      this._thenTemplateRef=this.templateRef;
    }

    _assertTemplate(property:string,templateRef:TemplateRef<any>|null)
    {
      const isTemplateRef = templateRef && templateRef.createEmbeddedView;
      if(!isTemplateRef)
      {
        throw new Error(`${property} must be a TemplateRef, but received '${JSON.stringify(templateRef)}'.`);
      }
    }

    static ngTemplateContextGuard<T>(dir: MyIfDirective<T>, ctx: any):
    ctx is MyIfContext<Exclude<T, false|0|''|null|undefined>> {
    return true;
    }

}
