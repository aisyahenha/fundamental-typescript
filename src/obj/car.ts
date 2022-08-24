// import Vehicle from "./vehicle";

import CarType from "./car-type";
import Vehicle from "./vehicle";

class Car {
  private id: string;
  private name: string;
  private brand: string;
  private type: CarType;
  private engine: number;
  private isStarted?: boolean | undefined;

  constructor(vehicle: Vehicle) {
    if (vehicle) {
      this.id = vehicle.id;
      this.name = vehicle.name;
      this.brand = vehicle.brand;
      this.type = vehicle.type;
      this.isStarted = vehicle.isStarted;
    }
    // super();
  }
  startEngine(): void {
    this.isStarted = true;
  }
  setName(name: string): void {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}
export default Car;
