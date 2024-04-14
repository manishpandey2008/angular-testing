import { AfterViewInit, Component, input } from '@angular/core';

@Component({
  selector: 'app-input-binding-in-angular-router',
  templateUrl: './input-binding-in-angular-router.component.html',
  styleUrl: './input-binding-in-angular-router.component.css'
})
export class InputBindingInAngularRouterComponent implements AfterViewInit{
    id =input<string>();
    data1 =input<string>();
    data2 =input<string>();
  
    ngAfterViewInit(): void {
      console.log(this.data1());
    }
}
