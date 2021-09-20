console.log("Hello TS");

var x; // infers to any
x = 100; x = "hello";
var y = 10; // infers to a number
//y = "hello";  // type checking

var z: string; // type annotation
z = "hello";
//z = [1, 2, 3];

var user: {id: number, name: string, location?: string};

user = {id: 1, name: "Anil", location: "Mumbai"};



