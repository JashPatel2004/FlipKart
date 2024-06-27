import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from "../../../share/components/cart-item/cart-item.component";
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../models/AppState';
import { log } from 'console';
import { CartService } from '../../../../State/Cart/cart.service';
import { CartState } from '../../../../State/Cart/cart.reducer';
import { getCartRequest } from '../../../../State/Cart/cart.action';
import { getCart } from '../../../../State/Cart/cart.selector';


@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [CommonModule, CartItemComponent, MatDividerModule]
})
export class CartComponent {

  constructor(
    private router: Router,
    private cartService: CartService,
    private store: Store<CartState>
  ) {


  }

  cartItems!: any[]
  cart!:any[]
  totalPrice = 0
  totalDiscountedPrice = 0
  discount = 0

  ngOnInit() {
    this.store.dispatch(getCartRequest())
    // this.cartService.addItemToCart(this.cartItems)
    this.store.select(getCart).subscribe((cart) => {

      this.cartItems = cart.cartItems
      this.totalPrice = cart.totalPrice
      this.totalDiscountedPrice = cart.totalDiscountedPrice
      this.discount = cart.discount
    })

    

  }

  navigateToChechout() {
    this.cartService.getCart()
    this.router.navigate(["checkout"]);
  }

}