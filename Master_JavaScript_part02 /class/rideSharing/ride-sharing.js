// Design User (base) with properties: id, name, private phone. Add a displayInfo() method intended to be overridden.
class User {
  #phoneNumber;
  constructor(id, name, privatePhone) {
    this.id = id;
    this.name = name;
    this.#phoneNumber = privatePhone;
  }
  displayInfo() {
    console.log(`welcome ${this.name}`);
  }
}

// Design Rider (extends User) with location and simple wallet property.
class Rider extends User {
  #wallet;
  constructor(
    id,
    name,
    privatePhone,
    location = { lat: 0, lng: 0 },
    wallet = 0
  ) {
    super(id, name, privatePhone);
    this.#wallet = wallet;
    this.location = location;
  }
  displayInfo() {
    console.log(
      `Rider ${this.name} is at location lat: ${this.location.lat}, lng: ${this.location.lng}`
    );
  }
}

// Design Driver (extends User) with car (composition), location, isAvailable, and a private rating store (sum & count).
class Driver extends User {
  #rating;
  constructor(
    id,
    name,
    privatePhone,
    car,
    location = { lat: 0, lng: 0 },
    isAvailable = true
  ) {
    super(id, name, privatePhone);
    this.car = car;
    this.location = location;
    this.isAvailable = isAvailable;
    this.#rating = { total: 0, count: 0 };
  }
  displayInfo() {
    console.log(
      `Driver ${this.name} is at lat: ${this.location.lat}, lng: ${this.location.lng}, Available: ${this.isAvailable}`
    );
  }
}

// Design Car with model, plateNumber, capacity.
class Car {
  constructor(model, plateNumber, capacity = 4) {
    this.model = model;
    this.plateNumber = plateNumber;
    this.capacity = capacity;
  }
}

// Design Ride with properties...
class Ride {
  constructor(id, rider, startLocation, destination) {
    this.id = id;
    this.rider = rider;
    this.driver = null;
    this.startLocation = startLocation;
    this.destination = destination;
    this.fare = 0;
    this.state = "requested"; // requested, accepted, completed, cancelled

    // clearer timestamp names
    this.requestedAt = new Date();
    this.acceptedAt = null;
    this.completedAt = null;
    this.cancelledAt = null;
    this.cancellationReason = "";
  }

  accept(driver) {
    // MUST use this.state
    if (this.state !== "requested") {
      throw new Error(
        `Ride cannot be accepted because state is: ${this.state}`
      );
    }

    // check driver availability
    if (driver.isAvailable === false) {
      throw new Error(`Driver ${driver.name} is not available`);
    }

    // assign driver
    this.driver = driver;
    this.state = "accepted";
    this.acceptedAt = new Date();
  }
}
