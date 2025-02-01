import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserInactivity2Service {
    intervalSub: any;
    userInactivityCount = 0;
    broadcastChannel: BroadcastChannel;

  constructor() {
    this.broadcastChannel = new BroadcastChannel('user_inactivity_timer');
    this.broadcastChannel.onmessage = (event) => {
      if (event.data.type === 'timerCount') {
        this.userInactivityCount = event.data.count;
      }
    };
    this.userInactivityCount =  0;
  }

  resetTimer() {
    this.clearInterval();
    this.broadcastChannel.postMessage({
        type: 'timerCount',
        count: 0,
      });

    this.intervalSub = setInterval(() => {
      // console.log(this.userInactivityCount);
      
        if(this.userInactivityCount>25){
            this.clearInterval();
        }
      this.userInactivityCount++;
      this.broadcastChannel.postMessage({
        type: 'timerCount',
        count: this.userInactivityCount,
      });
    }, 1000); 
  }

  clearInterval(): void {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
      this.intervalSub = null;
    }
  }

  closeBroadcastChannel(): void {
    this.broadcastChannel.close();
  }
  
}