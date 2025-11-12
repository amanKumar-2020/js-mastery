// 1️⃣ Basic class setup
// 👉 Write a class Car with properties brand, model, and year.
//  Add a method displayInfo() that prints all details of the car.

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(
      `Your car brand is ${this.brand}, model name is ${this.model}, made in ${this.year}.`
    );
  }
  static numberOfWheel(){
    return 4;
  }
}

let car1 = new Car("Toyota", "Corolla", 2022);
let car2 = new Car("BMW", "X5", 2024);
let car3 = new Car("Audi", "Q7", 2023);

car1.displayInfo();

// -----------------------XXXXXX--------------------------XXXXXXX----------------
// 2️⃣ Add static method
// 👉 Add a static method numberOfWheels() inside Car that always returns 4 (since every car has 4 wheels).
// Try calling it using both the class and an instance — see what happens.

// console.log(car1.numberOfWheel)   // it give undefined 
console.log(Car.numberOfWheel());
