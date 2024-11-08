import { Component, signal } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";




@Component({
    selector: 'app-custom-field-config',
    template: `
            <div class="flex">
                <div class="btn-section">
                    @for (item of btnOption; track $index) {
                        <div class="btn" (click)="createForm(item.fieldRenderList)">
                            <span>{{item.btnLabel}}</span>
                        </div>
                    }
                   
                </div>
                <div class="field-section" [formGroup]="formGroup">
                    @for (item of selectedList(); track $index) {
                       
                       @if(item.isView==undefined || item.isView){
                        <div>
                            <ng-container [ngTemplateOutlet]="name"
                                            [ngTemplateOutletContext]="{item: item,fromGroupName:formGroup}">
                            </ng-container>
                        </div>
                       }
                        
                    }
                </div>

                <ng-template #name let-item="item" let-fromGroupName="fromGroupName">
                    <div [formGroup]="fromGroupName">
                    <label for="">{{item.label}}</label>
                    <div>
                    @switch (item.type) {
                                @case ("textInput") {
                                    <input type="text" [readonly]="item.disabled" [formControlName]="item.fieldKey">
                                }
                                @case ("numberInput") {
                                    <input type="number" [formControlName]="item.fieldKey">
                                }
                                @case ("select") {
                                    <select name="" id="" [formControlName]="item.fieldKey">
                                        @for (option of item.option; track $index) {
                                            <option [value]="option.value">{{option.label}}</option>
                                        }
                                    </select>
                                }
                                @case ("date") {
                                    <input type="date" [formControlName]="item.fieldKey">
                                }
                                @case ("checkbox") {
                                    <input type="checkbox" [formControlName]="item.fieldKey">
                                }
                                @case ("textArea") {
                                    <textarea [formControlName]="item.fieldKey" ></textarea>
                                }
                                @case ("group") {
                                   <div [formGroupName]="item.fieldKey">
                                        @for (k of item.fields; track $index) {
                                            <ng-container [ngTemplateOutlet]="name" [ngTemplateOutletContext]="{item: k,fromGroupName:fromGroupName.get(item.fieldKey)}">
                                            </ng-container>
                                        }
                                   </div>
                                }
                            }
                    </div>
                    </div>
                </ng-template>
                

                <pre>
                    {{formGroup.value | json}}
                </pre>
            </div>
    `,
    styles: `
        .flex{
            display: flex;
            justify-content: start;
        }
    `
})
export class CustomFieldConfig {

    inputConfig = [
        {
            label: "Field Name",
            type: "textInput",
            fieldKey: "name",
            disabled: true
        },
        {
            label: "Label",
            type: "textInput",
            fieldKey: "label",
        },
        {
            fieldKey: "type",
            isView: false,
            value: "input"
        },
        {
            fieldKey: "inputType",
            isView: false,
            value: "text"
        },
        {
            label: "Description",
            type: "textArea",
            fieldKey: "description"
        },
        {
            label: "Form",
            type: "checkbox",
            fieldKey: "isView"
        },
        {
            label: "Grid",
            type: "checkbox",
            fieldKey: "isView"
        },
        {
            label: "Validation",
            type: "group",
            fieldKey: "validation",
            fields: [
                {
                    label: "Required",
                    type: "checkbox",
                    fieldKey: "required",
                },
                {
                    label: "Minlength",
                    type: "numberInput",
                    fieldKey: "minLength",
                }
            ]
        }
    ]

    dateConfig = [
        {
            label: "Date Config field name",
            fieldKey: "name",
            type: "input"
        },
        {
            label: "Date Config field name",
            type: "date",
            fieldKey: "type"
        }
    ]

    select = [
        {
            label: "Select Field name",
            type: "input",
            fieldKey: "name"
        },
        {
            label: "Select option",
            type: "select",
            fieldKey: "select",
            option: [
                { label: "Item 3", value: "Item 3" },
                { label: "Item 4", value: "Item 4" }
            ]
        },
    ]

    btnOption: any[] = [
        {
            btnLabel: "Button 1",
            fieldRenderList: this.inputConfig,
        },
        {
            btnLabel: "Button 2",
            fieldRenderList: this.dateConfig
        },
        {
            btnLabel: "Button 3",
            fieldRenderList: this.select
        }
    ]

    selectedList = signal<any>([]);

    formGroup = new FormGroup<any>({})



    createForm(fieldList: any[]) {
        const tempFormGroup = new FormGroup({});
        fieldList.forEach(e => {
            if (e.fields && e.fields.length > 0) {
                const childTempGroup = new FormGroup({});
                e.fields.forEach((k: any) => {
                    childTempGroup.addControl(k.fieldKey, new FormControl(null));
                })
                tempFormGroup.addControl(e.fieldKey, childTempGroup);
            } else {
                const tempFormControl=new FormControl(e.value)
                tempFormGroup.addControl(e.fieldKey,tempFormControl);
            }
        })
        this.formGroup = tempFormGroup;
        this.selectedList.set(fieldList);
        this.fieldNameChange();
    }

    fieldNameChange(){
        this.formGroup.get("label")?.valueChanges.subscribe((resp:any)=>{
            if(resp &&  this.formGroup.get("name")){
                this.formGroup.get("name")?.patchValue(resp);
            }
        })
    }
}