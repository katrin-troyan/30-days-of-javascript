// /*Task 1*/
// // Створи функцію, яка виводить:
// // Привіт, користувачу!
// function hello() {
//   return "Привіт, користувачу";
// }
// console.log(hello());

// /*Task 2*/
// //Функція приймає 2 числа і повертає їх суму
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3));

// /*Task 3*/
// //Функція приймає число і повертає:
// //true — якщо парне
// //false — якщо ні

// function isEven(a) {
//   return a % 2 === 0;
// }
// console.log(isEven(2)); //true
// console.log(isEven(3)); //false

// /*Task 4*/
// //Функція приймає age і повертає:
// //"Доступ дозволено" якщо ≥ 18
// //"Доступ заборонено" якщо < 18
// const checkAge = (a) => {
//   return a >= 18 ? "Доступ дозволено" : "Доступ заборонено";
// };
// console.log(checkAge(17)); //"Доступ заборонено"
// console.log(checkAge(21)); //"Доступ дозволено"

// /*Task 5*/
// //Функція приймає число n і виводить таблицю множення для нього (1–10)
// const num = (n) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${n} × ${i} = ${n * i}`);
//   }
// };
// num(10);

/*Task 1*/
//Створи функцію greet(name), яка:
//приймає імʼя
// повертає рядок:
// "Привіт, ІМʼЯ!"
// function greet(name) {
//   return "Привіт, " + name + "!";
// }
// console.log(greet("Anna")); // "Привіт, Anna!"

/*Task 2*/
//Створи функцію min(a, b), яка:
//повертає менше число
// min(3, 7); // 3
// min(10, 5); // 5

// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(3, 7));
// console.log(min(10, 5));

/*Task 3*/
//Створи функцію countTo(n), яка:
// виводить числа від 1 до n
// використовує цикл всередині функції
// countTo(5); // 1 2 3 4 5
// function countTo(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }
// countTo(5);

/*Task 4*/
//Створи функцію checkAccess(age, isAdmin), яка:
// повертає "Доступ дозволено", якщо age ≥ 18 АБО isAdmin = true
// інакше "Доступ заборонено"
// checkAccess(16, true);  // "Доступ дозволено"
// checkAccess(16, false); // "Доступ заборонено"

// const checkAccess = (age, isAdmin) => {
//   return age >= 18 || isAdmin ? "Доступ дозволено" : "Доступ заборонено";
// };
// console.log(checkAccess(16, true)); // "Доступ дозволено"
// console.log(checkAccess(16, false)); // "Доступ заборонено"

/*Task 5*/
//Створи функцію sumEven(n), яка:
// знаходить суму всіх парних чисел від 1 до n
// повертає результат
// sumEven(10); // 30 (2 + 4 + 6 + 8 + 10)

function sumEven(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumEven(10)); // 30 (2 + 4 + 6 + 8 + 10)
