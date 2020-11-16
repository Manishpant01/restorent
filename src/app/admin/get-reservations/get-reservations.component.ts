import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NewRestaurantService} from '../../new-restaurant.service'

@Component({
  selector: 'app-get-reservations',
  templateUrl: './get-reservations.component.html',
  styleUrls: ['./get-reservations.component.css']
})
export class GetReservationsComponent implements OnInit {
  data :any =[]
  constructor(private service :NewRestaurantService) { }

  ngOnInit(): void {
    this.service.getreservation().subscribe((response=>{
      this.data = response
    }))
  }

}
