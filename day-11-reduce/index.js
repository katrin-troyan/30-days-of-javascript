//array.reduce((accumulator, currentValue) => {
//   return newAccumulator;
// }, initialValue);

//accumulator (acc)	результат на даний момент
// currentValue (curr)	поточний елемент
// initialValue	стартове значення

/*Task 1*/
//Знайди суму через reduce
// const numbers = [2, 4, 6, 8];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 20

/*Task 2*/
//Знайди добуток
// const numbers = [1, 2, 3, 4];
// const product = numbers.reduce((acc, num) => acc * num, 1);
// console.log(product); // 24

/*Task 3*/
//Отримай новий масив з парних чисел
// const numbers = [1, 2, 3, 4, 5, 6];
// const evensNumbers = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc.push(num);
//   }
//   return acc;
// }, []);
// console.log(evensNumbers); // [2, 4, 6]

/*Task 4*/
//Найбільше число
// const numbers = [10, 5, 20, 8];
// const maxNumber = numbers.reduce((acc, num) => {
//   return acc > num ? acc : num;
// }, numbers[0]);
// console.log(maxNumber); // 20

/*Task 5*/
//Отримай обʼєкт з кількістю кожного слова:
const words = ["js", "html", "css", "js", "react", "js"];
const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(wordCount); // { js: 3, html: 1, css: 1, react: 1 }
