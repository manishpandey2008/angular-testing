import { Component } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";


@Component({
    selector:'navigation-test',
    template:`
        <div>
            <button (click)="fun1()">Button A</button>
            <button (click)="fun2()">Button B</button>
        </div>
    `,
})
export class NavigationTest{

    constructor(private activatedRoute:ActivatedRoute,private router:Router){
        activatedRoute.queryParams.subscribe(e=>{
            console.log();
        })
        
        this.activatedRoute.queryParams.subscribe(resp=>{
            console.log("----------------",resp);
        })
    }

    fun1(){
        this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams:{tabId:"Test"}})
    }

    fun2(){
        this.router.navigate(['.'], { relativeTo: this.activatedRoute})
    }
}