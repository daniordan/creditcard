import { FormControl } from '@angular/forms';

// This code snippet is a TypeScript class that extends the FormControl class from the @angular/forms library. It overrides the setValue method of the parent class to add some additional logic.

// The setValue method is called when the value of the form control is updated. In this code, there are several conditions that are checked before setting the value:

// If the value contains any characters other than numbers or slashes, the value is not updated.
// If the value is longer than 5 characters, the value is not updated.
// If the new value is 2 characters long and the current value is 3 characters long, the value is updated.
// If the new value is 2 characters long, a slash is appended to the value before updating it.
// Otherwise, the value is updated as is.
// The super.setValue calls the setValue method of the parent class, passing in the modified value and some additional options.

// Overall, this code snippet provides custom behavior for setting the value of a form control, based on specific conditions.

// Sure! Let's go through the code snippet line by line:
// import { FormControl } from '@angular/forms';
// This line imports the FormControl class from the @angular/forms library. The FormControl class is a part of the Angular Forms module and is used to represent a form control element in a reactive form.

// export class DateFormControl extends FormControl {
// This line defines a new class called DateFormControl that extends the FormControl class. By extending the FormControl class, the DateFormControl class inherits all the properties and methods of the FormControl class.

// override setValue(value: string, options: any) {
// This line overrides the setValue method of the parent class. The setValue method is a built-in method of the FormControl class that is used to set the value of a form control. The override keyword is used to indicate that the method is being overridden.

// if (value.match(/[^0-9|\/]/gi)) {
// This line checks if the value parameter contains any characters other than numbers (0-9) or slashes (/). The match method is used with a regular expression to perform the check.

// super.setValue(this.value, {
//   ...options,
//   emitModelToViewChange: true,
// });
// return;
// If the value parameter contains invalid characters, this block of code is executed. It calls the setValue method of the parent class (FormControl) with the current value (this.value) and some additional options. The return statement exits the method.

// if (value.length > 5) {
// This line checks if the length of the value parameter is greater than 5 characters.

// super.setValue(this.value, {
//   ...options,
//   emitModelToViewChange: true,
// });
// return;
// If the value parameter is longer than 5 characters, this block of code is executed. It calls the setValue method of the parent class (FormControl) with the current value (this.value) and some additional options. The return statement exits the method.

// if (value.length === 2 && this.value.length === 3) {
// This line checks if the length of the value parameter is exactly 2 characters and the length of the current value (this.value) is 3 characters.

// super.setValue(value, {
//   ...options,
//   emitModelToViewChange: true,
// });
// return;
// If the conditions in the previous line are met, this block of code is executed. It calls the setValue method of the parent class (FormControl) with the new value (value) and some additional options. The return statement exits the method.

// if (value.length === 2) {
//   super.setValue(value + '/', {
//     ...options,
//     emitModelToViewChange: true,
//   });
//   return;
// }
// This line checks if the length of the value parameter is exactly 2 characters.

// If the condition is met, this block of code is executed. It calls the setValue method of the parent class (FormControl) with the new value (value + '/', where + '/' appends a slash to the value) and some additional options. The return statement exits the method.

// super.setValue(value, { ...options, emitModelToViewChange: true });
// If none of the previous conditions are met, this line is executed. It calls the setValue method of the parent class (FormControl) with the new value (value) and some additional options.
// That's a detailed explanation of each line of code in the snippet.

export class DateFormControl extends FormControl {
  // Hijacking Form Control Values
  override setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value !== null && value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value !== null && value.length > 5) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value !== null && value.length === 2 && this.value.length === 3) {
      super.setValue(value, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value !== null && value.length === 2) {
      // The super keyword in TypeScript is used to call the constructor or methods of the parent class. It is typically used within a derived class to access and invoke the members of the base class.
      // After overriding the parent function, you need to call it in order to have the existing functionality of the parent class and on top of it  your changes on the value
      super.setValue(value + '/', {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
