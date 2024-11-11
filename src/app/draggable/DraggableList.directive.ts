
import { AfterViewInit, Directive, ElementRef, HostListener, input, output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[taomishUiDraggableList]'
})
export class DraggableListDirective{

  index = input<number | undefined>();
  items=input<any[]>([]);
  reordered = output<any[]>();

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'true');
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {
    if(event.dataTransfer){
      event.dataTransfer.setData('text/plain',this.index()+"");
      event.dataTransfer.effectAllowed = 'move';
    }
    this.renderer.addClass(this.el.nativeElement, 'dragging');
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      const sourceIndexString = event.dataTransfer.getData('text/plain');
      const sourceIndex = parseInt(sourceIndexString, 10);
      const targetIndex = this.index();
      if (!isNaN(sourceIndex) && targetIndex !== undefined) {
        this.reorderItems(sourceIndex, targetIndex);
      }
    }
    this.renderer.removeClass(this.el.nativeElement, 'drag-over');
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event: DragEvent) {
    this.renderer.removeClass(this.el.nativeElement, 'dragging');
  }

  private reorderItems(sourceIndex: number, targetIndex: number) {
    const itemList:any[]=this.items();
    const movedItem = itemList[sourceIndex];
    itemList.splice(sourceIndex, 1);
    itemList.splice(targetIndex, 0, movedItem);
    console.log("==============",itemList);

    this.reordered.emit(itemList);
  }

}
