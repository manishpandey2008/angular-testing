import { Component, forwardRef, input, signal } from '@angular/core';
import { InputObj, StandalonChildComponent } from '../standalon-child/standalon-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalon-grand-child',
  standalone: true,
  imports: [
    StandalonChildComponent, 
    CommonModule,
    forwardRef(() => StandalonChildComponent)
  ],
  template: `
    <div>
      <span>Grand Child Component</span>
    </div>
    @if (inputObj()) {
        {{inputObj().name}}
        @if(inputObj().parent.length>0){
            <app-standalon-child [data]="inputObj().parent"></app-standalon-child>
        }
    }
  `,
  styles: '',
})
export class StandalonGrandChildComponent {
  inputObj=input<any>();
}
