import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public message: string = "";

  constructor(private http: HttpClient, 
                  private router: Router, private store: Store) { }

  ngOnInit(): void {
  }

  login() {
    var url = environment.loginUrl;
    this.http
      .post<any>(url, { name: this.username, password: this.password })
      .subscribe((data) => {
        this.message = "";
        
        //sessionStorage.setItem("isAuthenticated", "true");
        this.store.dispatch({type: "SET_AUTH", payload: {
          isAuthenticated: true,
          userName: this.username,
          accessToken: data.accessToken
        }});

        this.router.navigate(["/products"]);


      }, () => {

        this.message = "Invalid Credentials";
        //sessionStorage.setItem("isAuthenticated", "false");
        this.store.dispatch({type: "SET_AUTH", payload: {
          isAuthenticated: false,
          userName: "",
          accessToken:""
        }});
      })
  }

}
