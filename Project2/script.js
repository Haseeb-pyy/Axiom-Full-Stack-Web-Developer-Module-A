const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

let select = document.getElementById('select');




// Event Listniers:
// 1. Container
function updateSeats(){
     const wesi = document.querySelectorAll(.row .)
}
container.addEventListener('click', e =>{
     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
          e.target.classList.toggle('selected');
          updateSeats();
     }
})
















