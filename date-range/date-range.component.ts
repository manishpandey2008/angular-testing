import { ChangeDetectorRef, Component, ElementRef, signal } from '@angular/core';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.css'
})
export class DateRangeComponent {

  startDate:any=null;
  endDate:any=null;
  defaultDate=new Date()
  viewCalender=false;

  ngOnInit() {
  }

  getCuttentMonth(index:number):Date{
    let tempDate:Date =new Date(this.defaultDate);
    tempDate.setMonth(tempDate.getMonth() + index);
    return tempDate;
  }

  changeMonth(event:any){
    this.defaultDate.setMonth(this.defaultDate.getMonth() + event['monthDiff'])
  }


  selectDate(day: {number:number,date:Date,otherMonth:boolean}) {
    if(day.otherMonth )return;
    if((this.startDate==null) || (this.startDate!=null && this.endDate!=null)){
      this.startDate=day.date;
      this.endDate=null;
      return
    }
    this.endDate=day.date;
    // this.viewCalender=false;
  }

  changeMonthYear(event:any){
    if(event.type=='month'){
      this.defaultDate.setMonth(event.value)
    }else{
      this.defaultDate.setFullYear(event.value)
    }
    // {type:type,value:value}
  }

}
