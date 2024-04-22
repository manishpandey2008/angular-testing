import { AfterViewInit, Component, ContentChild, signal, TemplateRef, ViewChild } from '@angular/core';
import { PopupService } from '../popup.service';
import { PopUpModel } from '../popup';
import { PubSubService } from '../pub-sub.service';
import { TestingWebFunction } from '../web-functions/TestingWebFunction';
import { TemplateRegistrationService } from '../template-registration.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-popup-testing',
  templateUrl: './popup-testing.component.html',
  styleUrl: './popup-testing.component.css'
})
export class PopupTestingComponent implements AfterViewInit {
  
  @ViewChild("pop1") templateRef1!: TemplateRef<any>;
  @ViewChild("pop2") templateRef2!: TemplateRef<any>;
  @ViewChild("pop3") templateRef3!: TemplateRef<any>;

  @ViewChild("pop4") templateRef4!: TemplateRef<any>;

  popupForm:FormGroup=new FormGroup({
    name: new FormControl(""),
    mobile:new FormControl("")
  })

  constructor(private pubSubService:PubSubService,private templateRegistrationService:TemplateRegistrationService){}
  
  ngAfterViewInit(): void {
    let firstPopup:PopUpModel={
      popId:"ID1",
      heading:"Fiest Popup",
      type:"message",
      templateRef: this.templateRef1,
      btnList:[
        {
          btnLabel:"Save",
          btnDirection:'right',
          btnTrigerEventName:'saveBtnRef',
        }
      ]
    }
    let secondPopup:PopUpModel={
      popId:"ID2",
      heading:"Second Popup",
      type:"message",
      templateRef: this.templateRef2,
      btnList:[
        {
          btnLabel:"Submit",
          btnDirection:'right',
          btnTrigerEventName:'submitBtnRef',
        }
      ]
    }
    let thirdPopup:PopUpModel={
      popId:"ID3",
      heading:"Third Popup",
      type:"message",
      templateRef: this.templateRef3,
      btnList:[
        {
          btnLabel:"Continue",
          btnDirection:'right',
          btnFuncton:()=>{
            console.log("======ContinueContinue======",);
          }
        }
      ]
    }

    // PopupService.addPopup(firstPopup);
    // PopupService.addPopup(secondPopup);
    // PopupService.addPopup(thirdPopup);
    // this.btnSubscribe()

    // Tempate Regisration

    // this.templateRegistrationService.addTemplate("message",{templateRef:this.templateRef1,metaDate:{}});
    this.templateRegistrationService.addTemplate("popupForm",{templateRef:this.templateRef4,metaDate:{formGroup:this.popupForm,value:"12355556"}});
  }

  btnSubscribe(){
    this.pubSubService.subscribeFromStore('saveBtnRef').subscribe(resp=>{
      if(resp){
        console.log("-----------Loader Start----------");
        console.log("Save Btn Ref : ", resp);
        PopupService.removePopup("ID1");
        console.log("-----------Loader Close----------");
      }
    })
    this.pubSubService.subscribeFromStore('submitBtnRef').subscribe(resp=>{
      if(resp){
        console.log("-----------Loader Start----------");
        console.log("Submit Btn Ref : ", resp);
        PopupService.removePopup("ID2");
        console.log("-----------Loader Close----------");
      }
    })
    this.pubSubService.subscribeFromStore('continueBtnRef').subscribe(resp=>{
      if(resp){
        console.log("-----------Loader Start----------");
        console.log("Continue Btn Ref : ", resp);
        PopupService.removePopup("ID3");
        console.log("-----------Loader Close----------");
      }
    })
  }

  funCall(){
    TestingWebFunction['testFormPopUp'](this.pubSubService,this.templateRegistrationService);
  }

}
