import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule } from '@angular/router';
import { paths } from './guard-route';
import { RouteMainComponent } from './route-main-component';
import { Component1 } from './component-1';
import { Component2 } from './component-2';
import { NewTestCompComponent } from './new-test-comp/new-test-comp.component';

// https://medium.com/@zayani.zied/angular-application-based-on-standalone-components-with-lazy-loading-and-shared-elements-417f36682968#:~:text=Routes%20can%20lazy%2Dload%20their,by%20using%20the%20loadComponent%20function.&text=Or%20we%20can%20use%20loadChildren,create%20a%20lazy%2Dloaded%20NgModule.&text=Now%20we%20can%20use%20lazy%20loading%20for%20children%20based%20on%20routes.
@NgModule({
  declarations: [
    RouteMainComponent,
    Component1,
    Component2,
    NewTestCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(paths),
  ],
  providers:[
    provideRouter(paths)
  ],
  bootstrap: [RouteMainComponent],
})
export class GuardTestModule { }
