// async proses menggunakan callback dan error solution
// import { makeCoffee, sendCoffee } from './coffee.mjs';

// const order = 'Kopi Espresso';

// console.log(`Saya memesan ${order} di kafe.`);

// makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
//   if (makeCoffeeError) {
//     // Do something with error
//     console.error(makeCoffeeError);
//     return;
//   }

//   sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
//     if (sendCoffeeError) {
//       // Do something with error
//       console.error(sendCoffeeError);
//       return;
//     }

//     console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
//     console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
//   });
// });

console.log();
console.log("==========================================");

// penerapan callback menggunakan fs(file system)
// import { readFile } from "fs";

// readFile("./sample.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const greeting = data
//     .toString()
//     .replace("%name%", "Dicoding")
//     .replace("%your_name%", "JavaScript");

//   console.log(greeting);
// });

console.log();
console.log("==========================================");

// penanganan promise
// import { doSomething } from "./utils.mjs";

// function onFulfilled(doSomethingData) {
//     // Do your jobs when "fulfilled" happens…
//     console.log(doSomethingData);
// }

// function onRejected(doSomethingError) {
//     // Do your jobs when "rejected" happens…
//     console.log(doSomethingError);
// }

// doSomething().then(onFulfilled, onRejected);

console.log();
console.log("==========================================");

// chaining promise
import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
.then(
    (value) => {
        return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  );
