import { Component, OnInit } from '@angular/core';
import { CityService } from '../../city/city.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Shop } from 'src/app/_models/shop';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-shops',
  templateUrl: './edit-shops.component.html',
  styleUrls: ['./edit-shops.component.css']
})
export class EditShopsComponent implements OnInit {
  citys: any;
  cities: string;
  category: any;
  shopForm:FormGroup;
  public shopModel:Shop;
  shopdetails:any=[];
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
      password:[''],
      latitude:['',Validators.required],
      longitude:['',Validators.required],
      shopeCategory:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
    });
    this.getallcity();
    this.getallcategorys();
    this.shopdetails = JSON.parse(sessionStorage.getItem("shops"))
    this.shopForm.controls['firstName'].setValue(this.shopdetails['firstName'])
    this.shopForm.controls['lastName'].setValue(this.shopdetails['lastName'])
    this.shopForm.controls['shopeName'].setValue(this.shopdetails['shopeName'])
    this.shopForm.controls['phoneNumber'].setValue(this.shopdetails['phoneNumber'])
    this.shopForm.controls['latitude'].setValue(this.shopdetails['latitude'])
    this.shopForm.controls['longitude'].setValue(this.shopdetails['longitude'])
    this.shopForm.controls['shopeCategory'].setValue(this.shopdetails['shopeCategory'])
    this.shopForm.controls['address'].setValue(this.shopdetails['address'])
    this.shopForm.controls['city'].setValue(this.shopdetails['city'])

    console.log(this.shopForm.value);
    
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
    if(this.shopForm.value['password'] === "")
    {
      delete this.shopForm.value['password']
      this.cityservice.updateshops(this.shopForm.value,this.shopdetails['_id']).subscribe(
        data => this.handlersucees2(data),
        error => this.handlererror2(error)
      )
    }
    else{
      this.cityservice.updateshops(this.shopForm.value,this.shopdetails['_id']).subscribe(
        data => this.handlersucees2(data),
        error => this.handlererror2(error)
      )
    }
   
  }
  handlersucees2(data){
    alert('succes');
    this.router.navigate(['/shop']);
  }
  handlererror2(error){
    alert('error');
  }
}