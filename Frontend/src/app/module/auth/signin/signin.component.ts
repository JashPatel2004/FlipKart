import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../State/Auth/auth.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [MatFormFieldModule,CommonModule,MatInputModule,ReactiveFormsModule,MatButtonModule,HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  @Input() changeTemplate:any

  constructor(private formBuilder:FormBuilder,private store:Store,private authService:AuthService,private http:HttpClient){}

  loginForm : FormGroup =this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })

  submitForm():void{
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value,this.http)
      console.log(this.loginForm.value)
    }
  }
}
