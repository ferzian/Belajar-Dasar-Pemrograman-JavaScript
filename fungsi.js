let counter = 1;
function convertCelciusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log(`Hasil konversi ke ${counter} :, ${temperatureInFahrenheit}`);
  counter++;
}

const temperatureInCelcius = 90;
const dua = 45;

// akan menjalankan isi function
convertCelciusToFahrenheit(temperatureInCelcius);
convertCelciusToFahrenheit(dua);

// hanya menampilkan nilai function
console.log(convertCelciusToFahrenheit);

console.log("================================================");

// return value
function sumNumbers(a, b) {
  const result = a + b;
  return result;
}

const result = sumNumbers(2, 4);
console.log("2 + 4:", result);

console.log("================================================");

//   function expression 1
function multiply(a, b) {
    return a * b;
}

function divide(d, c) {
    return d / c;
}

function calculate(operation, numA, numB) {
    return operation(numA, numB);
}

const resultt = calculate(multiply, 2, 4);
const divided = calculate(divide, 8, 4);
console.log(
    `Hasil kali dari 2 * 4 = ${resultt}, hasil bagi dari 8 : 4 = ${divided}`
);

//   function expression 2
function multiplier(x) {
    return function (num) {
        return x * num;
    };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(10));
console.log(triple(11));

console.log("================================================");

// arrow function
let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi regular:', temperatureInFahrenheit);

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi arrow function:', temperatureInFahrenheit);

let temperatureInFahrenheitt;

// Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax = 
  (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi arrow function ringkas:', temperatureInFahrenheit);

console.log("================================================");

// quiz
/**
 * TODO:
 * 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
 * 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
 *    "Halo! Nama saya (name). Saya tinggal di (origin)."
 *
 *    Contoh: Jika `name` bernilai 'Fulan' dan `origin` bernilai 'Jakarta', fungsi harus mengembalikan:
 *    "Halo! Nama saya Fulan. Saya tinggal di Jakarta.".
 *
 * 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
 * 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
 * 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
 */


function hello (name, origin = 'Bandung'){
    return console.log(`Halo! Nama saya ${name}. Saya tinggal di ${origin}.`);
  }

rahmat = hello ('Rahmat', 'Semarang');
indra = hello ('Indra');