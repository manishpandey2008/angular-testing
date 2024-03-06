import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './standalone/user-list/user-list.component';
import { UserDetailsComponent } from './standalone/user-details/user-details.component';
import { CompanyInfoComponent } from './NgTemplateOutlet/company-info/company-info.component';
import { NewCompanyComponent } from './NgTemplateOutlet/new-company/new-company.component';

const routes: Routes = [
  {path:"user-list",component:UserListComponent},
  // {path:"details/:id",component:UserDetailsComponent},
  {path:"details/:id",loadComponent :() => import('./standalone/user-details/user-details.component').then(m=>m.UserDetailsComponent)},
  {path:"ng-temp",component:CompanyInfoComponent},
  {path:"ng-new-temp",component:NewCompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
