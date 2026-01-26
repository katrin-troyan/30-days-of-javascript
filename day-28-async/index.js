//Task 1 — setTimeout
// Завдання:
// виведи в консоль "Start"
// через 2 секунди — "Hello after 2 seconds"
// одразу після — "End"
console.log("Start");
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
console.log("End");

// Task 2 — Таймер кліку
// Є кнопка #delayBtn
// при кліку:
// через 3 секунди вивести "Button clicked with delay"
const delayBtn = document.querySelector("#delayBtn");
delayBtn.addEventListener("click", function () {
  setTimeout(() => {
    console.log("Button clicked with delay");
  }, 3000);
});

// Task 3 — setInterval
// Завдання:
// кожну секунду виводь у консоль число
// починай з 1
// збільшуй на 1

// Task 4 — Зупинка інтервалу
// Доповни Task 3:
// коли лічильник дійде до 5
// зупини setInterval
// виведи "Done"
let count = 1;
const interval = setInterval(() => {
  console.log(count);
  if (count === 5) {
    clearInterval(interval);
    console.log("Done");
  }
  count++;
}, 1000);
