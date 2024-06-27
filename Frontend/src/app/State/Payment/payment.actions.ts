import { createAction, props } from "@ngrx/store";

export const createpaymentRequest=createAction('[Payment] Create Payment Request',props<{orderId:any}>());

export const createpaymentSuccess=createAction('[Payment] Create Payment Success',props<{payload:any}>());

export const createpaymentFailure=createAction('[Payment] Create Payment Failure',props<{payload:any}>());

export const updatepaymentRequest=createAction('[Payment] Update Payment Request',props<{orderId:any}>());

export const updatepaymentSuccess=createAction('[Payment] Update Payment Success',props<{payload:any}>());

export const updatepaymentFailure=createAction('[Payment] Update Payment Failure',props<{payload:any}>());