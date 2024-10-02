import { Route, Routes } from "@angular/router";
import { Component1 } from "./component-1";


export const paths:Routes=[
    {
        path:"component-1",
        // loadComponent: () => import('./component-1').then( m => m.Component1)
        component:Component1
    },
    {
        path:"component-2",
        loadComponent: () => import('./component-2').then( m => m.Component2)
    },
    {
        path:"component-new",
         loadComponent: () => import('./new-test-comp/new-test-comp.component').then( m => m.NewTestCompComponent)
    }
]