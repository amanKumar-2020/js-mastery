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
// console.log(Car.numberOfWheel());

// -----------------------XXXXXX--------------------------XXXXXXX----------------

// Inheritance
// 👉 Create a class ElectricCar that extends Car. Add one extra property batteryLife and a method displayBattery() that prints the battery life.

class ElectricCar extends Car {
  constructor(brand, model, year, batteryLife) {
    super(brand, model, year);
    this.batteryLife = batteryLife;
  }
  displayBattery(){
console.log(`Battery life of your ${this.brand} ${this.model} is ${this.batteryLife} years.`);
  }
}

let car4 = new ElectricCar("Tesla", "Model 3",2024, 5);
console.log(car4);

car4.displayBattery()