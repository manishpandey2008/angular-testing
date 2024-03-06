import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {


  ons=new Subject<string>();
  _ons$= this.ons.asObservable()

  constructor() {
    
   }


}
