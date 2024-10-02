import { Component, OnInit } from "@angular/core";
import { CacheingService } from "./cacheing.service";


@Component({
    selector:'app-cacheing',
    template:`
    <span>This is cacheing main component</span>
    <button (click)="testClick()">Click</button>
    `
})
export class CacheingMainComponent implements OnInit{

    constructor(private cacheingService:CacheingService){}
    ngOnInit(): void {
        // this.cacheingService.get(" https://api.thecatapi.com/v1/images/search?limit=10").subscribe((resp:any)=>{})
        // this.cacheingService.get(" https://api.thecatapi.com/v1/images/search?limit=10").subscribe((resp:any)=>{})
        // this.cacheingService.get(" https://api.thecatapi.com/v1/images/search?limit=10").subscribe((resp:any)=>{})
    }

    testClick(){
        this.cacheingService.get(" https://api.thecatapi.com/v1/images/search?limit=10").subscribe((resp:any)=>{
            console.log();
        })
    }

}
