import { Injectable } from '@angular/core';
import { Product } from '../model/product';

// @Injectable({
//   providedIn: 'root'
// })

export class CartItem{
  constructor(public product?: Product, public quantity?: number){}
}


@Injectable()
export class CartService {

  private cart: Array<CartItem> = [];
  
  constructor() { }

  addToCart(item: CartItem): void{
    this.cart.push(item);
  }

  getCart(): Array<CartItem>{

    return [...this.cart];
  }
}
