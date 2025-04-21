import { Component, signal } from "@angular/core";
import { StateManagementEvent, StateManagementService, StatePayload, StateStatus } from "./state-management";


@Component({
    selector:'app-test3',
    template: `
        <select [disabled]="isDisabled()" [ngClass]="{'inActive': isDisabled(),' active': !isDisabled()}">
            <option value="value1">Option 1 </option>
            <option value="value2">Option 2 </option>
            <option value="value3">Option 3 </option>
        </select>
        @if(isLoading()){
            <span>Loadding....</span>
        }
    `,

    styles :`
        .active{
            background-color: white;
        }
        .inActive{
            background-color: gray;
        }
    `
})
export class Test3Component{
        isDisabled=signal<StateStatus>(StateStatus.INACTIVE);
        isLoading=signal<StateStatus>(StateStatus.INACTIVE);
        constructor(private stateManagementService:StateManagementService){
            
            stateManagementService.listen("field1",(payload:StatePayload)=>{
                this.isDisabled.update(val=> payload.disabled ?? StateStatus.INACTIVE);
                this.isLoading.update(val=> payload.loading ?? StateStatus.INACTIVE);
            });

        }
}