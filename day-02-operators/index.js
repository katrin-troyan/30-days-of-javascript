/*Task 1*/
let x = 10;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
/*Task 2*/
let a = 5;
let b = "5";
console.log(a == b); //true
console.log(a === b); //false
console.log(a != b); //false
console.log(a !== b); //true
/*Task 3*/
let age = 12;
console.log(age >= 18);
/*Task 4*/
const hasPassport = true;
const hasTicket = false;
console.log(hasPassport && hasTicket && "Приємної подорожі!");
console.log(hasPassport || hasTicket);
/*Task 5*/
const isOnline = false;
console.log(!isOnline);
/*Task 6*/
const isLoggedIn = true;
const isAdmin = false;
const hasAsscess = isLoggedIn && isAdmin;
console.log(hasAsscess && "Access granted");
/*Task 7*/
let score = 12;
const even = score % 2;
console.log(even === 0);
const langerNumber = score > 10;
console.log(langerNumber);
