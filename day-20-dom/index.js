// HTML для роботи:
// <h1 id="title">Заголовок</h1>
// <p class="text">Перший абзац</p>
// <p class="text">Другий абзац</p>
// <a href="#">Посилання</a>
// <div class="box"></div>

// Завдання:
// Змініть текст заголовка #title на будь-який новий.
// Змініть HTML другого абзацу .text:nth-child(2) на <strong>Новий текст</strong>.
// Змініть атрибут href у посиланні на https://google.com.
// Змініть стиль .box: фон — синій, ширина 100px, висота 100px.
// Виведіть в консоль усі абзаци та переберіть їх через forEach, додаючи до кожного текст "!".

const title = document.querySelector("#title");
const texts = document.querySelectorAll(".text");
const link = document.querySelector("a");
const box = document.querySelector(".box");
const paragraf = document.querySelectorAll("p");

title.textContent = "New заголовок";
texts[1].innerHTML = "<strong>Новий текст</strong>";
link.setAttribute("href", "https://google.com");
box.style.background = "blue";
box.style.width = "100px";
box.style.height = "100px";
paragraf.forEach((paragraf) => {
  console.log(`${paragraf.textContent}!`);
});

/*Task 1*/
// Знайди елемент #mainTitle
// Зміни його текст на: "Практика з DOM"
const titleMain = document.querySelector("#mainTitle");
titleMain.textContent = "Практика з DOM";

/*Task 2*/
// Виведи в консоль:
// кількість елементів <li> у списку
// Додай до тексту кожного <li> слово " - learned"
const items = document.querySelectorAll("li");

console.log(items.length);
items.forEach((item) => {
  item.textContent = item.textContent + " - learned";
});

/*Task 3*/
//Зміни у картинки #image:
//атрибут src → "new.jpg"
//атрибут "alt" → "нове зображення"
const foto = document.querySelector("#image");

foto.setAttribute("src", "./image/2.jpg");
foto.setAttribute("alt", "нове зображення");

/*Task 4*/
//При натисканні на кнопку #changeTitle:
//Взяти текст із інпуту #newText
//Підставити його як новий текст заголовка #mainTitle
//(поки без submit і форм — просто click)
const btnTitle = document.querySelector("#changeTitle");
const text = document.querySelector("#newText");

btnTitle.addEventListener("click", function () {
  const newText = text.value;
  titleMain.textContent = newText;
});

/*Task 5*/
//При натисканні на кнопку #changeList:
//Змінити стилі для всього списку #list:
//background → lightgray
//padding → 20px
const btnList = document.querySelector("#changeList");
const listAll = document.querySelector("#list");

btnList.addEventListener("click", function () {
  listAll.style.background = "lightgray";
  listAll.style.padding = "20px";
});
