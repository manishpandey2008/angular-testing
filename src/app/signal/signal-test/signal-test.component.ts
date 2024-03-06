import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-signal-test',
  templateUrl: './signal-test.component.html',
  styleUrls: ['./signal-test.component.css']
})
export class SignalTestComponent implements OnInit{
    
    items=signal([])

    http=inject(HttpClient);


    ngOnInit(): void {
      setTimeout(()=>{
        this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((resp:any)=>{
          this.items.set(resp);
        })
      },10000)
    }




}
