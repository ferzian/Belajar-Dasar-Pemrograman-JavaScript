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

console.log();

// teknik currying
function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}.`;
  };
}

function multipleBy(x) {
  return function (y) {
    return x * y;
  };
}

const coolifier = adjectivfy("keren");
const funnifier = adjectivfy("seru");

const multipleByFive = multipleBy(5);

console.log(coolifier("Dicoding")); // Output: Dicoding keren.
console.log(funnifier("JavaScript")); // Output: JavaScript seru.
console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10)); // Output: 50

console.log();

// komposisi fungsi
function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

function compose(f, g) {
  return (x) => {
    return f(g(x));
  };
}

const addOneAndSquare = compose(square, addOne);

console.log(addOneAndSquare(2)); // output: 9

console.log();
console.log("==================================================");

// recursive
function generateArray(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArray(n - 1), n];
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

console.log();
console.log("==================================================");

// immutability
function max(arrayOfNumber) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
  return [...arrayOfNumber].sort((a, b) => a - b).pop();
}

function registerEmail(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]

const person = {
  name: "John",
  username: "johndoe",
};

const personWithEmail = registerEmail(person, "john@dicoding.com");

console.log(person); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

console.log();

// array map
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => `${name}!`);

console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

console.log();

// array filter
const truthyArray = [1, "", "Halo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);

console.log(eligibleForScholarshipStudents);

/**
 * Output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 *
 */

console.log();

// array reduce
const studentss = [
  {
    name: "Harryy",
    score: 60,
  },
  {
    name: "Jamess",
    score: 88,
  },
  {
    name: "Ronn",
    score: 90,
  },
  {
    name: "Bethyy",
    score: 75,
  },
];

const totalScoree = studentss.reduce((acc, student) => acc + student.score, 0);

console.log(totalScoree); // Output: 313

console.log();

// immutable object
const user = {
  name: "John",
  email: "john@dicoding.com",
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
user.email = "doe@dicoding.com";
console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }

// immutable object secara rekursi (benar benar tidak bisa diubah)
function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: "Bob",
  email: "bob@dicoding.com",
  preferences: {
    newsletter: true,
    notifications: "weekly",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = "Los Angeles";

console.log(complexUser.preferences.address.city); // Output: 'New York'
