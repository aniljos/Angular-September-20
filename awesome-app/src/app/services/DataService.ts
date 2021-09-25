import { Observable } from "rxjs";
import { Product } from "../model/product";

export abstract class DataService{

    abstract fetch(): Observable<Array<Product>> | null;
    abstract save(product: Product): Observable<any> | null;
}