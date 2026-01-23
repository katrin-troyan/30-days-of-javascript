// Task 1 — Event object
// На кнопку #btn:
// повісь click
// виведи в консоль:
// e.type
// e.target

// Task 2 — this
// На ту ж кнопку:
// виведи в консоль this
// порівняй з e.target
const btnClick = document.querySelector("#btnClick");

btnClick.addEventListener("click", function (e) {
  console.log(e.type);
  console.log(e.target);
  console.log(this);
});

// Завдання:
// повісь один click на <ul>
// при кліку на <li>:
// виведи текст клікнутого елемента
// використай event.target

const listProduct = document.querySelector("#listProduct");

listProduct.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") console.log(event.target.textContent);
});

// Task 4 — Стрілка vs function
// Зроби два обробники:
// один через function
// один через () => {}
// Виведи this у кожному і подивись різницю.
// Day 25: event object and this

const btnFunction = document.querySelector("#btnFunction");
const btnArrow = document.querySelector("#btnArrow");
btnFunction.addEventListener("click", function (e) {
  console.log(this);
});
btnArrow.addEventListener("click", (e) => {
  console.log(this);
});
