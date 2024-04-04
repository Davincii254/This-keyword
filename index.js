// this as a Method
// Example one 
// Method using 'this' to access object properties
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(person.fullName()); // Output: John Doe

  
//   Example 2
// Another example demonstrating 'this' in a method
const calculator = {
    num1: 5,
    num2: 10,
    multiply() {
      return this.num1 * this.num2;
    }
  };
  
  console.log(calculator.multiply()); // Output: 50

  
//  this as a Constructor
// Example 1
// Constructor function using 'this' to initialize object properties
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
      return `${this.firstName} ${this.lastName}`;
    };
  }
  
  const john = new Person('John', 'Doe');
  console.log(john.fullName()); // Output: John Doe

  
//   EXample 2
// Another example of using 'this' in a constructor function
function Circle(radius) {
    this.radius = radius;
    this.area = function() {
      return Math.PI * this.radius ** 2;
    };
  }
  
  const circle1 = new Circle(5);
  console.log(circle1.area()); // Output: 78.54

  

//   this as a Function
// EXample 1
// Function using 'this' within the context of a specific object
function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const obj1 = {
    name: 'Alice'
  };
  
  const obj2 = {
    name: 'Bob'
  };
  
  greet.call(obj1); // Output: Hello, Alice!
  greet.call(obj2); // Output: Hello, Bob!

  

//   Example 2
// Another example demonstrating 'this' in a function
function getPrice(currency) {
    return `${this.price} ${currency}`;
  }
  
  const product = {
    name: 'Phone',
    price: 500
  };
  
  console.log(getPrice.call(product, 'USD')); // Output: 500 USD
  