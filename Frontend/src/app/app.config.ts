import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule, provideStore } from '@ngrx/store';
import { authReducer } from './State/Auth/auth.reducer';
import { userReducer } from './State/User/user.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { productReducer } from './State/Product/product.reducer';
import { orderReducer } from './State/Order/order.reducer';
import { cartReducer } from './State/Cart/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { CartEffect } from './State/Cart/cart.effects';
import { paymentReducer } from './State/Payment/payment.reducer';


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),
    provideStore({ 'user': userReducer, 'product': productReducer, 'auth': authReducer, 'order': orderReducer, 'cart': cartReducer, 'payment':paymentReducer }), provideEffects([CartEffect])]
};
