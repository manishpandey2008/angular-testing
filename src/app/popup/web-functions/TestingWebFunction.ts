import { PopUpModel } from "../popup";
import { PopupService } from "../popup.service";
import { PubSubService } from "../pub-sub.service";
import { TemplateRegistrationService } from "../template-registration.service";

export const TestingWebFunction:{[key:string]:Function}={
    testPopUp:(pubSubService:PubSubService,templateRegistrationService:TemplateRegistrationService)=>{
        // Warning Message
        let firstPopup:PopUpModel={
            popId:"ID1",
            heading:"Fiest Popup",
            type:"message",
            templateRef:templateRegistrationService.getTemplate("message"),
            popupData:{message:"Testing of popup"},
            btnList:[
              {
                btnLabel:"Save",
                btnDirection:'right',
                btnFuncton: (resp:any,resp2:any)=>{
                    console.log("-----------",resp,resp2);
                    PopupService.removePopup("ID1");
                }
              }
            ]
          }
        PopupService.addPopup(firstPopup);
    } ,
    testFormPopUp:(pubSubService:PubSubService,templateRegistrationService:TemplateRegistrationService)=>{
        // Warning Message
        let firstPopup:PopUpModel={
            popId:"ID5",
            heading:"Fiest Popup",
            type:"message",
            templateRef:templateRegistrationService.getTemplate("popupForm"),
            popupData:{message:"Testing of popup"},
            btnList:[
              {
                btnLabel:"Save",
                btnDirection:'right',
                btnFuncton: (resp:any,resp2:any)=>{
                    console.log(templateRegistrationService.getMetaData("popupForm"));
                    PopupService.removePopup("ID5");
                }
              },
              {
                btnLabel:"Close",
                btnDirection:'right',
                btnFuncton: ()=>{
                    PopupService.removePopup("ID5");
                }
              }
            ]
          }
        PopupService.addPopup(firstPopup);
    }  
}