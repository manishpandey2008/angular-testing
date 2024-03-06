import { Component, OnInit } from '@angular/core';
import { ReactiveService } from './reactive.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{

  constructor(private reactiveService:ReactiveService){

  }
 
  ngOnInit(): void {
    this.fun();
  }

  fun(){

    let bs=new BehaviorSubject<string>("");
    let _bs$=bs.asObservable();


    bs.next("20");

    _bs$.subscribe(resp=>{
      console.log(resp);
    })


    bs.next("30");
    bs.next("40");
    bs.next("50");
    bs.next("60");


    _bs$.subscribe(resp=>{
      console.log("---",resp);
    })


      // setInterval(()=>{
      //   this.reactiveService.ons.next(""+Math.random())
      // },1000)
  }

}
