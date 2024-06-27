import { Component } from '@angular/core';
import { OrderService } from '../../../../State/Order/order.service';
import { PaymentService } from '../../../../State/Payment/payment.service';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../models/AppState';
import { CommonModule } from '@angular/common';
import { AddressCardComponent } from '../../../share/components/address-card/address-card.component';
import { PaymentState } from '../../../../State/Payment/payment.reducer';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule,AddressCardComponent],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss'
})
export class PaymentSuccessComponent {

  orderId: any
  paymentId: any
  order:any;
  orderItems!:any[] ;
  address:any;
  status:any

  constructor(private orderService: OrderService, private paymentService: PaymentService, private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.orderId = params['order_id']
      this.paymentId = params['razorpay_payment_id']
    })

    console.log("order id" , this.orderId);
    
    // this.orderService.getOrderById(this.orderId)
    this.paymentService.updatePayment({
      orderId: this.orderId,
      paymentId: this.paymentId
    })

    this.store.select('payment').subscribe((res)=>{
      console.log("status",res);
      
      this.order = res.order
      this.orderItems  = res.order.orderItems
      this.address = res.order.shippingAddress
      this.status=res.order.orderStatus
    })
  }

}
