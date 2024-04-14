import { AfterViewInit, Component, inject } from '@angular/core';
import { ApiService } from './api.service';
import { StateMangeService, StateResponse } from './state-mange.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-api-state-handle',
  templateUrl: './api-state-handle.component.html',
  styleUrl: './api-state-handle.component.css'
})
export class ApiStateHandleComponent implements AfterViewInit{
  steteMangement=inject(StateMangeService);
  
  constructor(private apIService:ApiService){}
  ngAfterViewInit(): void {
    
   let resp:StateResponse | null= this.steteMangement.registorFunction({
      key:"test",
      requestFunction: lastValueFrom(this.apIService.get("https://jsonplaceholder.typicode.com/togsdos","todos")),
      onSuccessFun:this.onDone,
      onFinalFun:this.onFinal,
      onFaildFun:this.onFail
    })
    
    if(resp!=null){
      console.log(resp.isLoading());
      console.log(resp.isFaild());
      console.log(resp.isSuccessful());
      console.log(resp.isFinal());
      console.log(resp.error());
      console.log(resp.data());
    }    
  }

  onDone(resp:any){
    console.log("This is Done Resp",resp);
  }

  onFail(error:any){
    console.log("This is error resp",error);
  }

  onFinal(){
    console.log("This is final Resp");
  }
  
}
