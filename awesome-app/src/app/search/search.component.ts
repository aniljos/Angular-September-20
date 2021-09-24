import { Component, OnInit } from '@angular/core';
import {Observable, interval, Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import {filter, map, take, tap, debounceTime} from 'rxjs/operators';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchFormGroup: FormGroup;
  public results: Array<string> = [];
  public $results: Observable<Array<string>> = new Observable();

  constructor(private http: HttpClient) { 

      // const observable = interval(1000);
      
      // observable.subscribe(value => {
      //   console.log(value);
      // })

      //Observer Example
      // interval(1000)
      //   .pipe(
      //     take(10),
      //     tap(v => console.log("tap: ", v)),
      //     filter(v => v % 2 == 0),
      //     map(v => v * v)
      //   )
      //   .subscribe(value => {
      //     console.log("subscribe", value);
      //   })

      //Subject Example

      //Creates
      //const subject = new Subject<Number>();
      //const subject = new BehaviorSubject<Number>(50);
      // const subject = new ReplaySubject<Number>();

      // let num = 0;
      // const handle = setInterval(() => {
      //   subject.next(num++);

      //   if(num === 5){
      //     subject.subscribe((n) => console.log("s2", n));
      //   }

      //   if(num === 10){
      //     clearInterval(handle);
      //   }
      // }, 500);


      // //Subscribe
      // subject.subscribe((n) => console.log("s1", n));
      //

      this.searchFormGroup = new FormGroup({
        search: new FormControl("", [Validators.required, Validators.minLength(3)], [])
      });
  }

  ngOnInit(): void {

    const searchFormControl = this.searchFormGroup.get("search");
    searchFormControl?.valueChanges
                          .pipe(
                            debounceTime(1000),
                            filter(v => searchFormControl.valid)
                          )
                          .subscribe((value) => {
                            console.log(value);
                            var url = "https://en.wikipedia.org/w/api.php";
                            var httpParams = new HttpParams()
                                                  .set("action", "opensearch")
                                                  .set("format", "json")
                                                  .set("limit", 20)
                                                  .set("origin", "*")
                                                  .set("search", value);

                            // Http call returns the data(response.body)
                            // this.http
                            //       .get(url, {params: httpParams})
                            //       .subscribe((data) => {
                            //         console.log(data);
                            //       });

                            // Http call returns the response(response.headers + response.body)
                            //observe: 'response' or 'body'
                            // this.http
                            //       .get(url, {params: httpParams, observe: 'response'})
                            //       .subscribe((response) => {
                            //         console.log(response);
                            //       });


                            // Http call returns the data(response.body) mapped to a custom type
                          //   this.http
                          //         .get<Array<any>>(url, {params: httpParams})
                          //         .pipe(
                          //           map(data => data[1])
                          //         )
                          //         .subscribe((data) => {
                          //           console.log(data);
                          //           this.results = data;
                          //         });
                          // });


                          this.$results = this.http
                                  .get<Array<any>>(url, {params: httpParams})
                                  .pipe(
                                    map(data => data[1])
                                  )
                          });
            

  }

}
