import { Component, OnInit } from '@angular/core';
import { error_messages } from '../../error_message'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import {NewRestaurantService} from '../../new-restaurant.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-food-items',
  templateUrl: './add-food-items.component.html',
  styleUrls: ['./add-food-items.component.css']
})
export class AddFoodItemsComponent implements OnInit {
  registerForm: FormGroup;
  error_message = error_messages;
  images;
  multipleImages = [];
  constructor(private fb: FormBuilder,private service : NewRestaurantService) { 
   
  }
  foodadd = this.fb.group({
   food_name:['',[Validators.required]],
    cost:['',[Validators.required]],
  })
   
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log(this.images); 
    }
  }
  
  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);
    this.service.foodadd(formData,this.foodadd.value).subscribe((response)=>{
      console.log(response);
    })
  }

  data(){
    console.log(this.foodadd.getRawValue());
  }

  ngOnInit(): void {
  }

}
