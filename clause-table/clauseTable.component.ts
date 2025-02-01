import { Component, OnInit } from "@angular/core";
import { data } from "./data";
import { FormArray, FormControl, FormGroup } from "@angular/forms";




@Component({
    selector:'ClauseTable',
    templateUrl:'./clauseTable.component.html',
    styleUrls:['./clauseTable.component.css']
})
export class ClauseTableComponent implements OnInit{
    data:any[]=data;

    // "clauseHeading": "PAYMENT TERM",

    formGroup=new FormGroup({
        clauseList: new FormArray([])
    })

    get clauseList(){
        return this.formGroup.get('clauseList') as FormArray;
    }

    ngOnInit(): void {
        this.createGroup(this.data);
    }


    createGroup(data:any[]){
        this.clauseList.clear();
        const dataMap:Map<string,any[]>=new Map();
        data.forEach(e=>{
            dataMap.set(e['clauseHeading'],[...dataMap.get(e['clauseHeading'])??[], e])
        })
        this.createFormGroup(dataMap);
    }

    createFormGroup(dataMap:Map<string,any[]>){
        const objKeys=Object.keys(this.data[0]);
        for (const [key, value] of dataMap) {
           const tempGroup=new FormGroup({
                groupName:new FormControl(key),
                list:new FormArray([])
           })
           const tempArray=tempGroup.get("list") as FormArray;
           for(const v of value){
                const childFormGroup=new FormGroup({});
                objKeys.forEach(e=> childFormGroup.addControl(e,new FormControl(v[e]??null)));
                tempArray.push(childFormGroup);
           }
           this.clauseList.push(tempGroup);
        }
    }

    getChildClauseList(groupName:any,index:any):FormArray{
        return this.clauseList.at(index).get("list") as FormArray;
    }


    onItemsReordered(updatedItems: any[]) {
        console.log(updatedItems);
        this.createGroup(updatedItems);

        // this.items = [...updatedItems];
      }

}