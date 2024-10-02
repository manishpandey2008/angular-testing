import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

export class Cache{
    url:string="";
    respData:any;
    callTime:string="";

    constructor(url:string,respData:any,callTime:string){
        this.url=url;
        this.respData=respData;
        this.callTime=callTime;
    }
}


@Injectable({
    providedIn:'root'
})
export class CacheingService{

    cacheList:Map<string,Cache>=new Map()

    constructor(private http:HttpClient){}

    get(url:string){
        let key=this.createKey(url);
        console.log(this.cacheList);
        if(this.cacheList.has(key))return (this.cacheList.get(key)?.respData)?? [];
        
        return this.http.get(url).pipe( map((response: any) => {
           this.cacheList.set(key,new Cache(url,response,new Date().toDateString()))
            return response;
          }));
    }

    post(url:string,payload:any){
        return this.http.post(url,payload)
    }

    createKey(url:string,payLoad?:any){
        let key=url;
        if(payLoad){
            key+=JSON.stringify(payLoad);
        }
        return key;
    }

    getTimeOut(){
        
    }
}