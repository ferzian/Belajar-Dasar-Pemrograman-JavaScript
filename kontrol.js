// ternary operator
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;
// let result = condition ? value1 : value2;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// switch case
const fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("I am a banana.");
    break;
  case "apple":
    console.log("I am an apple.");
    break;
  case "orange":
    console.log("I am an orange.");
    break;
  case "strawberry":
    console.log("I am a strawberry.");
    break;
  default:
    console.log("I am not a fruit. I am a programmer.");
}

console.log();
console.log("=============================================");

// for loop
for (let i = 0; i < 5; i++) {
  console.log(`Angka ke-${i} adalah ${i}`);
}

//for in
const person = { name: "Fulan", origin: "Bandung", birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

// for of
const names = ["Bebek", "Ayam", "Telor", "Tempe"];

for (const item of names) {
  console.log(item);
}

// while
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

// do while
let ii = 0;

do {
  console.log(`Angka ke-${ii} adalah ${ii}.`);
  ii++;
} while (ii < 5);

// control statement break
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    break;
  }

  console.log(i);
}

// control statement continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log();
console.log("=============================================");

// throwing error
const pricee = 100;
const paid = 80;

// if (paid < pricee) {
//   throw new Error("Pembayaran kurang");
// }

// catching error
try {
  console.log("Memulai program");
  throw new Error("Error: Program berhenti");
  console.log("Mengakhiri program");
} catch (err) {
  console.log("Karena ada error, blok ini akan dieksekusi");
}

// finally
try {
  console.log("Ini try block");
  throw new Error("Error: Program berhenti");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}

console.log();
console.log("=============================================");

// studi kasus
function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== "number") {
      throw new Error("Invalid input. Please provide an array of numbers.");
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
      predicate = "A";
    } else if (grade >= 80) {
      predicate = "B";
    } else if (grade >= 70) {
      predicate = "C";
    } else if (grade >= 60) {
      predicate = "D";
    } else {
      predicate = "E";
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}

try {
  const studentGrades = [95, 85, 65, 80, 70];
  checkGrades(studentGrades);
} catch (e) {
  console.error(e);
}

console.log();
console.log("=============================================");

// quiz
function categorizeNumber(input) {
  /**
   * TODO:
   * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
   * Dengan ketentuan sebagai berikut:
   * 1. Jika input bukan number, bangkitkan (throw) error.
   * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
   * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
   * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
   * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
   * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
   */
  
  // 1. Jika input bukan number, bangkitkan (throw) error.
  if (typeof input !== "number") {
    throw new Error("Input harus berupa bilangan bulat");
  }

  // Fungsi untuk memeriksa bilangan prima
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
  if (isPrime(input)) {
    return "Prima";
  }

  // 5. Jika input adalah nol, kembalikan dengan nilai "Nol".
  if (input === 0) {
    return "Nol";
  }

  // 6. Jika input negatif, kembalikan dengan nilai "Negatif".
  if (input < 0) {
    return "Negatif";
  }

  // 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
  if (input % 2 === 0) {
    return "Genap";
  }

  // 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
  return "Ganjil";
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
