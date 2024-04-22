import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopUpModel } from './popup';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  protected static _popUpLise$ = new BehaviorSubject<PopUpModel[]>([]);
  static popUpLise = PopupService._popUpLise$.asObservable();
  static list:PopUpModel[]=[]; 

  constructor() { }

  public static addPopup(popUp:PopUpModel){
    if(!PopupService.isPopUpAvailable(popUp.popId)){
      PopupService.list.push(popUp);
      PopupService._popUpLise$.next(PopupService.list);
    }
  }

  public static removePopup(popId:string){
    if(PopupService.isPopUpAvailable(popId)){
      PopupService.list=PopupService.list.filter(e=>e.popId!==popId);
      PopupService._popUpLise$.next(PopupService.list);
    }
  }

  public static isPopUpAvailable(popId:string):boolean{
    return PopupService.list.map(e=>e.popId).includes(popId);
  }

}
