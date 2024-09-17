// ES6 class (constructor function)
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    eat() {
      console.log(`${this.name} is eating`);
    }
    
    identity(){
      console.log(`${this.name} is ${this.age} years old`);
    }
  }
  
  // Membuat instance dari Person
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  console.log(person1.name); // Output: Alice
  console.log(person2.name); // Output: Bob
  
  person1.eat(); // Output: Alice is eating
  person2.eat(); // Output: Bob is eating
  person1.identity();


  console.log()
  console.log('======================================')

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
      console.log('iOS have a behavior AirDrop');
    }
  }
  
  class Android extends SmartPhones {
    splitScreen() {
      console.log('Android have a Split Screen');
    }
  }
  
  const ios = new iOS('black', 'A', '12 Pro Max');
  const android = new Android('white', 'B', 'Galaxy S21');
  
  ios.charging(); // Output: Charging 12 Pro Max
  ios.airDrop(); // Output: iOS have a behavior AirDrop
  
  android.charging(); // Output: Charging Galaxy S21
  android.splitScreen(); // Output: Android have a Split Screen