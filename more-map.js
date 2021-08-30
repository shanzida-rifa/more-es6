const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLenghth = friends.map(friend => friend.length);
// console.log(fLenghth);

const products = [
    { name: 'water bottle', price: 4500, color: 'yellow' },
    { name: 'mobile phone', price: 44500, color: 'black' },
    { name: 'smart watch', price: 4590, color: 'red' },
    { name: 'sticky note', price: 45, color: 'pink' },
    { name: 'glass', price: 3, color: 'white' }
]

const productsName = products.map(product => product.name);
const productsPrice = products.map(product => product.price);
console.log(productsName);
console.log(productsPrice);
products.map(product => console.log(product));
products.forEach(product => console.log(product));



