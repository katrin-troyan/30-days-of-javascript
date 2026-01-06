/*Task 1*/
const product = {
  title: "Laptop",
  price: 1200,
  inStock: true,
};

console.log(product.title);
console.log(product.price);

/*Task 2*/
product.price = 1000;
product.category = "Electronics";

console.log(product);

/*Task 3*/
delete product.inStock;
console.log(product);

/*Task 4*/
for (let key in product) {
  console.log(key + ": " + product[key]);
}

/*Task 5*/
//Напиши функцію, яка приймає обʼєкт і рахує кількість його властивостей
function countKey(product) {
  let count = 0;

  for (let key in product) {
    count++;
  }
  return count;
}
console.log(countKey(product)); // 3
