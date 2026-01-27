// Task 1 — Один fetch
// Зроби fetch на:
// https://jsonplaceholder.typicode.com/users
// Отримай масив користувачів
// Виведи в консоль:
// масив
// кількість користувачів

// async function getData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
//     console.log(users.length);
//   } catch (error) {
//     console.log("Error loading data");
//   }
// }
// getData();

// Task 2 — Promise.all
// Зроби два fetch одночасно:
// /users
// /posts
// Використай Promise.all
// Виведи в консоль:
// кількість users
// кількість posts

// async function getData() {
//   try {
//     const [usersResponse, postsResponse] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users"),
//       fetch("https://jsonplaceholder.typicode.com/posts"),
//     ]);
//     const users = await usersResponse.json();
//     const posts = await postsResponse.json();
//     console.log(users.length);
//     console.log(posts.length);
//   } catch (Error) {
//     console.log("Error loading data");
//   }
// }
// getData();

// Task 3 — Fetch + DOM
// Є HTML:
// <ul id="users"></ul>
// Завдання:
// отримай користувачів
// додай у <ul>:
// по одному <li>
// текст = name
// const listUsers = document.querySelector("#users");
// async function getData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     users.forEach((users) => {
//       const li = document.createElement("li");
//       li.textContent = users.name;
//       listUsers.append(li);
//     });
//   } catch (error) {
//     console.log("Error loading data");
//   }
// }
// getData();

// Task 4 — Обробка помилки
// Зроби запит на неправильний URL
// Оброби через try / catch
// Якщо помилка — виведи:
// "Failed to load data"
// async function getData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/WRONG");
// if (!response.ok) {
//   throw new Error("Request failed");
// }
// const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log("Failed to load data");
//   }
// }
// getData();
