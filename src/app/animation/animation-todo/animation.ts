import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade= trigger('fade',[

    state('void',style({opacity: 0})),

    // We can Use two transition in one void => *, * => void
    // void <=> *
    // void => * , we known as :enter
    // * => void , we knowns as :leave
    transition('void => *',[
      style({
        backgroundColor:'green',
      }),
      // animate(2000,style({
      //   backgroundColor:'white',
      //   opacity: 1
      // }))
      animate(2000) // Angular Know default stage bg shuld white and opacity should 1
    ]),

    transition('* => void',[
      animate(2000,style({backgroundColor:'red'}))
    ])
  ])


  export let jump= trigger('jump',[
    transition(":enter",[
        animate(2000,style({
            // fontSize: '35px'
        }))
    ])
  ])