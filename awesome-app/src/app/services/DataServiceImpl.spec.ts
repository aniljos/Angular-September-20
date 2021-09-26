import { inject, TestBed } from "@angular/core/testing"
import { DataServiceImpl } from "./DataServiceImpl";
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { environment } from "src/environments/environment";
import { Product } from "../model/product";

fdescribe("DataServiceImpl", () => {

    beforeEach(() => {

        TestBed.configureTestingModule({

            providers: [DataServiceImpl],
            imports: [HttpClientTestingModule]

        }).compileComponents();

    })

    it("create an instance", () => {

        const service = TestBed.inject(DataServiceImpl);
        expect(service).toBeTruthy();
    });

    it("fetch the products", () => {

        const service = TestBed.inject(DataServiceImpl);
        const controller = TestBed.inject(HttpTestingController);
        service
            .fetch()
            ?.subscribe((data) => {
                expect(data.length).toBe(2);
            });

        controller.expectOne(environment.productsUrl)
                    .flush([
                        new Product(1, "abc", 2000, "abc"),
                        new Product(2, "abc1", 20000, "abc1"),
                    ]);

                    
    });


})