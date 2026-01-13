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
const products = [
  { title: "Laptop", price: 1200 },
  { title: "Phone", price: 800 },
  { title: "Tablet", price: 600 },
];
const exspensiveProduct = products.reduce((acc, product) => {
  if (product.price > acc.price) {
    return product;
  }
  return acc;
}, products[0]);
console.log(exspensiveProduct);
