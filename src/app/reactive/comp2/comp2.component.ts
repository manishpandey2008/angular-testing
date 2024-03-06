import { Component, OnInit } from '@angular/core';
import { ReactiveService } from '../reactive.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{

  constructor(private reactiveService:ReactiveService){}

  val:string="";
  ngOnInit(): void {
    this.reactiveService._ons$.subscribe((resp:string)=>{
      this.val=resp;
    })
  }



}
