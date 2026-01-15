const btn = document.querySelector("#btnClick");
btn.addEventListener("click", function () {
  console.log("Hello word");
});
const input = document.querySelector("input");
input.addEventListener("input", function (e) {
  console.log(e.target.value);
});
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted!", input.value);
});
