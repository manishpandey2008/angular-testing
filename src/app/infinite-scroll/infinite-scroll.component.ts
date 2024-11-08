import { Component } from "@angular/core";
import { InfiniteScrollService } from "./infinite-scroll.service";



@Component({
    selector:'InfiniteScrollComponent',
    template:`
        <div
      class="search-results"
      infiniteScroll
      [infiniteScrollDistance]="1"
      [infiniteScrollUpDistance]="1"
      [infiniteScrollThrottle]="500"
      (scrolled)="onScroll()"
      (scrolledUp)="onUpScroll()"
      [scrollWindow]="false"
    >
    <div class="data-card" *ngFor="let item of items">
        {{item}}
    </div>

    <div *ngIf="isLoading">Loading...</div>
    </div>
    `,
    styles:`
        .search-results {
            height: 30rem;
            overflow: scroll;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .data-card{
            padding: 5px;
            margin: 8px 0px;
            width: 20%;
            border: 1px solid black;
            font-size: 30px;
            text-align: center;
            background-color: rgb(236, 234, 111);
        }
    `
})
export class InfiniteScrollComponent{
    items:string[]=[];
    isLoading=false;
    currentPage=1;
    itemsPerPage=10;
 
    toggleLoading = ()=>this.isLoading=!this.isLoading;
    loadData= ()=>{
      this.toggleLoading();
      this.paginationService.getItems(this.currentPage,this.itemsPerPage).subscribe({
       next:response=>this.items = response,
       error:err=>console.log(err),
       complete:()=>this.toggleLoading()
      })
    }
    appendData= ()=>{
     this.toggleLoading();
     this.paginationService.getItems(this.currentPage,this.itemsPerPage).subscribe({
      next:response=>this.items = [...this.items,...response],
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()
     })
   }
 
    onScroll= ()=>{
     this.currentPage++;
     this.appendData();
    }

    onUpScroll =()=>{
        this.currentPage++;
        this.appendData();
    }

    constructor(private paginationService:InfiniteScrollService) {
    }
 
   ngOnInit(): void {
     this.loadData();
   }
}