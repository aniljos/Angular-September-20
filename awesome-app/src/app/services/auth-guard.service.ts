import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../store/reducers';

//providedIn: 'root' ==> this automatically configues the services in the root module(App Module)
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private isAuth: boolean = false;
  constructor(private router: Router, private store: Store<{auth: AuthState}>) {

      this.store.select(state => state.auth.isAuthenticated).subscribe((value) => {
        this.isAuth = value;
      });

   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

   // const isAuth = sessionStorage.getItem("isAuthenticated");

    if(!this.isAuth){

      this.router.navigate(["/login"])
    }
    //return this.isAuth  ? true : false;
    return this.isAuth;
    
  }
}
