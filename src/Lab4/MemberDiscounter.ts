module ShoppingCart {


export class MemberDiscounter implements IDiscounter {
    GetDiscount(price: number, qty: number, level: string) {
        if (level === 'VIP') {
            return 0.9;
        }
        else {
            return 1;
        }
    }
}

}