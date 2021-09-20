//var a
// Hoisting : all declartions are moved to the top of the scope
//Scopes(ES5)
// 1. Global
// 2. Functions
// 3. Lexical Scopes
// No block scope - DP IIFE
//Scopes(ES6)
//1. Block scope(let, const) 
//let & const ==> block scopes, no hoisting
// global scope ===> global object(in the browser this is the window object), 
//                                               and global declartions are members of the global object
console.log("a: ", a);
var a = 10;
//let a = 10;
console.log("a: ", a);
var b;
console.log("b: ", b); // undefined
//console.log("c: ", c); //exception
function foo() {
    console.log("in foo..");
    var m = 20;
    if (m > 10) {
        let message = "hello";
        console.log("message: ", message);
    }
    //console.log("message: ", message);
}
foo();
console.log("App over..");
