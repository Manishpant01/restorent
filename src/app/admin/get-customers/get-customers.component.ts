import { Component, OnInit } from '@angular/core';
import {NewRestaurantService} from '../../new-restaurant.service'

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {
  data:any=[]
  constructor(private service:NewRestaurantService) { }

  ngOnInit(): void {
   this.service.getcoustomer().subscribe((response=>{
     this.data = response
   }))
  }

}
