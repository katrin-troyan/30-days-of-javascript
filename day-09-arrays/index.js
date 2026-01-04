/*Task 1*/
//Створення масиву
// Створи масив з 5 чисел і виведи:
// перший елемент
// останній елемент
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[4]);
//console.log(numbers[numbers.length - 1]);

/*Task 2*/
//Сума елементів
//Знайди суму всіх чисел у масиві.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

/*Task 3*/
//Парні числа
// Виведи тільки парні числа з масиву.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

/*Task 4*/
//Зміна масиву
// додай число в кінець
// видали перше число
// виведи масив
numbers.push(6);
numbers.shift();
console.log(numbers);

/*Task 5*/
//Міні-челендж
// Знайди найбільше число в масиві (без Math.max).
function maxNumber(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
сonsole.log(maxNumber(numbers)); // 6
