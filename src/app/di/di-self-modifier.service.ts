import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiSelfModifierService {

  constructor() { }

  showMessage(message:any){
    console.log(message);
  }
}
