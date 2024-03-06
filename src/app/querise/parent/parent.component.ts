import { Component, ContentChild, Inject } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  constructor(@Inject('CHILD_REf') private text: string){
      console.log(text);
  } 
}
