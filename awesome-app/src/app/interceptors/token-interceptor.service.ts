import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthState } from '../store/reducers';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  private auth: AuthState | undefined;
  private url: string = "";
  constructor(private store: Store<{auth: AuthState}>) {

    this.url = environment.productsUrl;
      this.store.select(state => state.auth).subscribe((value) => {
        this.auth = value;
      })

   }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.auth?.isAuthenticated && req.url.startsWith(this.url)){

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.accessToken}`
        }
      });
    }
    return next.handle(req);
  }
}
