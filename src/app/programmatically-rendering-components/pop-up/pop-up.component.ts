import { ChangeDetectorRef, Component, Type, ViewChild } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ComponentHostDirective } from '../component-host.directive';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  visible = false;
  baseComponent!: Type<BaseComponent>;
  config: any;

  constructor(private cd:ChangeDetectorRef) {
  }

  show(baseComponent: Type<BaseComponent>,config?:any): void {
    this.baseComponent = baseComponent;
    this.visible = true;
    this.config=config;
    this.cd.detectChanges();
  }


  close(){
    this.visible=false;
  }


  @ViewChild(ComponentHostDirective, { static: false }) set someDummySetterName(componentHost: ComponentHostDirective) {
    if(!componentHost) return;
    const viewContainerRef = componentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<BaseComponent>(this.baseComponent);
    componentRef.instance.init(this.config,this);
    this.cd.detectChanges();
  }

  onClose(): void {
    this.close();
  }
}
