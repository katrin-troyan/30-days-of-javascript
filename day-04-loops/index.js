/*Task 1*/
for (let i = 1; i <= 10; i++) {
  //console.log(i);
}
/*Task 2*/
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    //console.log(i);
  }
}
/*Task 3*/
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
//console.log(sum);
/*Task 4*/
for (let i = 10; i >= 1; i -= 1) {
  //console.log(i);
}
/*Task 5*/
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  //console.log(i);
}
/*Task 6*/
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  //console.log(i);
}
/*Task 7*/

for (let i = 1; i <= 10; i++) {
  //console.log(`5 * ${i} = ${5 * i}`);
}
/*Task 8*/
let total = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}
console.log(total);
/*Task 9*/
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
/*Task 10*/
for (let i = 50; i >= 0; i -= 5) {
  console.log(i);
}
/*Task 11*/
for (let i = 1; i <= 10; i++) {
  console.log(`3 × ${i} = ${i * 3}`);
}
/*Task 12*/
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) continue;
  if (i > 15) break;
  console.log(i);
}
