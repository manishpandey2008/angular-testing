import { Component } from '@angular/core';
import { ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-common-contoller',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div>Test</div>
  `,
  styles: []
})
export abstract class CommonContollerComponent implements ControlValueAccessor{
  
  
  onChange = (_: any) => {}
  onTouch = () => { }
  id: string;

  constructor() {
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
