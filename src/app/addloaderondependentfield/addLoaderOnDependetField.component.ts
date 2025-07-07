import { HttpClient } from "@angular/common/http";
import { Component, OnInit, signal } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject, catchError, Observable, pairwise, retry, startWith, takeUntil, throwError } from "rxjs";
import { TestingWebFunction } from "../popup/web-functions/TestingWebFunction";
import { WebFunction } from "./testWebFunction";
import { ApiServiceClass } from "./apiService.service";
import { ApiService } from "../angular-query/api-state-handle/api.service";

export enum FieldStatus {
  NONE = 'NONE',
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export interface FieldDetails{
   name:string ;
   label:string ;
   type:string ;
   dependentField?: {fieldName:string,subFunction: string}[];
   dataResours?:{
      url?: string;
      resoursType?:string;
      options?:{optionKey:string, optionValue:string}
   }
}

export interface RequestState{
  isPending: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  data?: any;
  error?: any;
}

@Component({
    selector:'AddLoaderOnDependentField',
    template:`
        <div [formGroup]='formGroup2'>
                <div>
                    <!-- <select  formControlName="field1">
                        @for (item of itemList; track $index) {
                            <option [value]="item">{{item}}</option>
                        }
                    </select> -->

                    @for (item of fields; track $index) {
                      @if(item.type=='select'){
                        <SelectLoaderComponent [optionData]="(optionValues[item.name] | async) ?? []" [formControlName]="item.name" ></SelectLoaderComponent>
                      }
                    }

                    <button type="button" (click)="saveButton()">Save</button>
                </div>
                
        </div>
    `
})

export class AddLoaderOnDependentField implements OnInit{
    itemList =[
        "Item1","Item2","Item3"
    ]
    
    // formGroup=new FormGroup({
    //     field1: new FormControl(""),
    //     field2: new FormControl("")
    // })
    optionSubjects: { [k: string]: BehaviorSubject<any[] | RequestState> } = {};
    optionValues: { [k: string]: Observable<any[] | RequestState> } = {};

    formGroup2=new FormGroup({})
    fields:FieldDetails[]=[
                {
                    "name": "commodity",
                    "label": "Commodity",
                    "type": "select",
                },
                {
                    "name": "origin",
                    "label": "Origin",
                    "type": "select",
                    "dependentField":[{"fieldName":"commodity","subFunction":"originSubFunction"}],
                    "dataResours":{
                      "resoursType":"api",
                      "url":"http://localhost:3000/posts",
                      "options":{optionKey:"id",optionValue:"title"}
                    }
                },
                {
                    "name": "grade",
                    "label": "Grade",
                    "type": "select"
                }
    ]


    saveButton(){
      console.log(this.formGroup2.status);
    }

    // We can add some more configuration on dataResours
    // Like :  PayloadMaker, QueryRplament, Response update and store.

    fieldStatusSubjects: { [key: string]: BehaviorSubject<FieldStatus> } = {};
    fieldStatus: { [key: string]: Observable<FieldStatus> } = {};

    constructor( readonly apiService:ApiService){}

    ngOnInit(): void {
        // this.formGroup.get('field1')?.valueChanges.subscribe(resp=>{
        //     this.formGroup.get('field2')?.markAsPending()
        //     setTimeout(()=>{
        //         this.formGroup.get('field2')?.patchValue("Item12")
        //         this.formGroup.get('field2')?.updateValueAndValidity();
        //     },10000)
        // })

        // this.formGroup.reset()

        // this.initFieldStatus('field2');
        // this.formGroup.get('field1')?.valueChanges.subscribe(resp=>{
        //     this.fieldStatusSubjects['field2']?.next(FieldStatus.IN_PROGRESS);
        //     setTimeout(() => {
        //     this.formGroup.get('field2')?.patchValue('Item12');
        //     this.fieldStatusSubjects['field2']?.next(FieldStatus.COMPLETED);
        //     }, 5000);
        // })

        this.makeForm();
        this.optionSubjects['commodity'].next([{label : "Item 1", value: "item1"}, {label : "Item 2", value: "item2"}])
    }


    makeForm(){
      const temFormgroup=new FormGroup({});
      this.fields.forEach(e=>{
          const tempControl= new FormControl("");
          if(e.dependentField){
            e.dependentField.forEach(f=>{
              this.valueChanger(tempControl,temFormgroup.get(f.fieldName) as FormControl ,e,f.subFunction);
            })
          }
          this.optionSubjects[e.name] = new BehaviorSubject<any[] | RequestState>([]);
          this.optionValues[e.name] = this.optionSubjects[e.name].asObservable();
          temFormgroup.addControl(e.name,tempControl);
      })
      this.formGroup2=temFormgroup;
    }

    valueChanger(currentFormControl:FormControl,formControl: FormControl , field: FieldDetails,subscribeId:string) {
      console.log(formControl);
      
    formControl.valueChanges
        .pipe(startWith(null),pairwise())
        .subscribe(([prev,current]) => {
          if(WebFunction[subscribeId]){
            WebFunction[subscribeId](
              currentFormControl,
              formControl,
              field,
              this.apiService,
              this.optionSubjects
            )
          }
        });
    }
   
    // initFieldStatus(fieldName: string) {
    //     this.fieldStatusSubjects[fieldName] = new BehaviorSubject<FieldStatus>(FieldStatus.NONE);
    //     this.fieldStatus[fieldName] = this.fieldStatusSubjects[fieldName].asObservable();
    // }

    // postWithState(path: string): Observable<RequestState> {
    //     const raw$ = this.http.get(`${path}`)
    //     return trackRequestState(raw$);
    // }

}

export function trackRequestState<T>(obs$: Observable<T>): Observable<RequestState> {
  return new Observable<RequestState>(subscriber => {
    subscriber.next({ isPending: true, isSuccess: false, isFailed: false });
    obs$.subscribe({
      next: (data) => {
        subscriber.next({ isPending: false, isSuccess: true, isFailed: false, data });
        subscriber.complete();
      },
      error: (error) => {
        subscriber.next({ isPending: false, isSuccess: false, isFailed: true, error });
        subscriber.complete();
      }
    });
  });
}
