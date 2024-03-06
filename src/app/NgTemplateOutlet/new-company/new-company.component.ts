import { Component } from '@angular/core';
import { CompanyInfoComponent } from '../company-info/company-info.component';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css'],
  standalone:true,
  imports:[CompanyInfoComponent]
})
export class NewCompanyComponent {

}
