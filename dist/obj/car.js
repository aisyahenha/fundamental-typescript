"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(vehicle) {
        if (vehicle) {
            this.id = vehicle.id;
            this.name = vehicle.name;
            this.brand = vehicle.brand;
            this.type = vehicle.type;
            this.isStarted = vehicle.isStarted;
        }
    }
    startEngine() {
        this.isStarted = true;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.default = Car;
