import { OrderState } from "../State/Order/order.reducer";
import { PaymentState } from "../State/Payment/payment.reducer";

export interface AppState{
    user:UserState,
    auth:any,
    product:any,
    cart:any,
    order:OrderState,
    payment:PaymentState
}


export interface UserState{
    userProfile:any,
    loading: boolean,
    error: string,
   addresses:any[]
}