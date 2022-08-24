import Car from "./obj/car";
import CarType from "./obj/car-type";
import Vehicle from "./obj/vehicle";


const sedan:Vehicle  = {
  id: "1",
  name: "sedan",
  brand: "Toyota",
  type: CarType.Sedan,
  engine: 4
}

// const sedan: Car = new Car();
// sedan.id="1"
// sedan.name="oto kacili"
// sedan.brand="toyota"
// sedan.type=CarType.Sedan,
// sedan.engine=4

const mobil: Car = new Car(sedan);
console.log(mobil); 

