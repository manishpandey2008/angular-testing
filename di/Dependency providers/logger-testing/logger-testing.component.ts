import { Component, Inject } from '@angular/core';
import { LoggerService } from '../logger.service';
import { LoggerIntImpService } from '../logger-int-imp.service';
import { LegacyLogger } from '../logger.lagecy';
import { App_Config, Config } from '../config.token';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logger-testing',
  templateUrl: './logger-testing.component.html',
  styleUrls: ['./logger-testing.component.css'],
  providers:[
    // {
    //   provide:LoggerService,
    //   useClass:LoggerIntImpService,
    //   // UserClass create new object for LoggerIntImpService
    // }

    // {
    //   provide:LoggerService,
    //   useExisting:LoggerIntImpService,
    //   // LoggerIntImpService we already provided on root label, than useExisting will provide existing object only
    // }

    // {
    //   provide:LoggerService,
    //   useValue:LegacyLogger,
    //   // useExisting can not take any Object (Run Time Error), i will try to get provided class, It is using new operator for create object
    //   // useClass not work
    // }


    // {
    //   provide:LoggerService,
    //   useValue:App_Config,
    //   // useExisting can not take any Object (Run Time Error), i will try to get provided class, It is using new operator for create object
    //   // useClass not work
    // }

    {
      provide:LoggerService,
      useFactory:(appConfig:Config,httpClient:HttpClient)=>{
        return appConfig.contextMenu.includes("crm")?new LoggerIntImpService(httpClient):new LoggerService();
      },
      deps:[App_Config,HttpClient]
    }

  ]
})
export class LoggerTestingComponent {

  constructor(
    private loggerService:LoggerService,
              private loggerIntImpService:LoggerIntImpService,
              @Inject(App_Config) appConfig:Config){
    // loggerService
    // loggerService.name="Manish"
    // loggerService.show()

    // loggerService.show()

    // console.log("Is this two r eqaul =",this.loggerService==this.loggerIntImpService);

    console.log(appConfig.apiEndPoint);
    
    

  }
}
