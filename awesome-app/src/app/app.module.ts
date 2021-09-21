import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent
  ],
  imports: [
    BrowserModule, FormsModule, ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }