import { Component, OnInit } from "@angular/core";
import { Page } from "./page";
import { oldTradePage } from "./oldTradePage";
import { newTradePage } from "./newTradePage";

@Component({
    selector:'json-compapir',
    template:`
        Test
    `
})
export class JsonCompairComponent implements OnInit{

 changeFields: Set<string> = new Set([
    "sectionName",
    "label",
    "isFormView",
    "isGridView",
    "isSystem",
    "validation",
    "required",
    "isDescriptionView",
    "description"
  ]);
   
    ngOnInit(): void {
       console.log(this.deepMerge(oldTradePage, newTradePage));
    } 

    deepMerge(actual: any, current: any): any {
      
      if (Array.isArray(current)) {
        const actualMap = new Map(actual.map((item: any) => [item.name, item]));
        return current
          .map(currentItem => {
            const actualItem = actualMap.get(currentItem.name);
            if(currentItem['isSystem']==false)return currentItem;
            return actualItem ? this.deepMerge(actualItem, currentItem) : currentItem;
          })
          .filter(item => actual.some((a:any) => a.name === item.name || a['isSystem']==false)) // Remove fields deleted in actual
          .concat(actual.filter((actualItem:any) => !current.some(c => c.name === actualItem.name))); // Add new fields
      } else if (typeof actual === "object" && actual !== null) {
        const mergedObj: any = {};
        Object.keys({ ...actual, ...current }).forEach(key => {
          if (typeof actual[key] === "object" && actual[key] !== null) {
            mergedObj[key] = this.deepMerge(actual[key], current?.[key]);
          } else {
            mergedObj[key] = this.changeFields.has(key) ? current?.[key] ?? actual[key] : actual[key];
            if(mergedObj[key]==undefined)delete mergedObj[key];
          }
        });
        return mergedObj;
      }

      return actual;
    }


}




