import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../../city/city.service';

@Component({
  selector: 'app-edit-pro-pic',
  templateUrl: './edit-pro-pic.component.html',
  styleUrls: ['./edit-pro-pic.component.css']
})
export class EditProPicComponent implements OnInit {
  files;
  formData = new FormData();
  currentFoto;
  shopdetails:any = [];
  constructor(private cityservice:CityService,
    private router:Router ){ }

  ngOnInit() {
    this.shopdetails = JSON.parse(sessionStorage.getItem("shops"))

  }
  changepropic(event)
  {
    this.files = event.target.files;
    this.currentFoto = this.files.item(0);
  }
  submit()
  {
    this.formData.append("file",this.currentFoto);
    this.cityservice.updateshoppic(this.formData,this.shopdetails['_id']).subscribe(
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
