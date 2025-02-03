import { Component, HostListener, model, OnDestroy, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import { MenuItem } from './DirectivesCompositionAPI/directives/context-menu.directive';
import { PopUpComponent } from './programmatically-rendering-components/pop-up/pop-up.component';
import { BehaviorSubject, firstValueFrom, from, Observable, of, Subject } from 'rxjs';
import { UserInactivityService } from './user-inactivity/user-inactivity.service';
import { UserInactivity2Service } from './user-inactivity/user-inactivity2.service';
import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit,OnDestroy{

  constructor(private userInactivity2Service:UserInactivity2Service){}


  list=["Item1","Item2","Item3","Item3-beta","Item4"]
  accessList=["Item1","Item3"]


  ngOnInit(): void {
    // this.userInactivityService.printItem();
    this.putValueInOption()
    this.createChannel();
    this.changeItem()
    // this.startTimer();
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

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:keyup', ['$event'])
  onMouseMove(event: MouseEvent) {
      this.userInactivity2Service.resetTimer()
  }

  channel!:BroadcastChannel;
  createChannel(){

    // console.log("=========Started===========");
    
    // this.channel=new BroadcastChannel("testChnell");
    // this.channel.addEventListener('message', (event) => {
    //   console.log('Message received:', event.data);
    // });
  }

  x=10;
  changeItem(){
  
    // this.channel.postMessage({ message: 'My name is Pandey' });
    

    // console.log('BroadcastChannel supported:', 'BroadcastChannel' in window);
    // this.x++;
    // this.userInactivityService.addValue(this.x)
  }





  ngOnDestroy(): void {
    console.log("=======ngOnDestroy=============");
    
    this.userInactivity2Service.clearInterval();
    this.userInactivity2Service.closeBroadcastChannel();
    clearInterval(this.interval); // Clear the interval when the component is destroyed

  }

  // --------------------------Circular moment---------------

  timeLeft = 15; 
  totalTime = 15;
  strokeOffset = 0; 
  interval: any;
  // startTimer(): void {
  //   const circumference = 2 * Math.PI * 90; 
  //   this.interval = setInterval(() => {
  //     const offset = circumference - (this.timeLeft / this.totalTime) * circumference;
  //     this.strokeOffset = offset;
  //     console.log("=====offset=======",offset,this.timeLeft / this.totalTime);
      
  //     this.timeLeft--;
  //     if (this.timeLeft < 0) {
  //       clearInterval(this.interval);
  //     }
  //   }, 1000);
  // }


  option:{[k:string]:WritableSignal<any>}={}

  putValueInOption(){
    this.option['name']=signal(of([]));
  }

  change1(){
    let val=[{label:"Item1"},{label:"Item2"},{label:"Item3"},{label:"Item4"}]
    this.option['name'].set(of(val));
  }
  change2(){
    let val=[{label:"Item5"},{label:"Item6"},{label:"Item7"},{label:"Item8"}]
    this.option['name'].set(of(val));
  }
  

  numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  drop() {

    console.log("====Drop========");

    // moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }

  enter() {
    console.log("====enter========");

    // moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }

  start(){
    console.log("==========Start=========");
  }

  /**
   * Predicate function that only allows even numbers to be
   * sorted into even indices and odd numbers at odd indices.
   */
  sortPredicate(index: number, item: CdkDrag<number>) {
    return (index + 1) % 2 === item.data % 2;
  }
}
