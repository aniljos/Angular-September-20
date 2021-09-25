import { Component } from "@angular/core";

// <hello></hello>
@Component({
    template: `
        <h4>Hello Component</h4>
        <p appHighlight="blue"  defaultColor="red">This is a simple component</p>
    `,
    selector: "hello"
})
export class HelloComponent{

}