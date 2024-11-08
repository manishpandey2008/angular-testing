import { Component } from '@angular/core';
import { StandalonChildComponent } from "../standalon-child/standalon-child.component";

@Component({
  selector: 'app-standalon-parent',
  standalone: true,
  imports: [StandalonChildComponent],
  template: `
    <span>Parent Componnet</span>
    <app-standalon-child [data]="parent"></app-standalon-child>
  `,
  styles: ''
})
export class StandalonParentComponent {

  parent:any=[
    {
      child:{
        name:"Child Name 1",
        parent:[
          {
            child:{
              name:"Child Name 2",
              parent:[
                {
                  child:{
                    name:"Child Name 3",
                    parent:[]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
