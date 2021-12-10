import { Component, OnInit } from '@angular/core';
import { CityService } from '../../city/city.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Shop } from 'src/app/_models/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addshops',
  templateUrl: './addshops.component.html',
  styleUrls: ['./addshops.component.css']
})
export class AddshopsComponent implements OnInit {
  citys: any;
  cities: string;
  category: any;
  shopForm:FormGroup;
  public shopModel:Shop;
  constructor(private cityservice:CityService,private formBuilder: FormBuilder,
    private router:Router ) {
      this.shopModel = new Shop();
     }

  ngOnInit() {
    this.shopForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      shopeName:['',Validators.required],
      phoneNumber:['',Validators.required],
      password:['',Validators.required],
      latitude:['',Validators.required],
      longitude:['',Validators.required],
      shopeCategory:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
    });
    this.getallcity();
    this.getallcategorys();
    
  }
  getallcity(){
    this.cityservice.getAllcitys().subscribe(
      data=>this.handlersucccess(data),
      error =>this.handlererror(error)
    )
  }
  handlersucccess(data){
    this.citys = data['responce'];
  }
  handlererror(error){
    this.cities = 'No data found';
  }
  getallcategorys(){
    this.cityservice.getallcategory().subscribe(
      data=>this.handlersucccess1(data),
      error =>this.handlererror1(error)
    )
  }
  handlersucccess1(data){
    this.category = data['responce'];
  }
  handlererror1(error){
    this.category = 'No data found';
  }
  addshops(){
    let req ={
      "firstName":this.shopModel.firstName,
      "lastName":this.shopModel.lastName,
      "shopeName":this.shopModel.shopeName,
      "phoneNumber":this.shopModel.phoneNumber,
      "password":this.shopModel.password,
      "latitude":this.shopModel.latitude,
      "longitude":this.shopModel.longitude,
      "shopeCategory":this.shopModel.shopeCategory,
      "address":this.shopModel.address,
      "city":this.shopModel.city,
    }
    this.cityservice.addshops(req).subscribe(
      data => this.handlersucees2(data),
      error => this.handlererror2(error)
    )
  }
  handlersucees2(data){
    alert('succes');
    this.router.navigate(['/shop']);
  }
  handlererror2(error){
    alert('error');
  }
}
