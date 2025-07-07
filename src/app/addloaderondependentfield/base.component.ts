import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PopupStateListener } from './popup-state-listener';

@Component({
  selector: 'taomish-ui-base',
  template: '',
})
export class BaseComponent implements OnDestroy {
  destroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  init(config:any,listener?:PopupStateListener){
    console.log("init method");
  }
}
