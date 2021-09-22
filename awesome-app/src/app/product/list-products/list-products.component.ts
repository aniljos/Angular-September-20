import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  private url: string;
  public data: Array<Product>;
  public searchKey: string = "";

  constructor(private http: HttpClient) {

      this.data = new Array<Product>();
      this.url = "http://localhost:9000/products";

      http
        .get<Array<Product>>(this.url)
        .subscribe((data) => {
          console.log("in subscribe", data);
          this.data = data;
        }, (resp) => {
          console.log("in subscribe failed", resp);
        });
  }

  ngOnInit(): void {
  }

  

}
