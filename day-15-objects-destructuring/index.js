/*Task 1*/
//Створи обʼєкт book з полями:
// title
// author
// year
// Виведи title і author через деструктуризацію.
// const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 };
// const { title, author } = book
// console.log(title, author)

/*Task 2*/
//Витягни name і city,
//country задай зі значенням "Ukraine" за замовчуванням.
// const user = {
//   name: "Mike",
//   age: 30,
//   city: "Kyiv",
// };
// const { name, city, country = "Ukraine" } = user;
// console.log(name, city);

/*Task 3*/
//Напиши функцію getFullName, яка приймає обʼєкт: і повертає рядок:"FirstName LastName"
// function getFullName({ firstName, lastName }) {
//     return `${firstName} ${lastName}`;
// }

/*Task 4*/
//Виведи імена повнолітніх користувачів, використовуючи:
// filter
// деструктуризацію
const users = [
  { name: "Anna", age: 17 },
  { name: "John", age: 22 },
  { name: "Kate", age: 19 },
];
const adultUsers = users
    .filter(({ age }) => age >= 18)
    .map(({name})=>name);
console.log(adultUsers);

/*Task 5*/
//Створи новий масив тільки з назв товарів, ціна яких більше 700.
const products = [
  { title: "Laptop", price: 1200 },
  { title: "Phone", price: 800 },
  { title: "Tablet", price: 600 },
];
const expensiveProducts = products.reduce((acc, { title, price }) => {
  if (price > 700) {
    acc.push(title);
  }
  return acc;
}, []);
console.log(expensiveProducts); // ["Laptop", "Phone"]
