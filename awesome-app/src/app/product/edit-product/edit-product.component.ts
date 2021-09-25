import { Component, OnInit, Input, 
    OnChanges, SimpleChanges, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnChanges, OnDestroy {


  @Input()
  public currentProduct: Product = new Product();
  //copy of currentProduct
  public temp: Product = new Product();

  @Output()
  public saved: EventEmitter<Product> = new EventEmitter<Product>();
  @Output()
  public cancelled: EventEmitter<string> = new EventEmitter<string>();

  public theForbiddenValues="aaa,bbb,hello";

  constructor() { 
    console.log("EditProductComponent: constructor");
  }
  
  ngOnInit(): void {
    console.log("EditProductComponent: ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("EditProductComponent: ngOnChanges", changes);
    Object.assign(this.temp, this.currentProduct);
  }

  ngOnDestroy(): void {
    console.log("EditProductComponent: ngOnDestroy");
  }

  save(){
    this.saved.emit(this.temp);
  }

  cancel(){
    this.cancelled.emit("Operation Cancelled");
  }
}
