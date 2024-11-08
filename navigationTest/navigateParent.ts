import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector:'navigate-parent',
    template:`
       <ng-container>
        <navigation-test></navigation-test>
        <button (click)="fun1()">Test</button>
       </ng-container>
    `
})
export class NavigateParent{

    constructor(private activatedRoute:ActivatedRoute,private router:Router){
    }

    fun1(){
        this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams:{tabId:"Test"}})
    }
}