import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicItemComponent } from '../dynamic-item/dynamic-item.component';
import { EmpInterface } from '../EmpInter';

@Component({
  selector: 'app-static-item',
  templateUrl: './static-item.component.html',
  styleUrls: ['./static-item.component.css']
})
export class StaticItemComponent {
  @ViewChild('dynamicComponents', { read: ViewContainerRef }) dynamicComponent!: ViewContainerRef;

  rowList:EmpInterface[]=[
    {
      name:"Balmukund Pandey",
      phone:"7898987654",
      salery:"98"
    },
    {
      name:"Manish Pandey",
      phone:"9878767654",
      salery:"78"
    },
    {
      name:"Avinash Pandey",
      phone:"1234567876",
      salery:"565"
    }
  ]

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  loadDynamicItems(format:any) {
    // for (const rowData of this.rowList) {
    //   const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicItemComponent);
    //   const rowComponentRef = factory.create(this.dynamicComponent.injector);
    //   rowComponentRef.instance.rowData = rowData; 
    //   rowComponentRef.instance.rowData = rowData; 
    //   this.dynamicComponent.insert(rowComponentRef.hostView);
    // }

    let i=0;
    for (const data of this.rowList) {
      const rowFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicItemComponent);
      const rowRef = this.dynamicComponent.createComponent(rowFactory);
      rowRef.instance.rowData = data;
      rowRef.instance.format =i%2==0?'edit':'text';
      i++;
    }

    // const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicItemComponent);
    // const dynamicComponentRef = factory.create(this.dynamicComponent.injector);
    // // dynamicComponentRef.instance.format=format;
    // this.dynamicComponent.insert(dynamicComponentRef.hostView);
  }
}
