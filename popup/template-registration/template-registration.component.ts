import { AfterViewInit, Component, signal, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-registration',
  templateUrl: './template-registration.component.html',
  styleUrl: './template-registration.component.css'
})
export class TemplateRegistrationComponent implements AfterViewInit{
    
    @ViewChild("pop4") pop4!:TemplateRef<any>
    @ViewChild("pop5") pop5!:TemplateRef<any>

    ngAfterViewInit(): void {
        this.registerTemp4();
    }

    // Implemetation of pop4 temp
    selecteItem=signal("");
    // itemList=[{label:"Item 1",value:"item1"},{label:"Item 2",value:"item2"},{label:"Item 3",value:"item3"}]
    
    
    registerTemp4(){
      
    }
  
}
