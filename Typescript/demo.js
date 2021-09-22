function sum(x, y){
    console.log("..in sum");
}

// function sum(){
//     console.log("..in sum no args");
// }

sum(2,3);
sum();
sum(2,3,4,5);


var numbers = [1,2,3,4,5,6,7,8,9];
// var evenNumbers=[];

// for (const item of numbers) {
//     if(item % 2 === 0){
//         evenNumbers.push(item);
//     }
// };

const result = numbers.filter((item) => {return item % 2 === 0});