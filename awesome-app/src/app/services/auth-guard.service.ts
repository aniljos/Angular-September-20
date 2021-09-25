import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//providedIn: 'root' ==> this automatically configues the services in the root module(App Module)
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    const isAuth = sessionStorage.getItem("isAuthenticated");

    if(!isAuth || isAuth === "false"){

      this.router.navigate(["/login"])
    }


    return isAuth && isAuth === "true" ? true : false;
    
  }
}
