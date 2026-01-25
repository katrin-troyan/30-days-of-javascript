const btnAddTask = document.querySelector("#addTask");
const inputTask = document.querySelector("#taskInput");
const ulTask = document.querySelector("#taskList");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  ulTask.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";

    btnDelete.addEventListener("click", function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });

    li.append(btnDelete);
    ulTask.append(li);
  });
}

btnAddTask.addEventListener("click", function () {
  const newTask = inputTask.value.trim();
  if (!newTask) return;

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  inputTask.value = "";
  renderTasks();
});

renderTasks();
