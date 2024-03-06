import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { DiFirstService } from '../di-first.service';
import { DiSelfModifierService } from '../di-self-modifier.service';

@Component({
  selector: 'app-di-first',
  templateUrl: './di-first.component.html',
  styleUrls: ['./di-first.component.css'],
  providers:[DiSelfModifierService] // Provided at same label becaause of @Self() Modifier
 })
export class DiFirstComponent {

  // Resolution modifiers

  // constructor(@Optional() private diFirstService:DiFirstService){
  //   // @Optional() => We are using for safe for cress if injector not found !!

  //   // We can not use but our project will not cress
  //   diFirstService.showMessage("My name is pandey !!");
  // }


  // constructor( @Self() private diSelfModifierService:DiSelfModifierService){
  //   // DiSelfModifierService alredy provided at root lebel
  //   // If you use @Self() modifier than this component will ask on this lebel only , i will not serch on parent label.

  //   diSelfModifierService.showMessage("This is self modifier !!")
  // }

  
  constructor( @SkipSelf() private diSelfModifierService:DiSelfModifierService){
    // DiSelfModifierService alredy provided at root lebel
    // If you use @SkipSelf() modifier than this component will ask to parent label but not ask on current label.

    diSelfModifierService.showMessage("This is self modifier !!")
  }


  // hostDirective 

}
