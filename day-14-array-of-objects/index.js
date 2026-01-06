const users = [
  { name: "Anna", age: 17, isOnline: true },
  { name: "John", age: 22, isOnline: false },
  { name: "Kate", age: 19, isOnline: true },
  { name: "Mike", age: 15, isOnline: false },
];

/*Task 1*/
//Виведи в консоль імʼя кожного користувача.
// for (let key in users) {
//   console.log(users[key].name);
// }
// const nameUser = users.forEach((users) => console.log(users.name));

/*Task 2*/
//Отримай новий масив тільки повнолітніх користувачів (age ≥ 18).
//// const adultUsers = users.filter((user) => user.age >= 18);
// console.log(adultUsers);

/*Task 3*/
//Створи масив імен повнолітніх користувачів
// const adultUserNames = users
//   .filter((user) =>
//     user.age >= 18
//   )
//     .map((user) => user.name);
// console.log(adultUserNames); // ["John", "Kate"]

/*Task 4*/
// Перевір, чи є хоча б один користувач онлайн.
// const isAnyUserOnline = users.some((user) => user.isOnline);
// console.log(isAnyUserOnline); // true

/*Task 5*/
//Порахуй, скільки користувачів зараз онлайн.
// const onlineUsersCount = users.reduce((acc, user) => {
//   if (user.isOnline) {
//     acc++;
//   }
//   return acc;
// }, 0);
// console.log(onlineUsersCount); // 2

/*Task 6*/
//Знайди першого користувача молодше 18 років
// const firstUnderageUser = users.find((user) => user.age < 18);
// console.log(firstUnderageUser); // { name: "Anna", age: 17, isOnline: true }

/*Task 7*/
//Отримай масив імен користувачів, які:
// повнолітні
// онлайн
// const adultOnlineUserNames = users
//   .filter((user) => user.age >= 18 && user.isOnline)
//   .map((user) => user.name);
// console.log(adultOnlineUserNames); // ["Kate"]
