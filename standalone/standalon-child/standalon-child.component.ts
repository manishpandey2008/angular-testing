import { Component, input } from '@angular/core';
import { StandalonGrandChildComponent } from "../standalon-grand-child/standalon-grand-child.component";
import { CommonModule } from '@angular/common';

export interface InputObj{
  child:{name:string,parent:InputObj[]};
}

@Component({
  selector: 'app-standalon-child',
  standalone: true,
  imports: [StandalonGrandChildComponent,CommonModule],
  template: `
    <div>
        <span>Child Component</span>
    </div>
    @for (item of data(); track $index) {
        <div>
            <app-standalon-grand-child [inputObj]="item.child"></app-standalon-grand-child>
        </div>
    }
  `,
  styles: ''
})
export class StandalonChildComponent {
  data=input<InputObj[]>([]);
}

