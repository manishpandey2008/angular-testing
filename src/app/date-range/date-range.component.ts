import { ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.css'
})
export class DateRangeComponent {

  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarRows: {number:number,date:Date,otherMonth:boolean}[][] = [];
  currentMonth=signal<Date>(new Date()) ;

  startDate:any=null;
  endDate:any=null;

  ngOnInit() {
    // this.currentMonth = new Date();
    this.generateCalendar();
  }

  generateCalendar() {
    const firstDayOfMonth = new Date(this.currentMonth().getFullYear(), this.currentMonth().getMonth(), 1);
    const lastDayOfMonth = new Date(this.currentMonth().getFullYear(), this.currentMonth().getMonth() + 1, 0);
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
          otherMonth: date.getMonth() !== this.currentMonth().getMonth()
        });
        date.setDate(date.getDate() + 1);
      }
      this.calendarRows.push(week);
    }
  }

  previousMonth() {
    this.currentMonth().setMonth(this.currentMonth().getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth().setMonth(this.currentMonth().getMonth() + 1);
    this.generateCalendar();
  }

  selectDate(day: {number:number,date:Date,otherMonth:boolean}) {
    if(day.otherMonth )return;
    if((this.startDate==null) || (this.startDate!=null && this.endDate!=null)){
      this.startDate=day.date;
      this.endDate=null;
      return
    }
    this.endDate=day.date;
  }

  inBetweenSelectedDate(targetDate:Date){
    if(this.startDate==null || this.endDate==null)return false;
    let fromDate=new Date(this.startDate);
    let toDate=new Date(this.endDate);
    if((targetDate.getTime() <= toDate.getTime() && targetDate.getTime() >= fromDate.getTime())) return true;
    return false;
  }

  isDateSelected(date: Date) {
    return false;
  }
}
