// default export
export default function myFunction() {
  console.log("Ini adalah function export default.");
}

// named export
export function myyFunction() {
  console.log("Ini adalah contoh named import.");
}

// export satu-satu dan semua (termasuk named export)
const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };

console.log('=================================================')

// export variabel dan function
const namee = 'Johny';
const favoriteFood = ['pizza', 'pasta', 'sushi'];
 
function sayHi(namee) {
  console.log(`Hi, ${namee}!`);
}
 
export { namee, favoriteFood, sayHi };