import { Component, OnInit } from '@angular/core';
import { StandComp2Component } from '../stand-comp2/stand-comp2.component';

@Component({
  selector: 'app-stand-comp1',
  standalone: true,
  imports: [],
  templateUrl: './stand-comp1.component.html',
  styleUrl: './stand-comp1.component.css'
})
export class StandComp1Component extends StandComp2Component{

  override ngOnInit(): void {
    console.log("This is StandComp1Component");
  }
}
