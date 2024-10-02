import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-resizable-table-column',
  templateUrl: './resizable-table-column.component.html',
  styleUrl: './resizable-table-column.component.css'
})
export class ResizableTableColumnComponent implements AfterViewInit{

  columnWidth:Map<string,number>=new Map()

  headers=[
    {
      label:"Label 1",
      field:"field1"
    },
    {
      label:"Label 2",
      field:"field2"
    },
    {
      label:"Label 3",
      field:"field3"
    },
    {
      label:"Label 4",
      field:"field4"
    }
  ]

  dataList:any[]=[
    {
      field1:"Data 1",
      field2:"What's really important to know is that by default, the resize code will not do anything.",
      field3:"Data 3",
      field4:"Data 4"
    },
    {
      field1:"Data 1",
      field2:"Data 2",
      field3:"What's really important to know is that by default, the resize code will not do anything.",
      field4:"Data 4"
    },
    {
      field1:"Data 1",
      field2:"Data 2",
      field3:"Data 3",
      field4:"Data 4"
    },
    {
      field1:"Data 1",
      field2:"Data 2",
      field3:"Data 3",
      field4:"What's really important to know is that by default, the resize code will not do anything."
    }
  ]

  ngAfterViewInit(): void {
    this.columnWidth=new Map();
    // this.headers.forEach(e=>{
    //   if(document.getElementById(e.field)!=null){
    //     let elemnt:any=document.getElementById(e.field)?.getBoundingClientRect();
    //     this.columnWidth.set(e.field,elemnt.width);
    //   }
    // })
  }

  onResizeEnd(fieldName:any,newWidth: number) {
    this.columnWidth.set(fieldName,newWidth);
  }


  change(fieldId:any){
    if(document.getElementById(fieldId)!=null){
      let elemnt:any=document.getElementById(fieldId)?.getBoundingClientRect();
      this.columnWidth.set(fieldId,elemnt.width);
    }
  }
}
