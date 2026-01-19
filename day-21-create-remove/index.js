// Завдання

// 1️⃣ При натисканні на кнопку #addTask:
// Створити новий <li>
// Взяти текст із інпуту #taskInput
// Додати його в кінець списку #taskList

// 2️⃣ Додати до кожного нового <li> кнопку “Видалити”, яка видаляє цей елемент зі списку при натисканні

// 3️⃣ Після додавання завдання, очистити інпут

const btnTask = document.querySelector("#addTask");
const lists = document.querySelector("#taskList");
const textInput = document.querySelector("#taskInput");

btnTask.addEventListener("click", function () {
  const li = document.createElement("li");
  const newText = textInput.value;
  li.textContent = newText;

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Видалити";
  btnDelete.addEventListener("click", function () {
    li.remove();
  });

  li.append(btnDelete);
  lists.append(li);
  textInput.value = "";
});
