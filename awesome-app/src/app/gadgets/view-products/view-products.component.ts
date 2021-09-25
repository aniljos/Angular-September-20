import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { DataService } from 'src/app/services/DataService';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  public products: Array<Product> = [];

  constructor(private service: DataService, private cartService: CartService) {

    this.service.fetch()?.subscribe((data) => {
      this.products = data;
    });

   }

  ngOnInit(): void {
  }

  add(product: Product){

    this.cartService.addToCart(new CartItem(product, 1));
    //alert("added");
  }

}
