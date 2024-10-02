import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResizableTable]',
})
export class ResizableTableDirective {
  
  private resizingColumn: HTMLElement | null = null;
  private startX: number = 0;
  private startWidth: number = 0;
  private isResizing: boolean = false;
  private resizeThreshold: number = 5; // Allow resizing only if clicking within 5px from the right edge

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();

    // Check if the mouse is within the resize threshold (5px) from the right edge
    if (event.clientX > rect.right - this.resizeThreshold && event.clientX < rect.right) {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'col-resize');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'cursor');
    }

    // If resizing, adjust the column width dynamically
    if (this.isResizing) {
      const newWidth = this.startWidth + (event.pageX - this.startX);
      this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (event.clientX > rect.right - this.resizeThreshold && event.clientX < rect.right) {
      this.isResizing = true;
      this.startX = event.pageX;
      this.startWidth = this.el.nativeElement.offsetWidth;
      this.renderer.setStyle(document.body, 'user-select', 'none');
    }
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.isResizing = false;
    this.renderer.removeStyle(document.body, 'user-select');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isResizing = false; // Stop resizing if the mouse leaves the column
    this.renderer.removeStyle(document.body, 'user-select');
  }
}
