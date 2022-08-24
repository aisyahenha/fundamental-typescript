"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = __importDefault(require("./obj/car"));
const car_type_1 = __importDefault(require("./obj/car-type"));
const sedan = {
    id: "1",
    name: "sedan",
    brand: "Toyota",
    type: car_type_1.default.Sedan,
    engine: 4
};
const mobil = new car_1.default(sedan);
console.log(mobil);
