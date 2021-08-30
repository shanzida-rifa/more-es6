const fish = { name: 'king hilsha', id: 58, price: 9000, phone: '01729337983', address: 'Chadpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;

const { phone, price, dress, id } = fish;

// console.log(phone);
// console.log(phone, dress);
// console.log(phone, price);
// console.log(phone);
// console.log(phone);


const company = {
    name: 'GP', ceo: { id: 1, name: 'ajmol', food: 'fuchka' }, web: { work: 'web development', employee: 22, framework: 'react' }
};

// const work = company.web.work;
// const framework = company.work.framework;

const { work, framework } = company.web;
const { food } = company.ceo;
console.log(work, framework, food);