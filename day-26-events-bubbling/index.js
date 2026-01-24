// повісь submit на форму
// заборони перезавантаження сторінки
// виведи в консоль: "Form submitted"

const formLogin = document.querySelector("#loginForm");
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted");
});

// повісь click
// заборони перехід
// виведи в консоль: "Link blocked"
const googleLink = document.querySelector("#googleLink");
googleLink.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Link blocked");
});

// повісь click на #parent
// повісь click на #child
// клікни на кнопку
// подивись порядок логів у консолі
// ❗ нічого не зупиняй

// зупини bubbling при кліку на кнопку
// перевір, який лог зник
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", function () {
  console.log("parent");
});

child.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("child");
});

//повісь ОДИН click на <ul>
// заборони стандартну дію <a>
// виведи текст пункту меню, на який клікнули
const listsMenu = document.querySelector("#menu");
listsMenu.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    e.preventDefault();
    console.log(e.target.textContent);
  }
});
