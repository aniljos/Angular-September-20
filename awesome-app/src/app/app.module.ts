import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AppSharedModule } from './app-shared/app-shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { authReducer, cartReducer } from './store/reducers';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { ChangeDetectionComponent, SimpleMessageComponent } from './change-detection/change-detection.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback/feedback.component';


import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';



//configure the routes(mapping of the routes(path) to the views(components))

const routes: Routes = [

  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "search", component: SearchComponent},
  {path: "change", component: ChangeDetectionComponent},
  {path: "feedback", component: FeedbackComponent},
  {path: "products", loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: RouteNotFoundComponent},
  
]

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, SearchComponent, 
        RouteNotFoundComponent, ChangeDetectionComponent, SimpleMessageComponent, FeedbackComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
   // ProductModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    GadgetsModule,
    AuthModule,
    AppSharedModule,
    StoreModule.forRoot({auth: authReducer, cart: cartReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatSliderModule, MatInputModule, MatIconModule, MatFormFieldModule, MatDatepickerModule
  ],
  providers: [
      {provide: DataService, useClass: DataServiceImpl},
      {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
      
      
  bootstrap: [AppComponent]
})
export class AppModule { }
