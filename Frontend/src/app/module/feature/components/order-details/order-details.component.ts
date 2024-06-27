import { Component, Input } from '@angular/core';
import { AddressCardComponent } from "../../../share/components/address-card/address-card.component";
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from "../order/order-card/order-card.component";
import { OrderTrackerComponent } from "../../../share/components/order-tracker/order-tracker.component";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { OrderState } from '../../../../State/Order/order.reducer';
import { OrderService } from '../../../../State/Order/order.service';
import { log } from 'console';

@Component({
    selector: 'app-order-details',
    standalone: true,
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.scss',
    imports: [AddressCardComponent, CommonModule, OrderCardComponent, OrderTrackerComponent]
})
export class OrderDetailsComponent {
    
    orders:any[] = [];
    orderItems:any[] = [];
    address:any
    activeStep!:number

    steps=[
        {id:0 , title:"PLACED" , isCompleted:true},
        {id:1 , title:"CONFIREMD" , isCompleted:true},
        {id:2 , title:"SHIPPED" , isCompleted:true},
        {id:3 , title:"DELIVERED" , isCompleted:false},
    ]

    constructor(private activatedRoute : ActivatedRoute,
        private orderService:OrderService,
        private store:Store<OrderState>){}


    ngOnInit(){
        let id = this.activatedRoute.snapshot.paramMap.get("id")
        // console.log("id" , id);
        if(id){
            this.orderService.getOrderById(id)
        }
    
    
        this.store.select('order').subscribe((res)=>{
            this.orders = res.order
            this.orderItems = res.order.orderItems
            console.log("items" , this.orderItems);
            
            this.address = res.order.shippingAddress
            
        //    this.activeStep = res.order.orderStatus
        this.steps.map((step)=>{
            if(step.title===res.order.orderStatus){
                this.activeStep = step.id
            }
        })
        })
    }

}
