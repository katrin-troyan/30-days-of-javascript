/*Task 1*/
//Створи обʼєкт user з полями:
// name
// метод sayHi(), який виводить
// Hi, NAME
// const user = {
//   name: "Olga",
//   sayHi() {
//     console.log("Hi, " + this.name);
//   },
// };
// user.sayHi(); // Hi, Olga

/*Task 2*/
//Створи обʼєкт counter:
// count: 0
// метод increment() → +1
// метод decrement() → -1
const counter = {
  count: 0,
  increment() {
    this.count += 1;
    return this.count;
  },

  decrement() {
    this.count -= 1;
    return this.count;
  },
};

/*Task 3*/
//Обʼєкт person:
// age
// метод isAdult() → повертає true / false
const person = {
  age: 10,
  isAdult() {
    if (this.age >= 18) {
      return true;
    } else return false;
  },
};
console.log(person.isAdult()); // true

/*Task 4*/
//Обʼєкт cart:
// items — масив чисел
// метод getTotal() → повертає суму
// const cart = {
//   items: [1, 2, 3, 4, 5],
//   getTotal() {
//     const sum = this.items.reduce((acc, num) => acc + num, 0);
//     return sum;
//   },
// };
// console.log(cart.getTotal()); // 15

/*Task 5*/
//Обʼєкт user:
// name
// isLoggedIn
// метод getStatus()
// Повертає:
// "NAME is online"
// "NAME is offline"
const user = {
  name: "Olga",
  isLoggedIn: true,
  getStatus() {
    if (this.isLoggedIn) {
      return this.name + " is online";
    }
    return this.name + " is offline";
  },
};
console.log(user.getStatus());
