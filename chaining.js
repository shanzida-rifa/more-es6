//declare variable based on the name of an object property
const myObject = { x: 2, y: 3, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log(x, b);
//destructuring
const [p, q] = [45, 37, 81, 996];
console.log(p, q);

const [best, faltu] = ['momotaj', "poroshi"];
console.log(best, faltu);

const { sky, color, soil } = { sky: 'blue', soil: 'matti', color: 'red', money: 50 };

const company = {
    name: 'GP', ceo: { id: 1, name: 'ajmol', food: 'fuchka' }, web: { work: 'web development', employee: 22, framework: 'react' }
};

console.log(company.back.tech.third);