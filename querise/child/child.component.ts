import { Component, InjectionToken, ViewChild } from '@angular/core';

const CHILD_REf=new InjectionToken<any>('Child Text');

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[{provide:CHILD_REf,useValue:'djfhskfsfkjsf'}]
})
export class ChildComponent {
  x=10;
}
