import { Directive, EmbeddedViewRef, Injector, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myTemplateOutlet]'
})
export class MyTemplateOutletDirective implements OnChanges {

private _viewRef: EmbeddedViewRef<any>|null = null;
@Input() myTemplateOutlet:TemplateRef<any>|null=null;
@Input() myTemplateOutletContext:Object|null=null!;
@Input() myTemplateOutletInjector:Injector|null=null;

constructor(private _viewContainer:ViewContainerRef) { }
ngOnChanges(changes: SimpleChanges): void {

    // Here View will be destroyed
    if(changes?.['myTemplateOutlet'] || changes?.['myTemplateOutletInjector'])
    {
      const viewContainerRef = this._viewContainer;
      if(this._viewRef)
      {
        viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
      }
      if(this.myTemplateOutlet)
      {
        this._viewRef= this._viewContainer.createEmbeddedView(this.myTemplateOutlet,this.myTemplateOutletContext,{injector:this.myTemplateOutletInjector??undefined})
      }
      else
      {
        this._viewRef=null;
      }
     
    }
    else if(this._viewRef && changes['myTemplateOutletContext'] && this.myTemplateOutletContext)
    {
      this._viewRef.context = this.myTemplateOutletContext;
    }
}
}
