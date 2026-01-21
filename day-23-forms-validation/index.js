// Task 1 – Перехопити submit
// Знайди форму #registerForm
// Повісь на неї submit
// Виклич preventDefault()
// У консолі виведи: "Form submitted"

//Task 2 – Отримати дані
// У submit:
// отримай значення всіх трьох інпутів
// виведи в консоль об’єкт:
// { name: "...", email: "...", password: "..." }

// Task 3 – Валідація порожніх полів
// Перевір:
// якщо хоча б одне поле порожнє →
// у #error покажи текст:
// All fields are required
// І припини виконання функції.

// Task 4 – Перевірка довжини пароля
// Якщо:
// password.length < 6
// Показати помилку:
// Password must be at least 6 characters

// Task 5 – Успішне відправлення
// Якщо все ок:
// очистити текст помилки
// вивести в консоль:
// Success!
// очистити форму
// (підказка: form.reset())

const form = document.querySelector("#registerForm");
const btnSummit = document.querySelector("button");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const error = document.querySelector("#error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted");
  const nameForm = inputName.value.trim();
  const emailForm = inputEmail.value.trim();
  const passwordForm = inputPassword.value.trim();
  console.log({ name: nameForm, email: emailForm, password: passwordForm });

  if (!nameForm || !emailForm || !passwordForm) {
    error.textContent = "All fields are required";
    return;
  } else if (passwordForm.length < 6) {
    error.textContent = "Password must be at least 6 characters";
    return;
  } else {
    error.textContent = "";
    console.log("Success!");
    form.reset();
  }
});
