import { FormControl } from "@angular/forms";
import { FieldDetails, RequestState } from "./addLoaderOnDependetField.component";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../angular-query/api-state-handle/api.service";
import { BehaviorSubject } from "rxjs";


export const WebFunction:{[id:string]:Function}={
    originSubFunction:(formControl:FormControl,dependentFormControl:FormControl, field:FieldDetails, apiService:ApiService, 
    optionSubjects: { [k: string]: BehaviorSubject<any[] | RequestState> }
    )=>{
        if(field.dataResours?.url){
            apiService.getWithStatus(field.dataResours?.url).subscribe((resp:RequestState)=>{
                if(resp.isPending){
                    optionSubjects[field.name].next({isPending:true, isFailed:false,isSuccess:false});
                    return;
                }
                if(resp.isFailed){
                    optionSubjects[field.name].next({isPending:false, isFailed:true,isSuccess:false});
                    return;
                }

                setTimeout(()=>{
                    let respData:any=resp.data ?? [];
                     respData=respData.content??respData;
                    const optionMap=respData.map((e:any)=> {return {label : e[field.dataResours?.options?.optionKey ?? ''], value: e[field.dataResours?.options?.optionValue ?? '']}});
                    optionSubjects[field.name].next(optionMap)
                },10000)
                
            })
        }
    }
}