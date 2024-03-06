import { AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CompanyService } from '../company.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css'],
  imports:[NgTemplateOutlet],
  standalone:true,
  providers:[CompanyService]
})
export class CompanyInfoComponent{
  

  companyService:CompanyService=inject(CompanyService);

  // Im
  // @ViewChild("headerContent",{read: ViewContainerRef}) headerContentRef!:ViewContainerRef;
  // @ViewChild("defaultHeader") defaultHeaderRef!:TemplateRef<any>;
  // ngAfterViewInit(): void {
  //   this.headerContentRef.createEmbeddedView(this.defaultHeaderRef);
  // }


  // Use Of NgTemplateOutlet
  @Input()
  inputHeaderTemplate!:TemplateRef<any>;


  @Input()
  inputDetailsTemplate!:TemplateRef<any>;

}
