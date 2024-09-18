// deklarasi (menambahkan nilai baru)
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

console.log();
console.log("==================================================");

// pure function
function addWith(value, addingValue) {
  return value + addingValue;
}

const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`); // Output: result1 is 1

const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`); // Output: result2 is 2

const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`); // Output: result3 is 3

console.log(result1, result2, result3); // Output: 1, 2, 3

console.log();
console.log("==================================================");

// high order function
function apply(operation, ...args) {
  // kita bisa menambahkan kode lain sebelum operation dijalankan.

  return operation(...args);
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - (disc / 100) * value;
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log("Product price:", productPrice); // Output: Product price: 400
console.log("With discount 25%:", withDiscount); // Output: With discount 25%: 300
