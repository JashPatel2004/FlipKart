import { Component } from '@angular/core';
import { AddressCardComponent } from "../../../share/components/address-card/address-card.component";
import { CommonModule } from '@angular/common';
import { CartItemComponent } from "../../../share/components/cart-item/cart-item.component";
import {MatDividerModule} from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../../State/Order/order.service';
import { OrderCardComponent } from '../order/order-card/order-card.component';
import { PaymentCardComponent } from '../../../share/components/payment-card/payment-card.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../../../models/AppState';
import { getCart } from '../../../../State/Cart/cart.selector';
import { PaymentService } from '../../../../State/Payment/payment.service';
import { log } from 'console';
import { getOrderByIdSuccess } from '../../../../State/Order/order.action';
import { OrderState } from '../../../../State/Order/order.reducer';
import { CartService } from '../../../../State/Cart/cart.service';
import { getCartRequest } from '../../../../State/Cart/cart.action';


@Component({
    selector: 'app-payment',
    standalone: true,
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.scss',
    imports: [
        AddressCardComponent,
        CommonModule,
        CartItemComponent,
        MatDividerModule,
        OrderCardComponent,
        PaymentCardComponent,
        StoreModule
    ]
})
export class PaymentComponent {
products:any
totalPrice = 0
totalDiscountedPrice = 0
discount = 0
order:any
orderId:any

constructor(
    private activatedRoute : ActivatedRoute,
    private orderService : OrderService,
    private store:Store<OrderState>,
    private paymentService:PaymentService,
    private route:ActivatedRoute,
    private cartService:CartService
){}

redirectToPayment=()=>{
     if(this.orderId){
        console.log("id",this.products.id);
        
        this.paymentService.createPayment(this.products.id)
     }
}


ngOnInit(){
this.route.queryParams.subscribe(params=>{
    this.orderId=params['order_id']
})

if(this.orderId){
    this.orderService.getOrderById(this.orderId)

    this.store.select('order').subscribe((res)=>{
        console.log("order" , res.order)
        this.products = res.order
    })
}



// this.store.dispatch(getCartRequest())
//     this.cartService.addItemToCart(this.products)
// this.store.select(getCart).subscribe((cart) => {

//     this.orderService.getOrderById(this.orderId).subscribe(data=>{
//         this.order=data
//         console.log("order",this.order);
//     })
//     console.log("cart",cart);
    
//     this.products = cart.cartItems
//     this.totalPrice = cart.totalPrice
//     this.totalDiscountedPrice = cart.totalDiscountedPrice
//     this.discount = cart.discount
//   })
//         // this.totalPrice=data.orders.totalPrice,
//         // this.discount=data.discount,
//         // this.totalDiscountedPrice=data.totalDiscountedPrice

//     let id = this.activatedRoute.snapshot.paramMap.get("id")
//     console.log("id" , id);
//     if(id){
//         this.orderService.getOrderById(id).subscribe((response)=>{
//              console.log("response",response);
//             this.products = response
//         });
//     }   

   
        
    }
}


