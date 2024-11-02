//1.function Declaration
function greet(firstname){
    if(typeof firstname === 'undefined'){
        console.log('hello world')

    }else{
        console.log(`Hello ${firstname}`);

    }
    
}
greet()
//2
let greet2 = function(firstname){
    console.log(`hello ,${firstname}`);

}

greet2('john');

//3

let green3 = (firstname)=>{
    console.log(`hello ,${firstname}`);

}
green3('Doe')

let green4 = firstname =>     console.log(`hello ,${firstname}`);
green4('Doe')

let green5 = (firstname = 'Dinu') =>{

}
green5('kamal')

let sum = (...number)=>{
    number.forEach{ number=>console.log(number)}
}

sum(1,2,3,4,5,6,7,8);