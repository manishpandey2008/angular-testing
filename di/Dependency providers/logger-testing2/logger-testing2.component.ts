import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-logger-testing2',
  templateUrl: './logger-testing2.component.html',
  styleUrls: ['./logger-testing2.component.css']
})
export class LoggerTesting2Component {

  constructor(private loggerService:LoggerService){
    // loggerService
    loggerService.show()
  }
}
