import { AfterViewInit, Component, Input } from '@angular/core';
import { ConnectingLineService } from './connecting-line.service';

@Component({
  selector: 'app-connection-lines',
  templateUrl: './connection-lines.component.html',
  styleUrls: ['./connection-lines.component.css']
})
export class ConnectionLinesComponent implements AfterViewInit {

  colorList=["#EB6D20","#512E5F","#1B4F72","#17202A","#784212","#7D6608","#5D6D7E","#E74C3C"]
  selecetdBlock:string[]=[]

  blockList:{label:string,id:string}[]=[
    {
      label:"Label 1",
      id:"div1"
    },
    {
      label:"Label 2",
      id:"div2"
    },
    {
      label:"Label 3",
      id:"div3"
    },
    {
      label:"Label 4",
      id:"div4"
    },
    {
      label:"Label 5",
      id:"div5"
    },
    {
      label:"Label 6",
      id:"div6"
    }
  ]

  finalBlockList:{label:string,id:string}[][]=[]

  inputList: { sourceId: string, targetId: string }[] = [
    {
      sourceId: "div1",
      targetId: "div10",
    },
    {
      sourceId: "div2",
      targetId: "div3",
    },
    {
      sourceId: "div3",
      targetId: "div6",
    },
    {
      sourceId: "div4",
      targetId: "div5",
    },
    {
      sourceId: "div5",
      targetId: "div10",
    },
    {
      sourceId: "div6",
      targetId: "div2",
    }
  ]


  isView=false;


  lines: { sourceId: string, targetId: string, sourceRight: number, sourceTop: number, length: number, angle: number }[] = [];

  constructor(private connectingLineService: ConnectingLineService) { }

  ngAfterViewInit(): void {
    this.createFinalBlockList()
  }

  createFinalBlockList(){
    let map:Map<string,{label:string,id:string}>=new Map();
    this.blockList.forEach(e=>map.set(e.id,e));
    this.finalBlockList=[];
    let lastBlockList:string[]=[];
    let rowList:any[]=[]
    let lastId=""
    this.inputList.forEach(e=>{
      if(lastBlockList.includes(e.targetId)){
        this.finalBlockList.push(rowList);
        rowList=[map.get(e.sourceId)];
      }else{
        rowList.push(map.get(e.sourceId))
      }
      lastBlockList.push(e.sourceId);
      lastId=e.targetId;
    })
    if(!lastBlockList.includes(lastId))rowList.push(map.get(lastId))
    if(rowList.length>0)this.finalBlockList.push(rowList);

    setTimeout(()=>{
      this.inputList.forEach(item=>{
        this.lines.push(this.connectingLineService.getLinePosition(item.sourceId, item.targetId, "divSection"))
      })
    },100)
    this.isView=true;
  }

}
