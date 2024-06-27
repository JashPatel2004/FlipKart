import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,SigninComponent,SignupComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isLoggedIn=true;
  @Output() loginSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  handleLogin() {
    // Assuming your login logic is here...
    // If login is successful, emit the loginSuccess event to indicate successful login
    const loginSuccessful = true; // Replace this with your actual login logic
    if (loginSuccessful) {
      this.loginSuccess.emit();
    }
  }

  changeTemplate=()=>{
    this.isLoggedIn=!this.isLoggedIn;
  }

}
