/*Task 1*/
//Створи стрілкову функцію square(n), яка:
// повертає квадрат числа
// square(4); // 16
const square = (n) => n * n;
console.log(square(4)); // 16

/*Task 2*/
//Функція isAdult(age):
// повертає true, якщо age ≥ 18
// інакше false
const isAdult = (age) => {
  return age >= 18 ? true : false;
};
console.log(isAdult(20)); // true
console.log(isAdult(15)); // false

/*Task 3*/
//Функція greet(name):
// якщо імʼя передано → "Hello, NAME"
// якщо ні → "Hello, guest"
const greet = (name) => {
  if (name) {
    return `Hello, ${name}`;
  }
  return "Hello, guest";
};
console.log(greet("Alice")); // "Hello, Alice"
console.log(greet()); // "Hello, guest"

/*Task 4*/
//Функція checkEven(n):
// повертає "Even" або "Odd"
const chekEven = (n) => {
  return n % 2 === 0 ? "Even" : "Odd";
};
console.log(chekEven(4)); // "Even"
console.log(chekEven(7)); // "Odd"

/*Task 5*/
//Функція calculate(a, b, operator):
// реалізуй стрілковою функцією
// без switch
// використай if / else
const calculate = (a, b, operator) => {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Invalid operator";
  }
};
console.log(calculate(10, 5, "+")); // 15
