import { Component } from "@angular/core";


@Component({
    selector: "data-binding",
    templateUrl: './databinding.component.html'
})
export class DataBindingComponent{

    user: {firstName: string, lastName: string};
    count: number;
    message: string;
    age: number = 25;
    

    constructor(){

        this.user = {firstName: "Anil", lastName: "Joseph"};
        this.count = 15;
        this.message = "Hello";
    }    

    inc(evt: any){

        console.log(evt);
        this.count++;
    }

    update(evt: any){
        this.age = evt.target.value
    }
}