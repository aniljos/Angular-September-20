import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
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
 // public subject: Subject<Array<CartItem>> = new Subject<Array<CartItem>>();
  public subject: ReplaySubject<Array<CartItem>> = new ReplaySubject<Array<CartItem>>();

  constructor() { }

  addToCart(item: CartItem): void{
    this.cart.push(item);

    this.subject.next([...this.cart]);
  }

  getCart(): Array<CartItem>{

    return [...this.cart];
  }
}
