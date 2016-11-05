module ShoppingCart {

export class QtyDiscounter implements IDiscounter {
    GetDiscount(price: number, qty: number, level: string) {
        if (qty > 4) {
            return 0.8;
        }
        else if (qty > 2) {
            return 0.9;
        }
        else {
            return 1;
        }
    }
}

}