import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // import this to use Reactive Forms in your project

import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './input/input.component';

// in case you use ngx-mask library https://www.npmjs.com/package/ngx-mask
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
} from 'ngx-mask';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, CardFormComponent, InputComponent, CardComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe], // add ReactiveFormsModule in imports and some mask library stuff
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
