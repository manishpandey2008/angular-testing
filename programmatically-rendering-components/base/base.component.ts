import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { PopupStateListener } from '../PopupStateListener';

@Component({
  selector: 'app-base',
  template: '',
})
export class BaseComponent {
  destroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  init(config:any,listener?:PopupStateListener){
    console.log("init method");
  }
}
