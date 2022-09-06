import { Directive, ElementRef, HostListener, OnInit, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { CommentComponent } from './comment/comment.component';

@Directive({
  selector: '[appHighlightUser]'
})
export class HighlightUserDirective implements OnInit {

  @HostListener('mouseenter')
  onHover()
  {
    console.log(this.elementRef)
    this.renderer.setStyle(this.elementRef.nativeElement,"border","5px solid green",RendererStyleFlags2.Important)
  }
  @HostListener('mouseenter')
  onLeave()
  {
    console.log(this.elementRef)
    this.renderer.setStyle(this.elementRef.nativeElement,"color","white")
  }
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { 
  }

  ngOnInit(): void {
      
  }

}
