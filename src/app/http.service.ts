import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  baseUrl:string ="http://localhost:8080/api/v1/user"

  

  getProductDetails(){
    return (this.http.get(`${this.baseUrl}/getAll`));
  }


}
