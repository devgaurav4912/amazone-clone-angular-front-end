import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { Registrer } from '../model/Register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private service: HttpService, private rout: Router) {}

  loginData: Login = <Login>{};

  regiserData: Registrer = <Registrer>{};

  loginUser() {
    this.service.loginUser(this.loginData).subscribe((res: any) => {
      console.log("login response ==> "+ res);
      if (res === "Login successful") {
        this.rout.navigate(["/"]);
      } else if (res === "Invalid credentials" || res === "User not found") {
        alert("Please enter valid credentials.");
      } else {
        alert("An unexpected error occurred.");
      }
    });
  }


  registerUser(){
    this.rout.navigate(["/register"])
  }
}
