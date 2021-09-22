import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

// *ngFor="let item of data | productFilter : searchKey;
@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(input: Array<Product>, searchKey: string): Array<Product> {

    if(!searchKey){
      return input;
    }
    else{

        return input.filter((item) => {

          return item.id?.toString() === searchKey 
                || item.name?.toLowerCase().includes(searchKey.toLowerCase())
                || item.description?.toLowerCase().includes(searchKey.toLowerCase())
                || item.price?.toString() === searchKey;

        });
    }
  
  }

}
