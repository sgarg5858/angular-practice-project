import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgTemplateOutlet]'
})
export class CustomNgTemplateOultletDirective implements OnChanges {

  //How to make this typesafe?
  @Input() appCustomNgTemplateOutlet:TemplateRef<any>|undefined;

  @Input('appCustomNgTemplateOutletContext') context : any;

  constructor(private viewContainerRef:ViewContainerRef) { 
    console.log(this.viewContainerRef.element.nativeElement)
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);

    let currentTemplate = changes?.['appCustomNgTemplateOutlet']?.currentValue;
    if(currentTemplate)
    {
      console.log(this.context);
      this.viewContainerRef.createEmbeddedView(currentTemplate,this.context);
    }
  }

}
