/*Task 1*/
//forEach
//Виведи кожне число в консоль, використовуючи forEach.
const numbers = [1, 2, 3, 4];
numbers.forEach((n) => console.log(n));

/*Task 2*/
//map
// На основі того ж масиву:
// Створи новий масив, де кожне число помножене на 2.
const multiplication = numbers.map((n) => n * 2);
console.log(multiplication); //[2, 4, 6, 8]

/*Task 3*/
//filter
// З того ж масиву:
// Отримай новий масив тільки з парних чисел.
const evenNumber = numbers.filter((n) => n % 2 === 0);
console.log(evenNumber); //[2, 4]

/*Task 4*/
//Комбінація
//Отримай новий масив віком від 18 років
// Потім збільш кожен вік на 1
const ages = [12, 18, 25, 14, 30];
const adultAgesPlusOne = ages.filter((age) => age >= 18).map((age) => age + 1);
console.log(adultAgesPlusOne); //[19, 26, 31]

/*Task 5*/
//Отримай новий масив:
// тільки слова довжиною більше 2
// у верхньому регістрі
const words = ["js", "html", "css", "react"];
const longUppercaseWords = words
  .filter((word) => word.length > 2)
  .map((word) => word.toUpperCase());
console.log(longUppercaseWords); //["HTML", "CSS", "REACT"]
