import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AddressCardComponent } from "../../../../share/components/address-card/address-card.component";
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { OrderService } from '../../../../../State/Order/order.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../models/AppState';


@Component({
  selector: 'app-address-form',
  standalone: true,
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
  imports: [
    CommonModule,
    MatButtonModule,
    AddressCardComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,]
})
export class AddressFormComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private store: Store<AppState>,
  ) {
  }
  ngOnInit(): void {
    this.store.select('user').subscribe(user => {
      this.addresses = user.addresses
    })
  }


  addresses!: any[]




  myForm: FormGroup = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    streetAddress: ["", Validators.required],
    city: ["", Validators.required],
    state: ["", Validators.required],
    zipCode: ["", Validators.required],
    mobile: ["", Validators.required],
  })

  handleSubmit() {
    if (this.myForm.valid) {
      const formValues = this.myForm.value
      this.orderService.createOrder(formValues)
    }
    else {
      alert('Please fill all details.')
    }
  }

  createOrder(data: any) {
    this.myForm.setValue({
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      streetAddress: data.streetAddress || "",
      city: data.city || "",
      state: data.state || "",
      zipCode: data.zipCode || "",
      mobile: data.mobile || ""
    });
  }



}