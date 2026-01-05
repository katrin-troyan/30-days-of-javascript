/*Task 1*/
//Порахуй загальну суму чеку
// const cart = [100, 250, 80, 40];
// const sum = cart.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 470

/*Task 2*/
//Отримай масив імен повнолітніх користувачів
// const users = [
//   { name: "Anna", age: 17 },
//   { name: "John", age: 22 },
//   { name: "Kate", age: 19 },
// ];
// const adultsNames = users.reduce((acc, user) => {
//   if (user.age >= 18) {
//     acc.push(user.name);
//   }
//   return acc;
// }, []);
// console.log(adultsNames); // ["John", "Kate"]

/*Task 3*/
//Знайди середню оцінку
// const grades = [90, 80, 100, 70];
// const sum = grades.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// const average = sum / grades.length;
// console.log(average); // 85

/*Task 4*/
//Отримай масив назв товарів, які є в наявності.
// const products = [
//   { title: "Laptop", inStock: true },
//   { title: "Phone", inStock: false },
//   { title: "Tablet", inStock: true },
// ];
// const availableProducts = products.reduce((acc, product) => {
//   if (product.inStock) {
//     acc.push(product.title);
//   }
//   return acc;
// }, []);
// console.log(availableProducts); // ["Laptop", "Tablet"]

/*Task 5*/
//Отримай:
// загальну суму всіх замовлень
// середній чек
const orders = [
  { id: 1, total: 120 },
  { id: 2, total: 80 },
  { id: 3, total: 200 },
];
const sum = orders.reduce((acc, order) => {
  return acc + order.total;
}, 0);
const average = (sum / orders.length).toFixed(2);
console.log("total:" + sum + ", " + "average:" + average); // total:400, average:133.33

/*Task 6*/
//Реалізуй фільтрацію парних чисел через reduce
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.push(num);
  }
  return acc;
}, []);
console.log(evenNumbers); // [2, 4, 6]
