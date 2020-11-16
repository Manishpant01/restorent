import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component'
import {AddFoodItemsComponent} from './add-food-items/add-food-items.component'
import {GetReservationsComponent} from './get-reservations/get-reservations.component'
import {GetCustomersComponent} from './get-customers/get-customers.component'

const routes: Routes = [
  {
    path:"admin",
    component:LoginComponent
  },
  {
    path:"adminDashboaed",
    component:DashboardComponent
  },
  {
    path:"addfood",
    component:AddFoodItemsComponent
  },
  {
    path:"getReservation_details",
    component:GetReservationsComponent
  },
  {
    path:"getCustomers_details",
    component:GetCustomersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
