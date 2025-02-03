
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
    // Set the custom drag image

    // const dragImage = this.el.nativeElement.cloneNode(true) as HTMLElement;
    // dragImage.style.position = 'absolute';
    // dragImage.style.top = '-9999px'; // Hide the clone off-screen
    // dragImage.style.backgroundColor = 'red'; // Hide the clone off-screen

    // document.body.appendChild(dragImage);

    // // Set the custom drag image
    // event.dataTransfer?.setDragImage(dragImage, 0, 0);


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
    this.reordered.emit(itemList);
  }

}
