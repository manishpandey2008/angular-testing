import { Component, signal } from "@angular/core";
import { menu } from "./menu";
import { PopoverContentComponent } from "../popover-content/popover-content.component";


@Component({
    selector:'app-top-nav',
    template:`
            <div class="wrapper">
                @for (item of menu; track $index) {
                    <div 
                    cdkOverlayOrigin #trigger="cdkOverlayOrigin" 
                    (mouseenter)="mouseEnter($event,popOverId,item,trigger)"
                    >
                    {{item.label}}
                </div>
                }
            </div>
            <tui-popover-content #popOverId [customCss]="'container-div'">
                <div class="wrapper">
                    @for (item of selectedList().groups; track $index) {
                        <div>
                            <span style="color: red;" class="whiteSpaceRemove">{{item.heading}}</span>
                            <div class="">
                                @for (menuObj of item.list; track $index) {
                                    <div class="whiteSpaceRemove">
                                        {{menuObj.label}}
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </tui-popover-content>
    `,
    styles:`
        .wrapper{
            display: flex;
            justify-content: left;
            align-items: start;
            gap: 2rem;
            width: 40vw;
        }
        .whiteSpaceRemove{
            white-space: nowrap;
        }
    `
})
export class TopNavEditorComponent{
    menu=menu;
    selectedList=signal<any>({});
  
    mouseEnter($event: MouseEvent, popOverId: PopoverContentComponent, item: any,trigger:any) {
        this.selectedList.set(item)
        popOverId.show($event,trigger)
    }
 }