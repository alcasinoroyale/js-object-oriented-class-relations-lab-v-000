let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = { drivers: [], passengers: [], trips: []};

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);

    trips() {
      return store.trips.filter(trip => {
        return trip.DriverId === this.id;
      })
    }
  }
}
