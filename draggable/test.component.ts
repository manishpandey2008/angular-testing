import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";



@Component({
    selector:'app-test-component',
    template:`
        <div>Test component</div>
        <div class="container">
        <div *ngFor="let item of items; let i = index"
          taomishUiDraggableList
          [items]="items"
          [index]="i"
          (reordered)="onItemsReordered($event)" 
          style="border: 1px solid gray;padding:0.5rem;margin-top:0.2rem">
          
          <h2>{{item.header}}</h2>
          <div style="margin-left: 1rem;">
              @for (x of item.listOfItems; track $index) {
                <div style="display: flex; gap:0.5rem">
                      <div>{{x.name}}</div>
                      <div>{{x.group}}</div>
                </div>
              }
          </div>
          
      </div>
</div>
    `,
    styles: `
      .test{
        background:#abcdef;
        width: 30vw;
      }
      .dragging {
        opacity: 0.5;
      }
      .drag-over {
        border: 2px dashed #4a90e2;
      }
    `
})
export class DraggableTestComponent{

  items = [
    {
      header:"Item List 1",
      listOfItems:[
        {
          name:"Item 11",
          group:"Group 11"
        },
        {
          name:"Item 12",
          group:"Group 12"
        },
        {
          name:"Item 13",
          group:"Group 13"
        }
      ]
    },
    {
      header:"Item List 2",
      listOfItems:[
        {
          name:"Item 21",
          group:"Group 21"
        },
        {
          name:"Item 22",
          group:"Group 22"
        },
        {
          name:"Item 23",
          group:"Group 23"
        }
      ]
    },
    {
      header:"Item List 3",
      listOfItems:[
        {
          name:"Item 31",
          group:"Group 31"
        },
        {
          name:"Item 32",
          group:"Group 32"
        },
        {
          name:"Item 33",
          group:"Group 33"
        }
      ]
    }
  ];

  onItemsReordered(updatedItems: any[]) {
    this.items = [...updatedItems];
  }
}