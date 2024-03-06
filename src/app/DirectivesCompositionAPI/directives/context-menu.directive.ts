import { Directive, ElementRef, HostListener, Input, ComponentFactoryResolver, ViewContainerRef, OnDestroy, ComponentRef, Renderer2 } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import {  TemplatePortal } from '@angular/cdk/portal';
import { DropDownComponent } from '../drop-down/drop-down.component';

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

@Directive({
  selector: '[appContextMenu]',
})
export class ContextMenuDirective {
  
  @Input() appContextMenuList: MenuItem[] = [];
  
  private overlayRef: OverlayRef | null = null;

  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent): void {
    event.preventDefault();
    this.openContextMenu(event);
  }

  private openContextMenu(event: MouseEvent): void {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .flexibleConnectedTo({ x: event.x, y: event.y })
          .withPositions([{ originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top' }]),
      });
    }

    const contextMenuFactory = this.viewContainerRef.createComponent(DropDownComponent);
    contextMenuFactory.instance.menuItems = this.appContextMenuList;
    contextMenuFactory.instance.itemSelected.subscribe(() => this.closeContextMenu());

    // const portal = new TemplatePortal(contextMenuFactory.hostView, this.viewContainerRef);
    // this.overlayRef.attach(portal);

    this.overlayRef.backdropClick().subscribe(() => this.closeContextMenu());
  }

  private closeContextMenu(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}