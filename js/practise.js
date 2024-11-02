

let box = new Array[0,1,2,3]
console.log(box)

let Intavalid= setInterval(() => {
    const box = document.querySelector(".box")
    box.style.backgroundcolor="red";
  

    
}, 1000);


setTimeout(()=> {

    clearInterval(Intavalid)
},10500);


