let str = 'Привет',
    sum = 123,
    num = 15.8,
    flag = true,
    txt = 'true';

console.log('1. Переменные и их типы:');
console.log('');
console.log (str, typeof (str));
console.log (sum, typeof (sum));
console.log (num, typeof (num));
console.log (flag, typeof (flag));
console.log (txt, typeof (txt));

let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;

a1 = 5 % 3;
a2 = 3 % 5;
a3 = 5 + '3';
a4 = '5' -  3;
a5 = 75 + 'кг';
a6 = 785 * 653;
a7 = 100 / 25;
a8 = 0 * 0;
a9 = 0 / 2;
a10 = 89 / 0;
a11 = 98 + 2;
a12 = 5 - 98;
a13 = (8 + 56 * 4) / 5;
a14 = (9 - 12) * 7 / (5 + 2);
a15 = +"123";
a16 = 1 || 0;
a17 = false || true;
a18 = true > 0;

console.log('');
console.log('2. Переменные и их типы (результаты вычислений):');
console.log('');
console.log (a1, typeof (a1));
console.log (a2, typeof (a2));
console.log (a3, typeof (a3));
console.log (a4, typeof (a4));
console.log (a5, typeof (a5));
console.log (a6, typeof (a6));
console.log (a7, typeof (a7));
console.log (a8, typeof (a8));
console.log (a9, typeof (a9));
console.log (a10, typeof (a10));
console.log (a11, typeof (a11));
console.log (a12, typeof (a12));
console.log (a13, typeof (a13));
console.log (a14, typeof (a14));
console.log (a15, typeof (a15));
console.log (a16, typeof (a16));
console.log (a17, typeof (a17));
console.log (a18, typeof (a18));

function SPryam(width, height) {
    return  width * height;
}

function VCilindra(pi = 3.14, radius = a7 / 2, height = 100 ) {

    return  (pi * (radius**2) * height).toFixed(2);

    // ((7.114).toFixed(2)); - округление до 100-х
    // (Math.ceil((7.114)*100)/100); - округление до 100-х (в большую сторону)

}

function SKruga(r) {

    return  3.14 * (r**2);
}

function STrap(a, b, h) {

    return  ((a + b) / 2) * h;
}

function Pereplata(s, p, years) {

    return  (s - ((s / 100 * p / 12) * (years * 12))).toFixed(2);
}

function uravneniye1(a, b) {

    return (16 / (a + 2)) + b;

}

function uravneniye2(a, b) {

    // (b * x) + (b * 15) = a + (6 * x)
    // (b * x) - (6 * x) = a - (b * 15)
    // x * (b - 6) = a - (b * 15)
    // x = (a - (b * 15)) / (b - 6)

    return (a - (b * 15)) / (b - 6);
}

function uravneniye3(a, b) {

    return 23780 / (3 + a + b);
}