import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Registrer } from '../model/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private service: HttpService, private rout: Router) {}


  regiserData: Registrer = <Registrer>{};


  registerUser(){
    this.service.registerUser(this.regiserData).subscribe((res:any)=>{
      console.log("register response ==>" + res)
      if(res=="User registered successfully!"){
        this.rout.navigate(["/login"])
        alert("Registration completed successfuly!")
      }
    })
  }
}
