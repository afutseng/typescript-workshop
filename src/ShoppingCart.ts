module ShoppingCart {

    export interface IDiscounter {
        Calculate(price: number, qty: number);
    }

    export class VipDiscounter implements IDiscounter {
        Calculate(price: number, qty: number) {
            let totalPrice = price * qty;
            if (totalPrice > 500) {
                return totalPrice * 0.8;
            }
            
            return totalPrice;
        }
    }

    export class NormalDiscounter implements IDiscounter {
        Calculate(price: number, qty: number) {
            let totalPrice = price * qty;
            if (totalPrice > 1000 && qty > 3) {
                return totalPrice * 0.85;
            }
            
            return totalPrice;
        }
    }

    export enum MemberLever {
        VIP,
        Normal
    }
    
    export class DiscounterFactory {
        static GetDiscounter(level: MemberLever) {
            if (level === MemberLever.VIP) {
                return new VipDiscounter();
            }
            else if (level === MemberLever.Normal) {
                return new NormalDiscounter();
            }

            return null;
        }
    }

    class ShoppingCart {
        CalculateDiscounterPrice(price: number, qty: number, level: MemberLever) {
            var discounter = DiscounterFactory.GetDiscounter(level);
            if (discounter !== null) {
                return discounter.Calculate(price, qty);
            }

            return price * qty;
        }
    }
}