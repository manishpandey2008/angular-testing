import { Component } from "@angular/core";
import { StateManagementService, StateStatus } from "./state-management";


@Component({
    selector:'app-test1',
    template: `
        <button (click)="disabled()">Disabled</button>
        <button (click)="enabled()">Enabled</button>
    `
})
export class Test1Component{

    constructor(private stateManagementService:StateManagementService){}

    disabled(){
        this.stateManagementService.dispatch("field1",{disabled:StateStatus.ACTIVE},5000)
    }

    enabled(){
        this.stateManagementService.dispatch("field1",{disabled:StateStatus.INACTIVE},5000)
    }
}