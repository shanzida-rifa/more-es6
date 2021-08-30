//1.let and const
const hubbby = 'Omor Sani';
let phone = 'ipgone 15';
phone = 'samsung';
//2.default parameter
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
console.log(maxNumber());

//3.template string
const myNotes = `I am Mojnu of ${hubbby}. I don't have laili.`;
console.log(myNotes);

//4.arrow function
const square = x => x * x;
console.log(square(9));
