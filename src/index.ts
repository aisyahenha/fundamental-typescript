import Cafe from "./obj/promise";

const orders: string[] = [
  "kopi hitam",
  "kopi moka",
  "kopi putih",
  "Torabika",
  "Arabica",
];
const takeOrder: Promise<string>[] = orders.map((order: string) => {
  return new Cafe().orderCofeeAsync(order);
});

// Promise.all(takeOrder)
// .then((result:string[])=>{
//   console.log(result);
  
// })
// .catch((error)=>{
//   console.error(error)
// })
