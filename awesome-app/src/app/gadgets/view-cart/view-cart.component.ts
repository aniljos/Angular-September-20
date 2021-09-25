import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  public cart: Array<CartItem> = []
  constructor(private cartService: CartService) { 
    
    //this.cart = cartService.getCart();

    cartService.subject.subscribe((updatedCart) => {
      this.cart = updatedCart;
    })

  }

  ngOnInit(): void {
  }

}
