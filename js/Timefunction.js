// 

let counter = 0;
let Intavalid= setInterval(() => {
    counter ++;
    console.log("number" ,counter)
    
}, 1000);

setTimeout(()=> {

    clearInterval(Intavalid)
},10500);

