console.log("Hello TS");
var x; // infers to any
x = 100;
x = "hello";
var y = 10; // infers to a number
//y = "hello";  // type checking
var z; // type annotation
z = "hello";
//z = [1, 2, 3];
var user;
user = { id: 1, name: "Anil", location: "Mumbai" };
