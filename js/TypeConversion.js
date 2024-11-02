// Implicitly Type Conversion

let result = "the answer "+ 100;
console.log(typeof result)

let sum ='37 ' + 5;
console.log(typeof sum)

let diff ='37'-5;
console.log(typeof diff)

let multiply = '10'*2;
console.log(typeof multiply)

let divide = '12'/3;
console.log(typeof divide)


let remainder = '12'%3
console.log(typeof remainder)


// Explicity Type Conversion


let num1 = '100';
console.log(typeof num1)

let num2 = Number(num1)
console.log(num2)
console.log(typeof num2)


let num3 = Number('40px');
console.log(num3)
console.log(typeof num3)

let num4 = Number('hello');
console.log(num4)
console.log(typeof num4)

let num5 = Number(null)
console.log(num5)
console.log(typeof num5)

let num6 = Number (true)
console.log(num6)
console.log(typeof num6)

let num7 = Number (false)
console.log(num7)
console.log(typeof num7)

let num8 = Number (undefined)
console.log(num8)
console.log(typeof num8)

let num9 = parseInt('100')
console.log(num9)
console.log(typeof num9)

let num10 = parseInt('100.56')
console.log(num10)
console.log(typeof num10)