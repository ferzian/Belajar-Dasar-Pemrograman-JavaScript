// JSDoc tag
/**
 * Get add operation of two numbers.
 *
 * @param {number} numA - The first numeric operand
 * @param {number} numB - The second numeric operand
 * @returns {number} Sum of numA and numB
 */
function add(numA, numB) {
  return numA + numB;
}

console.log();
console.log("===========================================");

// flow type check
const myName = "Flow";

function greet(name) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}

greet("JavaScript");

console.log();
console.log("===========================================");

// pengujian program
// Fungsi untuk menghitung total harga belanjaan
function calculateTotal(shoppingCart) {
  const total = 0;

  return shoppingCart.reduce((accumulator, cartItem) => {
    if (typeof cartItem.price === "number") {
      return accumulator + cartItem.price;
    } else {
      console.error(`Tipe data cartItem.price tidak valid:`, cartItem);
      return accumulator;
    }
  }, total);
}

// Contoh data belanjaan dengan beberapa kasus edge
const shoppingCart = [
  { name: "Apple", price: 300 },
  { name: "Banana", price: 120 },
  { name: "Orange", price: 130 },
  { name: "Watermelon", price: "160" },
  { name: "Pineapple", price: null },
  { name: "Grape", price: null },
];

// Memanggil fungsi dan mencetak hasilnya
console.log(`Total belanjaan: Rp ${calculateTotal(shoppingCart)}`);

console.log();
console.log("===========================================");

