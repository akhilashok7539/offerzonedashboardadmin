import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from './city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  citys: any;
  cities: string;

  constructor(private router:Router,private cityservice:CityService) { }

  ngOnInit() {
    this.getallcity();
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
  addcity(){
    this.router.navigate(['/add-city']);
  }
  delete(s)
  {
    let req = {
      cityName:s.cityName
    }
    this.cityservice.deletedata("/admin/citys/delete/",req,s._id).subscribe(
      data =>{
        this.getallcity();

      }
    )
  }
}
