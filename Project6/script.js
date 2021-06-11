const toggle = document.getElementById('toggle');
const open = document.getElementById('signup');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
//Event Listners:
//1: Sow for Side bar
toggle.addEventListener('click',()=>{
    document.body.classList.toggle("show-nav")
})

//2: Show for signup form
open.addEventListener('click',()=> modal.classList.add('show-modal') );
//3: remove signup form by clicking close button
close.addEventListener('click',()=> modal.classList.remove('show-modal'));
//4: remove signup form by clicking at window 
window.addEventListener('click',e=>
e.target === modal ? modal.classList.remove('show-modal'):false
)