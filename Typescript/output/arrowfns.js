// function statement
function sum(x, y) {
    return x + y;
}
sum(2, 3);
//function expression
let add = function (x, y) {
    return x + y;
};
//add(3,4);
//Arrow function
let compute = (x, y) => {
    return x + y;
};
console.log("compute: ", compute(4, 5));
compute = (x, y) => x * y;
console.log("compute: ", compute(4, 5));
