import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CityService } from '../city/city.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  shops: any;
  mobilenumber: any;
  fileUrl = "https://shopestoresapi.herokuapp.com/offerzone/api/v1/shopedealer/file/getFile/"
  constructor(private router:Router,private cityservice:CityService) { }

  ngOnInit() {
    this.getallshops();
  }
  getallshops(){
    this.cityservice.getallShopes().subscribe(
      data => this.handlersucess(data),
      error => this.handlererror(error)
    )
  }
  handlersucess(data){
    this.shops = data['responce'];
  }
  handlererror(error){
    this.shops = 'No shops found';
  }
  addshop(){
    this.router.navigate(['/add-shop']);
  }
  inActivateshop(shop){
    this.mobilenumber = shop.phoneNumber;
    console.log(this.mobilenumber)
    let req = {
      "isActive":false
    }
    this.cityservice.inactivateshop(req,this.mobilenumber).subscribe(
      data => this.handlersucces3(data),
      error => this.handlererror3(error)
    )
  }
  handlersucces3(data){
    this.getallshops();
  }
  handlererror3(error){

  }
  activateshop(shop){
    this.mobilenumber = shop.phoneNumber;
    console.log(this.mobilenumber)
    let req = {
      "isActive":true
    }
    this.cityservice.activeshop(req,this.mobilenumber).subscribe(
      data => this.handlersucces3(data),
      error => this.handlererror3(error)
    )
  }
  edit(e)
  {
    sessionStorage.setItem("shops",JSON.stringify(e))
    this.router.navigate(['/edit-shop'])
  }
  propic(e)
  {
    sessionStorage.setItem("shops",JSON.stringify(e))
    this.router.navigate(['/edit-pro-pic'])
  }
  
}

