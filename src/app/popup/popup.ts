import { TemplateRef } from "@angular/core";

export interface PopUpModel{
    popId:string;
    heading:string;
    type:string;
    templateRef?:TemplateRef<any>;
    templateRefKey?:string;
    btnList:PopUpBtn[];
    popupData?:{};
}

export interface PopUpBtn{
    btnLabel:string;
    btnDirection:string;
    btnTrigerEventName?:string;
    btnFuncton?:Function;
}

