import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class HideTime{
  // public $implicit=100

  public get $implicit(){
    return this.hideAfter;
  }
  private hideAfter=0; // Ther r explicites value
  public timeCounter=0;
  setHideAfter(value:number | null){
    this.hideAfter=value??0;
  }
}

@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective implements OnInit{

  @Input('hideAfter')
  set delay(value:number | null){
    this._delay=value ?? 0;
    this.hideTime.setHideAfter(this._delay/1000);
    this.hideTime.timeCounter=this._delay/1000;
  }

  private _delay=0;

  @Input("hideAfterLatter")
  placeHolder:TemplateRef<any> | null =null

  hideTime=new HideTime()

  constructor(private viewContainerRef:ViewContainerRef,private templateRef:TemplateRef<any>) { }

  ngOnInit(): void {
    // this.viewContainerRef.createEmbeddedView(this.templateRef,{hideAfter:300});
    this.viewContainerRef.createEmbeddedView(this.templateRef,this.hideTime);

    const counterInterval=setInterval(()=>{
      this.hideTime.timeCounter--;
    },1000)

    setTimeout(()=>{
      this.viewContainerRef.clear();
      if(this.placeHolder){
        this.viewContainerRef.createEmbeddedView(this.placeHolder,this.hideTime)
      }
      clearInterval(counterInterval)
    },this._delay)
  }

}
