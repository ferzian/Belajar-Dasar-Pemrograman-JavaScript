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
// import { makeCoffee, sendCoffee } from "./coffee.mjs";

// const order = "Kopi Espresso";

// console.log(`Saya memesan ${order} di kafe.`);

// makeCoffee(order)
// .then(
//   (value) => {
//     return sendCoffee(value);
//   },
//   (error) => {
//     console.error(error.message);
//     throw error;
//   }
// )
// .then(
//   (value) => {
//     console.log(`Pramusaji memberikan ${value} pesanan.`);
//     console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
//   },
//   (error) => {
//     console.error(error.message);
//     throw error;
//   }
// );

console.log();
console.log("==========================================");

// penggunaan sync dengan menerapkan async dan await
// import { doSomething } from "./utils.mjs";

// async function promiseWithAsyncAwait() {
//   try {
//     console.log("Start.");

//     const result = await doSomething();
//     console.log(result);

//     console.log("End.");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// promiseWithAsyncAwait();

/* Output:
Start.
You did it.
End.
*/

console.log();
console.log("==========================================");

// concurrency dengan promise

// pemanfaatan promise .all jika salah satu promise gagal
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('Success');
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log('Failed');
//     console.log(error.message);
//   });

/* Output:
    Failed
    Ups!
    */

console.log();

// semua promise akan dikembalikan meskipun ada yang gagal menggunakan promise .allSettled
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('Success');
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log('Failed');
//     console.log(error.message);
//   });

/* Output:
    Success
    [
      { status: 'fulfilled', value: 1 },
      {
        status: 'rejected',
        reason: Error: Ups!
        at Timeout._onTimeout (file:///home/nurrizkiadip/static-method.mjs:2:75)
        at listOnTimeout (node:internal/timers:573:17)
        at process.processTimers (node:internal/timers:514:7)
        },
        { status: 'fulfilled', value: 3 }
        ]
        */

console.log();
console.log("==========================================");

// quiz
import { API, sampleErrorData, sampleSuccessData } from "./support.mjs";

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
function processData(data) {
  // kode di bawah hanya untuk melihat nilai data. Silakan hapus untuk menjawab kuis.
  return Promise.all(
    data.map(
      (item) =>
        API.fetch(item.delay, item.simulateError)
          .then((result) => result) // Resolusi jika berhasil
          .catch((error) => Promise.reject(error)) // Menolak jika ada error
    )
  );
}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']
