import Cafe from "./obj/promise";

const orders: string[] = [
  "kopi hitam",
  "kopi moka",
  "kopi putih",
  "Torabika",
  "Arabica",
  "tea",
];

/* untuk yang promise callback hell
// const takeOrder: Promise<string[]> = orders.map((order: string) => {
//   return new Cafe().orderCofeeAsync(order);
// });

// Promise.all(takeOrder)
// .then((result:string[])=>{
//   console.log(result);
  
// })
// .catch((error)=>{
//   console.error(error)
// })
*/
const cafe = new Cafe();

async function orderProcess(): Promise<string[]> {
  const result: string[] = [];
  for (const order of orders) {
    try {
      const takeOrder: string = await cafe.orderCofeeAsync(order);
      result.push(takeOrder);
    } catch (error) {
      console.log(`pesanan ${order} tidak berhasil karena ${error}`);
    }
  }
  return result;
}
orderProcess();
