import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateRegistrationService {

  // protected _templateRegistrationMap$ = new BehaviorSubject<Map<string,TemplateRef<any>>>(new Map());
  // templateRegistrationMap = this._templateRegistrationMap$.asObservable();
  map:Map<string,{templateRef:TemplateRef<any>,metaDate?:{}}>=new Map();

  addTemplate(tempId:string,templateRef:{templateRef:TemplateRef<any>,metaDate?:{}}){
    if(!this.map.has(tempId)){
      this.map.set(tempId,templateRef);
    }
  }

  getTemplate(tempId:any):TemplateRef<any> | undefined{
    return this.map.get(tempId)?.templateRef;
  }

  getMetaData(tempId:any):{} | undefined{
    return this.map.get(tempId)?.metaDate;
  }

  removeTemplate(tempId:string){
    if(!this.map.has(tempId)){
      this.map.delete(tempId);
    }
  }

}
