// import Vehicle from "./vehicle";

import CarType from "./car-type";
import Vehicle from "./vehicle";





/* cara dengan implement vehicle
//is null check di config ts jadikan false karena blm mau diisi dengan nilai
class Car implements Vehicle {
  id: string;
  name: string;
  brand: string;
  type: CarType;
  engine: number;
  isStarted?: boolean | undefined;
  
  constructor(car?: Car) {
    if (car) {
        
    
    this.id = car.id;
    this.name = car.name;
    this.brand = car.brand;
    this.type = car.type;
    this.isStarted=car.isStarted;
    }
    // super();
    
  }
startEngine():void{
    this.isStarted = true;

}
setName(name:string): void{
    this.name =name;
}
getName():string {
    return this.name;
}
}
export default Car;

   */
