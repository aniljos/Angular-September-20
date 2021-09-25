import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    var url = environment.loginUrl;
    this.http
      .post(url, { name: this.username, password: this.password })
      .subscribe(() => {
        this.message = "";
        sessionStorage.setItem("isAuthenticated", "true");
        this.router.navigate(["/products"]);
      }, () => {

        this.message = "Invalid Credentials";
        sessionStorage.setItem("isAuthenticated", "false");
      })
  }

}
