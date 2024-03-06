import { Component } from '@angular/core';
import { DirectiveComineDirective } from '../directives/directive-comine.directive';

@Component({
  selector: 'app-dc-api-test',
  templateUrl: './dc-api-test.component.html',
  styleUrls: ['./dc-api-test.component.css'],
})
export class DcApiTestComponent {

  borderResultFun(event:any){
    console.log(event.key);
    
  }
}
