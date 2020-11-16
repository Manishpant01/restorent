import { Component, OnInit } from '@angular/core';
import { error_messages } from '../error_message';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import {NewRestaurantService} from '../new-restaurant.service'
import { from } from 'rxjs';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-reservation',
  templateUrl: './table-reservation.component.html',
  styleUrls: ['./table-reservation.component.css']
})
export class TableReservationComponent implements OnInit {
  error_message = error_messages;
  reservation: FormGroup;
  unamePattern = "^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$";

  constructor(private fb:FormBuilder,private service : NewRestaurantService,private router :Router) {
    {
      this.reservation = this.fb.group({
        email: new FormControl('', Validators.compose([
          Validators.email,
          Validators.required
        ])),
        numbofguests: new FormControl('',Validators.compose([
          Validators.required
        ])),
        PhoneNo: new FormControl ('',Validators.compose([
          Validators.required,
          Validators.maxLength(10)
        ])),
        time : new FormControl('',Validators.compose([
          Validators.required
        ])),
        date: new FormControl('',Validators.compose([
          Validators.required
        ]))
      });
    }
   }

  ngOnInit(): void {
  }
 
  book(){
    this.service.book(this.reservation.value).subscribe((response=>{
      console.log(response);
      if(response){
        Swal.fire({
          text: 'Reservation Successful',
          icon: 'success',
        })
        this.router.navigate(['/'])
      }else{
        Swal.fire({
          text: 'Error',
          icon: 'error',
        })
      }
    }))
  }

}
