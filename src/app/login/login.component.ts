import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../_models/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginmodel:Login;
  constructor(private router:Router,private loginserveice:LoginService, private formBuilder: FormBuilder) {
    this.loginmodel = new Login();
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phoneNumber:['',Validators.required],
      password:['',Validators.required],
      
    });
    console.log(window.innerHeight);
    
  }
  login(){
    let req = {
      "phoneNumber":this.loginmodel.phoneNumber,
      "password":this.loginmodel.password
    }
    this.loginserveice.userlogin(this.loginForm.value).subscribe(
      data => this.handlersuccess(data),
      error => this.handlererror(error)
    )
   
  }
  handlersuccess(data){
    localStorage.setItem('admin',JSON.stringify(data));
    this.router.navigate(['/Home']);
  }
  handlererror(error){

  }
}
