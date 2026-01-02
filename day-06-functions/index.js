/*Task 1*/
//Створи функцію multiply(a, b):
// якщо один з аргументів не число → поверни "Error"
// інакше поверни добуток
// multiply(2, 3);   // 6
// multiply(2, "3"); // "Error"

function multiply(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  }
  return "Error";
}
console.log(multiply(2, 3)); // 6
console.log(multiply(2, "3")); // "Error"

/*Task 2*/
//Функція absolute(n):
// повертає абсолютне значення числа
// absolute(-5); // 5
// absolute(4);  // 4
function absolute(n) {
  if (n < 0) {
    return n * -1;
  }
  return n;
}
console.log(absolute(-5)); // 5
console.log(absolute(4)); // 4

/*Task 3*/
//Функція checkLogin(isLoggedIn):
// якщо true → "Welcome"
// якщо false → "Please log in"
function checkLogin(isLoggedIn) {
  return isLoggedIn ? "Welcome" : "Please log in";
}
console.log(checkLogin(true)); // "Welcome"
console.log(checkLogin(false)); // "Please log in"

/*Task 4*/
//Функція maxOfThree(a, b, c):
// повертає найбільше число
// без Math.max
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
}
console.log(maxOfThree(5, 10, 3)); // 10
console.log(maxOfThree(7, 4, 9)); // 9

/*Task 5*/
//Функція calculate(a, b, operator):
// operator може бути +, -, *, /
// повертає результат
// якщо оператор невідомий → "Invalid operator"
// calculate(10, 5, "+"); // 15
// calculate(10, 0, "/"); // "Error"
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        return "Error";
      }
      return a / b;

    default:
      return "Invalid operator";
  }
}
console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 0, "/")); // "Error"
