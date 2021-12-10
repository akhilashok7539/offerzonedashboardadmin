import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl:string;
  constructor(private httpClient:HttpClient) { 
    this.apiUrl = environment.apiUrl;
    console.log(this.apiUrl)
  }
  userlogin(req){
    return this.httpClient.post(this.apiUrl+'/admin/login',req);
  }
}
