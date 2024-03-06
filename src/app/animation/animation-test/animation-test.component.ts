import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: ['./animation-test.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        transform: 'translateX(0%)',
        right:0
      })),

      state('close',style({
        transform: 'translateX(100%)',
        right:'-10%'
      })),

      transition('open => close,close => open',[
        animate(200)
      ])
    ])
  ]
})
export class AnimationTestComponent {
  isOpen=false
}
