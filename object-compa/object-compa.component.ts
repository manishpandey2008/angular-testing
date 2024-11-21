import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";


@Component({
    selector:'object-comp',
    template:  `
    <button (click)="clickTest()">Click</button>
    <button (click)="patchValue()">Patch Value</button>

    `,
})
export class ObjectCompComponnet implements OnInit{
   
    initialValue={};
    formGroup=new FormGroup({
        item1:new FormControl("item1"),
        item2: new FormControl("")
    });

    ngOnInit(): void {
        this.initialValue=this.formGroup.value
    }

    patchValue(){
        this.formGroup.get("item1")?.patchValue("sasdsad");
    }
    
    clickTest(){
        let currentObj= this.formGroup.value;
        console.log(JSON.stringify(currentObj) === JSON.stringify(this.initialValue));
    }
}