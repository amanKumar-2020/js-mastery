MASTER OOP PROJECT CHALLENGE: Build a Mini Ride-Sharing System (Like Ola/Uber)

You must design a fully object-oriented system for a ride-sharing app with the following requirements:

Classes You MUST Create

1. User (Base class)
Properties:
id
name
phone
Methods:
displayInfo()

2. Rider (extends User)
Additional properties:
location
Methods:
requestRide(destination)

3. Driver (extends User)
Additional properties:
car
rating
isAvailable
Methods:
acceptRide(ride)
updateLocation(location)
Rate rider or ride?

4. Car (Composition)
Represents the driver’s car.
model
plateNumber
capacity

5. Ride
A ride request.
id
rider
driver
startLocation
destination
fare
Ride states: requested, accepted, completed, cancelled
Methods:
calculateFare()
completeRide()
cancelRide()

6. RideService (Handles ride matching)
Use static methods here.
Responsibilities:
Find available drivers
Assign the nearest driver
Create a Ride object
Return error if no driver available
Methods:
static createRide(rider, destination)
static findDriver(riderLocation)
static getAllRides()