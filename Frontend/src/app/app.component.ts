import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './module/feature/components/home/home.component';
import { FooterComponent } from './module/share/components/footer/footer.component';
import { NavbarComponent } from './module/share/components/navbar/navbar.component';
import { ProductsComponent } from "./module/feature/components/products/products.component";
import { Dialog } from '@angular/cdk/dialog';
import { UserService } from './State/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from './models/AppState';
import { HttpClient } from '@angular/common/http';
import { CartService } from './State/Cart/cart.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent, ProductsComponent]
})
export class AppComponent {
  title = 'e-commerce-angular';

  constructor(private route:Router,private dialog:Dialog,private userService:UserService,private store:Store<AppState>,private http:HttpClient,private cartService:CartService){}
  ngOnInit(){
    if(localStorage.getItem("jwt")) this.userService.getUserProfile(this.http)
    this.store.pipe(select((store)=>store.auth)).subscribe((user)=>{
          this.userService.getUserProfile(this.http)
          this.cartService.getCart().subscribe()
})
}
}


