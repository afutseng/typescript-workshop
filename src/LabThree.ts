var a = 1;

const b = 2;
 //b = 3;// 取消註解這行

var c = 100;
for (var i = 0; i < 10; i++) {
    let c = i;
}
console.log('b = ', b, ' c =', c);


function Hello() {
    this.name = 'John';
    this.Say = () => {
        console.log(`Hello, ${this.name}`);
    }
    this.Say();
}
Hello();

var d = "String";
if (d) {







    console.log(d + '~~~~#~~~');
}

var count = 0;
do {
    count += 10;
} while (count < 100);

var dataList = ['a', 'b', 'c'];
for (var data of dataList) {
    console.log(data);
}


