import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GadgetsHomeComponent } from './gadgets-home/gadgets-home.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {path: "gadgets", component: GadgetsHomeComponent, children: [
    {path:"products", component: ViewProductsComponent},
    {path:"cart", component: ViewCartComponent},
  ]}
]
@NgModule({
  declarations: [
    GadgetsHomeComponent,
    ViewProductsComponent,
    ViewCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GadgetsModule { }
