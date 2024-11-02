// primitive datatype

//1.1 Number

let num = 10;
console.log(num)
console.log(typeof num)

let num2 = 10.59;
console.log(typeof num2)


//1.2string

let customername = "hesh";
console.log(customername)
  

//1.3 boolean

let iscustomer = true;
let isemployee = false;

console.log( typeof iscustomer);
console.log(typeof isemployee);


//1.4undefined
 
let x ;
console.log(x)
console.log(typeof x)

//1.5Null

let y = null
console.log(y)
console.log(typeof y)

//1.6 Symbol

let symbol = Symbol("symbol");
console.log(symbol);
console.log(typeof symbol)

//reference datatype 

//2.1 object

let person = {
    firstName:"dinu",
    LastName :"palliyaguru",
    age :22
}

console.log(person)
console.log(typeof person)

//2.2 Array 

let colors = [ 'red ', ' green', 'yellow']

console.log(colors)
console.log(typeof colors)
console.log(Array.isArray (person));

//2.3 function

function green(){
console.log("hello world");
}
green();
console.log(typeof green)

//2.4 Date

let today = new Date();
console.log(today);
console.log(typeof today)