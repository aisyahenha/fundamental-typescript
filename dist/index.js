"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400);
myStrArr.push("Hello TypeScript");
myNumArr.push("Hi");
myStrArr.push(500);
console.log(myNumArr);
console.log(myStrArr);
function getData(items) {
    return new Array().concat(items);
}
let dadu = getData([1, 2, 3, 4, 5]);
let pejudi = getData(["Yuki", "Suho"]);
dadu.push(6);
pejudi.push("Soya");
const employeee = getData([
    {
        name: "cecep",
        age: 12,
    },
    {
        name: "Aicep",
        age: 15,
    },
]);
