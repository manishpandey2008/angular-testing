import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Renderer2, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-calculator',
  templateUrl: './dynamic-calculator.component.html',
  styleUrl: './dynamic-calculator.component.css'
})
export class DynamicCalculatorComponent {

  arthemeticFields = ["+", "-", "*", "/"];
  logicalFields = ["if", "else", "else if"]
  cursorIndex = 5;
  currentNode!: { node: Node, index: number };
  finalFormula="";

  veriable: { fieldLabel: string, fieldName: string }[] = [
    {
      fieldLabel: "Field 1",
      fieldName: "field1"
    },
    {
      fieldLabel: "Field 2",
      fieldName: "field2"
    },
    {
      fieldLabel: "Field 3",
      fieldName: "field3"
    },
    {
      fieldLabel: "Field 4",
      fieldName: "field4"
    },
    {
      fieldLabel: "Field 5",
      fieldName: "field5"
    }
  ]


  formulaForm=new FormGroup({
    formulas:new FormArray([])
  })

  get formulas():FormArray{
    return this.formulaForm.get("formulas") as FormArray;
  } 

  finalResult=signal<any>(0.0)

  constructor(private renderer: Renderer2,private http:HttpClient) { }

  handleCursorIndexChange(node: { node: Node, index: number }) {
    this.currentNode = node;
    this.cursorIndex = node.index;
  }

  addInputTag(value: any) {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute("value", value);
    inputElement.setAttribute("readonly", "");
    inputElement.style.border = "0px";
    inputElement.style.width = value ? value.length * 0.4 + 'rem' : "10px";
    // inputElement.style.width = 'fit-content';

    inputElement.style.textAlign = "center";
    inputElement.addEventListener('focus', () => {
      inputElement.style.outline = "none"
    });
    inputElement.style.fontSize = "12px";
    inputElement.style.fontWeight = "600";
    inputElement.style.color = "rgb(104, 103, 103)";
    inputElement.style.backgroundColor = 'red';


    let textNode = document.createTextNode("");
    if (this.currentNode.node.nodeType === Node.TEXT_NODE) {
       textNode = this.currentNode.node as Text;
    }
    const before = textNode.splitText(this.cursorIndex);
    textNode.parentNode?.insertBefore(inputElement, before);

    // if (this.currentNode.node.nodeType === Node.TEXT_NODE) {
    //   const textNode = this.currentNode.node as Text;
    //   const before = textNode.splitText(this.cursorIndex);
    //   textNode.parentNode?.insertBefore(inputElement, before);
    // } else {
    //   const textnode = document.createTextNode(" ");
    //   this.currentNode.node.appendChild(textnode);
    //   const before = textnode.splitText(this.cursorIndex);
    //   textnode.parentNode?.insertBefore(inputElement, before);
    // }
  }

  addCondition(){
    let obj=new FormGroup({
      condition:new FormControl(''),
      formula:new FormControl('')
    })
    this.formulas.push(obj);
  }


  calculation(){

    let parentElemnt=document.getElementById("editableDiv");
    let finalStr="";
    parentElemnt?.childNodes.forEach((e:any)=>{
        finalStr+= (e.nodeType==Node.TEXT_NODE)?e.textContent:"<"+e.value+">";
    })
    finalStr=finalStr.trim()

      this.http.post("http://localhost:8082/api-ctrm/formula-builder/build",{finalFormula:finalStr}).subscribe(resp=>{
        this.finalResult.set(resp);
      })
  }

}
