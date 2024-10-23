console.log("DOM Selector file is loaded");
console.log(document);

//selector an element by id

const Heanding = document.getElementById("Heanding");
console.log(Heanding);


//Select an element by classname
const paragraph = document.getElementsByClassName("paragraph");
console.log("paragraph");

//selector an element by tagname

const tags = document.getElementsByTagName("h1");
console.log(tags)
 const querySelector =document.querySelector(".paragraph");
 console.log(querySelector);

 const allselector = document.querySelectorAll(".paragraph");
 console.log(allselector);

 const query = document.querySelector("bbi.h1");
 console.log(query);