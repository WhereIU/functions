const task1 = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
task1.forEach((name) => console.log(`Привет, ${name}`));

const task2 = [1, 2, 3, 4, 5];
const multipliedNums = task2.map((num) => num * 10);
console.log(multipliedNums);

const task3 = [5, 12, 8, 130, 44];
const filteredNums = task3.filter((num) => num > 10);
console.log(filteredNums);

const task4 = [{ name: 'Иван', age: 23 }, { name: 'Мария', age: 18 }, { name: 'Алексей', age: 32 }, { name: 'Ольга', age: 24 }, { name: 'Сергей', age: 17 }, { name: 'Анна', age: 21 }];
const filteredPpl = task4.filter((person) => person.age > 18);
const pplInfo = filteredPpl.map((person) => `${person.name} (${person.age} лет)`);
console.log(pplInfo);

const task5 = [{ product: 'Телефон', price: 50000, quantity: 1 }, { product: 'Чехол', price: 1500, quantity: 2 }, { product: 'Зарядное устройство', price: 2500, quantity: 1 }];
const totalCost = task5.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
console.log(totalCost);
