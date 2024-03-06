import { Injectable } from '@angular/core';
import { LoggerInt } from './logger-int';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerIntImpService implements LoggerInt{

  constructor(private httpClient:HttpClient) { 
    console.log("LoggerIntImpService constructor......",httpClient);
  }

  show():void{
    console.log("This is LoggerIntImpService............");
    
  }
}
