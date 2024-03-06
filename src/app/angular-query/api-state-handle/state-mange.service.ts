import { Injectable, WritableSignal, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject, filter, interval } from 'rxjs';

export interface StateResponse {
  isLoading: WritableSignal<boolean>;
  isFaild: WritableSignal<boolean>;
  isSuccessful: WritableSignal<boolean>;
  isFinal: WritableSignal<boolean>;
  data: WritableSignal<any>;
  error: WritableSignal<any>;
}

export interface Request {
  key: string;
  data?: any,
  onSuccessFun?: Function;
  onFaildFun?: Function;
  onFinalFun?: Function;
  onLoaddingFun?: Function;
  requestFunction?: Promise<any>;
  interval?:number;
  timeOut?:number;
  retry?:number;
}

export interface State {
  key: string;
  response: Response;
}

@Injectable({
  providedIn: 'root'
})
export class StateMangeService {

  map = new Map<string, StateResponse>;

  registorFunction(request: Request): StateResponse | null {
    if (request.key === null || request.key === undefined) {
      alert("Key is requird");
      return null;
    }
    let finalResp: StateResponse = { isLoading: signal(false), isFaild: signal(false), isSuccessful: signal(false), isFinal: signal(false), data: signal(request.data), error: signal({}) }
    if (request.requestFunction) {
      finalResp.isLoading.set(true);
      if(request.interval){
        setInterval(()=>{this.requestFunctionExcution(request,finalResp);},request.interval)
      }else if(request.timeOut){
        setTimeout(()=>{this.requestFunctionExcution(request,finalResp);},request.timeOut)
      }else {
        this.requestFunctionExcution(request,finalResp);
      }
    }
    this.map.set(request.key,finalResp);
    return finalResp;
  }

  getStateResponse(key:any):StateResponse | undefined{
    if(!this.map.has(key))return undefined;
    return this.map.get(key);
  }

  requestFunctionExcution(request:Request,finalResp:StateResponse){
    if(request.requestFunction){
      request.requestFunction
      .then((rep) => {
        if (request.onSuccessFun) this.onSuccessFunction(request.onSuccessFun, rep, finalResp)
      })
      .catch((err) => {          
        if(request.retry && request.retry!=1){
          request.retry=request.retry-1;
          this.requestFunctionExcution(request,finalResp);
        }
        if (request.onFaildFun) {
          this.onFaildFunction(request.onFaildFun, err, finalResp)
        }
      })
      .finally(() => {
        if (request.onFinalFun) this.onFinalFunction(request.onFinalFun, finalResp)
      })
    }
  }


  onSuccessFunction(fun: Function, resp: any, finalResp: StateResponse) {
    finalResp.isLoading.set(false);
    finalResp.isSuccessful.set(true);
    finalResp.data.set(resp);
    fun(resp);
  }

  onFinalFunction(fun: Function, finalResp: StateResponse) {
    finalResp.isLoading.set(false);
    finalResp.isFinal.set(true);
    fun();
  }

  onLoaddingFunction(finalResp: StateResponse) {
    finalResp.isLoading.set(false);
  }

  onFaildFunction(fun: Function, err: any, finalResp: StateResponse) {
    finalResp.isLoading.set(false);
    finalResp.isFaild.set(true);    
    finalResp.error.set(err);
    fun(err)
  }

}
