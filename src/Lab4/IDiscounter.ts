module ShoppingCart {

export interface IDiscounter {
    GetDiscount(price: number, qty: number, level: string);
}

}