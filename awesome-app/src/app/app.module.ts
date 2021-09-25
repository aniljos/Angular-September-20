import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { HelloComponent } from './hello/hello.component';
//import { ProductModule } from './product/product.module';
import { SearchComponent } from './search/search.component';
import {Routes, RouterModule} from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { GadgetsModule } from './gadgets/gadgets.module';
import { DataService } from './services/DataService';
import { DataServiceImpl } from './services/DataServiceImpl';
import { AuthModule } from './auth/auth.module';

//configure the routes(mapping of the routes(path) to the views(components))

const routes: Routes = [

  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "search", component: SearchComponent},
  {path: "products", loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: RouteNotFoundComponent},
  
]

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, SearchComponent, RouteNotFoundComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
   // ProductModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    GadgetsModule,
    AuthModule
  ],
  providers: [{provide: DataService, useClass: DataServiceImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
