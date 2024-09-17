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