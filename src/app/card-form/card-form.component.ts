import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // import this to use Reactive Forms in your project
//  Form Group means form group is a collection of form controls
// Form Group object = tells Anguar about the form we are creating, like the overall forma and some rules around it (e.g. allow the form to be submitted or deny submission or some validation at the form level and so on)
// Form Control object = tells Angular about one of those individual fields in the form we are creating
//  form fields - the fields of a form
// Validators - a class with different functions that allows us to validate a form in a very specific way
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent {
  // add property and initialize form group - represents our overall form
  // add object containing key value pairs representing our form controls (fields)
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.maxLength(5),
      // Validators.pattern(/\s/),
    ]),
    // initialize the form control with an empty string (we can also set a default here instead an empty string if we wanted - then that string would be displayed in the name field of the form) // set validators to the form control - [Validators.required] built-in validator means the form control field cannot be empty (name field in this case) // check Angular docu for more Validators
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  constructor() {
    console.log(this.cardForm.controls.name);
  }

  onSubmit() {
    console.log('Form was submitted');
  }

  onResetClick() {
    //  use reset() method from class FormGroup to reaet the form (all fields will be empty/null or with the default values)
    this.cardForm.reset();
  }
}
