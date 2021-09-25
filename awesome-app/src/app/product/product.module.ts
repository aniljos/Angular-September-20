import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { AppSharedModule } from '../app-shared/app-shared.module';

const routes: Routes = [
  {path: "", component: ListProductsComponent, canActivate: [AuthGuardService]}
]

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductFilterPipe,
    EditProductComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    FormsModule,
    RouterModule.forChild(routes),
    AppSharedModule
  ],
  exports: [ListProductsComponent],
  
})
export class ProductModule { }
