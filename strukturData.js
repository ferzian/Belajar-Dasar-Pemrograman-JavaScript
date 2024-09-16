// destructuring object
const user = {
  id: 24,
  email: "aras@dicoding.com",
  name: "Arsy",
  nickname: "Aras",
  username: "aras123",
  password: "secret",
};

const { id, email } = user;

console.log(id, email);

//   delete properti
const userr = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};

delete userr.age;
console.log(userr);

console.log();
console.log("==============================================");

//   array literals
const fruits = ["apple", "banana", "cherry", "", "grape"];

fruits[3] = "manggo";

console.log(fruits);
console.log(fruits[1]);

// menambahkan data dan indeksnya
fruits.push("durian");
console.log(fruits[5]);

// menghapus data saja
delete fruits[0];
console.log(fruits);

// menghapus (indeks, jumlah indeks)
fruits.splice(1, 2);
console.log(fruits);

// menghapus indeks awal (shift)
fruits.shift();
console.log(fruits);

// menghapus indeks akhit (pop)
fruits.pop();
console.log(fruits);

// reverse array
fruits.reverse();
console.log(fruits);

// mengurutkan array
fruits.push("coconut");
fruits.sort();
console.log(fruits);

// array destructuring
const introduction = ["Hello", "Arsy"];
const [greeting, name] = introduction;
console.log(greeting);

console.log();
console.log("==============================================");

// map
const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);

console.log(productMap);

// menyimpan nilai ke dalam map menggunakan set
productMap.set("shirt", 100);
console.log(productMap);

// mengakses nilai di dalam map menggunakan get
console.log(productMap.get("cap"));

// menghapus nilai dalam map menggunakan delet
productMap.delete("shirt");
console.log(productMap);

console.log();
console.log("==============================================");

// set (tidak dapat data duplikat)
const mySet = new Set([1, 2, 3]);

console.log(mySet);

// menyimpan nilai ke dalam set menggunakan add
mySet.add(4)
console.log(mySet)

// mengakses nilai set menggunakan perulangan
for (const contoh of mySet){
  console.log(contoh)
}
console.log();

mySet.forEach((value) => console.log(value))

// menghapus nilai set menggunakan delete
mySet.delete(3)
console.log(mySet)