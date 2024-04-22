import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appContentEditableModel]'
})
export class ContentEditableModelDirective {

  @Output() cursorIndexChange = new EventEmitter<{ node: Node, index: number }>();
  @Output() childNodeChange=new EventEmitter<Node>();

  constructor() { }

  @HostListener('click', ['$event']) onClick() {
    this.getPosition();
  }

  @HostListener('input') onInput() {
    this.getPosition();
  }

  @HostListener('keyup', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
      event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      this.getPosition();
    }
  }

  getPosition() {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const offset = range.startOffset;
      this.cursorIndexChange.emit({node:range?.startContainer,index:offset});
    }
  }

}
