import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductModule } from './product/product.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, SearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ProductModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
