class Cafe {
  constructor() {}

  orderCoffe(
    order: string,
    cb: (error: unknown, result?: string) => void
  ): void {
    console.log(`mohon menungg pesanan ${order} sedang dibuat...`);

    setTimeout(() => {
      if (order === "tea") cb(`pesanan ${order} tidak ada`);
      else {
        const result: string = `Kopi ${order}`;
        console.log(`pesanan ${result} sudah selesai`);
        cb(null, result);
      }
    }, 2000);
  }

  callbackPromise(order: string, resolve: any, reject: any): void {
    this.orderCoffe(order, (error?: any, result?: string) => {
      if (error) reject(new Error(error));
      else resolve(result);
    });
  }
  orderCofeeAsync(order: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.callbackPromise(order, resolve, reject);
    });
  }
}

export default Cafe;
