"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("./obj/promise"));
const orders = [
    "kopi hitam",
    "kopi moka",
    "kopi putih",
    "Torabika",
    "Arabica",
];
const takeOrder = orders.map((order) => {
    return new promise_1.default().orderCofeeAsync(order);
});
