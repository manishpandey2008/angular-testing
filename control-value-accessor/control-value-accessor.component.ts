import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessorChildComponent } from './control-value-accessor-child/control-value-accessor-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-value-accessor',
  standalone: true,
  imports: [ReactiveFormsModule,
            ControlValueAccessorChildComponent, 
            CommonModule],
  templateUrl: './control-value-accessor.component.html',
  styleUrl: './control-value-accessor.component.css'
})
export class ControlValueAccessorComponent implements OnInit{
    ngOnInit(): void {
      this.formGroup.get("field3")?.valueChanges.subscribe(resp=>{
        this.formGroup.get("field3_1")
      })
    }
    formGroup=new FormGroup({
      field1: new FormControl(""),
      field2: new FormControl(""),
      field3:new FormArray([]),
    })




}
