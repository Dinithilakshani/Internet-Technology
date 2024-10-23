const heading = document.getElementById("heanding");
console.log(heading.classList);

heading.classList.add('new class');
console.log(heading.classList);

heading.classList.remove('heading');
heading.classList.toggle('active');
console.log(heading.classList);
