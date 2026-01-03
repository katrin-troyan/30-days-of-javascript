/*Task 1*/
//Scope базовий
let x = 10; // глобальна

function testScope() {
  let y = 5; // локальна
  console.log(x); // 10
  console.log(y); // 5
}

testScope();
console.log(y); // ReferenceError

/*Task 2*/
//var vs let
//Чим відрізняються результати?

// var → одна змінна на весь цикл
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 3
// 3
// 3

// let → нова змінна на кожну ітерацію
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// 0
// 1
// 2

/*Task 3*/
//Що виведе і чому?

// var a;        // оголошення піднялось
// console.log(a);
// a = 5;        // присвоєння лишилось на місці

console.log(a); //undefined
var a = 5;

console.log(b); //ReferenceError
let b = 10;

/*Task 4*/
//Глобальні помилки
// Створи функцію, яка змінює глобальну змінну
// Подивись, що станеться після виклику
let a = 1;
function changeGlobal() {
  a = 5;
  console.log(a); // 5
}
console.log(a); // 1
changeGlobal(); //5
console.log(a); // 5

/*Task 5*/
//Що буде на кожному console.log?
// Змініть код так, щоб внутрішня функція могла змінювати змінну зовнішньої функції.
// function outer() {
//   let a = 10;
//   function inner() {
//     let b = 20;
//     console.log(a + b);
//   }
//   inner();//30
//   console.log(b);// ReferenceError
// }
// outer();

function outer() {
  let a = 10;
  let b = 20;
  function inner() {
    console.log(a + b);
  }
  inner(); //30
  console.log(b); //20
}
outer();

//Question 1 — Scope 
let a = 10;
function test() {
    let a = 20; console.log(a);
}
test();//20 
console.log(a);//10

// Question 2 — Block scope 
if (true) {
    let x = 5;
}
console.log(x);// ReferenceError

//Question 3 — var hoisting
console.log(a); // undefined
var a = 3;

// Question 4 — let hoisting (TDZ) 
console.log(b); // ReferenceError 
//let b = 7; 

//Question 5 — Function scope 
function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    inner();//1 
    inner();//2 
}
outer();

// Question 6 — var in loop 
for (var i = 0; i < 2; i++) {
    setTimeout(() => console.log(i), 0);
}
//2
//2 

// Question 7 — let in loop 
for (let j = 0; j < 2; j++) {
    setTimeout(() => console.log(j), 0);
}
//0 
//1
