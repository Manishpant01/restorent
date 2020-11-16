import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { OurMenuComponent } from './our-menu/our-menu.component'
import {LoginComponent} from "./login/login.component"
import {SignUpComponent} from './sign-up/sign-up.component'
import {TableReservationComponent} from './table-reservation/table-reservation.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'menuItem',
    component: OurMenuComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'tableReserve',
    component:TableReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
