import { InjectionToken } from "@angular/core";

export interface Config{
    apiEndPoint:string;
    contextMenu:string;
}

let obj={
    apiEndPoint:"https://localhost:8080",
    contextMenu:"/ctrm-api"
}

export const App_Config=new InjectionToken<Config>("app.config",{
    providedIn:'root',
    factory:() =>(obj)
})