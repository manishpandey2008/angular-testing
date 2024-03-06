import { Directive } from '@angular/core';
import { BorderDirective } from './border.directive';
import { HighlightDirective } from './highlight.directive';

@Directive({
  selector: '[appDirectiveComine]',
  hostDirectives:[
    {
      directive:BorderDirective,
      inputs:["border"],
      outputs:["borderOutput:borderResult"]
    }
    ,
  {
    directive:HighlightDirective,
    inputs:["color:backColor"]
  }
  ]
})
export class DirectiveComineDirective {

  constructor() { }

}
