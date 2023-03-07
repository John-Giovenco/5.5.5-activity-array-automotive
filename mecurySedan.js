//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule {
    constructor(make,model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassenger = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduledService = False;
    }

    checkService () {
        if (this.mileage > 30000) {
            this.cheduleService = true
            return this.scheduleService;
        }
    }
    
    start() {
        if (this.fuel > 0) {
            console.log("engine has Started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers)
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + "is full");
            }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
