import { ConnectedPosition } from '@angular/cdk/overlay';
import { asNativeElements, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'tui-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.css']
})
export class PopoverContentComponent  {
  @Input() customCss: any = 'container-div';
  @ViewChild("parentDiv") parentDiv!:ElementRef;

  isView=false
  private viewItem:any;
  triggerOrigin:any;
  overlayPosition: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
      offsetX: 0,
      offsetY: 0
    },
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
      offsetX: 0,
      offsetY: 0
    },
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      offsetX: 0,
      offsetY: 0
    },
    {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
      offsetX: 0,
      offsetY: 0
    },
    {
      originX: 'center',
      originY: 'center',
      overlayX: 'center',
      overlayY: 'center',
      offsetX: 0,
      offsetY: 0
    }
  ];
  // left = 0;
  // top = 0;
  keepPopup = false;
  isInside=false;

  @HostListener('document:mouseover', ['$event'])
  mouseOver(event:MouseEvent) {
    if(this.viewItem !== null && this.viewItem !== undefined) {
     const isInsideDiv = this.parentDiv?.nativeElement.contains(event.target);
      if (isInsideDiv && !this.isInside) {
        this.isInside=true;
      }else if (!isInsideDiv && this.isInside) {
        this.isInside=false;
      }
      if (this.viewItem !== event.target && !this.isInside) {
        this.hide();
      }
    }
  }


  show(event: MouseEvent,triggerOrigin:any,keepPopup:boolean = false) {
    event.preventDefault();
    this.keepPopup = keepPopup??false;
    this.viewItem= event['target'];
    this.triggerOrigin=triggerOrigin;
    this.isView=true;
  }

  hide(){
    this.isView = false;
  }

  hideContent(event:Event){
    this.hide()
  }


}
