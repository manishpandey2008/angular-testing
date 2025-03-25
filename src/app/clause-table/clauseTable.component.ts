import { Component, ElementRef, OnInit } from "@angular/core";
import { data } from "./data";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector:'ClauseTable',
    templateUrl:'./clauseTable.component.html',
    styleUrls:['./clauseTable.component.css']
})
export class ClauseTableComponent implements OnInit{
    data=data;
    selectedItemIndex={i:null,j:null}
    dropedItemIndex={i:null,j:null}

    // "clauseHeading": "PAYMENT TERM",

    formGroup=new FormGroup({
        clauseList: new FormArray([])
    })

    get clauseList(){
        return this.formGroup.get('clauseList') as FormArray;
    }

    constructor(private el: ElementRef){}

    ngOnInit(): void {
        this.createGroup(this.data);
    }

    createGroup(data:Map<string,any[]>){
        this.clauseList.clear();
        const dataMap:Map<string,any[]>=new Map();
        for (const k of Object.keys(this.data)) {
            dataMap.set(k,this.data[k]);
        }
        this.createFormGroup(dataMap);
    }

    createFormGroup(dataMap:Map<string,any[]>){
        const objKeys=Object.keys(dataMap.get(Object.keys(dataMap)[0])?.at(0));
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

    getChildClauseList(index:any):FormArray{
        return this.clauseList.at(index).get("list") as FormArray;
    }

    dragstart(indexI:any,indexJ:any,event: DragEvent) {
        this.selectedItemIndex={i:indexI,j:indexJ}

        // const dragImage = new Image(); // Creates an empty image to prevent default ghost image
        const target = event.target as HTMLElement;
        // event.dataTransfer?.setDragImage(dragImage, 0, 0);
        // Optionally, add a class for styles during dragging

        target?.classList.add('dragging');
        console.log("Start:- I="+indexI+", J="+indexJ);

        // console.log(target);

      }

    dragenter(indexI:any,indexJ:any){
        this.dropedItemIndex={i:indexI,j:indexJ}
    }

    dragend(){
        if(this.selectedItemIndex.j==this.dropedItemIndex.j && this.selectedItemIndex.i==this.dropedItemIndex.i) return;
        if(this.selectedItemIndex.j!=undefined && this.selectedItemIndex.j!=null && this.dropedItemIndex.j!=null)
        {
            const selectedControls=this.getChildClauseList(this.selectedItemIndex.i).controls.splice(this.selectedItemIndex.j,1);
            const addedControls =selectedControls[0];
            this.getChildClauseList(this.dropedItemIndex.i).controls.splice(this.dropedItemIndex.j,0,addedControls);
        }
    }

}