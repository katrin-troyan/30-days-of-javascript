/*Task 1 */
const age = 20;
if (age >= 18) {
  console.log("Доступ дозволено");
} else {
  console.log("Доступ заборонено");
}
/*Task 2 */
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("C");
}
/*Task 3 */
let number = 13;
if (number % 2 === 0) {
  console.log("Парне");
} else {
  console.log("Непарне");
}
/*Task 4 */
const isLoggedIn = true;
if (isLoggedIn) {
  console.log("Вітаємо!");
} else {
  console.log("Увійдіть у систему");
}
/*Task 5 */
const temperature = 30;
console.log(temperature >= 20 ? "Тепло" : "Холодно");
/*Task 6 */
const userAge = 17;
const hasParentalConsent = true;

if (userAge >= 18 || hasParentalConsent) {
  console.log("Доступ дозволено");
} else {
  console.log("Доступ заборонено");
}
