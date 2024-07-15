import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation-error',
  templateUrl: './form-validation-error.component.html',
  styleUrl: './form-validation-error.component.css'
})
export class FormValidationErrorComponent {

  mainForm=new FormGroup({
    firstName:new FormControl("", Validators.pattern("^[a-zA-Z0-9_ ]*$")),
    lastName: new FormControl(""),
    age:new FormControl("",[Validators.max(10)]),
    userName:new FormControl(""),
    password: new FormControl("")
  })


  formSubmit(){
    this.checkMissingPattern();
    const fieldList=["firstName","lastName","userName","password"];
    if(!this.mainForm.valid){
      alert("Not valid")
      return;
    }
    console.log(this.mainForm.value);
  }

  checkMissingPattern(){
    const regexPattern = /(0?[1-9]|1[0-9]|2[0-9]|3[0-6])/;
    const text = "232 ";
    const missingChars:Set<string> = new Set();
    for (const char of text) {
        if (!regexPattern.test(char)) {
            missingChars.add(char);
        }
    }
    console.log("Characters not allowed :", Array.from(missingChars.values()));
  }


}
