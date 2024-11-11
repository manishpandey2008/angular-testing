import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import EditorJS from "@editorjs/editorjs";

@Component({
    selector:'app-NotationEditor',
    template:`
    
        <span>Notion Editor</span>

        <div #editorContainer class="wrapper"></div>
        <button (click)="saveContent()">Save Content</button>
    `,
    styles:`
        #editorContainer {
            border: 1px solid #e0e0e0;
            padding: 10px;
            border-radius: 5px;
        }

        .wrapper{
            width : 10vw;
            height: 4ovh;
            overflow-y : auto;
        }

    `
})
export class NotationEditor implements OnInit, OnDestroy{
    editor!: EditorJS;

    @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;
  
    ngOnInit(): void {
      this.initializeEditor();
    }
  
    ngOnDestroy(): void {
      this.destroyEditor();
    }

    data={
        "time": 1731292711797,
        "blocks": [
            {
                "id": "BUIcXJVFEH",
                "type": "paragraph",
                "data": {
                    "text": "<b>sdsd</b>"
                }
            },
            {
                "id": "7hM-LKrXQ0",
                "type": "paragraph",
                "data": {
                    "text": "sdsd"
                }
            },
            {
                "id": "nzbeTHM6_H",
                "type": "paragraph",
                "data": {
                    "text": "sd"
                }
            },
            {
                "id": "_LNnGOXHRC",
                "type": "paragraph",
                "data": {
                    "text": "sd"
                }
            },
            {
                "id": "qknB6uUE7f",
                "type": "paragraph",
                "data": {
                    "text": "sd"
                }
            },
            {
                "id": "-dPHAdpFbg",
                "type": "paragraph",
                "data": {
                    "text": "<b>dsd</b>"
                }
            }
        ],
        "version": "2.30.6"
    }
  
    private initializeEditor(): void {
      this.editor = new EditorJS({
        holder: this.editorContainer.nativeElement,
        placeholder: 'Type here',
        tools: {},
        // data : this.data ,
        onReady: () => {
            this.editor.render(this.data)
        },
        onChange: async () => {
          const content = await this.editor.save();
          console.log('Content:', content);
        }
      });
    }
  
    private destroyEditor(): void {
      if (this.editor) {
        this.editor.clear();
      }
    }
  
    async saveContent(): Promise<void> {
      const savedData = await this.editor.save();
      console.log('Saved Content:', savedData);
    }
}