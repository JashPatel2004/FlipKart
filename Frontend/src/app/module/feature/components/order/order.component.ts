import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrderCardComponent } from "./order-card/order-card.component";
import { Router } from '@angular/router';
import { OrderService } from '../../../../State/Order/order.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../models/AppState';
import { log } from 'console';
import { getOrderHistorySuccess } from '../../../../State/Order/order.action';
import { OrderState } from '../../../../State/Order/order.reducer';

@Component({
    selector: 'app-order',
    standalone: true,
    templateUrl: './order.component.html',
    styleUrl: './order.component.scss',
    imports: [CommonModule, MatCheckboxModule, OrderCardComponent]
})
export class OrderComponent implements OnInit{
orderFilter=[
  {value:"on_the_way" , label:"On The Way"},
  {value:"delivered" , label:"Delivered"},
  {value:"cancelled" , label:"Cancelled"},
  {value:"returned" , label:"Returned"},
]
orders : any[] = []


  constructor(private router:Router,private orderService:OrderService,private store:Store<AppState>){

  }

  ngOnInit():void{
 this.orderService.getOrderHistory()   
this.store.select('order').subscribe(data=>{
  console.log("datasss",data.orders);  
  this.orders=data.orders
  this.orders = this.orders.slice().reverse()
})
}

  navigateToOrderDetails=(id:number)=>{
    this.router.navigate(["order/"+id])
  }


}
