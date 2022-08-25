function getArray(items: any[]): any[] {
  return new Array().concat(items);
  //return [].concat(items); //same
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

myNumArr.push("Hi"); // OK
myStrArr.push(500); // OK

console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]

/** using generik   */

function getData<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let dadu = getData<number>([1, 2, 3, 4, 5]);
let pejudi = getData<string>(["Yuki", "Suho"]);

dadu.push(6); // OK
pejudi.push("Soya"); // OK

// dadu.push("Hi"); // Compiler Error
// pejudi.push(500); // Compiler Error

// console.log(dadu); // [100, 200, 300, 400, "Hi"]
// console.log(myStrArr2); // ["Hello", "World", "Hello TypeScript", 500]

/** source
 * https://www.tutorialsteacher.com/typescript/typescript-generic
 */

type Employee = {
  name: string;
  age: number;
  skils?: string[];
};
const employeee: Employee[] = getData<Employee>([
  {
    name: "cecep",
    age: 12,
  },
  {
    name: "Aicep",
    age: 15,
  },
]);
