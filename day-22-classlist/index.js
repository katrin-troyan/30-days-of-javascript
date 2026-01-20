//Task 1
// При натисканні на кнопку #add:
// додай до #title клас red

const btnAdd = document.querySelector("#add");
const titleRed = document.querySelector("#titleRed");

btnAdd.addEventListener("click", function () {
  titleRed.classList.add("red");
});

//Task 2
// При натисканні на кнопку #remove:
// видали у #title клас red
const btnRemove = document.querySelector("#remove");

btnRemove.addEventListener("click", function () {
  titleRed.classList.remove("red");
});

// Task 3
// При натисканні на кнопку #toggle:
// перемикай у #title клас bold
const btnToggle = document.querySelector("#toggle");

btnToggle.addEventListener("click", function () {
  titleRed.classList.toggle("bold");
});

//Task 4
// При натисканні на кнопку #check:
// перевір, чи є у #title клас bold
// виведи в консоль:
// true  або false

const btnCheck = document.querySelector("#check");

btnCheck.addEventListener("click", function () {
  if (titleRed.classList.contains("bold")) {
    console.log(true);
  } else {
    console.log(false);
  }
});

//Task 5
// Зроби так, щоб:
// при кліку на будь-який <li>
// у нього перемикався клас highlight
// (кожен елемент окремо!)

const list22 = document.querySelector("#list22");

list22.addEventListener("click", function (e) {
  e.target.classList.add("highlight");
});
