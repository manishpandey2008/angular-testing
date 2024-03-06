import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../directives/context-menu.directive';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent {
  @Input() menuItems: MenuItem[] = [];
  @Output() itemSelected = new EventEmitter<string>();
  @Output() childItemSelected = new EventEmitter<string>();

  onMenuItemClick(item: any) {
    if (item.children && item.children.length > 0) {
      this.childItemSelected.emit(item.label);
    } else {
      this.itemSelected.emit(item.label);
    }
  }
}
