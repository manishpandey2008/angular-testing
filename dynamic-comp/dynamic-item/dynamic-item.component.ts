import { AfterContentInit, Component, Input, TemplateRef } from '@angular/core';
import { EmpInterface } from '../EmpInter';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'tr[app-dynamic-item]',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.css']
})
export class DynamicItemComponent implements AfterContentInit{
  
  @Input() rowData!:EmpInterface;
  @Input() format='text'
  // contentTemplate!: TemplateRef<any>;
  formGroup!:FormGroup;

  constructor(){}
  ngAfterContentInit(): void {
   if(this.format=='edit'){
    this.formGroup=this.makeFormGroup();
    this.formGroup.patchValue(this.rowData)
   }
  }

  makeFormGroup():FormGroup{
    return new FormGroup({
      name:new FormControl(''),
      phone:new FormControl(''),
      salery:new FormControl(''),
    })
  }

}
