// import Car from "./obj/car";
import CarType from "./obj/car-type";

//error ketika class car di implement vehicle
/*
const sedan  = {
  id: "1",
  name: "sedan",
  brand: "Toyota",
  type: CarType.Sedan,
  engine: 4
}*/
/*
//jadi langsung di buat
const sedan: Car = new Car();
sedan.id="1"
sedan.name="oto kacili"
sedan.brand="toyota"
sedan.type=CarType.Sedan,
sedan.engine=4

const mobil: Car = new Car(sedan);
console.log(mobil); 

/*
Can Manage All in tsconfig.json

data type:  string, 
            number,
            boolean, 
            null,
            nan,
            undefinied,
            any (unknown), 
            enum => harus pascal case, nilai default dimulai dari 0; 
            enum seperti sebuah tipe data yang dibuat sendiri,
            Union => beberapa tipe data dibolehkan


*/
/*
//string
let firstName: string = "Aisyah";
//boolean
let isSmart = true;
//number
let age = 22;

//enum
enum Color {
  RED,
  GREEN,
  BLUE,
}

console.log(Color.RED);
console.log(Color.GREEN);
console.log(Color.BLUE);

//union
let isMarried: string | boolean;
isMarried = "yes";
isMarried = true;

//tuple
const animals: [string, number] = ["Yak", 8];
//but tuple after declare not strict anymore but must number or string
animals.push("true");
animals.push("Udang", 99);
animals.push(25);

console.log(animals);

//object
const Employee = {
  name: "yusuf",
  age: 22,
  skills: ["Makan", "Mandi"],
};
//type alias
type Employee = {
  name: string;
  age: number;
  skills: string[];
};
const john: Employee = {
  name: "John",
  age: 25,
  skills: ["Ms Office"],
};

//function void /
function sayHay(name: string) {
  console.log(name);
}
sayHay("kamu");

//function
function sayHello(name: string): string {
  return `halooo ${name}`;
}
console.log(sayHello("Marwa"));
// operator ? for make oprtional param
function sayHalo(name?: string): string {
  if (name) return `halooo ${name}`;
  return `hay kamu`;
}
console.log(sayHalo());
*/
