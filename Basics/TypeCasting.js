//implicit type casting(type coeration)

let num = 20;
let str = '5'
let str1 = 'Hello'

console.log(num + str); //205

console.log(num - str); //15
console.log(num - str1); //NaN (Not a Number)
console.log(num * str); //100
console.log(num / str); //4
console.log(num ** str); //3200000
console.log(num % str); //0

//explicite type casting(type conversion)

//using Number() method to convert string to number
let num1 = '123';
console.log(typeof(num1));
let num2 = Number(num1);
console.log(typeof(num2));

//using parseInt()
let num3 = '8358'
console.log(typeof(num3));
let num4 = parseInt(num3)
console.log(typeof(num4));


//using parseFloat()
let num5 = 0.4857
let num6 = parseFloat(typeof(num5))
console.log(num6);





