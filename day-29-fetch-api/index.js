// Task 1 — GET запит
// Завдання:
// отримай список постів з:
// https://jsonplaceholder.typicode.com/posts
// виведи в консоль:
// масив постів
// кількість постів

// Task 2 — Вивести заголовки
// Доповни Task 1:
// пройдися по масиву постів
// виведи в консоль тільки title кожного поста

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const numberPost = posts.length;
    const titles = posts.map((post) => post.title);
    console.log(posts);
    console.log(numberPost);
    console.log(titles);
    return posts;
  } catch (error) {
    console.log("Error loading posts");
  }
}
getData();

// Task 3 — Fetch + DOM
// Є HTML:
// <ul id="posts"></ul>
// Завдання:
// отримай пости
// додай у <ul>:
// по одному <li>
// текст = title

const listsPost = document.querySelector("#posts");

async function renderPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    posts.forEach((post) => {
      const li = document.createElement("li");
      li.textContent = post.title;
      listsPost.append(li);
    });
  } catch (error) {
    console.log("Error loading posts");
  }
}
renderPosts();

// Task 4 — Обробка помилки
// Завдання:
// зроби запит на неправильний URL
// якщо помилка:
// виведи в консоль "Error loading posts"

// async function problem() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/WRONG");
//     const posts = await response.json();
//     console.log(posts);
//   } catch (error) {
//     console.log("Error loading posts");
//   }
// }
// problem();
