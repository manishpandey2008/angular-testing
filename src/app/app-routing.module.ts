import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { UserListComponent } from './standalone/user-list/user-list.component';
import { CompanyInfoComponent } from './NgTemplateOutlet/company-info/company-info.component';
import { NewCompanyComponent } from './NgTemplateOutlet/new-company/new-company.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { InputBindingInAngularRouterComponent } from './input-binding-in-angular-router/input-binding-in-angular-router.component';
import { PopupTestingComponent } from './popup/popup-testing/popup-testing.component';
import { ColumnSearchComponent } from './column-search/column-search.component';
import { DynamicCalculatorComponent } from './dynamic-calculator/dynamic-calculator.component';

const routes: Routes = [
  {path:"user-list",component:UserListComponent},
  // {path:"details/:id",component:UserDetailsComponent},

  {path:"details/:id",loadComponent :() => import('./standalone/user-details/user-details.component').then(m=>m.UserDetailsComponent)},

  {path:"ng-temp",component:CompanyInfoComponent},
  {path:"ng-new-temp",component:NewCompanyComponent},
  {path:"control-value-accessor",component:ControlValueAccessorComponent},
  {
    path:"input-Binding-in-Angular-Router/:id?id=897",
    component:InputBindingInAngularRouterComponent,
    data:{
      data1:"Data 1",
      data2: "Date 2",
      // id:"sasvdhjasdasd"
    }
    // => Query Parm > Data > pathveriable
  },
  {path:"popup-testing",component:PopupTestingComponent},
  {path:"column-serch",component:ColumnSearchComponent},
  {path:"dynamic-calculator",component:DynamicCalculatorComponent},
  { path: 'route-access', loadChildren: () => import('./guard-test/guard-test.module').then(m => m.GuardTestModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    provideRouter(
      routes,
      withComponentInputBinding()
    )
  ]
})
export class AppRoutingModule { }
