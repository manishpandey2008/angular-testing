import {Component, Input, OnInit} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseComponent } from './base.component';

@Component({
  selector: 'taomish-ui-base-control',
  template: '',
})
export abstract class BaseControlComponent extends BaseComponent implements ControlValueAccessor {

  onChange = (_: any) => { }
  onTouch = () => { }
  id: string;

  constructor() {
    super();
    this.id = "id" + Math.random().toString(16).slice(2);
  }
  abstract writeValue(obj: any | any[]): void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
