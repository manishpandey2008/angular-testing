import { Component } from '@angular/core';
import { fade, jump } from './animation';

@Component({
  selector: 'app-animation-todo',
  templateUrl: './animation-todo.component.html',
  styleUrls: ['./animation-todo.component.css'],
  animations:[
    fade,jump
  ]
})
export class AnimationTodoComponent {
  itemList=[
    "Item 1",
    "Item 2"
  ]

  textVal=""

  addItem(){
    if(this.textVal!=""){
      this.itemList.push(this.textVal);
      this.textVal=""
    }
  }

  removeItem(i:any){
    this.itemList.splice(i,1);
  }
}

