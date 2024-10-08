import { Component, model, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from './DirectivesCompositionAPI/directives/context-menu.directive';
import { PopUpComponent } from './programmatically-rendering-components/pop-up/pop-up.component';
import { BehaviorSubject, firstValueFrom, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{


  ngOnInit(): void {
  }

  @ViewChild(PopUpComponent) popUp!:PopUpComponent;

  contextMenuItems: MenuItem[] = [
    {
      label: 'Option 1',
      children: [
        { label: 'Submenu 1.1' },
        { label: 'Submenu 1.2' },
      ],
    },
    {
      label: 'Option 2',
    },
    {
      label: 'Option 3',
      children: [
        { label: 'Submenu 3.1' },
        { label: 'Submenu 3.2' },
        {
          label: 'Submenu 3.3',
          children: [
            { label: 'Sub-submenu 3.3.1' },
            { label: 'Sub-submenu 3.3.2' },
          ],
        },
      ],
    },
  ];

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
  }

  onContextMenuItemSelected(item: string) {
    console.log(`Selected: ${item}`);
  }

  modelValue=model(false)

  testFun(event:Event){
    event.preventDefault()
    this.modelValue.set(false)
  }

  test$=new BehaviorSubject(false);
  test=this.test$.asObservable();
  async fun(){
    this.test$.next(false)
    setTimeout(()=>{
      this.test$.next(true)
    },5000);
    let data=await firstValueFrom(this.test);
    console.log("========");
  }
  testVal="sdkasdsad"
}
