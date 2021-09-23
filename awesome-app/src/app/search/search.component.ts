import { Component, OnInit } from '@angular/core';
import {Observable, interval} from 'rxjs';
import {filter, map, take, tap, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { 

      // const observable = interval(1000);
      
      // observable.subscribe(value => {
      //   console.log(value);
      // })

      interval(1000)
        .pipe(
          take(10),
          tap(v => console.log("tap: ", v)),
          filter(v => v % 2 == 0),
          map(v => v * v)
        )
        .subscribe(value => {
          console.log("subscribe", value);
        })


  }

  ngOnInit(): void {
  }

}
