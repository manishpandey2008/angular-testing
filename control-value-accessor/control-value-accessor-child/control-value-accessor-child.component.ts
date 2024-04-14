import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonContollerComponent } from '../common-contoller/common-contoller.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-value-accessor-child',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './control-value-accessor-child.component.html',
  styleUrl: './control-value-accessor-child.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlValueAccessorChildComponent),
      multi: true,
    }
  ]
})
export class ControlValueAccessorChildComponent extends CommonContollerComponent implements OnInit{
  
  formGroup=new FormGroup({
    formArray:new FormArray([])
  })

  get formArray():FormArray{
    return this.formGroup.get("formArray") as FormArray;
  }

  ngOnInit(): void {
    this.formArray.valueChanges.subscribe(resp=>{
        this.onChange(resp);
    })
  }

  add(){
    const obj:FormGroup=new FormGroup({
      child1:new FormControl(""),
      child2:new FormControl(""),
    })
    this.formArray.push(obj)
  }
  
  
  
  override writeValue(obj: any): void {
  }
  

}
