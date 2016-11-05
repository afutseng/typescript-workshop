module ShoppingCart {

export class PriceDiscounter implements IDiscounter {
    GetDiscount(price: number, qty: number, level: string) {
        if (price * qty > 500) {
            return 0.9;
        }
        else {
            return 1;
        }
    }
}

}