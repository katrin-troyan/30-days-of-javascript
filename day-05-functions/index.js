/*Task 1*/
// Створи функцію, яка виводить:
// Привіт, користувачу!
function hello() {
  return "Привіт, користувачу";
}
console.log(hello());

/*Task 2*/
//Функція приймає 2 числа і повертає їх суму
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

/*Task 3*/
//Функція приймає число і повертає:
//true — якщо парне
//false — якщо ні

function isEven(a) {
  return a % 2 === 0;
}
console.log(isEven(2)); //true
console.log(isEven(3)); //false

/*Task 4*/
//Функція приймає age і повертає:
//"Доступ дозволено" якщо ≥ 18
//"Доступ заборонено" якщо < 18
const checkAge = (a) => {
  return a >= 18 ? "Доступ дозволено" : "Доступ заборонено";
};
console.log(checkAge(17)); //"Доступ заборонено"
console.log(checkAge(21)); //"Доступ дозволено"

/*Task 5*/
//Функція приймає число n і виводить таблицю множення для нього (1–10)
const num = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} × ${i} = ${n * i}`);
  }
};
num(10);
