const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

// const doubleIt = number => number * 2;

// for (const number of numbers) {
//     const result = doubleIt(number);
//     output2.push(result);
// }
// console.log(output2);

//1. loop through each element.
//2. function calling by each element.
//3. result for each element stored in array.

const output = numbers.map(number => number * 2);
console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);
