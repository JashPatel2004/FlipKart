import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { userReducer } from './State/User/user.reducer';
import { authReducer } from './State/Auth/auth.reducer';
import { UserService } from './State/User/user.service';
import { productReducer } from './State/Product/product.reducer';
import { cartReducer } from './State/Cart/cart.reducer';
import { orderReducer } from './State/Order/order.reducer';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer,auth:authReducer,product:productReducer,cart: cartReducer,order:orderReducer }), 
    BrowserAnimationsModule,
    MatDialogModule 
  ],
  providers: [
    UserService 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
