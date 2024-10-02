import { Component } from "@angular/core";


@Component({
    selector:'app-route-main',
    template:`
        <div>
            <span>This Is Main Module</span>
            <router-outlet></router-outlet>
        </div>
    `
})
export class RouteMainComponent{

}