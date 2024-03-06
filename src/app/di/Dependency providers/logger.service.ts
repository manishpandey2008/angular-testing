import { Injectable } from '@angular/core';
import { LoggerInt } from './logger-int';
import { LoggerIntImpService } from './logger-int-imp.service';

@Injectable({
  providedIn: 'root',
  // useClass:LoggerIntImpService // => If you use here than it will create only LoggerIntImpService object .
})
export class LoggerService implements LoggerInt{

  name="Test"
  constructor() { 
    console.log("This is logger constructor ...........");
  }

  show(){
    console.log("This is Logger serveice....",this.name);
  }
}
