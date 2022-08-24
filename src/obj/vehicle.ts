import CarType from "./car-type";
interface Vehicle {
    id: string;
    name: string;
    brand: string;
    type: CarType;
    engine: number;
    isStarted?: boolean;
}

export default Vehicle;     