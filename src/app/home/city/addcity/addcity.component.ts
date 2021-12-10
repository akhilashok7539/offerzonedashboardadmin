import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'src/app/_models/city';
import { Router } from '@angular/router';
import { CityService } from '../city.service';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {
  cityform:FormGroup
  public citymodel:City;
  constructor(private formBuilder: FormBuilder,
    private router:Router,private cityservice:CityService)
   {
    this.citymodel = new City();

    }

  ngOnInit() {
    this.cityform = this.formBuilder.group({
      cityname:['',Validators.required],
    });
  }
  addCity(){
    let req ={
      "cityName":this.citymodel.cityname
    }
    this.cityservice.addcity(req).subscribe(
      data =>this.handlersucces(data),
      error=>this.handlererror(error)
    )
  }
  handlersucces(data){
    alert('succes');
    this.router.navigate(['/city']);
  }
  handlererror(error){
    alert('error')
  }
}
