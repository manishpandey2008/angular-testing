import { Component, TemplateRef, viewChild } from "@angular/core";


@Component({
    selector:'NgTemplateLoad',
    template:  `
        <div>
            @for (item of arr; track $index) {
                <button (click)="change(item.tempRef())">{{item.label}}</button>
            }

            <ng-container [ngTemplateOutlet]="currentRef??default"
                                          [ngTemplateOutletContext]="{info: 'Hi'}">
                            </ng-container>

            <ng-template #default let-info="info">
                <span>{{info}} This is temp 1</span>
            </ng-template>
            <ng-template #temp1 let-info="info">
                <span>{{info}} This is temp 1</span>
            </ng-template>
            <ng-template #temp2 let-info="info">
                <span>{{info}}, This is temp 2</span>
            </ng-template>
        </div>
    `,
    styles:``
})
export class NgTemplateLoad{
    x= viewChild<TemplateRef<any>>("temp1");
    y= viewChild<TemplateRef<any>>("temp2");
    arr=[
        {
            label:"Button 1",
            tempRef: this.x
        },
        {
            label:"Button 2",
            tempRef: this.y
        }
    ]
    currentRef:TemplateRef<any> | undefined=this.x();
    change(selectedRef:TemplateRef<any> | undefined){
        this.currentRef=selectedRef;
    }
}