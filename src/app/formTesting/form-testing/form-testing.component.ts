import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css']
})
export class FormTestingComponent {

  obj={
    field1:{
      field11:"",
      field12:""
    },
    field2:[]
  }

  tempForm=new FormGroup({
      field1:new FormGroup({
        field11: new FormControl(""),
        field12: new FormControl("")
      }),
      field2:new FormArray([
      ])
  })

  add(){
    let arrayForm:FormArray= this.formArry;
    let obj=new FormGroup({
      name: new FormControl(""),
      mobileNumber: new FormControl("")
    })
    arrayForm.push(obj);
  }


  get formArry():FormArray{
    return this.tempForm.get('field2') as FormArray;
  }


  // FormGroup => {}
  // FormControl => ""
  // FormArray => []

}
