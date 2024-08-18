import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-form-group-validation',
  templateUrl: './child-form-group-validation.component.html',
  styleUrl: './child-form-group-validation.component.css'
})
export class ChildFormGroupValidationComponent implements AfterViewInit{

  formGroup=new FormGroup({
      field1:new FormControl(""),
      childField1:new FormGroup({
        field1:new FormControl("",Validators.required),
        field2:new FormControl("")
      })
  })

  ngAfterViewInit(): void {
      this.formGroup.get('field1')?.valueChanges.subscribe(resp=>{
        if(resp=="A"){
            this.formGroup.get("childField1")?.get("field1")?.addValidators(Validators.required)
        }else if(resp=="B"){
          this.formGroup.get("childField1")?.get("field1")?.removeValidators(Validators.required)
        }
        this.formGroup.get("childField1")?.get("field1")?.updateValueAndValidity();
      })
  }
}
