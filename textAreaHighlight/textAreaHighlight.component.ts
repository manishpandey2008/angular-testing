import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";


@Component({
    selector:'app-textarea-text-highlight',
    template:`
        <ng-container>
        <div 
                contenteditable="true" 
                class="custom-textarea" 
                (input)="onInputChange($event)" 
                [innerHTML]="'' | highlightedPipe">
        </div>

        {{textControl.value}}
        </ng-container>
        
    `,
    styles:`
    
    .custom-textarea {
        border: 1px solid #ccc;
        padding: 10px;
        min-height: 100px;
        white-space: pre-wrap;
    }

    .highlight {
        color: red;
        font-weight: bold;
    }
    `
})
export class TextAreaHighlightComponent{
    textControl = new FormControl('');
    highlightedText:any;
  

    constructor(private sanitizer: DomSanitizer){}

    onInputChange(event: any) {
        setTimeout(()=>{
           this.highlightedText= this.sanitizer.bypassSecurityTrustHtml('') 
        },1000)
      const content = event.target.textContent;
      this.textControl.setValue(content);
    }
}