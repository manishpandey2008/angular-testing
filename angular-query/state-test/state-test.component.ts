import { Component, OnInit, inject } from '@angular/core';
import { StateMangeService, StateResponse } from '../api-state-handle/state-mange.service';

@Component({
  selector: 'app-state-test',
  templateUrl: './state-test.component.html',
  styleUrl: './state-test.component.css'
})
export class StateTestComponent implements OnInit {
  steteMangement=inject(StateMangeService);
  resp:StateResponse | undefined;
  ngOnInit(): void {
   setTimeout(()=>{
    this.resp= this.steteMangement.getStateResponse("test");
   },2000)
  }
}
