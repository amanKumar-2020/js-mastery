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
car1.displayInfo();
