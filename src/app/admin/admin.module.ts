import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AddFoodItemsComponent } from './add-food-items/add-food-items.component';
import { GetReservationsComponent } from './get-reservations/get-reservations.component';
import { GetCustomersComponent } from './get-customers/get-customers.component';


@NgModule({
  declarations: [LoginComponent, DashboardComponent, AddFoodItemsComponent, GetReservationsComponent, GetCustomersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdminModule { }
