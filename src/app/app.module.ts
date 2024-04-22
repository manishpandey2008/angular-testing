import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcApiTestComponent } from './DirectivesCompositionAPI/dc-api-test/dc-api-test.component';
import { DropDownComponent } from './DirectivesCompositionAPI/drop-down/drop-down.component';
import { ContextMenuDirective } from './DirectivesCompositionAPI/directives/context-menu.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { DirectiveComineDirective } from './DirectivesCompositionAPI/directives/directive-comine.directive';
import { DiFirstComponent } from './di/di-first/di-first.component';
import { LoggerTestingComponent } from './di/Dependency providers/logger-testing/logger-testing.component';
import { LoggerTesting2Component } from './di/Dependency providers/logger-testing2/logger-testing2.component';
import { SuperCenteredComponent } from './css/super-centered/super-centered.component';
import { CustomDirectiveComponent } from './structural-Directives/custom-directive/custom-directive.component';
import { HideAfterDirective } from './structural-Directives/hide-after.directive';
import { CssBestPracticeComponent } from './css/css-best-practice/css-best-practice.component';
import { DynamicItemComponent } from './dynamic-comp/dynamic-item/dynamic-item.component';
import { StaticItemComponent } from './dynamic-comp/static-item/static-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotPseudoClassComponent } from './selectors/not-pseudo-class/not-pseudo-class.component';
import { AnimationTestComponent } from './animation/animation-test/animation-test.component';
import { AnimationTodoComponent } from './animation/animation-todo/animation-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './querise/parent/parent.component';
import { ChildComponent } from './querise/child/child.component';
import { PopUpComponent } from './programmatically-rendering-components/pop-up/pop-up.component';
import { BaseComponent } from './programmatically-rendering-components/base/base.component';
import { ComponentHostDirective } from './programmatically-rendering-components/component-host.directive';
import { TestOpupComponent } from './programmatically-rendering-components/test-opup/test-opup.component';
import { FormTestingComponent } from './formTesting/form-testing/form-testing.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { Comp2Component } from './reactive/comp2/comp2.component';
import { SignalTestComponent } from './signal/signal-test/signal-test.component';
import { ConnectionLinesComponent } from './connection-lines/connection-lines.component';
import { ConnectingBlockComponent } from './connecting-block/connecting-block.component';
import { FirstQuearyComponent } from './angular-query/first-queary/first-queary.component';
import { QueryClient, provideAngularQuery } from '@tanstack/angular-query-experimental';
import { ApiStateHandleComponent } from './angular-query/api-state-handle/api-state-handle.component';
import { StateTestComponent } from './angular-query/state-test/state-test.component';
import { InputBindingInAngularRouterComponent } from './input-binding-in-angular-router/input-binding-in-angular-router.component';
import { provideRouter } from '@angular/router';
import { PopupComponent } from './popup/popup/popup.component';
import { PopupTestingComponent } from './popup/popup-testing/popup-testing.component';
import { TemplateRegistrationComponent } from './popup/template-registration/template-registration.component';
import { ColumnSearchComponent } from './column-search/column-search.component';
import { DynamicCalculatorComponent } from './dynamic-calculator/dynamic-calculator.component';
import { ContentEditableModelDirective } from './dynamic-calculator/content-editable-model.directive';

@NgModule({
  declarations: [
    AppComponent,
    DcApiTestComponent,
    DropDownComponent,
    ContextMenuDirective,
    DirectiveComineDirective,
    DiFirstComponent,
    LoggerTestingComponent,
    LoggerTesting2Component,
    SuperCenteredComponent,
    CustomDirectiveComponent,
    HideAfterDirective,
    CssBestPracticeComponent,
    DynamicItemComponent,
    StaticItemComponent,
    NotPseudoClassComponent,
    AnimationTestComponent,
    AnimationTodoComponent,
    ParentComponent,
    ChildComponent,
    PopUpComponent,
    BaseComponent,
    ComponentHostDirective,
    TestOpupComponent,
    FormTestingComponent,
    ReactiveComponent,
    Comp2Component,
    SignalTestComponent,
    ConnectionLinesComponent,
    ConnectingBlockComponent,
    FirstQuearyComponent,
    ApiStateHandleComponent,
    StateTestComponent,
    InputBindingInAngularRouterComponent,
    PopupComponent,
    PopupTestingComponent,
    TemplateRegistrationComponent,
    ColumnSearchComponent,
    DynamicCalculatorComponent,
    ContentEditableModelDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAngularQuery(new QueryClient())
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
