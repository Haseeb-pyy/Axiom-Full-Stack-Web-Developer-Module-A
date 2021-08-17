const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieContainer = document.getElementById('movie');

populateUI();

let movieIndex = movieContainer.value;


function updateCount() {
     const seatIndex = document.querySelectorAll('.row .seat.selected');
     // local storage
     const seatArray = [...seatIndex].map(seat => [seats].indexOf(seat));

     const seatLength = seatIndex.length;
     
     count.innerText = seatLength;
     total.innerText = seatLength * movieIndex;

     localStorage.setItem('selectedIndex',JSON.stringify(seatArray))
}

function setmovieData(MovieIndex,moviePrice) {
     localStorage.setItem('SelectedMovieIndex',MovieIndex)
     localStorage.setItem('SelectedMoviePrice',moviePrice)
}

function populateUI() {
     // Get selected seats from local storage and convert from string to array
     const seatIndex = JSON.parse(localStorage.getItem('seatIndex'));
     // check if selected seats is not null and not empty, and if true, then loop through all seats and mark matching seats with class selected
     if(seatIndex !== null && seatIndex.length > 0) {
         seats.forEach((seat, index) => {
             if(seatIndex.indexOf(index) > -1) {
                 seat.classList.add('selected')
             }
         })
     };
     // Get the selected movie index from local storage
     const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
     // Using the value from local storage, select the movie on page load
     if(selectedMovieIndex !== null) {
         movieSelect.selectedIndex = selectedMovieIndex;
     }
 }


//Event Listners:
// 1.
container.addEventListener('click',e=>{
     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
          e.target.classList.toggle('selected');
     }

     updateCount();
});

movieContainer.addEventListener('change', e=>{
     movieIndex = e.target.value;
     updateCount();
     setmovieData(e.target.selectedIndex,e.target.value);
})

updateCount();


