let fruits = ['apple','Banana', 'Orange']
console.log(fruits)

//1.2 using Array Constructor
let car = new Array ('BMW','Audi','Honda')
console.log(car);

let myarray = [10,'ddd' ,true,null,undefined,{name:'john',age:20},]
console.log(myarray);

//2 Accessing Element of an Array

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//3 Modifying Elements of an Array
fruits [0] ='Grapes'
console.log(fruits)

fruits.push("strawberry");
console.log(fruits)


let item =[{itemid: 1,name:'item1'},
    {itemid: 2,name:'item2'}
];


//4

console.log(fruits);
let poppedFruit = fruits.pop();
console.log(poppedFruit)
console.log(fruits)

//5
console.log(fruits)
let shiftFruit = fruits.shift();
console.log(shiftFruit)
console.log(fruits)


console.log(fruits)
fruits.unshift('apple')
console.log(fruits)

console.log(fruits)
fruits.splice(1,3)
console.log(fruits)

console.log(fruits)
fruits.splice(1,1,'Banana','Mango','Orange')
console.log(fruits)

console.log(fruits)
let selectedfruit = fruits.slice(1,3)
console.log(selectedfruit)
console.log(fruits)

