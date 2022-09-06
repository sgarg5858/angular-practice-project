import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
  name: 'myAsync',
  pure:false
})
export class MyAsyncPipe implements PipeTransform,OnDestroy {

  private lastValue:any=null;
  private observable:Observable<any>|null=null;
  private subscription= new Subscription();

  constructor(private changeDetector:ChangeDetectorRef){}

  transform<T>(observable: Observable<T>): T|null {

    if(!this.observable)
    {
      this.observable=observable;
      this.subscription.add(
        observable.subscribe((value)=>
        {
          this.lastValue=value;
          this.changeDetector.markForCheck();
        })
      )
    }
    else
    {
     if(this.observable != observable)
     {
      this.dispose();
      return this.transform(observable);
     }
    }
    return this.lastValue;
  }

  ngOnDestroy(): void {
    this.dispose();
  }
  dispose()
  {
    if(this.subscription)
    {
      this.subscription.unsubscribe();
    }
    this.observable=null;
    this.lastValue=null;
  }
}
