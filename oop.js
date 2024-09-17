// ES6 class (constructor function)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  identity() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

// Membuat instance dari Person
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob

person1.eat(); // Output: Alice is eating
person2.eat(); // Output: Bob is eating
person1.identity();

console.log();
console.log("======================================");

// inheritance (pewarisan)
class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }
  
  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  airDrop() {
    console.log("iOS have a behavior AirDrop");
  }
}

class Android extends SmartPhones {
  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const ios = new iOS("black", "A", "12 Pro Max");
const android = new Android("white", "B", "Galaxy S21");

ios.charging(); // Output: Charging 12 Pro Max
ios.airDrop(); // Output: iOS have a behavior AirDrop

android.charging(); // Output: Charging Galaxy S21
android.splitScreen(); // Output: Android have a Split Screen

console.log();
console.log("======================================");

// encapsulation
class CoffeeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this._temperature = 90;
  }
  
  set temperature(temperature) {
    console.log("you are not allowed to change the temperature");
  }
  
  get temperature() {
    return this._temperature;
  }
}

const coffee = new CoffeeMachine(10);
console.log("Sebelum diubah: ", coffee.temperature);
coffee.temperature = 100;
console.log("Setelah diubah: ", coffee.temperature);

console.log();

// nilai tidak dapat diubah (encapsulation)
class CoffeeMachinee {
  #temperaturee = 90;
  
  constructor(waterAmountt) {
    this.waterAmountt = waterAmountt;
    this.#temperaturee = this.#defaultTemperaturee();
  }
  
  set temperaturee(temperaturee) {
    console.log('you are not allowed to change the temperature');
  }
  
  get temperaturee() {
    return this.#temperaturee;
  }
  
  #defaultTemperaturee() {
    return 90;
  }
}

console.log();
console.log("======================================");

// polymorphism
class SmartPhoness {
  constructor(colorr, brandd, modell) {
    this.colorr = colorr;
    this.brandd = brandd;
    this.modell = modell;
  }

  chargingg() {
    console.log(`Charging ${this.modell}`);
  }
}

class Androidd extends SmartPhoness {
  constructor(colorr, brandd, modell, device) {
    super(colorr, brandd, modell);
    this.device = device;
  }

  chargingg() {
    super.chargingg(); //boleh  ada boleh tidak
    console.log(`Charging ${this.modell} with fast charger`);
  }

  splitScreenn() {
    console.log('Android have a Split Screen');
  }
}

const androidd = new Androidd('white', 'B', 'Galaxy S21', 'smart TV');

androidd.chargingg();