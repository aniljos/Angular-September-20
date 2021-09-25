import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/DataService';
import { Product } from '../../model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  
})
export class ListProductsComponent implements OnInit, OnChanges {

  private url: string;
  public data: Array<Product>;
  public searchKey: string = "";
  public nProduct: Product;
  public selectedProduct: Product|null = null;

  constructor(private http: HttpClient, private dataService: DataService) {

    this.data = new Array<Product>();
    this.nProduct = new Product();
    this.url = "http://localhost:9000/products";

    this.fetch();

    //this.dataService.fetch();

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ListProductsComponent: ngOnChanges", changes);
  }

  ngOnInit(): void {
  }

  fetch() {

    this.dataService
            .fetch()
            ?.subscribe((data) => {
              this.data = data;
            }, () => {
              alert("Failed to fetch data");
            })


    // this.http
    //   .get<Array<Product>>(this.url)
    //   .subscribe((data) => {
    //     console.log("in subscribe", data);
    //     this.data = data;
    //   }, (resp) => {
    //     console.log("in subscribe failed", resp);
    //   });

      // this.http
      // .get<any>(this.url)
      // .subscribe((data) => {
      //   console.log("in subscribe", data);
      //   for (const item of data) {
      //     this.data.push(new Product(item.id, item.name, item.price, item.description))
      //   }
        
      // }, (resp) => {
      //   console.log("in subscribe failed", resp);
      // });
  }

  save() {

    this.http
      .post(this.url, this.nProduct)
      .subscribe(() => {

        alert("Saved the product");
        //this.data.push(this.nProduct);
        this.fetch();
        this.nProduct = new Product();

      }, () => {

        alert("Failed to save the product");
      })
  }

  delete(product : Product){

    var url = this.url + "/" + product.id;

    this.http
          .delete(url)
          .subscribe(() => {
            this.fetch();
          }, () => {
            alert("Failed to delete!");
          });
  }

  edit(product: Product){
    this.selectedProduct = product;
  }

  editUpdated(product: Product){

    var url = this.url + "/" + product.id;
    this.http
        .put(url, product)
        .subscribe(() => {

          this.selectedProduct = null;
          this.fetch();

        }, () => {
          alert("Failed to update");
        })
  }

  editCancelled(message: string){
    alert(message);
    this.selectedProduct = null;
  }


}
