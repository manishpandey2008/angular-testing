import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stand-comp2',
  templateUrl: './stand-comp2.component.html',
  styleUrl: './stand-comp2.component.css'
})
export class StandComp2Component implements OnInit{
 
  constructor(){
    console.log("This is StandComp2Component ");
  }

  ngOnInit(): void {
  }
}
