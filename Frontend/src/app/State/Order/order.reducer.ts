import { createReducer, on, Action } from '@ngrx/store';
import * as OrderActions from './order.action';

export interface OrderState {
    loading: boolean;
    error: string | null;
    order: any | null;
    orders: any[];
}

const initialState: OrderState = {
    loading: false,
    error: null,
    order: null,
    orders: [],
};

export const orderReducer = createReducer(
    initialState,
    on(OrderActions.createOrderRequest,
        OrderActions.getOrderByIdRequest,
        OrderActions.getOrderHistoryRequest,
        (state) => ({
            ...state,
            loading: true,
            error: null,
        })),

    on(OrderActions.createOrderSuccess, (state, { order }) => ({
        ...state,
        loading: false,
        order:order
    })),

    on(OrderActions.createOrderFailure,
        OrderActions.getOrderByIdFailure,
        OrderActions.getOrderHistoryFailure,
        (state, { error }) => ({
            ...state,
            loading: false,
            error,
        })),

    on(OrderActions.getOrderByIdSuccess, (state,action) => ({
        ...state,
        loading: false,
        order:action.order
    })),

    on(OrderActions.getOrderHistorySuccess, (state,action) => ({
        ...state,
        loading: false,
        orders:action.orders
    }))
)