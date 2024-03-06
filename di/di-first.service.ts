import { Injectable } from '@angular/core';

@Injectable()
export class DiFirstService {

  constructor() { }

  showMessage(message:any){
    console.log(message);
  }
}
