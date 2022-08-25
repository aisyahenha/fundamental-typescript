"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cafe {
    constructor() { }
    orderCoffe(order, cb) {
        console.log(`mohon menungg pesanan ${order} sedang dibuat...`);
        setTimeout(() => {
            if (order === "tea")
                cb(`pesanan ${order} tidak ada`);
            else {
                const result = `Kopi ${order}`;
                console.log(`pesanan ${result} sudah selesai`);
                cb(null, result);
            }
        }, 2000);
    }
    callbackPromise(order, resolve, reject) {
        this.orderCoffe(order, (error, result) => {
            if (error)
                reject(new Error(error));
            else
                resolve(result);
        });
    }
    orderCofeeAsync(order) {
        return new Promise((resolve, reject) => {
            this.callbackPromise(order, resolve, reject);
        });
    }
}
exports.default = Cafe;
