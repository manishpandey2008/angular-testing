import { HostListener, Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class UserInactivityService {
    inactivityTime = 10000;
    activitySubject = new Subject<any>();
    inactivityTimer: any;

    constructor() {
        this.resetTimer();
    }

    resetTimer() {
        clearTimeout(this.inactivityTimer);
        this.inactivityTimer = setTimeout(() => this.handleInactivity(), this.inactivityTime);

        
        // this.activitySubject.next();
    }

    addValue(item:any){
        this.activitySubject.next(item);
    }

    printItem(){
        this.activitySubject.subscribe(resp=>{
            console.log("=============",resp);
        })
    }

    handleInactivity() {
        confirm('Seeion Timeout, Do you want to continue !!');
    }
}