import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResizableTable]',
})
export class ResizableTableDirective {
  
  @Output() resizeEnd = new EventEmitter<number>();

  private startX!: number;
  private startWidth!: number;
  private mouseMoveListener!: () => void;
  private mouseUpListener!: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startX = event.pageX;
    this.startWidth = this.el.nativeElement.offsetWidth;

    this.renderer.setStyle(document.body, 'cursor', 'ew-resize');
    this.renderer.setStyle(document.body, 'user-select', 'none');

    this.mouseMoveListener = this.renderer.listen('document', 'mousemove', this.onMouseMove.bind(this));
    this.mouseUpListener = this.renderer.listen('document', 'mouseup', this.onMouseUp.bind(this));
  }

  onMouseMove(event: MouseEvent) {
    const offset = event.pageX - this.startX;
    const newWidth = this.startWidth + offset;

    this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
  }

  onMouseUp(event: MouseEvent) {
    this.renderer.setStyle(document.body, 'cursor', 'default');
    this.renderer.setStyle(document.body, 'user-select', 'auto');

    this.resizeEnd.emit(this.el.nativeElement.offsetWidth);

    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
    if (this.mouseUpListener) {
      this.mouseUpListener();
    }
  }
}
