console.log("attribute Modification");
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
  

link.setAttribute('href', 'https://www.facebook.com');
link.setAttribute('target' ,'_bank');
link.removeAttribute('target')

