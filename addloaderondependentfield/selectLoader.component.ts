import { Component, forwardRef, Input, input, OnInit, signal } from "@angular/core";
import { ApiServiceClass } from "./apiService.service";
import { RequestState } from "./addLoaderOnDependetField.component";
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseControlComponent } from "./base-control.component";


@Component({
    selector: 'SelectLoaderComponent',
    template: `
        <div style="width: 10rem;display:fiex;" [formGroup]="formGroup">
            <select style="width: 5rem;" formControlName="field" >
                @for (item of itemList(); track $index) {
                    <option [value]="item.value">{{item.label}}</option>
                }
            </select>
                @if(fieldStatus().isPending){
                <span>Lodding..........</span>
                }
                @if(fieldStatus().isFailed){
                <span>Lodding..........</span>
                }
         </div>
    `,
     providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectLoaderComponent),
      multi: true,
    },
  ]
})
export class SelectLoaderComponent extends BaseControlComponent implements OnInit{

    formGroup=new FormGroup({
        field:new FormControl("")
    })

    get field():FormControl{
        return this.formGroup.get('field') as FormControl
    }
    ngOnInit(): void {
        this.field.valueChanges.subscribe(resp=>{
            this.onChange(resp)
        })
    }

    itemList = signal<any>([]);
    fieldStatus= signal<RequestState>({isFailed:false,isPending:false,isSuccess:false});
    
    @Input() set optionData(values: any[] | RequestState | null ) {
         this.fieldStatus.set((!Array.isArray(values) && values !=null)?values:{isFailed:false,isPending:false,isSuccess:false});
        let tempValue=[];
        if( !Array.isArray(values) && values!=null){
        tempValue=values.data??[]
        }else{
        tempValue= values ?? [];
        }
        this.itemList.set(tempValue);
     }

    fielStatus=input<any[] | RequestState>({isPending:false,isFailed:false,isSuccess:false});


    override writeValue(obj: any | any[]): void {
        console.log("===========",obj);
        
        // throw new Error("Method not implemented.");
    }

    //  onClick(){
    //         this.apiService.postWithState("http://localhost:8082/api-ois/getList").subscribe((resp: { isPending: boolean, isSuccess: boolean, isFailed: boolean, data?:any })=>{
    //             console.log("==",resp);
    //             this.isLoading.set(resp.isPending);
    //             if(resp.data){
    //                 this.itemList2.set(resp.data);
    //             }
    //         })
    // }
}