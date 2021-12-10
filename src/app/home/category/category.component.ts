import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../city/city.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: any;

  constructor(private router:Router,private cityservice:CityService) { }

  ngOnInit() {
    this.getallcategorys();
  }
  getallcategorys(){
    this.cityservice.getallcategory().subscribe(
      data=>this.handlersucccess(data),
      error =>this.handlererror(error)
    )
  }
  handlersucccess(data){
    this.category = data['responce'];
  }
  handlererror(error){
    this.category = 'No data found';
  }
  addcategory(){
    this.router.navigate(['/add-category']);
  }
  delete(s)
  {
    let req = {
      cityName:s.categoryName
    }
    this.cityservice.deletedata("/admin/category/delete/",req,s._id).subscribe(
      data =>{
        this.getallcategorys();

      }
    )
  }
}
