/*
import IDiscounter from './IDiscounter';
import QtyDiscounter from './QtyDiscounter';
import PriceDiscounter from './PriceDiscounter';
import MemberDiscounter from './MemberDiscounter';
import Calculator from './Calculator';
*/

module ShoppingCart {

interface IDiscounter {
    GetDiscount(price: number, qty: number, level: string);
}
 class QtyDiscounter implements IDiscounter {
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
 class PriceDiscounter implements IDiscounter {
    GetDiscount(price: number, qty: number, level: string) {
        if (price * qty > 500) {
            return 0.9;
        }
        else {
            return 1;
        }
    }
}
 class MemberDiscounter implements IDiscounter {
    GetDiscount(price: number, qty: number, level: string) {
        if (level === 'VIP') {
            return 0.9;
        }
        else {
            return 1;
        }
    }
}
 class Calculator {
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


// ================================================================================================
let discounterList: IDiscounter[] = [new QtyDiscounter(), new       PriceDiscounter(), new MemberDiscounter()];
let calculator = new Calculator(discounterList);

const n1 = calculator.Calculate(300, 2, "Normal");
const v1 = calculator.Calculate(100, 4, "VIP");
console.log('done', n1, v1);

}