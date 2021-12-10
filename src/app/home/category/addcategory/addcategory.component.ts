import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/_models/category';
import { CityService } from '../../city/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  categoryForm:FormGroup;
  public categoryModel:Category;
  constructor(private formBuilder: FormBuilder,
    private router:Router,private cityservice:CityService)
   {
    this.categoryModel = new Category();

    }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      categoryName:['',Validators.required],
    });
  }
  addcategory(){
    let req ={
      "categoryName":this.categoryModel.categoryName
    }
    this.cityservice.addcategory(req).subscribe(
      data =>this.handlersucces(data),
      error=>this.handlererror(error)
    )
  }
  handlersucces(data){
    alert('succes');
    this.router.navigate(['/category'])
  }
  handlererror(error){
    alert('error')
  }
}
