import { AfterViewInit, Component } from '@angular/core';
import { PopupService } from '../popup.service';
import { PopUpBtn, PopUpModel } from '../popup';
import { PubSubService } from '../pub-sub.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements AfterViewInit{
  
  popUpList:PopUpModel[]=[]
  isView=false;
  constructor(private pubsubService:PubSubService){}
  
  ngAfterViewInit(): void {
    PopupService.popUpLise.subscribe(resp=>{
      this.popUpList=resp;
    })
  }

  closePopup(popUpId:string){
    PopupService.removePopup(popUpId)
  }

  btnResponse(btn:PopUpBtn,popUpConfig:PopUpModel){
    if(btn.btnFuncton){
      btn.btnFuncton(btn,popUpConfig)
    }else{
      this.pubsubService.publishToStore(btn.btnTrigerEventName || '',{popUpConfig:popUpConfig,btn:btn})
    }
  }

}
