// Task 1 – Зберегти ім’я користувача
// Маємо input #nameInput і кнопку #saveBtn
// Користувач вводить ім’я → натискає кнопку → зберігаємо в localStorage

const nameInput = document.querySelector("#nameInput");
const saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  localStorage.setItem("userName", name);
});
// Task 2 — Привітання
// При завантаженні сторінки:
// перевір, чи є імʼя в localStorage
// якщо є — виведи в консоль:
// Welcome back, NAME
const savedName = localStorage.getItem("userName");
if (savedName) {
  console.log("Welcome back, " + savedName);
}

// Task 3 — Масив у localStorage
// Є масив:
// ["Buy milk", "Do homework"]
// Завдання:
// зберегти його в localStorage
// потім прочитати назад
// вивести у консоль як масив (не рядок)
const tasks = ["Buy milk", "Do homework"];
localStorage.setItem("tasks", JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(savedTasks);
// Task 4 — Очищення
// Зроби кнопку:
// яка видаляє тільки масив завдань
// не чіпаючи інші ключі
const btn = document.querySelector("#cleanBtn");

btn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  localStorage.setItem("userName", name);
});
