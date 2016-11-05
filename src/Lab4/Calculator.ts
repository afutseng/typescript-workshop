module ShoppingCart {

export class Calculator {
    constructor(private discounterList: IDiscounter[]) {
    }

    Calculate(price: number, qty: number, level: string) {
        let totalPrice = price * qty;

        for (let discounter of this.discounterList) {
            var discount = discounter.GetDiscount(price, qty, level);

            totalPrice = totalPrice * discount;
        }

        return totalPrice;
    }
}

}