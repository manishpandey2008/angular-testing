import { Component } from "@angular/core";
import { StateManagementService, StateStatus } from "./state-management";


@Component({
    selector:'app-test2',
    template: `
     <button (click)="disabled()">Loadding</button>
     <button (click)="enabled()">Unloadingd</button>
    `
})
export class Test2Component{

    constructor(private stateManagementService:StateManagementService){}
        disabled(){
            this.stateManagementService.dispatch("field1",{loading:StateStatus.ACTIVE},5000);
            setTimeout(()=>{
                this.stateManagementService.dispatch("field1",{loading:StateStatus.INACTIVE},5000)
            },5000);
        }
    
        enabled(){
            this.stateManagementService.dispatch("field1",{loading:StateStatus.INACTIVE},5000)
        }
}