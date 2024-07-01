import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  baseUrl:string ="http://localhost:8080/api/v1/user"

  baseUrl2:string ="http://localhost:8080/api/auth"


  getProductDetails(){
    return (this.http.get(`${this.baseUrl}/getAll`));
  }

  getProductById(id:any){
    return (this.http.get(`${this.baseUrl}/${id}`));
  }


  registerUser(registerUserObj : any){
return (this.http.post(`${this.baseUrl2}/register`,registerUserObj,{responseType:'text'}));
  }

  loginUser(loginUserObj : any){
    return (this.http.post(`${this.baseUrl2}/login`,loginUserObj,{responseType:'text'}));
      }


}
