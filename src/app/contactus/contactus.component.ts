import { Component, OnInit } from '@angular/core';
import { error_messages } from '../error_message';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  error_message = error_messages;
  reservation: FormGroup;
  unamePattern = "^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$";
  constructor(private fb:FormBuilder) {
    {
      this.reservation = this.fb.group({
        f_name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(this.unamePattern)
        ])),
        l_name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(this.unamePattern)
        ])),
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

}
