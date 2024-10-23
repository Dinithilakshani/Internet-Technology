const newdiv = document.createElement('div');
console.log(newdiv);
newdiv.id ='alert';
newdiv.className = 'alert complite';
newdiv.textContent = 'you have successfully ';
newdiv.style.backgroundColor= 'green';
newdiv.style.color='white';
newdiv.style.padding='20px';
newdiv.style.borderRadius='12px';
console.log(newdiv);

const card = document.querySelector('.card');
card.append(newdiv);
// card.append(newdiv,'additional text');
// card.insertBefore(newdiv,card.firstChild);
// card.removeChild(newdiv);

const newdiv2 = document.createElement('div');
console.log(newdiv2);
newdiv2 .id ='alert2';
newdiv2 .className = 'alert error';
newdiv2 .textContent = 'Error ';
newdiv2 .style.backgroundColor= 'red';
newdiv2 .style.color='white';
newdiv2 .style.padding='20px';
newdiv2 .style.borderRadius='12px';
console.log(newdiv2 );
const card2 = document.querySelector('.card');
card2.append(newdiv2);


card.replaceChild(newdiv2,newdiv);
const clonediv = newdiv2.cloneNode(true);
card.appendChild(clonediv);
console.log(card.hasChildNodes());
card.remove();





