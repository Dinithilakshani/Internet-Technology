// const savebtn = document.getElementById('btnSave');
// savebtn.addEventListener('click',function(){
//     alert('save button clicked');
// })
const savebtn = document.getElementById('btnSave');
savebtn.addEventListener('click',hendleClick)

function hendleClick(){
    alert('save btn clicked');
}

savebtn.removeEventListener('click',hendleClick());