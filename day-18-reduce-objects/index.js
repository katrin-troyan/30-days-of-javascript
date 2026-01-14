/*Task 1*/
//Порахуй суму всіх покупок //400
// const orders = [
//   { id: 1, total: 120 },
//   { id: 2, total: 80 },
//   { id: 3, total: 200 },
// ];
// const sum = orders.reduce((acc, order) => {
//   return acc + order.total;
// }, 0);
// console.log(sum);

/*Task 2*/
//Отримай масив імен онлайн-користувачів //["Anna", "Kate"]
// const users = [
//   { name: "Anna", isOnline: true },
//   { name: "John", isOnline: false },
//   { name: "Kate", isOnline: true },
// ];
// const userOnline = users.reduce((acc, user) => {
//   if (user.isOnline) {
//     acc.push(user.name);
//   }
//   return acc;
// }, []);
// console.log(userOnline);

/*Task 3*/
//Зроби обʼєкт статистики віку
// {
//   18: 3,
//   20: 2,
//   21: 1
// }
// const ages = [18, 20, 18, 21, 20, 18];
// const ageStatic = ages.reduce((acc, age) => {
//   if (acc[age]) {
//     acc[age] += 1;
//   } else {
//     acc[age] = 1;
//   }
//   return acc;
// }, {});
// console.log(ageStatic);

/*Task 4*/
//Згрупуй користувачів за статусом
// {
//   online: ["Anna", "Kate"],
//   offline: ["John"]
// }
// const users = [
//   { name: "Anna", isOnline: true },
//   { name: "John", isOnline: false },
//   { name: "Kate", isOnline: true },
// ];
// const userGroup = users.reduce(
//   (acc, user) => {
//     if (user.isOnline) {
//       acc.online.push(user.name);
//     } else {
//       acc.offline.push(user.name);
//     }
//     return acc;
//   },
//   { online: [], offline: [] }
// );
// console.log(userGroup);

/*Task 5*/
//Найдорожчий товар //{ title: "Laptop", price: 1200 }
// const products = [
//   { title: "Laptop", price: 1200 },
//   { title: "Phone", price: 800 },
//   { title: "Tablet", price: 600 },
// ];
// const exspensiveProduct = products.reduce((acc, product) => {
//   if (product.price > acc.price) {
//     return product;
//   }
//   return acc;
// }, products[0]);
// console.log(exspensiveProduct);

/*Task 6*/
//порахувати суму тільки оплачених замовлень
// const orders = [
//   { id: 1, total: 120, isPaid: true },
//   { id: 2, total: 80, isPaid: false },
//   { id: 3, total: 200, isPaid: true },
// ];
// const sumIsPaid = orders.reduce((acc, order) => {
//   if (order.isPaid) {
//     acc += order.total;
//   }
//   return acc;
// }, 0);
// console.log(sumIsPaid);

/*Task 7*/
//Згрупуй числа за парністю
// {
//   even: [2, 4, 6],
//   odd: [1, 3, 5]
// }
// const numbers = [1, 2, 3, 4, 5, 6];

// const sort = numbers.reduce(
//   (acc, number) => {
//     if (number % 2 === 0) {
//       acc.even.push(number);
//     } else {
//       acc.odd.push(number);
//     }
//     return acc;
//   },
//   { even: [], odd: [] }
// );
// console.log(sort);

/*Task 8*/
//Статистика покупок
// {
//   Anna: 170,
//   John: 80
// }

// const purchases = [
//   { user: "Anna", amount: 100 },
//   { user: "John", amount: 50 },
//   { user: "Anna", amount: 70 },
//   { user: "John", amount: 30 },
// ];
// const sumPurchas = purchases.reduce((acc, purchase) => {
//   acc[purchase.user] = (acc[purchase.user] || 0) + purchase.amount;

//   return acc;
// }, {});
// console.log(sumPurchas);

/*Task 9*/
// Наймолодший користувач
const users = [
  { name: "Anna", age: 22 },
  { name: "John", age: 19 },
  { name: "Kate", age: 25 },
];
const youngestUser = users.reduce((acc, user) => {
  return user.age < acc.age ? user : acc;
}, users[0]);
