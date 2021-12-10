import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl:string;
  constructor(private httpClient:HttpClient) { 
    this.apiUrl = environment.apiUrl;
    console.log(this.apiUrl)
  }
  addcity(req){
    return this.httpClient.post(this.apiUrl+'/admin/city/add',req);
  }
  getAllcitys(){
    return this.httpClient.get(this.apiUrl+'/admin/citys/view');
  }
  addcategory(req){
    return this.httpClient.post(this.apiUrl+'/admin/category/add',req);
  }
  getallcategory(){
    return this.httpClient.get(this.apiUrl+'/admin/category/view');
  }
  addshops(req){
    return this.httpClient.post(this.apiUrl+'/shopedealer/signup',req);
  }
  getallShopes(){
    return this.httpClient.get(this.apiUrl+'/admin/shopes/view');
  }
  inactivateshop(req,mobilenumber){
    return this.httpClient.put(this.apiUrl+'/admin/changeStatus/'+mobilenumber,req);
  }
  activeshop(req,mobilenumber){
    return this.httpClient.put(this.apiUrl+'/admin/changeStatus/'+mobilenumber,req);
  }
  updateshops(req,id)
  {
    return this.httpClient.put(this.apiUrl+'/shopedealer/shop/edit/'+id,req)
  }
  updateshoppic(req,id)
  {
    return this.httpClient.post(this.apiUrl+'/shopedealer/shope/profile/upload/'+id,req);
  }
  deletedata(url,req,id)
  {
    return this.httpClient.delete(this.apiUrl+url+id,req);
  }
}
