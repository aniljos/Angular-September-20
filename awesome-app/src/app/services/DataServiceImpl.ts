import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product";
import { DataService } from "./DataService";
import {environment} from '../../environments/environment';

@Injectable()
export class DataServiceImpl extends DataService{

    private url: string;
    constructor(private http:HttpClient){
        super();
        this.url = environment.productsUrl;
    }

    fetch(): Observable<Array<Product>> | null {
        
        console.log("In fetch of DataServiceImpl");
        return this.http.get<Array<Product>>(this.url);

        
    }
    save(product: Product): Observable<any> | null {

        console.log("In save of DataServiceImpl");
        return this.http.post(this.url, product);
    }

}