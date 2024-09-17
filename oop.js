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

console.log();
console.log("======================================");

// object composition (mengubah pewarisan)
class Character {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }
  
  canMove() {
    console.log(`${this.name} moves to another position!`);
  }
}

function canAttack(character) {
  return {
    attack: () => {
      console.log(`${character.name} attacks with a weapon!`);
    }
  };
}

function canDefend(character) {
  return {
    defend: () => {
      console.log(`${character.name} defends with a shield!`);
    }
  };
}

function canCastSpell(character) {
  return {
    castSpell: () => {
      console.log(`${character.name} casts a spell!`);
    }
  };
}

function createMonster(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character));
}

function createGuardian(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canDefend(character));
}

function createWizard(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canCastSpell(character));
}

function createWarrior(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character), canDefend(character));
}

const monster = createMonster('Monster');
monster.canMove();
monster.attack();

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();

const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();

const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();

console.log();
console.log("======================================");

// quiz
/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */
 

// Tulis kode di bawah ini

class Animal{
  constructor(name, age, isMammal){
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal{
  constructor(name, age){
    super(name, age, true);
  }
  eat(){
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal{
  constructor(name, age){
    super(name, age, false);
  }
  fly(){
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4);

console.log(myRabbit.eat())
console.log(myEagle.fly())