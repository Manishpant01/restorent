export var error_messages = {
    'f_name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Enter Valid Name.' },
      { type: 'pattern', message: 'Enter Valid Name.' },
    ],

    'l_name': [
      { type: 'required', message: 'Last Name is required.' },
      { type: 'pattern', message: 'Enter Valid Name.' },
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'email', message: 'please enter a valid email address.' }
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length Should be greater than 8 character.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'checkPasswords': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length Should be greater than 8 character.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'mustMatch', message: 'Password and Confirm Password must be match.' }
    ],
    'username':[
      { type: 'required', message: 'Username is required.' },
    ],
   'PhoneNo':[
    { type: 'required', message: 'Phone Number is required.' },
   ],
   'numbofguests':[
    { type: 'required', message: 'Number of Guests is required.' },
   ],
   'time':[
    { type: 'required', message: 'Time is required.' },
   ],
   'date':[
    { type: 'required', message: 'Date is required.' },
   ],
   'food_name':[
    { type: 'required', message: 'Food name is required.' },
   ],
   'cost':[
    { type: 'required', message: 'cost is required.' },
   ],
   'Img':[
    { type: 'required', message: 'Image is required.' },
   ]
}