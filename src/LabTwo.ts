
const a: boolean = true,
    b: boolean = 1 > 2,

    c: number = 5.2,
    d: number = +"1",

    e: string = "John 測試",
    f: string = 5 + "",
    h: string = `Hello, ${e}`;


enum SizeEnum {
    XL,

    L,

    M,

    S
}

//// Enum 轉數字
d = SizeEnum.XL;
//// Enum 轉文字
e = SizeEnum[SizeEnum.XL];


var g: any = 1;
g = "Test";
g = [];
    

console.log('a = ', a);
console.log('b = ', b);
console.log('c = ', c);
console.log('d = ', d);
console.log('e = ', e);
console.log('f = ', f);
console.log('g = ', g);
console.log('h = ', h);