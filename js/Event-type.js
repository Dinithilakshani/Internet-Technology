const box = document.querySelector('.box');
//single event
box.addEventListener('click');
console.log('your click the box ');

//double event
box.addEventListener('dbclick', function(){
    console.log('you double clicked the box');

})

//mouse-down event

box.addEventListener('mousedown', function(){
    console.log('Mouse pressed...');

})

//mouse-up event

box.addEventListener('mouseup', function(){
    console.log('Mouse released...');

})

//mouse-move event

box.addEventListener('mousemove', function(){
    console.log('Mouse moved...');

})

//mouse-over event

box.addEventListener('mouseout', function(){
    console.log('mouse over...');

})