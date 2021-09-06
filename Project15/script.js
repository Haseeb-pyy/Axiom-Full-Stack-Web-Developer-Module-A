// Get Dom Elements:
const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const pagination = document.getElementById('pagination');

const api = 'https://api.lyrics.ovh';
console.log(api);

// Functions:
async function searchSongs(term) {
    const res = await fetch(`${api}/suggest/${term}`);
    const data = await res.json();

}

// Event Listners:
form.addEventListener('submit',e=>{
    e.preventDefault();
    const searchTerm = search.value.trim();

    if( searchTerm ){
        searchSongs(searchTerm);
    }
    else{
        alert('please Enter Some value')
    }
})

