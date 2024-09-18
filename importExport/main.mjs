// default import
import result from "./anotherfile.mjs";

result();

console.log();

// named import
import { myyFunction } from "./anotherfile.mjs";

myyFunction();

console.log();

// import satu-satu (termasuk named import)
import { name, email, age } from "./anotherfile.mjs";

console.log(name);
console.log(email);
console.log(age);

console.log();

// import semua
import * as variable from "./anotherfile.mjs";

console.log(variable.name);
console.log(variable.email);
console.log(variable.age);

console.log();

// import dari 2 modul
import { myFunction as userFunction } from "./user.mjs";
import { myFunction as customerFunction } from "./customer.mjs";

userFunction();
customerFunction();

console.log();
console.log("===========================================");

// import variabel dan function
import * as user from "./anotherfile.mjs";

console.log(user.namee);
console.log(user.favoriteFood);
user.sayHi(user.namee);

console.log();
console.log("===========================================");

// quiz
/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */

import unique from "./utils.mjs";
unique();

import { splitString } from "./utils.mjs";

const string = "saippuakivikauppias";
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);
    