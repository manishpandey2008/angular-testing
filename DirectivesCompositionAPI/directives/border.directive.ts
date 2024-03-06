import { Directive ,ElementRef,EventEmitter,HostListener,Input, Output} from '@angular/core';

@Directive({
  selector: '[appBorder]',
  standalone: true
})
export class BorderDirective {

  @Output() borderOutput=new EventEmitter();
  @Input() border="2px";

  constructor(private elf:ElementRef) { }


  @HostListener("mouseenter")
  mouserEnter(){
    this.elf.nativeElement.style.border=this.border +" solid black";
    this.borderOutput.emit({key:"i am Border Directives"})
  }

  @HostListener("mouseleave")
  mouseLeave(){
    this.elf.nativeElement.style.border="0px";
  }

}
