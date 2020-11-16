import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormControl,FormGroup} from '@angular/forms'
import { from } from 'rxjs';
import {error_messages} from '../../error_message'
import {NewRestaurantService} from '../../new-restaurant.service'
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  error_message = error_messages;
  hide = true;
  constructor(private fb :FormBuilder,private service :NewRestaurantService,private router :Router) {
    {
      this.loginForm = this.fb.group({
        email: new FormControl('',Validators.compose([
          Validators.email,
          Validators.required,
        ])),
        password:new FormControl('',Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ]))
      })
    }
   }

  ngOnInit(): void {
  }

 login(){
    console.log(this.loginForm.getRawValue())
    this.service.adminlogin(this.loginForm.value).subscribe((response=>{
      console.log(response);
      if(response){
        Swal.fire({
          text: 'Login Successfull',
          icon: 'success',
        })
        this.router.navigate(['/adminDashboaed'])
      }else{
        console.log("hello");
        
        Swal.fire({
          text: 'Error',
          icon: 'error',
        })
      }
    }))
  }

}
