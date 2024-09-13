const age = 20
const name = 'Ferzian'
console.log(`Saya ${name}, umur saya ${age} tahun`);
console.log('Hallo, saya ' + name + '!. Umur saya ' + age + '.');

console.log('==================================================');

// dalam 1 baris terdapat 3 statement/instruksi
let agee = 20; const namee = 'Ferziann'; agee = 18; console.log(`Saya ${namee}, umur saya ${agee} tahun`);

console.log('==================================================');

// backtik sebagai template literals
const currentDay = new Date().getDay();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tanggal ${currentDay} - ${currentMonth} - ${currentYear}.`;

console.log(text);

console.log("==================================================")

// tipe data number
const result = 50 / 0;
console.log(result);

const resultt = Number('Dicoding');
console.log(resultt);

const apakek = Number ('20.060' + '2')
console.log(apakek);

const apakeka = Number (20.060 + 2)
console.log(apakeka);

console.log('==================================================')

// tipe data boolean
const isGreater = 5 > 2;

console.log(isGreater);
console.log('==================================================')

// mengubah ke string
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber + ' ' + typeof(strNumber));
console.log(strBoolean + ' ' + typeof(strNumber));

console.log('==================================================')

// mengubah ke number
const strNumberr = '123';
const strFloatt = '3.14';
const booleann = true;

const numFromString = Number(strNumberr);
const floatFromString = Number(strFloatt);
const numFromBoolean = Number(booleann);

console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

console.log('==================================================')

// konversi implisit (otomatis mengubah tipe data dan menyesuaikannya)
const ageee = 20;
const message = 'Umurku: ' + age;

console.log(message);