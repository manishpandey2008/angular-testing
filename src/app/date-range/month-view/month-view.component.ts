import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, input } from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrl: './month-view.component.css'
})
export class MonthViewComponent implements OnChanges,OnInit{

@Input() currentMonth=new Date();
@Input() startDate=new Date();
@Input() endDate=new Date();
@Input() headerBtn:{preBtn:boolean,nextBtn:boolean}={preBtn:true,nextBtn:true}

@Output() selectedDate=new EventEmitter;
@Output() changeMonth=new EventEmitter;
@Output() changeMonthYear=new EventEmitter;

todayDate=new Date(new Date().toDateString());

 
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthList:{value:number,label:string}[]=[]
  yearList:{value:number,label:string}[]=[]
  showMonth=false;
  showYear=false;
  months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  calendarRows: {number:number,date:Date,otherMonth:boolean}[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['currentMonth']){
      this.generateCalendar();
    }
  }

  ngOnInit() {
    this.months.forEach((e,i)=>this.monthList.push({value:i,label:e}));
    for(let i=this.todayDate.getFullYear()-10 ; i<=this.todayDate.getFullYear()+10;i++){
      this.yearList.push({label:i.toString(),value:i})
    }
  }

  generateCalendar() {
    const firstDayOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    let date = new Date(firstDayOfMonth);
    date.setDate(date.getDate() - firstDayOfWeek);

    this.calendarRows = [];

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        week.push({
          number: date.getDate(),
          date: new Date(date),
          otherMonth: date.getMonth() !== this.currentMonth.getMonth()
        });
        date.setDate(date.getDate() + 1);
      }
      this.calendarRows.push(week);
    }
  }

  inBetweenSelectedDate(targetDay:{number:number,date:Date,otherMonth:boolean}){
    if(this.startDate==null || (this.endDate==null) || targetDay.otherMonth)return false;
    let fromDate=new Date(this.startDate);
    let toDate=new Date(this.endDate);
    return ((targetDay.date.getTime() <= toDate.getTime() && targetDay.date.getTime() >= fromDate.getTime()) 
    // (this.hoverDate.getTime() > fromDate.getTime() && targetDay.date.getTime()<= this.hoverDate.getTime())
  )
  }

  selectDate(day: {number:number,date:Date,otherMonth:boolean}) {
    this.selectedDate.emit(day);
  }

  previousMonth() {
    this.changeMonth.emit({monthDiff:-1})
  }

  nextMonth() {
    this.changeMonth.emit({monthDiff:1})
  }

  changeMonthAndYear(type:any,value:any){
    this.changeMonthYear.emit({type:type,value:value})
    this.showMonth=false;
    this.showYear=false;
  }


  // hoverDate:any=null;
  // changeDateHighlightOnHover(day:{number:number,date:Date,otherMonth:boolean} | null){
  //   if(this.startDate!=null) this.hoverDate=day?.date;
  //   console.log(this.hoverDate);
  // }

}
